import Link from 'next/link';
import 'react';
import 'react-dom';

export default function ProjectCard({ url, image, title })
{
    return (
        <li className="projectCard">
          <Link href={url} title={title}>
            <img src={image} />
            <div className='overlay'>
            <h4>{title}</h4>
            </div>
          </Link>
        </li>
    )
}