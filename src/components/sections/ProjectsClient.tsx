"use client";

import dynamic from 'next/dynamic';

// Dynamically import the heavy client-only Projects component and disable SSR
const Projects = dynamic(() => import('@/components/sections/Projects'), { ssr: false });

type Props = {
  projects: any;
};

export default function ProjectsClient({ projects }: Props) {
  return <Projects projects={projects} />;
}
