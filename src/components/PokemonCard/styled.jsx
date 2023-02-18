import styled from "styled-components";

export const CardStyle = styled.div`
  width: calc(100% / 3 - 2rem);
  max-width: 440px;
  height: 210px;
  background-color: ${(props) => props.colors};
  border-radius: 12px;
  margin: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  color: #ffffff;
  padding: 10px;

  @media only screen and (max-width: 768px) {
    width: calc(100% / 2 - 2rem);
  }

  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`;

export const TitleName = styled.h1`
  font-size: 32px;
  font-weight: 700;
  letter-spacing: 0em;
  text-align: left;
  margin-bottom: 10px;
`;

export const IdStyle = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 16px;
  font-weight: 600;
  text-align: left;
`;

export const TypesStyle = styled.li`
  list-style: none;
`;

export const ImgStyle = styled.img`
  width: 193px;
  height: 193px;
  position: absolute;
  top: -60px;
  right: 0;
  z-index: 2;

  @media only screen and (max-width: 480px) {
    display: none;
  }
`;

export const PokeballLogo = styled.img`
  position: absolute;
  left: 35%;
  top: 0;

  @media only screen and (max-width: 480px) {
    left: 10%;
  }
`;

export const ButtonStyle = styled.button`
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

  @media only screen and (max-width: 480px) {
    font-size: 14px;
    width: 120px;
    height: 32px;
  }
`;

export const DetailBtnStyle = styled.button`
  width: 74px;
  height: 24px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  text-decoration-line: underline;
  color: #ffffff;
  flex: none;
  order: 0;
  flex-grow: 0;
  top: 5%;

  @media only screen and (max-width: 480px) {
    font-size: 12px;
    width: 60px;
    height: 20px;
  }
`;