import React from "react";
import {
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from "@mui/material";
import { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { getUserDataService, deleteUserService } from "../service/api";
import { Link } from "react-router-dom";

const StyledTable = styled(Table)`
  width: 90%;
  margin: 50px auto 0 auto;
`;

const StyledTableRow = styled(TableRow)`
  background: #000000;
  color: #20b2aa;

  & > th {
    font-size: 16px;
    color: #20b2aa;
  }
`;

const AllUsers = () => {
  const [userdata, setUserData] = useState([]);

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    let response = await getUserDataService();
    // console.log(response.data);
    setUserData(response.data);
  };

  const deleteUser = async (id) => {
    await deleteUserService(id);
    getUserData();
  };

  return (
    <div>
      <StyledTable>
        <TableHead>
          <StyledTableRow>
            <TableCell>Id</TableCell>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell>Email Id</TableCell>
            <TableCell>Age</TableCell>
            <TableCell>Location</TableCell>
            <TableCell></TableCell>
          </StyledTableRow>
        </TableHead>
        <TableBody>
          {userdata.map((user) => (
            <TableRow key={user._id}>
              <TableCell>{user._id}</TableCell>
              <TableCell>{user.firstname}</TableCell>
              <TableCell>{user.lastname}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.age}</TableCell>
              <TableCell>{user.location}</TableCell>
              <TableCell>
                <Button
                  variant="contained"
                  component={Link}
                  to={`/edituser/${user._id}`}
                  style={{ marginRight: 20 }}
                >
                  Edit
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => {
                    deleteUser(user._id);
                  }}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </StyledTable>
    </div>
  );
};

export default AllUsers;
