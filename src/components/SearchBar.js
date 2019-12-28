import React, { Component } from 'react';

const SearchBar = (props) => {
    const style = {
        margin: 'auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
        height: '60px',
        padding: '10px'
    };

    const searchBtn = {
        color: 'white',
        float: 'right',
        fontSize: '30px',
        borderRadius: '50%',
        backgroundColor: 'black',
        margin: '5px'
    }

    const searchTxt = {
        border: 'none',
        borderRadius: '20px',
        fontSize: '20px',
        lineHeight: '40px',
        width: '40%'
    }

    return (
        <div className="search-box" style={style}>
            <input style={searchTxt} className="search-txt" type="text" name="" placeholder="Search Player" />
            <a style={searchBtn} className="search-btn" href="#">
                <i class="fas fa-search"></i>
            </a>
        </div>
    )
};

export default SearchBar;