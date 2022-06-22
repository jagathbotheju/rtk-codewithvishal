import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

const Header = () => {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography flexGrow={1} variant="h4">
            RTK Cocktail
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
