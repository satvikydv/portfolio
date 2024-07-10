import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Contact = () => {
    

    const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    // Cleanup function to clear the timeout if the component unmounts
    return () => {
      clearTimeout(timer)
    }
  }, [])

    return (
        <>
        <div className='container contact-page'>
            <div className='text-zone'>
                <h1>
                <AnimatedLetters 
                    letterClass={letterClass}
                    strArray={['C','o','n','t','a','c','t',' ','m', 'e']}
                    idx={15}
                />
                </h1>
                <p>Feel free to contact me for any inquiries or just to say hi!</p>

                <div className="contact-form">
            <form /*ref={form} onSubmit={sendEmail}*/>
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
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
            </div>
        </div>
        <Loader type='ball-pulse' active />
        </>
    )
}

export default Contact;