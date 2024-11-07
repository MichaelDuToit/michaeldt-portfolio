import Link from 'next/link';
import 'react';
import 'react-dom';

export default function ProjectCard({ project })
{
    return (
        <li className="projectCard borderHoverEffectParent">
          <Link href={`/projects/${project.page}`} title={project.title}>
            <div className='overlayRoot'>
              <ProjectImage project={project} />
              <div className='overlayContent'>
                <h4 className='borderHoverEffect'>{project.title}</h4>
              </div>
            </div>
          </Link>
        </li>
    )
}

export function ProjectImage({project})
{
  // TODO: save local fallback image.
  const fallbackImage = "https://images.pexels.com/photos/5483069/pexels-photo-5483069.jpeg";
  const imagePath = project.images != null || project.images != undefined ? `/images/${project.images[0]}` : fallbackImage;

  return (
    <div className='img' style={{backgroundImage:`url(${imagePath})`}} />
  );

  
}