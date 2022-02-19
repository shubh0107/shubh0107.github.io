import { FaLinkedinIn, FaTwitter, FaGithub, FaFacebook, } from 'react-icons/fa';
import { SemiBold } from '../../components'
const interests = [
  {
    "interestId": "i1",
    "title": "Open Source",
    "description": "Interested in the open source world and actively try to contribute in various libraries and tools. Have contributed in www.covid19india.org and another early stage CSS-in-JS library."
  },
  {
    "interestId": "i2",
    "title": "Design Systems",
    "description": "Recently discovered the world of Design Systems. Have been interested in the latest trends that involve creating a better and easily maintainable design system using React.js, CSS-in-JS, theme-ui and system-ui."
  }
];

const projects = [
  {
    "projectId": "p1",
    "name": "Nirvana Ipsum",
    "link": "https://www.nirvana-ipsum.com",
    "description": "A web app that spits out Nirvana lyrics that you can use as placeholder text made using React.js."
  },
  {
    "projectId": "p2",
    "name": "Quick Spotify",
    "link": "https://shubh0107.github.io/quick-spotify",
    "description": "An app that lists the users top Spotify tracks for last month, last 6 months and all time and also gives a small preview for each song when hovered over it's album cover. (WIP)"
  }
];

const skills = [
  {
    "skillId": "skill1",
    "title": "Frontend",
    "rating": 4,
    "list": [
      "HTML",
      "CSS",
      "Javascript",
      "React.js",
      "Angular 2+",
      "Tailwind CSS",
      "Typescript",
      "Material UI",
      "CSS-in-JS",
      "Design Systems"
    ]
  },
  {
    "skillId": "skill2",
    "title": "Backend",
    "rating": 3,
    "list": [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Redis",
      "RESTful API's",
      "Socket.io"
    ]
  },
  {
    "skillId": "skill3",
    "title": "Tools",
    "rating": 4,
    "list": ["Git", "Jira", "Figma", "Zepplin"]
  }
];

const contactLinks = [
  {
    "href": "https://www.linkedin.com/in/shubhsingh01/",
    "title": "LinkedIn",
    "icon": <FaLinkedinIn className="w-5 h-5" />
  },
  {
    "href": "https://github.com/shubh0107",
    "title": "Github",
    "icon": <FaGithub className="w-5 h-5" />
  },
  {
    "href": "https://twitter.com/shoe_bam",
    "title": "Twitter",
    "icon": <FaTwitter className="w-5 h-5" />
  },
  {
    "href": "https://www.facebook.com/shubhsingh01/",
    "title": "Facebook",
    "icon": <FaFacebook className="w-5 h-5" />
  }
];

const experiences = [
  {
    expId: 'exp1',
    organization: 'Spinny',
    link: 'https://www.spinny.com/',
    position: 'Software Engineer',
    timeline: '06 / 2021 – present',
    place: 'Gurgaon, India',
    description: <ul className="mt-2 space-y-2 list-disc list-inside">
      <li className="leading-snug">
        Working as a frontend developer in the Truebil team
      </li>
      <li className="leading-snug">
        Revamping the Truebil mobile and desktop app using latest Next.js and Redux.
      </li>
      <li className="leading-snug">
        Working with - <span className="italic">javascript, React.js, Next.js, Redux</span>
      </li>
    </ul>
  },
  {
    expId: 'exp2',
    organization: 'Knowledge Lens',
    link: 'https://www.knowledgelens.com/',
    position: 'Full Stack Developer',
    timeline: '02 / 2019 – 06-2021',
    place: 'Bengaluru, India',
    description: <ul className="mt-2 space-y-2 list-disc list-inside">
      <li className="leading-snug">
        Working as a contractor for ZS Associates, Pune where i am involved in multiple projects for both US and UK based pharmaceutical giants.
      </li>
      <li className="leading-snug">
        Applying my skills as a Front end engineer(React.js and Angular) and responsible for building scalable and responsive web apps which have hundreds of daily users.
      </li>
      <li className="leading-snug">
        Guiding a team of 3 developers in the current project which involves developing a dashboard to show data trends using different types of charts
        which is used by the client for internal statistics and better decision making.
      </li>
      <li className="leading-snug">
        Working with - <span className="italic">HTML, CSS, javascript, React.js, Angular 2 +, Highcharts, D3.js, Charts.js, Material UI, JIRA.</span>
      </li>
    </ul>
  },
  {
    expId: 'exp3',
    organization: 'Smartbeings Inc.',
    link: 'https://www.smartbeings.com/',
    position: 'Full Stack Developer',
    timeline: '02/2018 – 01/2019',
    place: 'Bengaluru, India',
    description: <ul className="mt-2 space-y-2 list-disc list-inside">
      <li className="leading-snug">
        Worked as a <SemiBold>MEAN stack</SemiBold> developer. Was involved in the product 'Woohoo' and the Smartbeings AI platform.
      </li>
      <li className="leading-snug">
        Was responsible for development and scaling the backend of the product which included making REST API's, writing socket connection code and also maintaining the database.
      </li>
      <li className="leading-snug">
        Was also involved in the development of the Woohoo Web Client and the Smartbeings AI web platform.
      </li>
      <li className="leading-snug">
        Integrated a number of third party services like <SemiBold>Spotify</SemiBold>, <SemiBold>Twilio</SemiBold>,
        <SemiBold>Uber</SemiBold> and <SemiBold>NPR</SemiBold> News to the platform.
      </li>
      <li className="leading-snug">
        Integrated <SemiBold>Google’s Dialogflow</SemiBold> to develop a conversational experience between the device and the user.
      </li>
      <li className="leading-snug">
        Worked with - <span className="italic">Angular 2 +, Node.js, Express.js, MongoDB, Redis, PostgreSQL, Socket.io, AWS and Nginx.</span>
      </li>
    </ul>
  }
];

export {
  interests,
  projects,
  skills,
  experiences,
  contactLinks
}

