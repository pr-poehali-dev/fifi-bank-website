import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-meme-blue via-meme-mint to-meme-purple">
      {/* Hero Section */}
      <div className="relative min-h-screen flex flex-col items-center justify-center text-center px-4">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-16 h-16 bg-meme-yellow rounded-full opacity-20 animate-float"></div>
          <div className="absolute top-3/4 right-1/4 w-12 h-12 bg-meme-orange rounded-full opacity-20 animate-float" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-1/4 left-1/3 w-8 h-8 bg-white rounded-full opacity-30 animate-float" style={{animationDelay: '2s'}}></div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 max-w-4xl mx-auto">
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

          {/* CTA Button */}
          <Button 
            className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-4 rounded-full font-bold shadow-lg transform hover:scale-105 transition-all duration-200"
          >
            <Icon name="Send" size={20} className="mr-2" />
            Вступить в Telegram
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={32} className="text-white/70" />
        </div>
      </div>

      {/* Disclaimer Section */}
      <div className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 border-2 border-meme-orange shadow-xl">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-meme-orange/10 rounded-full">
                <Icon name="AlertTriangle" size={24} className="text-meme-orange" />
              </div>
              <h2 className="text-3xl font-bold text-gray-800 font-['Comic_Sans_MS',cursive]">
                Важная информация
              </h2>
            </div>
            
            <div className="text-lg text-gray-700 leading-relaxed space-y-4">
              <p>
                <strong>«ФиФи Банк»</strong> — это яркая и мемная цифровая платформа, созданная для фанового коллекционирования и весёлого взаимодействия с уникальной внутренней «валютой» — мем-монетой <span className="text-meme-orange font-bold">FiFiCoin</span> и анимационными мем-картами.
              </p>
              
              <p>
                Наш проект <strong>не является финансовым инвестиционным сервисом</strong> и не предоставляет возможности вывода средств или заработка на криптовалюте.
              </p>
              
              <p>
                Все покупки FiFiCoin и мем-карт — это способ поддержать развитие сообщества, получить эксклюзивный доступ к мем-ивентам, челленджам и коллекционным бонусам внутри платформы.
              </p>
            </div>

            <div className="mt-8 p-4 bg-gradient-to-r from-meme-mint/20 to-meme-blue/20 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Icon name="Users" size={20} className="text-meme-blue" />
                <span className="font-bold text-meme-blue">Присоединяйтесь к сообществу!</span>
              </div>
              <p className="text-gray-700">
                Подключайтесь к нашему Telegram-каналу для получения новостей, участия в ивентах и общения с другими коллекционерами.
              </p>
            </div>
          </Card>
        </div>
      </div>

      {/* Meme Cards Section */}
      <div className="py-16 px-4 bg-gradient-to-r from-meme-purple/20 to-meme-yellow/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 font-['Comic_Sans_MS',cursive]">
              Коллекция Мем-Карт
            </h2>
            <p className="text-xl text-gray-700">
              Собирайте уникальные анимированные карты и участвуйте в эксклюзивных ивентах
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
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

            {/* Card 2 */}
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

            {/* Card 3 */}
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

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
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
      </div>

      {/* Footer CTA */}
      <div className="py-16 px-4 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-['Comic_Sans_MS',cursive]">
            Готовы начать коллекционирование?
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Присоединяйтесь к ФиФи Банку уже сегодня и станьте частью мемного сообщества!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg">
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Telegram канал
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg">
              <Icon name="Users" size={20} className="mr-2" />
              Telegram группа
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;