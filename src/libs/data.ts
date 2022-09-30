import talismanWeb from '../assets/previews/talisman-web.png';
import rtsd from '../assets/previews/rtsd.png';
import portfoliotemplate from '../assets/previews/portfolio-template.png';
import niuvanWeb from '../assets/previews/niuvan-web.png';
import nftCollection from '../assets/previews/nft-collection.png';
import nftBot from '../assets/previews/nft-bot.png';
import newsletterScraper from '../assets/previews/newsletter-scraper.gif';
import newPortfolio from '../assets/previews/new-portfolio.png';
import lotteryMinecraft from '../assets/previews/lottery-minecraft.png';
import knapsackSolver from '../assets/previews/knapsack-solver.png';
import kebabVerse from '../assets/previews/kebabverse.png';
import esgMalaysia from '../assets/previews/esg-malaysia.png';
import djmglobalWeb from '../assets/previews/djmglobal-web.png';
import discordBotBnb from '../assets/previews/discord-bot-bnb.png';
import cryptoDashboard from '../assets/previews/crypto-dashboard.png';
import myGithub from '../assets/previews/my-github.png';

export const experiences = [
  {
    company: "Talisman",
    role: "Web3 Developer",
    description: "Developing the Web App portfolio, NFTs, explore, transaction history. Create libraries for wallet integration, and help integrate to DAPPs.",
    logo: "https://styles.redditmedia.com/t5_53lwgb/styles/communityIcon_zn4x47tltaw81.png",
    tags: ["React", "Typescript", "Polkadot", "IPFS", "Ethereum Smart Contracts"],
    startDate: "Apr 2022",
    endDate: "Present",
    url: "https://talisman.xyz/",
  },
  {
    company: "ServerMiner",
    role: "Tech. Support, Tech. Content Writer, Software Developer",
    description: "Answered and resolved over 𝟱,𝟱𝟬𝟬+ tickets regarding Billing, Server Support and Server Setup. Content writer for the support/knowledge-base page of ServerMiner, writing over 𝟴𝟬+ guides. Developed a ReactJS / Electron application",
    logo: "https://serverminer.com/assets/images/logo/border-700px.png",
    tags: ["Java", "Technical Support", "Content Writing", "Linux", "Electron"],
    startDate: "Apr 2020",
    endDate: "Present",
    url: "https://serverminer.com/",
  },
  {
    company: "PolicyStreet",
    role: "Intern Frontend Developer",
    description: "working/maintaining on the front-end webpages of the site using ReactJS and Redux as well as backend touching NodeJS. Building full pages with API implementation.",
    logo: "https://assets.policystreet.com/pslogo.svg",
    tags: ["React", "Redux", "NodeJS", "Typescript", "AWS"],
    startDate: "Dec 2020",
    endDate: "Mar 2021",
    url: "https://policystreet.com/",
  },
  {
    company: "The Techy Hub",
    role: "Intern Backend Developer",
    description: "Back-end web engineer working on client Content Management System for the backend of their websites. Later on moving to work with creating an Interactive Board for a client using Bare Conductive and a Raspberry Pi.",
    logo: "https://thetechyhub.com/wp-content/themes/thetechyhub/public/img/generic/logo-light.png",
    tags: ["Laravel", "VueJS", "MySQL", "Bare Conductive"],
    startDate: "Dec 2018",
    endDate: "Mar 2019",
    url: "https://thetechyhub.com/",
  },
]

