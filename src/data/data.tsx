import {
  AcademicCapIcon,
  // CalendarIcon,
  DownloadIcon,
  // FlagIcon,
  MapIcon,
  OfficeBuildingIcon,
  SparklesIcon,
} from '@heroicons/react/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
// import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
// import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
// import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
// import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
// import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
// import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
// import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
// import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
// import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'React Resume Template',
  description: "Example site built with Tim Baker's react resume template",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Bryan Kho`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a Perth based <strong className="text-stone-100">Full Stack Software Engineer</strong>, currently working
        in <strong className="text-stone-100">Rio Tinto</strong> helping build data science and engineering solutions in
        Azure Cloud
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: DownloadIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: ` Experience in enterprise cloud solutions and multiple languages such as Python, TypeScript and .NET
  Big fan of Functional paradigms and Scrum practices`,
  aboutItems: [
    {label: 'Location', text: 'Perth, WA', Icon: MapIcon},
    // {label: 'Age', text: '31', Icon: CalendarIcon},
    // {label: 'Nationality', text: 'Australian', Icon: FlagIcon},
    {label: 'Interests', text: 'Gaming, Coffee, Cars, Custom Keyboards', Icon: SparklesIcon},
    {label: 'Study', text: 'University of Western Australia', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Rio Tinto', Icon: OfficeBuildingIcon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 6,
      },
      {
        name: 'Typescript',
        level: 8,
      },
      {
        name: 'CSS, SCSS, etc',
        level: 6,
      },
      {
        name: 'Vue',
        level: 6,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node',
        level: 8,
      },
      {
        name: 'Python',
        level: 7,
      },
      {
        name: 'C#, F#',
        level: 7,
      },
      {
        name: 'PHP, Laravel, Perl',
        level: 6,
      },
    ],
  },
  {
    name: 'Cloud Infrastructure',
    skills: [
      {
        name: 'Azure Compute',
        level: 8,
      },
      {
        name: 'Azure Networking',
        level: 6,
      },
      {
        name: 'Azure Serverless',
        level: 7,
      },
    ],
  },
  {
    name: 'Other Skills',
    skills: [
      {
        name: 'Bash',
        level: 7,
      },
      {
        name: 'Powershell and CMD',
        level: 7,
      }
    ],
  },  
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Project title 1',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage1,
  },
  {
    title: 'Project title 2',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage4,
  },
  {
    title: 'Project title 3',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage3,
  },
  {
    title: 'Project title 5',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage5,
  }
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: '2010-2014',
    location: 'University of Western Australia',
    title: 'Bachelor of Computer Science and Commerce',
    content: <p></p>,
  },
  {
    date: '2009',
    location: 'Canning College',
    title: 'Foundation Year',
    content: <p></p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'Sept 2022 - Present',
    location: 'Rio Tinto',
    title: 'Specialist Software Engineer',
    content: (
      <p>
        •	Full stack engineer working with data scientist, optimizers and engineers on our scheduling platform <br />
        •	Build serverless infrastructure using Azure Functions, Kubernetes and Logic applications <br />
        •	Building and aggregating data pipelines from numerous data sources (Oracle, Service Bus, MSSQL) <br />
        •	POC and MVP web application development with Python and JavaScript <br />
        •	Mentoring developers on best practices and advance concepts <br />
        •	Liaising with stakeholders from Microsoft, BCG, Rio Tinto and help remove blockers on specific enterprise architecture <br />
      </p>
    ),
  },
  {
    date: 'June 2021 - Sept 2022',
    location: 'Rio Tinto',
    title: 'Senior Software Engineer',
    content: (
      <p>
      •	Lead a small team of engineers with Agile and Scrum practices <br />
      •	Conceptualised solutions and work items for building up incremental deliveries for teams quarterly key results <br />
      •	Speeding up the deliveries with new CI/CD toolsets and third-party integrations using Azure Pipelines with regression and automated testing <br />
      •	Migration of existing F#/C#/JavaScript microservices to Azure cloud and newer enterprise infrastructure <br />
      •	Guiding developers on software techniques, company specific policies and solutions to sprint deliverables <br />
      •	Drawing architecture solutions based on requirements, system design, networking, security, and support documentation for Level 1 / 2 Support <br />
      •	Liaising and providing weekly reviews with stakeholders, business owners and users of applications <br />
      </p>
    ),
  },
  {
    date: 'Dec 2019 - June 2021',
    location: 'Rio Tinto',
    title: 'Software Engineer',
    content: (
      <p>
        •	Responsible in maintaining F#, C#, dotnet, JavaScript applications built with SQL Server and HTTP APIs <br />
        •	Understanding of SSL, IIS infrastructure, group policies, firewalls, enterprise security and windows servers <br />
        •	Work management with ServiceNow and Change Management ITIL4 practices <br />
        •	Worked in the POC and POV with RedHat OpenShift utilising Docker and Kubernetes <br />
        •	Migrating existing CI/CD solutions from Octopus to Azure Dev Ops Pipelines on Cloud and On-Premises Infrastructure <br /> 
        •	Implementing integration and unit testing in existing and new code through TDD practices <br />
        •	Knowledge in enterprise server management such as AD groups, DNS propagation, PowerShell and CMD <br />
      </p>
    ),
  },
  {
    date: 'Sept 2019 - Mar 2020',
    location: 'EdX',
    title: 'Instructor',
    content: (
      <p>
      •	Teaching a class of 25 students part time of the latest technologies as a Full Stack Developer in UWA <br />
      •	Covering technologies such as HTML/CSS, JS, jQuery, Bootstrap, Node, Express, NoSQL, MySQL, Git, Firebase and etc <br />
      •	Presenting live coding examples, describing the programming concepts, frameworks and libraries and the mindset of being a developer <br />
      </p>
    ),
  },
  {
    date: 'Nov 2018 - Nov 2019',
    location: 'Discovery Data Company',
    title: 'Senior Software Developer',
    content: (
      <p>
      •	Help developed multiple successful software MVP and offshore projects specialising in Navigational Oil and Gas Data, Property, Media, and F&B <br />
      •	Experience with Azure and AWS Cloud architectures and infrastructures <br />
      •	Worked with Restful APIs, GIS Data, SQL Servers, Git, Apache Servers, and Linux. <br />
      •	Worked with frameworks and technologies such as Laravel and Express. <br />
      •	Experience in front end technologies such as Vue, React, SCSS, CSS, NPM, JavaScript, HTML <br />
      •	Help designed timelines, client quotes, wireframes, sprint deliverables, requirements, documentation with technical teams and clients <br />
      •	Lead teams remotely in Indonesia through Slack, Jira, weekly sprints, daily stand-ups under Agile <br />
      </p>
    ),
  },
  {
    date: 'Mar 2015 - Nov 2018',
    location: 'Domain',
    title: 'Software Developer',
    content: (
      <p>
        •	Responsible for maintaining MyDesktop CRM used by real estate franchises in Australia, New Zealand and Indonesia <br />
        •	Responsible in producing custom reports and data through MySQL consisting of millions of properties, contacts and transactions <br />
        •	Maintaining and building XML feed servers and MyDesktop API using SOAP, Restful and Flask architecture. Built and maintained systems with other API integrators <br />
        •	Experience working under the Agile methodology through weekly Sprint deliverables <br />
        •	Knowledge in utilising EC2, S3, SQS, Elastic Search, RDS, etc. with Amazon Web Services <br />
        •	Creating and maintaining JSON, XML, CSV data parsers and collection <br />
        •	Experience in working with medium to large scale projects spanning across different speciality groups with proper code reviews and GIT source control <br />
      </p>
    ),
  },
  {
    date: 'May 2016 - Oct 2018',
    location: 'KhooDesigns',
    title: 'Software Developer',
    content: (
      <p>
        Describe work, special projects, notable achievements, what technologies you have been working with, and
        anything else that would be useful for an employer to know.
      </p>
    ),
  },
  {
    date: 'May 2014 - Sept 2014',
    location: 'Hotcopper',
    title: 'Junior Software Developer',
    content: (
      <p>
        Describe work, special projects, notable achievements, what technologies you have been working with, and
        anything else that would be useful for an employer to know.
      </p>
    ),
  },
  {
    date: 'Nov 2011 - Feb 2012',
    location: 'Ernst & Young',
    title: 'Trainee Auditor',
    content: (
      <p>
        Describe work, special projects, notable achievements, what technologies you have been working with, and
        anything else that would be useful for an employer to know.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    /*
    {
      name: 'John Doe',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
    */
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: '',
  items: [
    {
      type: ContactType.Email,
      text: 'bryan@khoo.codes',
      href: 'mailto:bryan@khoo.codes',
    },
    {
      type: ContactType.Location,
      text: 'Perth, WA',
      href: 'https://www.google.com/maps/place/Perth+WA/@-32.0400639,115.9615356,10z/data=!3m1!4b1!4m5!3m4!1s0x2a32966cdb47733d:0x304f0b535df55d0!8m2!3d-31.9523123!4d115.861309',
    },
    {
      type: ContactType.Instagram,
      text: '@khoocodes',
      href: 'https://www.instagram.com/khoocodes/',
    },
    {
      type: ContactType.Github,
      text: 'bryank91',
      href: 'https://github.com/bryank91',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/bryank91'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://au.linkedin.com/in/bryan-kho-92490baa'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/khoocodes/'}
];
