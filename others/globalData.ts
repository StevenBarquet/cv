// ---Types
import { Stack } from '@Reducers/language/customTypes';

// ----------------------------------Technological Stack------------------------------
export const stackEnglish: Stack = {
  front: {
    devTools: [
      {
        title: 'React JS',
        imgRoute: '/images/DevTools/react.webp',
        stars: 4.5,
        expertise: 'Advanced',
        expertiseNumber: 80,
        experience: `I've been using react for more than 4 years or so. For me it's an amazing and minimalist framework. 

        It's super light and gives very basic and clean features for building apps the disadvantage using react is that you need to find other librarys that complement react but it can be an advantage if you know other librarys with the custom features you need for your app.`
      },
      {
        title: 'Typescript',
        imgRoute: '/images/DevTools/typescript.webp',
        stars: 5,
        expertise: 'Intermediate',
        expertiseNumber: 55,
        experience: `I love typescript, at the beginning I wasn't very convinced because I didn't understand at 100% the special types and code using typescript used to take me 2 or 3 times more than plain javascript.
        
        I'm not an expert yet but i like typescript very much now I code everything that I can with it`
      },
      {
        title: 'Redux',
        imgRoute: '/images/DevTools/redux.webp',
        stars: 3.5,
        expertise: 'Advanced',
        expertiseNumber: 80,
        experience: `Redux is the default state management library that I've been using for the last 3 years, I'm eveb using it for this proyect. It's easy to use, the hardest part is the initial configuration but I don't like that setup and manage state in redux takes too much times and steps.

        I'm sure that currently there are better options for state management but I'havent search and test any better alternative yet.`
      },
      {
        title: 'Webpack',
        imgRoute: '/images/DevTools/webpack.webp',
        stars: 1.5,
        expertise: 'Intermediate',
        expertiseNumber: 55,
        experience: "I've made a couple of webpack 4 and 5 configurations for client-side projects implementing most of my frontend stack and I'm going to be honest, It is a pain in the ass but it can be necessary, deppending on the project."
      },
      {
        title: 'Bootstrap',
        imgRoute: '/images/DevTools/bootstrap.webp',
        stars: 4,
        expertise: 'Intermediate',
        expertiseNumber: 55,
        experience: "Bootstrap was the first responsive design and ui library that I met. It is easy to install and use but I don't use it since 2 years ago."
      },
      {
        title: 'Ant design',
        imgRoute: '/images/DevTools/antd.webp',
        stars: 5,
        expertise: 'Advanced',
        expertiseNumber: 80,
        experience: `Ant is my favorite library for responsive design, also have another super useful components, like a lot of inputs and form control among other ui components that are really helpful.

        This has the grid and some components of ant design.`
      },
      {
        title: 'Material UI',
        imgRoute: '/images/DevTools/material.webp',
        stars: 4,
        expertise: 'Beginner',
        expertiseNumber: 20,
        experience: `This library really got my attention in a project (not developed by me) with amazing UI so I would like to test Material in order to know what it has to offer. 

        My only experience is basic examples of simple components and reviewing the implementetion of Material in other projects.`
      }
    ],
    achivements: [
      'Dynamic responsive design for all screen resolutions (not just mobile and desktop).',
      'Security on the frontend, security on the request, cookies and tokens handling',
      'Frontend JS/TS architecture creation from 0 customized for specific use cases and prepared for development, production and containerization.',
      'Debugging of applications in all phases',
      'Form advanced validations',
      'Creation of dynamic dashboards and charts'
    ]
  },
  back: {
    devTools: [
      {
        title: 'Node JS',
        imgRoute: '/images/DevTools/nodejs.webp',
        stars: 5,
        expertise: 'Intermediate',
        expertiseNumber: 55,
        experience: 'Node is the base where i run every backend application and it is my main web and application server when I do freelance development.'
      },
      {
        title: 'Joi',
        imgRoute: '/images/DevTools/joi.webp',
        stars: 5,
        expertise: 'Advanced',
        expertiseNumber: 80,
        experience: `As a developer I've tested a lot of tools to control the data types but I haven't found anything better than joi. 

        It is amazingly precise and fast, it allows you to make simple validation or super complex validations in no time.`
      },
      {
        title: 'Typescript',
        imgRoute: '/images/DevTools/typescript.webp',
        stars: 5,
        expertise: 'Intermediate',
        expertiseNumber: 55,
        experience: `I love typescript, at the beginning I wasn't very convinced because I didn't understand at 100% the special types and code using typescript used to take me 2 or 3 times more than plain javascript.
        
        I'm not an expert yet but i like typescript very much now I code everything that I can with it`
      }
    ],
    achivements: [
      'Development of APIs REST and RESTful',
      'Development in microserices arquitecture',
      'Development of security midleware to secure requests',
      'Data encryption',
      'Tokens handling',
      'File management',
      'Notification throgh mail and sms',
      'Integration to payment services'
    ]
  },
  arch: {
    devTools: [
      {
        title: 'Debian linux',
        imgRoute: '/images/DevTools/debian.webp',
        stars: 5,
        expertise: 'Intermediate',
        expertiseNumber: 55,
        experience: "I'm not a sysadmin nor linux guru but I feel comfortable in linux distributions based on debian. I've configured a couple of servers all based on ubuntu, so I'm able to manage some tasks or help the architects or sysadmins with the  provisioning."
      },
      {
        title: 'RHEL',
        imgRoute: '/images/DevTools/redHat.webp',
        stars: 2,
        expertise: 'Beginner',
        expertiseNumber: 20,
        experience: "Definitely not my strongest linux, I've struggled with provisioning, configuration and installation of drivers and software but at least I've already tried RHEL based distros and have and idea of how it works."
      },
      {
        title: 'Docker',
        imgRoute: '/images/DevTools/docker.webp',
        stars: 5,
        expertise: 'Advanced',
        expertiseNumber: 80,
        experience: `I love docker, my strongest skills of containerization are with node apps. 

        I can handle deploys, ports, docker networks, volumes as well as the basics.`
      }
    ],
    achivements: [
      'Basic server administration through ssh',
      'SSH keys configurations',
      'Provisioning',
      'Continuous integration with ansible',
      'HTTPS configuration and letsencryp certbot',
      'High level software architecture understanding',
      'I work in collaboration with architects and other team leaders'
    ]
  }
};

