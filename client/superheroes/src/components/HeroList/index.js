import React, { useEffect, useState } from 'react';
import axios from 'axios';


function HeroList(props) {
    const [heroes, setHeroes] = useState();
    const [pageId, setPages] = useState(1);
    const [isFetching, setisFetching] = useState(false);

    useEffect(()=>{
        axios.get(`http://localhost:5002/api/hero/${pageId}`
        )
          .then((response) => setHeroes(response.data))
          
        setTimeout(() => {
          setisFetching(true)
        }, 1000);
    },[pageId])
    
    const mapHero = ({ id, nickname, real_name }) => {
        return (
            <li key={id}>
            nickname: {nickname} Real Name: {real_name}
            </li>
        );
    };

    return (
        <>
            <div>{!isFetching ? <div>Load...</div> : 
            <ul>{heroes.map(mapHero)}</ul>}</div>
            <div>{pageId}</div>
            <button onClick = {() => setPages(pageId + 1)}> + </button>
        </>
  );
}


export default HeroList;


//{heroes.map(mapHero)}
