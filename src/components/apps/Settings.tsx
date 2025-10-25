import { useState } from "react";
import Icon from "@/components/ui/icon";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";

const Settings = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [volume, setVolume] = useState([75]);

  const settingsCategories = [
    { name: "Система", icon: "Monitor", active: true },
    { name: "Персонализация", icon: "Palette" },
    { name: "Сеть и Интернет", icon: "Wifi" },
    { name: "Учетные записи", icon: "User" },
    { name: "Конфиденциальность", icon: "Shield" },
    { name: "Обновление и безопасность", icon: "Download" },
  ];

  return (
    <div className="flex h-full bg-white">
      <div className="w-64 bg-gray-50 border-r border-gray-200 p-4">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Параметры</h2>
        <div className="space-y-1">
          {settingsCategories.map((category) => (
            <button
              key={category.name}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded transition-colors ${
                category.active
                  ? "bg-[#0078D4] text-white"
                  : "hover:bg-gray-200 text-gray-800"
              }`}
            >
              <Icon name={category.icon} size={20} />
              <span className="text-sm">{category.name}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 overflow-auto p-6">
        <h1 className="text-2xl font-semibold text-gray-800 mb-6">Система</h1>

        <div className="space-y-6">
          <div className="bg-white border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-gray-800 mb-4">Дисплей</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium text-sm">Темная тема</div>
                  <div className="text-xs text-gray-600">
                    Темный фон для снижения нагрузки на глаза
                  </div>
                </div>
                <Switch checked={darkMode} onCheckedChange={setDarkMode} />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium text-sm">Масштаб</div>
                  <div className="text-xs text-gray-600">100% (рекомендуется)</div>
                </div>
                <button className="text-sm text-[#0078D4] hover:underline">
                  Изменить
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-gray-800 mb-4">Звук</h3>
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="font-medium text-sm">Громкость</div>
                  <span className="text-sm text-gray-600">{volume[0]}%</span>
                </div>
                <Slider
                  value={volume}
                  onValueChange={setVolume}
                  max={100}
                  step={1}
                  className="w-full"
                />
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-gray-800 mb-4">Уведомления</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium text-sm">Включить уведомления</div>
                  <div className="text-xs text-gray-600">
                    Получать уведомления от приложений и системы
                  </div>
                </div>
                <Switch
                  checked={notifications}
                  onCheckedChange={setNotifications}
                />
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-gray-800 mb-4">Сведения о системе</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Операционная система:</span>
                <span className="font-medium">SunTimesOS Pro</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Версия:</span>
                <span className="font-medium">1.0.0</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Процессор:</span>
                <span className="font-medium">WebCore i9</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">ОЗУ:</span>
                <span className="font-medium">16 ГБ</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
