import { FooterLinks, GenerateLinkTitle, NETLIFY_BUILD_STATUS } from "@/configuration/globals";

export default function Footer()
{
    return (
        <footer>
            <div>
                {
                    FooterLinks.map(f => (
                            <a key={f.url} href={f.url} title={f.title}>{f.title}</a>
                    ))
                }
            </div>
            <div className="buildStatus">
                <span>Build Status</span><img src={NETLIFY_BUILD_STATUS} />
            </div>
        </footer>
    )
}