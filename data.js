export const PROFILE = {
  ABOUT: {
    Who: 'Roman Zhernosek',
    Lifetime: '09 Apr 1993 16:00:00 GMT+5',
    Profession: 'Full\xa0Stack Web\xa0Developer',
    Experience: '5+ years',
    Member: ['Gigster Talent Network', 'https://gigster.com/talent'],
    Education: ['Computer Science, Polytech', 'https://english.spbstu.ru'],
    Perfectionist: '99%',
    Minimalist: '95%',
    Humor: ['TARS', 'https://youtu.be/p3PfKf0ndik'],
    Lifestye: 'Healthy',
    Sports: 'Swimming, Volleyball, Boxing',
    Location: 'Saint\xa0Petersburg, Russia',
  },
  SOCIALS: {
    github: 'https://github.com/IpShot',
    linkedin: 'https://www.linkedin.com/in/zhernosek-roman',
    email: 'roman@zhernosek.com',
  },
}

export const SKILLS = {
  LANGUAGES: [
    { name: 'HTML', level: 5 },
    { name: 'CSS', level: 5 },
    { name: 'JavaScript', level: 5 },
    { name: 'Python', level: 4 },
    { name: 'SQL', level: 3 },
    { name: 'C++', level: 3 },
    { name: 'Java', level: 2 },
  ],
  FRAMEWORKS: [
    { name: 'React', level: 5 },
    { name: 'Next.js', level: 5 },
    { name: 'Meteor', level: 4.5 },
    { name: 'Material UI', level: 4 },
    { name: 'Express', level: 4 },
    { name: 'Flask', level: 4 },
    { name: 'Mocha', level: 4 },
    { name: 'Jest', level: 4 },
    { name: 'React Native', level: 3 },
    { name: 'Bootstrap', level: 3 },
    { name: 'Eve', level: 2 },
    { name: 'Angular', level: 2 },
    { name: 'Onsen UI', level: 2 },
  ],
  DATABASE: [
    { name: 'MongoDB', level: 5 },
    { name: 'PostgreSQL', level: 3 },
    { name: 'ElasticSearch', level: 2 },
  ],
  CLOUD: [
    { name: 'Heroku', level: 5 },
    { name: 'Amazon S3', level: 5 },
    { name: 'Cloudinary', level: 4 },
    { name: 'Cloudflare', level: 4 },
    { name: 'Galaxy', level: 4 },
    { name: 'Google Cloud Platform', level: 3 },
    { name: 'DigitalOcean', level: 3 },
    { name: 'Azure', level: 2 },
  ],
  TOOLS: [
    { name: 'Docker', level: 5 },
    { name: 'Webpack', level: 5 },
    { name: 'Cordova', level: 4 },
    { name: 'Electron', level: 3 },
  ],
  INTEGRATIONS: [
    { name: 'Mailchimp', level: 5 },
    { name: 'SendGrid', level: 5 },
    { name: 'Google Analytics', level: 5 },
    { name: 'Stripe', level: 5 },
    { name: 'OneSignal', level: 5 },
    { name: 'FullStory', level: 5 },
    { name: 'Facebook Pixel', level: 4 },
    { name: 'Mixpanel', level: 4 },
    { name: 'Intercom', level: 4 },
    { name: 'Mailgun', level: 4 },
    { name: 'Twilio', level: 4 },
    { name: 'Crisp', level: 4 },
    { name: 'ViralLoops', level: 4 },
    { name: 'Telegram Bot', level: 4 },
    { name: 'Yandex.Metrica', level: 4 },
    { name: 'Yandex.Checkout', level: 4 },
    { name: 'G Suit', level: 3.5 },
    { name: 'Google Maps', level: 3 },
  ],
}

