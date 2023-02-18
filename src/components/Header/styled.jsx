import styled from "styled-components";

export const HeaderStyle = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  background-color: white;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 16px;

  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`

export const Logo = styled.img`
  max-width: 100%;
  height: auto;
`

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`

export const ButtonExclude = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 4px 10px;
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
  width: 287px;
  height: 74px;
  background: #33A4F5;
  border-radius: 8px;
`

export const ButtonAllPokemon = styled.button`
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