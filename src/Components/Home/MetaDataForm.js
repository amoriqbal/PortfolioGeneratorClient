import React,{ useState, useEffect } from "react"
import Axios from "axios"
import moment from 'moment'

export default function(){
    const [userdata,setUserdata]=useState(null)
    const [achievements,setAchievemets]=useState([])
    useEffect(()=>{       
        const updateUserdata= async()=>{
            var res=await Axios.get('/api/auth/current_user')
            if(!res || !res.data || !res.data.uname){
                alert("Something is wrong... Please sign in again")
                window.location.replace('/login')
                return
            }
            else{
                var uname=res.data.uname
                var data=await Axios.get(`/api/fetchuserdata/${uname}`)
                await setUserdata(data.data)
                await setAchievemets(data.data.meta.achievements)
            }
        }
        
        updateUserdata()
    },[])
    const submitUserdata=async()=>{
        //await setUserdata({...{meta:{...userdata.meta,...{achievements:achievements}}}})
        var sendData=JSON.parse(JSON.stringify(userdata))
        sendData.meta.achievements=achievements
        var res=await Axios.post('/api/updateuserdata',{
            meta:sendData.meta
        })
        if(res.status===200){
            window.location.href=`/portfolio/${userdata.uname}`
        }else{
            alert("something went wrong")
        }
    }
    if(!userdata){
        return(<h3>Loading...</h3>)
    }
    return(
        <>
        <h1>{(userdata&&userdata.meta&&userdata.meta.name?userdata.meta.name:"noname")}</h1>
        <div>
            <table>
                <thead>
                    <tr><th>Description</th><th>Date</th></tr>
                </thead>
                <tbody>
                {
                    (achievements && achievements.map((value,index)=>
                        (<tr key={index.toString()}>
                            <td>
                                <input 
                                    name={`description_${index}`} 
                                    type='textarea'
                                    value={value.description} 
                                    onChange={(e)=>{
                                        e.preventDefault()
                                        var updatedAchievemets=JSON.parse(JSON.stringify(achievements))
                                        updatedAchievemets[index]={...{description:e.target.value}}
                                        setAchievemets(updatedAchievemets)
                                    }}
                                />
                            </td>
                            <td>
                                <input 
                                    name={`date_${index.toString()}`} 
                                    type='date' 
                                    value={moment(value.date).format('YYYY-MM-DD')} 
                                    onChange={(e)=>{
                                        e.preventDefault()
                                        var updatedAchievemets=JSON.parse(JSON.stringify(achievements))
                                        updatedAchievemets[index]={...{date:e.target.value}}
                                        setAchievemets(updatedAchievemets)
                                    }}
                                />
                            </td>
                        </tr>)
                    ))
                }
                </tbody>
            </table>
            <button 
                onClick={(e)=>{
                    e.preventDefault()
                    setAchievemets(achievements.concat([{date:new Date(10,10,10),description:"New Achievement"}]))
                }}>
                Add Achievement
            </button>
        </div>
        <button 
            onClick={(e)=>{
                submitUserdata()
            }}>
            Submit
        </button>
        </>
    )
}


