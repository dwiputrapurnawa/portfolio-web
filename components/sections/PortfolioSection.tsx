import { Suspense } from 'react'
import PortfolioSkeleton from '@/components/skeletons/PortfolioSkeleton';
import PortfolioList from '@/components/PortfolioList';

export default async function PortfolioSection() {

    const projects = [
        {
            title: "Project 1",
            description: "Description for project 1",
            client: "Client A",
            image: "/images/dland-property.png"
        }
    ];

    return (
        <section id="portfolio" className="py-20" style={{ backgroundColor: "var(--background)", color: "var(--foreground)" }}>
            <PortfolioList projects={projects} />
        </section>
    );
}
