import React from 'react'
import logo from '../Images/HobbyCue Logo.png'
import explore from '../Images/Explore.png'
import Hobbies from '../Images/Hobbies.png'


const Header = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light ">
  <div className="container-fluid">
    <div className="brand">
      <a className="navbar-brand" href="#">
        <img src={logo} alt="Hobby Cue" />
      </a>
    </div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse main" id="navbarSupportedContent">
      <div className="serch">
        <input className="form-control me-2 serch_a" type="search" placeholder="Search" aria-label="Search" />
        <button className=" serch_b" type="submit"><i className="fa-solid fa-magnifying-glass" /></button>
      </div>
      <div className="explore mx-0 p-0 mt-1">
        <div className="img1 ">
          <img src={explore} alt="explore" />
        </div>
        <div className="dropdown mx-0 ">
          <button className="btne dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
            <a className="mx-1" href>Explore</a>
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li><a className="dropdown-item" href="#">People-Communnity</a></li>
            <li><a className="dropdown-item" href="#">Places-venues</a></li>
            <li><a className="dropdown-item" href="#">Programs-events</a></li>
            <li><a className="dropdown-item" href="#">Products-store</a></li>
            <li><a className="dropdown-item" href="#">Blogs</a></li>
          </ul>
        </div>
        <i className="fa-solid fa-angle-down  mx-1 mt-4" style={{color: '#c5cad3'}} />
      </div>
      <div className="explore">
        <div className="img1 ">
          <img src={Hobbies} alt="explore" />
        </div>
        <a className="mx-1" href>Hobbies</a>
        <i className="fa-solid fa-angle-down  mx-1 mt-4" style={{color: '#c5cad3'}} />
      </div>
      <div>
        <button type="button" className="btn">Sign In</button>
      </div>
      <div className=" flexs d-flex">
        <div className="img2 ">
          <i className="fa-solid fa-bookmark fa-xl" style={{color: '#8064a2'}} />
        </div>
        <div className="img2 ">
          <i className="fa-solid fa-bell fa-xl" style={{color: '#8064a2'}} />
        </div>
        <div className="img2 ">
          <i className="fa-solid fa-cart-shopping fa-xl" style={{color: '#8064a2'}} />
        </div>
      </div>
    </div>
  </div>
</nav>

    </div>
  )
}

export default Header