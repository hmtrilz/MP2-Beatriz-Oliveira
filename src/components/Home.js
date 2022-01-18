import { ThemeProvider } from "styled-components"
import { Link } from "react-router-dom"
import {
  Container,
  Button,
  BackgroundLayer,
  Box,
  ImgLogo,
  Title,
  SubTitle,
} from "./styles/Home.styled"
import GlobalStyles from "./styles/Global.styles"

const logo = require("./imgs/hanging.png")

const theme = {
  colors: {
    lightblue: "#80A6F2",
    blue: "#4E74BF",
    darkblue: "#172940",
    gray: "#F0F1F2",
    yellow: "#F2CA52",
    white: "#FFFF",
  },
}

function Home() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Container>
        <BackgroundLayer />
        <Box>
          <ImgLogo src={logo} />
          <Title>Can I dry my clothes outside?</Title>

          <Link to="/details" style={{ textDecoration: "none" }}>
            <Button>Next</Button>
          </Link>

          <SubTitle>Beatriz Oliveira</SubTitle>
          <SubTitle>Mestrado em Comunicação e Tecnologias Web</SubTitle>
        </Box>
      </Container>
    </ThemeProvider>
  )
}

export default Home
