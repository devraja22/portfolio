import { useState } from 'react'
import './App.scss'
import './App.sass'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import angular1 from './assets/learnings/angular1.png'
import angular2 from './assets/learnings/angular2.png'
import angular3 from './assets/learnings/angular3.png'
import angular4 from './assets/learnings/angular4.jpg'
import apidesigner from './assets/learnings/apidesigner.png'
import devops from './assets/learnings/devops-aws.png'
import frontend from './assets/learnings/frontend-development.png'
import jquery from './assets/learnings/jquery.png'
import js1 from './assets/learnings/js1.png'
import js2 from './assets/learnings/js2.jpg'
import mongodb1 from './assets/learnings/mongodb1.jpeg'
import mongodb2 from './assets/learnings/mongodb2.jpg'
import nodejs1 from './assets/learnings/nodejs1.png'
import nodejs2 from './assets/learnings/nodejs2.png'
import python from './assets/learnings/python.png'
import react1 from './assets/learnings/react1.png'
import react2 from './assets/learnings/react2.png'
import solid from './assets/learnings/solid.png'
import web1 from './assets/learnings/web1.png'
import web2 from './assets/learnings/web2.jpg'

import eslint1 from './assets/learnings/linkedin1/eslint1.png'
import eslint2 from './assets/learnings/linkedin1/eslint2.png'
import eslint3 from './assets/learnings/linkedin1/eslint3.png'
import js from './assets/learnings/linkedin1/js.png'
import jsbs1 from './assets/learnings/linkedin1/jsbs1.png'
import jsbs2 from './assets/learnings/linkedin1/jsbs2.png'
import jsbs3 from './assets/learnings/linkedin1/jsbs3.png'
import notes from './assets/learnings/linkedin1/notes.png'
import react3 from './assets/learnings/linkedin1/react3.png'
import react4 from './assets/learnings/linkedin1/react4.png'
import react5 from './assets/learnings/linkedin1/react5.png'
import react6 from './assets/learnings/linkedin1/react6.png'
import react7 from './assets/learnings/linkedin1/react7.png'
import react8 from './assets/learnings/linkedin1/react8.png'
import react9 from './assets/learnings/linkedin1/react9.png'
import react10 from './assets/learnings/linkedin1/react10.png'
import react11 from './assets/learnings/linkedin1/react1.png'
import react12 from './assets/learnings/linkedin1/react2.png'

import profile from './assets/raja.jpg'
import award1 from './assets/award1.jpeg'
import react from './assets/react.svg'
import vite from './assets/vite.png'

import hackerrank from './assets/hackerrank_logo.png'
import hackerearth from './assets/hacker.jpg'
import linkedin from './assets/linkedin5.png'
import twitter from './assets/twitter.png'
import github from './assets/github7.png'

const tech = [
  react,
  vite
]

const awards = [
  award1
]

const certifications = [
  js1,
  python,
  apidesigner,
]

const learnings = [
  mongodb1,
  mongodb2,
  web2,
  react9,
  js2,
  js,
  jsbs1,
  jsbs2,
  jsbs3,
  notes,
  devops,
  frontend,
  jquery,
  nodejs1,
  react2,
  react3,
  react4,
  react5,
  react6,
  react7,
  react8,
  react10,
  react11,
  react12,
  web1,
  eslint1,
  eslint2,
  eslint3,
  angular1,
  angular2,
  angular3,
  angular4,
  nodejs2,
  react1,
  solid,
]

const skills = ['HTML', 'CSS', 'JavaScript', 'TypeScript',
  'Angular', 'React', 'VueJs',
  'NodeJs', 'ExpressJs', ' NoSQL(MongoDB)',
  'Bootstrap', 'JQuery', 'SASS/SCSS', 'Angular Material']

