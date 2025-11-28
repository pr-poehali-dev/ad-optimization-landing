import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [modalImageSrc, setModalImageSrc] = useState('');
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);

  useEffect(() => {
    if (isFormModalOpen || isImageModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isFormModalOpen, isImageModalOpen]);

  const openImageModal = (src: string) => {
    setModalImageSrc(src);
    setIsImageModalOpen(true);
  };

  const closeImageModal = () => {
    setIsImageModalOpen(false);
    setModalImageSrc('');
  };

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    website: '',
    budget: '',
    comment: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Свяжемся с вами в течение 8 рабочих часов.",
    });
    setFormData({ name: '', phone: '', website: '', budget: '', comment: '' });
    setIsFormModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-muted/30">
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-white py-20 px-4 md:py-32">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-12 animate-fade-in">
            <div className="mb-8">
              <Badge className="text-base md:text-xl px-6 py-3 bg-accent text-accent-foreground hover:bg-accent/90 inline-block">
                <span className="block md:inline text-center">Руководство для владельцев</span>
                <span className="block md:inline md:ml-2 text-center">интернет-магазинов</span>
              </Badge>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white via-accent/20 to-white bg-clip-text text-transparent">
                3 способа увеличить
              </span>
              <br />
              <span className="text-white">количество заказов </span>
              <span className="text-accent text-5xl md:text-7xl lg:text-8xl">х5-х10</span>
              <br />
              <span className="bg-gradient-to-r from-white via-accent/20 to-white bg-clip-text text-transparent">
                с контекстной рекламы
              </span>
            </h1>
            <p className="text-lg md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto font-light">
              без увеличения рекламного бюджета
            </p>
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-xl px-12 py-7 rounded-2xl shadow-2xl hover:shadow-accent/50 hover:scale-105 transition-all duration-300 animate-pulse-slow hover:animate-none"
              onClick={() => document.getElementById('target-section')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Читать
              <Icon name="ArrowRight" className="ml-2" size={24} />
            </Button>
          </div>
        </div>
      </section>

      <section id="target-section" className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
            Для кого этот материал
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2 hover:border-accent transition-all duration-300 hover:shadow-xl">
              <CardContent className="p-8">
                <div className="mb-4">
                  <div className="flex items-start mb-4">
                    <div className="bg-accent/10 p-3 rounded-lg mr-4 flex-shrink-0">
                      <Icon name="Store" size={32} className="text-accent" />
                    </div>
                    <h3 className="text-xl font-semibold">Вы владелец интернет-магазина</h3>
                  </div>
                  <p className="text-muted-foreground">
                    У вас уже есть продажи на сайте от СЕО и прямого трафика. Вы хотите получить дополнительные продажи привлекая рекламный трафик. Не имеет значения, что именно вы продаете. Основные нюансы при работе с рекламой для ИМ одинаковы.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-accent transition-all duration-300 hover:shadow-xl">
              <CardContent className="p-8">
                <div className="mb-4">
                  <div className="flex items-start mb-4">
                    <div className="bg-yellow-400/10 p-3 rounded-lg mr-4 flex-shrink-0">
                      <img 
                        src="https://cdn.poehali.dev/files/24086abc-2f42-4216-9eb2-a089f0ddcf6b.jpg" 
                        alt="Яндекс Директ" 
                        className="w-8 h-8 rounded-full"
                      />
                    </div>
                    <h3 className="text-xl font-semibold">Вы рекламируетесь <br className="hidden md:block" />в Яндекс Директ</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Это может быть любая реклама: поиск, товарная галерея, РСЯ. Рекламный бюджет от 50000 рублей в месяц с НДС.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-accent transition-all duration-300 hover:shadow-xl md:col-span-2 md:max-w-2xl md:mx-auto md:order-2">
              <CardContent className="p-8">
                <div className="mb-4">
                  <div className="flex items-start mb-4">
                    <div className="bg-accent/10 p-3 rounded-lg mr-4 flex-shrink-0">
                      <Icon name="TrendingDown" size={32} className="text-destructive" />
                    </div>
                    <h3 className="text-xl font-semibold">Вас не устраивают результаты</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Реклама не окупается. Мало заказов с рекламы, они дорогие. Увеличение бюджета не приводит к росту количества заказов.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

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
                    onClick={() => openImageModal('https://cdn.poehali.dev/files/20201996-d9b9-4939-9206-0d2d254c1d23.JPG')}
                    className="w-full rounded-2xl shadow-lg block md:hidden cursor-pointer transition-transform active:scale-95"
                  />
                  <img 
                    src="https://cdn.poehali.dev/files/0c0c8a6a-bf06-4b24-8e30-9905c84a5dac.jpg" 
                    alt="Семья"
                    onClick={() => openImageModal('https://cdn.poehali.dev/files/0c0c8a6a-bf06-4b24-8e30-9905c84a5dac.jpg')}
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

      <section className="py-16 px-4 bg-primary text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
            Каких результатов позволяет достичь мой подход
          </h2>
          <div className="text-center mb-8">
            <p className="text-white/90 text-lg mb-2">
              С 2020 года сотрудничаю с ИП Таболкин Алексей Станиславович г. Санкт-Петербург.
            </p>
            <p className="text-white/90 text-lg">
              Рекламные показатели за последние 365 дней:
            </p>
          </div>

          <div className="mb-8 max-w-5xl mx-auto">
            <Card className="border-none shadow-2xl overflow-hidden">
              <CardContent className="p-0">
                <img 
                  src="https://cdn.poehali.dev/files/3145a0e7-25b9-47b2-b4d1-1603a9419306.png" 
                  alt="Статистика рекламных кампаний в Яндекс.Директ"
                  className="w-full h-auto"
                />
              </CardContent>
            </Card>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="bg-white/10 border-white/20 text-white hover:bg-white/15 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-accent mb-2">95</div>
                <div className="text-white/80">Оформлено заказов</div>
              </CardContent>
            </Card>
            <Card className="bg-white/10 border-white/20 text-white hover:bg-white/15 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-accent mb-2">0.64%</div>
                <div className="text-white/80">Конверсия в заказ</div>
              </CardContent>
            </Card>
            <Card className="bg-white/10 border-white/20 text-white hover:bg-white/15 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-accent mb-2">4 113 ₽</div>
                <div className="text-white/80">Стоимость заказа</div>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-white/10 border-white/20 text-white">
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-white/80">Рекламный бюджет (без НДС)</span>
                  <span className="text-2xl font-bold">390 776 ₽</span>
                </div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-white/80">Средний чек</span>
                  <span className="text-2xl font-bold">52 458 ₽</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/80">ДРР</span>
                  <span className="text-2xl font-bold text-accent">7.84%</span>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-accent/90 to-accent border-accent text-accent-foreground">
              <CardContent className="p-6 flex flex-col justify-center">
                <div className="text-center">
                  <div className="text-5xl font-bold mb-2">4 983 561 ₽</div>
                  <div className="text-lg opacity-90 mb-4">Прибыль</div>
                  <div className="text-3xl font-bold">ROMI: 1175%</div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="flex justify-center mt-12">
            <Button 
              size="lg"
              className="bg-white hover:bg-white/90 text-primary font-semibold px-10 py-7 rounded-xl shadow-xl hover:scale-105 transition-all duration-300 text-lg"
              onClick={() => setIsFormModalOpen(true)}
            >
              Получить такой же ROMI 1175%
              <Icon name="Rocket" className="ml-2" size={22} />
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-muted/50">
        <div className="max-w-4xl mx-auto">
          <Card className="border-2 border-accent/20 shadow-xl">
            <CardContent className="p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 text-primary">
                Отзыв клиента
              </h2>
              <p className="text-center text-muted-foreground mb-8 text-lg">
                На скрине ниже благодарность от ИП Таболкина.
              </p>
              <div className="flex justify-center">
                <img 
                  src="https://cdn.poehali.dev/files/2c1908eb-96fc-48e9-8655-6560dd05b26f.png"
                  alt="Благодарственное письмо от ИП Таболкина Алексея Станиславовича"
                  onClick={() => openImageModal('https://cdn.poehali.dev/files/2c1908eb-96fc-48e9-8655-6560dd05b26f.png')}
                  className="w-full max-w-2xl rounded-lg shadow-lg cursor-pointer transition-transform hover:scale-105"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-primary">
            Критическая ошибка, которая лишает ваш интернет-магазин продаж
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg max-w-3xl mx-auto">
            Большинство игнорирует это условие, вместо этого бесконечно меняет подрядчиков по рекламе. 
            Хотя достаточно потратить пару вечеров и посетители начнут охотнее оставлять заявки.
          </p>

          <div className="space-y-8">
            <Card className="border-2 border-destructive/20 hover:border-destructive/50 transition-all duration-300 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start mb-6">
                  <div className="bg-destructive/10 p-4 rounded-xl mr-6">
                    <Icon name="AlertTriangle" size={40} className="text-destructive" />
                  </div>
                  <div className="flex-1">
                    <Badge className="mb-3 bg-destructive text-white">Ошибка #1</Badge>
                    <h3 className="text-2xl font-bold mb-2">Отсутствие релевантности</h3>
                    <p className="text-muted-foreground mb-4">
                      Посетители ищут конкретный товар, а попадают на главную страницу или в карточку другого товара.
                    </p>
                  </div>
                </div>

                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Когда человек ищет какой-то товар в поиске, ему должно показываться объявление, того товара, что он ищет.
                  </p>
                  <p>
                    При переходе по этому объявлению на сайт, посетитель должен попасть в карточку именно того товара, который он ищет.
                  </p>
                  <p className="font-semibold text-foreground">
                    Что происходит в действительности? Давайте посмотрим.
                  </p>
                  <p>
                    Возьмем для примера запрос из ниши комплектующих для ЧПУ станков: <strong>«Драйвер шагового серво-двигателя HBS57H»</strong>.
                  </p>

                  <div className="space-y-6">
                    <div className="bg-muted/50 p-4 rounded-lg border-l-4 border-destructive">
                      <h4 className="font-bold text-destructive mb-2">№1 - Плохой пример</h4>
                      <p className="text-sm mb-4">
                        Первый рекламодатель соблюдает релевантность лишь отчасти. В заголовке объявления говорится о драйвере для сервоприводов. 
                        В описании же объявления говорится об отличной от искомой модели драйвера.
                      </p>
                      <img 
                        src="https://cdn.poehali.dev/files/2e70d577-90b6-4918-86c9-cbcb48826207.png" 
                        alt="Пример нерелевантного объявления в Яндексе"
                        className="w-full h-auto rounded-lg shadow-md mb-4"
                      />
                      <p className="text-sm mb-4">
                        Переходя по ссылке, посетитель попадает в карточку не того товара, который он искал.
                      </p>
                      <img 
                        src="https://cdn.poehali.dev/files/f0ab5b66-cadc-4087-a99c-5d206f67e10c.png" 
                        alt="Карточка неправильного товара после перехода"
                        className="w-full h-auto rounded-lg shadow-md"
                      />
                    </div>

                    <div className="bg-muted/50 p-4 rounded-lg border-l-4 border-destructive">
                      <h4 className="font-bold text-destructive mb-2">№2 - Еще хуже</h4>
                      <p className="text-sm mb-4">
                        В объявлении другого рекламодателя вовсе не говорится о драйверах для серводвигателей. 
                        Вместо этого текст в общем о «Комплектующих для станков с ЧПУ!»
                      </p>
                      <img 
                        src="https://cdn.poehali.dev/files/13ba27dd-68f3-4435-8809-708fb70bff68.png" 
                        alt="Совершенно нерелевантное объявление"
                        className="w-full h-auto rounded-lg shadow-md mb-4"
                      />
                      <p className="text-sm mb-4">
                        Переходя по ссылке, посетители попадают на главную страницу сайта.
                      </p>
                      <img 
                        src="https://cdn.poehali.dev/files/1503d4f9-cc66-44b8-9f3b-fef029a0f991.png" 
                        alt="Главная страница вместо карточки товара"
                        className="w-full h-auto rounded-lg shadow-md mb-4"
                      />
                      <p className="text-sm font-semibold text-destructive">
                        Грустно смотреть на такую рекламу. Ни на одном шаге нет релевантности.
                      </p>
                    </div>

                    <div className="bg-accent/10 p-4 rounded-lg border-l-4 border-accent">
                      <h4 className="font-bold text-accent mb-2">№3 - Правильный пример ✅</h4>
                      <p className="text-sm mb-4">
                        Единственный рекламодатель, соблюдающий условие на каждом шаге.
                      </p>
                      <p className="text-sm font-semibold mb-4">
                        Заголовок полностью повторяет запрос.
                      </p>
                      <img 
                        src="https://cdn.poehali.dev/files/bdcf6f88-89ce-4936-93ac-546036391c5c.png" 
                        alt="Правильное релевантное объявление"
                        className="w-full h-auto rounded-lg shadow-md mb-4"
                      />
                      <p className="text-sm font-semibold text-accent mb-4">
                        Ссылка в объявлении ведет в карточку искомого товара.
                      </p>
                      <img 
                        src="https://cdn.poehali.dev/files/e641f80b-e713-4b82-acfa-486cd14efc06.png" 
                        alt="Правильная карточка нужного товара"
                        className="w-full h-auto rounded-lg shadow-md"
                      />
                    </div>
                  </div>

                  <div className="mt-6 p-6 bg-primary/5 rounded-lg border-2 border-primary/20">
                    <p className="text-lg font-semibold text-primary text-center mb-4">
                      Из трех объявлений только одно соблюдает условие релевантности. А у вас все в порядке с этим?
                    </p>
                    <div className="flex justify-center">
                      <Button 
                        size="lg"
                        className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-6 rounded-xl shadow-lg hover:scale-105 transition-all duration-300"
                        onClick={() => setIsFormModalOpen(true)}
                      >
                        Проверить мою рекламу
                        <Icon name="ArrowRight" className="ml-2" size={20} />
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>


          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-accent/5">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-primary">
            Что нужно делать, чтобы избежать этой ошибки?
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg max-w-3xl mx-auto">
            Во-первых, проверить какие объявления и по каким поисковым запросам показываются у вас. Зайдите в рекламный кабинет и проанализируйте каждую группу.
          </p>

          <div className="space-y-8">
            <Card className="border-2 border-accent/20 hover:border-accent/50 transition-all duration-300 shadow-lg">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <img 
                    src="https://cdn.poehali.dev/files/797a5c1c-c148-4537-b9f8-c32a42209a48.png"
                    alt="Статистика рекламной кампании в Яндекс Директ"
                    onClick={() => openImageModal('https://cdn.poehali.dev/files/797a5c1c-c148-4537-b9f8-c32a42209a48.png')}
                    className="w-full rounded-lg shadow-md cursor-pointer transition-transform hover:scale-105"
                  />
                  <img 
                    src="https://cdn.poehali.dev/files/0a19f3ae-a12b-440a-859d-5faea94e1f20.png"
                    alt="Мастер отчетов - Поисковые запросы"
                    onClick={() => openImageModal('https://cdn.poehali.dev/files/0a19f3ae-a12b-440a-859d-5faea94e1f20.png')}
                    className="w-full rounded-lg shadow-md cursor-pointer transition-transform hover:scale-105"
                  />
                </div>

                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Наверняка у вас на сайте несколько категорий товаров, а возможно десятки категорий. В каждой категории множество товаров. По итогу в интернет-магазине могут быть тысячи товаров.
                  </p>

                  <p>
                    Если в вашем интернет-магазине сотни или тысячи товаров, то собирать ключи, делать объявления под каждый товар невыполнимая задача.
                  </p>

                  <p>
                    Я советую делать проще – создать рекламную кампанию по товарному фиду с вашего сайта. В фид выгружается вся необходимая информация о каждом товаре: урл, изображение, цена, название, описание, производитель, характеристики, опции. Директ сформирует объявление под каждый товар. В каждом таком объявлении будет заголовок в точности соответствовать товару, ссылка будет вести в карточку именно этого товара. Автотаргетинг точно подбирает поисковые запросы под каждый товар. В итоге получается максимально точная связка: запрос – объявление – карточка товара.
                  </p>

                  <p className="font-semibold text-foreground">
                    На скрине ниже пример такой связки. Отчет из «мастера отчетов» директ. Первая колонка запрос, который вводили пользователи, вторая колонка заголовок показанного объявления, третья колонка ссылка на карточку товара в объявлении.
                  </p>

                  <img 
                    src="https://cdn.poehali.dev/files/a4a22e8e-a48c-4146-91ec-55ad4a98014b.png"
                    alt="Мастер отчетов. Запросы - связка запрос-объявление-товар"
                    onClick={() => openImageModal('https://cdn.poehali.dev/files/a4a22e8e-a48c-4146-91ec-55ad4a98014b.png')}
                    className="w-full rounded-lg shadow-md cursor-pointer transition-transform hover:scale-105"
                  />
                </div>

                <div className="mt-6 p-6 bg-accent/10 rounded-lg border-2 border-accent/20">
                  <p className="text-lg font-semibold text-primary text-center mb-4">
                    Проработайте этот момент, и посетители будут дольше задерживаться на вашем сайте, а число заказов возрастет, ведь вы будете предлагать именно то, что они ищут, а это напрямую влияет на количество денег в кассе.
                  </p>
                  <div className="flex justify-center">
                    <Button 
                      size="lg"
                      className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-6 rounded-xl shadow-lg hover:scale-105 transition-all duration-300"
                      onClick={() => setIsFormModalOpen(true)}
                    >
                      Получить аудит моей рекламы
                      <Icon name="ArrowRight" className="ml-2" size={20} />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-primary">
            Релевантность в деле
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg max-w-3xl mx-auto">
            Вот как отражается на статистике тот самый комплексный подход, где под каждый запрос пользователя автоматически формируется объявление, с релевантным заголовком, описанием, изображением, ссылкой.
          </p>

          <div className="space-y-8">
            <Card className="border-2 border-primary/20 hover:border-primary/50 transition-all duration-300 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start mb-6">
                  <div className="bg-primary/10 p-4 rounded-xl mr-6">
                    <Icon name="TrendingUp" size={40} className="text-primary" />
                  </div>
                  <div className="flex-1">
                    <Badge className="mb-3 bg-primary text-white">Результат</Badge>
                    <h3 className="text-2xl font-bold mb-2">Рост % конверсии на 900%</h3>

                  </div>
                </div>

                <div className="space-y-4 text-muted-foreground">
                  <p className="text-lg">
                    В первые два года работы над интернет-магазином удалось вырастить конверсию рекламного трафика <span className="font-bold text-primary">с 0.1% до 1%</span>.
                  </p>
                </div>

                <div className="mt-8 mb-8">
                  <img 
                    src="https://cdn.poehali.dev/files/57fba617-4b09-443b-ac2a-7eafc7346db5.png"
                    alt="График роста конверсии в Яндекс Метрике"
                    onClick={() => openImageModal('https://cdn.poehali.dev/files/57fba617-4b09-443b-ac2a-7eafc7346db5.png')}
                    className="w-full rounded-lg shadow-md cursor-pointer transition-transform hover:scale-105"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-6 bg-destructive/5 rounded-lg border-2 border-destructive/20">
                    <div className="text-center">
                      <p className="text-sm text-muted-foreground mb-2">Было</p>
                      <p className="text-5xl font-bold text-destructive">0.1%</p>
                      <p className="text-sm text-muted-foreground mt-2">конверсия</p>
                    </div>
                  </div>
                  <div className="p-6 bg-primary/5 rounded-lg border-2 border-primary/20">
                    <div className="text-center">
                      <p className="text-sm text-muted-foreground mb-2">Стало</p>
                      <p className="text-5xl font-bold text-primary">1%</p>
                      <p className="text-sm text-muted-foreground mt-2">конверсия</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex justify-center">
                  <Button 
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-white font-semibold px-10 py-7 rounded-xl shadow-xl hover:scale-105 transition-all duration-300 text-lg"
                    onClick={() => setIsFormModalOpen(true)}
                  >
                    Хочу такой же рост конверсии
                    <Icon name="TrendingUp" className="ml-2" size={22} />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-primary">
            Последний вопрос...
          </h2>
          <div className="text-center mb-12">
            <p className="text-xl text-muted-foreground mb-4">
              Вы тоже устали вести на сайт сотни людей, зная, что большинство из них никогда не оформит заказ?
            </p>
            <p className="text-2xl font-semibold text-primary mb-6">
              Какая сейчас у вас конверсия? 0.1% или еще ниже?
            </p>
            <p className="text-xl text-muted-foreground mb-4">
              Хотите, чтобы я бесплатно помог вам разработать план привлечения клиентов, который будет работать в 5-10 раз эффективнее, по сравнению с текущей ситуацией?
            </p>
          </div>

          <Card className="border-2 border-accent shadow-2xl">
            <CardContent className="p-8 md:p-12">
              <h3 className="text-2xl font-bold mb-6 text-center">
                Что даст вам внедрение моих методов?
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { icon: 'Calendar', text: 'Возможность вести бизнес без необходимости бросать семью и жить на работе' },
                  { icon: 'TrendingUp', text: 'Регулярное поступление денег в кассу без увеличения рекламного бюджета' },
                  { icon: 'Target', text: 'Управляемый и предсказуемый доход' },
                  { icon: 'ShieldCheck', text: 'Избавление от зависимости от маркетплейсов, которые демпингуют' },
                  { icon: 'UserX', text: 'Перестанете зависеть от фрилансеров, которым платили, но не получали результата' },
                  { icon: 'Zap', text: 'Стабильный поток заказов с контекстной рекламы' }
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-accent/10 p-2 rounded-lg mr-3 flex-shrink-0">
                      <Icon name={item.icon as any} size={24} className="text-accent" />
                    </div>
                    <p className="text-muted-foreground">{item.text}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <p className="text-lg text-muted-foreground text-center mt-8 mb-8">
            Последние пять лет я оттачивал методы продвижения интернет-магазинов и готов помочь применить их в вашем проекте абсолютно бесплатно.
          </p>

          <div className="flex justify-center">
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white font-semibold px-12 py-6 rounded-xl shadow-xl hover:scale-105 transition-all duration-300 text-lg"
              onClick={() => setIsFormModalOpen(true)}
            >
              Получить бесплатную консультацию
              <Icon name="ArrowRight" className="ml-2" size={24} />
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gradient-to-b from-white to-muted/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-primary">
            Почему я делаю это бесплатно?
          </h2>
          
          <div className="space-y-6 text-lg text-muted-foreground mb-12">
            <p className="text-center">
              Я знаю, что определённый процент людей, для которых я это сделаю, захотят продолжить сотрудничество.
            </p>
            <p className="text-center">
              Вместо попыток убедить вас, как прекрасно со мной работать, я обнаружил, что гораздо эффективнее показать свою способность оказать реальную помощь.
            </p>
          </div>

          <Card className="border-2 border-primary/20 shadow-lg mb-8 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-center text-primary">
                Вот как мы это сделаем
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-lg mr-4 flex-shrink-0">
                    <Icon name="Search" size={24} className="text-primary" />
                  </div>
                  <p className="text-muted-foreground pt-2">
                    Я выделю время, чтобы изучить именно ваши навыки, идеи и опыт.
                  </p>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-lg mr-4 flex-shrink-0">
                    <Icon name="Target" size={24} className="text-primary" />
                  </div>
                  <p className="text-muted-foreground pt-2">
                    Затем мы вместе определим ваши цели, необходимые рекламные инструменты.
                  </p>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-lg mr-4 flex-shrink-0">
                    <Icon name="FileText" size={24} className="text-primary" />
                  </div>
                  <p className="text-muted-foreground pt-2">
                    Исходя из того, что вы расскажете, я бесплатно разработаю схему именно под вашу ситуацию.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="text-center mb-8">
            <p className="text-xl font-semibold text-primary mb-6">
              После этого произойдет одна из двух вещей:
            </p>
          </div>

          <div className="space-y-6 max-w-2xl mx-auto">
            <Card className="border-2 border-accent/30 hover:border-accent transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-accent/10 p-2 rounded-lg mr-3">
                    <Icon name="ThumbsUp" size={28} className="text-accent" />
                  </div>
                  <h4 className="text-xl font-bold">Первая</h4>
                </div>
                <p className="text-muted-foreground">
                  Вам понравится план, но вы решите внедрять его самостоятельно. Отлично, буду рад отзыву.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/30 hover:border-primary transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-primary/10 p-2 rounded-lg mr-3">
                    <Icon name="Handshake" size={28} className="text-primary" />
                  </div>
                  <h4 className="text-xl font-bold">Вторая</h4>
                </div>
                <p className="text-muted-foreground mb-6">
                  Вы захотите, чтобы я поработал с вами лично. Это возможно в двух форматах работы:
                </p>

                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div className="border-2 border-accent/20 rounded-lg p-6 hover:border-accent transition-all duration-300">
                    <Badge className="mb-4 bg-primary text-white">Доступно 2 места</Badge>
                    <h3 className="text-xl font-bold mb-4">Пакет консультаций</h3>
                    <div className="mb-6">
                      <div className="text-3xl font-bold text-accent mb-2">3 × 5 900 ₽</div>
                      <p className="text-muted-foreground text-sm">Работаем месяц (обычно 3 недели)</p>
                    </div>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <Icon name="CheckCircle" size={18} className="text-accent mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Доработка оффера, УТП и структуры сайта</span>
                      </li>
                      <li className="flex items-start">
                        <Icon name="CheckCircle" size={18} className="text-accent mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Стратегическая разведка конкурентов</span>
                      </li>
                      <li className="flex items-start">
                        <Icon name="CheckCircle" size={18} className="text-accent mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Чек-листы по проверке каждого элемента</span>
                      </li>
                      <li className="flex items-start">
                        <Icon name="CheckCircle" size={18} className="text-accent mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Помощь с техническими моментами</span>
                      </li>
                    </ul>
                  </div>

                  <div className="border-2 border-accent rounded-lg p-6 hover:shadow-lg transition-all duration-300 relative overflow-hidden">
                    <div className="absolute top-0 right-0 bg-accent text-accent-foreground px-3 py-1 text-xs font-semibold">
                      Популярное
                    </div>
                    <Badge className="mb-4 bg-accent text-accent-foreground">Доступно 1 место</Badge>
                    <h3 className="text-xl font-bold mb-4">Все под ключ</h3>
                    <div className="mb-6">
                      <div className="text-3xl font-bold text-accent mb-2">от 45 000 ₽</div>
                      <p className="text-muted-foreground text-sm">Срок до 90 дней, возможна рассрочка</p>
                    </div>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <Icon name="CheckCircle" size={18} className="text-accent mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Я и моя команда сделаем всю работу за вас</span>
                      </li>
                      <li className="flex items-start">
                        <Icon name="CheckCircle" size={18} className="text-accent mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Полный аудит и настройка рекламы</span>
                      </li>
                      <li className="flex items-start">
                        <Icon name="CheckCircle" size={18} className="text-accent mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Доработка сайта под конверсии</span>
                      </li>
                      <li className="flex items-start">
                        <Icon name="CheckCircle" size={18} className="text-accent mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Система аналитики и отчетности</span>
                      </li>
                      <li className="flex items-start">
                        <Icon name="CheckCircle" size={18} className="text-accent mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Сопровождение на всех этапах</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-10 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <Card className="mt-8 bg-destructive/5 border-destructive/20">
            <CardContent className="p-6">
              <h4 className="font-bold text-lg mb-3 flex items-center">
                <Icon name="AlertCircle" className="text-destructive mr-2" size={24} />
                Важное предупреждение
              </h4>
              <p className="text-muted-foreground mb-4">
                Вы должны знать, что я не могу помочь каждому. Это предложение не для новичков.
              </p>
              <p className="text-muted-foreground mb-4">
                Я могу быть полезен только интернет-магазинам, у которых:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Icon name="Check" className="text-destructive mr-2 flex-shrink-0 mt-0.5" size={18} />
                  <span className="text-sm">посетители уже совершают заказы на сайте</span>
                </li>
                <li className="flex items-start">
                  <Icon name="Check" className="text-destructive mr-2 flex-shrink-0 mt-0.5" size={18} />
                  <span className="text-sm">бюджет на контекстную рекламу не менее 50 000 ₽/мес.</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="form" className="py-16 px-4 bg-gradient-to-br from-primary to-primary/90 text-white">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Записаться на бесплатную стратегическую сессию
            </h2>
            <p className="text-white/90 text-lg">
              Заполните анкету, и я свяжусь с вами в течение 8 рабочих часов
            </p>
          </div>

          <Card className="border-none shadow-2xl">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-2 text-foreground">
                    Ваше имя *
                  </label>
                  <Input
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Иван Иванов"
                    className="h-12"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2 text-foreground">
                    Телефон *
                  </label>
                  <Input
                    required
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+7 (999) 123-45-67"
                    className="h-12"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2 text-foreground">
                    Сайт интернет-магазина *
                  </label>
                  <Input
                    required
                    type="url"
                    value={formData.website}
                    onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                    placeholder="https://example.com"
                    className="h-12"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2 text-foreground">
                    Бюджет на рекламу в месяц *
                  </label>
                  <Input
                    required
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    placeholder="50 000 руб."
                    className="h-12"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2 text-foreground">
                    Комментарий (опционально)
                  </label>
                  <Textarea
                    value={formData.comment}
                    onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                    placeholder="Расскажите о текущей ситуации с рекламой..."
                    rows={4}
                    className="resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-lg py-6 rounded-xl shadow-xl hover:scale-105 transition-all duration-300"
                >
                  Отправить заявку
                  <Icon name="Send" className="ml-2" size={20} />
                </Button>

                <p className="text-xs text-center text-muted-foreground">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </form>
            </CardContent>
          </Card>

          <div className="mt-8 text-center">
            <Card className="bg-white/10 border-white/20 inline-block">
              <CardContent className="p-6">
                <p className="text-white/90 font-semibold mb-2">
                  ⚠️ Места ограничены
                </p>
                <p className="text-white/70 text-sm">
                  К сожалению, у меня нет возможности принимать на стратегическую сессию всех, 
                  тем более из одной ниши. Не упустите возможность!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-primary/95 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-white/70">
            © 2024 Цыбуля Алексей. Настройка контекстной рекламы для интернет-магазинов
          </p>
        </div>
      </footer>

      {isImageModalOpen && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 cursor-pointer"
          onClick={closeImageModal}
        >
          <div className="relative max-w-7xl max-h-full">
            <button
              onClick={closeImageModal}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
              aria-label="Закрыть"
            >
              <Icon name="X" size={32} />
            </button>
            <img 
              src={modalImageSrc} 
              alt="Семья" 
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}

      {isFormModalOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 animate-fade-in">
          <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto animate-scale-in">
            <Card className="border-none shadow-2xl">
              <CardContent className="p-8">
                <button
                  onClick={() => setIsFormModalOpen(false)}
                  className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Закрыть"
                >
                  <Icon name="X" size={28} />
                </button>

                <div className="text-center mb-8">
                  <h2 className="text-2xl md:text-3xl font-bold mb-3 text-primary">
                    Записаться на бесплатную стратегическую сессию
                  </h2>
                  <p className="text-muted-foreground">
                    Заполните анкету, и я свяжусь с вами в течение 8 рабочих часов
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-foreground">
                      Ваше имя *
                    </label>
                    <Input
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Иван Иванов"
                      className="h-12"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2 text-foreground">
                      Телефон *
                    </label>
                    <Input
                      required
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+7 (999) 123-45-67"
                      className="h-12"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2 text-foreground">
                      Сайт интернет-магазина *
                    </label>
                    <Input
                      required
                      type="url"
                      value={formData.website}
                      onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                      placeholder="https://example.com"
                      className="h-12"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2 text-foreground">
                      Бюджет на рекламу в месяц *
                    </label>
                    <Input
                      required
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      placeholder="50 000 руб."
                      className="h-12"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2 text-foreground">
                      Комментарий (опционально)
                    </label>
                    <Textarea
                      value={formData.comment}
                      onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                      placeholder="Расскажите о текущей ситуации с рекламой..."
                      rows={4}
                      className="resize-none"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-lg py-6 rounded-xl shadow-xl hover:scale-105 transition-all duration-300"
                  >
                    Отправить заявку
                    <Icon name="Send" className="ml-2" size={20} />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;