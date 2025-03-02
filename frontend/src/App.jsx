import { Box } from "@chakra-ui/react"
import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar.jsx"
import CreatePage from "./pages/CreatePage.jsx"
import HomePage from "./pages/HomePage.jsx"
function App() {


  return (
    <>
    <Box minH={"100vh"}>
    <Navbar/>
      <Routes>
      
       <Route path="/" element={<CreatePage/>} />
       <Route path="/create" element={<HomePage/>} />
      </Routes></Box>
    </>
  )
}

export default App
