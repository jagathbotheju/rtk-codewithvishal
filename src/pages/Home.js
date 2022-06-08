import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  Chip,
  Stack,
  TableBody,
  TableCell,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { deleteContact, setFilter } from "../redux/features/contactSlice";
import { toast } from "material-react-toastify";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { contacts, filter } = useSelector((state) => state.contact);
  const [filteredContacts, setFilteredContacts] = useState([]);

  const onDelete = (id) => {
    dispatch(deleteContact(id));
    toast.success("Contact deleted...");
  };

  useEffect(() => {
    const fContacts = contacts.filter((contact) => {
      if (filter === "All") return contact;
      else return contact.status === filter;
    });
    setFilteredContacts(fContacts);
  }, [filter]);

  return (
    <>
      <Stack width={800} mx="auto" mt={10}>
        <TableContainer>
          <Table sx={{ minWidth: 650 }}>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Phone</TableCell>
                <TableCell>Status</TableCell>
                <TableCell align="center">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredContacts.map((contact, index) => (
                <TableRow key={contact.id}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{contact.name}</TableCell>
                  <TableCell>{contact.email}</TableCell>
                  <TableCell>{contact.phone}</TableCell>
                  <TableCell>{contact.status}</TableCell>
                  <TableCell>
                    <Stack direction="row" spacing={1}>
                      <Chip
                        label="Edit"
                        size="small"
                        color="primary"
                        onClick={() => navigate(`/editContact/${contact.id}`)}
                      />
                      <Chip
                        label="Delete"
                        size="small"
                        color="error"
                        onClick={() => onDelete(contact.id)}
                      />
                      <Chip
                        label="View"
                        size="small"
                        color="success"
                        onClick={() => navigate(`/viewContact/${contact.id}`)}
                      />
                    </Stack>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Stack direction="row" mt={5} spacing={2}>
          <Button
            color="success"
            size="small"
            variant="contained"
            onClick={() => dispatch(setFilter("Active"))}
          >
            Active
          </Button>
          <Button
            size="small"
            variant="contained"
            onClick={() => dispatch(setFilter("Inactive"))}
          >
            Inactive
          </Button>
          <Button
            size="small"
            variant="contained"
            onClick={() => dispatch(setFilter("All"))}
          >
            Reset
          </Button>
        </Stack>
      </Stack>
    </>
  );
};

export default Home;
