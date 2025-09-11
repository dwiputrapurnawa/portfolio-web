"use client";

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

type DataPoint = {
    name: string;
    visitors: number;
};

const data: DataPoint[] = [
    { name: "Jan", visitors: 400 },
    { name: "Feb", visitors: 300 },
    { name: "Mar", visitors: 500 },
    { name: "Apr", visitors: 200 },
    { name: "May", visitors: 600 },
    { name: "Jun", visitors: 700 },
];

export default function LineChartDashboard() {
    return (
        <div className="w-full h-100 p-4 bg-white rounded-2xl shadow">
            <h2 className="text-xl font-bold mb-4">Visitors Trend</h2>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Line
                        type="monotone"
                        dataKey="visitors"
                        stroke="#00ADB5"
                        strokeWidth={3}
                        dot={{ r: 5 }}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}
