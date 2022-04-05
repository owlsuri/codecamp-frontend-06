import axios from "axios"
import { useEffect, useState } from 'react'

export default function DogAPI(){
    
    const [qoute, setQoute] = useState("")
    const [author, setAuthor] = useState("")

    useEffect(()=>{

        const dog = async () => {
            const result = await axios.get("https://inspiration.goprogram.ai")
            setQoute(result)
            setAuthor(result)
        }
        dog()
    })

    return(
        <div>
            <div>Quote</div>
            <div>{qoute}</div>
            <div>{author}</div>
        </div>
    )
}