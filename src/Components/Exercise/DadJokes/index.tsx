import './DadJokes.scss'
import axios from 'axios';
import { useEffect, useState } from 'react';



function DadJokes() {
    const [joke, setJoke] = useState('')
    const [fetching, setFetching] = useState(false)

  useEffect(()=> {
    const fetchData = async () => {
        const result = await axios('https://icanhazdadjoke.com/slack')
        setJoke(`${result.data.attachments[0].text}`)
  
        console.log(result.data)
    }
    
    fetchData()
  }, [fetching])


    return (
    <div className="Dadjokes">
        <h1 className='title'>Don' laugh challenge</h1>
        <h2 className='jokes'>{joke}</h2>
        <button className='Joke-btn' onClick={()=> setFetching(!fetching)}> Get Another Joke</button>
    </div> 
    );
}

export default DadJokes;