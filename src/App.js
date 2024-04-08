import "./App.scss"
import Header from "./compenents/header/Header"
import Main from "./compenents/main/Main"
import Navbar from "./compenents/navbar/Navbar"


function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Main />
    </div>
  )
}

export default App
