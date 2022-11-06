import "./App.css";
import React from "react";
import HorizontalLinearStepper from "./Components/HorizontalLinearStepper";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";


function App() {
  const externalImage =
    "https://betafibernet.actcorp.in/assets/images/Rectangle_1.png";
  return (
    <div
      style={{
        backgroundImage: `url(${externalImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        height: "95%",
      }}
    >
      <Container>
        <Box
          sx={{ border: "2px solid black", bgcolor: "white" }}
          style={{
            padding: "30px 30px 30px 40px",
            borderRadius: "60px",
            marginTop: "65px",
          }}
        >
          <HorizontalLinearStepper />
        </Box>
      </Container>
      {/* <Routes>
        <Route path="/" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
      </Routes> */}
    </div>
  );
}

export default App;
