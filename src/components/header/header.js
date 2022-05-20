import React,{useEffect} from 'react'
import {Block, Container, Item} from "./styled";
import Slide from 'react-reveal/Slide';
import axios from "axios";
const  api = {
    key:'9bab81fbda15bc2fa6edeb80f24b4639',
    base:'https://api.openweathermap.org/date/2.5/'
}
function Header ({state,weather,setWeather,img,setImg,search,setSearch}) {
    const apiKey = "-KDTBWwV--XJodlHW3sTOq9Vyr2D4G_xRBwyT37a-uk"; //UNSPLASH;
    const url =  "https://api.unsplash.com/search/photos?page=1&query=" + search + "&client_id=" + apiKey;
    function onSearch(e) {
        if(e.key === "Enter"){
         axios({
             url:`https://api.openweathermap.org/data/2.5/weather`,
             params:{
                 q:search,
                 units: 'metric',
                 APPID: api.key
             }
         }).then(res=>{
             setWeather(res.data)
             setSearch('')

         })

        axios.get(url).then(res=>{
            // eslint-disable-next-line array-callback-return
            const data = res.data.results.filter((item,index)=>{
                 if(index === 0){
                     return item
                 }
            })

            setImg(data)
        })
     }
    }

    function change(){
        if(search !==''){
            axios({
                url:`https://api.openweathermap.org/data/2.5/weather`,
                params:{
                    q:search,
                    units: 'metric',
                    APPID: api.key
                }
            }).then(res=>{
                setWeather(res.data)
                setSearch('')
            })
        }
    }

    useEffect(()=>{
        axios({
            url:`https://api.openweathermap.org/data/2.5/weather`,
            params:{
                q:search,
                units: 'metric',
                APPID: api.key
            }
        }).then(res=>{
            setWeather(res.data)
            setSearch('')

        })
        axios.get(url).then(res=>{
            // eslint-disable-next-line array-callback-return
            const data = res.data.results.filter((item,index)=>{
                if(index === 0){
                    return item
                }
            })
            setImg(data)
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    return(
        <Container>
         <Block img={img}>
             <Slide right>
                 <Item>
                     <div className="header">
                         <input value={search} onChange={(e)=>setSearch(e.target.value)}
                                onKeyPress={(e)=>onSearch(e)} type="text"
                                placeholder={'Search city...'}
                         />
                         <button onClick={change}>
                             <i className="bi bi-search"> </i>
                         </button>
                     </div>

                 </Item>
             </Slide>
             <Slide bottom>
                 <div className="text">
                     {
                         weather !== '' ? <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="no"/> : <div> </div>
                     }
                     <h1> {weather ? Math.round(weather.main.temp) : ''} &#8451; </h1>
                     <h3>{weather ? weather.name : ''} </h3>
                     <p>{weather ? weather.sys.country : ''} </p>
                     <p>{state}</p>
                 </div>
             </Slide>

         </Block>
        </Container>
    )
}
export default Header