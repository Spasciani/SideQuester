import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios"

//Post information
export const PostQuest = () => {
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [description, setDescription] = useState('');
    const [reward, setReward] = useState('');
    const [place, setPlace] = useState('');
    const placeInputRef = useRef(null);
    const [image, setImage] = useState(null);
    const [error, setError] = useState('')
    const navigate = useNavigate();
    
    useEffect(() => {
        if (!placeInputRef.current) return;

        const autocomplete = new window.google.maps.places.Autocomplete(placeInputRef.current);
        autocomplete.setFields(['address_components', 'geometry', 'name']);
        autocomplete.addListener('place_changed', () => {
            const place = autocomplete.getPlace();
            if (place.geometry) {
                setPlace(place.name);  
            }
        });
    }, []);
    //button pressed when sent
    const handleSubmit = (e) => {
        e.preventDefault();
        axiosPostData()
        console.log(name, phoneNumber, description, reward, place);
        if (image) {
            console.log('Image name:', image.name);
        }
        navigate('/quest-confirmation', { state: { name, phoneNumber, description, reward, place } });
    };
    const handleImageChange = (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0]); 
        } else {
            setImage(null);  
        }
    };

    //Handle sending the data to DB
    const axiosPostData = async() => {
        const postData = {
            name: name,
            phoneNumber: phoneNumber,
            description: description,
            reward: reward,
            place: place,
            image: image   
        }
        //await axios.post('http://localhost:4000/users/send', postData) ;/Send would be if we have an action
        if (!name || !phoneNumber || !description || !reward || !place) {
            setError(<p className="required">Please fill out all credentials.</p>)
        } else {
            await axios.post('http://localhost:4000/posts/upload', postData)
                .then(res => setError(<p className = "success">{res.data}</p>))
        }
    }

    return (
        <div className="quest-container">
            <h2>Post Your Quest!</h2>
            <form className="quest-form" onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="name"
                    placeholder="Your Name"
                    id="name"
                    name="name"
                />

                <label htmlFor="phoneNumber">Phone Number</label>
                <input
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    type="tel"
                    placeholder="Your Phone Number"
                    id="phoneNumber"
                    name="phoneNumber"
                />

                <label htmlFor="description">Description</label>
                <input
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Describe your quest"
                    id="description"
                    name="description"
                ></input>
                 <label htmlFor="place">Place</label>
                <input
                    ref={placeInputRef}
                    value={place}
                    onChange={(e) => setPlace(e.target.value)}
                    placeholder="What store would you like your item from?"
                    id="place"
                    name="place"
                ></input>

            <label htmlFor="reward">Reward</label>
                <input
                    value={reward}
                    onChange={(e) => setReward(e.target.value)}
                    placeholder="What is your reward?"
                    id="reward"
                    name="reward"
                    
                ></input>
            <label htmlFor="image">Optional Image Upload:</label>
                <input
                    type="file"
                    id="image"
                    name="image"
                    accept="image/*"
                    onChange={handleImageChange}
                    style={{ marginBottom: '20px' }}
                />
                <button type="submit" style={{position: 'relative'}}>Post Quest</button>
            </form>
            <Link to="/" className='link-btn'>Go back to home</Link>
        </div>
    );
};
