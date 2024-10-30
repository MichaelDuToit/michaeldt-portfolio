import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export const PROJECTS_PATH = path.join(process.cwd(), 'src/content/projects')
export const projectsContentPaths = fs.readdirSync(PROJECTS_PATH)
  .filter((path) => /\.mdx?$/.test(path));

export function ReadProjectFile(fileName)
{
  return fs.readFileSync(path.join(PROJECTS_PATH, fileName), 'utf-8');
}

export function getProjects()
{
  const allProjects = projectsContentPaths.map(fileName => {
    // Remove ".mdx" from file name to get name
    const page = fileName.replace(/\.md[x]/, '');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(ReadProjectFile(fileName));

    // Combine the data with the id
    return {
      page,
      slug: page,
      ...matterResult.data,
    };
  });

  return allProjects;
}

export function getProjectData(project)
{
  const fileName = projectsContentPaths.find((file) => file.endsWith(`${project}.mdx`));
  let data = {};

  if(project == null || fileName == null)
  {
    return data;
  }

  data = matter(ReadProjectFile(fileName))

  return {
    project,
    content: data.content,
    ...data.data,
  }
}