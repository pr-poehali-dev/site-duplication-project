import { useState } from "react";
import Icon from "@/components/ui/icon";
import { Input } from "@/components/ui/input";

const Browser = () => {
  const [url, setUrl] = useState("https://www.suntimesos.com");

  return (
    <div className="flex flex-col h-full bg-white">
      <div className="h-10 bg-gray-50 border-b border-gray-200 flex items-center px-2 gap-2">
        <button className="w-8 h-8 flex items-center justify-center hover:bg-gray-200 rounded transition-colors">
          <Icon name="ChevronLeft" size={16} className="text-gray-600" />
        </button>
        <button className="w-8 h-8 flex items-center justify-center hover:bg-gray-200 rounded transition-colors">
          <Icon name="ChevronRight" size={16} className="text-gray-600" />
        </button>
        <button className="w-8 h-8 flex items-center justify-center hover:bg-gray-200 rounded transition-colors">
          <Icon name="RotateCw" size={16} className="text-gray-600" />
        </button>
        <button className="w-8 h-8 flex items-center justify-center hover:bg-gray-200 rounded transition-colors">
          <Icon name="Home" size={16} className="text-gray-600" />
        </button>

        <div className="flex-1 flex items-center gap-2 bg-white border border-gray-300 rounded px-3 py-1">
          <Icon name="Lock" size={14} className="text-green-600" />
          <Input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="flex-1 border-0 p-0 h-6 text-sm focus-visible:ring-0"
          />
          <Icon name="Star" size={14} className="text-gray-400" />
        </div>

        <button className="w-8 h-8 flex items-center justify-center hover:bg-gray-200 rounded transition-colors">
          <Icon name="MoreHorizontal" size={16} className="text-gray-600" />
        </button>
      </div>

      <div className="h-10 bg-white border-b border-gray-200 flex items-center px-2 gap-1">
        <button className="px-4 py-1 bg-gray-100 rounded-t text-sm flex items-center gap-2 border-t-2 border-[#FF8C00]">
          <span>SunTimesOS</span>
          <Icon name="X" size={12} className="text-gray-600 hover:text-gray-800" />
        </button>
        <button className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded transition-colors">
          <Icon name="Plus" size={16} className="text-gray-600" />
        </button>
      </div>

      <div className="flex-1 bg-gradient-to-br from-white to-gray-50 flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="w-24 h-24 mx-auto bg-gradient-to-br from-[#FF8C00] to-[#FFA500] rounded-full flex items-center justify-center">
            <Icon name="Sun" size={48} className="text-white" />
          </div>
          <h2 className="text-2xl font-semibold text-gray-800">SunTimes Browser</h2>
          <p className="text-gray-600">Быстрый и безопасный браузер от SunTimesOS</p>
          <div className="flex gap-2 justify-center mt-6">
            <button className="px-4 py-2 bg-[#FF8C00] text-white rounded hover:bg-[#FF7F00] transition-colors text-sm">
              Начать работу
            </button>
            <button className="px-4 py-2 bg-white border border-gray-300 text-gray-800 rounded hover:bg-gray-50 transition-colors text-sm">
              Настройки
            </button>
          </div>
        </div>
      </div>

      <div className="h-8 bg-gray-50 border-t border-gray-200 flex items-center justify-between px-3 text-xs text-gray-600">
        <span>Готово</span>
        <span>100%</span>
      </div>
    </div>
  );
};

export default Browser;