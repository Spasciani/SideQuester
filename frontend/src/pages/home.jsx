import { useState, useEffect } from "react"
import axios from "axios"
import QuestsDisplay from "../components/quest-display";

var DATABASE = [{
    msg: "hello world",
    type: "please",
    time: "i beg"
  }];

export default function Home () {
    const [selectData, setSelectData] = useState('')
    var [quests, setQuests] = useState([]);
    var [questsLoaded, setQuestsLoaded] = useState(false);
  
      //Insert into firebase

    useEffect(function() {
        console.log(DATABASE);
        setQuests(DATABASE);

        //Change loading status
        setQuestsLoaded(true);
    }, []);
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
           // setSelectData(res.data)
           if(isLoggedIn){
               setSelectData(res.data)
               console.log(displayName)
               displayName = selectData
           }else{
       
           }
        }
    })
    .catch(err => console.log(err))
   }



    
    return (
        <>
            <div>
                <h2> Home Page </h2>
                <label>Hello {displayName}</label>
                <QuestsDisplay quests={quests} questsLoaded={questsLoaded} />
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