import { useState, useEffect } from "react"
import axios from "axios"

export default function Home () {
    /*
    const [selectData, setSelectData] = useState([])
    const [displayName, setDisplayName] = useState('')
    
    

    useEffect( () => {
        let processing = true
        axiosFetchData(processing)
        return () => {
            processing = false
        }
    },[])

    const isLoggedIn = window.localStorage.getItem("loggedIn");
 


   const axiosFetchData = async(processing) =>{
    await axios.get('http://localhost:4000/users/UserName')
    .then(res =>{
        if(processing){
           // setSelectData(res.data)
           if(isLoggedIn){
               setSelectData(res.data)
               //let displayName = selectData
               setDisplayName(res.data)
               //console.log(displayName)
               //setdisplayName = selectData
           }else{
            //displayName = ", Please Login"
           }
        }
    })
    .catch(err => console.log(err))
   }

  */
 const emailDisplay = window.localStorage.getItem("token")

    
    return (
        <>
            <div>
            <h2> Home Page </h2>
            <label>Hello {emailDisplay}</label>
            </div>

        </>
    )
};

/* 
            <form className="logout-form" onSubmit={handleSubmit}>
            <label>Hello</label>

            <button type="submit">Log Out</button>
            </form>
*/