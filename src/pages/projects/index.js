import Head from 'next/head'
import { getProjects } from '@/configuration/markdown-utils'
import { GeneratePageTitle } from "@/configuration/globals";
import ProjectCard from '@/components/projectCard';

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
            projects.sort((a, b) => orderProjects(a, b)).map((project) => (
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

export function orderProjects(a, b)
{
  // first we order by the SortOrder meta data.
  if(a.sortOrder < b.sortOrder)
  {
    return -1;
  }

  if(a.sortOrder > b.sortOrder)
  {
    return 1;
  }

  // if they have the same SortOrder, then sort alphabetically by the title
  let firstObjTitle = a.title.toUpperCase();
  let secondObjTitle = b.title.toUpperCase();

  if(firstObjTitle < secondObjTitle)
  {
    return -1;
  }

  if(firstObjTitle > secondObjTitle)
  {
    return 1;
  }

  return 0;
}