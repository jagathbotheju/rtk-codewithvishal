import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { grey } from "@mui/material/colors";
import { toast } from "material-react-toastify";
import {
  addContact,
  getContact,
  updateContact,
} from "../redux/features/contactSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const initialState = {
  name: "",
  email: "",
  phone: "",
  status: "",
};

const AddEdit = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { contact } = useSelector((state) => state.contact);
  const { id } = useParams();

  const [state, setState] = useState(initialState);
  const { name, email, phone, status } = state;

  useEffect(() => {
    if (id) {
      dispatch(getContact(id));
      setState({ ...contact });
    }
  }, [id, contact]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && phone && status) {
      if (!id) {
        dispatch(addContact(state));
        toast.success("Contact added successfully");
        navigate("/");
      } else {
        dispatch(updateContact(state));
        toast.success("Contact updated successfully");
        navigate("/");
      }
    } else {
      console.log("Error submit values");
      toast.error("Please enter valid fields...");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Stack
          width="40%"
          mt={10}
          mx="auto"
          p={3}
          boxShadow={3}
          bgcolor={grey[100]}
          spacing={2}
        >
          <Typography gutterBottom variant="h5">
            {id ? "Update Contact" : "Add Contact"}
          </Typography>
          <TextField
            id="name"
            name="name"
            label="Name"
            value={name}
            onChange={handleInputChange}
            size="small"
          />
          <TextField
            id="email"
            name="email"
            label="Email"
            value={email}
            onChange={handleInputChange}
            size="small"
          />
          <TextField
            id="phone"
            name="phone"
            label="Phone"
            value={phone}
            onChange={handleInputChange}
            size="small"
          />
          <FormControl size="small">
            <InputLabel>Status</InputLabel>
            <Select
              name="status"
              label="Status"
              value={status}
              onChange={handleInputChange}
            >
              <MenuItem value="Active">Active</MenuItem>
              <MenuItem value="Inactive">Inactive</MenuItem>
            </Select>
          </FormControl>
          <Button variant="contained" type="submit">
            {id ? "Update Contact" : "Add Contact"}
          </Button>
        </Stack>
      </form>
    </>
  );
};

export default AddEdit;
