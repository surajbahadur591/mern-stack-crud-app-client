import { FormControl, FormGroup, TextField, Typography } from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { useState, useEffect } from "react";
import { loadUserDataService, editUserService } from "../service/api";
import { useNavigate, useParams } from "react-router-dom";

// changing css of mui FormGroup using styled component
const FormCustom = styled(FormGroup)`
  width: 50%;
  margin: 5% auto 0 auto;

  & > div {
    margin-top: 20px;
  }
`;

const EditUser = () => {
  const defaultUser = {
    firstname: "",
    lastname: "",
    email: "",
    age: "",
    location: "",
  };

  const { id } = useParams();

  const [user, setUser] = useState(defaultUser);
  const navigate = useNavigate();
  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const editUserDetails = async () => {
    // console.log(user);
    await editUserService(user, id);
    navigate("/allusers");
  };

  useEffect(() => {
    loadUserDetails();
  }, []);

  const loadUserDetails = async () => {
    const response = await loadUserDataService(id);
    setUser(response.data[0]);
    //    console.log(user.age)
    //    console.log(response.data[0].age)
  };

  return (
    <div>
      <FormCustom>
        <Typography variant="h5">Update User Details</Typography>
        <FormControl>
          <TextField
            id="outlined-basic"
            label="First Name"
            name="firstname"
            value={user.firstname}
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
            value={user.lastname}
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
            value={user.email}
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
            value={user.age}
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
            value={user.location}
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
              editUserDetails();
            }}
          >
            Save Changes
          </Button>
        </FormControl>
      </FormCustom>
    </div>
  );
};

export default EditUser;
