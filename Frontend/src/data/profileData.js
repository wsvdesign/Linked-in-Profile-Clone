export const profile = {
  name: 'Leo Martinez',
  verified: true,
  headline: 'Game Developer | Frontend Engineer | Computer Science Graduate Student at Yale',
  location: 'San Francisco Bay Area',
  currentCompany: 'PixelForge Studio',
  currentSchool: 'Yale University',
  followers: '12,408 followers',
  connections: '500+ connections',

  about: 'Game developer and frontend engineer with a passion for building immersive, systems-driven experiences. I specialize in multiplayer architecture, real-time game UI, and the kind of low-level engine work that makes a game feel alive. Currently pursuing my M.S. in Computer Science at Yale while shipping independent game projects and contributing to the broader developer community. I am obsessed with what happens at the intersection of great design and great engineering — where a mechanic stops being a feature and starts being a feeling.',

  verificationText: 'Leo has a verification. You can add one too.',
  verificationSubtext: 'Verified members get 60% more profile views on average.',
  profileInitials: 'LM',
  activityFollowers: '12,408 followers',

  activityPosts: [
    {
      title: 'GTA VI — What Rockstar is really building',
      text: 'GTA 6 drops November 19th and I cannot stop thinking about it from an engineering perspective. The draw distance, the NPC behavior systems, the way weather interacts with gameplay — Rockstar is not just making a game, they are raising the bar for what an open world engine can do. As a developer this is the kind of release that makes you want to completely blow up your current project and start over.',
      source: 'rockstargames.com',
      reactions: '5,405',
      comments: '196 comments',
      reposts: '148 reposts',
      age: '1w',
    },
    {
      title: 'Introducing VOID SIGNAL — my new multiplayer game',
      text: 'I have been quietly building something for the past eight months. VOID SIGNAL is a 4-player asymmetric survival game where one player is invisible to the others but can see everything. The tension it creates is unlike anything I have playtested before. Sharing the first dev log now.',
      source: 'leomartinez.dev',
      reactions: '622',
      comments: '19 comments',
      reposts: '10 reposts',
      age: '1mo',
    },
  ],

  experience: [
    {
      company: 'PixelForge Studio',
      logoText: 'PF',
      logoBg: '#111111',
      role: 'Game Development Intern',
      type: 'Internship',
      dates: 'Jun 2025 - Present · 1 yr',
      location: 'San Francisco Bay Area',
      description: 'Building real-time multiplayer UI systems and gameplay prototypes. Working directly with senior engineers on lobby architecture and matchmaking flow.',
      subRoles: null,
    },
    {
      company: 'Yale Game Lab',
      logoText: 'YG',
      logoBg: '#00356b',
      role: 'Student Researcher',
      type: 'Part-time',
      dates: '2024 - Present · 2 yrs',
      location: 'New Haven, Connecticut, United States',
      description: null,
      subRoles: null,
    },
    {
      company: 'Respawn Collective',
      logoText: 'RC',
      logoBg: '#c0392b',
      role: 'Junior Game Developer',
      type: 'Contract',
      dates: '2023 - May 2024 · 1 yr 5 mos',
      location: 'Remote',
      description: null,
      subRoles: null,
    },
    {
      company: 'Freelance',
      logoText: 'FL',
      logoBg: '#4a4a4a',
      role: 'Frontend Developer',
      type: 'Full-time',
      dates: '2021 - 2023 · 2 yrs',
      location: 'Remote',
      description: 'Built game landing pages, dev portfolio sites, and interactive UI components for indie studios and solo developers.',
      subRoles: null,
    },
    {
      company: 'Harvard Game Development Society',
      logoText: 'HG',
      logoBg: '#a51c30',
      role: null,
      type: 'Part-time · 3 yrs 1 mo',
      dates: '2019 - 2022',
      location: 'Cambridge, Massachusetts, United States',
      description: null,
      subRoles: [
        {
          title: 'Lead Developer',
          dates: '2021 - 2022 · 1 yr',
          description: 'Led a team of six students building a browser-based tower defense game using JavaScript and Canvas API. Presented at Harvard\'s annual student showcase.',
        },
        {
          title: 'Junior Developer',
          dates: '2019 - 2021 · 2 yrs',
          description: 'Contributed to two shipped student game projects. Learned version control, agile sprint cycles, and collaborative game design under upperclassmen mentorship.',
        },
      ],
    },
  ],

  educationItems: [
    {
      school: 'Yale University',
      logoText: 'Y',
      logoBg: '#00356b',
      degree: 'Master of Science (M.S.), Computer Science',
      dates: '2024 – Present',
      details: 'Activities and societies: Yale Game Lab, Yale Computer Society, Graduate Research in Interactive Systems',
    },
    {
      school: 'Harvard University',
      logoText: 'H',
      logoBg: '#a51c30',
      degree: 'A.B., Computer Science',
      dates: '2020 – 2024',
      details: 'Activities and societies: Harvard Game Development Society, CS50 Course Staff, HackHarvard',
    },
  ],

  skills: [
    {
      name: 'Game Development',
      endorsedBy: 'Endorsed by 6 colleagues at PixelForge Studio',
      endorsements: '15 endorsements',
    },
    {
      name: 'Multiplayer Systems',
      endorsedBy: 'Endorsed by senior engineers and 1 other who is highly skilled at this',
      endorsements: '8 endorsements',
    },
  ],

  // Right sidebar - "More profiles for you"
  sidebarProfiles: [
    { name: 'Dario Amodei', headline: 'CEO and Co-Founder at Anthropic · 3rd+', action: 'Connect' },
    { name: 'Christopher Olah', headline: 'Member Of Technical Staff at Anthropic · 3rd+', action: 'Connect' },
    { name: 'Anthony Bastone, M.B.A.', headline: 'Finance Leadership at Anthropic | Senior Finance Executive | GTM & ... · 3rd+', action: 'Connect' },
    { name: 'Paul Smith', headline: 'Chief Commercial Officer · 3rd+', action: 'Follow' },
    { name: 'Varun Krishna', headline: 'CEO at Rocket, Interim CEO at Redfin · 3rd+', action: 'Follow' },
  ],

  // Right sidebar - "People you may know"
  peopleYouMayKnow: [
    { name: 'Natasha Schmitt Caccia Salinas', headline: 'Associate Professor of Law at Fundação Getulio Vargas and Principal ... · 3rd+', action: 'Connect' },
    { name: 'Amnart Tangkiriphimarn', headline: 'Associate Dean & Assistant Professor (Thammasat Law) | Arbitrator · 3rd+', action: 'Connect' },
    { name: 'Jason Friedman', headline: 'Incoming J.D. Candidate at Yale Law School · 3rd+', action: 'Connect' },
    { name: 'Itamar Mann', headline: 'Acting Chair of International Law and International Human Rights La... · 3rd+', action: 'Connect' },
    { name: 'Jed Rothstein 罗瑞杰', headline: 'Associate | Capital Markets | Davis Polk & Wardwell LLP (Admitted in ... · 3rd+', action: 'Connect' },
  ],

  pagesYouMightLike: [
    { name: 'Claude for Business', category: 'Technology, Information and Internet', followers: '54,234 followers' },
    { name: 'Cursor', category: 'Software Development', followers: '327,894 followers', extra: 'Rene & 10 other company alumni work here' },
  ],

  // Interests section
  interests: [
    { name: 'David Solomon', headline: 'Chairman & CEO at Goldman Sachs', followers: '1,400,121 followers', badge: true },
    { name: 'John Waldron', headline: 'President and COO at Goldman Sachs', followers: '93,870 followers', badge: true },
  ],
};
