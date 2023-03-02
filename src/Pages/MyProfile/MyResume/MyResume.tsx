import { Box, Typography } from "@mui/material";
import React from "react";
import { EXPERIENCE, RESUMECONTAINER, SkillSORTOOLS, USERCAREETOBJECT, USERINFO } from "./MyResume.styled";


const MyResume = () => {


  const overview1 = [
    `Sellers can create a selling post, delete post a, can advertise a post and that post will go to
    the buyer’s home route and also can see all buyers`,
    `Buyers can see all the advertised unsold posts and can book bikes or report this post, Can
    see the product according to the product category. Can pay for this product.`,
    `Admin can manage seller and buyer. Can verify seller then verified seller will get the
    checked mark`
  ]

  return (
    <RESUMECONTAINER>
      {/* user resume info start */}
      <USERINFO>
        <Box sx={{ textAlign: 'center' }}>
          <Typography className="userName" component='p'>Khalid Mim Muzahid</Typography>
          <Typography className="userDetails" component='p'>MERN Stack Developer</Typography>
          <Typography className="userLocation" component='p'>Dhaka, Bangladesh</Typography>
        </Box>
        <ul>
          <li><a href="#">Linkedin</a></li>
          <li><a href="#">GitHub</a></li>
          <li><a href="#">Myportfolio</a></li>
          <li><a href="tel:+8801872147103">+8801716204599</a></li>
          <li><a href="mailto:khalidmimm@gmail.com">khalidmimm@gmail.com</a></li>
        </ul>
      </USERINFO>
      {/* user resume info end */}

      {/* USERCAREETOBJECT start */}
      <USERCAREETOBJECT>
        <Typography className="careerTitle title" component='h3'>Career Objective:</Typography>
        <Typography className="careerInfo info" component='p'>
          Proactive and adaptable web developer with strong communication and time management skills.
          Detail-oriented software architect looking for an opportunity to leverage full-stack coding
          proficiencies and grow as a professional programmer.
        </Typography>
      </USERCAREETOBJECT>
      {/* USERCAREETOBJECT end */}

      {/* Skills & Tools start */}
      <SkillSORTOOLS>
        <Typography className="careerTitle title" component='h3'>Skills & Tools</Typography>
        <ul className="info">
          <li><span>expertise</span>: Html | CSS | JavaScript | Dom | React | Node JS | Bootstrap | Tailwind | Daisy
            UI | Flowbite | React Router Dom | Context API | JWT | Firebase Authentication |
            Mongodb |
          </li>
          <li>
            <span>Comfortable</span>: Data Structure | Algorithm | Java | C | Python | Problem-Solving |
            TanStack Query | SWR | Redux | Axios | Express | Git | Digital System Design | Figma to
            Webpage
          </li>
          <li>
            <span>Familiar</span>: TypeScript | next js | Angular JS | Material UI | Artificial Intelligence |
            Machine learning | Data Mining
          </li>
        </ul>
      </SkillSORTOOLS>
      {/* Skills & Tools end */}

      {/* Experience start */}
      <EXPERIENCE>
        <Typography className="title" component='h3'>Projects Experience</Typography>
        <Box sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <Typography component='h3'><span>Used Bike Bazar</span> - A resale website for used bike</Typography>
          <ul className="allLinks">
            <li><a href="#">Live Site</a></li>
            <li><a href="#">Github link</a></li>
            <li><a href="#">Github server</a></li>
          </ul>
        </Box>
        {/* Technologies */}
        <Typography component='p'><span>Technologies:</span>React JS, Node JS, Express JS, Tailwind, TanStack Query, react hook form,
          Firebase, JWT, Vercel, Mongo DB</Typography>
        {/* overview */}
        <Box>
          <Typography component='span'>Overview</Typography>
          <ul>
            {overview1.map(overV => <li>
              {overV}
            </li>)}
          </ul>
        </Box>
      </EXPERIENCE>
      {/* Experience ends */}
      {/* Experience start */}
      <EXPERIENCE>
        {/* <Typography className="title" component='h3'>Projects Experience</Typography> */}
        <Box sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <Typography component='h3'><span>Used Bike Bazar</span> - A resale website for used bike</Typography>
          <ul className="allLinks">
            <li><a href="#">Live Site</a></li>
            <li><a href="#">Github link</a></li>
            <li><a href="#">Github server</a></li>
          </ul>
        </Box>
        {/* Technologies */}
        <Typography component='p'><span>Technologies:</span>React JS, Node JS, Express JS, Tailwind, TanStack Query, react hook form,
          Firebase, JWT, Vercel, Mongo DB</Typography>
        {/* overview */}
        <Box>
          <Typography component='span'>Overview</Typography>
          <ul>
            {overview1.map(overV => <li>
              {overV}
            </li>)}
          </ul>
        </Box>
      </EXPERIENCE>
      {/* Experience ends */}
      {/* Experience start */}
      <EXPERIENCE>
        {/* <Typography className="title" component='h3'>Projects Experience</Typography> */}
        <Box sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <Typography component='h3'><span>Used Bike Bazar</span> - A resale website for used bike</Typography>
          <ul className="allLinks">
            <li><a href="#">Live Site</a></li>
            <li><a href="#">Github link</a></li>
            <li><a href="#">Github server</a></li>
          </ul>
        </Box>
        {/* Technologies */}
        <Typography component='p'><span>Technologies:</span>React JS, Node JS, Express JS, Tailwind, TanStack Query, react hook form,
          Firebase, JWT, Vercel, Mongo DB</Typography>
        {/* overview */}
        <Box>
          <Typography component='span'>Overview</Typography>
          <ul>
            {overview1.map(overV => <li>
              {overV}
            </li>)}
          </ul>
        </Box>
      </EXPERIENCE>
      {/* Experience ends */}

      {/* education start */}
      <Box>
        <Typography className="title" component='h3'>Education</Typography>
        <Box sx={{ '& p': { margin: "0 0 0 1rem" } }}>
          <p>BA - Social Work</p>
          <p>National University</p>
          <p>2022 to present</p>
        </Box>
      </Box>
      {/* education end */}

      {/* Languages start */}
      <Box>
        <Typography className="title" component='h3'>Languages</Typography>
        <ul>
          <li>Bangla -native</li>
          <li>English -comfortable</li>
          <li>Hindi -comfortable</li>
        </ul>
      </Box>
      {/* Languages end */}

    </RESUMECONTAINER>
  );
};

export default MyResume;
