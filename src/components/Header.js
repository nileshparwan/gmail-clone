import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { Avatar, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';

import './Header.css';
import { ArrowDropDown } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from '../features/userSlice';
import { auth } from '../features/firebase/firebase';

const Header = () => {
    const dispatch = useDispatch(); 
    const user = useSelector(selectUser); 

    const signOut = async () => {
        const isUserSignOut = async () => {
            try {
                await auth.signOut();
                return [true, null]
            } catch (error) {
                return [null, error]; 
            }
        }

        const [userSignOut, error] = await isUserSignOut(); 
        if (!!error) {
            alert("Something went wrong. Please try again later!"); 
            return false; 
        }
        
        console.log(userSignOut)
        dispatch(logout()); 
    }
    
    return (
        <div className='header'>
            <div className="header__left">
                <IconButton>
                    <MenuIcon />
                </IconButton>

                <img
                    src='https://i.pinimg.com/originals/ae/47/fa/ae47fa9a8fd263aa364018517020552d.png'
                    alt='mailbox'
                />
            </div>

            <div className="header__middle">
                <SearchIcon />
                <input placeholder='Search mail' type="text" id="searchbox" name="search-box" aria-label="search"/>
                <ArrowDropDown className='header__inputCaret'/>
            </div>

            <div className="header__right">
                <IconButton>
                    <AppsIcon />
                </IconButton>

                <IconButton>
                    <NotificationsIcon />
                </IconButton>
                <Avatar onClick={signOut} src={user?.photoUrl} />
            </div>
        </div>
    );
};

export default Header;