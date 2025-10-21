import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <div
      className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-blue-200 group"
      data-aos="fade-up"
    >
      <div className="bg-blue-50 w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors">
        <Icon className="h-7 w-7 text-blue-600" />
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}
