import './styles/main.css';
import MyImage from './assets/images/my-pic-1.jpg';
import { FaLinkedinIn, FaTwitter, FaGithub, FaFacebook, FaExternalLinkAlt } from 'react-icons/fa';
import { AiOutlineStar, AiTwotoneStar } from 'react-icons/ai';
import Boop from './components/Boop';

const skills = [
  {
    skillId: 'skill1',
    title: 'Frontend',
    rating: 4,
    list: [
      'HTML',
      'CSS',
      'Javascript',
      'React.js',
      'Angular 2+',
      'Typescript',
      'Material UI',
      'CSS-in-JS',
      'Design Systems']
  },
  {
    skillId: 'skill2',
    title: 'Backend',
    rating: 3,
    list: [
      'Node.js',
      'Express.js',
      'MongoDB',
      'Redis',
      'RESTful API\'s',
      'Socket.io'
    ]
  },
  {
    skillId: 'skill3',
    title: 'Tools',
    rating: 4,
    list: [
      'Git',
      'Jira',
      'Figma',
      'Zepplin']
  }
];

const contactLinks = [
  { href: 'https://www.linkedin.com/in/shubhsingh01/', title: 'LinkedIn', icon: <FaLinkedinIn className="h-5 w-5" /> },
  { href: 'https://github.com/shubh0107', title: 'Github', icon: <FaGithub className="h-5 w-5" /> },
  { href: 'https://twitter.com/shoe_bam', title: 'Twitter', icon: <FaTwitter className="h-5 w-5" /> },
  { href: 'https://www.facebook.com/shubhsingh01/', title: 'Facebook', icon: <FaFacebook className="h-5 w-5" /> }
];

const SemiBold = ({ children }) => <span className="font-semibold">{children}</span>

const experiences = [
  {
    expId: 'exp1',
    organization: 'Knowledge Lens',
    link: 'https://www.knowledgelens.com/',
    position: 'Full Stack Developer',
    timeline: '02 / 2019 – present',
    place: 'Bengaluru, India',
    description: <ul className="list-disc list-inside space-y-2 mt-2">
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
    expId: 'exp2',
    organization: 'Smartbeings Inc.',
    link: 'https://www.smartbeings.com/',
    position: 'Full Stack Developer',
    timeline: '02/2018 – 01/2019',
    place: 'Bengaluru, India',
    description: <ul className="list-disc list-inside space-y-2 mt-2">
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

const Link = ({ children, ...restProps }) => (
  <a rel="norefferer" target="_blank" {...restProps}>
    {children}
  </a>
)

const SkillRating = ({ rating }) => {
  let tempArray = [], i = 1;
  while (i <= 5) {
    tempArray.push(i < rating ? <AiTwotoneStar className="fill-current" /> : <AiOutlineStar className="fill-current" />);
    i++;
  }
  return (
    <div className="flex items-center space-x-1 text-green-500">
      {tempArray}
    </div>
  )
}

const Section = ({ title, children }) => {
  return (
    <div className="flex justify-between">
      <div className="w-1/3 pr-4">
        <h2 className="text-lg font-semibold bg-clip-text text-transparent primary-gradient">{title}</h2>
      </div>
      <div className="w-full">
        {children}
      </div>
    </div>
  )
}

const SkillRow = ({ skill }, ...restProps) => {
  const { title, rating, list } = skill;

  return (
    <div {...restProps}>
      <div className="flex justify-between">
        <span className="font-semibold ">{title}</span>
        <SkillRating rating={rating} />
      </div>
      <div className="italic">{list.join(', ')}</div>
    </div>
  )
}

const Skills = props => {
  return (
    <div className="flex flex-col space-y-6">
      {skills.map(skill => <SkillRow skill={skill} key={skill.skillId} />)}
    </div>
  )
}

const Experience = ({ experience }) => {
  const { organization, link, position, timeline, place, description } = experience;
  return (
    <div>
      <div className="flex">
        <Link className="flex items-baseline text-blue-800" href={link} title={organization}>
          <Boop x="-10" springConfig={{ tension: 1000, friction: 30 }}><SemiBold>{organization}</SemiBold></Boop>
          <FaExternalLinkAlt className="w-2 ml-1" />
        </Link>,
      <span className="italic ml-1">{position}</span>
      </div>
      <div className="text-sm">{timeline} | {place}</div>
      <div>{description}</div>
    </div>
  )
}

function App() {
  return (
    <div className="h-screen w-full flex antialiased">
      <div className="h-full w-1/2 flex flex-auto relative">
        <img src={MyImage} alt="Shubham Singh" className="h-full w-full object-cover" />
        <div className="h-full w-full flex flex-col items-center justify-center absolute top-0 left-0 bg-gradient-to-r from-green-400 to-blue-800 opacity-75 text-white font-mono"></div>
        <div className="absolute h-full w-full flex flex-col items-center justify-center font-mono text-white">
          <h1 className="text-2xl tracking-wide">Hi, I'm Shubham</h1>
          <h2 className="text-md mt-4">Developer based in Pune, India</h2>
          <h2 className="text-md">Full Stack Developer at Knowledge Lens</h2>
          <div className="flex space-x-10 mt-8">
            {contactLinks.map(({ href, title, icon }) => (
              <Boop rotation="15">
                <Link href={href} title={title}>
                  {icon}
                </Link>
              </Boop>
            ))}
          </div>
        </div>
      </div>
      <div className="w-1/2 flex flex-col space-y-6 p-6 text-gray-800 overflow-y-scroll">
        <Section title="Intro">
          <SemiBold>Full Stack Developer</SemiBold> experienced in writing scalable and performant code. Fluent in
          <SemiBold> HTML</SemiBold>, <SemiBold>CSS</SemiBold>, <SemiBold>Javascript</SemiBold>, <SemiBold>Node.js</SemiBold>,<SemiBold>React.js</SemiBold>, <SemiBold>Redux</SemiBold> and <SemiBold>Angular 2+</SemiBold>.
          Have experience in working both at a product based startup as well as service based company where i was involved in a number of projects and was directly responsible for a complete module.
          Passionate about everything Javascript and open source.
        </Section>
        <Section title="Skills">
          <Skills />
        </Section>
        <Section title="Professional Experience">
          <div className="flex flex-col space-y-3">
            {experiences.map((experienceDetails, index) => (
              <>
                <Experience experience={experienceDetails} key={experienceDetails.expId} />
                {index !== experiences.length - 1 && <hr className="border-blue-800 border-dashed" />}
              </>
            ))}
          </div>
        </Section>
        <Section title="Projects" />
        <Section title="Interests" />
      </div>
    </div>
  );
}

export default App;
