import styled from "styled-components";

export const CardStyle = styled.div`
  padding: 16px;
  min-width: 400px;
  max-width: 440px;
  height: 210px;
  background-color: #0b3e0b;
  border-radius: 12px;
  display: flex;
  position: relative;
  margin: 50px;
  color: #ffffff;
`

export const ButtonStyle = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 4px 10px;
  width: 146px;
  height: 38px;
  background: #ffffff;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  position: absolute;
  bottom: 10px;
  right: 22px;
  z-index: 2;
  color: #000;
`

export const DetailBtnStyle = styled.button`
position:relative;
width: 74px;
height: 24px;
font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 24px;
text-decoration-line: underline;
color: #FFFFFF;
flex: none;
order: 0;
flex-grow: 0;
top: 5%;
`

export const TitleName = styled.h1`
  font-size: 32px;
  font-weight: 700;
  letter-spacing: 0em;
  text-align: left;
  margin-bottom: 10px;
`

export const IdStyle = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 16px;
  font-weight: 600;
  text-align: left;
`

export const TypesStyle = styled.li`
position:relative;
list-style:none;
`

export const ImgStyle = styled.img`
  width: 193px;
  height: 193px;
  position: absolute;
  top: -60px;
  right: 0;
  z-index: 2;
`

export const PokeballLogo = styled.img`
  position: absolute;
  left: 35%;
  top: 0;
`
const collors = {
  poison: '#AD61AE',
  grass: '#70B873',
  fire: '#EAAB7D',
  flying: '#6892B0',
  water: '#71C3FF',
  dark: '#5C5365',
  bug: '#76A866',
  normal: '#BF9762',
  dragon: '#0A6CBF',
  eletric: '#F4D23B',
  fairy: '#EC8FE6',
  fighting: '#CE4069',
  ghost: '#5269AC',
  ground: '#D97745',
  ice: '#74CEC0',
  psychic: '#F67176',
  rock: '#C7B78B',
  steel: '#BBBBBB'
}