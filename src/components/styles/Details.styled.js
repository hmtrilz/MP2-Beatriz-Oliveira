import styled from "styled-components"

const img = require("../imgs/background.jpg")

export const TopContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const SearchContainer = styled.div`
  width: 40%;
  flex-direction: row;
  margin: 2rem 0;
`

export const Container = styled.div`
  margin-top: 5rem;
  display: flex;
  justify-content: center;
`

export const SearchButton = styled.button`
  background: transparent;
  border-radius: 999px;
  box-shadow: #ffff 0 10px 15px -10px;
  margin: 0 0 0 15px;
  box-sizing: border-box;
  cursor: pointer;
  font-size: 12px;
  font-weight: 500;
  line-height: 14px;
  opacity: 1;
  outline: 1px solid #80a6f2;
  padding: 10px 30px;
  width: fit-content;
`

export const SearchBar = styled.input`
  width: 70%;
  padding: 12px 24px;
  background-color: transparent;
  transition: transform 250ms ease-in-out;
  font-size: 14px;
  line-height: 18px;
  background-repeat: no-repeat;
  background-size: 18px 18px;
  background-position: 95% center;
  border-radius: 50px;
  border: 1px solid #575756;
  transition: all 250ms ease-in-out;
  backface-visibility: hidden;
  transform-style: preserve-3d;

  &::placeholder {
    color: color(#575756 a(0.8));
    text-transform: uppercase;
    letter-spacing: 1.5px;
  }

  &:hover,
  &:focus {
    padding: 12px 0;
    outline: 0;
    border: 1px solid transparent;
    border-bottom: 1px solid #575756;
    border-radius: 0;
    background-position: 100% center;
  }
`

export const CountryContainer = styled.div`
  margin-top: 5rem;
  position: relative;
`

export const WeatherContainer = styled.div`
  align-items: center;
  margin-bottom: 6rem;
  background-color: #80a6f2;
  border-radius: 25px;
  height: 400px;
  width: 50%;
`
export const WeatherContent = styled.div`
  margin: 50px 0 0 40px;
  color: #172940;
`

export const WeatherSide = styled.div`
  height: 100%;
  border-radius: 25px;
  background-image: url(${img});
  width: 400px;
  -webkit-box-shadow: 0 0 20px -10px rgba(0, 0, 0, 0.2);
  box-shadow: 0 0 20px -10px rgba(0, 0, 0, 0.2);
  float: left;
`
export const InfoSide = styled.div`
  position: relative;
  color: white;
  height: 100%;
  padding: 40px;
  margin: 0 25px 25px 25px;
  /* 	box-shadow: 0 0 50px -5px rgba(0, 0, 0, 0.25); */
  border-radius: 10px;
`
export const InfoContent = styled.div`
  margin: 20px 0 0 31rem;
`
