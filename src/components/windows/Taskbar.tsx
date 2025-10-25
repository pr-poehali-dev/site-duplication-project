import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";
import { WindowState } from "@/pages/Index";

interface TaskbarProps {
  onStartClick: () => void;
  windows: WindowState[];
  onWindowClick: (id: string) => void;
}

const Taskbar = ({ onStartClick, windows, onWindowClick }: TaskbarProps) => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("ru-RU", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("ru-RU", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  };

  return (
    <div className="absolute bottom-0 left-0 right-0 h-12 bg-[#f3f3f3]/95 backdrop-blur-xl border-t border-white/20 flex items-center px-2 gap-2">
      <button
        onClick={onStartClick}
        className="w-12 h-10 flex items-center justify-center hover:bg-white/20 rounded transition-colors"
      >
        <Icon name="Grid3x3" size={20} className="text-[#0078D4]" />
      </button>

      <div className="w-px h-8 bg-gray-300" />

      <div className="flex gap-1 flex-1">
        {windows.map((window) => (
          <button
            key={window.id}
            onClick={() => onWindowClick(window.id)}
            className={`h-10 px-3 flex items-center gap-2 rounded transition-colors ${
              window.isMinimized
                ? "bg-transparent hover:bg-white/20"
                : "bg-white/30 border-b-2 border-[#0078D4]"
            }`}
          >
            <span className="text-lg">{window.icon}</span>
            <span className="text-sm text-gray-800 max-w-[150px] truncate">
              {window.title}
            </span>
          </button>
        ))}
      </div>

      <div className="flex items-center gap-3 pr-2">
        <button className="w-8 h-8 flex items-center justify-center hover:bg-white/20 rounded transition-colors">
          <Icon name="ChevronUp" size={16} className="text-gray-700" />
        </button>

        <button className="w-8 h-8 flex items-center justify-center hover:bg-white/20 rounded transition-colors">
          <Icon name="Wifi" size={16} className="text-gray-700" />
        </button>

        <button className="w-8 h-8 flex items-center justify-center hover:bg-white/20 rounded transition-colors">
          <Icon name="Volume2" size={16} className="text-gray-700" />
        </button>

        <button className="w-8 h-8 flex items-center justify-center hover:bg-white/20 rounded transition-colors">
          <Icon name="Battery" size={16} className="text-gray-700" />
        </button>

        <div className="text-right text-xs text-gray-700 px-2">
          <div className="font-medium">{formatTime(currentTime)}</div>
          <div className="text-[10px]">{formatDate(currentTime)}</div>
        </div>

        <button className="w-8 h-8 flex items-center justify-center hover:bg-white/20 rounded transition-colors">
          <Icon name="Bell" size={16} className="text-gray-700" />
        </button>
      </div>
    </div>
  );
};

export default Taskbar;
