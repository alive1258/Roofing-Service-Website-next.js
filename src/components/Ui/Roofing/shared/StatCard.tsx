import { LucideIcon } from "lucide-react";

interface StatCardProps {
  icon?: LucideIcon;
  value: string;
  label: string;
  light?: boolean;
}

const StatCard = ({ icon: Icon, value, label, light = false }: StatCardProps) => {
  return (
    <div className="flex flex-col items-center gap-2 text-center">
      {Icon && (
        <div
          className={`mb-1 flex h-12 w-12 items-center justify-center rounded-full ${
            light ? "bg-white/10 text-gold-400" : "bg-brand-600/10 text-brand-600"
          }`}
        >
          <Icon size={22} />
        </div>
      )}
      <span className={`font-heading text-3xl sm:text-4xl font-bold ${light ? "text-white" : "text-brand-900"}`}>
        {value}
      </span>
      <span className={`text-sm font-medium ${light ? "text-white/60" : "text-brand-900/50"}`}>{label}</span>
    </div>
  );
};

export default StatCard;
