import React from 'react'

export default function TemplateBase(userdata){
    return(
        <>
        <h1>{userdata.meta.name}</h1>
        <div>
            <table>
                <tr><th>Description</th><th>Date</th></tr>
                {
                    userdata.meta.achievements.map((value)=>(<tr><td>{value.description}</td><td>{value.date.toString()}</td></tr>))
                }
            </table>
        </div>
        </>
    )
}