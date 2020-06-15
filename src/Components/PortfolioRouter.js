import React, {useEffect,useState} from 'react'
import axios from 'axios'
import Templates from './TemplateNameMap'
const PortfolioRouter=()=>{
  const [uname,setUname]=useState("")
  const [udata,setUdata]=useState({})
  const [template,setTemplate]=useState(<h3>Loading...</h3>)
  useEffect(()=>{
    async function unameParse(){
      var path=/portfolio.*/i.exec(window.location.pathname)
      console.log(path)
      if(path)
        await setUname( path[0].split('/')[1])
      else 
        await setUname("noname")
    }
    unameParse()
  })

  useEffect(()=>{ 
    async function fetchUserData(){
      await setUdata(await axios.get(`/api/fetchuserdata/${uname}`))
    }
    fetchUserData()
  },[uname])

  useEffect(()=>{
    async function setTemp(){
        if(udata&&udata.meta&&udata.meta.template)
            await setTemplate(Templates[udata.meta.template])
        else
            await setTemplate(Templates['TEMPLATE_BASE'])
    }
    setTemp()
  },[udata])

  return (
    <template userdata={udata}/>
  );
}

export default PortfolioRouter