export default function PortfolioSkeleton() {
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 animate-pulse">
            {Array.from({ length: 6 }).map((_, index) => (
                <div
                    key={index}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col"
                >
                    {/* Gambar placeholder */}
                    <div className="relative w-full h-56 bg-gray-200" />

                    {/* Konten */}
                    <div className="p-6 flex flex-col justify-between flex-1">
                        <div>
                            <div className="h-6 bg-gray-200 rounded w-3/4 mb-3" />
                            <div className="h-4 bg-gray-200 rounded w-1/2 mb-4" />
                            <div className="space-y-2">
                                <div className="h-3 bg-gray-200 rounded w-full" />
                                <div className="h-3 bg-gray-200 rounded w-5/6" />
                                <div className="h-3 bg-gray-200 rounded w-4/6" />
                            </div>
                        </div>
                        {/* Tombol */}
                        <div className="h-10 bg-gray-200 rounded-xl mt-6" />
                    </div>
                </div>
            ))}
        </div>
    );
}
