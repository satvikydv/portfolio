import { useEffect, useState, useRef } from 'react'
import Loader from 'react-loaders'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'


const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const refForm = useRef()

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    // Cleanup function to clear the timeout if the component unmounts
    return () => {
      clearTimeout(timer)
    }
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      refForm.current,
      process.env.REACT_APP_EMAILJS_USER_ID
    )
    .then((result) => {
      console.log(result.text)
      alert('Message sent successfully!')
      window.location.reload(false)
    }, (error) => {
      console.log(error.text)
      alert('An error occurred, Please try again!')
      window.location.reload(false)
    })
  }

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
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="from_name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="from_email"
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
        <div className='info-map'>
          Satvik Yadav
          <br />
          IIIT Naya Raipur
          <br />
          India
          <br />
          <span>satvikydv@gmail.com</span>
        </div>
        <div className='map-wrap'>
          <MapContainer center={[21.12840433503101, 81.7661653952704]} zoom={13} scrollWheelZoom={false}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={[21.12840433503101, 81.7661653952704]}>
            <Popup>
              Satvik lives here!
            </Popup>
          </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type='ball-pulse' active />
    </>
  )
}

export default Contact
