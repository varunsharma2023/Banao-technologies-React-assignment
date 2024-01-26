import React from 'react';
import '../App.css';

const Footer = () => {
  return (
    
    <div>
        <footer className="footer">
      <div className="container"></div>
      <div className="row me-0">
        <div className="col-12 col-lg-3 text-white foot">
          <h4>Hobby Cue</h4>
          <ul>
            <li><a href="">About Us</a></li>
            <li><a href="">Our Services</a></li>
            <li><a href="">Work with Us</a></li>
            <li><a href="">FAQ</a></li>
            <li><a href="">Contact Us</a></li>
          </ul>
        </div>
        <div className="col-12 col-lg-3 text-white foot">
          <h4>How Do I</h4>
          <ul>
            <li><a href="">Sign Up</a></li>
            <li><a href="">Add a listing</a></li>
            <li><a href="">Claim Listing</a></li>
            <li><a href="">Post a Query</a></li>
            <li><a href="">Add a blog post</a></li>
            <li><a href="">Other Queries</a></li>
          </ul>
        </div>
        <div className="col-12 col-lg-3 text-white foot">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="">Listings</a></li>
            <li><a href="">Blog Posts</a></li>
            <li><a href="">Shop/Store</a></li>
            <li><a href="">Community</a></li>
          </ul>
        </div>
        <div className="col-12 col-lg-3 text-white foot">
          <h4>Social media</h4>
          <div className="d-flex row links">
            <div className="col-sm-12">
              <i className="fa-brands fa-facebook fa-xl me-2" style={{ color: '#c6c7c8' }}></i>
              <i className="fa-brands fa-twitter fa-xl me-2" style={{ color: '#c6c7c8' }}></i>
              <i className="fa-brands fa-square-instagram fa-xl me-2" style={{ color: '#c6c7c8' }}></i>
              <i className="fa-brands fa-square-pinterest fa-xl me-2" style={{ color: '#c6c7c8' }}></i>
              <i className="fa-brands fa-google-plus-g fa-xl me-2" style={{ color: '#c6c7c8' }}></i>
              <i className="fa-brands fa-youtube fa-xl me-2" style={{ color: '#c6c7c8' }}></i>
              <i className="fa-brands fa-telegram fa-xl me-2" style={{ color: '#c6c7c8' }}></i>
              <i className="fa-solid fa-envelope fa-xl me-2" style={{ color: '#c6c7c8' }}></i>
            </div>
            <h6 className="mt-5" style={{ color: 'black' }}>Invite Friends</h6>
            <div className="serche mt-2">
              <input className="form-control me-2 serche_a" type="search" placeholder="Email Id" aria-label="Search" />
              <button className="serche_b" type="submit">Invite</button>
            </div>
          </div>
        </div>
        <hr />
        <p className="cprt">© Purple Cues Private Limited</p>
        
      </div>
      </footer>
      
    </div>
    
  );
}

export default Footer;
