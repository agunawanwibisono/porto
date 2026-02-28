import {
  c,
  python,
  java,
  cpp,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  edunet,
  weatherpedia,
  termpw,
  payloadmaster,
  threejs,
  mhft,
  sketcher,
  mathwork,
  CompileVortex,
  eduskill,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const services = [
  { title: "C", icon: c },
  { title: "C++", icon: cpp },
  { title: "Python", icon: python },
  { title: "Java", icon: java },
];

export const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "Rect JS", icon: reactjs },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  { name: "Three JS", icon: threejs },
  { name: "git", icon: git },
];

export const experiences = [
  {
    title: "UI/UX & Front end",
    company_name: "Dinas kominfo banyuwangi",
    icon: eduskill,
    iconBg: "#ffffff",
    date: "agu 2023 - sep 2023",
    points: [
      "Responsible for developing and designing an anti-corruption website for the village and a tourism village website.",
      "Supported technical staff in various development tasks and was given full responsibility to design and build a website from the ground up. Leveraged programming and UI/UX design skills to deliver the project within a one-month deadline.",
    ],
  },
  {
    title: "UI/UX Designer & Project Lead",
    company_name: "DESA PUCANGTELU",
    icon: mathwork,
    iconBg: "#ffffff",
    date: "Mar 2025 - apr 2025",
    points: [
      "Led comprehensive user research through interviews with village officials and surveys of residents, identifying pain points in the manual document request process.",
      "Designed a complete user flow and comprehensive wireframes for an online document request system, covering six different types of letters with a multi-level approval workflow.",
    ],
  },
  {
    title: "Berinovasi dengan AI",
    company_name: "Kemenpora | Plan International | AVPN",
    icon: edunet,
    iconBg: "#ffffff",
    date: "dec 2025 - dec 2025",
    points: [
      "Successfully completed the “Berinosvasi dengan AI” (Innovating with AI) training program, earning 15 learning hours. The program focused on practical applications of Artificial Intelligence, innovation strategies, and leveraging AI tools to enhance productivity and problem-solving skills.",

    ],
  },
];

export const projects = [
  {
    name: "desa digital kominfo banyuwangi",
    description:
      "This website presents a Digital Village platform that provides information about the village profile, history, achievements, and public services. It is designed to introduce the village identity and make important information easily accessible to residents and visitors.",
    tags: [
      { name: "UI/UX", color: "blue-text-gradient" },
      { name: "figma", color: "green-text-gradient" },
    ],
    image: weatherpedia,
    source_code_link: "https://www.figma.com/proto/MZpzs6gXdeI9hBK9Ovi2pQ/Untitled?node-id=1-58&p=f&t=y5qwvr7ZZVQr1jXW-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1",
  },
  {
    name: "desa pariwisata banyuwangi",
    description:
      "This website represents a Tourism Village platform that promotes Banyuwangi as an attractive travel destination. It provides information about village profiles, tourist destinations, and local attractions, while highlighting natural beauty and cultural potential",
    tags: [
      { name: "UI/UX", color: "blue-text-gradient" },
      { name: "figma", color: "green-text-gradient" },
    ],
    image: termpw,
    source_code_link: "https://www.figma.com/proto/6h4mDou0XlHZqEsrIGmpg8/Untitled?node-id=1-127",
  },
  {
    name: "pembuatan surat online desa pucangtelu",
    description:
      "This website is an online village administration platform for Desa Pucangtelu that facilitates digital letter creation and public services. It allows residents to log in or sign up to submit requests for official village documents more efficiently",
    tags: [
      { name: "UI/UX", color: "blue-text-gradient" },
      { name: "figma", color: "green-text-gradient" },
    ],
    image: mhft,
    source_code_link:
      "https://www.figma.com/proto/oYXIEUiQlILVxTDp6cAa0p/Untitled?node-id=58-4&starting-point-node-id=58%3A4",
  }, 
];
