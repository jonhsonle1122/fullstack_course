import { Box, Flex, useColorModeValue } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import CreatePage from "./pages/CreatePage.jsx";
import HomePage from "./pages/HomePage.jsx";
function App() {
  return (
    <>
      <Box minH="100vh" w="full" bg={useColorModeValue("gray.100", "gray.900")}>
        <Navbar />
        <Flex justify="center" w="full">
          <Routes>
            <Route path="/create" element={<CreatePage />} />
            <Route path="/" element={<HomePage />} />
          </Routes>
        </Flex>
      </Box>
    </>
  );
}

export default App;
