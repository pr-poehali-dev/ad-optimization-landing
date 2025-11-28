import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface ContentSectionsProps {
  onImageClick: (src: string) => void;
  onFormModalOpen: () => void;
}

const ContentSections = ({ onImageClick, onFormModalOpen }: ContentSectionsProps) => {
  return (
    <>
      <section className="py-16 px-4 bg-primary text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
            Каких результатов позволяет достичь мой подход
          </h2>
          <p className="text-xl text-center mb-12 text-white/90 max-w-3xl mx-auto">
            Вот список таких задач, с которыми обращались ко мне клиенты:
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white/10 border-white/20 backdrop-blur hover:bg-white/20 transition-all duration-300 cursor-pointer" onClick={() => onImageClick('https://cdn.poehali.dev/files/c28e4db8-5ca0-4a12-b962-b1b8c0e3a31a.png')}>
              <CardContent className="p-6">
                <div className="text-4xl mb-4 flex items-center justify-between">
                  <span>📊</span>
                  <Icon name="ZoomIn" className="text-white/60" size={24} />
                </div>
                <p className="text-white">
                  Уменьшить стоимость заказов в ручном режиме с текущих 4500 до 1500-2000 рублей.
                </p>
                <img 
                  src="https://cdn.poehali.dev/files/c28e4db8-5ca0-4a12-b962-b1b8c0e3a31a.png"
                  alt="Результат 1"
                  className="mt-4 rounded-lg w-full"
                />
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20 backdrop-blur hover:bg-white/20 transition-all duration-300 cursor-pointer" onClick={() => onImageClick('https://cdn.poehali.dev/files/1e5fcbe0-3236-4868-b5ce-9ffd21e96cb2.png')}>
              <CardContent className="p-6">
                <div className="text-4xl mb-4 flex items-center justify-between">
                  <span>📈</span>
                  <Icon name="ZoomIn" className="text-white/60" size={24} />
                </div>
                <p className="text-white">
                  Повысить количество конверсий в 8 раз с 2000 конверсий до 17 тыс.
                </p>
                <img 
                  src="https://cdn.poehali.dev/files/1e5fcbe0-3236-4868-b5ce-9ffd21e96cb2.png"
                  alt="Результат 2"
                  className="mt-4 rounded-lg w-full"
                />
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20 backdrop-blur hover:bg-white/20 transition-all duration-300 cursor-pointer" onClick={() => onImageClick('https://cdn.poehali.dev/files/4d9a26f1-5f41-4a2c-9f56-a4695f86bcf8.png')}>
              <CardContent className="p-6">
                <div className="text-4xl mb-4 flex items-center justify-between">
                  <span>💰</span>
                  <Icon name="ZoomIn" className="text-white/60" size={24} />
                </div>
                <p className="text-white">
                  Снизить СРА конверсий на ~75% с 120 руб. до 30 рублей в РСЯ и поиске.
                </p>
                <img 
                  src="https://cdn.poehali.dev/files/4d9a26f1-5f41-4a2c-9f56-a4695f86bcf8.png"
                  alt="Результат 3"
                  className="mt-4 rounded-lg w-full"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
            Способ №1: Автоматизация рекламы
          </h2>
          
          <div className="space-y-8">
            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-primary">Проблема</h3>
                <p className="text-muted-foreground mb-6">
                  Бизнесы увеличивают бюджет для увеличения количества заказов. Это не приводит к результатам.
                </p>
                <p className="text-muted-foreground">
                  Почему? Ведь казалось бы все логично, чем больше денег на рекламу, тем больше она приносит.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-primary">Суть</h3>
                <p className="text-muted-foreground mb-6">
                  В Яндекс Директ уже давно есть автостратегии. И они отлично работают. С моей точки зрения, лучший вариант для использования это автостратегия "Максимум конверсий"
                </p>
                <p className="text-muted-foreground mb-6">
                  Эта стратегия старается выжать максимум результатов в заданном целевом показателе стоимости конверсии. Важное правило: вы должны иметь по каждой кампании хотя бы 50 конверсий.
                </p>
                <p className="text-muted-foreground mb-6">
                  Конверсии это не всегда заказы. Это может быть цель метрики. Настроили автостратегию и подождали 4 недели. Смотрим на результат. Результаты вас не устраивают?
                </p>
                <p className="text-muted-foreground">
                  Проверяйте следующие параметры — может в чем то из этих пунктов есть косяк
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground mt-4 ml-4">
                  <li>Не менее 50 конверсий на кампанию в неделю</li>
                  <li>Настроена корректная конверсия для оптимизации и все конверсии видны с разбивкой по кампаниям и объявлениям</li>
                  <li>Время на обучение 2 недели. Лучше 4 недели</li>
                  <li>Не используем автотаргет</li>
                  <li>На счету хранится не менее 2-х недельных бюджетов. То есть если бюджет на месяц 100 тыс то на счету постоянно не менее 50 тыс.</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-destructive bg-destructive/5">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-destructive">Ошибки</h3>
                <div className="space-y-4 text-muted-foreground">
                  <div>
                    <p className="font-semibold text-foreground mb-2">Ошибка №1 — Неправильная конверсия</p>
                    <p>
                      Правильная конверсия это конверсия которую совершит большинство ваших клиентов. Заказ, заявка, просмотр страницы товара — все это будут правильные конверсии. Напротив когда конверсий мало — используется неверная конверсия.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-2">Ошибка №2 — Мало денег на счету</p>
                    <p>
                      Клиент использует стратегию автостратегию недельную стоимость цели, поиск. Бюджет 25000 в неделю. Но денег на счету нет. Постоянно 3-5 тысяч. Алгоритму нужно средств больше.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-2">Ошибка №3 — Мало времени на тест</p>
                    <p>
                      Нужно 2 недели, лучше 4. Без этого работать нет смысла. Автостратегия просто физически не успевает обучиться. Нужны данные.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg bg-gradient-to-br from-accent/5 to-accent/10">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-primary">Результат</h3>
                <p className="text-muted-foreground mb-6">
                  При использовании описанной стратегии с высокой долей вероятности вы получите намного больше заказов чем сейчас. К примеру за последний год я помог клиенту, который тратил 150 тыс рублей на поиск в Яндекс Директ, увеличить в 8 раз заказы с рекламы.
                </p>
                <div className="bg-white rounded-lg p-6 shadow-md cursor-pointer hover:shadow-xl transition-all" onClick={() => onImageClick('https://cdn.poehali.dev/files/6e41fc92-ee94-422f-98e7-dc7c3be0c6e3.png')}>
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <p className="text-sm text-muted-foreground mb-2">Конверсии до внедрения</p>
                      <p className="text-3xl font-bold text-primary">2,000</p>
                    </div>
                    <Icon name="ArrowRight" size={32} className="text-accent mt-4" />
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground mb-2">Конверсии после внедрения</p>
                      <p className="text-3xl font-bold text-accent">17,000</p>
                    </div>
                  </div>
                  <img 
                    src="https://cdn.poehali.dev/files/6e41fc92-ee94-422f-98e7-dc7c3be0c6e3.png"
                    alt="Результаты до и после"
                    className="w-full rounded-lg mt-4"
                  />
                  <div className="mt-4 flex items-center text-sm text-muted-foreground">
                    <Icon name="ZoomIn" size={16} className="mr-2" />
                    <span>Нажмите для увеличения</span>
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
            Способ №2: Расширяем спектр конверсий
          </h2>
          
          <div className="space-y-8">
            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-primary">Проблема</h3>
                <p className="text-muted-foreground mb-4">
                  Если конверсия это у вас заказ, а не заявка или другая более частая цель то возникает проблема.
                </p>
                <p className="text-muted-foreground">
                  Клиент тратит 150 тыс на рекламу, но при этом у него только 30-40 заказов в месяц. Это очень мало. Алгоритму для его работы нужно гораздо больше данных. Это приводит к тому, что результаты с рекламы плохие, стоимость заказа высокая, а количество заказов низкое.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-primary">Решение</h3>
                <p className="text-muted-foreground mb-6">
                  Нужно создать дополнительные цели под автостратегию и настроить ее. Цель должна быть целевая, она не должна быть случайной.
                </p>
                <p className="text-muted-foreground mb-6">
                  Для примера рассмотрим ИМ строительных материалов с мелкими заказами. Покупая товары в таком магазине клиенты за раз оформляют несколько заказов и делают несколько покупок. Цель ИМ не увеличить количество заказов на 10-20 а увеличить количество заказов в 3 раза — c 30 до 90 заказов в месяц при том же бюджете.
                </p>
                <p className="text-muted-foreground mb-6">
                  Если создать стандартную цель Метрики в Я.Д. на просмотр карточки товара, то таких целей при бюджете в 40 тыс на поиск будет 400 в неделю (для данного примера).
                </p>
                <p className="text-muted-foreground mb-6">
                  Однако просмотр карточки товара не всегда однозначная цель, так как посетитель может просто смотреть различные товары не совершая покупок. Для улучшения модели оптимизации создается цель "Глубокий просмотр карточки товара" Рассмотрим как создать такую цель.
                </p>
                <div className="bg-muted/50 p-6 rounded-lg space-y-4">
                  <p className="font-semibold text-foreground">Составная цель Яндекс Метрики "Глубокий просмотр карточки товара"</p>
                  <p className="text-sm text-muted-foreground">Состоит из следующих условий:</p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li>Условие — Посещение страниц "URL содержит /product/"</li>
                    <li>и Условие 3 — Глубина просмотра "Число просмотренных страниц больше 2"</li>
                    <li>и Условие 4 — Продолжительность визита "Время на сайте больше 30 сек"</li>
                  </ul>
                  <p className="text-sm text-muted-foreground mt-4">
                    То есть посетитель должен был зайти на страницу товара, посмотреть 2 или более страниц товаров, провести на сайте как минимум 30 секунд.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg bg-gradient-to-br from-accent/5 to-accent/10">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-primary">Результат</h3>
                <p className="text-muted-foreground mb-6">
                  Была задача увеличить продажи с рекламы. Мы начали использовать "Глубокий просмотр карточки товара" как конверсию в автостратегии. За год количество конверсий выросло с 2000 в квартал до 17000 конверсий. Стоимость конверсии упала с 120 руб до 30.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-lg p-6 shadow-md cursor-pointer hover:shadow-xl transition-all" onClick={() => onImageClick('https://cdn.poehali.dev/files/1e5fcbe0-3236-4868-b5ce-9ffd21e96cb2.png')}>
                    <p className="text-sm text-muted-foreground mb-2">Рост конверсий</p>
                    <p className="text-2xl font-bold text-accent mb-4">2,000 → 17,000</p>
                    <img 
                      src="https://cdn.poehali.dev/files/1e5fcbe0-3236-4868-b5ce-9ffd21e96cb2.png"
                      alt="Рост конверсий"
                      className="w-full rounded-lg"
                    />
                  </div>
                  <div className="bg-white rounded-lg p-6 shadow-md cursor-pointer hover:shadow-xl transition-all" onClick={() => onImageClick('https://cdn.poehali.dev/files/4d9a26f1-5f41-4a2c-9f56-a4695f86bcf8.png')}>
                    <p className="text-sm text-muted-foreground mb-2">Снижение стоимости</p>
                    <p className="text-2xl font-bold text-accent mb-4">120₽ → 30₽</p>
                    <img 
                      src="https://cdn.poehali.dev/files/4d9a26f1-5f41-4a2c-9f56-a4695f86bcf8.png"
                      alt="Снижение стоимости"
                      className="w-full rounded-lg"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
            Способ №3: Исключаем нецелевой трафик
          </h2>
          
          <div className="space-y-8">
            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-primary">Проблема</h3>
                <p className="text-muted-foreground mb-4">
                  Вы продаете оптом. Но при этом получаете много заказов на розницу. Это происходит из-за того, что Яндекс покупает трафик дешевле — разницу кладет себе в карман.
                </p>
                <p className="text-muted-foreground">
                  Не всегда эта проблема решается корректировками ставок.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-primary">Решение</h3>
                <p className="text-muted-foreground mb-6">
                  Нужно смотреть детальную статистику по площадкам, возрастам, полу и многим другим параметрам. Это все можно выгрузить из Яндекс Метрики.
                </p>
                <p className="text-muted-foreground mb-6">
                  Далее смотрим более детально статистику по разным параметрам. Отключаем то, что не дает результат или дает плохой результат.
                </p>
                <p className="text-muted-foreground">
                  Такие изменения экономят значительные рекламные бюджеты, сразу исключая нецелевые показы.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg bg-gradient-to-br from-accent/5 to-accent/10">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-primary">Результат</h3>
                <p className="text-muted-foreground mb-6">
                  Одному из моих заказчиков, который работал с рекламными компаниями смежными с рекламной площадкой Авито, удалось вдвое снизить цену заказа - с 4500 до 2000-2500 рублей и на 30% увеличить их количество. Только за счет исключения нецелевых площадок.
                </p>
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <p className="text-sm text-muted-foreground mb-2">Стоимость заказа</p>
                      <p className="text-3xl font-bold text-destructive line-through">4,500₽</p>
                      <p className="text-3xl font-bold text-accent">2,000-2,500₽</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-2">Количество заказов</p>
                      <p className="text-3xl font-bold text-accent">+30%</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Готовы улучшить результаты вашей рекламы?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Оставьте заявку и я проведу бесплатный аудит вашей рекламной кампании
          </p>
          <Button 
            size="lg" 
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-xl px-12 py-7 rounded-2xl shadow-2xl hover:shadow-accent/50 hover:scale-105 transition-all duration-300"
            onClick={onFormModalOpen}
          >
            Получить бесплатный аудит
            <Icon name="ArrowRight" className="ml-2" size={24} />
          </Button>
        </div>
      </section>
    </>
  );
};

export default ContentSections;
