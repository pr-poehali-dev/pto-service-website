
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";
import { useIsMobile } from "@/hooks/use-mobile";
import ServiceCard from "@/components/ServiceCard";

const Index = () => {
  const isMobile = useIsMobile();

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      {/* Шапка сайта */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Icon name="HardHat" size={28} className="text-blue-600" />
            <h1 className="text-2xl font-bold text-slate-800">ИнженерПТО</h1>
          </div>
          <nav className={`${isMobile ? "hidden" : "flex"} gap-6 items-center`}>
            <a href="#services" className="text-slate-700 hover:text-blue-600 transition-colors">Услуги</a>
            <a href="#about" className="text-slate-700 hover:text-blue-600 transition-colors">О нас</a>
            <a href="#contacts" className="text-slate-700 hover:text-blue-600 transition-colors">Контакты</a>
            <Button>Заказать консультацию</Button>
          </nav>
          {isMobile && (
            <Button variant="ghost" size="icon">
              <Icon name="Menu" size={24} />
            </Button>
          )}
        </div>
      </header>

      {/* Главный раздел */}
      <main className="flex-1">
        {/* Баннер */}
        <section className="bg-blue-600 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-bold mb-4">Профессиональные услуги инженера ПТО</h2>
              <p className="text-xl mb-8">Качественная подготовка проектно-сметной документации, контроль соответствия строительных работ и техническое сопровождение проектов</p>
              <Button variant="outline" className="bg-white text-blue-600 hover:bg-blue-50">
                Узнать подробнее
              </Button>
            </div>
          </div>
        </section>

        {/* Услуги */}
        <section id="services" className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center text-slate-800">Наши услуги</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ServiceCard 
                icon="FileText" 
                title="Подготовка документации" 
                description="Разработка и проверка проектно-сметной документации в соответствии с нормативами"
              />
              <ServiceCard 
                icon="ClipboardCheck" 
                title="Технический надзор" 
                description="Контроль качества и соответствия строительных работ проектной документации"
              />
              <ServiceCard 
                icon="PenTool" 
                title="Проектирование" 
                description="Создание технических планов и чертежей для строительных объектов"
              />
            </div>
          </div>
        </section>

        {/* О нас */}
        <section id="about" className="py-16 bg-slate-100">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center text-slate-800">О нас</h2>
              <Card>
                <CardHeader>
                  <CardTitle>Опыт и профессионализм</CardTitle>
                  <CardDescription>Более 10 лет в строительной индустрии</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    Наша команда профессиональных инженеров ПТО имеет обширный опыт работы с различными типами строительных проектов. 
                    Мы специализируемся на комплексном сопровождении строительства от этапа подготовки документации до сдачи объекта.
                  </p>
                  <p>
                    Наши специалисты постоянно совершенствуют свои навыки, следят за изменениями в строительных нормах и правилах, 
                    что позволяет обеспечивать высокое качество услуг и соответствие всем современным требованиям.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Контакты */}
        <section id="contacts" className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center text-slate-800">Свяжитесь с нами</h2>
            <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-sm">
              <div className="grid gap-6">
                <div className="flex items-center gap-4">
                  <Icon name="MapPin" className="text-blue-600" size={24} />
                  <div>
                    <h3 className="text-lg font-semibold">Адрес</h3>
                    <p className="text-slate-600">г. Москва, ул. Строителей, д. 10, офис 505</p>
                  </div>
                </div>
                <Separator />
                <div className="flex items-center gap-4">
                  <Icon name="Phone" className="text-blue-600" size={24} />
                  <div>
                    <h3 className="text-lg font-semibold">Телефон</h3>
                    <p className="text-slate-600">+7 (495) 123-45-67</p>
                  </div>
                </div>
                <Separator />
                <div className="flex items-center gap-4">
                  <Icon name="Mail" className="text-blue-600" size={24} />
                  <div>
                    <h3 className="text-lg font-semibold">Email</h3>
                    <p className="text-slate-600">info@инженерпто.рф</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Подвал */}
      <footer className="bg-slate-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <div className="flex items-center gap-2">
                <Icon name="HardHat" size={24} className="text-blue-400" />
                <span className="text-xl font-bold">ИнженерПТО</span>
              </div>
              <p className="text-slate-400 mt-2">© 2025 Все права защищены</p>
            </div>
            <div className="flex gap-6">
              <a href="#" className="text-white hover:text-blue-400 transition-colors">
                <Icon name="Facebook" size={20} />
              </a>
              <a href="#" className="text-white hover:text-blue-400 transition-colors">
                <Icon name="Instagram" size={20} />
              </a>
              <a href="#" className="text-white hover:text-blue-400 transition-colors">
                <Icon name="Mail" size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
