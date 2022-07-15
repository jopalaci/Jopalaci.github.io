import {
  faGitAlt,
  faJs,
  faPython,
  faReact,
  faSwift,
} from '@fortawesome/free-brands-svg-icons'
import { faDatabase } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'
// import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    let timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={'About me'.split('')}
              idx={15}
            />
          </h1>
          <p>
            A motivated programmer who developed his interest in Computer
            Science and Software Development over the years. I enjoy taking on
            challenges and developing beautiful and responsive products. I'm a
            first-gen recent graduate from the University of California, Santa
            Cruz, where I obtained my Bachelor of Arts in Computer Science.
            During that time, I picked up a variety of languages and skills from
            working on school projects or personal endeavors. Although I
            primarily focus on front-end development, I've have experience with
            databases and machine learning, and I can pick up new technologies
            fairly quickly.
          </p>
          <p>
            Born and raised in San Jose, California but I'm currently based in
            Las Vegas, Nevada.
          </p>
          <p>
            Outside of my professional and academic interests, I'm passionate
            about learning new pour-over coffee brewing methods, playing FPS
            shooters, reading thriller books, <strike>gambling</strike>{' '}
            investing in options-trading, and browsing new music. Specifically
            trance, metal, or jazz.
            <br />
            <p>
              I also love languages. Recently I've been learning French in my
              free time so that I can enhance my experience traveling to places
              like France, Québec or Switzerland.
            </p>
          </p>
        </div>
        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faPython} color="#4B8BBE" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faJs} color="#EFD81D" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faSwift} color="#f05138" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faGitAlt} color="#6e5494" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faDatabase} color="#00758f" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
          </div>
        </div>
      </div>
      {/* <Loader type="pacman" /> */}
    </>
  )
}

export default About
