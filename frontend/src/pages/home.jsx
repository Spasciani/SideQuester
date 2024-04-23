import { useState, useEffect } from "react"
import axios from "axios"
import QuestsDisplay from "../components/quest-display";

var DATABASE = [{
    name: "name",
    phoneNumber: "phoneNumber",
    description: "description",
    reward: "reward",
    place: "place",
    image: "image"
  }];

export default function Home () {
    const [selectData, setSelectData] = useState('')
    var [quests, setQuests] = useState([]);
    var [questsLoaded, setQuestsLoaded] = useState(false);
  
      //Insert into firebase

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
        await axios.get('http://localhost:4000/posts/all')
            .then(res =>{
                if(processing){
                    setSelectData((res.data))
                }
            })
            .catch(err => console.log(err))
    }

    const emailDisplay = window.localStorage.getItem("token")

    
    return (
        <>
            <div>
                <h2> Home Page </h2>
                <label>Hello {emailDisplay}</label>
                <QuestsDisplay quests={quests} questsLoaded={questsLoaded} />
            </div>
        </>
    )
};
