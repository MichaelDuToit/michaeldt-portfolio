import Link from 'next/link';
import 'react';
import 'react-dom';

export default function ProjectCard({ url, image, title })
{
    return (
        <li className="projectCard borderHoverEffectParent">
          <Link href={url} title={title}>
            <img src={image} />
            <div className='overlayRoot'>
            <div className='overlayContent'>
              <h4 className='borderHoverEffect'>{title}</h4>
            </div>
            </div>
          </Link>
        </li>
    )
}