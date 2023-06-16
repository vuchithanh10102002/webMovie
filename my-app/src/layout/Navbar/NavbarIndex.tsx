import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import SearchBox from '../../component/SearchBox/SearchBox';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './NavBar.css';
import { IconButton } from '@mui/material';
import { Link, useNavigate } from "react-router-dom";
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
        path: '/my-list', title: 'My List'
    },
];

function NavbarIndex() {

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
    const token = localStorage.getItem('token');
    return (
        // <div className={`NavBar ${check ? 'active' :''}`}>
        <div className={`navbar ${check ? 'active' : ''}`}>
            <div className='direct'>
                <div>
                    <h1 style={{ cursor: 'pointer' }} onClick={() => navigate('/home')}>MyNetFlix</h1>
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
                    token ? (
                        <div className='loginTag'>
                            <div className='login' onClick={() => { navigate('/login'); localStorage.removeItem('token') }}><p>Logout</p></div>
                        </div>
                    ) : (
                        <div className='loginTag'>
                            <div className='login' onClick={() => navigate('/login')}><p>Login</p></div>
                            <div className='login' onClick={() => navigate('/register')}><p>Register</p></div>
                        </div>
                    )
                )
            }
        </div>
        // </div>
    )
}

export default NavbarIndex