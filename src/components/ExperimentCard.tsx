import { motion } from "framer-motion";
import type React from "react";

type ExperimentCardProp={
    title: string,
    desc: string,
    label: string,
    icon?: React.ReactNode
}

const ExperimentCard = ({title,desc,label, icon}:ExperimentCardProp) => {
    return ( 
        <motion.div 
            layout
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                opacity: { duration: 0.3 },
            }}
        className="flex flex-col gap-4 border border-border-default
        bg-surface-elevated h-fit rounded-2xl shadow-xl hover:-translate-y-2 transition p-6">
            {icon && (
                <span className="block p-2 rounded-lg text-text-secondary">
                    {icon}
                </span>
            )}
            <h4 className="text-text-primary font-bold text-md">{title}</h4>
            <p className="text-text-secondary text-sm">{desc}</p>
            <span className="block w-fit py-1 px-2 rounded-xl border border-border-default
            bg-surface text-text-secondary text-xs shadow-gray-800 shadow-md">{label}</span>
        </motion.div>
     );
}
 
export default ExperimentCard;