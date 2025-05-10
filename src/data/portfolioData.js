import chatAppImg from '../asset/projects/chatApp.png';
import salesAppImg from '../asset/projects/salesApp.png';
import pizzaHutImg from '../asset/projects/pizzaHut.jpg';

const portfolioData = [
    {
        id: '01',
        imgUrl: chatAppImg,
        title: 'Real-Time Chat Application (MERN Stack)',
        description: 'Feature-rich MERN stack chat app using Socket.io for real-time messaging, JWT authentication, and Zustand for global state. Includes user status tracking, error handling, and a clean UI with TailwindCSS + DaisyUI.',
        tech: ["React", "Node.js", "MongoDB", "Express.js", "TailwindCSS", "DaisyUI", "JWT", "Socket.io", "Zustand"],
        siteUrl: 'https://github.com/abhilashwasekar/Real_Time_Chat_Application.git',
    },
    {
        id: '02',
        imgUrl: salesAppImg,
        title: 'Sales Management System (MERN Stack)',
        description: 'Full-stack sales tracker built with the MERN stack. Includes JWT auth, real-time WebSocket updates, advanced search/filtering, and a responsive TailwindCSS-based UI.',
        tech: ["React", "Node.js", "MongoDB", "Express.js", "TailwindCSS", "JWT", "WebSockets"],
        siteUrl: 'https://github.com/abhilashwasekar/Sales_MERN_Project.git',
    },
    {
        id: '03',
        imgUrl: pizzaHutImg,
        title: 'PizzaHut Sales Analytics & Management System',
        description: 'Relational database project built with MySQL to manage and analyze sales data of a pizza store. Includes SQL queries for insights like revenue, popular sizes, and top-priced items.',
        tech: ["MySQL", "SQL"],
        siteUrl: 'https://github.com/abhilashwasekar/PizzaHut-Sales-Analytics-and-Management-System.git',
    },
];

export default portfolioData;
