import React from 'react';
import './Services.css';
import { BiCheck } from 'react-icons/bi';

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Design intuitive user interfaces for mobile apps.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Develop interactive prototypes for user testing.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Iterate and refine designs based on user feedback.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Create visual design assets and style guides.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Ensure consistent branding and visual identity.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Create user personas and user journey maps.</p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX */}

        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Design Website layouts and wireframes.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Develop interactive web forms and validation.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Integrate APIs and web services.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Test and debug website functionality.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Write clean and efficient code.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Maintain and update existing websites.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Implement client-side scripting with JavaScript.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Implement responsive designs for multiple devices.</p>
            </li>
          </ul>
        </article>
           {/* END OF WEB DEVELOPENT */}

        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Write engaging blog posts on trending topics.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Create eye-catching social media graphics.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Edit and proofread website copy for accuracy.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Shoot and edit promotional videos for products.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Manage and moderate online community forums.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Develop content calendars and schedule posts.</p>
            </li>
          </ul>
        </article>
        {/* END OF CONTENT CREATION */}
      </div>
    </section>
  )
}

export default Services