export const PORTFOLIO = [{
  name: 'JobNinja',
  desc: 'Jobs marketplace in Germany',
  details: 'Client wanted to develop a platform for searching \
  jobs according to set criterias and applying to them. \
  The platform has been developed for German labor market. \
  There are a responive web client and mobile apps.',
  url: 'https://jobninja.com',
  imageMaxHeight: '193px',
  images: ['landing.jpg', 'job search', 'job page.jpg', 'profile'],
  stack: [
    'React', 'React Native', 'Flask', 'MongoDB', 'Heroku',
    'Mixpanel', 'FullStory', 'Facebook Pixel', 'Google Analytics'
  ],
},{
  name: 'LightYear',
  desc: 'Personal development community',
  details: 'Client wanted to develop a community for \
  personal development and leadership trainings. The platform \
  allows people to communicate and exchange knowledge via either \
  channels or direct messages, and people dashboards. They are \
  able to enroll in courses and trainings for accomplishing \
  their goals. Users and courses can be managed by an admin. \
  The web app is responsive and available from desktop and mobile.',
  url: 'https://lightyear.co',
  logo: 'logo.svg',
  imageMaxHeight: '170px',
  images: [
    'dashboard', 'chat', 'courses', 'purchase.jpg',
    'course enrolled', 'group video chat.jpg',
    'live video conference', 'search',
    'course edit (admin)', 'users list (admin)'
  ],
  stack: [
    'Meteor', 'MongoDB', 'Galaxy', 'Stripe', 'SendGrid',
    'Intercom', 'Cloudinary', 'Amazon S3'
  ],
},{
  name: 'Briefly',
  desc: 'Connect brands and photographers',
  details: 'Client wanted to create a web platform which connects \
  brands and photographers. Brands are able to post an information \
  about what photos content do they need, choose an appropriate creator, \
  discuss the project, review photos, select appropriate ones and \
  pay for them. Photographers are able to view available projects, \
  submit proposals to interested ones, discuss a project with brand, \
  upload photos and get payouts for them. Users, projects, \
  payments and payouts can be managed by an admin.',
  images: [
    'landing.jpg', 'login', 'new project modal', 'brand start create project',
    'creator projects', 'creator project info', 'creator submit proposal',
    'brand chooses creator', 'chat.jpg', 'image comments.jpg',
    'brand assets', 'creator assets', 'payments', 'receipt',
    'admin brands list', 'admin brand info', 'admin creators list',
    'admin creator reviews', 'admin projects list', 'admin project financials'
  ],
  stack: [
    'React', 'Express', 'MongoDB', 'FullStory', 'OneSignal',
    'Intercom', 'Mailgun', 'Amazon S3'
  ],
},{
  name: 'Teem',
  desc: 'The US schools community',
  details: 'Client wanted to develop a community that allows school \
  staffs to find each other and communicate easily, search any useful \
  files/links which help them at work. The platform has an admin side \
  for managing schools and districts (group of schools in the US), \
  users and topics. There are a responive web client, mobiles and desktop apps.',
  images: [
    'landing', 'sign in', 'school staffs list', 'create new topic',
    'topic channel', 'notifications', 'global search', 'profile',
    'schools list (admin)', 'school topics (admin)'
  ],
  stack: [
    'React', 'Meteor', 'MongoDB', 'Cordova', 'Electron','G Suit',
    'Mixpanel', 'OneSignal', 'Mailchimp', 'Amazon S3', 'Heroku'
  ],
},{
  name: 'MiID',
  desc: 'Customizable products marketplace',
  details: 'Client wanted to develop a platform that allows users \
  to customize products of different brands and look at 3D model \
  at real time. They can buy either own created products or \
  customized by another users, like and save products in favorites. \
  There are web clients for desktop and mobiles.',
  images: [
    'landing.jpg', 'brand page', 'customization', 'cart', 'order info',
    'shopping history', 'account', 'public profile'
  ],
  stack: ['React', 'Express', 'MongoDB'],
}]

