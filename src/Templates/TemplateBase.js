import React from 'react'

const TemplateBase=(props)=>{
    var {userdata}=props
    if(!userdata){
        return(<h3>Loading...</h3>)
    }
    return(
        <>
        <h1>{(userdata&&userdata.meta&&userdata.meta.name?userdata.meta.name:"MyName")}</h1>
        <p>{(userdata&&userdata.meta&&userdata.meta.about?userdata.meta.about:"")}</p>
        <div>
            <h3>Qualifications</h3>
            <table>
                <thead>
                    <tr><th>Name</th><th>Field</th><th>Start Date</th><th>End Date</th><th>Grade</th><th>Institution</th></tr>
                </thead>
                <tbody>
                {
                    (userdata && userdata.meta && userdata.meta.qualifications.map((value,index)=>
                        (<tr key={index.toString()}>
                            <td>{value.name}</td>
                            <td>{value.field}</td>
                            <td>{value.startDate.toString()}</td>
                            <td>{value.endDate.toString()}</td>
                            <td>{value.grade}</td>
                            <td>{value.institution}</td>
                        </tr>)))
                }
                </tbody>
            </table>

            <h3>Work Experience</h3>
            <table>
                <thead>
                    <tr><th>Description</th><th>Start Date</th><th>End Date</th><th>Institution</th></tr>
                </thead>
                <tbody>
                {
                    (userdata && userdata.meta && userdata.meta.works.map((value,index)=>
                        (<tr key={index.toString()}>
                            <td>{value.description}</td>
                            <td>{value.startDate.toString()}</td>
                            <td>{value.endDate.toString()}</td>
                            <td>{value.institution}</td>
                        </tr>)))
                }
                </tbody>
            </table>

            <h3>Achievements</h3>
            <table>
                <thead>
                    <tr><th>Description</th><th>Date</th></tr>
                </thead>
                <tbody>
                {
                    (userdata && userdata.meta && userdata.meta.achievements.map((value,index)=>(<tr key={index.toString()}><td>{value.description}</td><td>{value.date.toString()}</td></tr>)))
                }
                </tbody>
            </table>
        </div>
        </>
    )
}

export default TemplateBase
