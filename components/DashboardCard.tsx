export default function DashboardCard({ number, label }: { number: number, label: string }) {
    return (
        <div className="flex flex-col p-10 rounded-2xl shadow-2xl justify-between text-center gap-2 hover:scale-105 transition-all duration-300 ease-in-out">
            <h1 className="text-4xl font-bold text-[var(--accent)]">{number}</h1>
            <h1 className="text-xl font-bold">{label}</h1>
        </div>
    );
}