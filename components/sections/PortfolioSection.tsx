import { Suspense } from 'react'
import PortfolioSkeleton from '@/components/skeletons/PortfolioSkeleton';
import PortfolioList from '@/components/PortfolioList';

export default async function PortfolioSection() {

    const projects = [
        {
            title: "ERP Kopi Banyuatis",
            description: "Sistem ERP terintegrasi untuk Kopi Banyuatis yang dirancang untuk mengelola proses bisnis utama seperti produksi, persediaan, penjualan, dan pelaporan keuangan. Aplikasi ini membantu meningkatkan efisiensi operasional, akurasi data, serta transparansi antar divisi dalam satu platform terpusat.",
            client: "Kopi Banyuatis",
            image: "/images/kopi-banyuatis.png",
        },
        {
            title: "System Operasional RPA - Sarana Ternak",
            description: "Sistem Robot Process Automation (RPA) untuk mendukung operasional sarana ternak yang mengotomatisasi proses administratif berulang seperti pengolahan data, pelaporan, dan integrasi antar sistem. Solusi ini membantu meningkatkan efisiensi kerja, mengurangi human error, serta mempercepat alur operasional harian.",
            client: "Puri Pangan Sejati",
            image: "/images/puri-pangan-sejati.png",
        },


    ];

    return (
        <section id="portfolio" className="py-20" style={{ backgroundColor: "var(--background)", color: "var(--foreground)" }}>
            <Suspense fallback={<PortfolioSkeleton />}>
                <PortfolioList projects={projects} />
            </Suspense>
        </section>
    );
}
