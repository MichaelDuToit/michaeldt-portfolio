import Link from "next/link"

export default function NavigationBar({ useLandingPageNavigationBarStyle })
{
    const useSplashAnimationCSS = useLandingPageNavigationBarStyle ? "" : "splashAnimation";

    return (
        <nav className={useSplashAnimationCSS}>
            <NavigationTitle hideTitle={useLandingPageNavigationBarStyle} />
            <ul>
                <li className='borderHoverEffectParent'><Link href="/" className="borderHoverEffect">Home</Link></li>
                <li className='borderHoverEffectParent'><Link href="/projects" className="borderHoverEffect">Projects</Link></li>
            </ul>
        </nav>
    )
}

export function NavigationTitle(props)
{
    if(props.hideTitle)
    {
        return;
    }

    return (<h2 className="navigationTitle">
                <div className="borderHoverEffectParent">
                    <Link href="/" className="borderHoverEffect">Michael du Toit</Link>
                </div>
            </h2>
    );
}