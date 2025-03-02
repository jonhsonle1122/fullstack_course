import { Box, Flex } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import CreatePage from "./pages/CreatePage.jsx";
import HomePage from "./pages/HomePage.jsx";
import { useColorModeValue } from "@chakra-ui/react";
function App() {
  return (
    <>
      <Box minH="100vh" w="full" bg={useColorModeValue("gray.100", "gray.900")}>
        <Navbar />
        <Flex justify="center" w="full">
          <Routes>
            <Route path="/" element={<CreatePage />} />
            <Route path="/create" element={<HomePage />} />
          </Routes>
        </Flex>
      </Box>
    </>
  );
}

export default App;
