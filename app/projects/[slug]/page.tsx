// import { notFound } from "next/navigation";
// import Image from "next/image";
// import { projects } from "@/data/projects";

// type Props = {
//     params: { slug: string };
// };

// export default function ProjectDetail({ params }: Props) {
//     const project = projects.find((p) => p.slug === params.slug);

//     if (!project) return notFound();

//     return (
//         <div className="max-w-6xl mx-auto px-6 py-20">
//             {/* Hero Section */}
//             <div className="mb-12">
//                 <h1 className="text-4xl font-bold mb-2">{project.title}</h1>
//                 <p className="text-gray-500">Client: {project.client}</p>
//             </div>

//             <div className="relative w-full h-96 mb-12">
//                 <Image
//                     src={project.image}
//                     alt={project.title}
//                     fill
//                     className="object-cover rounded-2xl shadow-lg"
//                 />
//             </div>

//             {/* Deskripsi Singkat */}
//             <p className="text-lg text-gray-700 mb-10">{project.description}</p>

//             {/* Tentang Project */}
//             <div className="mb-12">
//                 <h2 className="text-2xl font-semibold mb-4">Tentang Project</h2>
//                 <p className="text-gray-700 whitespace-pre-line">{project.details}</p>
//             </div>

//             {/* Fitur Utama */}
//             {project.features && (
//                 <div className="mb-12">
//                     <h2 className="text-2xl font-semibold mb-4">Fitur Utama</h2>
//                     <ul className="list-disc list-inside text-gray-700 space-y-2">
//                         {project.features.map((feature, i) => (
//                             <li key={i}>{feature}</li>
//                         ))}
//                     </ul>
//                 </div>
//             )}

//             {/* Teknologi */}
//             {project.tech && (
//                 <div className="mb-12">
//                     <h2 className="text-2xl font-semibold mb-4">Teknologi</h2>
//                     <div className="flex flex-wrap gap-3">
//                         {project.tech.map((t, i) => (
//                             <span
//                                 key={i}
//                                 className="px-4 py-2 bg-gray-100 rounded-lg text-gray-800 shadow-sm"
//                             >
//                                 {t}
//                             </span>
//                         ))}
//                     </div>
//                 </div>
//             )}

//             {/* Galeri Screenshot */}
//             {project.gallery && (
//                 <div className="mb-12">
//                     <h2 className="text-2xl font-semibold mb-4">Screenshot</h2>
//                     <div className="grid md:grid-cols-2 gap-6">
//                         {project.gallery.map((img, i) => (
//                             <div key={i} className="relative w-full h-64">
//                                 <Image
//                                     src={img}
//                                     alt={`Screenshot ${i + 1}`}
//                                     fill
//                                     className="object-cover rounded-lg shadow"
//                                 />
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             )}

//             {/* Back Button */}
//             <div className="mt-10">
//                 <a
//                     href="/#portfolio"
//                     className="px-5 py-3 rounded-xl bg-gray-800 text-white hover:bg-gray-700 transition"
//                 >
//                     ← Kembali ke Portfolio
//                 </a>
//             </div>
//         </div>
//     );
// }
