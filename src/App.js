import './App.css';
import { ThemeProvider } from "styled-components";
import NavBar from './ui/NavBar';
import Homepage from './ui/Homepage';


const theme = {
  colors: {
    primary: "#FF5722",
    secondary: "#F5F5F5",
    textDark: "#000000",
    textLight: "#FFFFFF",
  },
};
function App() {
   return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <Homepage />
    </ThemeProvider>
  );
  // return (
  //   <div className="App"> 
  //     <NavBar />
  //     <Homepage />
  //   </div>
  // );
}

export default App;
