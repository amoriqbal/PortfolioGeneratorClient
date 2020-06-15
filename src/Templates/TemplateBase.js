import React from 'react'

const TemplateBase=(props)=>{
    var {userdata}=props
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
                    (userdata && userdata.meta && userdata.meta.achievements.map((value,index)=>(<tr id={index}><td>{value.description}</td><td>{value.date.toString()}</td></tr>)))
                }
                </tbody>
            </table>
        </div>
        </>
    )
}

export default TemplateBase
