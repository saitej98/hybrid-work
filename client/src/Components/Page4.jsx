import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { Container } from "@mui/system";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useTheme } from "@mui/material/styles";
import images from "./Image/images.png";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 50,
    },
  },
};

const names = ["Oliver Hansen", "Van Henry", "April Tucker", "Ralph Hubbard"];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const Page4 = ({ handleBack }) => {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const handleBackk = () => {
    handleBack();
  };
  function previewBeforeUpload(id) {
    document.querySelector("#" + id).addEventListener("change", function (e) {
      if (e.target.files.length == 0) {
        return;
      }
      let file = e.target.files[0];
      let url = URL.createObjectURL(file);
      document.querySelector("#" + id + "-preview div").innerText = file.name;
      document.querySelector("#" + id + "-preview img").src = url;
    });
  }

  useEffect(() => {
    return previewBeforeUpload("file-1");
  }, []);
  useEffect(() => {
    return previewBeforeUpload("file-2");
  }, []);
  return (
    <div>
      <Container
        maxWidth="sm"
        style={{
          alignItems: "center",
          padding: "10px 10px 10px 10px",
          border: "",
        }}
      >
        <Box
          sx={{
            bgcolor: "white",
            height: "100vh",
            border: "1px solid red",
            borderRadius: "20px",
            padding: "20px 20px",
            alignItems: "center",
          }}
        >
          <div
            style={{ textAlign: "center", color: "gray", fontWeight: "50px" }}
          >
            <h3>Please upload the documents</h3>
            <h5>
              Dear customer, as a TRAI mendate we would require a proof of
              address
            </h5>
            <h5>documents for the connection to be shifted</h5>
          </div>
          <div className="choose-doc-type">
            <FormControl sx={{ m: 3, width: 370 }}>
              <div>
                <InputLabel id="demo-multiple-name-label">
                  Choose document type
                </InputLabel>
              </div>
              <Select
                labelId="demo-multiple-name-label"
                id="demo-multiple-name"
                multiple
                value={personName}
                onChange={handleChange}
                input={<OutlinedInput label="Choose document type" />}
                MenuProps={MenuProps}
              >
                {names.map((name) => (
                  <MenuItem
                    key={name}
                    value={name}
                    style={getStyles(name, personName, theme)}
                  >
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <div>
              <h4
                style={{
                  textAlign: "center",
                  color: "gray",
                  fontWeight: "50px",
                }}
              >
                Please upload a clear scanned copy of both front <br />
                and back side of relevant document. In case the <br />
                document is not readable or clear, shifting process <br />
                may get delayed
              </h4>
            </div>
            {/* <div
              style={{
                height: "150px",
                display: "flex",
                justifyContent: "space-evenly",
                padding: "20px 20px 15px 15px",
              }}
            >
              <div
                style={{
                  border: "2px dashed grey",
                  width: "110px",
                  height: "90px",
                }}
              >
                <img
                  src={images}
                  alt=""
                  style={{ width: "110px", height: "90px" }}
                />
                <br />
                <br />
                <button
                  style={{
                    backgroundColor: "red",
                    color: "rgba(255,255,255,1)",
                    width: "110px",
                    height: "25px",
                    borderRadius: "10px",
                  }}
                >
                  Upload
                </button>
              </div>
              <div
                style={{
                  border: "2px dashed grey",
                  width: "110px",
                  height: "90px",
                }}
              >
                <img
                  src={images}
                  alt=""
                  style={{ width: "110px", height: "90px" }}
                />
                <br />
                <br />
                <button
                  style={{
                    backgroundColor: "red",
                    color: "rgba(255,255,255,1)",
                    width: "110px",
                    height: "25px",
                    borderRadius: "10px",
                  }}
                >
                  Upload
                </button>
              </div>
            </div>{" "} */}
            <div class="grid">
              <div class="form-element">
                <input type="file" id="file-1" accept="image/*" />
                <label for="file-1" id="file-1-preview">
                  <img src="https://bit.ly/3ubuq5o" alt="" />
                  <div></div>
                </label>
              </div>
              <br />
              <div class="form-element">
                <input type="file" id="file-2" accept="image/*" />
                <label for="file-2" id="file-2-preview">
                  <img src="https://bit.ly/3ubuq5o" alt="" />
                  <div></div>
                </label>
              </div>
            </div>
            <br /> <br />
            <div
              style={{ display: "flex", justifyContent: "center", gap: "50px" }}
            >
              <button
                onClick={handleBackk}
                style={{
                  backgroundColor: "red",
                  color: "rgba(255,255,255,1)",
                  width: "150px",
                  height: "35px",
                  fontWeight: "400px",
                  fontSize: "15px",
                  fontFamily: "sans-serif",
                  borderRadius: "10px",
                }}
              >
                BACK
              </button>

              <button
                style={{
                  backgroundColor: "red",
                  color: "rgba(255,255,255,1)",
                  width: "150px",
                  height: "35px",
                  fontWeight: "500px",
                  fontSize: "15px",
                  fontFamily: "sans-serif",
                  borderRadius: "10px",
                }}
              >
                SUBMIT
              </button>
            </div>
          </div>
        </Box>
      </Container>
    </div>
  );
};

export default Page4;
