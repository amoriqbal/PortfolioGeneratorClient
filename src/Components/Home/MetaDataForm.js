import React,{ useState, useEffect } from "react"
import Axios from "axios"
import moment from 'moment'

export default function(){
    const [userdata,setUserdata]=useState(null)
    const [achievements,setAchievements]=useState([])
    const [qualifications,setQualifications]=useState([])
    const [works,setWorks]=useState([])
    const [name,setName]=useState('')
    const [about,setAbout] = useState('')
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
                await setAchievements(data.data.meta.achievements||[])
                await setQualifications(data.data.meta.qualifications||[])
                await setWorks(data.data.meta.works||[])
                await setName(data.data.meta.name||"")
                await setAbout(data.data.meta.about||"")
            }
        }
        
        updateUserdata()
    },[])
    const submitUserdata=async()=>{
        //await setUserdata({...{meta:{...userdata.meta,...{achievements:achievements}}}})
        var sendData=JSON.parse(JSON.stringify(userdata))
        sendData.meta={...{name,about,achievements,works,qualifications},}
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
            <h3>
            <label htmlFor='name'>Name</label>
            <input 
                name="name"
                value={name}
                type='textarea'
                onChange={async (e)=>{
                    await setName(e.target.value)
                }}
            />
            </h3>
            <label htmlFor='about'>About</label>
            <input 
                name="about"
                value={about}
                type='textarea'
                onChange={async (e)=>{
                    await setAbout(e.target.value)
                }}
            />


        {/*Qualifications*/}
        <div>
            <h3>Qualifications</h3>
            <table>
                <thead>
                    <tr><th>Name</th><th>Field</th><th>Start Date</th><th>End Date</th><th>Grade</th><th>Institution</th></tr>
                </thead>
                <tbody>
                {
                    (qualifications && qualifications.map((value,index)=>
                        (<tr key={index.toString()}>
                            <td>
                                <input 
                                    name={`qualification_name_${index}`} 
                                    type='textarea'
                                    value={value.name} 
                                    onChange={(e)=>{
                                        e.preventDefault()
                                        var updatedQualifications=JSON.parse(JSON.stringify(qualifications))
                                        updatedQualifications[index]={...{name:e.target.value}}
                                        setQualifications(updatedQualifications)
                                    }}
                                />
                            </td>
                            <td>
                                <input 
                                    name={`qualification_field_${index}`} 
                                    type='textarea'
                                    value={value.field} 
                                    onChange={(e)=>{
                                        e.preventDefault()
                                        var updatedQualifications=JSON.parse(JSON.stringify(qualifications))
                                        updatedQualifications[index]={...{field:e.target.value}}
                                        setQualifications(updatedQualifications)
                                    }}
                                />
                            </td>
                            <td>
                                <input 
                                    name={`qualification_startDate_${index.toString()}`} 
                                    type='date'
                                    value={moment(value.startDate).format('YYYY-MM-DD')} 
                                    onChange={(e)=>{
                                        e.preventDefault()
                                        var updatedQualifications=JSON.parse(JSON.stringify(qualifications))
                                        updatedQualifications[index]={...{startDate:e.target.value}}
                                        setQualifications(updatedQualifications)
                                    }}
                                />
                            </td>
                            <td>
                                <input 
                                    name={`qualification_endDate_${index.toString()}`} 
                                    type='date' 
                                    value={moment(value.endDate).format('YYYY-MM-DD')} 
                                    onChange={(e)=>{
                                        e.preventDefault()
                                        var updatedQualifications=JSON.parse(JSON.stringify(qualifications))
                                        updatedQualifications[index]={...{endDate:e.target.value}}
                                        setQualifications(updatedQualifications)
                                    }}
                                />
                            </td>
                            <td>
                                <input 
                                    name={`qualification_grade_${index}`} 
                                    type='textarea'
                                    value={value.grade} 
                                    onChange={(e)=>{
                                        e.preventDefault()
                                        var updatedQualifications=JSON.parse(JSON.stringify(qualifications))
                                        updatedQualifications[index]={...{grade:e.target.value}}
                                        setQualifications(updatedQualifications)
                                    }}
                                />
                            </td>
                            <td>
                                <input 
                                    name={`qualification_institution_${index}`} 
                                    type='textarea'
                                    value={value.institution} 
                                    onChange={(e)=>{
                                        e.preventDefault()
                                        var updatedQualifications=JSON.parse(JSON.stringify(qualifications))
                                        updatedQualifications[index]={...{institution:e.target.value}}
                                        setQualifications(updatedQualifications)
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
                    setQualifications(qualifications.concat([{date:new Date(10,10,10),description:"New Qualification"}]))
                }}>
                Add Qualification
            </button>
        </div>
        {/*Qualifications*/}
        

        {/*Works*/}
        <div>
            <h3>Work Experience</h3>
            <table>
                <thead>
                    <tr><th>Description</th><th>Start Date</th><th>End Date</th><th>Institution</th></tr>
                </thead>
                <tbody>
                {
                    (works && works.map((value,index)=>
                        (<tr key={index.toString()}>
                            <td>
                                <input 
                                    name={`work_description_${index}`} 
                                    type='textarea'
                                    value={value.description} 
                                    onChange={(e)=>{
                                        e.preventDefault()
                                        var updatedWorks=JSON.parse(JSON.stringify(works))
                                        updatedWorks[index]={...{description:e.target.value}}
                                        setWorks(updatedWorks)
                                    }}
                                />
                            </td>
                            <td>
                                <input 
                                    name={`work_startDate_${index.toString()}`} 
                                    type='date' 
                                    value={moment(value.startDate).format('YYYY-MM-DD')} 
                                    onChange={(e)=>{
                                        e.preventDefault()
                                        var updatedWorks=JSON.parse(JSON.stringify(works))
                                        updatedWorks[index]={...{startDate:e.target.value}}
                                        setWorks(updatedWorks)
                                    }}
                                />
                            </td>

                            <td>
                                <input 
                                    name={`work_endDate_${index.toString()}`} 
                                    type='date' 
                                    value={moment(value.endDate).format('YYYY-MM-DD')} 
                                    onChange={(e)=>{
                                        e.preventDefault()
                                        var updatedWorks=JSON.parse(JSON.stringify(works))
                                        updatedWorks[index]={...{endDate:e.target.value}}
                                        setWorks(updatedWorks)
                                    }}
                                />
                            </td>

                            <td>
                                <input 
                                    name={`work_institution_${index}`} 
                                    type='textarea'
                                    value={value.institution} 
                                    onChange={(e)=>{
                                        e.preventDefault()
                                        var updatedWorks=JSON.parse(JSON.stringify(works))
                                        updatedWorks[index]={...{institution:e.target.value}}
                                        setWorks(updatedWorks)
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
                    setWorks(works.concat([{startDate:new Date(10,10,10),endDate:new Date(10,10,10),description:"New Work"}]))
                }}>
                Add Work
            </button>
        </div>
        
        {/*Achievements*/}
        <div>
            <h3>achievements</h3>
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
                                        var updatedAchievements=JSON.parse(JSON.stringify(achievements))
                                        updatedAchievements[index]={...{description:e.target.value}}
                                        setAchievements(updatedAchievements)
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
                                        var updatedAchievements=JSON.parse(JSON.stringify(achievements))
                                        updatedAchievements[index]={...{date:e.target.value}}
                                        setAchievements(updatedAchievements)
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
                    setAchievements(achievements.concat([{date:new Date(10,10,10),description:"New Achievement"}]))
                }}>
                Add Achievement
            </button>
        </div>
        {/*Achievements*/}

        <button 
            onClick={(e)=>{
                submitUserdata()

            }}>
            Submit
        </button>
        </>
    )
}


