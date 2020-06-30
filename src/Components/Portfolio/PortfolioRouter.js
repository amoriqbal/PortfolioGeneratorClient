import React, {useEffect,useState} from 'react'
import axios from 'axios'
import Templates from '../../TemplateNameMap'

const PortfolioRouter=()=>{
  const [uname,setUname]=useState("")
  const [udata,setUdata]=useState({})
  const [template,setTemplate]=useState("TEMPLATE_BASE")
  useEffect(()=>{
    console.log("PATH",window.location.pathname)
    var unameParse=async()=>{
      var path=/portfolio.*/i.exec(window.location.pathname)
      console.log(path)
      if(path.length)
        await setUname( path[0].split('/')[1])
      else 
        await setUname("noname")
    }
    unameParse()
  })

  useEffect(()=>{ 
    var fetchUserData= async ()=>{
      console.log("UNAME",uname)
      if(!uname || uname==="")
        return
      var data=await axios.get(`/api/fetchuserdata/${uname}`)
      console.log("DATA",data.data)
      await setUdata(data.data)
      console.log("UDATA",udata)
    }
    fetchUserData()
  },[uname])

  useEffect(()=>{
    var setTemp= async()=>{
        console.log("UPDATED UDATA",udata)
        if(udata&&udata.meta&&udata.meta.template)
            await setTemplate(udata.meta.template)
        else
            await setTemplate('TEMPLATE_BASE')
    }
    setTemp()
  },[udata])

  return (
    Templates[template]({userdata:udata})
  );
}

export default PortfolioRouter
