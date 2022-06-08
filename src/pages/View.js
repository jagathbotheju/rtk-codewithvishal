import React, { useEffect } from "react";
import { Card, CardContent, Button, Stack, Typography } from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getContact } from "../redux/features/contactSlice";

const View = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const { contact } = useSelector((state) => state.contact);

  useEffect(() => {
    dispatch(getContact(id));
  }, [id]);

  return (
    <>
      <Stack mx="auto" mt={10} minWidth={500}>
        <Card>
          <CardContent>
            <Typography gutterBottom color="primary" variant="h4">
              {contact.name}
            </Typography>
            <Typography>{contact.email}</Typography>
            <Typography>{contact.phone}</Typography>
            <Typography>{contact.status}</Typography>
            <Button
              sx={{ mt: 2 }}
              onClick={() => navigate("/")}
              variant="contained"
            >
              Back
            </Button>
          </CardContent>
        </Card>
      </Stack>
    </>
  );
};

export default View;
