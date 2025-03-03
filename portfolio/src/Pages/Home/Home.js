import React from 'react';
import './Home.css';
import Typewriter from 'typewriter-effect';
import resume from '../../Assets/Docs/Divyank_Gupta.pdf';
import { Link } from 'react-scroll';
import profileImage from '../../Assets/images/DIVYANKgupta.jpg';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';

const Home = () => {
  return (
    <>
       <div className='container-fluid home-container' id='home'>
            <div className='container home-content'>
                <Fade right>
                <h3>👋 Hello, I'm </h3>
                <h1>Divyank Gupta</h1>
                <h3>A passionate</h3>
                <h2>
                    <Typewriter
                        options={{
                            strings: ['Full Stack Developer !', 'MERN Stack Developer !', 'Java Developer !'],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </h2>
                </Fade>

                <Fade bottom>
                <div className='home-buttons'>
                  <Link to="contact" className="btn btn-hire">
                    Hire Me
                  </Link>
                  <a className='btn btn-cv' href={resume} download='Divyank_Gupta.pdf'>My Resume</a>
                </div>
                </Fade>
            </div>
            <Zoom><img src={profileImage} alt='Profile Image' className='profile-image' /></Zoom>
        </div> 
    </>
  )
}

export default Home