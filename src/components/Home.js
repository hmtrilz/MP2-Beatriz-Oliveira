import { ThemeProvider } from "styled-components"
import { Link } from "react-router-dom"
import {
  Container,
  Button,
  BackgroundLayer,
  Box,
  ImgLogo,
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
          <h1>Descobre se podes ou não meter a roupa a secar</h1>
          <h2>
            De certeza que já te aconteceu esqueceres-te do estendal da roupa lá
            fora e começar a chover.
          </h2>
          <h2>
            Verifica o tempo na tua cidade e decide se vais meter a roupa a
            secar lá fora!
          </h2>
          <Link to="/details" style={{ textDecoration: "none" }}>
            <Button>Next</Button>
          </Link>
        </Box>
      </Container>
    </ThemeProvider>
  )
}

export default Home
