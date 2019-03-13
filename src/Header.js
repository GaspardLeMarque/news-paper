import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
        <div>
            <h1 id="main-heading">news paper</h1>
            <div class="header">
                <div class="topnav">
                    <a href="#Politics">Politics</a>
                    <a href="#Tech">Tech</a>
                    <a href="#Fun and Games">Fun&Games</a>
                </div>  
                <div class="search">
                    <span>
                        <input type="text" id="search-bar" placeholder="Search what was lost..."/>
                    </span>
                    <span>
                        <button type="submit" id="search-button">Search</button>
                    </span>  
                </div>   
            </div>
        </div>
    )
  }
}
