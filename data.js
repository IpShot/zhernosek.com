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
    { name: 'Meteor', level: 4.5 },
    { name: 'Material UI', level: 4 },
    { name: 'Express', level: 4 },
    { name: 'Mocha', level: 4 },
    { name: 'Jest', level: 4 },
    { name: 'React Native', level: 3 },
    { name: 'Bootstrap', level: 3 },
    { name: 'Eve', level: 2 },
    { name: 'Angular', level: 2 },
  ],
  DATABASE: [
    { name: 'MongoDB', level: 5 },
    { name: 'ElasticSearch', level: 2 },
  ],
  CLOUD: [
    { name: 'Heroku', level: 5 },
    { name: 'Amazon S3', level: 5 },
    { name: 'Cloudflare', level: 4 },
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
    { name: 'Google Analytics', level: 5 },
    { name: 'Stripe', level: 5 },
    { name: 'OneSignal', level: 4 },
    { name: 'Mixpanel', level: 4 },
    { name: 'Telegram Bot', level: 4 },
    { name: 'Yandex.Metrica', level: 4 },
    { name: 'Yandex.Checkout', level: 4 },
    { name: 'Google Maps', level: 3 },
  ],
  // OTHER: [
  //   { name: 'Android SDK', level: 3 },
  // ]
}

export const PORTFOLIO = [{
  name: 'JobNinja',
  desc: 'Jobs marketplace in Germany',
  details: 'Client wanted to develop web desktop client and mobile apps for \
  search jobs by criterias and apply to them. Service was developed for Germany.',
  url: 'https://jobninja.com',
  images: ['landing', 'job search', 'job page', 'profile'],
},{
  name: 'LightYear',
  desc: 'Courses and leadership trainings',
  details: '',
  url: 'https://lightyear.co',
  logo: 'logo.svg',
},{
  name: 'MiID',
  desc: 'Custom products marketplace',
  details: 'Client wanted to develop a web app that allows users \
  to customize products from different brands (and see 3D model at real time), \
  buy them or products customized by another users, add products to favorites, \
  like products, following another users. I built a front-end part in React \
  with flux architecture to get data from API. \
  For building front-end project I had used Webpack.',
  images: [
    'landing', 'brand page', 'customization', 'cart', 'order info',
    'shopping history', 'account', 'public profile'
  ],
},{
  name: 'Teem',
  desc: 'The US schools platform',
  details: 'Client wanted to develop a web app that allows school staffs \
  to find each other and communicate easily, to search any useful files/links \
  which help them at work. Also it should has an admin side for managing schools \
  and districts (group of schools in America). The managing includes managing users (staffs) and topics.\
  I built almost all in the app using Meteor + React. \
  Also I used Meteor\'s Cordova integration to wrap an app for mobile iOS and Android.',
  images: [
    'landing', 'sign in', 'school staffs list', 'create new topic', 'topic channel',
    'notifications', 'global search', 'schools list (admin)', 'school topics (admin)'
  ],
},{
  name: 'Briefly',
  desc: 'Connect brands and photographers',
  details: 'Client wanted to create a platform for connect brands and photographs. \
  Brand should be able to post info about required photos content, select creator, \
  discuss project with creator, review photos, complete project and pay. \
  Creator should be able to view project info, submit proposal, discuss project with brand, upload photos.',
  images: [
    'landing', 'login', 'new project modal', 'brand start create project',
    'creator briefs', 'creator submit proposal', 'brand select proposal',
    'chat', 'image comments', 'brand assets', 'creator assets', 'payments',
    'receipt', 'admin brands list', 'admin brand info', 'admin creators list',
    'admin creator reviews', 'admin projects list', 'admin project financials'
  ],
}]

export const FEEDBACKS = [{
  project: 'JobNinja',
  text: 'Roman has worked with us to relaunch our platform in 2017. \
  It did a very good work, was always available and working 10+ hours per day. \
  Roman is pretty easy to work with: it is always "ok I see, no problem, I\'ll do it!". \
  However, he\'ll never sacrifice the code quality and is very perfectionist: I can remember once: \
  "Yeah I know that there are open source libs for that but all are pretty bad, I did it myself, took 1 hour and it works!".\
  Finally I would like to mention that Roman has a deep understanding of Computer Science in broad sense: \
  it is opinionated but his code has really few side-effects and is really extendable. \
  That\'s a very good point when you rely on this software for your daily business.',
},{
  project: 'MiID',
  text: 'Roman is a young and talented individual which brought \
  a lot of quality to Mi ID. He is very driven and always willing \
  to work to deliver on time. Despite his age he was one of our best \
  engineers and so on he took his senior role very seriously in order \
  to promote best practices within the team he was part of. \
  It was a very nice experience to work with Roman and we will be \
  surely crossing paths in the future to build something great again.',
},{
  project: 'Briefly',
  text: 'Roman is a truly good freelancer, very flexible and able to work 60 hours a week to meet a deadline. \
  I can read through the code he writes without any problem and so does my whole team. \
  The code he writes is modular and scalable and respects the best practices set by the industry. \
  I warmly recommend Roman if you need a solid frontend :)',
},{
  project: 'Teem',
  text: 'Roman is awesome. He\'s fast. But more importantly, he cares about the work he does. \
  And that makes all the difference. For example, frustrated with performance issues, he knocked them out. \
  Would highly recommend!',
},{
  project: 'LightYear',
  text: 'Roman is a great programmer. He is always aiming for excellence and that\'s not easy to find out there. \
  We will keep working for long.',
}]

export const OWN_PROJECTS = [{
  name: 'StudyTime',
  desc: 'The best timetable for students',
  details: 'Client needed to develop a cross-platform application with responsive web. \
  Also, he needed a little simple landing. The project aimed to provide to students \
  with a usable and beautiful timetable, which will be available from any devices.\
  It was built using following technology stack:\
  - Landing: React.js, Stylus, Basscss\
  - App backend: Meteor, MongoDB\
  - App frontend: AngularJS, OnsenUI, Stylus, MarsDB\
  The web app was wrapped as mobile apps (Android, iOS) by Cordova and as desktop apps (MacOS, Linux, Windows) by Electron.',
}, {
  name: 'TBBE',
  desc: 'Learn English by watching TV shows you love',
}, {
  name: 'Words Explorer',
  desc: 'Explore new English words',
}]
