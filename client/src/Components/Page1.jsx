import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "../App.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
//import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
//import { Dayjs } from 'dayjs';
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Button } from "@mui/material";
import Footer from "./Footer/Footer";
import Page1Modal from "./Page1Modal";
import axios from "axios";

const Page1 = ({ handleNext }) => {
  const [name, setName] = useState("");
  const [accNumber, setAccNumber] = useState("");
  const [currentAddress, setCurrentAddress] = useState("");
  const [city, setCity] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [radio, setRadio] = useState("");
  const [apartment, setApartment] = useState("");
  const [pincode, setPincode] = useState("");
  const [openPopup, setOpenPopup] = useState(false);

  const navigate = useNavigate();

  //  console.log({location})

  const handleRadioInput = (e) => {
    setRadio(e.target.value);
  };
  const handleaddress = (e) => {
    let text = document.getElementById("location");
    text.value = "";
  };
  const handleLocation = (e) => {
    // setLocation(e.target.value);
    // axios.get("https://ipapi.co/json?token=45420d190496ea").then((response) => {
    //   let city = response.data.city;
    //   let region = response.data.region;
    //   let pincode = response.data.postal;
    //   let country_name = response.data.country_name;

    //   localStorage.setItem("pincode", JSON.stringify(pincode));
    //   localStorage.setItem("text", JSON.stringify(region));

    //   text.value = city + "," + region + "," + pincode + "," + country_name;
    // });

    const sucess = (pos) => {
      console.log(pos);
      const lat = pos.coords.latitude;
      const lon = pos.coords.longitude;

      const geoApiUrl = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude${lat}=&longitude=${lon}&localityLanguage=en`;
      fetch(geoApiUrl)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          let text = document.getElementById("location");
          let city = data.city;
          let mandal = data.locality;
          let state = data.principalSubdivision;
          let country = data.countryName;
          let pincode = data.postcode;
          text.value =
            city + "," + mandal + "," + state + "," + country + "," + pincode;
          let val=document.getElementById("location").value
          localStorage.setItem("pincode", JSON.stringify(pincode));
          localStorage.setItem("text", JSON.stringify(val));
        });
    };

    const error = () => {
      console.log("unable to fetch the location");
    };
    navigator.geolocation.getCurrentPosition(sucess, error);
  };

  const handleContinue = (e) => {
    e.preventDefault();
    setOpenPopup(true);
    const data = {
      name,
      accNumber,
      currentAddress,
      city,
      date,
      location,
      radio,
      apartment,
      pincode,
    };
    // console.log("page1-data", data);
    localStorage.setItem("page1-data", JSON.stringify(data));
  };

  return (
    <>
      <div
        style={{
          border: "1px solid black",
          borderRadius: "20px",
          textAlign: "center",
          fontFamily: "sans-serif",
          fontWeight: "500px",
          background: "white",
        }}
      >
        <h2>Enter details for a quick feasibility</h2>

        <div
          className="page1-main"
          style={{
            border: "1px solid green",
            backgroundColor: "whitesmoke",
            borderRadius: "20px",
            display: "flex",
            width: "90%",
            margin: "auto",
            padding: "20px 20px 10px 10px",
          }}
        >
          <div>
            <Box
              sx={{
                width: 800,
                maxWidth: "100%",
                m: "2%",
              }}
            >
              <div
                style={{
                  display: "flex",
                  border: "",
                  width: "475px",
                  marginLeft: "50px",
                }}
                className="right-div"
              >
                <div>
                  <div style={{ marginBottom: "15px" }}>
                    <TextField
                      fullWidth
                      label="Name"
                      id="fullWidth"
                      onChange={(e) => setName(e.target.value)}
                    />{" "}
                  </div>
                  <div style={{ marginBottom: "15px" }}>
                    <TextField
                      fullWidth
                      label="Acc No."
                      id="fullWidth"
                      onChange={(e) => setAccNumber(e.target.value)}
                    />{" "}
                  </div>
                  <div style={{ marginBottom: "15px" }}>
                    <TextField
                      fullWidth
                      label="Current Address"
                      id="fullWidth"
                      onChange={(e) => setCurrentAddress(e.target.value)}
                    />{" "}
                  </div>

                  <div style={{ marginBottom: "auto" }}>
                    <FormControl sx={{ m: 0.3, width: 470 }}>
                      <InputLabel id="demo-multiple-name-label">
                        {" "}
                        select the city you want to shift{" "}
                      </InputLabel>
                      <Select
                        onChange={(e) => {
                          const selectedCity = e.target.value;
                          setCity(selectedCity);
                        }}
                        label="select the city you want to shift"
                      >
                        <MenuItem value="">
                          select the city you want to shift
                        </MenuItem>
                        <MenuItem value="HYDERABAD">HYDERABAD</MenuItem>
                        <MenuItem value="GUNTUR">GUNTUR</MenuItem>
                        <MenuItem value="BANGALORE">BANGALORE</MenuItem>
                        <MenuItem value="NELLORE">NELLORE</MenuItem>
                        <MenuItem value="COIMBATORE">COIMBATORE</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                  <br />
                  <div
                    style={{ marginBottom: "15px", border: "1px solid grey" }}
                  >
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DatePicker
                        label="choose a date"
                        value={date}
                        onChange={(e) => {
                          setDate(e);
                        }}
                        renderInput={(params) => <TextField {...params} />}
                      />
                    </LocalizationProvider>
                  </div>
                </div>
              </div>
            </Box>
          </div>
          <div
            style={{
              border: "",
              width: "475px",
              marginLeft: "-200px",
              marginTop: "20px",
            }}
            className="right-div"
          >
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel
                value=" current location"
                onChange={handleLocation}
                control={<Radio />}
                label="use current location"
                fullWidth
                id="fullWidth"
              />

              <FormControlLabel
                value="enter address"
                onChange={handleaddress}
                control={<Radio />}
                label="enter Address"
              />
            </RadioGroup>
            <br />

            <div style={{ marginBottom: "15px" }}>
              <TextField id="location" label="installation address" fullWidth />
            </div>

            <div style={{ display: "flex" }}>
              <div
                style={{ display: "flex", marginRight: "25px", gap: "20px" }}
              >
                {" "}
                <p>Multi-Storey Building (4 or more floors)</p>
                <RadioGroup
                  value={radio}
                  onChange={handleRadioInput}
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                >
                  <FormControlLabel
                    value="Yes"
                    control={<Radio />}
                    label="yes"
                  />

                  <FormControlLabel value="No" control={<Radio />} label="No" />
                </RadioGroup>{" "}
              </div>
            </div>
            <br />
            <div>
              <TextField
                label="Apartment/building name/House no"
                id="fullWidth"
                fullWidth
                onChange={(e) => setApartment(e.target.value)}
              />
            </div>
            <br />
            <div>
              <Button
                style={{
                  backgroundColor: "red",
                  color: "rgba(255,255,255,1)",
                  width: "245px",
                  height: "50px",
                  fontWeight: "400px",
                  borderRadius: "10px",
                }}
                onClick={handleContinue}
              >
                PROCEED
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
      <Page1Modal
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
      ></Page1Modal>
    </>
  );
};

export default Page1;
