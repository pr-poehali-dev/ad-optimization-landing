import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';
import HeroSection from '@/components/sections/HeroSection';
import TargetAudienceSection from '@/components/sections/TargetAudienceSection';
import AboutSection from '@/components/sections/AboutSection';
import ContentSections from '@/components/sections/ContentSections';

const Index = () => {
  const { toast } = useToast();
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [modalImageSrc, setModalImageSrc] = useState('');
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);

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
      <HeroSection />
      <TargetAudienceSection />
      <AboutSection onImageClick={openImageModal} />
      <ContentSections 
        onImageClick={openImageModal}
        onFormModalOpen={() => setIsFormModalOpen(true)}
      />

      {isImageModalOpen && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fade-in cursor-zoom-out"
          onClick={closeImageModal}
        >
          <button 
            className="absolute top-4 right-4 text-white hover:text-accent transition-colors z-10"
            onClick={closeImageModal}
          >
            <Icon name="X" size={32} />
          </button>
          <img 
            src={modalImageSrc}
            alt="Увеличенное изображение"
            className="max-w-full max-h-full object-contain rounded-lg cursor-zoom-out"
            onClick={closeImageModal}
          />
        </div>
      )}

      {isFormModalOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setIsFormModalOpen(false)}
        >
          <div 
            className="bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto relative animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setIsFormModalOpen(false)}
            >
              <Icon name="X" size={24} />
            </button>
            
            <h2 className="text-3xl font-bold mb-6 text-primary">Получить бесплатный аудит</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Ваше имя *</label>
                <Input
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder="Как вас зовут?"
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Телефон *</label>
                <Input
                  required
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  placeholder="+7 (999) 123-45-67"
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Сайт интернет-магазина *</label>
                <Input
                  required
                  type="url"
                  value={formData.website}
                  onChange={(e) => setFormData({...formData, website: e.target.value})}
                  placeholder="https://example.com"
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Рекламный бюджет в месяц *</label>
                <Input
                  required
                  value={formData.budget}
                  onChange={(e) => setFormData({...formData, budget: e.target.value})}
                  placeholder="Например: 100 000 рублей"
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Комментарий</label>
                <Textarea
                  value={formData.comment}
                  onChange={(e) => setFormData({...formData, comment: e.target.value})}
                  placeholder="Расскажите о вашей ситуации..."
                  className="w-full min-h-[120px]"
                />
              </div>

              <Button 
                type="submit"
                size="lg" 
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg py-6"
              >
                Отправить заявку
                <Icon name="Send" className="ml-2" size={20} />
              </Button>

              <p className="text-sm text-muted-foreground text-center">
                Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
              </p>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
