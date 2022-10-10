import React from 'react'
import './services.css'
import {ImCheckmark} from 'react-icons/im'

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>


      <div className='container services__container'>
        <article className='service'>
          <div className='service__head'>
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
            <li className='service__list-icon'>
              <ImCheckmark/>
            <p>Determined the structure and design of web pages based on user requirements and balanced functional and aesthetic designs</p>
            </li>
            <li className='service__list-icon'>
              <ImCheckmark/>
            <p>Created features to enhance the user experience while ensuring that the web design is optimized for smartphones</p>
            </li>
            <li className='service__list-icon'>
              <ImCheckmark/>
            <p>Employed a variety of languages such as HTML and CSS to write and create user-friendly web pages</p>
            </li>
            <li className='service__list-icon'>
              <ImCheckmark/>
            <p>Identified web-based user interactions and developed highly-responsive user interface components via React concepts</p>
            </li>
            <li className='service__list-icon'>
              <ImCheckmark/>
            <p>Troubleshot interface software and debugged application codes to improve functionality and performance </p>
            </li>
            <li className='service__list-icon'>
              <ImCheckmark/>
            <p>Assisted in developing the latest user-facing features using React.js and built reusable components and front-end libraries for future use </p>
            </li>


            

          </ul>
        </article>

        <article className='service'>
          <div className='service__head'>
            <h3>Database Development</h3>
          </div>

          <ul className='service__list'>
            <li className='service__list-icon'>
              <ImCheckmark/>
            <p>Writing optimized SQL queries for integration with other applications and providing support and direction to developers and other support personnel as required.</p>
            </li>
            <li className='service__list-icon'>
              <ImCheckmark/>
            <p>Utilized joins and sub-queries to simplify complex queries involving multiple tables while optimising procedures and triggers in production
</p>
            </li>
            <li className='service__list-icon'>
              <ImCheckmark/>
            <p>Wrote complex SQL Queries, Stored Procedure, Triggers, Views and Indexes using DML, DDL commands and user defined functions to implement the business logic</p>
            </li>
            <li className='service__list-icon'>
              <ImCheckmark/>
            <p>Performed Normalization and De-normalization on existing tables for faster query results</p>
            </li>
            <li className='service__list-icon'>
              <ImCheckmark/>
            <p>Managing database and application upgrades, patching, security, troubleshooting and issue resolution, backup procedures, and performance tuning</p>
            </li>
            <li className='service__list-icon'>
              <ImCheckmark/>
            <p>Coordinating with onshore/offshore stakeholders for task clarification, fixes and review </p>
            </li>


            

          </ul>
        </article>





















      </div>
    </section>
  )
}

export default Services