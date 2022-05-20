import React,{useState,useEffect} from 'react';
import './App.css';
import {Container} from "./styled/styled";
import Header from "./components/header/header";
function App() {
  const [state,setState] = useState('');
  const [weather,setWeather] = useState('');
  const [search,setSearch] = useState('toshkent');
  const [img,setImg] = useState('');

  useEffect(()=>{
    const date = new Date().getDate() + "." + (new Date().getMonth()+1) + "." + new Date().getFullYear();
    setState(date)
  },[])
  return (
<Container img={img}>
<Header state={state} setState={setState}
setWeather={setWeather} weather={weather}
setSearch={setSearch} search={search}
setImg={setImg} img={img}/>
</Container>
  );
}

export default App;
