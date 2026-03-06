import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const MAIN_COLOR = "#00ADB5";

type Stat = {
    label: string;
    value: number;
    suffix: string;
};

// Custom hook counter animasi
function useCounter(target: number, duration = 1500) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });

    useEffect(() => {
        if (inView) {
            let start = 0;
            const increment = target / (duration / 16);
            const counter = setInterval(() => {
                start += increment;
                if (start >= target) {
                    clearInterval(counter);
                    setCount(target);
                } else {
                    setCount(Math.floor(start));
                }
            }, 16);
        }
    }, [inView, target, duration]);

    return { count, ref, inView };
}

export default function StatItem({ stat, index }: { stat: Stat; index: number }) {
    const { count, ref, inView } = useCounter(stat.value);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ scale: 1.05, boxShadow: "0px 8px 24px rgba(0,0,0,0.15)" }}
            className="p-6 rounded-2xl shadow-md cursor-pointer"
            style={{ backgroundColor: "var(--card-color)" }}
        >
            <motion.h3
                className="text-4xl font-extrabold"
                style={{ color: MAIN_COLOR }}
                animate={
                    inView
                        ? { scale: [1, 1.2, 1], transition: { delay: 1, duration: 0.6 } }
                        : {}
                }
            >
                {count}
                {stat.suffix}
            </motion.h3>

            <p className="mt-2 font-medium">
                {stat.label}
            </p>
        </motion.div>
    );
}