import axios from "axios"
import { useEffect, useState } from 'react'
import styled from "@emotion/styled"

const Text = styled.span`
    font-size: 15px;
    color: gray;
`

export default function WeatherAPI(){
    
    const [temperature, setTemperature] = useState("")
    const [description, setDescription] = useState("")

    useEffect(()=>{

        const weather = async () => {
            const result = await axios.get("https://goweather.herokuapp.com/weather/Seoul")
            setTemperature(result.data.temperature)
            setDescription(result.data.description)
            console.log(result)
        }
        weather()
    })

    return(
        <div>
            <Text>Weather </Text>
            <Text>{temperature}</Text>
            <Text>|</Text>
            <Text>{description}</Text>
        </div>
    )
}