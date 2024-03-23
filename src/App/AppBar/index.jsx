import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import ShareIcon from '@mui/icons-material/Share';
import Avatar from '@mui/material/Avatar';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import "./index.css"

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.25),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));


function NavBar({ setFilter, filter, setTabe , count ,tabe}) {
  return (
    <AppBar position="fixed" className='appLayout' sx={{ backgroundColor: "white" }}>
      <Toolbar>
        <Typography
          variant="h6"
          className='color'
          noWrap
          component="div"
          sx={{ marginRight: "25px", display: { xs: 'none', sm: 'block' } }}
        >
          Real Food Store
        </Typography>
        <div className="searchWrapper">
          <Search >
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              value={filter}
              onChange={(e) => {
                const { value } = e.target;
                setFilter(value)
              }}
            />
          </Search>
        </div>

        <Typography
          variant="h6"
          className='color'
          noWrap
          component="div"
          onClick={() => { setTabe(0) }}
          sx={{ cursor: "pointer" , borderBottom:tabe===0&&"2px solid blue" }}

        >
          Products
        </Typography>
        <IconButton
          color="inherit"
          className='color'
          sx={{ color: "black" }}
          size='large'
          onClick={() => { setTabe(1) }}
        >
          <span style={{ position: "relative" }}>
            <ShoppingCartIcon style={{ fontSize: "2.5rem" , borderBottom:tabe===1&&"2px solid blue" }} />
            <Avatar sx={{ width: 20, height: 20 , fontSize:"11px" }} style={{ position: "absolute", right: -5, top: -5, backgroundColor: "orange" }} alt="Travis Howard" >
            {count}
            </Avatar>
          </span>
        </IconButton>

        <IconButton
          color="inherit"
          className='color'
          sx={{ color: "black" }}
          size='large'
        >
          <ShareIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;