import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Navigation = () => {
  const navItems = [
    { name: "Главная", path: "/", icon: "Home" },
    { name: "Образование", path: "/education", icon: "GraduationCap" },
    { name: "Практика", path: "/practice", icon: "Briefcase" },
    { name: "Портфолио", path: "/portfolio", icon: "FolderOpen" },
    { name: "Контакты", path: "/contacts", icon: "Contact" },
    { name: "Блог", path: "/blog", icon: "PenTool" },
  ];

  return (
    <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">АД</span>
            </div>
            <span className="font-montserrat font-semibold text-gray-800">
              Алина Девликамова
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Button
                key={item.name}
                variant="ghost"
                className="text-gray-600 hover:text-purple-600 hover:bg-purple-50 transition-colors duration-200"
                onClick={() => (window.location.href = item.path)}
              >
                <Icon name={item.icon as any} size={16} />
                {item.name}
              </Button>
            ))}
          </div>

          <Button variant="ghost" size="icon" className="md:hidden">
            <Icon name="Menu" size={20} />
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
