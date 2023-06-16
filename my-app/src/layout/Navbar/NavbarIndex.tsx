import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import SearchBox from '../../component/SearchBox/SearchBox';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './NavBar.css';
import { IconButton } from '@mui/material';
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
interface ItemRouter {
    path: string;
    children?: ItemRouter[];
    Component?: (props: any) => JSX.Element;
    title?: string;
};

export const LIST_ROUTE_COMPONENT: ItemRouter[] = [
    {
        path: '/home', title: 'Home'
    },
    {
        path: '/series', title: 'Series'
    },
    {
        path: '/films', title: 'Films'
    },
    {
        path: '/new-and-popular', title: 'New & Popular'
    },
    {
        path: '/my-list', title: 'My List'
    },
    {
        path: '/browse-by-languages', title: 'Browse by Languages'
    }
];

function NavbarIndex() {
    const user = useSelector((state: any) => state.user);
    const [check, setCheck] = useState<boolean>(false);
    const [open, setOpen] = useState<boolean>(false);
    const navigate = useNavigate();
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 200) {
                setCheck(true);
            }
            else {
                setCheck(false);
            }
        }

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    })
    return (
        // <div className={`NavBar ${check ? 'active' :''}`}>
        <div className={`navbar ${check ? 'active' : ''}`}>
            <div className='direct'>
                <div>
                    <h1>MyNetFlix</h1>
                </div>
                {LIST_ROUTE_COMPONENT.map((route, index) => (
                    <NavLink
                        key={index}
                        to={route.path}
                    >
                        <span>{route.title}</span>
                    </NavLink>
                ))}

            </div>
            <div className='right-bar'>
                <SearchBox placeholder='Searching...' />
                <IconButton onClick={() => setOpen(!open)}>
                    <AccountCircleIcon className='user' />
                </IconButton>
            </div>

            {open &&
                (
                    user ? (
                        <div className='loginTag'>
                            <div className='login' onClick={() => { navigate('/login') }}><p>Logout</p></div>
                        </div>
                    ) : (
                        <div className='loginTag'>
                            <div className='login' onClick={() => navigate('/login')}><p>Login</p></div>
                            <div className='login'><p>Register</p></div>
                        </div>
                    )
                )
            }
        </div>
        // </div>
    )
}

export default NavbarIndex