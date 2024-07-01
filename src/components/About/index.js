import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { type } from '@testing-library/user-event/dist/type'

const About = () => {
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
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I am a 3rd year student currently pursuing my Btech in Computer
            Science and Engineering from IIIT Naya Raipur.
          </p>
          <p>
            I am a full stack developer with a keen interest in web development.
          </p>
          <p></p>
        </div>
      </div>
      {/* <Loader type="pacman" /> */}
    </>
  )
}

export default About
