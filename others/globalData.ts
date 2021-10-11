// ---Types
import { Stack, JobDetail } from '@Reducers/language/customTypes';

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
        title: 'Node JS',
        imgRoute: '/images/DevTools/nodejs.webp',
        stars: 5,
        expertise: 'Intermediate',
        expertiseNumber: 55,
        experience: 'Node is the base where i run every backend and frontend application and it is my main web and application server when I do freelance development.'
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
      },
      {
        title: 'VS Code',
        imgRoute: '/images/DevTools/vscode.webp',
        stars: 5,
        expertise: 'Intermediate',
        expertiseNumber: 55,
        experience: 'My favorite IDE, no matter what kind of development or language I use vs for every project.'
      },
      {
        title: 'Shopify',
        imgRoute: '/images/DevTools/shopify.webp',
        stars: 3.5,
        expertise: 'Beginner',
        expertiseNumber: 20,
        experience: 'Definitely not an expert, I used to dislike shopify a lot but then I knew other ecommerce platforms and then realised that shopify was really good, not as good as a custom development but has benefits that are worth.'
      },
      {
        title: 'Next JS',
        imgRoute: '/images/DevTools/nextjs.webp',
        stars: 4.5,
        expertise: 'Pre-Intermediate',
        expertiseNumber: 35,
        experience: "I'm really impressed with next js, it is very optimized and has awesome features. It is really easy to setup but it can also be hard if you need to much configurations for your projects."
      },
      {
        title: 'Less',
        imgRoute: '/images/DevTools/less.webp',
        stars: 4.5,
        expertise: 'Intermediate',
        expertiseNumber: 55,
        experience: 'Generally all my frontend projects are built with less as css preprocessor. I know that less has much features to offer but for now I just using nesting and variables.'
      },
      {
        title: 'JW Tokens',
        imgRoute: '/images/DevTools/jwt.webp',
        stars: 4,
        expertise: 'Advanced',
        expertiseNumber: 80,
        experience: "Json web tokens are one alternative that I use to implement security in the frontend and the backend, most of the projects that I've made are for financial entities so the security has to be really strong."
      },
      {
        title: 'Apollo',
        imgRoute: '/images/DevTools/apollo.webp',
        stars: 3,
        expertise: 'Basic',
        expertiseNumber: 10,
        experience: "Don't have even the basics yet but currently I have a project working with a graphql server and I' have to change some configuration of apollo so hope I'll learn a bit of apollo soon."
      },
      {
        title: 'Axios',
        imgRoute: '/images/DevTools/axios.webp',
        stars: 5,
        expertise: 'Intermediate',
        expertiseNumber: 55,
        experience: 'Really easy to understand, using it for request handling in the frontend and in the backend for end to end communication.'
      },
      {
        title: 'AM charts',
        imgRoute: '/images/DevTools/amcharts.webp',
        stars: 4,
        expertise: 'Intermediate',
        expertiseNumber: 55,
        experience: 'An alternative to create dynamic dashboards and charts with lots of options for customize, it is not the fastest charts library and neither the easiest one but it is reliable and an amazing tool.'
      },
      {
        title: 'Joi',
        imgRoute: '/images/DevTools/joi.webp',
        stars: 5,
        expertise: 'Advanced',
        expertiseNumber: 80,
        experience: `As a developer I've tested a lot of tools to control the data types but I haven't found anything better than joi. 

        It is amazingly precise and fast, it allows you to make simple validation or super complex validations in no time. It's super useful for the backend to validate de request data and for the frontend to make form validations.`
      },
      {
        title: 'Eslint',
        imgRoute: '/images/DevTools/eslint.webp',
        stars: 5,
        expertise: 'Advanced',
        expertiseNumber: 80,
        experience: "Currently I can't code without eslint, It makes me a lot more productive when I write code. I've made a couple of eslint configurations for the frontend and for the backend and yes the configuration part could be  tedious but it's woth 100%"
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
        experience: 'Node is the base where i run every backend and frontend application and it is my main web and application server when I do freelance development.'
      },
      {
        title: 'Express',
        imgRoute: '/images/DevTools/express.webp',
        stars: 4,
        expertise: 'Intermediate',
        expertiseNumber: 55,
        experience: 'Express is lightweight and fast, and has everything that I need to build APIs. Also I would like to test Koa in the close future.'
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
        title: 'JW Tokens',
        imgRoute: '/images/DevTools/jwt.webp',
        stars: 4,
        expertise: 'Advanced',
        expertiseNumber: 80,
        experience: "Json web tokens are one alternative that I use to implement security in the frontend and the backend, most of the projects that I've made are for financial entities so the security has to be really strong."
      },
      {
        title: 'Joi',
        imgRoute: '/images/DevTools/joi.webp',
        stars: 5,
        expertise: 'Advanced',
        expertiseNumber: 80,
        experience: `As a developer I've tested a lot of tools to control the data types but I haven't found anything better than joi. 

        It is amazingly precise and fast, it allows you to make simple validation or super complex validations in no time. It's super useful for the backend to validate de request data and for the frontend to make form validations.`
      },
      {
        title: 'VS Code',
        imgRoute: '/images/DevTools/vscode.webp',
        stars: 5,
        expertise: 'Intermediate',
        expertiseNumber: 55,
        experience: 'My favorite IDE, no matter what kind of development or language I use vs for every project.'
      },
      {
        title: 'GraphQL',
        imgRoute: '/images/DevTools/apollo.webp',
        stars: 5,
        expertise: 'Basic',
        expertiseNumber: 10,
        experience: "Don't have even the basics yet but currently I have a project working with a graphql server and I currently I'm studing the setup of the graphQL server. It's really intresting so far."
      },
      {
        title: 'mongoDB',
        imgRoute: '/images/DevTools/mongodb.webp',
        stars: 5,
        expertise: 'Pre-Intermediate',
        expertiseNumber: 35,
        experience: "I'm not a database administrator but the years that I've been using mongoDB allowed me to understand their amazing features, and also to make backups and restore them, get, delete or modify documents and collections trough the cli and mongoDB Compass."
      },
      {
        title: 'Mongoose',
        imgRoute: '/images/DevTools/mongoose.webp',
        stars: 5,
        expertise: 'Intermediate',
        expertiseNumber: 55,
        experience: 'There is no backend development and mongoDB without mongoose, super useful and it helps me a lot with the mongoDB Querying and to control de document model for de DB.'
      },
      {
        title: 'BCrypt',
        imgRoute: '/images/DevTools/BCrypt.webp',
        stars: 5,
        expertise: 'Intermediate',
        expertiseNumber: 55,
        experience: "It's an alternative to hash data before it goes to de data base. It doesn't have de highest level of encryption for security but if its used with other security tools and strategies it becomes a really strong solution."
      },
      {
        title: 'Bull',
        imgRoute: '/images/DevTools/bull.webp',
        stars: 3.5,
        expertise: 'Basic',
        expertiseNumber: 10,
        experience: "It's package that allows you to schedule cron jobs. I'm very interested in it because a client ask me to schedule some tasks next year and since I'm a Javascript/Typescript developer would love to do it in my main language instead of using java with quartz or something like that."
      },
      {
        title: 'Axios',
        imgRoute: '/images/DevTools/axios.webp',
        stars: 5,
        expertise: 'Intermediate',
        expertiseNumber: 55,
        experience: 'Really easy to understand, using it for request handling in the frontend and in the backend for end to end communication.'
      },
      {
        title: 'Nodemailer',
        imgRoute: '/images/DevTools/nodemailer.webp',
        stars: 4,
        expertise: 'Pre-Intermediate',
        expertiseNumber: 35,
        experience: "Nodemailer it's a package that allow us to connect to a smtp client for manage emails. I've only used it for simple notification, I've never attached files or read other mails and I'm not sure if node mailer allow us to do that task but for notification it's an amazing library."
      },
      {
        title: 'AWS SNS',
        imgRoute: '/images/DevTools/sns.webp',
        stars: 2,
        expertise: 'Pre-Intermediate',
        expertiseNumber: 35,
        experience: "I've use the amazon service SNS to send sms messages but it wasn't a nice experience. But at the end of the day it works and send sms through an api."
      },
      {
        title: 'Mercado Pago',
        imgRoute: '/images/DevTools/mercadoP.webp',
        stars: 4,
        expertise: 'Intermediate',
        expertiseNumber: 55,
        experience: "The only payment service that I've integrated so far. I enjoyed working with it's SDK but I think it needs a lot more features that it has. Currently interesting in stripe for payment services integration."
      },
      {
        title: 'Eslint',
        imgRoute: '/images/DevTools/eslint.webp',
        stars: 5,
        expertise: 'Advanced',
        expertiseNumber: 80,
        experience: "Currently I can't code without eslint, It makes me a lot more productive when I write code. I've made a couple of eslint configurations for the frontend and for the backend and yes the configuration part could be  tedious but it's woth 100%"
      }
    ],
    achivements: [
      'Development of APIs REST and RESTful',
      'Development in microserices arquitecture',
      'Development of security midleware to secure APIs',
      'Data encryption',
      'Tokens handling',
      'File management',
      'Notification through mails and sms',
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

// ----------------------------------Work Expirience------------------------------
const engWorkExp: Array<JobDetail> = [
  {
    date: '2019-Jan',
    company: 'Interware',
    title: 'Presale engineer and Tech lead',
    time: '1.7 Years (current job)',
    description: 'After being asigned in different proyects as developer I got an offer from the ceo to help as PreSale engineer helping the sales team meeting with clients and offering development solutions  half time and the other half as tech lead managin proyects and being responsable of the development. I was very stressed out at the beginning because I was supposed to be the expert in all sort technologies with clients so I studied a lot to be able to fulfill the new responsibilities that currently have.'
  },
  {
    date: '2016-March',
    company: 'Interware',
    title: 'Fullstack Senior Developer',
    time: '2.5 Years',
    description: 'Design and develop diferent web systems using modern technogies like the most updated version of react, redux, node, server side render (ssr), webpack and flow for the development. Also for the quality side I use husky, prettier, checkstyle, eslint and sonarqube to avoid syntax and code structre mistakes and JEST with enzyme for testing part, ensuring the quality and efficiency of the software'
  },
  {
    date: '2015-Jan',
    company: 'PBG',
    title: 'Head of Development',
    time: '1.5 Years',
    description: 'The company did not have a development area before my arrival, the IT products they needed were rented out to external consultants. During my stay, I used my experience in solving the problems that the consultants try to solve such as slow loading of the site, updating their website, promoting good practices in the code, helping all departments to have a more friendly, dynamic and functional IT environment and supervise that the products contracted in IT consultants are what they are supposed to be.'
  },
  {
    date: '2014-Jan',
    company: 'Freelance',
    title: 'Frontend Developer',
    time: '1 Year',
    description: 'Design, implement and maintain web applications in different phases, analysis, design, development, testing and maintenance using most used technologies (html5, Javascript, JQuery ,css3, boostrap, responsive design, ). Connection to Web Services and Apis, proposals for solutions, programming, testing and debugging.'
  },
  {
    date: '2013-Jan',
    company: 'IBM',
    title: 'Jr Application Developer Java & Web Technologies',
    time: '1 Year',
    description: 'Design, implement and maintain java application phases, take part in software development activities, conduct software analysis, programming, testing and debugging. As jr developer I mainly support and document the operation.'
  }
];

const espWorkExp: Array<JobDetail> = [
  {
    date: '2019-Enero',
    company: 'Interware',
    title: 'Ingeniero Preventa y Líder Técnico',
    time: '1.7 Años (current job)',
    description: 'Después de haber sido asignado en diferentes proyectos como desarrollador, recibí una oferta del director para ayudar como ingeniero Preventa ayudando al equipo de ventas a reunirse con los clientes y ofrecer soluciones de desarrollo medio tiempo y la otra mitad como líder técnico en proyectos y ser responsable del desarrollo. Estaba muy estresado al principio porque se suponía que yo era el experto en todo tipo de tecnologías con los clientes, así que estudié mucho para poder cumplir con las nuevas responsabilidades que tengo actualmente.'
  },
  {
    date: '2016-Marzo',
    company: 'Interware',
    title: 'Desarrollador Fullstack Senior',
    time: '2.5 Años',
    description: 'Diseñar y desarrollar diferentes sistemas web utilizando tecnologías modernas como la versión más actualizada de react, redux, node, server side render (ssr), webpack y flow para el desarrollo. También por el lado de la calidad utilicé husky, prettier, checkstyle, eslint y sonarqube para evitar errores de sintaxis y estructura en el código y JEST con enzyme para la parte de pruebas, asegurando la calidad y eficiencia del software.'
  },
  {
    date: '2015-Enero',
    company: 'PBG',
    title: 'Jefe de Desarrollo',
    time: '1.5 Años',
    description: 'La empresa no tenía un área de desarrollo antes de mi llegada, los productos de TI que necesitaban se alquilaron a consultores externos. Durante mi estadía, utilicé mi experiencia en la solución de los problemas que los consultores intentan resolver como la carga lenta del sitio, la actualización de su sitio web, la promoción de buenas prácticas en el código, ayudando a todos los departamentos a tener una experiencia más amigable, dinámica y funcional en su ambiente de TI además de supervisar que los productos contratados de TI sean lo esperado.'
  },
  {
    date: '2014-Enero',
    company: 'Freelance',
    title: 'Desarrollador Frontend',
    time: '1 Año',
    description: 'Diseñar, implementar y mantener aplicaciones web en diferentes fases, análisis, diseño, desarrollo, testing y mantenimiento utilizando las tecnologías más utilizadas (html5, Javascript, JQuery, css3, boostrap, responsive design,). Conexión a Web Services y Apis, propuestas de soluciones, programación, testing y depuración.'
  },
  {
    date: '2013-Enero',
    company: 'IBM',
    title: 'Desarrollador Jr de aplicaciones Java y Technologias Web',
    time: '1 Año',
    description: 'Diseño, implementación y mantenimiento de aplicaciones Java, actividades de desarrollo de software, análisis, programación, pruebas y depuración de software. Como desarrollador jr, principalmente apoyo y documente la operación.'
  }
];

// ----------------------------------Basic Info------------------------------
export const englishData = {
  jobWanted: 'Team leader javascript senior developer',
  introduction: `Hello, I'm Steven.
  
  Currently Looking for personal grow and modern technologies, for the moment I prefer remote work.
  
  I'm someone that is always looking to stay updated and active in IT and development, who works compromised with results and quality providing the best experience for everyone, I'not focused only in my code, I care about my team, the client, the final user and the company where I work.`,
  time: '1 Year',
  stack: stackEnglish,
  workExp: engWorkExp
};

export const spanishData = {
  jobWanted: 'Team leader desarrollador senior javascript',
  introduction: `Hola, me llamo Steven.

  Actualmente buscando crecimiento personal y tecnologías interesantes, por el momento prefiero trabajo remoto.
  
  Soy alguien que siempre busca estar actualizado y activo en  IT y desarrollo, siempre comprometido con resultados y calidad proveyendo la mejor experiencia para todos. No me enfoco sólo en el código, me preocupo por mi equipo, los clientes, el usuario final y la compañía donde trabajo.`,
  stack: stackEnglish,
  workExp: espWorkExp
};

// ----------------------------------Not multilanguage data------------------------------
export const general = {
  englishLevel: 80,
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
  achievements: 'Achievements',
  workExp: 'Work experience',
  contactMe: 'Contact me'
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
  achievements: 'Logros',
  workExp: 'Experiencia laboral',
  contactMe: 'Contáctame'
};

export default null;
