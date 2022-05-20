import styled from "styled-components";
import img from "../components/header/2.jpg"
export const Container = styled.div`
width: 100%;
height: 100vh;
background-image: url(${props=>props.img.length !==0 ? props=>props.img.map((item)=>item.urls.full) : img });
background-repeat: no-repeat;
background-size: cover;
background-position: center;
`