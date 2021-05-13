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
import { motion } from 'framer-motion';

const sectionVariants = {
  hidden: {
    opacity: 0,
    transition: {
      when: "afterChildren",
    },
  },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
};

const sectionTitleVariants = {
  hidden: {
    x: -100,
    transition: {
      when: "afterChildren",
    },
  },
  visible: {
    x: 0,
    transition: {
      type: 'tween',
      stiffness: 120,
      when: "beforeChildren",
      staggerChildren: 0.3,
    }
  }
}

const Section = ({ title, children }) => {
  const classesForSafari = isSafari || isMobileSafari ? 'text-blue-800 dark:text-green-500 transition-color duration-300' : '';
  return (
    <motion.div
      className="flex flex-col flex-shrink-0 justify-between md:flex-row"
      variants={sectionVariants}
    >
      <motion.div
        className="md:w-1/3 sm:w-full pr-4"
        variants={sectionTitleVariants}
      >
        <h2 className={`inline-flex flex-grow-0 border-b-2 border-blue-300 md:border-0 sm:text-xl lg:text-lg font-semibold bg-clip-text text-transparent primary-gradient mb-2 md:mb-0 ${classesForSafari}`}>{title}</h2>
      </motion.div>
      <motion.div className="w-full">
        {children}
      </motion.div>
    </motion.div>
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
        <BoopedLink
          href={link}
          title={link}
          data-splitbee-event="Clicked experience link"
          data-splitbee-event-type={organization}
        >
          {organization}
        </BoopedLink>,
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
    <section>
      <div className="flex" {...restProps}>
        <BoopedLink
          href={link}
          title={name}
          data-splitbee-event="Clicked project link "
          data-splitbee-event-type={name}
        >
          {name}
        </BoopedLink>,
        <span className="italic ml-1">{link.replace('https://', '')}</span>
      </div>
      <div className="leading-snug">
        {description}
      </div>
    </section>
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
                <Link href={href} title={title} data-splitbee-event="Contact links clicked" data-splitbee-event-type={title}>
                  {icon}
                </Link>
              </Boop>
            ))}
          </div>
          <div className="absolute bottom-5 w-full flex flex-col items-center visible lg:invisible text-xl mx-auto">
            Scroll down
            <span className="animate-bounce mt-2">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M15.707 4.293a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 011.414-1.414L10 8.586l4.293-4.293a1 1 0 011.414 0zm0 6a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L10 14.586l4.293-4.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </span>
          </div>
        </div>
      </div>
      <motion.div
        className="sm:w-full md:w-full lg:w-2/3 xl:w-1/2 w-full flex flex-col space-y-6 p-6 text-gray-800 dark:text-white lg:overflow-y-scroll dark:bg-black transition-colors duration-300"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
      >
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
          <div className="flex flex-col space-y-3">
            {projects.map(project => <Project project={project} key={project.projectId} />)}
          </div>
        </Section>

        <a
          className="group flex flex-none items-center tracking-wide max-w-max p-4 mx-auto rounded-md text-white primary-gradient opacity-100 lg:opacity-75 hover:opacity-100 transition-opacity duration-300 focus:from-pink-500 focus:to-gray-400" href="/Shubham_Singh_Resume.pdf"
          download
          target="_blank"
          data-splitbee-event="Download Resume"
        >
          DOWNLOAD RESUME
          <HiDownload className="ml-2 group-hover:animate-bounce" />
        </a>
      </motion.div>
    </div>
  );
}

export default App;
