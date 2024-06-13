import React, { useState } from 'react';
import { CgProfile } from 'react-icons/cg';
import { FaCalendarAlt, FaChartLine, FaChevronDown, FaHome, FaRegClock, FaSearch } from 'react-icons/fa';
import { Link, Outlet } from 'react-router-dom';
import Home from './Home';
import UserDashboard from './UserDashboard';
import TestStart from './TestStart';

import { text } from '@fortawesome/fontawesome-svg-core';

const Navbar = () => {
    const [dropdownVisible, setDropdownVisible] = useState(false);

    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    };

    return (

        <div style={styles.sticky}>
            <nav style={styles.navbar}>
                <div style={styles.logo}>{`SELF `}</div>

                {/* <div style={styles.searchContainer}>
                    <button>
                        <span >Learning</span>
                        <FaChevronDown size={'20px'} />
                    </button>
                    <input type="text" placeholder="Search.." style={styles.searchInput} />
                    <button><FaSearch size={'22px'} /></button>
                </div> */}
                <div className="d-flex align-items-center searchinput ">
                    <input className='' type="text" placeholder="Search.." style={styles.searchInput} />
                    <i className="fa-solid fa-magnifying-glass icon1"></i>
                </div>
                <div>
                    <CgProfile size={'30px'} />
                    <FaChevronDown size={'20px'} />

                </div>
            </nav>

            <div style={styles.sidebarMain}>
                <div style={styles.sidebar}>
                    <div style={styles.iconContainer}>
                        <FaHome style={styles.icon} />
                        <Link className='Link text-light fw-normal' to='/'>
                            <span>Home</span>
                        </Link>
                    </div>
                    <div style={styles.iconContainer}>
                        <FaRegClock style={styles.icon} />
                        <Link className='Link text-light fw-normal' to='/timeline'>
                            Timeline
                        </Link>
                    </div>
                    <div style={styles.iconContainer}>
                        <FaChartLine style={styles.icon} />
                        <Link className='Link text-light fw-normal' to='/traning'>
                            <span>Training Analysis</span>
                        </Link>
                    </div>
                    <div style={styles.iconContainer}>
                        <FaCalendarAlt style={styles.icon} />
                        <Link className='Link fw-normal text-light' to='schedule'>
                            <span>Training Schedule</span>
                        </Link>
                    </div>
                </div>
                <div style={{ width: '100%' }}>


                    <Outlet />

                </div>
            </div>
        </div>
    );
};

const styles = {
    navbar: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 20px',
        backgroundColor: '#080867',
        color: 'white',
    },
    logo: {
        fontSize: '24px',
        fontWeight: 'bold',
        paddingLeft: '130px'
    },
    searchinput: {
        position: 'relative',
    },
    icon1: {
        position: 'relative',
        right: '20px',
    },

    searchContainer: {
        display: 'flex',
        alignItems: 'center',
    },
    searchInput: {
        padding: '6px',
        margin: '8px 0',
        boxSizing: 'border-box',
        width: '420px',
    },
    sidebarMain: {
        // border: "2px solid red",
        display: 'flex',
        // alignItems: 'center',
    },

    sidebar: {
        height: '90vh',
        width: '150px',
        backgroundColor: '#080867',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: '20px',
        gap: '50px'

    },
    iconContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        // justifyContent:center,
        width: '100%',
        padding: '10px 20px',
        cursor: 'pointer',
        color: 'white'
    },
    icon: {
        marginRight: '10px',
        fontSize: '24px',
    },
};

export default Navbar;