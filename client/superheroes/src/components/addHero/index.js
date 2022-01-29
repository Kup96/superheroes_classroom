import React, { useEffect, useState } from 'react';
import axios from 'axios';


function addHero(props){
    const [data, setData] = useState(
        {"nickname": "",
         "real_name": "",
         "origin_desctiption": "",
         "superpowers": "",
         "catch_phrase": "",
         "Images": ""
        });
    const input = useRef();
    const handleSubmit = (e) => {
        e.preventDefault();
        setData(input.current.value);
        }
        return (
            <> 	
                <form ref = {inputProduct} onSubmit={handleSubmit}>
                    <input type="text" name="name" placeholder="name" />
                    <input type="text" name="description" placeholder="some description" />
                    <input type="text" name="price" placeholder="$"/>
                    <input type="file" id="input" multiple />
    
                    <input type="submit" value="Send ->" />
                </form>
            </>);
    
    }
export default addHero;