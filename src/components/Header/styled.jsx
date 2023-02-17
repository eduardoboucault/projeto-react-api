import styled from "styled-components";

export const HeaderStyle = styled.header`
  display: flex;
  width: 100%;
  gap: 16px;
  padding: 16px;
  background-color: white;
  justify-content: space-evenly;
`

export const ButtonExclude = styled.button`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 4px 10px;
position: absolute;
width: 226px;
height: 57px;
background: #FF6262;
border-radius: 8px;
`

export const ButtonPokedex = styled.button`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 4px 10px;
position: absolute;
width: 287px;
height: 74px;
background: #33A4F5;
border-radius: 8px;
`

export const ButtonAllPokemon = styled.button`
position: absolute;
width: 210px;
height: 36px;
font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 36px;
text-decoration-line: underline;
color: #1A1A1A;
`