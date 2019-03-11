import goTRGImage from '../assets/images/gotrg_logo.svg';
import upworkImage from '../assets/images/upwork_logo.svg';
import agencyMaiImage from '../assets/images/agencymai.jpg';

export default () => [
  {
    shortName: 'agencymai',
    companyName: 'Agency, Mai?',
    title: 'Fullstack Developer',
    startDate: 'March 2018',
    endDate: 'Current',
    image: agencyMaiImage,
    roleSummary: `Developing numerous projects based on WordPress with very deep modifications on both Back- and
          Front-end. Developing unique framework and plugins to allow clients build websites with ease.`,
    duties: [
      `Setting up project of different complexity level in different environments, from shared hostings to
      dedicated managed WordPress hostings, such as Kinsta, which then requires a large degree of workarounds due
      to very limited control given by such solutions.`,
      `Participating in design process and finding the most optimal solutions for extremely demanding Frontend tasks to
      satisfy specific client's needs`,
      `Developing pixel-perfect websites and apps that look perfect across all modern devices and browsers`,
      `Striving for the absolute best performance for all projects and achieving 90+ Google PageSpeed score (98+ for
      the most demanding ones) and 60 FPS transitions and animations.`,
      `Writing equal amount of Backend and Frontend code due to being the lead developer on most projects`,
      `Regularly pushing updates through version control systems and taking part in daily meet-ups so that every team
      member is up-to-date on every project's progress`,
      `Setting up automation tools, such as npm, Webpack, Gulp, to achieve the fastest development times`,
      `Running thorough tests to ensure that every new feature has no negative impact on original code`,
      `Tracking each task through Jira issue-tracking system to show progress and analyse how much time a task has
      consumed and why.`
    ],
  },
  {
    shortName: 'gotrg',
    companyName: 'goTRG (formerly The Recon Group Inc)',
    title: 'Frontend Developer',
    startDate: 'August 2014',
    endDate: 'March 2018',
    image: goTRGImage,
    roleSummary: 'Working in a fast-paced environment within a medium-sized team of developers on various ' +
      'large-scale e-commerce projects.',
    duties: [
      'Analyzing designs and making sure they fit into the selected technology',
      'Implementing designs using various CSS and JS frameworks',
      'Creating HTML email templates with plain HTML or using various email frameworks (mjml)',
      'Tracking and solving issues with an issue-tracking system (JIRA)',
      'Testing websites in various browsers and on different devices to ensure full responsiveness and ' +
      'cross-browser compliance',
      'Regularly pushing updates through Git version control',
      'Creating WordPress websites from scratch',
      'Achieving faster developing environment via task runners (Grunt, Gulp, WebPack)',
      'Researching back-end frameworks and technologies to have a working knowledge for the entire project',
      'Participation in daily meet-ups, updating the team on the progress and ensuring a better planning for ' +
      'the future tasks',
      'Participating in the decision-making process and choosing optimal technologies based on the project ' +
      'requirements',
    ],
  },
  {
    shortName: 'upwork',
    companyName: 'Upwork (formerly Elance-oDesk)',
    title: 'Freelancer / Frontend Developer',
    startDate: 'July 2011',
    endDate: 'August 2014',
    image: upworkImage,
    roleSummary: 'Working as a freelancer you have to posses excellent communication, time management and ' +
      'self-discipline skills to not only find the right client and be selected amongst hundreds of other ' +
      'applicants, but to also be able to build a rich portfolio and make customers happy, resulting in great ' +
      'reviews and potential long-term relationships.',
    duties: [
      'Finding relevant jobs and developing excellent writing skills as the result of creating successful ' +
      'applications',
      'Building solid relationships with clients by satisfying their requirements, meeting deadlines and ' +
      'showing great communication skills',
      'Keeping an up-to-date portfolio and a strong profile to maintain a high chance of getting picked ' +
      'amongst other applicants',
      'Developing multitasking as freelancing often requires you to work on many projects simultaneously ' +
      'without sacrificing quality of your work',
      'Constantly developing new skills and acquiring new knowledge to keep gaining more opportunities and to ' +
      'become a more appealing candidate for the job',
      'Developing an outstanding time-management, discipline and responsibility for your work as the result ' +
      'of being your own project manager',
    ],
  },
];
