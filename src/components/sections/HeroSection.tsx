import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const HeroSection = () => {
  return (
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
  );
};

export default HeroSection;
