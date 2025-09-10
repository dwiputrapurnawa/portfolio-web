import { Suspense } from 'react'
import PortfolioSkeleton from '@/components/skeletons/PortfolioSkeleton';
import PortfolioListClient from '@/components/PortfolioListClient';
import { getProjects } from '@/components/PortfolioListServer';

export default async function PortfolioSection() {

    const projects = await getProjects();

    return (
        <section id="portfolio" className="py-20" style={{ backgroundColor: "var(--background)", color: "var(--foreground)" }}>
            <Suspense fallback={<PortfolioSkeleton />}>
                <PortfolioListClient projects={projects} />
            </Suspense>
        </section>
    );
}
