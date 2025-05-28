import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const SectionCards = () => {
  const sections = [
    {
      title: "Образование",
      description:
        "Академические достижения, курсы и сертификаты в области психологии",
      icon: "GraduationCap",
      path: "/education",
      color: "from-blue-500 to-blue-600",
    },
    {
      title: "Практика и стажировки",
      description:
        "Практический опыт работы и стажировки в психологических центрах",
      icon: "Briefcase",
      path: "/practice",
      color: "from-green-500 to-green-600",
    },
    {
      title: "Портфолио проектов",
      description: "Исследовательские работы, проекты и практические кейсы",
      icon: "FolderOpen",
      path: "/portfolio",
      color: "from-purple-500 to-purple-600",
    },
    {
      title: "Контактная информация",
      description:
        "Способы связи и социальные сети для профессионального общения",
      icon: "Contact",
      path: "/contacts",
      color: "from-orange-500 to-orange-600",
    },
    {
      title: "Блог и статьи",
      description: "Публикации, размышления и материалы по психологии",
      icon: "PenTool",
      path: "/blog",
      color: "from-pink-500 to-pink-600",
    },
    {
      title: "Профессиональные навыки",
      description: "Компетенции в области психологического консультирования",
      icon: "Brain",
      path: "/skills",
      color: "from-indigo-500 to-indigo-600",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="font-montserrat text-3xl font-bold text-gray-900 mb-4">
          Разделы портфолио
        </h2>
        <p className="text-gray-600 font-open-sans max-w-2xl mx-auto">
          Познакомьтесь с моим образованием, опытом и профессиональными
          достижениями в области психологии
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sections.map((section, index) => (
          <Card
            key={section.title}
            className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md hover:-translate-y-1"
          >
            <CardHeader className="text-center pb-4">
              <div
                className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-r ${section.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <Icon
                  name={section.icon as any}
                  size={28}
                  className="text-white"
                />
              </div>
              <CardTitle className="font-montserrat text-xl text-gray-800 group-hover:text-purple-600 transition-colors">
                {section.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <CardDescription className="font-open-sans text-gray-600 leading-relaxed">
                {section.description}
              </CardDescription>
              <Button
                variant="ghost"
                className="w-full text-purple-600 hover:bg-purple-50 hover:text-purple-700 font-medium"
                onClick={() => (window.location.href = section.path)}
              >
                Подробнее
                <Icon name="ArrowRight" size={16} />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default SectionCards;