export const projects = [
  {
    name: "Talisman Web",
    description: "A Polkadot, Kusama & Parachain dashboard for the community. With Talisman Web you can buy DOT and KSM, contribute to crowdloans, view NFTs and more.",
    preview: talismanWeb,
    tags: ["TypeScript", "Web3", "React", "Polkadot", "Kusama", "IPFS"],
    url: "https://app.talisman.xyz"
  },
  {
    name: "This Portfolio",
    description: "Every developer needs a portfolio to showcase their work, I am no exception. I created this Portfolio to replace my old static HTML site, to showcase my growth and experience in the industry.",
    preview: newPortfolio,
    tags: ["React", "Typescript"],
    url: "#"
  },
  {
    name: "Real-time Social Distance Monitor",
    description: "Realtime social distance monitoring system utilising Darknet YOLOv4 and OpenCV for my Bachelors Degree Final Year Project @ Sunway University.",
    preview: rtsd,
    tags: ["Python", "YOLOv4", "OpenCV", "Darknet"],
    url: "https://github.com/JAhimaz/Realtime-Social-Distancing-Monitoring"
  },
  {
    name: "Portfolio Template",
    description: "I've created a easy-to-customise React Portfolio Template for developers to use. It's a simple, clean and easy to use template for developers to showcase their work.",
    preview: portfoliotemplate,
    tags: ["React", "Bootstrap"],
    url: "https://github.com/JAhimaz/Portfolio-Bootstrap-React"
  },
  {
    name: "Niuvan Web",
    description: "Niuvan is a Citizenship-By Investment corporation based in Vanuatu and our offshore representative based in Kuala Lumpur, Malaysia. I had the opportunity to work with them to create a website for their company.",
    preview: niuvanWeb,
    tags: ["React", "Bootstrap"],
    url: "https://niuvan.com"
  },
  {
    name: "NFT Collection",
    description: "The Sunway Tech Club x Web3 Series is a project that aims to provide a platform for students to learn about the blockchain technology and to build their own NFTs. In this project, we will be using the a created ReactJS + Typescript project to display our minted RMRK NFTs.",
    preview: nftCollection,
    tags: ["React", "Typescript", "RMRK", "IPFS", "Web3"],
    url: "https://github.com/JAhimaz/MyNFT-Portfolio"
  },
  {
    name: "MagicEden NFT Floor Price Bot",
    description: "A bot that utilises the Magic Eden API to get the floor price of NFTs and send it to a Discord channel.",
    preview: nftBot,
    tags: ["Python", "Web3", "NFTs", "Discord.PY"],
    url: "https://github.com/JAhimaz/ME_NFT_Floor_Tracker"
  },
  {
    name: "Newsletter Scraper",
    description: "Scrapes through websites to detect whether or not they have a newsletter within their website. Utilises Python libraries such as BeautifulSoup4 and Requests-HTML",
    preview: newsletterScraper,
    tags: ["Python", "BeautifulSoup4", "Requests-HTML"],
    url: "https://github.com/JAhimaz/Newsletter-Webscraper"
  },
  {
    name: "EzLottery Minecraft Plugin",
    description: "EzLottery is a Minecraft plugin that allows players to create their own lottery events. Players can create their own lottery events and set the prize, ticket price and the amount of tickets to be sold. My first successfull Minecraft plugin with over 600+ Downloads.",
    preview: lotteryMinecraft,
    tags: ["Java", "Minecraft"],
    url: "https://www.spigotmc.org/resources/ezlottery-the-ultimate-lottery-plugin-1-17-gui-placeholderapi.78365/"
  },
  {
    name: "Knapsack Problem Solver Algorithm Visualizer",
    description: "CSC2103 - Data Structures & Algorithms Assignment. A Unity3D application that visualizes the Knapsack Problem Solver Algorithm with a fun interactive game.",
    preview: knapsackSolver,
    tags: ["Unity3D", "C#", "Data Structures", "Algorithms"],
    url: "https://github.com/JAhimaz/KnapsackProblemSimulation"
  },
  {
    name: "KebabVerse (Talisman x Unity3D)",
    description: "This is a test project to see if it is possible to integrate Unity3D WebGL with the Talisman Crypto Wallet Extension. Successful",
    preview: kebabVerse,
    tags: ["Unity3D", "WebGL", "Web3", "Talisman", "C#", "React", "Typescript"],
    url: "https://github.com/JAhimaz/Unity3D-Talisman"
  },
  {
    name: "ESG Malaysia",
    description: "ESG Malaysia is a website that provides information on ESG (Environmental, Social and Governance) in Malaysia. I had the opportunity to work with them to create a website for their company.",
    preview: esgMalaysia,
    tags: ["React", "Typescript"],
    url: "https://esgi.org.my/"
  },
  {
    name: "DJMGlobal Website",
    description: "DJMGlobal is a company that provides services in the field of Medical, Energy, Trading and Sustainable Products. I had the opportunity to work with them to create a website for their company.",
    preview: djmglobalWeb,
    tags: ["PHP", "HTML", "CSS", "Bootstrap"],
    url: "https://djmglobal.net/"
  },
  {
    name: "Discord BNB Buy Tracker Bot",
    description: "A Python Discord bot for alerting the price of a BSC (BEP-20) Token. Currently being used in the ElonGoat (EGT) Community.",
    preview: discordBotBnb,
    tags: ["Python", "Web3", "Discord.PY", "ElonGoat", "Binance Smart Chain"],
    url: "https://github.com/JAhimaz/Discord-Price-Bot"
  },
  {
    name: "Crypto Dashboard (CoinGecko)",
    description: "A Crypto Dashboard that utilises the CoinGecko API to display the latest cryptocurrency prices. Built as a task for the CoinGecko Internship Interview.",
    preview: cryptoDashboard,
    tags: ["React", "CoinGecko API", "Web3", "Crypto"],
    url: "https://joshuaahimaz.com/crypto-dashboard/"
  },
  {
    name: "More Projects on GitHub!",
    description: "I have more projects that I have worked on that you may check out on my GitHub! Feel free to connect with me as well.",
    preview: myGithub,
    tags: ["I", "Really", "Like", "🍜"],
    url: "https://github.com/JAhimaz?tab=repositories"
  },
]

export const education = [
  {
    degree: "MSc in Computer Science",
    school: "Sunway University / Lancaster University",
    yearStart: 2021,
    yearEnd: 2023,
    logo: "https://varrn-sunway.org/wp-content/uploads/2021/02/Sunway-University-A-Class-Above-white.png"
  },
  {
    degree: "BSc in Computer Science",
    school: "Sunway University / Lancaster University",
    yearStart: 2019,
    yearEnd: 2021,
    logo: "https://varrn-sunway.org/wp-content/uploads/2021/02/Sunway-University-A-Class-Above-white.png"
  },
  {
    degree: "Diploma in Information Technology",
    school: "Sunway University",
    yearStart: 2017,
    yearEnd: 2019,
    logo: "https://varrn-sunway.org/wp-content/uploads/2021/02/Sunway-University-A-Class-Above-white.png"
  },
]