import React from 'react';
import history from '../../utils/History';
import { useReduxState } from '../../utils/State';

import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
// import MailIcon from '@material-ui/icons/Mail';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import ViewCarouselIcon from '@material-ui/icons/ViewCarousel';
import CollectionsBookmarkIcon from '@material-ui/icons/CollectionsBookmark';
import BusinessIcon from '@material-ui/icons/Business';
import SettingsIcon from '@material-ui/icons/Settings';
import ExitIcon from '@material-ui/icons/ExitToApp';
// import NotificationsIcon from '@material-ui/icons/Notifications';
import Button from '@material-ui/core/Button';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import MoreIcon from '@material-ui/icons/Menu';


const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'block',
  },
  small: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    [theme.breakpoints.up('md')]: {
      display: 'none'
    },
    position: "relative",
    marginLeft: "15%",    
  },
  sectionMobileMenu: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
    position: "absolute"
  },
}));

export default function PrimarySearchAppBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  let [ { logedIn }, dispatch ] = useReduxState();

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleProfileMenu = (newValue) => {
    if (newValue === 1){
      history.push("/myAccount");
    }else if (newValue === 2){
      dispatch({ type: "logoutUser", logedIn: false, username: "", token: "", id: "" });
      history.push("/login");
    }
    handleMenuClose();
  }

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={() => handleProfileMenu(1)}>
        <IconButton color="inherit">
            <Badge color="secondary">
              <SettingsIcon />
            </Badge>
          </IconButton>My Account
      </MenuItem>
      <MenuItem onClick={() => handleProfileMenu(2)}>
        <IconButton color="inherit">
            <Badge color="secondary">
              <ExitIcon />
            </Badge>
          </IconButton>LogOut
      </MenuItem>
    </Menu>
  );

  const handleChangeMobileMenu = (newValue) => {
    if (newValue === 0){
      history.push("/");
      }else if (newValue === 1){
      history.push("/find");
    }else if (newValue === 2){
      history.push("/projects");
    }else if (newValue === 3){
      history.push("/plans");
    }else if (newValue === 4){
      history.push("/joinAsFactory");
    }
    handleMobileMenuClose();
  }

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={() => handleChangeMobileMenu(0)}>
        <IconButton color="inherit">
            <Badge color="secondary">
              <HomeIcon />
            </Badge>
          </IconButton> Home
      </MenuItem>
      <MenuItem onClick={() => handleChangeMobileMenu(1)}>
        <IconButton color="inherit">
            <Badge color="secondary">
              <SearchIcon />
            </Badge>
          </IconButton>Find Factory
      </MenuItem>
      <MenuItem onClick={() => handleChangeMobileMenu(2)}>
        <IconButton color="inherit">
            <Badge color="secondary">
              <CollectionsBookmarkIcon />
            </Badge>
          </IconButton>Your Projects
      </MenuItem>
      <MenuItem onClick={() => handleChangeMobileMenu(3)}>
        <IconButton color="inherit">
            <Badge color="secondary">
              <ViewCarouselIcon />
            </Badge>
          </IconButton>Plans
      </MenuItem>
      <MenuItem onClick={() => handleChangeMobileMenu(4)}>
        <IconButton color="inherit">
            <Badge color="secondary">
              <BusinessIcon />
            </Badge>
          </IconButton>Join as a Factory
      </MenuItem>
      
      
      {/* <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem> */}

      {/* <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem> */}
    </Menu>
  );

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    if (newValue === 0){
      history.push("/")
      }else if (newValue === 1){
      history.push("/find")
    }else if (newValue === 2){
      history.push("/projects")
    }else if (newValue === 3){
      history.push("/plans")
    }else if (newValue === 4){
      history.push("/joinAsFactory")
    }
    setValue(newValue);
  };

  function a11yProps(index) {
    
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  const onClick = () => {
    history.push("/")
  }

  return (
    <div className={classes.grow}>
      <AppBar position="fixed">
        <Toolbar>
          <div className={classes.sectionDesktop}>
            <Typography className={classes.title} variant="h6" noWrap>
            <Button variant="outlined" onClick={onClick}> Logo </Button>
            </Typography>
          </div>

          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            
          {/* <div className={classes.grow} /> */}
            <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
              <Tab label="Home" {...a11yProps(0)}/>
              <Tab label="Find Factory" {...a11yProps(1)}/>
              <Tab label="Your Projects" {...a11yProps(2)}/>

              <Tab label="Plans" {...a11yProps(3)}/>
              <Tab label="Join as Manufacturer" {...a11yProps(4)} />
            </Tabs>


            {/* <IconButton aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="secondary">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton aria-label="show 17 new notifications" color="inherit">
              <Badge badgeContent={17} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton> */}
            { logedIn === true ? 
              <>
                
              </>:
              <>
              </>  
            }
            
          </div>
          <div className={classes.sectionMobileMenu}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>

          <div className={classes.sectionMobile}>
            <Typography className={classes.title} variant="h6" noWrap>
              <Button variant="outlined" onClick={onClick}> Logo </Button>
            </Typography>
          </div>

          <div className={classes.grow} />
          { logedIn === false ?
            <>
              <Button variant="contained" color="secondary" onClick={() => history.push("/register")}>Sign Up</Button>
              <Button color="inherit" onClick={() => history.push("/login")}>Login</Button>
            </> :
            <>
              <IconButton
                  edge="end"
                  aria-label="account of current user"
                  aria-controls={menuId}
                  aria-haspopup="true"
                  onClick={handleProfileMenuOpen}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
            </>
          }
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}
