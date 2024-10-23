import { GeneratePageTitle } from "@/configuration/globals";
import { getProjectData, projectsContentPaths } from "@/configuration/mdx-utils"
import Head from 'next/head'

export default function Project({ content })
{
    return (
        <>
            <Head>
            <title>{ GeneratePageTitle(content.title) }</title>
            <meta name="description" content={`${content.description}`} />
            </Head>
            <div>
                <h3>{content.title}</h3>
                <article>{content.content}</article>
            </div>
        </>
    )
}

export function getStaticProps(source)
{
    const content = getProjectData(source.params.slug);
    
    return {
        props: { content }
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
