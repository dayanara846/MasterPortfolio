/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Dayanara's Portfolio",
  description:
    "A passionate individual who always thrives to solve complex problems and create intelligent solutions.",
  og: {
    title: "Dayanara M. Diaz Vargas' Portfolio",
    type: "website",
    url: "http://dayanaradiaz.com/",
  },
};

//Home Page
const greeting = {
  title: "Dayanara M. Diaz Vargas",
  logo_name: "DayanaraDiazVargas",
  nickname: "dayanara846",
  subTitle:
    "A passionate individual who always thrives to solve complex problems and create intelligent solutions.",
  resumeLink:
    "https://drive.google.com/file/d/1QoRZitI1hPtEvnkYIoOuc-wYI9laQZsI/view?usp=sharing",
  portfolio_repository: "https://github.com/dayanara846/masterPortfolio",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/dayanara846",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/dayanara-mary-diaz-vargas/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:dayanara.diaz@upr.edu",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Twitter",
    link: "https://twitter.com/dayanara846",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  },
];

const skills = {
  data: [
    {
      title: "Statistical Analysis",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases.",
        "⚡ Experience of working with Neural Networks and ML projects",
        "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "logos-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Pandas",
          fontAwesomeClassname: "simple-icons:pandas",
          style: {
            backgroundColor: "transparent",
            color: "#150458",
          },
        },
        {
          skillName: "R",
          fontAwesomeClassname: "logos-r-lang",
          style: {
            backgroundColor: "transparent",
            color: "#276DC3",
          },
        },
      ],
    },
    {
      title: "Quantitative Finance",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building applications of machine learning, risk management, optimization, and option pricing to analyze the stock market.",
        "⚡ Developing statistical, time series, and wavelet analysis along with their applications in algorithmic trading.",
        "⚡ Applying backtested data to various trading scenarios to spot opportunities for profit.",
      ],
      softwareSkills: [
        {
          skillName: "C++",
          fontAwesomeClassname: "bx-bxl-c-plus-plus",
          style: {
            color: "#00599C",
          },
        },
        {
          skillName: "SQL",
          fontAwesomeClassname: "ant-design:console-sql-outlined",
          style: {
            color: "#FFDC0F",
          },
        },
        {
          skillName: "Scipy",
          fontAwesomeClassname: "simple-icons:scipy",
          style: {
            color: "##8CAAE6",
          },
        },
        {
          skillName: "Quantmod",
          fontAwesomeClassname: "carbon-chart-candlestick",
          style: {
            color: "#F5AE29",
          },
        },
        {
          skillName: "Quandl",
          fontAwesomeClassname: "vs-q-square",
          style: {
            color: "#F86001",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
      ],
    },
    {
      title: "Data Visualization",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience making complex data more accessible, understandable and usable. ",
        "⚡ Deploying interactive plots and dashboards to inform customers on the economy's behavior. ",
        "⚡ Enable clients to unlock fast, accurate data insights that inform decisions and improve performance.",
      ],
      softwareSkills: [
        {
          skillName: "Tableau",
          fontAwesomeClassname: "ion-logo-tableau",
          style: {
            color: "#E97627",
          },
        },
        {
          skillName: "Shiny",
          fontAwesomeClassname: "mdi-hexagon-slice-6",
          style: {
            color: "#15BFFF",
          },
        },
        {
          skillName: "Plotly",
          fontAwesomeClassname: "simple-icons:plotly",
          style: {
            color: "#3F4F75",
          },
        },
        {
          skillName: "Ggplot2",
          fontAwesomeClassname: "file-icons:grapher",
          style: {
            color: "#005571",
          },
        },
        {
          skillName: "Arc GIS",
          fontAwesomeClassname: "wpf-worldwide-location",
          style: {
            color: "#589632",
          },
        },
        {
          skillName: "PowerBI",
          fontAwesomeClassname: "simple-icons:powerbi",
          style: {
            color: "#F2C811",
          },
        },
      ],
    },
    {
      title: "Model Risk Management",
      fileName: "DesignImg",
      skills: [
        "⚡ Evaluate risk of loss resulting from using insufficiently accurate models in the context of valuing financial securities.",
        "⚡ Estimating real-time probability prediction of fraudulent activities.",
        "⚡ Experience with IFRS 9 and CECL Credit Risk Modelling and Validation.",
      ],
      softwareSkills: [
        {
          skillName: "Excel",
          fontAwesomeClassname: "file-icons:microsoft-excel",
          style: {
            color: "#217346",
          },
        },
        {
          skillName: "ALM6",
          fontAwesomeClassname: "fluent-web-asset-24-regular",
          style: {
            color: "#990000",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/dayanaradiazvargas",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "University of Puerto Rico, Rio Piedras",
      subtitle: "B.A. in Economics",
      logo_path: "uprrp-.png",
      alt_name: "UPRRP",
      duration: "2013 - 2017",
      descriptions: [
        "⚡ Completed coursework in economic subjects like microeconomics, macroeconomics and econometrics.",
        "⚡ Completed courses on Finance, Data Mining, Linear Algebra, and Calculus I,II, III.",
        "⚡ I took a Social Science oriented degree that enabled me to further my studies in Psychology, Sociology, Political Science, etc.",
      ],
      website_link: "https://www.uprrp.edu/english/",
    },
    {
      title: "University of Puerto Rico, Rio Piedras",
      subtitle: "M.B.A. - AACSB accredited",
      logo_path: "uprrp-.png",
      alt_name: "UPRRP",
      duration: "2017 - 2019",
      descriptions: [
        "⚡ Learned to carry out operational management, develop marketing strategies, do strategic planning, and read and assess financial reports.",
        "⚡ Coursework dominated by case studies, group work and real-world projects.",
        "⚡ Selected for the scholarship Fondo Dotal Damaso “Tom” Acevedo and a financial aid package that included TA and RA'ship experience.",
      ],
      website_link: "https://www.uprrp.edu/english/",
    },
    {
      title: "Michigan State University, East Lansing",
      subtitle: "American Economic Association Summer Program",
      logo_path: "MSU.png",
      alt_name: "MSU",
      duration: "2017 & 2019",
      descriptions: [
        "⚡ Took undergraduate and graduate courses such as Microeconomics, Econometrics, Mathematics and Research Seminars.",
        "⚡ Program aimed at developing technical skills in preparation for the rigors of graduate studies",
        "⚡ Students receive 2 months of intensive training in several courses, at 3 college credits per class.",
      ],
      website_link: "https://www.aeaweb.org/about-aea/committees/aeasp",
    },
    {
      title: "University of Puerto Rico, Mayaguez",
      subtitle: "Non-Degree Conducing",
      logo_path: "UPRM.png",
      alt_name: "UPRM",
      duration: "2020",
      descriptions: [
        "⚡ Took an undergraduate course in Ordinary Differential Equations and a graduate course in Probability Theory.",
        "⚡ Proof heavy coursework.",
        "⚡ Applied simulations in R for the Probability Theory course.",
      ],
      website_link: "https://www.uprm.edu/portada/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "American Economic Association",
      subtitle: "Member",
      logo_path: "American_Economic_Association_Logo.png",
      certificate_link:
        "https://www.aeaweb.org",
      alt_name: "Stanford University",
      color_code: "#D24939",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work",
  description:
    "I have held different positions in the academic, banking and private sectors. Through time, I have learned to become a versatile professional capable of adapting to different environments. ",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Quantitative Analyst",
          company: "1FirstBank PR",
          company_url: "https://www.1firstbank.com/pr/en",
          logo_path: "legato_logo.png",
          duration: "April 2019 - PRESENT",
          location: "San Juan, Puerto Rico",
          description:
            "I validate econometric, financial and machine learning models. Additionally, I reperform models in R and certify that their documentation is adequate. In doing so, I apply regression models that include, but are not limited to: Logit, Gompit, OLS, Polynomial, Kernel,VAR, SVAR and Recursive Least Squares.",
          color: "#0879bf",
        },
        {
          title: "Economist & Researcher",
          company: "Inteligencia Economica, Inc.",
          company_url: "https://www.economiapr.com",
          logo_path: "muffito_logo.png",
          duration: "January 2019 - March 2019",
          location: "Guaynabo, Puerto Rico",
          description:
            "Wrote feasibility studies for small businesses, international corporations and government institutions. Applied econometric models to forecast and analyze clients interests.",
          color: "#9b1578",
        },
      ],
    },
    {
      title: "RA & TA",
      experiences: [
        {
          title: "Research Assistant & Teaching Assistant",
          company: "University of Puerto Rico, Rio Piedras",
          company_url: "https://www.uprrp.edu/english/",
          logo_path: "uprrp-.png",
          duration: "September 2017 - May 2019",
          location: "San Juan, Puerto Rico",
          description:
            "I engaged in many activities to assist Faculty staff at the Graduate and Undergraduate level, for example: (1) Created a database of student profiles, necessities and concerns; (2) Graded coursework Assisted in data gathering for professor’s working papers; (3) Tutored students in Business Calculus and Statistics; and (4) Prepared data analysis workshops in R. ",
          color: "#ee3c26",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Rotary Club Member",
          company: "E-Club of Puerto Rico y Las Américas, PR, Puerto Rico (Rotary Club)",
          company_url: "https://my.rotary.org/en/club/24318b28-a43d-49c2-b57b-f43fdc3879f4/details",
          logo_path: "google_logo.png",
          duration: "June 2018 - Present",
          location: "San Juan, Puerto Rico",
          description:
            "The mission of The Rotary Foundation of Rotary International is to enable Rotarians to advance world understanding, goodwill, and peace through the improvement of health, the support of education, and the alleviation of poverty. Today, San Juan Rotary, with more than 133 members, is the largest of the island's Rotary Clubs, and the largest English-speaking Club south of Florida. We participate in activities such as hospital volunteer work, marching to support breast cancer research, etc.",
          color: "#4285F4",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "In my leisure time, I enjoy learning new concepts. I try to enhance my recently acquired skills by generating exciting projects.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_ashutosh.png",
    description:
      "You can message me, and I will reply within 24 hours. I can help you with ML, AI, Statistical, Financial and Economic analysis.",
  },
  blogSection: {
    title: "Interests",
    subtitle:
      "I am very passionate about economics. I follow many podcasts that cover interesting topics on this subject. My favorite one is NPR's Planet Money. I like to follow their podcast and invite anyone to listen to it in their free time.",
    link: "https://www.npr.org/sections/money/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "San Juan, Puerto Rico",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/9KwmWHvV5au5v1cMA",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+787 3645986",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
};

