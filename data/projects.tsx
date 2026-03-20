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
  // {
  //   slug: "your-project",
  //   title: "Your Project",
  //   description: "What it does and why it matters.",
  //   status: "In Production",
  //   githubLink: "https://github.com/your-username/your-project",
  //   siteLink: "https://your-project.vercel.app",
  //   imageSrc: "/projects/your-project.png",
  //   techStack: ["typescript", "nextjs", "postgresql"],
  //   featured: true,
  // },
];

export const getProjectTechStack = (
  techKeys: ProjectTechKey[]
): ProjectTechItem[] => techKeys.map((techKey) => TECH_STACK_REGISTRY[techKey]);

export const featuredProjects = projects.filter((project) => project.featured);
