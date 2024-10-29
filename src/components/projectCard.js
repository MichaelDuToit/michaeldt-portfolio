import Link from 'next/link';
import 'react';
import 'react-dom';

export default function ProjectCard({ url, image, title })
{
  // TODO: using a placeholder image - swap out for actual image
    return (
        <li className="projectCard borderHoverEffectParent">
          <Link href={url} title={title}>
            <div className='overlayRoot'>
              <img src='https://images.pexels.com/photos/5483069/pexels-photo-5483069.jpeg' />
              <div className='overlayContent'>
                <h4 className='borderHoverEffect'>{title}</h4>
              </div>
            </div>
          </Link>
        </li>
    )
}