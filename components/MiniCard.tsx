import { Mail, BriefcaseBusiness, FileBadge, LucideIcon } from "lucide-react";

type Props = {
    label: string;
    icon: LucideIcon;
    content: string;
}

export default function MiniCard({ label, icon: Icon, content }: Props) {
    return (
        <div className="flex gap-2 hover:shadow-2xl hover:scale-105 hover:bg-gray-100 p-4 rounded-xl transition-all duration-300 ease-in-out w-full">

            <Icon color="#00ADB5" />
            <h1 className="font-bold text-sm">{label}:</h1>
            <p className="text-sm">{content}</p>
        </div>
    );
}