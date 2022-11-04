import React from "react";
import { Dialog, DialogContent, DialogTitle } from "@mui/material";

import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

export default function Page1Modal(props) {
  const navigate = useNavigate();
  let data = JSON.parse(localStorage.getItem("page1-data")) || [];
  let pincode = JSON.parse(localStorage.getItem("pincode")) || [];
  let shifting = JSON.parse(localStorage.getItem("text")) || [];
  const { openPopup, setOpenPopup, handleNext } = props;
  return (
    <Dialog maxWidth="md" open={openPopup} style={{ width: "1500px" }}>
      <DialogTitle>
        <div style={{ display: "flex" }}>
          <Typography variant="h6" component="div" style={{ flexGrow: 1 }}>
            <p style={{ marginLeft: "60px" }}>
              Please confirm your address for <br />
              Fibrenet installation.
            </p>
          </Typography>
          <Button
            color="secondary"
            onClick={() => {
              setOpenPopup(false);
            }}
          >
            X
          </Button>
        </div>
      </DialogTitle>
      <DialogContent>
        <div
          className="model"
          style={{
            border: "2px solid nlack",
            alignItems: "center",
            height: "400px",
            borderRadius: "20px",
            padding: "10px 20px",
          }}
        >
          <br />
          <div
            style={{ display: "flex", justifyContent: "center", gap: "200px" }}
          >
            <div>
              <h6>city :{data.city} </h6>
              <h6>building Name/D:No:{data.apartment} </h6>
              <h6>shifting address :{shifting} </h6>
              <h6>pincode :{pincode} </h6>
            </div>
            <div>
              <iframe
                title="gmap"
                name="gMap"
                className="map"
                src={`https://maps.google.com/maps?q=${data.city}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
              ></iframe>
            </div>
          </div>

          <div
            style={{ display: "flex", justifyContent: "center", gap: "20px" }}
          >
            <button
              className="button1"
              onClick={() => {
                setOpenPopup(false);
              }}
            >
              CHANGE
            </button>
            <button className="button2">CONFIRM</button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
