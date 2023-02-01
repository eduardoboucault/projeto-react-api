import styled from "styled-components";

export const CardStyle = styled.div`
display:flex;
flex-direction: row;
width: 30%;
height: 15rem;
padding: 1rem;
border-radius: 1rem;
border: black;
order: 5;
background-color: lightcoral;
`

export const ButtonStyle = styled.button`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 4px 10px;
width: 146px;
height: 38px;
background: #FFFFFF;
border-radius: 8px;
flex: none;
order: 1;
flex-grow: 0;
`

export const DetailBtnStyle = styled.button`
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
`

export const TitleName = styled.h1`
width: 159px;
height: 39px;
font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 32px;
line-height: 39px;
color: #FFFFFF;
`

export const IdStyle = styled.p`
width: 30px;
height: 19px;
font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 19px;
color: #FFFFFF;
`

export const TypesStyle = styled.li`
list-style:none;
`

export const ImgStyle = styled.img`
justify-self: flex-end;
width:10rem;
height:10rem;
`

export const ContainerButton = styled.div`
display:flex;
justify-content: space-between;
`