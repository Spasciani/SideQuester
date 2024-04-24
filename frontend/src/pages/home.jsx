import { useState, useEffect } from "react"
import axios from "axios"
import { Link, useNavigate } from 'react-router-dom'
import QuestsDisplay from "../components/quest-display"

const DATABASE = [{
    id : "id",
    email: "email",
    name: "name",
    phoneNumber: "phoneNumber",
    description: "description",
    reward: "reward",
    place: "place",
    longitude: 1.0,
    latitude: 1.0,
    image: "image"
  }];

export default function Home () {
    const navigate = useNavigate();
    const [selectData, setSelectData] = useState('')
    var [quests, setQuests] = useState([]);
    var [questsLoaded, setQuestsLoaded] = useState(false);
    const [username, setUsername] = useState('')

    const email = window.localStorage.getItem("token")
    useEffect( () => {
        let processing = true
        console.log(quests)
        axiosFetchQuests(processing)
        axiosFetchUser(processing)

        return () => {
            processing = false
        }
    },[])

    const axiosFetchUser = async(processing) => {
        const getData = {
          email: window.localStorage.getItem("token")
        }
        await axios.post('http://localhost:4000/users/curloggedin', getData)
            .then(res => {
                if(processing) {
                    setUsername(res.data)
                }
            })
            .catch(err => console.log(err))
    }

    const axiosFetchQuests = async(processing) =>{
        await axios.get('http://localhost:4000/posts/all')
            .then(res =>{
                if(processing){
                    //setSelectData((res.data))
                    setQuests(res.data)
                    setQuestsLoaded(true)
                }
            })
            .catch(err => console.log(err))
    }
    const handleQuestClick = (quest) => {
        navigate('/quest-confirmation', { state: { name: quest.name, phoneNumber: quest.phoneNumber, description: quest.description, reward: quest.reward, place: quest.place, longitude: quest.longitude, latitude: quest.latitude, image: null } });
    };

    if (email) {
        return (
        <>
            <div>
                <h2> Quests </h2>
                <label>Hello {username}! Here are all the available quests: </label>
                <table>
                    <thead>
                    <tr>
                        <th>
                            Link
                        </th>
                        <th>
                            Name
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
                            return<tr>
                                <a onClick={() => handleQuestClick(quest)}>View</a>
                                    <td>{quest.name}</td>
                                    <td>{quest.description}</td>
                                    <td>{quest.reward}</td>
                                    <td>{quest.place}</td>
                            </tr>
                            //<QuestsDisplay quests={quests} questsLoaded={questsLoaded} />
                        })
                    }
                    </tbody>
                </table>
            </div>
        </>
            //     <>
            //     <div>
            //     <h2> Quests </h2>
            //     <label> Hello, {username}! Here are all the available quests: </label>
            //     <QuestsDisplay quests = {quests} questsLoaded={questsLoaded} />
            // </div>
            // </>
        )
    } else {
        return (
        <>
            <div>
                <h2> Quests </h2>
                <label>Hello, please login to view all quests! </label>
            </div>
        </>
        )
    }

};
