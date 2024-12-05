import { GeneratePageTitle } from "@/configuration/general-config";
import { getProjectData, projectsContentPaths } from "@/configuration/markdown-utils"
import { MDXRemote } from "next-mdx-remote";
import {serialize} from 'next-mdx-remote/serialize';
import Head from 'next/head'
import { useEffect, useState } from "react";
import AliceCarousel from 'react-alice-carousel';

export default function Project({ content, bodyContent })
{
    const [initialIndex, setInitialIndex] = useState(null);

    const config = {
        0: {
            items: 1,
            itemsFit: 'contain'
        }
    }

    const imgArray = content.images.map((img) => (
        <img key={img} src={`/images/${img}`} onDragStart={(e) => e.preventDefault()} className="item-inner" alt={img} />
    ));

    // using an effect to cause the carousel to be hydrated once the page is loaded.
    useEffect(() => {
        setInitialIndex(0);
    }, []);

    return (
        <>
            <Head>
            <title>{ GeneratePageTitle(content.title) }</title>
            <meta name="description" content={`${content.description}`} />
            </Head>
            <AliceCarousel 
                    activeIndex={initialIndex}
                    mouseTracking 
                    disableButtonsControls
                    autoHeight
                    items={imgArray} 
                    controlsStrategy="alternate"
                    responsive={config}
                />
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
