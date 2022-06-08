import React from "react";
import { AppBar, Tab, Tabs, Toolbar, Typography } from "@mui/material";
import { pink } from "@mui/material/colors";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography flexGrow={1} variant="h4">
            RTK CRUD
          </Typography>
          <Tabs textColor="inherit" value={0}>
            <Tab label="ADD" component={Link} to="/addContact" />
          </Tabs>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
