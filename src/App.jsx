import React , {useState} from "react";
import axios from "axios";

function App() {

    const[data,setData]=useState({})
    const[location,setLocation]=useState("")

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=8528a0f2485fa77b6744a85922e2c69a`
    const searchLocation = (event)=>{
        if (event.key === 'Enter'){
            axios.get(url).then((response) =>{
                setData(response.data)
                console.log(response.data)
            })
            setLocation("")
        }
    }


    return (

        <div className=" bg-[url('src/assets/BG.jpg')] bg-cover bg-center bg-fixed bg-no-repeat h-screen w-full font-Tinos">
            {/*{SearchBar}*/}

            <div name='SearchBar' className='text-center py-8 '>
                <input className='rounded-2xl px-5 py-2 text-white placeholder-white text-2xl border-solid bg-gray-400/50'
                       type='text' value={location}
                       onChange={event => setLocation(event.target.value)}
                       placeholder='Enter Location'
                       onKeyPress={searchLocation} />
            </div>

            {/*{Top}*/}

            <div name="top" className='flex flex-col fixed top-1/2 transform -translate-y-1/2 py-8 px-8 w-full  m-auto text-white bg-gray-400/0 rounded-2xl '>
                <div name="location" className='text-4xl'>
                    <p>{data.name}</p>
                </div>
                <div name="temp" className='text-8xl font-bold'>
                    {data.main ? <h1>{data.main.temp}°F</h1> : null}
                </div>
                <div name="desc" className=' text-4xl absolute top-1/2 right-0 transform -translate-y-1/2 -rotate-90'>
                    {data.weather ? <p>{data.weather[0].main}</p> : null}
                </div>
            </div>

            {/*{bot}*/}
            {data.name != undefined &&
                <div name="bot" className=' text-white flex justify-center py-5 items-end fixed bottom-10 left-1/2 transform -translate-x-1/2  bg-gray-400/50 rounded-2xl   '>

                    <div name="feels" className=' text-3xl px-10'>
                        {data.main ? <p className='font-bold'>{data.main.feels_like}°F</p> : null}
                        <p>Feels Like</p>

                    </div>
                    <div name="humidity" className='px-10 text-3xl'>
                        {data.main ? <p className='font-bold'>{data.main.humidity}%</p> : null}
                        <p>Humidity</p>
                    </div>
                    <div name="wind" className='px-10 text-3xl' >
                        {data.main ? <p className='font-bold'>{data.wind.speed} MPH</p> : null}
                        <p>Wind Speed</p>
                    </div>

                </div>}


        </div>
    )
}
export default App
