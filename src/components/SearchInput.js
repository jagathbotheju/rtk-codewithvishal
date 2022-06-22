import { Stack, TextField } from "@mui/material";
import React, { useState } from "react";
import { fetchSearchCocktail } from "../redux/features/cocktailSlice";
import { useDispatch } from "react-redux";

const SearchInput = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(searchTerm);
    dispatch(fetchSearchCocktail(searchTerm));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Stack width="60%" mt={5} mx="auto">
          <TextField
            label="Search Cocktails"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </Stack>
      </form>
    </>
  );
};

export default SearchInput;