// ----------------------------------Basic Info------------------------------
export const englishData = {
  jobWanted: 'Team leader javascript senior developer',
  introduction: `Hello, I'm Steven.
  
  Currently Looking for personal grow and modern technologies, for the moment I prefer remote work.
  
  I'm someone that is always looking to stay updated and active in IT and development, who works compromised with results and quality providing the best experience for everyone, I'not focused only in my code, I care about my team, the client, the final user and the company where I work.`,
  stack: stackEnglish
};

export const spanishData = {
  jobWanted: 'Team leader desarrollador senior javascript',
  introduction: `Hola, me llamo Steven.

  Actualmente buscando crecimiento personal y tecnologías interesantes, por el momento prefiero trabajo remoto.
  
  Soy alguien que siempre busca estar actualizado y activo en  IT y desarrollo, siempre comprometido con resultados y calidad proveyendo la mejor experiencia para todos. No me enfoco sólo en el código, me preocupo por mi equipo, los clientes, el usuario final y la compañía donde trabajo.`,
  stack: stackEnglish
};

// ----------------------------------Not multilanguage data------------------------------
export const general = {
  englishLevel: 75,
  sectionIds: {
    top: 'top',
    intro: 'intro',
    stack: 'stack',
    exp: 'exp',
    knowledge: 'knowledge',
    contact: 'contact'
  }
};

// ----------------------------------Labels (careful)------------------------------
export const englishLabels = {
  startButton: 'Start',
  menu: {
    contact: 'Contact',
    intro: 'Introduction',
    stack: 'Stack',
    experience: 'Experience',
    knowledge: 'Knowledge'
  },
  introduction: 'Let me introduce myself...',
  devCounter: 'Dev tools and frameworks',
  englishLevel: 'English level',
  DevSkills: {
    first: 'Frontend',
    second: 'Backend',
    third: 'Architecture'
  },
  enjoyUsing: 'How much I like?',
  opinionAndUsage: 'Opinion, usage and experience...',
  achievements: 'Achievements'
};

export const spanishLabels = {
  startButton: 'Empezar',
  menu: {
    contact: 'Contacto',
    intro: 'Presentación',
    stack: 'Stack',
    experience: 'Experiencia',
    knowledge: 'Conocimiento'
  },
  introduction: 'Me presento...',
  devCounter: 'Herramientas de desarrollo y frameworks',
  englishLevel: 'Nivel de inglés',
  DevSkills: {
    first: 'Frontend',
    second: 'Backend',
    third: 'Arquitectura'
  },
  enjoyUsing: '¿Cuanto me gusta?',
  opinionAndUsage: 'Opinión, uso y experiencia...',
  achievements: 'Logros'
};

export default null;
