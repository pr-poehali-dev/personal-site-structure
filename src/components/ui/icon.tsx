import {
  Home,
  GraduationCap,
  Briefcase,
  FolderOpen,
  Contact,
  PenTool,
  Menu,
  MapPin,
  Download,
  Mail,
  User,
  ArrowRight,
  Brain,
  CircleAlert,
} from "lucide-react";

const iconMap = {
  Home,
  GraduationCap,
  Briefcase,
  FolderOpen,
  Contact,
  PenTool,
  Menu,
  MapPin,
  Download,
  Mail,
  User,
  ArrowRight,
  Brain,
  CircleAlert,
};

interface IconProps {
  name: keyof typeof iconMap;
  size?: number;
  className?: string;
  fallback?: keyof typeof iconMap;
}

const Icon = ({
  name,
  size = 24,
  className = "",
  fallback = "CircleAlert",
}: IconProps) => {
  const IconComponent = iconMap[name] || iconMap[fallback];
  return <IconComponent size={size} className={className} />;
};

export default Icon;
