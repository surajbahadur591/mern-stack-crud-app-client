import { FormControl, FormGroup, TextField, Typography } from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { useState } from "react";
import { addUserService } from "../service/api";
import { useNavigate } from "react-router-dom";

// changing css of mui FormGroup using styled component
const FormCustom = styled(FormGroup)`
  width: 50%;
  margin: 5% auto 0 auto;

  & > div {
    margin-top: 20px;
  }
`;

const AddUser = () => {
  const defaultUser = {
    firstname: "",
    lastname: "",
    email: "",
    age: "",
    location: "",
  };

  const [user, setUser] = useState(defaultUser);
  const navigate = useNavigate();
  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const addUserDetails = async () => {
    // console.log(user);
    await addUserService(user);
    navigate("/allusers");
  };

  return (
    <div>
      <FormCustom>
        <Typography variant="h5">Enter User Details</Typography>
        <FormControl>
          <TextField
            id="outlined-basic"
            label="First Name"
            name="firstname"
            variant="outlined"
            onChange={(e) => {
              onValueChange(e);
            }}
          />
        </FormControl>
        <FormControl>
          <TextField
            id="outlined-basic"
            label="Last Name"
            name="lastname"
            variant="outlined"
            onChange={(e) => {
              onValueChange(e);
            }}
          />
        </FormControl>
        <FormControl>
          <TextField
            id="outlined-basic"
            label="Email"
            name="email"
            type="email"
            variant="outlined"
            onChange={(e) => {
              onValueChange(e);
            }}
          />
        </FormControl>
        <FormControl>
          <TextField
            id="outlined-basic"
            label="Age"
            name="age"
            type="number"
            variant="outlined"
            onChange={(e) => {
              onValueChange(e);
            }}
          />
        </FormControl>
        <FormControl>
          <TextField
            id="outlined-basic"
            label="Location"
            name="location"
            variant="outlined"
            onChange={(e) => {
              onValueChange(e);
            }}
          />
        </FormControl>

        <FormControl>
          <Button
            variant="contained"
            onClick={() => {
              addUserDetails();
            }}
          >
            Add User
          </Button>
        </FormControl>
      </FormCustom>
    </div>
  );
};

export default AddUser;
