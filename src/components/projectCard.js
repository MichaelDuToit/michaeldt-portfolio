import Link from 'next/link';
import 'react';
import 'react-dom';

export default function ProjectCard({ url, image, title })
{
    return (
        <Link href={url} title={title}>
          <img src={image} />
          <h4>{title}</h4>
        </Link>
    )
}