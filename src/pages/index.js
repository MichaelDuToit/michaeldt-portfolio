import Head from 'next/head';
import Link from 'next/link';
import { getProjects } from '@/configuration/markdown-utils';
import ProjectCard from '@/components/projectCard';
import { SkillsList } from '@/configuration/general-config';
import { OrderProjects } from '@/components/helpers';

Home.useLandingPageNavigationBarStyle = true;

export default function Home({ projects }) {
  return (
    <>
      <Head>
        <title>Michael du Toit</title>
        <meta name="description" content="Michael du Toit - Full Stack Software Developer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <div className="landingSplash splashAnimation">
          <h2 className='header'>Michael du Toit</h2>
          <h3>Full Stack Developer</h3>
          <div className="arrowContainer" onClick={scrollDownToNextSection}>
            <p className='downArrow'>&#10095;</p>
            <p className='downArrow'>&#10095;</p>
          </div>
        </div>
        <main>
          <section className='viewSection'>
            <h3>Hi! I&apos;m Michael!</h3>
            <p>I am a Full Stack Developer who enjoys working across all technologies and platforms. Currently located in Wellington, New Zealand.<br/>         
            </p>
          </section>
          <section className='viewSection'>
            <h3 className='center-text mb-2'>Featured Projects:</h3>
            <ul className="projectCardContainer">
            {
                projects.map((project) => (
                      <ProjectCard key={project.page}
                        url={`/projects/${project.page}`} 
                        project={project}
                        />
                ))
            }
            </ul>
            <Link href="/projects" className='center-text mt-2'>See More....</Link>
          </section>       
          <section className='viewSection'>
            <h3 className='center-text mb-1'>Skills</h3>
            <p className='center-text mb-1'>Experienced in a diverse range of technologies and skills, highlighted by hands-on practice and continuous learning</p>
            <ul className='skillsContainer'>
              {
                SkillsList.map((s) => (
                  <li key={s}>{s}</li>
                ))
              }
            </ul>
          </section>   
        </main>
      </div>
    </>
  )
}

function scrollDownToNextSection()
{
  // scroll to the bottom of the splash.
  window.scrollTo({
    top: window.innerHeight - 15,
    left: 0,
    behavior: "smooth"
  })
}

export function getStaticProps()
{
    let projects = getProjects();
    // order the projects and then limit to top 4 for the home page
    projects = projects.sort((a, b) => OrderProjects(a, b)).slice(0, 4);

    return { props: { projects }}
}