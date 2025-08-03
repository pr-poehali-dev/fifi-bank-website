import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-meme-orange to-meme-yellow rounded-full"></div>
              <span className="text-xl font-bold text-gray-800 font-['Comic_Sans_MS',cursive]">ФиФи Банк</span>
            </div>
            
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('hero')} className="text-gray-700 hover:text-meme-orange transition-colors">Главная</button>
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-meme-orange transition-colors">О нас</button>
              <button onClick={() => scrollToSection('fificoin')} className="text-gray-700 hover:text-meme-orange transition-colors">FiFiCoin</button>
              <button onClick={() => scrollToSection('platform')} className="text-gray-700 hover:text-meme-orange transition-colors">Платформа</button>
              <button onClick={() => scrollToSection('news')} className="text-gray-700 hover:text-meme-orange transition-colors">Новости</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-meme-orange transition-colors">Контакты</button>
            </div>

            <Button className="bg-primary hover:bg-primary/90 text-white">
              <Icon name="MessageCircle" size={16} className="mr-2" />
              Telegram
            </Button>
          </div>
        </div>
      </nav>
      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen bg-gradient-to-br from-meme-blue via-meme-mint to-meme-purple pt-16">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-16 h-16 bg-meme-yellow rounded-full opacity-20 animate-float"></div>
          <div className="absolute top-3/4 right-1/4 w-12 h-12 bg-meme-orange rounded-full opacity-20 animate-float" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-1/4 left-1/3 w-8 h-8 bg-white rounded-full opacity-30 animate-float" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-4">
          <div className="max-w-4xl mx-auto">
          {/* Animated Coin */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <img 
                src="/img/6fc396f4-a80f-4bcb-a442-a971a5303af4.jpg" 
                alt="FiFiCoin" 
                className="w-32 h-32 md:w-48 md:h-48 rounded-full animate-coin-spin animate-glow"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-meme-orange via-meme-yellow to-meme-mint opacity-30 animate-glow"></div>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-['Comic_Sans_MS',cursive] drop-shadow-lg">
            ФиФи Банк
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 font-semibold">
            Мемная цифровая платформа коллекционирования 🚀
          </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button 
                onClick={() => scrollToSection('about')}
                className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-4 rounded-full font-bold shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                <Icon name="Info" size={20} className="mr-2" />
                Узнать больше
              </Button>
              <Button 
                className="bg-white/20 hover:bg-white/30 text-white text-lg px-8 py-4 rounded-full font-bold border border-white/30"
              >
                <Icon name="Send" size={20} className="mr-2" />
                Вступить в Telegram
              </Button>
            </div>

            {/* Disclaimer Card */}
            <Card className="p-6 bg-white/10 backdrop-blur-sm border border-white/20 text-white max-w-2xl mx-auto">
              <div className="flex items-start gap-3 mb-4">
                <Icon name="AlertTriangle" size={20} className="text-meme-yellow mt-1" />
                <div className="text-left">
                  <h3 className="font-bold text-lg mb-2">Важная информация</h3>
                  <p className="text-sm text-white/90 leading-relaxed">
                    ФиФи Банк — развлекательная платформа для коллекционирования мем-карт и FiFiCoin. 
                    Не является финансовым инвестиционным сервисом.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <Icon name="ChevronDown" size={32} className="text-white/70" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 font-['Comic_Sans_MS',cursive]">
              О ФиФи Банк
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              ФиФи Банк — это инновационный проект, объединяющий технологии блокчейн и развлечения. 
              Мы создаем уникальную платформу для обмена и хранения токенов FiFiCoin, 
              обеспечивая быстрые, безопасные и прозрачные операции.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img 
                src="/img/1d644206-34a1-4581-aebe-0b731c8fb13c.jpg" 
                alt="Blockchain Technology" 
                className="w-full rounded-2xl shadow-2xl"
              />
            </div>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-meme-orange/10 rounded-full">
                  <Icon name="Shield" size={24} className="text-meme-orange" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Безопасность</h3>
                  <p className="text-gray-600">Современные технологии блокчейн обеспечивают максимальную защиту ваших активов</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-meme-mint/10 rounded-full">
                  <Icon name="Zap" size={24} className="text-meme-mint" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Скорость</h3>
                  <p className="text-gray-600">Мгновенные транзакции и обмен токенов в реальном времени</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-meme-blue/10 rounded-full">
                  <Icon name="Users" size={24} className="text-meme-blue" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Сообщество</h3>
                  <p className="text-gray-600">Активное сообщество коллекционеров и энтузиастов мемной культуры</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-4">
              <Icon name="ArrowRight" size={20} className="mr-2" />
              Подробнее о нас
            </Button>
          </div>
        </div>
      </section>

      {/* FiFiCoin Section */}
      <section id="fificoin" className="py-20 px-4 bg-gradient-to-r from-meme-purple/10 to-meme-yellow/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 font-['Comic_Sans_MS',cursive]">
              Что такое FiFiCoin?
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto">
              FiFiCoin — это цифровая валюта внутри экосистемы ФиФи Банк. 
              Используйте токены для покупок услуг, участия в акциях и обмена на другие валюты.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Chart */}
            <div>
              <Card className="p-6 h-full">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Динамика курса FiFiCoin</h3>
                <img 
                  src="/img/36d7f626-3e08-4de5-8144-256610d2d2e0.jpg" 
                  alt="FiFiCoin Chart" 
                  className="w-full rounded-lg"
                />
                <div className="mt-4 flex justify-between items-center">
                  <div>
                    <div className="text-3xl font-bold text-green-600">$0.0234</div>
                    <div className="text-sm text-green-600">+12.5% за 24ч</div>
                  </div>
                  <Button className="bg-green-600 hover:bg-green-700 text-white">
                    Купить FiFiCoin
                  </Button>
                </div>
              </Card>
            </div>

            {/* Token Characteristics */}
            <div>
              <Card className="p-6 h-full">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Характеристики токена</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="font-semibold text-gray-700">Тип токена</span>
                    <span className="text-meme-orange font-bold">BEP-20</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="font-semibold text-gray-700">Общий объем</span>
                    <span className="text-meme-mint font-bold">1,000,000,000 FIFI</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="font-semibold text-gray-700">В обращении</span>
                    <span className="text-meme-blue font-bold">500,000,000 FIFI</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="font-semibold text-gray-700">Блокчейн</span>
                    <span className="text-meme-purple font-bold">Binance Smart Chain</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="font-semibold text-gray-700">Безопасность</span>
                    <div className="flex items-center gap-2">
                      <Icon name="Shield" size={16} className="text-green-600" />
                      <span className="text-green-600 font-bold">Проверен</span>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Token Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="p-6 text-center bg-gradient-to-br from-meme-orange to-meme-yellow text-white">
              <div className="w-16 h-16 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Icon name="Coins" size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Простой обмен</h3>
              <p className="text-white/90">Мгновенный обмен на популярные криптовалюты</p>
            </Card>

            <Card className="p-6 text-center bg-gradient-to-br from-meme-mint to-meme-blue text-white">
              <div className="w-16 h-16 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Icon name="Lock" size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Безопасность</h3>
              <p className="text-white/90">Защита блокчейн-технологиями</p>
            </Card>

            <Card className="p-6 text-center bg-gradient-to-br from-meme-purple to-meme-yellow text-white">
              <div className="w-16 h-16 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Icon name="Zap" size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Быстрые транзакции</h3>
              <p className="text-white/90">Переводы за секунды с низкими комиссиями</p>
            </Card>
          </div>

          <div className="text-center">
            <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-4 mr-4">
              <Icon name="Plus" size={20} className="mr-2" />
              Узнать больше
            </Button>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-4">
              <Icon name="ShoppingCart" size={20} className="mr-2" />
              Купить FiFiCoin
            </Button>
          </div>
        </div>
      </section>

      {/* Meme Cards Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-meme-purple/20 to-meme-yellow/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 font-['Comic_Sans_MS',cursive]">
              Коллекция Мем-Карт
            </h2>
            <p className="text-xl text-gray-700">
              Собирайте уникальные анимированные карты и участвуйте в эксклюзивных ивентах
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <Card className="p-6 bg-gradient-to-br from-meme-orange to-meme-yellow text-white transform hover:scale-105 transition-all duration-300 hover:shadow-2xl">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Icon name="Star" size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Редкая Карта</h3>
                <p className="text-white/90 mb-4">
                  Эксклюзивные карты с уникальными анимациями и бонусами
                </p>
                <Button className="bg-white/20 hover:bg-white/30 text-white border border-white/30">
                  Собрать сейчас
                </Button>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-meme-mint to-meme-blue text-white transform hover:scale-105 transition-all duration-300 hover:shadow-2xl">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Icon name="Zap" size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Мега Карта</h3>
                <p className="text-white/90 mb-4">
                  Супер редкие карты с особыми эффектами и привилегиями
                </p>
                <Button className="bg-white/20 hover:bg-white/30 text-white border border-white/30">
                  Получить карту
                </Button>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-meme-purple to-meme-yellow text-white transform hover:scale-105 transition-all duration-300 hover:shadow-2xl">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Icon name="Crown" size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Легендарная</h3>
                <p className="text-white/90 mb-4">
                  Самые редкие карты с невероятными возможностями
                </p>
                <Button className="bg-white/20 hover:bg-white/30 text-white border border-white/30">
                  Стать легендой
                </Button>
              </div>
            </Card>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-meme-orange mb-2">1000+</div>
              <div className="text-gray-700">Коллекционеров</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-meme-mint mb-2">500+</div>
              <div className="text-gray-700">Уникальных карт</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-meme-blue mb-2">50+</div>
              <div className="text-gray-700">Ивентов</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-meme-purple mb-2">∞</div>
              <div className="text-gray-700">Веселья</div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Section */}
      <section id="platform" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 font-['Comic_Sans_MS',cursive]">
              Платформа и услуги
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto">
              Полный набор инструментов для работы с FiFiCoin и мем-картами
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <Icon name="Wallet" size={40} className="text-meme-orange mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-800 mb-2">Кошелек</h3>
              <p className="text-gray-600 text-sm">Храните и управляйте FiFiCoin безопасно</p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <Icon name="ArrowLeftRight" size={40} className="text-meme-mint mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-800 mb-2">Обмен</h3>
              <p className="text-gray-600 text-sm">Обменивайте токены на другие валюты</p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <Icon name="Send" size={40} className="text-meme-blue mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-800 mb-2">Переводы</h3>
              <p className="text-gray-600 text-sm">Отправляйте токены другим пользователям</p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <Icon name="Star" size={40} className="text-meme-purple mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-800 mb-2">Коллекции</h3>
              <p className="text-gray-600 text-sm">Собирайте уникальные мем-карты</p>
            </Card>
          </div>

          <Card className="p-8 bg-gradient-to-r from-gray-900 to-gray-800 text-white mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Icon name="Shield" size={32} className="text-green-400" />
                  <h3 className="text-2xl font-bold">Безопасность превыше всего</h3>
                </div>
                <div className="space-y-3 text-gray-300">
                  <div className="flex items-center gap-3">
                    <Icon name="Check" size={16} className="text-green-400" />
                    <span>256-битное шифрование данных</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Check" size={16} className="text-green-400" />
                    <span>Двухфакторная аутентификация</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Check" size={16} className="text-green-400" />
                    <span>Холодное хранение 95% активов</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Check" size={16} className="text-green-400" />
                    <span>Регулярные аудиты безопасности</span>
                  </div>
                </div>
              </div>
              <div className="text-center lg:text-right">
                <div className="text-4xl font-bold text-green-400 mb-2">99.9%</div>
                <div className="text-lg text-gray-300">Время работы платформы</div>
                <Button className="bg-green-600 hover:bg-green-700 text-white mt-4">
                  Узнать о безопасности
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* News Section */}
      <section id="news" className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 font-['Comic_Sans_MS',cursive]">
              Новости и акции
            </h2>
            <p className="text-xl text-gray-700">Следите за последними обновлениями проекта</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-r from-meme-orange to-meme-yellow"></div>
              <div className="p-6">
                <div className="text-sm text-meme-orange font-semibold mb-2">3 августа 2024</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Запуск новой коллекции мем-карт</h3>
                <p className="text-gray-600 mb-4">Представляем 100 новых уникальных карт с анимированными эффектами...</p>
                <Button variant="outline" size="sm">Читать далее</Button>
              </div>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-r from-meme-mint to-meme-blue"></div>
              <div className="p-6">
                <div className="text-sm text-meme-mint font-semibold mb-2">1 августа 2024</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Обновление платформы v2.0</h3>
                <p className="text-gray-600 mb-4">Улучшенная безопасность, новый интерфейс и дополнительные функции...</p>
                <Button variant="outline" size="sm">Читать далее</Button>
              </div>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-r from-meme-purple to-meme-yellow"></div>
              <div className="p-6">
                <div className="text-sm text-meme-purple font-semibold mb-2">30 июля 2024</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Партнерство с крупными биржами</h3>
                <p className="text-gray-600 mb-4">FiFiCoin теперь доступен на ведущих криптовалютных биржах...</p>
                <Button variant="outline" size="sm">Читать далее</Button>
              </div>
            </Card>
          </div>

          <Card className="p-8 bg-gradient-to-r from-meme-orange/10 to-meme-yellow/10 border border-meme-orange/20">
            <div className="text-center">
              <Icon name="Mail" size={48} className="text-meme-orange mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Подпишитесь на рассылку</h3>
              <p className="text-gray-700 mb-6">Получайте последние новости и эксклюзивные предложения</p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input placeholder="Ваш email" className="flex-1" />
                <Button className="bg-primary hover:bg-primary/90 text-white">
                  Подписаться
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 font-['Comic_Sans_MS',cursive]">
              Контакты и поддержка
            </h2>
            <p className="text-xl text-gray-700">Мы всегда готовы помочь вам</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Обратная связь</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Имя</label>
                  <Input placeholder="Ваше имя" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                  <Input type="email" placeholder="your@email.com" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Сообщение</label>
                  <Textarea placeholder="Ваше сообщение..." rows={5} />
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                  <Icon name="Send" size={16} className="mr-2" />
                  Отправить сообщение
                </Button>
              </div>
            </Card>

            <div className="space-y-8">
              <Card className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Контактная информация</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Icon name="Mail" size={20} className="text-meme-orange" />
                    <span>support@fifibank.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="MessageCircle" size={20} className="text-meme-mint" />
                    <span>Telegram: @FiFiBankSupport</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Clock" size={20} className="text-meme-blue" />
                    <span>Поддержка 24/7</span>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Часто задаваемые вопросы</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Как купить FiFiCoin?</h4>
                    <p className="text-gray-600 text-sm">Зарегистрируйтесь на платформе и выберите удобный способ покупки.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Безопасно ли хранить токены?</h4>
                    <p className="text-gray-600 text-sm">Да, мы используем самые современные технологии защиты.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Как получить мем-карты?</h4>
                    <p className="text-gray-600 text-sm">Участвуйте в ивентах или покупайте за FiFiCoin.</p>
                  </div>
                </div>
                <Button variant="outline" className="w-full mt-4">
                  Все вопросы
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-meme-orange to-meme-yellow rounded-full"></div>
                <span className="text-xl font-bold font-['Comic_Sans_MS',cursive]">ФиФи Банк</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Инновационная платформа для коллекционирования мем-карт и управления FiFiCoin токенами.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Быстрые ссылки</h4>
              <div className="space-y-2 text-sm">
                <button onClick={() => scrollToSection('about')} className="block text-gray-400 hover:text-white transition-colors">О нас</button>
                <button onClick={() => scrollToSection('fificoin')} className="block text-gray-400 hover:text-white transition-colors">FiFiCoin</button>
                <button onClick={() => scrollToSection('platform')} className="block text-gray-400 hover:text-white transition-colors">Платформа</button>
                <button onClick={() => scrollToSection('news')} className="block text-gray-400 hover:text-white transition-colors">Новости</button>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4">Поддержка</h4>
              <div className="space-y-2 text-sm">
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">FAQ</a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">Техподдержка</a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">Документация</a>
                <button onClick={() => scrollToSection('contact')} className="block text-gray-400 hover:text-white transition-colors">Контакты</button>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4">Социальные сети</h4>
              <div className="flex space-x-4">
                <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                  <Icon name="MessageCircle" size={16} />
                </Button>
                <Button size="sm" className="bg-gray-700 hover:bg-gray-600">
                  <Icon name="Twitter" size={16} />
                </Button>
                <Button size="sm" className="bg-indigo-600 hover:bg-indigo-700">
                  <Icon name="Users" size={16} />
                </Button>
              </div>
              <p className="text-gray-400 text-xs mt-4">
                Присоединяйтесь к нашему сообществу в Telegram!
              </p>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
              <div>
                © 2024 ФиФи Банк. Все права защищены.
              </div>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a>
                <a href="#" className="hover:text-white transition-colors">Пользовательское соглашение</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;