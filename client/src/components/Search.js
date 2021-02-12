import React from 'react'
import axios from 'axios';
import { useState } from 'react';



const Search = () => {
    const [input, setInput] = useState('');
    const [user, setUser] = useState([]);
    const [content, setContent] = useState([]);

    const handleClick = (e) => {
        e.preventDefault();

        const param = e.target.name;

        axios
        .get(`/api/tweets?search=${param}`)
        .then((res) => setUser(res.data))
        .catch((err) => console.log(err))

        console.log(user);

    }

    const updateInput = (e) => {
        setInput(e.target.value)
    }
    

    return (
        <div>
            <div>
                <input id="input" type="text" placeholder="Search here" value={input} onChange={updateInput}/>

                <div class="search-buttons">
                    <button id="button-user" type="submit" name="nasa" onClick={handleClick}>User</button>
                    <button id="button-content" type="submit">Content</button>
                </div>
            </div>
        </div>
    )
}

export default Search