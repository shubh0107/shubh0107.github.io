import './styles/main.css';
import MyImage from './assets/images/my-pic-1.jpg';
// import Github from './assets/icons/github.svg';
import LinkedIn from './assets/icons/linkedin.svg';
import Twitter from './assets/icons/Twitter';


const NameAndContacts = props => (
  <div>
    <h1 className="text-5xl font-bold text-blue-800 font-mono">Shubham Singh</h1>
  </div>
)

const Section = props => (
  <div className="flex justify-between">
    <div className="w-1/3 pr-4">
      <h2 className="font-semibold text-blue-800">{props.title}</h2>
    </div>
    <div className="w-full">
      Distill the life that's inside of me. I'm going where the cold wind blows. Get away, get away, get away, get away, away, away from your home. Come on over and do the twist.
      In the pines, in the pines. Buried. Love you so much it makes me sick. Trading off and taking turns.
      No I don't have a gun. He's the one. In the sun. Beat me outta me.
      Just about a mile from here. I'm a liar and a thief. Knows not what it means. No I don't have a gun. Oh no, I know a dirty word. Who makes me feel and I.
    </div>
  </div>
)


function App() {
  return (
    <div className="h-screen w-full flex">
      <div className="h-full w-1/2 flex flex-auto relative">
        <img src={MyImage} alt="Shubham Singh" className="h-full w-full object-cover" />
        <div className="h-full w-full flex flex-col items-center justify-center absolute top-0 left-0 bg-gradient-to-r from-green-400 to-blue-800 opacity-75 text-white font-mono"></div>
        <div className="absolute h-full w-full flex flex-col items-center justify-center font-mono text-white">
          <h1 className="text-2xl tracking-wide my-2">Hi, I'm Shubham</h1>
          <h1 className="text-md">Developer based in Pune, India</h1>
          <h1 className="text-md">Full Stack Developer at Knowledge Lens</h1>
          <div className="h-4">
            {/* <Github />
            <LinkedIn /> */}
            {/* <img src={LinkedIn} alt="Linkedin"/> */}
            {/* <Twitter /> */}
          </div>
        </div>
      </div>
      <div className="w-1/2 flex flex-col space-y-6 p-6 overflow-y-scroll">
        {/* <NameAndContacts /> */}
        <Section title="Intro" />
        <Section title="Skills" />
        <Section title="Professional Experience" />
        <Section title="Projects" />
        <Section title="Interests" />
      </div>
    </div>
  );
}

export default App;
