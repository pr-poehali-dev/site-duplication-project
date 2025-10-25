import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Store = () => {
  const featuredApps = [
    { name: "Visual Studio Code", category: "Разработка", icon: "Code2", color: "from-blue-500 to-cyan-500", rating: 4.8 },
    { name: "Spotify", category: "Музыка", icon: "Music", color: "from-green-500 to-emerald-500", rating: 4.7 },
    { name: "Figma", category: "Дизайн", icon: "Palette", color: "from-purple-500 to-pink-500", rating: 4.9 },
    { name: "Discord", category: "Общение", icon: "MessageSquare", color: "from-indigo-500 to-blue-500", rating: 4.6 },
  ];

  const categories = [
    { name: "Производительность", icon: "Briefcase", count: 124 },
    { name: "Развлечения", icon: "Gamepad2", count: 89 },
    { name: "Образование", icon: "GraduationCap", count: 67 },
    { name: "Фото и видео", icon: "Camera", count: 103 },
    { name: "Социальные сети", icon: "Users", count: 45 },
    { name: "Инструменты", icon: "Wrench", count: 156 },
  ];

  const topApps = [
    { name: "Chrome", category: "Браузеры", downloads: "10M+", icon: "Globe" },
    { name: "Telegram", category: "Мессенджеры", downloads: "5M+", icon: "Send" },
    { name: "Notion", category: "Заметки", downloads: "3M+", icon: "FileText" },
    { name: "Zoom", category: "Видеосвязь", downloads: "8M+", icon: "Video" },
  ];

  return (
    <div className="flex flex-col h-full bg-white">
      <div className="h-14 bg-gradient-to-r from-[#0078D4] to-[#00BCF2] flex items-center px-6 gap-6">
        <div className="flex items-center gap-2 text-white">
          <Icon name="ShoppingBag" size={24} />
          <span className="text-lg font-semibold">SunTimes Store</span>
        </div>
        <div className="flex-1 max-w-xl">
          <Input
            type="text"
            placeholder="Поиск приложений..."
            className="w-full bg-white/20 border-white/30 text-white placeholder:text-white/70"
          />
        </div>
        <button className="text-white hover:bg-white/20 rounded px-3 py-1.5 transition-colors text-sm">
          Библиотека
        </button>
      </div>

      <div className="flex-1 overflow-auto">
        <div className="bg-gradient-to-br from-[#0078D4] to-[#00BCF2] text-white px-6 py-12">
          <h1 className="text-4xl font-bold mb-3">Откройте для себя новые приложения</h1>
          <p className="text-lg text-white/90">Тысячи приложений для работы, творчества и развлечений</p>
        </div>

        <div className="p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Рекомендуем</h2>
          <div className="grid grid-cols-4 gap-4 mb-8">
            {featuredApps.map((app) => (
              <div
                key={app.name}
                className="border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-shadow cursor-pointer"
              >
                <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${app.color} flex items-center justify-center mb-3`}>
                  <Icon name={app.icon} size={32} className="text-white" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-1">{app.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{app.category}</p>
                <div className="flex items-center gap-1 mb-3">
                  <Icon name="Star" size={14} className="text-yellow-400 fill-yellow-400" />
                  <span className="text-sm font-medium text-gray-700">{app.rating}</span>
                </div>
                <Button className="w-full bg-[#0078D4] hover:bg-[#0063B1] text-sm">
                  Установить
                </Button>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Категории</h2>
          <div className="grid grid-cols-3 gap-3 mb-8">
            {categories.map((cat) => (
              <button
                key={cat.name}
                className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
                  <Icon name={cat.icon} size={24} className="text-gray-600" />
                </div>
                <div className="text-left">
                  <div className="font-semibold text-gray-800">{cat.name}</div>
                  <div className="text-sm text-gray-600">{cat.count} приложений</div>
                </div>
              </button>
            ))}
          </div>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Топ приложений</h2>
          <div className="space-y-3">
            {topApps.map((app, index) => (
              <div
                key={app.name}
                className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
              >
                <div className="text-2xl font-bold text-gray-400 w-8">{index + 1}</div>
                <div className="w-12 h-12 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg flex items-center justify-center">
                  <Icon name={app.icon} size={24} className="text-gray-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-800">{app.name}</h3>
                  <p className="text-sm text-gray-600">{app.category}</p>
                </div>
                <div className="text-sm text-gray-500">{app.downloads}</div>
                <Button size="sm" className="bg-[#0078D4] hover:bg-[#0063B1]">
                  Установить
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Store;
