import { FooterLinks } from "@/configuration/globals";

export default function Footer()
{
    return (
        <footer>
                {
                    FooterLinks.map(f => (
                            <a key={f.url} href={f.url}>{f.title}</a>
                    ))
                }
        </footer>
    )
}