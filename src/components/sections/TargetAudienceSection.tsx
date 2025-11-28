import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const TargetAudienceSection = () => {
  return (
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
                  Это может быть любая реклама: поиск, товарная галерея, РСЯ. Рекламный бюджет от 40000 рублей в месяц с НДС.
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
  );
};

export default TargetAudienceSection;
