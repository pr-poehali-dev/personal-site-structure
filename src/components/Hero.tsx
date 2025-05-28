import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <div className="bg-gradient-to-br from-purple-50 via-white to-indigo-50 min-h-screen pt-8">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Левая колонка - Информация */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="font-montserrat text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Алина <span className="text-purple-600">Девликамова</span>
              </h1>
              <p className="text-xl text-gray-600 font-open-sans">
                Студентка 4 курса факультета психологии и дефектологии
              </p>
              <div className="flex items-center space-x-2 text-gray-600">
                <Icon name="MapPin" size={16} />
                <span>МГПУ им. Евсеева, Саранск</span>
              </div>
            </div>

            <div className="space-y-3">
              <h2 className="font-montserrat text-lg font-semibold text-gray-800">
                Профиль обучения
              </h2>
              <p className="text-gray-600 font-open-sans">
                Психология — изучение поведения человека, психических процессов
                и методов психологической помощи
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button className="bg-purple-600 hover:bg-purple-700">
                <Icon name="Download" size={16} />
                Скачать резюме
              </Button>
              <Button
                variant="outline"
                className="border-purple-200 text-purple-600 hover:bg-purple-50"
              >
                <Icon name="Mail" size={16} />
                Связаться со мной
              </Button>
            </div>
          </div>

          {/* Правая колонка - Фото и статистика */}
          <div className="space-y-6">
            <div className="relative">
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-purple-400 to-indigo-500 rounded-2xl flex items-center justify-center shadow-xl">
                <div className="text-white text-center">
                  <Icon
                    name="User"
                    size={80}
                    className="mx-auto mb-4 opacity-80"
                  />
                  <p className="text-sm opacity-90">
                    Фото будет добавлено позже
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Card className="text-center p-4 hover:shadow-md transition-shadow">
                <CardContent className="p-0">
                  <div className="text-2xl font-bold text-purple-600">4</div>
                  <div className="text-sm text-gray-600">Курс обучения</div>
                </CardContent>
              </Card>
              <Card className="text-center p-4 hover:shadow-md transition-shadow">
                <CardContent className="p-0">
                  <div className="text-2xl font-bold text-purple-600">2024</div>
                  <div className="text-sm text-gray-600">Год выпуска</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
