import styled from "styled-components";
import bg2 from './img/bg.jpeg'
import { MainLayout } from "./styles/Layouts";
import Orb from "./Components/Orb/Orb";
import Navigation from "./Components/Navigation/Navigation";

function App() {
  return (
    <AppStyled bg={bg2} className="App">
      <Orb />
      <MainLayout>
        <Navigation />
        <h1>Hello</h1>

      </MainLayout>
    </AppStyled>
  );
}

const AppStyled = styled.div`
height: 100vh;
background-image: url(${props => props.bg2});
position: relative;
`



export default App;
