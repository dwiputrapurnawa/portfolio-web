"use client";

import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

// Type untuk data
type DataPoint = {
    month: string;
    messages: number;
};

// Data dummy jumlah messages per month
const data: DataPoint[] = [
    { month: "January", messages: 120 },
    { month: "February", messages: 95 },
    { month: "March", messages: 180 },
    { month: "April", messages: 75 },
    { month: "May", messages: 210 },
    { month: "June", messages: 160 },
];

export default function BarChartDashboard() {
    return (
        <div className="w-full h-80 p-4 bg-white rounded-2xl shadow">
            <h2 className="text-xl font-bold mb-4">Messages per Month</h2>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Bar
                        dataKey="messages"
                        fill="#00ADB5"
                        radius={[8, 8, 0, 0]} // rounded top
                    />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}