function App() {

  return (
    <>
      <div id='stars'></div>
      <div id='stars2'></div>
      <div id='stars3'></div>
      <Box className='box' sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid xs={2}></Grid>
          <Grid className='grid bio' item xs={5}>
            <div>
              <h2>Raja Kumar M</h2>
              <h2>Full Stack Web Developer</h2>
              <h2>MEAN | MERN | <span className='mern'>MEVN</span></h2>
              <h2>4 years of Experience</h2>
            </div>
          </Grid>
          <Grid className='grid' item xs={4}>
            <div>
              <img className='profileImg' src={profile} alt={profile}></img>
            </div>
          </Grid>
          <Grid xs={1}></Grid>
          <Grid xs={2}></Grid>
          <Grid className='grid' item xs={5}>
            <div className='aboutMe'>
              <h2>About Me</h2>
              <h4>
                <p>Hands on experience in full stack development.Worked on both MEAN & MERN stack technologies.
                  Passionate in debugging and finding solutions.
                  Ability to plan and organize the team effort.
                  Capacity to motivate, lead and boost morale of the team.
                </p>
              </h4>
              <br />
              <h4>
                <p>
                  Followed Agile practices while working on the projects.
                  Always try to fix the issues by myself.
                  Struggled sometimes while working on Angular projects and learnt to debugging it.
                </p>
              </h4>
              <br />
              <h4>
                <p>
                  Worked as Technology Trainer.
                  Trained and mentored thousands of graduates in both the MEAN and MERN stack technologies.
                  As a trainer, took technical sessions, written test cases for the assessments and validated it.
                  Faced lot of struggles in handing the students and learnt a lot by guided them for fixing the multiple issues.
                </p>
              </h4>
              <br />
              <h4>
                <p>
                  Interested in leaning new concepts.
                  Attended and participated several technical workshops.
                  Love to travel and cooking.
                </p>
              </h4>
              <br />
              <h4>
                <p>#BE (CSE) - 79%,
                  #HSC - 94%,
                  #SSLC -97%</p>
              </h4>
              <br />
              <h4>
                <p>NCC 'C' Certificate Holder</p>
              </h4>
            </div>
          </Grid>
          <Grid className='grid' item xs={4}>
            <div className='skills'>
              <h2>Skills</h2>
              {skills.map((skill, i) => {
                return (<span key={i}>{skill}, </span>)
              })}
              <span>Material UI</span>
              <div className='profiles'>
                <h2 className='profileLink'><img className='logoImg' src={hackerrank} alt={hackerrank}/><a href='https://www.hackerrank.com/devraja22'>Hackerrank</a></h2>
                <h2 className='profileLink'><img className='logoImg' src={hackerearth} alt={hackerearth}/><a href='https://www.hackerearth.com/@devraja22'>Hackerearth</a></h2>
                <h2 className='profileLink'><img className='logoImg' src={linkedin} alt={linkedin}/><a href='https://www.linkedin.com/in/devraja22/'>LinkedIn</a></h2>
                <h2 className='profileLink'><img className='logoImg' src={github} alt={github}/><a href='https://github.com/devraja22/'>Github</a></h2>
                <h2 className='profileLink'><img className='logoImg' src={twitter} alt={twitter}/><a href='https://twitter.com/devraja22/'>Twitter</a></h2>
              </div>
            </div>
          </Grid>
          <Grid xs={1}></Grid>
          <Grid item xs={12}>
            <h1>Awards</h1>
            <div className='awards'>
              {awards.map((item, index) => {
                return (
                  <a href={item} target='_blank'><img className='learnImg' key={index} src={item} alt={item}></img></a>
                )
              })}
            </div>
          </Grid>
          <Grid item xs={12}>
            <h1>Certifications</h1>
            <div className='certifications'>
              {certifications.map((item, index) => {
                return (
                  <a href={item} target='_blank'><img className='learnImg' key={index} src={item} alt={item}></img></a>
                )
              })}
            </div>
          </Grid>
          <Grid item xs={12}>
            <h1>Learnings</h1>
            <div className='learnings'>
              {learnings.map((item, index) => {
                return (
                  <a href={item} target='_blank'><img className='learnImg' key={index} src={item} alt={item}></img></a>
                )
              })}
            </div>
          </Grid>
          <Grid item xs={12}>
            <h1>Built by</h1>
            <div className='tech'>
              {tech.map((item, index) => {
                return (
                  <>
                    <a href={item} target='_blank'><img className='reactImg' key={index} src={item} alt={item}></img></a>
                  </>
                )
              })}
            </div>
          </Grid>
        </Grid>

      </Box >
    </>
  )
}

export default App
