import { useState, useEffect } from "react"
import axios from "axios"

export default function Home () {
    const [selectData, setSelectData] = useState('')
    
    /*
    const handleSubmit = (e) => {
        e.preventDefault()
        window.localStorage.removeItem("token");
        window.localStorage.removeItem("loggedIn")

    }
    */

    useEffect( () => {
        let processing = true
        axiosFetchData(processing)
        return () => {
            processing = false
        }
    },[])

    const isLoggedIn = window.localStorage.getItem("loggedIn");
    const displayName = ", Please Login";

   const axiosFetchData = async(processing) =>{
    await axios.get('http://localhost:4000/users/UserName')
    .then(res =>{
        if(processing){
           setSelectData((res.data))
        }
    })
    .catch(err => console.log(err))
   }



    
    return (
        <>
            <h2> Home Page </h2>
            <label>Hello {displayName}</label>


            
        </>
    )
};

/* 
            <form className="logout-form" onSubmit={handleSubmit}>
            <label>Hello</label>

            <button type="submit">Log Out</button>
            </form>
*/