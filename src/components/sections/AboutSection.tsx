import { Card, CardContent } from '@/components/ui/card';

interface AboutSectionProps {
  onImageClick: (src: string) => void;
}

const AboutSection = ({ onImageClick }: AboutSectionProps) => {
  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
          Кто я такой
        </h2>
        <Card className="border-none shadow-2xl">
          <CardContent className="p-8 md:p-12">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-1 flex justify-center items-start md:sticky md:top-24 md:self-start">
                <img 
                  src="https://cdn.poehali.dev/files/20201996-d9b9-4939-9206-0d2d254c1d23.JPG" 
                  alt="Семья"
                  onClick={() => onImageClick('https://cdn.poehali.dev/files/20201996-d9b9-4939-9206-0d2d254c1d23.JPG')}
                  className="w-full rounded-2xl shadow-lg block md:hidden cursor-pointer transition-transform active:scale-95"
                />
                <img 
                  src="https://cdn.poehali.dev/files/0c0c8a6a-bf06-4b24-8e30-9905c84a5dac.jpg" 
                  alt="Семья"
                  onClick={() => onImageClick('https://cdn.poehali.dev/files/0c0c8a6a-bf06-4b24-8e30-9905c84a5dac.jpg')}
                  className="w-full rounded-2xl shadow-lg hidden md:block cursor-pointer transition-transform hover:scale-105"
                />
              </div>
              <div className="md:col-span-2">
                <h3 className="text-2xl font-bold mb-4">Меня зовут Цыбуля Алексей</h3>
                <div className="space-y-4 text-muted-foreground">
                  <p>Живу в Ижевске, женат, есть двое сыновей.</p>
                  <p>
                    <strong className="text-foreground">Образование:</strong> Маркетолог, БГТУ им. В. Г. Шухова, выпуск 2018 года.
                  </p>
                  <p>С 2013 по 2015 работал менеджером по продажам промышленного оборудования. Понял, что продажи это не мое. На этой работе понял еще одно - оказалось мне очень нравится маркетинг. В 2014 году поступил в университет, чтобы как следует изучить эту науку.</p>
                  <p>С 2018 г. по 2024 г. Работал интернет маркетологом в крупнейшем агентстве недвижимости г. Ижевска. Параллельно ведя частную практику по настройке и сопровождению контекстной рекламы.</p>
                  <p>За свою практику я работал с различными тематиками, от недвижимости и промышленного оборудования до интернет-магазинов.</p>
                  <p>Но основных направлений у меня два — это недвижимость и интернет-магазины. Недвижимость, потому что работал в агентстве и хорошо изучил маркетинг этой ниши. Интернет-магазины - потому, что накопился огромный опыт - работал с такими городами как Москва, Санкт-Петербург, Воронеж, Казань, Ижевск и другие.</p>
                  <p className="text-foreground font-semibold">
                    В данный момент работаю с 3 крупными интернет-магазинами. География: Санкт-Петербурга, Москва, Воронеж.
                  </p>
                  <p>Но со временем, все так или иначе приедается и сейчас я немного отошел от ремесленного труда рекламщика.</p>
                  <p>Вместо работы руками я решаю стратегические задачи - повышаю рентабельность инвестиций в рекламу через комплексную проработку рекламной стратегии.</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AboutSection;
