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

    useEffect( () => {
        let processing = true
        console.log(quests)
        axiosFetchData(processing)
        setQuestsLoaded(true)
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
                    //setSelectData((res.data))
                    setQuests(res.data)
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
                <table>
                    <thead>
                        <tr>
                            <th>
                                Name
                            </th>
                            <th>
                                Phone Number
                            </th>
                            <th>
                                Description
                            </th>
                            <th>
                                Reward
                            </th>
                            <th>
                                Place
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            quests.map(quest =>{
                                return <tr>
                                    <td>{quest.name}</td>
                                    <td>{quest.phoneNumber}</td>
                                    <td>{quest.description}</td>
                                    <td>{quest.reward}</td>
                                    <td>{quest.place}</td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
};