export const FEEDBACKS = [{
  project: 'JobNinja',
  owner: 'Laurent Meyer, CTO',
  feedback: 'Roman has worked with us to relaunch our platform in 2017. \
  It did a very good work, was always available and working 10+ hours per day. \
  Roman is pretty easy to work with: it is always "ok I see, no problem, I\'ll do it!". \
  However, he\'ll never sacrifice the code quality and is very perfectionist: I can remember once: \
  "Yeah I know that there are open source libs for that but all are pretty bad, I did it myself, took 1 hour and it works!".\
  Finally I would like to mention that Roman has a deep understanding of Computer Science in broad sense: \
  it is opinionated but his code has really few side-effects and is really extendable. \
  That\'s a very good point when you rely on this software for your daily business.',
},{
  project: 'MiID',
  owner: 'Nestor Sanchez, CTO',
  feedback: 'Roman is a young and talented individual which brought \
  a lot of quality to Mi ID. He is very driven and always willing \
  to work to deliver on time. Despite his age he was one of our best \
  engineers and so on he took his senior role very seriously in order \
  to promote best practices within the team he was part of. \
  It was a very nice experience to work with Roman and we will be \
  surely crossing paths in the future to build something great again.',
},{
  project: 'Teem',
  owner: 'Kevin Jenkins, CEO',
  feedback: 'Roman is awesome. He\'s fast. But more importantly, he cares about the work he does. \
  And that makes all the difference. For example, frustrated with performance issues, he knocked them out. \
  Would highly recommend!',
},{
  project: 'Briefly',
  owner: 'Kirk Bridger, PM',
  feedback: 'Roman is a truly good freelancer, very flexible and able to work 60 hours a week to meet a deadline. \
  I can read through the code he writes without any problem and so does my whole team. \
  The code he writes is modular and scalable and respects the best practices set by the industry. \
  I warmly recommend Roman if you need a solid frontend.',
},{
  project: 'LightYear',
  owner: 'Igsaan Salie, PM',
  feedback: 'Roman is a great programmer. He is always aiming for excellence and that\'s not easy to find out there. \
  We will keep working for long.',
}]

export const OWN_PROJECTS = [{
  name: 'Words Explorer',
  desc: 'Deep English words learning',
  details: 'The service allows people to explore new words deeply. \
  Instead of just a translation people are getting a bunch of \
  information about the word meanings, synonyms, most common use \
  cases (collocations) and examples with context, including short video.',
  url: 'https://words.tbbe.ru',
  logo: 'logo.svg',
  imageMaxHeight: '142px',
  images: ['search', 'video.jpg', 'reminder.jpg', 'common words'],
  stack: [ 'React', 'Node', 'ElasticSearch', 'MongoDB', 'Material UI' ],
},{
  name: 'TBBE',
  desc: 'Learn English watching TV shows',
  details: 'The platform allows people to learn English while \
  watching TV shows. They can stop and repeat last phrase they \
  didn\'t understand in slower pace, check subtitles and explanation \
  on every word in the phrase, add words to a dictionary for future \
  learning. Also there are some exercises available for memorize phrases. \
  There is a responive web client for desktop and mobiles.',
  logo: 'logo.svg',
  imageMaxHeight: '176px',
  imagesExt: 'jpg',
  images: [
    'dashboard', 'login.png',
    'search serial', 'guide',
    'exercise', 'virtual money'
  ],
  stack: [
    'React', 'Eve', 'MongoDB', 'Crisp', 'Mailchimp', 'Yandex.Checkout',
    'Yandex.Metrica', 'Google Analytics', 'FullStory'
  ],
},{
  name: 'StudyTime',
  desc: 'Timetable for students',
  logo: 'logo.svg',
  details: 'The project\'s target is to provide students with \
  a usable and beautiful timetable, available from any device.\
  There are a responsive web, mobile and desktop apps.',
  imageMaxHeight: '160px',
  images: [ 'landing', 'timetable' ],
  stack: [ 'Angular', 'Onsen UI', 'Meteor', 'MongoDB', 'Cordova', 'Electron' ],
}]
