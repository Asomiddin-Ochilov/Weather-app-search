import styled from "styled-components";
import img from "./2.jpg"
export const Container = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
backdrop-filter: blur(30px);
`
export const Block = styled.div`
width: 85%;
height: 70%;
display: flex;
flex-wrap: wrap;
justify-content: end;
align-items: end;
background-image: url(${img});background-image: url(${props => props.img.length !== 0 ? props => props.img.map((item) => item.urls.full) : img});
background-size: cover;
background-position: center;
background-repeat: no-repeat;
border-radius: 5px;
overflow: hidden;
box-shadow: -1px 4px 45px 54px rgba(34, 60, 80, 0.24);
@media screen and (max-width: 600px){
height: 90%;
width: 90%;
}
.text{
width: 90%;
height: 200px;
display: flex;
margin: auto;
align-items: center;
justify-content: center;
color: white;
padding-left: 3rem;
h1{
font-size: 80px;
margin: 0 1.4rem;
text-shadow: 3px 3px 4px #f17517;
}
h3{
font-size: 50px;
margin-top: 1rem;
}
p{
font-size: 30px;
margin-top: 2rem;
margin-left: 1rem;
}
@media(min-width: 900px) and (max-width: 1100px){
width: 100%;
padding-left: 1rem;
h1{
font-size: 60px;
}
h3{
font-size: 40px;
}
}
@media(min-width: 600px) and (max-width: 900px){
flex-wrap: wrap;
padding-bottom: 1rem;
width: 100%;
padding-left: 0.5rem;
h1{
font-size: 50px;
}
h3{
font-size: 30px;
}
}
@media screen and (max-width: 600px){
flex-wrap: wrap;

padding-bottom: 1rem;
height: auto;
width: 100%;
padding-left: 0.5rem;
h1{
font-size: 50px;
}
h3{
font-size: 30px;
}
}
}
`
export const Item = styled.div`
width: 28vw;
height: 40vh;
margin-right: -5px;
@media(min-width: 900px) and (max-width: 1100px){
width: 40vw;
}
@media(min-width: 600px) and (max-width: 900px){
width: 55vw;
}
@media screen and (max-width: 600px){
width: 100%;
margin-top: -3.7rem;
}
.header{
width: 100%;
height: 80px;
backdrop-filter: blur(60px);
padding-bottom: 10px;
display: flex;
align-items: end;
justify-content: end;
input{
width: 65%;
height: 50px;
border: none;
background-color: transparent;
outline: none;
font-size: 20px;
border-bottom: 2px solid #bab9b9;
margin-right: 30px;
}
button{
width: 20%;
height: 100%;
background-color: rgb(239,115,23);
color: black;
font-size: 18px;
padding-right: 10px;
cursor: pointer;
border: none;
outline: none;
}
}
.body{
width: 85%;
height: 35%;
margin: 0 auto;
p{
font-size: 20px;
margin: 25px 0;
}
}
.footer{
border-top: 2px solid gray;
border-bottom: 2px solid gray;
width: 85%;
height: 40%;
margin: 0 auto;
p{
font-size: 20px;
margin: 25px 0;
}
}
`
