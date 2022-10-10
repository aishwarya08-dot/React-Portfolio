/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import './about.css'
import me from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FaBuilding} from 'react-icons/fa'
import {BsCardChecklist} from 'react-icons/bs'

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      
      <div className='container about__container'>
        <div className="about__me">
          <div className="about__me-image">
            <img src={me} alt="about image"/>
          </div>


        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>2 years working</small>

            </article>

            <article className='about__card'>
              <FaBuilding className='about__icon'/>
              <h5>Companies</h5>
              <small>Accenture, Cerner HealthCare and WhiteHat Jr.</small>

            </article>


            <article className='about__card'>
              <BsCardChecklist className='about__icon'/>
              <h5>Projects</h5>
              <small>16+ Completed</small>

            </article>
          </div>

          <p>
          2 years experienced React Developer with hands-on experience in identifying web-based user interactions along with designing and implementing highly-responsive user interface components by deploying React concepts. Proficient in translating designs & wireframes into high-quality code, and writing application interface code via Javascript and ReactJS workflows. Adept at monitoring and maintaining frontend performance and troubleshooting and debugging the same to bolster overall performance.
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>


        </div>

      </div>
    </section>
  )
}

export default About