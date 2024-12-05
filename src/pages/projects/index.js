import Head from 'next/head'
import { getProjects } from '@/configuration/markdown-utils'
import { GeneratePageTitle } from "@/configuration/general-config";
import ProjectCard from '@/components/projectCard';
import { OrderProjects } from '@/components/helpers';

export default function Projects({ projects }) {
  return (
    <>
      <Head>
        <title>{ GeneratePageTitle("Projects") }</title>
        <meta name="description" content="Projects created by Michael du Toit" />
      </Head>
      <main>
        <ul className="projectCardContainer">
        {
            projects.sort((a, b) => OrderProjects(a, b)).map((project) => (
              <ProjectCard key={project.page}
                project={project}
              />
            ))
        }
        </ul>
      </main>
    </>
  )
}

export function getStaticProps()
{
    const projects = getProjects();

    return { props: { projects }}
}
