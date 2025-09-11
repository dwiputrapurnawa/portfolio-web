import BarChartDashboard from "@/components/BarChartDashboard";
import DashboardCard from "@/components/DashboardCard";
import LineChartDashboard from "@/components/LineChartDashboard";
import MiniCard from "@/components/MiniCard";
import { Mail, BriefcaseBusiness, FileBadge } from "lucide-react";

export default function Dashboard() {

    const data = [
        { number: 100, label: "Total Projects" },
        { number: 25, label: "Total Certificates" },
        { number: 25, label: "Total Messages" },
        { number: 25, label: "Total Visitors" },
    ]

    const new_activity = [
        { label: "New Messages", icon: Mail, content: "Lorem ipsum ..." },
        { label: "New Projects", icon: BriefcaseBusiness, content: "Project A" },
        { label: "New Certificates", icon: FileBadge, content: "Certificate A" },
    ]

    return (
        <div className='scroll-smooth p-4 flex flex-col'>

            <div className="flex gap-4 mb-4">
                {data.map((item, index) => {
                    return (
                        <DashboardCard key={index} number={item.number} label={item.label} />
                    );
                })}
            </div>

            <div className="p-6 mb-4">
                <LineChartDashboard />
            </div>

            <div className="flex gap-4">

                <div className="p-6 rounded-2xl shadow-2xl w-100">

                    <h1 className="text-xl font-bold mb-6">New Activity</h1>


                    <div className="flex flex-col gap-2">
                        {new_activity.map((activity, index) => {
                            return (
                                <MiniCard label={activity.label} icon={activity.icon} content={activity.content} key={index} />
                            );
                        })}
                    </div>




                </div>




                <BarChartDashboard />


            </div>


        </div>
    );


}