import React from 'react'
import { Link } from 'react-router-dom';
import objectsImage1 from '../Images/OBJECTS.png';
import objectsImage2 from '../Images/OBJECTS 2.png';
import googleImage from '../Images/Google.png';
import facebookImage from '../Images/Facebook.png';
import passwordImage from '../Images/Password.png';
import ellipse12Image from '../Images/Ellipse 12.png';
import group99Image from '../Images/Group 99.jpg';

export const Joinin = () => {
  return (
    <div>
        <div>
  <div className="container mt-2 mb-2 mx-0">
    <div className="row">
      <div className="col-md-7 col-sm-12">
        <div className="first-container">
          <h3 className="mb-4">Explore Your <span className="hobby m-2">hobby</span>or<span className="pass m-2">passion</span></h3>
          <p className="pg">Sign-in to interact with a community of fellow hobbyists and an eco-system of experts,
            teachers, suppliers, classes, workshops, and places to practice, participate or perform. Your
            hobby may be about visual or performing arts, sports, games, gardening, model making, cooking,
            indoor or outdoor activities…
          </p>
          <p className="pg">
            If you are an expert or a seller, you can Add your Listing and promote yourself, your students,
            products, services or events. Hop on your hobbyhorse and enjoy the ride.
          </p>
        </div>
        <div className="obj-1 d-flex">
          <img className="mx-2" src={objectsImage1} alt />
          <img src={objectsImage2} alt />
        </div>
      </div>
      <div className="col-md-5 sgniu col-sm-12">
        <div className="d-flex auth mt-5 mx-5">
        <Link className="sgn mx-4" to="/">Sign In</Link>
      <Link className="sgnp" to="/join">Join In</Link>
        </div>
        <div className="d-flex">
          <div className="btngf">
            <button className="btng text-center mt-3 p-2">
              <img className="imgg  my-1" src={googleImage} alt="Google" />
              Continue With Google
            </button>
            <button className="btng text-center mt-3 p-2">
              <img className="imgg  my-1" src={facebookImage} alt="facebook" />
              Continue With facebook
            </button>
          </div>
        </div>
        <div className="hr-line ms-4 my-3">
          <p>Or connnect with</p>
        </div>
        <div className="input-group ms-4 mb-2">
          <input className="form-control" type="email" placeholder="Email" />
          <div className="input-group-append">
          </div>
        </div>
        <div className="input-group ms-4">
          <input className="form-control" type="password" placeholder="Password" />
          <div className="input-group-append">
            <span className="input-group-text">
              <img className="p-1" src={passwordImage} alt="Password Icon" />
            </span>
          </div>
        </div>
        <div className=" psw mx-4 my-0">
          <div>
            <input className="mx-2 my-2" type="checkbox" /><span>Remember me</span>
          </div>
          <div>
            <i className="fa-solid fa-lock mx-2" style={{color: '#9396a3'}} /><span>Forgot password?</span>
          </div>
        </div>
        <p className="policy">By continuing, you agree to our Terms of Service and Privacy Policy.</p>
        <button className="btnn-agree text-center mt-0 p-0">
          Agree and Continue
        </button>
      </div>
    </div>
  </div>
  <div className="row mx-0 mt-5">
    <div className="d-flex  justify-content-center col-sm-12 ">
      <div className="card mb-4 people " style={{width: '35rem'}}>
        <div className="card-body">
          <h5 className="card-title mx-2"><i className="fa-solid fa-users-line fa-xl mx-2" style={{color: '#8064a2'}} />People</h5>
          <p className="card-text mt-2 mb-2">Find a teacher, coach, or expert for your hobby interest in your
            locality. Find a partner, teammate, accompanist or collaborator.</p>
          <div>
            <button type="button" className="btn mx-0">Connect</button>
          </div>
        </div>
      </div>
      <div className="card mb-4 mx-3 place" style={{width: '35rem'}}>
        <div className="card-body">
          <h5 className="card-title mx-2"><i className="fa-solid fa-location-dot fa-xl mx-2" style={{color: '#c9d8c2'}} />place</h5>
          <p className="card-text mt-2 mb-2">Find a class, school, playground, auditorium, studio, shop or an
            event venue. Book a slot at venues that allow booking through hobbycue.</p>
          <div>
            <button type="button" className="btn mx-0">Meet Up</button>
          </div>
        </div>
      </div>
    </div>
    <div className=" d-flex justify-content-center">
      <div className="card card mb-4 product" style={{width: '35rem'}}>
        <div className="card-body">
          <h5 className="card-title mx-2"><i className="fa-solid fa-basket-shopping fa-xl mx-2" style={{color: '#c0504d'}} />Product</h5>
          <p className="card-text mt-2 mb-2">Find equipment or supplies required for your hobby. Buy, rent or
            borrow from shops, online stores or from community members.</p>
          <div>
            <button type="button" className="btn mx-0">Got It</button>
          </div>
        </div>
      </div>
      <div className="card card mx-3 mb-4 program" style={{width: '35rem'}}>
        <div className="card-body">
          <h5 className="card-title mx-2"><i className="fa-solid fa-calendar-check fa-xl mx-2" style={{color: '#0096cb'}} />program</h5>
          <p className="card-text mt-2 mb-2">Find events, meetups and workshops related to your hobby. Register or
            buy tickets online.</p>
          <div>
            <button type="button" className="btn mx-0">Attend</button>
          </div>
        </div>
      </div>
    </div>
    <div className="contain my-4 row">
      <div className="card add col-sm-12" style={{width: '71.5rem'}}>
        <div className="d-flex">
          <i className="fa-solid fa-circle-plus fa-2xl mt-5 mx-3 p-3" style={{color: '#0096c8'}} />
          <h4 className="my-4 mt-5 p-1">Add Your Own</h4>
        </div>
        <p className="mx-3">Are you a teacher or expert? Do you sell or rent out equipment, venue or event tickets?
          Or, you know someone who should be on hobbycue? Go ahead and Add your Own page</p>
        <div className="p-2">
          <button type="button" className="btn mx-0">Add Now</button>
        </div>
      </div>
    </div>
    <div className="cont row ">
      <div className="card mb-4 add col-sm-12" style={{width: '71.5rem'}}>
        <div className="d-flex">
          <i className="fa-solid fa-quote-left fa-2xl mx-3 p-3 mt-5" style={{color: '#8064a2'}} />
          <h4 className="my-4 mt-5 p-1">Testimonials</h4>
        </div>
        <p className="mx-3 fw-200">In a fast growing and ever changing city like Bangalore, it sometimes becomes
          very difficult to find or connect with like minded people. Websites like hobbycue.com is a great
          service which helps me get in touch with, communicate, connect, and exchange ideas with other
          dancers. It also provides the extra benefit of finding products and services that I can avail, which
          I can be assured is going to be of great quality as it comes recommended by people of the hobbycue
          community. To have discussions, to get visibility, and to be able to safely explore various hobbies
          and activities in my city, all under one roof, is an excellent idea and I highly recommend it.</p>
        <div className="row">
          <div className="col-md-8 col-sm-12 text">
            <div className="audio d-flex">
              <audio controls className="mt-2">
              </audio>
              <img className=" img-fluid p-1 mt-2 " src={ellipse12Image} width="50px" height="50px" alt />
            </div>
          </div>
          <div className="col-md-4">
            <div className="shubh d-flex align-items-center">
              <img className="p-3" src="/Images/Ellipse 12.png" width="100px" alt />
              <div>
                <h4 className="mt-0">Shubha Nagarajan</h4>
                <p className="dancer">Classical Dancer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="first-container col-sm-12 mb-4">
          <h3 className="mb-4 ms-4">Your <span className="hobby m-2">hobby</span>Your<span className="pass m-2">Community...</span></h3>
          <div className="ms-4">
            <button type="button" className="btnn mx-0 ">Get Started</button>
          </div>
          <div className="mt-5 text-center">
            <img className="img-fluid" src={group99Image} alt="group" />
          </div>
        </div>
      </div>
    </div>
  </div></div>

    </div>
  )
}
export default Joinin
