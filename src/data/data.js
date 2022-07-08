const portfolioData = [
  {
    id: 1,
    title: "Social Media Android App",
    image:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-792c8.appspot.com/o/Project%20pics%2Fvinsta.jpg?alt=media&token=34074381-9e16-4ff7-a432-7518f8799ae6",
    live_link: null,
    github_link: "https://github.com/vipulchaudhary16/Vinsta-Social-media-app",
  },
  {
    id: 2,
    title: "Text Manipulation Web App",
    image:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-792c8.appspot.com/o/Project%20pics%2FtextUtils.jpg?alt=media&token=5b484eeb-d236-4c09-a36c-d16e1b7c5c56",
    live_link: "https://vipulchaudhary16.github.io/Text-Utils-React-App/",
    github_link: "https://github.com/vipulchaudhary16/Text-Utils-React-App",
  },
  {
    id: 3,
    title: "Note Taking Web App",
    image:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-792c8.appspot.com/o/Project%20pics%2Fnote-taking.jpg?alt=media&token=9d9e6fec-5d94-4d63-b37d-c9364d7ffb58",
    live_link: null,
    github_link: "https://github.com/vipulchaudhary16/notebook-React-App",
  },
  {
    id: 4,
    title: "Video Calling React Web App",
    image:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-792c8.appspot.com/o/Project%20pics%2FVideoCallReactApp.jpg?alt=media&token=585f6998-274a-4d82-8096-47e7438df7f0",
    live_link: 'https://veerza-calling.netlify.app/',
    github_link: "https://github.com/vipulchaudhary16/videocall-react-app",
  },
  {
    id: 5,
    title: "WeatherX - Android App",
    image:
      "",
    live_link: null,
    github_link: "https://github.com/vipulchaudhary16/Weatherex-Android-weather-app",
  },
];

const testimonialsData = [
    {
        id : 1,
        name : 'Harsh Varmora',
        pic : 'https://firebasestorage.googleapis.com/v0/b/portfolio-792c8.appspot.com/o/testimonial%2FHarshV.jfif?alt=media&token=e1b38307-a266-4c3c-a243-cc6b94ee0b9f',
        words : 'Vipul is truly a collaborative partner during the whole process And made it fun to work on a website project instead of stressful.'
    },
    {
        id : 2,
        name : 'Jay Nakum',
        pic : 'https://firebasestorage.googleapis.com/v0/b/portfolio-792c8.appspot.com/o/testimonial%2FJay%20Nakum.jpeg?alt=media&token=62e89577-fddc-462f-969a-ba5c64957c19',
        words : 'Vipul is one of the most talented person I have ever worked with.'
    },
    {
        id : 3,
        name : 'Navin Chaudhary',
        pic : 'https://firebasestorage.googleapis.com/v0/b/portfolio-792c8.appspot.com/o/testimonial%2FNavin%20Chaudhary.jpg?alt=media&token=5250e753-cc2e-4256-9605-b87328ec4764',
        words : 'Vipul is The best person with intelligence and good nature.'
    }

]

const skills = [
  {
    webd : [
      {
        id:1,
        name : 'HTML',
        level : 'Experienced'
      },
      {
        id:2,
        name : 'CSS',
        level : 'Intermediate'
      },
      {
        id:3,
        name : 'ReactJS',
        level : 'Intermediate'
      },
      {
        id:4,
        name : 'Tailwind',
        level : 'Beginner'
      },
      {
        id:5,
        name : 'Bootstraps',
        level : 'Intermediate'
      },
      {
        id:6,
        name : 'NodeJS',
        level : 'Intermediate'
      },
      {
        id:7,
        name : 'MongoDB',
        level : 'Intermediate'
      },
      {
        id:8,
        name : 'MYSQL',
        level : 'Beginner'
      },
    ],
  },

  {
    appd : [
      {
        id:1,
        name : 'JAVA',
        level : 'Experienced'
      },
      {
        id:2,
        name : 'Kotlin',
        level : 'Beginner'
      },
    ]
  },

  {
    other : [
      {
        id:1,
        name : 'Machine Learning',
        level : 'Beginner'
      },
      {
        id:1,
        name : 'UI/UX Design',
        level : 'Beginner'
      },
      {
        id:1,
        name : 'Problem solving',
        level : 'Intermediate'
      }
  ]
  }
]

export { portfolioData , testimonialsData, skills};
