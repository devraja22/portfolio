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

import html1 from './assets/learnings/html/html1.png'
import html2 from './assets/learnings/html/html2.png'
import html3 from './assets/learnings/html/html3.png'
import html4 from './assets/learnings/html/html4.png'
import html5 from './assets/learnings/html/html5.png'
import html6 from './assets/learnings/html/html6.png'
import html7 from './assets/learnings/html/html7.png'
import html8 from './assets/learnings/html/html8.png'
import html9 from './assets/learnings/html/html9.png'
import html10 from './assets/learnings/html/html10.png'
import html11 from './assets/learnings/html/html11.png'
import html12 from './assets/learnings/html/html12.png'
import typescript from './assets/learnings/linkedin1/typescript.png'

import css1 from './assets/learnings/css/css1.png'
import css2 from './assets/learnings/css/css2.png'
import css3 from './assets/learnings/css/css3.png'
import css4 from './assets/learnings/css/css4.png'
import css5 from './assets/learnings/css/css5.png'
import css6 from './assets/learnings/css/css6.png'
import css7 from './assets/learnings/css/css7.png'
import css8 from './assets/learnings/css/css8.png'
import css9 from './assets/learnings/css/css9.png'
import css10 from './assets/learnings/css/css10.png'
import css11 from './assets/learnings/css/css11.png'
import css12 from './assets/learnings/css/css12.png'

import angular5 from './assets/learnings/angular/angular1.png'
import angular6 from './assets/learnings/angular/angular2.png'
import angular7 from './assets/learnings/angular/angular3.png'
import angular8 from './assets/learnings/angular/angular4.png'
import angular9 from './assets/learnings/angular/angular5.png'
import angular10 from './assets/learnings/angular/angular6.png'
import angular11 from './assets/learnings/angular/angular7.png'
import angular12 from './assets/learnings/angular/angular8.png'

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
  html1,
  html2,
  html3,
  html4,
  html5,
  html6,
  html7,
  html8,
  html9,
  html10,
  html11,
  html12,
  typescript,
  css1,
  css2,
  css3,
  css4,
  css5,
  css6,
  css7,
  css8,
  css9,
  css10,
  css11,
  css12,
  angular5,
  angular6,
  angular7,
  angular8,
  angular9,
  angular10,
  angular11,
  angular12,
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
          <Grid lg={2} md={2} sm={12}></Grid>
          <Grid className='grid bio' item lg={5} md={12} sm={12}>
            <div>
              <h2>Raja Kumar M</h2>
              <h2>Full Stack Web Developer</h2>
              <h2>MEAN | MERN </h2>
              <h2>4 years of Experience</h2>
            </div>
          </Grid>
          <Grid className='grid' item lg={4} md={12} sm={12} >
            <div>
              <img className='profileImg' src={profile} alt={profile}></img>
            </div>
          </Grid>
          <Grid lg={1} sm={12} md={12}></Grid>
          <Grid lg={2} sm={12} md={12}></Grid>
          <Grid className='grid' item lg={5} sm={12} md={12}>
            <div className='aboutMe'>
              <h2>About Me</h2>
              <h4>
                <p>Hands on experience in full stack development. 
                  Worked on both MEAN & MERN stack technologies.
                  Passionate in debugging and finding solutions.
                  Ability to plan and organize the team effort.
                  Capacity to motivate, lead and boost morale of the team.
                </p>
              </h4>
              <br />
              <h4>
                <p>
                  Worked on the projects while adhering to agile principles.
                  In order to develop solutions, I worked collaboratively with the team.
                  While working on Angular and React projects, I encountered numerous issues and learned how to debug them.
                </p>
              </h4>
              <br />
              <h4>
                <p>
                  Worked as Technology Trainer.
                  Trained and mentored thousands of graduates in both the MEAN and MERN stack technologies.
                  As a trainer, took technical sessions, handled assessments and validated it.
                  Faced several difficulties when managing the students, and gained a lot of knowledge by assisting them in resolving various problems.
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
                <p>ASPL - Assistant School Pupil Leader ( 2014 )</p>
              </h4>
            </div>
          </Grid>
          <Grid className='grid' item lg={4} sm={12} md={12}>
            <div className='skills'>
              <h2>Skills</h2>
              {skills.map((skill, i) => {
                return (<span key={i}>{skill}, </span>)
              })}
              <span>Material UI</span>
              <div className='profiles'>
                <h2 className='profileLink'><img className='logoImg' src={hackerrank} alt={hackerrank} /><a target='_blank' href='https://www.hackerrank.com/devraja22'>Hackerrank</a></h2>
                <h2 className='profileLink'><img className='logoImg' src={hackerearth} alt={hackerearth} /><a target='_blank' href='https://www.hackerearth.com/@devraja22'>Hackerearth</a></h2>
                <h2 className='profileLink'><img className='logoImg' src={linkedin} alt={linkedin} /><a target='_blank' href='https://www.linkedin.com/in/devraja22/'>LinkedIn</a></h2>
                <h2 className='profileLink'><img className='logoImg' src={github} alt={github} /><a target='_blank' href='https://github.com/devraja22/'>Github</a></h2>
                <h2 className='profileLink'><img className='logoImg' src={twitter} alt={twitter} /><a target='_blank' href='https://twitter.com/devraja22/'>Twitter</a></h2>
              </div>
            </div>
          </Grid>
          <Grid item lg={1} sm={12} md={12}></Grid>
          <Grid item lg={12} sm={12} md={12}>
            <h1>Awards</h1>
            <div className='awards'>
              {awards.map((item, index) => {
                return (
                  <a href={item} target='_blank'><img className='learnImg' key={index} src={item} alt={item}></img></a>
                )
              })}
            </div>
          </Grid>
          <Grid item lg={12} sm={12} md={12}>
            <h1>Certifications</h1>
            <div className='certifications'>
              {certifications.map((item, index) => {
                return (
                  <a href={item} target='_blank'><img className='learnImg' key={index} src={item} alt={item}></img></a>
                )
              })}
            </div>
          </Grid>
          <Grid item lg={12} sm={12} md={12}>
            <h1>Learnings</h1>
            <div className='learnings'>
              {learnings.map((item, index) => {
                return (
                  <a href={item} target='_blank'><img className='learnImg' key={index} src={item} alt={item}></img></a>
                )
              })}
            </div>
          </Grid>
          <Grid item lg={12}>
            <h1>Built using</h1>
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
