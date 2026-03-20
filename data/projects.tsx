import type { ReactNode } from "react";
import Bun from "@/icons/Bun";
import DockerIcon from "@/icons/DockerIcon";
import GoIcon from "@/icons/GoIcon";
import JsIcon from "@/icons/JsIcon";
import Mongo from "@/icons/Mongo";
import Nextjs from "@/icons/Nextjs";
import NodeIcon from "@/icons/NodeIcon";
import OceanIcon from "@/icons/OceanIcon";
import Prisma from "@/icons/Prisma";
import Py from "@/icons/Py";
import ReactIcon from "@/icons/ReactIcon";
import RedisIcon from "@/icons/RedisIcon";
import TailwindIcon from "@/icons/TailwindIcon";
import Ts from "@/icons/Ts";
import VercelIcon from "@/icons/VercelIcon";
import Ws from "@/icons/Ws";

export type ProjectStatus = "Ready" | "In Production";

export type ProjectTechKey =
  | "bun"
  | "docker"
  | "digital-ocean"
  | "go"
  | "javascript"
  | "html"
  | "css"
  | "api"
  | "mongodb"
  | "nextjs"
  | "nodejs"
  | "prisma"
  | "python"
  | "react"
  | "redis"
  | "tailwindcss"
  | "typescript"
  | "vercel"
  | "websocket";

export type ProjectEntry = {
  slug: string;
  title: string;
  description: string;
  status: ProjectStatus;
  githubLink?: string;
  siteLink?: string;
  imageSrc: string;
  videoSrc?: string;
  techStack: ProjectTechKey[];
  featured?: boolean;
};

type ProjectTechItem = {
  name: string;
  children: ReactNode;
};

const TECH_STACK_REGISTRY: Record<ProjectTechKey, ProjectTechItem> = {
  bun: { name: "Bun", children: <Bun /> },
  docker: { name: "Docker", children: <DockerIcon /> },
  "digital-ocean": { name: "Digital Ocean", children: <OceanIcon /> },
  go: { name: "Go", children: <GoIcon /> },
  javascript: { name: "JavaScript", children: <JsIcon /> },
  mongodb: { name: "MongoDB", children: <Mongo /> },
  nextjs: { name: "Next.js", children: <Nextjs /> },
  nodejs: { name: "Node.js", children: <NodeIcon /> },
  prisma: { name: "Prisma", children: <Prisma /> },
  python: { name: "Python", children: <Py /> },
  react: { name: "React", children: <ReactIcon /> },
  redis: { name: "Redis", children: <RedisIcon /> },
  tailwindcss: { name: "Tailwind CSS", children: <TailwindIcon /> },
  typescript: { name: "TypeScript", children: <Ts /> },
  vercel: { name: "Vercel", children: <VercelIcon /> },
  websocket: { name: "WebSocket", children: <Ws /> },
};

// Add your projects here.
// Copy the example object below, uncomment it, and replace the values.
export const projects: ProjectEntry[] = [
  {
    slug: "resuno",
    title: "Resuno – AI Resume Builder",
    description:
      "Built an AI-powered resume builder that helps students and professionals generate ATS-optimized resumes.",
    status: "Ready",
    githubLink: "https://github.com/prathambalehosurr/Resuno",
    siteLink: "https://resuno-frontend.vercel.app/",
    imageSrc: "",
    techStack: ["nextjs","typescript","tailwindcss"],
    featured: true,
  },
  {
    slug: "chirp-chat",
    title: "Chirp Chat – Real Time Messaging Application",
    description:
      "Developed a real-time chat application.",
    status: "Ready",
    githubLink: "https://github.com/prathambalehosurr/Chirp-Chat",
    siteLink: "https://chirpchat-neon.vercel.app/",
    imageSrc: "",
    techStack: ["python","javascript","websocket"],
    featured: true,
  },
  {
    slug: "encryption",
    title: "Encryption & Decryption Tool",
    description:
      "Implemented encryption and decryption tool.",
    status: "Ready",
    githubLink: "https://github.com/prathambalehosurr/encryptiondecreption",
    siteLink: "https://encryptiondecreption.vercel.app/",
    imageSrc: "",
    techStack: ["javascript"],
  },
  {
    slug: "brofessor",
    title: "Brofessor Learning Platform",
    description:
      "Educational platform prototype.",
    status: "Ready",
    githubLink: "https://github.com/prathambalehosurr/brofessor",
    siteLink: "https://collagebot-neon.vercel.app/login",
    imageSrc: "",
    techStack: ["javascript"],
  },
  {
  slug: "city-explorer",
  title: "City Explorer – Location Search Application",
  description:
    "Developed a city exploration web application that allows users to search and view city information through an interactive interface. Focused on frontend design and API data handling.",
  status: "Ready",
  githubLink: "https://github.com/prathambalehosurr/City-explorer-assignment",
  siteLink: "https://cityexplorer.netlify.app",
  imageSrc: "",
  techStack: ["javascript"],
  featured: false,
},
];

export const getProjectTechStack = (
  techKeys: ProjectTechKey[],
): ProjectTechItem[] => techKeys.map((techKey) => TECH_STACK_REGISTRY[techKey]);

export const featuredProjects = projects.filter((project) => project.featured);
