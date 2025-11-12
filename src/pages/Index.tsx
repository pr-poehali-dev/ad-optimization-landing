import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
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
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-muted/30">
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-white py-20 px-4 md:py-32">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-12 animate-fade-in">
            <Badge className="mb-6 text-base px-6 py-2 bg-accent text-accent-foreground hover:bg-accent/90">
              Руководство для владельцев интернет-магазинов
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white via-accent/20 to-white bg-clip-text text-transparent">
                3 способа увеличить
              </span>
              <br />
              <span className="text-accent">количество заказов</span>
              <br />
              <span className="bg-gradient-to-r from-white via-accent/20 to-white bg-clip-text text-transparent">
                с контекстной рекламы
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto font-light">
              Х2-Х3 без увеличения среднего рекламного бюджета
            </p>
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-lg px-8 py-6 rounded-xl shadow-2xl hover:scale-105 transition-all duration-300"
              onClick={() => document.getElementById('form')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Записаться на консультацию
              <Icon name="ArrowRight" className="ml-2" size={20} />
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
            Для кого этот материал
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2 hover:border-accent transition-all duration-300 hover:shadow-xl">
              <CardContent className="p-8">
                <div className="flex items-start mb-4">
                  <div className="bg-accent/10 p-3 rounded-lg mr-4">
                    <Icon name="Store" size={32} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Вы владелец интернет-магазина</h3>
                    <p className="text-muted-foreground">
                      Не имеет значения, что именно вы продаете. Основные ошибки в большинстве случаев одинаковы.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-accent transition-all duration-300 hover:shadow-xl">
              <CardContent className="p-8">
                <div className="flex items-start mb-4">
                  <div className="bg-accent/10 p-3 rounded-lg mr-4">
                    <Icon name="TrendingDown" size={32} className="text-destructive" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Вас не устраивают результаты</h3>
                    <p className="text-muted-foreground">
                      Мало заказов с сайта, они дорогие, посетители заходят, гуляют по сайту, но ничего не покупают.
                    </p>
                  </div>
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
                <div className="md:col-span-1 flex justify-center items-start">
                  <div className="w-48 h-48 rounded-2xl bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center">
                    <Icon name="User" size={80} className="text-primary" />
                  </div>
                </div>
                <div className="md:col-span-2">
                  <h3 className="text-2xl font-bold mb-4">Цыбуля Алексей</h3>
                  <div className="space-y-4 text-muted-foreground">
                    <p>Живу в Ижевске, есть жена и двое сыновей.</p>
                    <p>
                      <strong className="text-foreground">Образование:</strong> Маркетолог, БГТУ им. В. Г. Шухова, выпуск 2018 года.
                    </p>
                    <p>С 2015 года начал настраивать контекстную рекламу, создавать сайты и изучать основы интернет-маркетинга.</p>
                    <p>
                      <strong className="text-foreground">С 2018 по 2024:</strong> Работал интернет-маркетологом в крупнейшем агентстве недвижимости г. Ижевска. Параллельно ведя частную практику.
                    </p>
                    <p className="text-foreground font-semibold">
                      В данный момент работаю с 3 крупными интернет-магазинами. География: Санкт-Петербург, Москва, Воронеж.
                    </p>
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
          <p className="text-center text-white/90 mb-12 text-lg">
            С 2020 года сотрудничаю с ИП Таболкин Алексей Станиславович, г. Санкт-Петербург
          </p>
          
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
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-primary">
            Три критические ошибки, которые лишают ваш интернет-магазин продаж
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg max-w-3xl mx-auto">
            Большинство игнорирует эти условия, вместо этого бесконечно меняют подрядчиков по рекламе. 
            Хотя достаточно потратить пару вечеров и посетители начнут охотнее оставлять заявки.
          </p>

          <div className="space-y-8">
            <Card className="border-2 border-destructive/20 hover:border-destructive/50 transition-all duration-300 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start mb-6">
                  <div className="bg-destructive/10 p-4 rounded-xl mr-6">
                    <Icon name="AlertTriangle" size={40} className="text-destructive" />
                  </div>
                  <div>
                    <Badge className="mb-3 bg-destructive text-white">Ошибка #1</Badge>
                    <h3 className="text-2xl font-bold mb-2">Отсутствие релевантности</h3>
                    <p className="text-muted-foreground">
                      Посетители ищут конкретный товар, а попадают на главную страницу или в карточку другого товара.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-destructive/20 hover:border-destructive/50 transition-all duration-300 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start mb-6">
                  <div className="bg-destructive/10 p-4 rounded-xl mr-6">
                    <Icon name="XCircle" size={40} className="text-destructive" />
                  </div>
                  <div>
                    <Badge className="mb-3 bg-destructive text-white">Ошибка #2</Badge>
                    <h3 className="text-2xl font-bold mb-2">Устаревшая структура рекламы</h3>
                    <p className="text-muted-foreground">
                      Яндекс Директ постоянно развивается, а рекламные кампании настроены один раз и больше не обновляются.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-destructive/20 hover:border-destructive/50 transition-all duration-300 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start mb-6">
                  <div className="bg-destructive/10 p-4 rounded-xl mr-6">
                    <Icon name="Ban" size={40} className="text-destructive" />
                  </div>
                  <div>
                    <Badge className="mb-3 bg-destructive text-white">Ошибка #3</Badge>
                    <h3 className="text-2xl font-bold mb-2">Нет системы возврата клиентов</h3>
                    <p className="text-muted-foreground">
                      На принятие решения о покупке уходит в среднем 21 день. Если не напоминать клиенту о себе — он выберет конкурента.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gradient-to-b from-muted/30 to-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-primary">
            Условие первое - Релевантность
          </h2>
          <p className="text-center text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
            Когда человек ищет товар в поиске, ему должно показываться объявление именно этого товара. 
            При переходе посетитель должен попасть в карточку этого товара.
          </p>

          <div className="space-y-6 mb-12">
            <Card className="border-l-4 border-l-destructive">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <Icon name="ThumbsDown" className="text-destructive mr-4 mt-1" size={24} />
                  <div>
                    <h4 className="font-bold text-lg mb-2 text-destructive">❌ Плохой пример</h4>
                    <p className="text-muted-foreground mb-2">Запрос: "Драйвер шагового серво-двигателя HBS57H"</p>
                    <p className="text-sm">Объявление говорит о другой модели, ссылка ведет не в карточку искомого товара.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-accent">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <Icon name="ThumbsUp" className="text-accent mr-4 mt-1" size={24} />
                  <div>
                    <h4 className="font-bold text-lg mb-2 text-accent">✅ Правильный пример</h4>
                    <p className="text-muted-foreground mb-2">Заголовок полностью повторяет запрос</p>
                    <p className="text-sm">Ссылка ведет в карточку именно искомого товара. Конверсия выше 5%!</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-accent/5 border-accent/20">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Icon name="Lightbulb" className="text-accent mr-3" size={28} />
                Решение
              </h3>
              <p className="text-muted-foreground mb-4">
                Создать рекламную кампанию по товарному фиду с вашего сайта. Директ автоматически сформирует 
                объявление под каждый товар с точным соответствием: запрос – объявление – карточка товара.
              </p>
              <div className="bg-white p-4 rounded-lg border">
                <p className="text-sm font-mono text-muted-foreground">
                  Автотаргетинг + товарный фид = максимальная релевантность для каждого запроса
                </p>
              </div>
            </CardContent>
          </Card>
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
            <p className="text-2xl font-semibold text-primary">
              Какая сейчас у вас конверсия? 0.1% или еще ниже?
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
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-primary">
            Варианты работы
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Я бесплатно проведу анализ вашей ситуации и создам индивидуальный план масштабирования
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2 hover:border-accent transition-all duration-300 hover:shadow-xl">
              <CardContent className="p-8">
                <Badge className="mb-4 bg-primary text-white">Доступно 2 места</Badge>
                <h3 className="text-2xl font-bold mb-4">Пакет консультаций</h3>
                <div className="mb-6">
                  <div className="text-4xl font-bold text-accent mb-2">3 × 5 900 ₽</div>
                  <p className="text-muted-foreground">Работаем месяц (обычно 3 недели)</p>
                </div>
                <ul className="space-y-3 mb-6">
                  {[
                    'Доработка оффера, УТП и структуры сайта',
                    'Стратегическая разведка конкурентов',
                    'Чек-листы по проверке каждого элемента',
                    'Помощь с техническими моментами'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <Icon name="CheckCircle" size={20} className="text-accent mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-accent hover:shadow-2xl transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-accent text-accent-foreground px-4 py-1 text-sm font-semibold">
                Популярное
              </div>
              <CardContent className="p-8">
                <Badge className="mb-4 bg-accent text-accent-foreground">Доступно 1 место</Badge>
                <h3 className="text-2xl font-bold mb-4">Все под ключ</h3>
                <div className="mb-6">
                  <div className="text-4xl font-bold text-accent mb-2">от 45 000 ₽</div>
                  <p className="text-muted-foreground">Срок до 90 дней, возможна рассрочка</p>
                </div>
                <ul className="space-y-3 mb-6">
                  {[
                    'Я и моя команда сделаем всю работу за вас',
                    'Полный аудит и настройка рекламы',
                    'Доработка сайта под конверсии',
                    'Система аналитики и отчетности',
                    'Сопровождение на всех этапах'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <Icon name="CheckCircle" size={20} className="text-accent mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-8 bg-destructive/5 border-destructive/20">
            <CardContent className="p-6">
              <h4 className="font-bold text-lg mb-3 flex items-center">
                <Icon name="AlertCircle" className="text-destructive mr-2" size={24} />
                Важное предупреждение
              </h4>
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
                  <span className="text-sm">бюджет на контекстную рекламу не менее 40 000 ₽/мес.</span>
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
    </div>
  );
};

export default Index;
