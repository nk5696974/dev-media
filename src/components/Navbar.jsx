import * as React from "react";
import { Pets } from "@mui/icons-material";
import { AppBar, Avatar, Badge, InputBase, Menu, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import styled from "styled-components";
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MenuItem from '@mui/material/MenuItem';

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between"
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  width: "40% ",
}));

const Icons = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "20px",
  // [theme.breakpoints.up('sm')]: {
  //   display: "flex"
  // }
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap: "10px",
  // [theme.breakpoints.up('sm')]: {
  //   display: "none"
  // }
}));

// styledToolbar to add own theme, Typography with responsive. And Icon Pets.
// Icons for Mail, Notification.
// Userbox for Avatar and Name, if screen is small.

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <AppBar position="sticky">
      <StyledToolbar> 
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>Dev Media</Typography>
        <Pets sx={{ display: { xs: "block", sm: "none" } }} />
        <Search><InputBase placeholder="Search..." /></Search>
        <Icons >
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
          <Badge badgeContent={4} color="error">
            <NotificationsIcon />
          </Badge>
          <Avatar sx={{ width: 30, height: 30 }} onClick={(e) => setOpen(true)}/>
        </Icons>
        <UserBox onClick={(e) => setOpen(true)}>
          <Avatar sx={{ width: 30, height: 30 }} />
          <Typography variant="span">John</Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) =>setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
