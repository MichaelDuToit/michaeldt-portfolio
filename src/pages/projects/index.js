import Head from 'next/head'
import { getProjects } from '../../configuration/mdx-utils'
import { GeneratePageTitle } from "@/configuration/globals";
import Link from 'next/link';

export default function Projects({ projects }) {
  return (
    <>
      <Head>
        <title>{ GeneratePageTitle("Projects") }</title>
        <meta name="description" content="Projects created by Michael du Toit" />
      </Head>
      <main>
        <ul>
        {
            projects.sort((a, b) => orderProjects(a, b)).map((project) => (
                <li key={project.page}>
                  <Link href={`/projects/project/${project.page}`}>
                    {project.title}
                  </Link>
                </li>
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
  let firstObjSortOrder = a.sortOrder != null ? a.sortOrder : 1000;
  let secondObjSortOrder = b.sortOrder != null ? b.sortOrder : 1000;

  // first we order by the SortOrder meta data.
  if(firstObjSortOrder < secondObjSortOrder)
  {
    return -1;
  }

  if(firstObjSortOrder > secondObjSortOrder)
  {
    return 1;
  }

  // if they have the same SortOrder, then sort alphabetically by the title
  let firstObjTitle = a.title != null ? a.title.toUpperCase() : "";
  let secondObjTitle = b.title != null ? b.title.toUpperCase() : "";

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