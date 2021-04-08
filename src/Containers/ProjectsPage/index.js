import React from 'react'
import Projects from '../../components/Projects/index'

const ProjectsContainer = () => {
  const data = [
    {
      name: 'My Portfolio Website',
      description:
        "This is my portfolio website. It is built with React. It's a Progressive Web App (PWA) and could be installed as native app and works offline as well.",
      link: 'https://github.com/neer17/portfolio-pwa',
      date: 'April 2021',
    },
    {
      name: 'File Sharing App',
      description: 'File sharing app built in MERN Stack fueled by Firebase',
      link: 'https://github.com/neer17/file-sharing-front-end',
      date: 'Aug - Oct, 2019',
    },
    {
      name: 'Covide-19 Tracker',
      description:
        "A real-time COVID-19 tracker inspired by Arogya Setu yet contains more features regarding locating emergency services based on user's current location",
      link: 'https://github.com/neer17/Covid-19_Tracker',
      date: 'May - Jun, 2020',
    },
    {
      name: 'Twitter Bot',
      description: 'Makes your day fun by posting top memes from Twitter',
      link: 'https://twitter.com/proDankMemer',
      date: 'Aug - Sept, 2019',
    },
    {
      name: 'Tweet a Book',
      description:
        'Want to tweet out favorite from the book that you are reading, take a snap with the app and it would be tweeted. Simple!!',
      link: 'https://github.com/neer17/TweetABook',
      date: 'Sept - Nov, 2020',
    },
  ]

  return <Projects data={data} />
}

export default ProjectsContainer
