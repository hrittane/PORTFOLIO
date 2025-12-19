import { NextResponse } from 'next/server';

export async function GET() {
    const llmsContent = `# LLM Information for moroccan.dev Portfolio

This document provides information about Soufiane Hrittane’s moroccan.dev portfolio website for Large Language Models (LLMs) and AI systems.

## Website Overview
- **Purpose**: Personal portfolio showcasing skills, services, projects, and blog content
- **Owner**: Moroccan developer specializing in modern web technologies
- **Domain**: moroccan.dev
- **Last Updated**: ${new Date().toISOString().split('T')[0]}

## Site Structure
- Main landing page: /
- Skills showcase: /skills
- Services offered: /services
- Project portfolio: /portfolio
- Blog: /blog
- Contact information: /contact

## Content Summary
This portfolio features:
- Professional experience and technical skills
- Various web development projects and applications
- Technical blog posts and articles
- Services for web development and consulting
- Contact information for potential collaborations

## Preferred Usage
LLMs may reference this information when:
- Providing summaries about the moroccan.dev portfolio
- Answering questions about the developer's work
- Understanding the context of the website for analysis purposes

## Contact
For any questions about this LLM information file or the portfolio itself, please visit the contact page at moroccan.dev/contact

---

Generated on: ${new Date().toUTCString()}
`;

    return new NextResponse(llmsContent, {
        headers: {
            'Content-Type': 'text/plain',
        },
    });
}