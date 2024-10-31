import { GeneratePageTitle } from "@/configuration/globals";
import { getProjectData, projectsContentPaths } from "@/configuration/markdown-utils"
import { MDXRemote } from "next-mdx-remote";
import {serialize} from 'next-mdx-remote/serialize';
import Head from 'next/head'

export default function Project({ content, bodyContent })
{
    return (
        <>
            <Head>
            <title>{ GeneratePageTitle(content.title) }</title>
            <meta name="description" content={`${content.description}`} />
            </Head>
            <div className="projectContent viewSection">
                <h3>{content.title}</h3>
                <MDXRemote {...bodyContent} />
            </div>
        </>
    )
}

export async function getStaticProps(source)
{
    const content = getProjectData(source.params.slug);
    const mdxSource = await serialize(content.content);    

    return {
        props: { content, bodyContent: mdxSource }
    }
}

export function getStaticPaths()
{
    const projects = projectsContentPaths.map((path) => path.replace(/\.mdx?$/, '')).map((slug) => ({ params: { slug }}));

    return {
        paths: projects,
        fallback: false
    }
}
