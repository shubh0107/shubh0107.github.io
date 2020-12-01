import './styles/main.css';
import MyImage from './assets/images/my-pic-1.jpg';
import { SemiBold, Boop, Link, SkillRating, BoopedLink, ToggleThemeButton } from './components';
import {
  interests,
  projects,
  skills,
  experiences,
  contactLinks
} from './assets/data/data.js';
import { HiDownload } from 'react-icons/hi';
import { isSafari, isMobileSafari } from 'react-device-detect';

const Section = ({ title, children }) => {
  const classesForSafari = isSafari || isMobileSafari ? 'text-blue-800 dark:text-green-500 transition-color duration-300' : '';
  return (
    <div className="flex flex-col flex-shrink-0 justify-between md:flex-row">
      <div className="md:w-1/3 sm:w-full pr-4">
        <h2 className={`inline-flex flex-grow-0 border-b-2 border-blue-300 md:border-0 sm:text-xl lg:text-lg font-semibold bg-clip-text text-transparent primary-gradient mb-2 md:mb-0 ${classesForSafari}`}>{title}</h2>
      </div>
      <div className="w-full">
        {children}
      </div>
    </div>
  )
}

const SkillRow = ({ skill, ...restProps }) => {
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
    <div className="flex flex-col space-y-4">
      {skills.map(skill => <SkillRow skill={skill} key={skill.skillId} />)}
    </div>
  )
}

const Experience = ({ experience }) => {
  const { organization, link, position, timeline, place, description } = experience;
  return (
    <div>
      <div className="flex">
        <BoopedLink href={link} title={link}>{organization}</BoopedLink>,
        <span className="italic ml-1">{position}</span>
      </div>
      <div className="text-sm">{timeline} | {place}</div>
      <div>{description}</div>
    </div>
  )
}

const Interest = ({ interest, ...restProps }) => {
  const { title, description } = interest;
  return (
    <div {...restProps}>
      <h3><SemiBold>{title}</SemiBold></h3>
      <div className="leading-snug">{description}</div>
    </div>
  )
}

const Project = ({ project, ...restProps }) => {
  const { name, link, description } = project;
  return (
    <>
      <div className="flex" {...restProps}>
        <BoopedLink href={link} title={name}>{name}</BoopedLink>,
        <span className="italic ml-1">{link.replace('https://', '')}</span>
      </div>
      <div className="leading-snug">
        {description}
      </div>
    </>
  )
}

function App() {
  return (
    <div className="h-screen w-full flex flex-col lg:flex-row relative antialiased">
      {isSafari || isMobileSafari ? '' : <ToggleThemeButton className="fixed right-6 bottom-6 z-10" />}
      <div className="min-h-screen sm:w-full md:w-full lg:w-1/3 xl:w-1/2 flex flex-shrink-0 relative">
        <img src={MyImage} alt="Shubham Singh" className="h-full w-full object-cover" />
        <div className="h-full w-full flex flex-col flex-shrink-0 items-center justify-center absolute top-0 left-0 bg-gradient-to-r from-green-400 to-blue-800 opacity-75 text-white font-mono"></div>
        <div className="absolute h-full w-full flex flex-col justify-center font-mono text-white">
          <h1 className="text-2xl lg:text-xl tracking-wide mx-auto">Hi, I'm Shubham</h1>
          <h2 className="text-md lg:text-sm mt-4 mx-auto">Developer based in Pune, India</h2>
          <h2 className="text-md lg:text-sm mx-auto">Full Stack Developer at Knowledge Lens</h2>
          <div className="flex space-x-10 mt-8 mx-auto">
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
      <div className="sm:w-full md:w-full lg:w-2/3 xl:w-1/2 w-full flex flex-col space-y-6 p-6 text-gray-800 dark:text-white lg:overflow-y-scroll dark:bg-black transition-colors duration-300">
        <Section title="Intro">
          {/* <div> */}
          <SemiBold>Full Stack Developer</SemiBold> experienced in writing scalable and performant code. Fluent in
            <SemiBold> HTML</SemiBold>, <SemiBold>CSS</SemiBold>, <SemiBold>Javascript</SemiBold>, <SemiBold>Node.js</SemiBold>, <SemiBold>React.js</SemiBold>, <SemiBold>Redux</SemiBold> and <SemiBold>Angular 2+</SemiBold>.
            Have experience in working both at a product based startup as well as service based company where i was involved in a number of projects and was directly responsible for a complete module.
            Passionate about everything Javascript and open source.
        {/* </div> */}
        </Section>
        <Section title="Skills">
          <Skills />
        </Section>
        <Section title="Professional Experience">
          <div className="flex flex-col space-y-3">
            {experiences.map((experienceDetails, index) => (
              <>
                <Experience experience={experienceDetails} key={experienceDetails.expId} />
                {index !== experiences.length - 1 && <hr className="border-blue-800 border-dashed mx-10" />}
              </>
            ))}
          </div>
        </Section>
        <Section title="Interests">
          <div className="flex flex-col space-y-3">
            {interests.map(interest => <Interest interest={interest} key={interest.interestId} />)}
          </div>
        </Section>
        <Section title="Side Projects">
          {projects.map(project => <Project project={project} key={project.projectId} />)}
        </Section>

        <a className="group flex flex-none items-center tracking-wide max-w-max p-4 mx-auto rounded-md text-white primary-gradient opacity-100 lg:opacity-75 hover:opacity-100 transition-opacity duration-300 focus:from-pink-500 focus:to-gray-400" href="/Shubham_Singh_Resume.pdf" download>
          DOWNLOAD RESUME
          <HiDownload className="ml-2 group-hover:animate-bounce" />
        </a>
      </div>
    </div>
  );
}

export default App;
