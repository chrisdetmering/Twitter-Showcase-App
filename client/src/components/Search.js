import React from 'react'
import axios from 'axios';
import { useState } from 'react';

const Search = () => {
    const [input, setInput] = useState('');
    const [user, setUser] = useState([]);

    const updateInput = (e) => {
        setInput(e.target.value);
        console.log(input);
    }

    const handleClick = (e) => {
        e.preventDefault();

        const param = input;

        axios
        .get(`/api/tweets?search=${param}`)
        .then((res) => setUser(res.data))
        .catch((err) => console.log(err))

        console.log(user);
        
    }


   
    
    return (
        <div>
            <div>
                <input id="input" type="text" placeholder="Search here" onChange={updateInput} value={input} />

                <div class="search-buttons">
                    <button id="button-user" onClick={handleClick} type="submit">User</button>
                    <button id="button-content" type="submit">Content</button>
                </div>
            </div>
            {user.map(use => (
                <div>{use.text}</div>
            ))}
        </div>
    )
}

export default Search