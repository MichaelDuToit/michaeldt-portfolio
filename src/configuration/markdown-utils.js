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

  return Project(project, data);
}

export function Project(key, data)
{
  // Create a schema object with default values
  let schema = {
    key: key,
    title: "",
    description: "",
    tools: [],
    sortOrder: 1000,
    images: [],
    content: ""
  }

  if(data.data.title != null)
  {
    schema.title = data.data.title;
  }

  if(data.data.description != null)
  {
    schema.description = data.data.description;
  }

  if(data.data.sortOrder != null)
  {
    schema.sortOrder = data.data.sortOrder;
  }

  if(data.data.images != null)
  {
    if(data.data.images instanceof Array)
    {
      schema.images = data.data.images.map(i => i.trim());
    }
    else
    {
      schema.images = data.data.images.split(",").map(i => i.trim());
    }
  }

  if(data.content != null)
  {
    schema.content = data.content;
  }

  return schema;
}