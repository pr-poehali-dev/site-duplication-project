import { useState } from "react";
import Icon from "@/components/ui/icon";
import { Input } from "@/components/ui/input";

interface StartMenuProps {
  onClose: () => void;
  onOpenApp: (appName: string) => void;
}

const StartMenu = ({ onClose, onOpenApp }: StartMenuProps) => {
  const [searchQuery, setSearchQuery] = useState("");

  const pinnedApps = [
    { name: "Microsoft Edge", icon: "Globe", app: "browser" },
    { name: "Проводник", icon: "FolderOpen", app: "explorer" },
    { name: "Блокнот", icon: "FileText", app: "notepad" },
    { name: "Калькулятор", icon: "Calculator", app: "calculator" },
    { name: "Настройки", icon: "Settings", app: "settings" },
    { name: "Календарь", icon: "Calendar", app: "calendar" },
    { name: "Фотографии", icon: "Image", app: "photos" },
    { name: "Почта", icon: "Mail", app: "mail" },
    { name: "Microsoft Store", icon: "ShoppingBag", app: "store" },
    { name: "Терминал", icon: "Terminal", app: "terminal" },
    { name: "Paint", icon: "Paintbrush", app: "paint" },
    { name: "Камера", icon: "Camera", app: "camera" },
  ];

  const filteredApps = pinnedApps.filter((app) =>
    app.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <div
        className="fixed inset-0 z-40"
        onClick={onClose}
      />
      <div className="fixed bottom-14 left-1/2 -translate-x-1/2 w-[600px] h-[680px] bg-[#f3f3f3]/95 backdrop-blur-2xl rounded-lg shadow-2xl z-50 animate-scale-in border border-white/20">
        <div className="p-6 flex flex-col h-full">
          <div className="mb-6">
            <Input
              type="text"
              placeholder="Введите запрос для поиска"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border-gray-300 text-sm h-10"
            />
          </div>

          <div className="mb-4">
            <h3 className="text-xs font-semibold text-gray-600 mb-3">
              Закреплено
            </h3>
            <div className="grid grid-cols-4 gap-3">
              {filteredApps.map((app) => (
                <button
                  key={app.app}
                  onClick={() => onOpenApp(app.app)}
                  className="flex flex-col items-center p-3 rounded-lg hover:bg-white/50 transition-colors group"
                >
                  <div className="w-12 h-12 flex items-center justify-center mb-2 text-[#0078D4]">
                    <Icon name={app.icon} size={32} />
                  </div>
                  <span className="text-xs text-center text-gray-800">
                    {app.name}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="mt-auto pt-4 border-t border-gray-300">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#0078D4] flex items-center justify-center text-white font-semibold">
                  П
                </div>
                <span className="text-sm font-medium text-gray-800">
                  Пользователь
                </span>
              </div>
              <button className="w-10 h-10 flex items-center justify-center hover:bg-white/50 rounded transition-colors">
                <Icon name="Power" size={20} className="text-gray-700" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StartMenu;
