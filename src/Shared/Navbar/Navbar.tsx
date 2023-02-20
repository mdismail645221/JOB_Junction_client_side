// import React from "react";
import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import Avatar from "@mui/material/Avatar";
import { Link } from "react-router-dom";
import RecordVoiceOverIcon from "@mui/icons-material/RecordVoiceOver";
import WorkIcon from "@mui/icons-material/Work";
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));
const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    React.useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          > */}
          {/* <MenuIcon /> */}

          <Box sx={{ mr: 2, display: "flex", placeItems: "center" }}>
            <Avatar
              src="https://i.ibb.co/6FzXScD/JJ.png"
              sx={{ width: 42, height: 42 }}
              variant="rounded"
              alt="job junction"
            >
              {/* <AssignmentIcon /> */}
            </Avatar>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{
                display: { xs: "none", sm: "block" },
                ml: "5px",
              }}
            >
              Jub_Junction
            </Typography>
          </Box>
          {/* </IconButton> */}
          {/* <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
          MUI
            <Avatar
              src="../../assets/logos/jobjunction.jpg"
              sx={{ width: 56, height: 56 }}
              variant="rounded"
            >
            </Avatar>
          </Typography> */}
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Link
              to={"/messaging"}
              style={{ textDecoration: "none", margin: "0px 5px" }}
            >
              <Box
                sx={{
                  display: { xs: "none", md: "flex" },
                  flexDirection: "column",
                  placeItems: "center",
                  position: "relative",
                  top: "4px",
                }}
              >
                <Box color="inherit">
                  <Badge badgeContent={4} color="error">
                    <MailIcon color="action" />
                  </Badge>
                </Box>
                <Typography
                  variant="h1"
                  noWrap
                  component="div"
                  sx={{
                    display: { xs: "none", sm: "block" },

                    mt: "0px",
                    padding: "0px",
                    fontSize: "20px",
                    fontWeight: "bold",
                    position: "relative",
                    top: "-6px",
                  }}
                >
                  Message
                </Typography>
              </Box>
            </Link>
            <Link
              to={"/my-network"}
              style={{ textDecoration: "none", margin: "0px 5px" }}
            >
              <Box
                sx={{
                  display: { xs: "none", md: "flex" },
                  flexDirection: "column",
                  placeItems: "center",
                  position: "relative",
                  top: "4px",
                }}
              >
                <Box color="inherit">
                  <Badge badgeContent={4} color="error">
                    <RecordVoiceOverIcon color="action" />
                  </Badge>
                </Box>
                <Typography
                  variant="h1"
                  noWrap
                  component="div"
                  sx={{
                    display: { xs: "none", sm: "block" },

                    mt: "0px",
                    padding: "0px",
                    fontSize: "20px",
                    fontWeight: "bold",
                    position: "relative",
                    top: "-6px",
                  }}
                >
                  My Network
                </Typography>
              </Box>
            </Link>
            <Link
              to={"/jobs"}
              style={{ textDecoration: "none", margin: "0px 5px" }}
            >
              <Box
                sx={{
                  display: { xs: "none", md: "flex" },
                  flexDirection: "column",
                  placeItems: "center",
                  position: "relative",
                  top: "4px",
                }}
              >
                <Box color="inherit">
                  <Badge badgeContent={4} color="error">
                    <WorkIcon color="action" />
                  </Badge>
                </Box>
                <Typography
                  variant="h1"
                  noWrap
                  component="div"
                  sx={{
                    display: { xs: "none", sm: "block" },

                    mt: "0px",
                    padding: "0px",
                    fontSize: "20px",
                    fontWeight: "bold",
                    position: "relative",
                    top: "-6px",
                  }}
                >
                  Jobs
                </Typography>
              </Box>
            </Link>
            {/* <Link to={"/my-network"} style={{ textDecoration: "none" }}>
              <Box
                sx={{
                  display: { xs: "none", md: "flex" },
                  placeItems: "center",
                }}
              >
                <IconButton
                  size="large"
                  aria-label="show 8 new network"
                  color="inherit"
                >
                  <Badge badgeContent={8} color="error">
                    <RecordVoiceOverIcon color="action" />
                  </Badge>
                </IconButton>

                <Typography
                  variant="h6"
                  noWrap
                  component="div"
                  sx={{
                    display: { xs: "none", sm: "block" },
                    ml: "0px",
                  }}
                >
                  My Network
                </Typography>
              </Box>

            </Link> */}

            {/* <Box
              sx={{ display: { xs: "none", md: "flex" }, placeItems: "center" }}
            >
              <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <Badge badgeContent={17} color="error">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{
                  display: { xs: "none", sm: "block" },
                  ml: "0px",
                }}
              >
                Noification
              </Typography>
            </Box> */}

            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                flexDirection: "column",
                placeItems: "center",
                position: "relative",
                top: "4px",
                margin: "0px 5px",
              }}
            >
              <Box color="inherit">
                <Badge badgeContent={17} color="error">
                  <NotificationsIcon color="action" />
                </Badge>
              </Box>
              <Typography
                variant="h1"
                noWrap
                component="div"
                sx={{
                  display: { xs: "none", sm: "block" },

                  mt: "0px",
                  padding: "0px",
                  fontSize: "20px",
                  fontWeight: "bold",
                  position: "relative",
                  top: "-6px",
                }}
              >
                Notification
              </Typography>
            </Box>

            {/* <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton> */}
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                placeItems: "center",
                position: "relative",
                top: "4px",
                margin: "0px 5px",
              }}
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              {/* https://i.ibb.co/XxdjZXt/profile-Demo.png */}
              <Avatar
                sx={{
                  width: 42,
                  height: 42,
                  position: "relative",
                  top: "-5px",
                }}
                alt="profile"
                src="https://i.ibb.co/XxdjZXt/profile-Demo.png"
              />
              {/* <AccountCircle
                fontSize="large"
                sx={{ position: "relative", top: "-5px" }}
              /> */}
            </Box>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
};

export default Navbar;
