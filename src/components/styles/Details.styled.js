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
  background: white;
  border-radius: 999px;
  box-shadow: #172940 0 10px 15px -10px;
  margin: 0 0 0 15px;
  box-sizing: border-box;
  cursor: pointer;
  font-size: 12px;
  font-weight: 500;
  line-height: 14px;
  opacity: 1;
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

export const WeatherContainer = styled.div`
  background-color: #80a6f2;
  border-radius: 25px;
`
export const WeatherContent = styled.div`
  margin: 50px 0 50px 40px;
  color: #172940;
`

export const WeatherSide = styled.div`
  height: 100%;
  border-radius: 25px;
  background-image: url(${img});
  width: 400px;
  position: relative;
  float: left;
  z-index: 99;
  box-shadow: #172940 0 10px 30px -10px;
`
export const InfoSide = styled.div`
  position: relative;
  color: white;
  height: 100%;
  padding: 70px;
  margin: 0 25px 25px 25px;
  /* 	box-shadow: 0 0 50px -5px rgba(0, 0, 0, 0.25); */
  border-radius: 10px;
`
export const InfoContent = styled.div`
  margin: -30px 10rem 0 28rem;
  font-size: 15px;
`
export const WeatherIcon = styled.img`
  margin: 0 0 2rem 0;
`
export const UnitButton = styled.button`
  background: white;
  border-radius: 999px;
  box-shadow: #ffff 0 10px 15px -10px;
  margin: 0 7px 0 0;
  box-sizing: border-box;
  cursor: pointer;
  font-size: 10px;
  font-weight: 300;
  line-height: 12px;
  opacity: 1;
  padding: 8px 25px;
  width: fit-content;
`
export const CityTitle = styled.h2`
  font-size: 20px;
  color: white;
`
export const Temp = styled.h1`
  font-size: 40px;
  color: white;
  margin: 0 0 6px 0;
`
export const WeatherText = styled.h3`
  font-size: 15px;
  color: white;
  margin: 0 0 30px 0;
`
export const CountryContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 3rem;
  margin: 8rem 30rem 8rem 30rem;
`

export const FaceCard = styled.div`
  background-color: white;
  border: 1px solid #4e74bf;
  justify-content: center;
  font-size: 15px;
  align-items: center;
  display: flex;
  color: #172940;
  border-radius: 20px;
  cursor: pointer;
  margin: rem;
  height: 5rem;
  -o-transition: color 0.15s ease-in;
  -webkit-transition: color 0.2s ease-in;
  box-shadow: #172940 0 10px 15px -10px;

  &:hover,
  &:focus {
    background-color: #4e74bf;
    color: white;
    transform: scale(0.98);
  }
`
