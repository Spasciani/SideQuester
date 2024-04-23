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
