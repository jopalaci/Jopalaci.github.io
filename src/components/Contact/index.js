import { useEffect, useRef, useState } from 'react'
import React from 'react'
// import ReCAPTCHA from 'react-google-recaptcha'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import emailjs from '@emailjs/browser'
import { MapContainer, Popup, TileLayer, Marker } from 'react-leaflet'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const form = useRef();

  useEffect(() => {
    let timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [])

  const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs
      .sendForm(
        'service_w69ie7m',
        `${process.env.REACT_APP_EMAILJS_TEMPLATE}`,
        form.current,
        `${process.env.REACT_APP_EMAILJS_TOKEN}`
      )
            /* 
            //in the EmailJS website after log in. Everyone has its own specific number. 
            //Also the template_id is important to put the id generated for your template.
            //When you want to publish your project it is advisable to 
            //place your special ids to the .env file to stay secure.
           */

      .then(
        () => {
          alert('Your message has been sent succeessfully.')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send message. Please try again.')
        }
      );
  };

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={'CONTACT ME'.split('')}
              idx={15}
            />
          </h1>
          <p>
            I'm always looking for opportunities to work on exciting projects.
            I'm currently open to part-time and full-time positions, as well as
            contract work. Let's make something great, together.
          </p>
          <br />
          <p>
            Feel free to contact me by submitting the form below if you have any
            interesting work/project that you need help with or would just like
            to say hi.
            <br />
            You can also connect with me on LinkedIn or follow any of my socials
            to stay up-to-date with me!
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="Send" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Johnny Palacios,
          <br />
          Las Vegas, Nevada 89113 <br />
        </div>
        <div className="map-wrap">
          <MapContainer
            center={[36.08206319673083, -115.17277837067593]}
            zoom={13}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[36.08206319673083, -115.17277837067593]}>
              <Popup>Currently living in beautiful Las Vegas </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      {/* <Loader type="pacman" /> */}
    </>
  )
}

export default Contact
