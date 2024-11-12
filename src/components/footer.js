import { FooterLinks, GenerateLinkTitle } from "@/configuration/globals";

export default function Footer()
{
    return (
        <footer>
                {
                    FooterLinks.map(f => (
                            <a key={f.url} href={f.url} title={f.title}>{f.title}</a>
                    ))
                }
        </footer>
    )
}