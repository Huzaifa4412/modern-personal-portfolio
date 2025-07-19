export interface ServiceCard {
    title: string;
    description: string;
    tags: string[];
    story: string;
}

export const serviceData: ServiceCard[] = [
    {
        "title": "Web Development",
        "description": "Modern, fast & SEO-friendly websites built with React, Next.js, and TailwindCSS.",
        "tags": ["React", "Next.js", "TailwindCSS", "GSAP"],
        "story": "// Client: \"I need a fast website.\"\n// Me: \"On it!\"\ndevelopWebsite(\"fast\", \"modern\", \"responsive\");"
    },
    {
        "title": "AI Chatbots",
        "description": "Custom AI chatbots powered by OpenAI to handle customer queries 24/7.",
        "tags": ["OpenAI", "Python", "Node.js"],
        "story": "// Client: \"I want a friendly chatbot.\"\n// Me: \"Say no more!\"\ncreateChatbot(\"OpenAI\", \"friendly\", \"24/7 support\");"
    },
    {
        "title": "AI Automation",
        "description": "Automating daily tasks and business workflows using AI & Python scripts.",
        "tags": ["Python", "Automation", "APIs"],
        "story": "// Client: \"Can you automate my daily reports?\"\n// Me: \"Sure!\"\nautomateTask(\"dailyReports\");"
    },
    {
        "title": "Graphics Designing",
        "description": "Creative social media posts, banners, and branding materials.",
        "tags": ["Photoshop", "Illustrator", "Canva"],
        "story": "// Client: \"Need a modern logo.\"\n// Me: \"Designing now!\"\ndesignGraphics(\"logo\", \"modern\", \"brand-focused\");"
    },
    {
        "title": "AI Calling Agents",
        "description": "Smart AI-powered calling agents for automated customer communication.",
        "tags": ["AI", "Voice API", "Python"],
        "story": "// Client: \"Need an AI agent for calls.\"\n// Me: \"Setting it up!\"\nsetupAICallingAgent(\"customerSupport\", \"24/7 active\");"
    },
    {
        "title": "N8N Workflows",
        "description": "Build powerful automation workflows using N8N for businesses and startups.",
        "tags": ["N8N", "APIs", "Automation"],
        "story": "// Client: \"Can you integrate all my apps?\"\n// Me: \"Absolutely!\"\ncreateWorkflow(\"GoogleSheets\", \"Slack\", \"CRM\");"
    },
    {
        "title": "Python Custom Automation",
        "description": "Custom Python scripts for scraping, data processing, and repetitive task automation.",
        "tags": ["Python", "Pandas", "Scrapy"],
        "story": "// Client: \"I need data scraping automation.\"\n// Me: \"Writing a script now!\"\nscrapeData(\"ecommerceSite\", limit=5000);"
    }
]

