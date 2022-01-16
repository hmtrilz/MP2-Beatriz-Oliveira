import styled from "styled-components"

const img = require("../imgs/laundry.jpg")

export const ImgLogo = styled.img`
  width: 7rem;
  height: auto;
  margin: 0 0 10rem 0;
`

export const Container = styled.div`
  width: auto;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // background-color: ${({ theme }) => theme.colors.blue};
  background-image: url(${img});
  background-size: cover;
`

export const BackgroundLayer = styled.div`
  width: 80%;
  height: 80%;
  background-color: white;
  opacity: 20%;
  border-radius: 100px;
  position: absolute;
  padding: 1rem;
`

export const Box = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  position: absolute;
`

export const Button = styled.button`
  background: transparent;
  border-radius: 999px;
  box-shadow: #ffff 0 10px 15px -10px;
  margin: 3rem;
  box-sizing: border-box;
  color: #ffff;
  cursor: pointer;
  font-size: 20px;
  font-weight: 500;
  line-height: 24px;
  opacity: 1;
  outline: 2px solid white;
  padding: 1.7rem 7rem;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: fit-content;
  word-break: break-word;
  border: 0;
  -o-transition: color 0.15s ease-in;
  -webkit-transition: color 0.2s ease-in;

  &:hover {
    background: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.darkblue};
    transform: scale(0.98);
  }
`
