
export const APPLICATION_NAME = "Michael du Toit"
export const NETLIFY_BUILD_STATUS = "https://api.netlify.com/api/v1/badges/7da2abeb-eaa6-4f7b-bf6c-d5d6fbf2e57c/deploy-status";

export function GeneratePageTitle(page)
{
    return APPLICATION_NAME + " | " + page;
}

export const FooterLinks = [
    {
        title: "LinkedIn - Michael du Toit",
        url: "https://www.linkedin.com/in/michael-du-toit-216404107/",

    },
    {
        title: "GitHub - Michael du Toit",
        url: "https://github.com/michaeldutoit"
    },
    {
        title: "CodePen - Michaeldt",
        url: "https://codepen.io/Michaeldt/"
    }
];

export const SkillsList = [
    "C#",
    "T-SQL",
    "JavaScript",
    "ReactJS",
    "Git",
    "HTML5",
    "CSS",
    "Service Workers",
    "SCSS / SASS",
    "WinForms",
    "Azure DevOps"
]