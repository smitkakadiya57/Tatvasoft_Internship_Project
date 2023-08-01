import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import logo from "../../assets/site-logo.svg";
const Footer = () => {
  return (
    <Box
      sx={{
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5f5f5",
        marginTop: "auto",
      }}
    >
      <img src={logo} alt="logo" style={{height:"40px"}} />
      <Typography variant="body1" gutterBottom sx={{color:"grey", marginTop:"5px"}}>
        @2023 Tatvasoft.com All rights reserved
      </Typography>
    </Box>
  );
};

export default Footer;
