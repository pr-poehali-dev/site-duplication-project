import { useState, useRef, useEffect } from "react";
import Icon from "@/components/ui/icon";

interface WindowProps {
  id: string;
  title: string;
  icon: string;
  isMinimized: boolean;
  isMaximized: boolean;
  zIndex: number;
  content: React.ReactNode;
  onClose: () => void;
  onMinimize: () => void;
  onMaximize: () => void;
  onFocus: () => void;
}

const Window = ({
  title,
  icon,
  isMinimized,
  isMaximized,
  zIndex,
  content,
  onClose,
  onMinimize,
  onMaximize,
  onFocus,
}: WindowProps) => {
  const [position, setPosition] = useState({ x: 100, y: 50 });
  const [isDragging, setIsDragging] = useState(false);
  const dragOffset = useRef({ x: 0, y: 0 });

  useEffect(() => {
    setPosition({
      x: Math.random() * 200 + 50,
      y: Math.random() * 100 + 50,
    });
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (isMaximized) return;
    setIsDragging(true);
    dragOffset.current = {
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    };
    onFocus();
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging && !isMaximized) {
        setPosition({
          x: e.clientX - dragOffset.current.x,
          y: e.clientY - dragOffset.current.y,
        });
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, isMaximized]);

  if (isMinimized) return null;

  const windowStyle = isMaximized
    ? { top: 0, left: 0, right: 0, bottom: 48, width: "100%", height: "calc(100% - 48px)" }
    : { top: position.y, left: position.x, width: 800, height: 600 };

  return (
    <div
      className="absolute bg-white rounded-lg shadow-2xl flex flex-col overflow-hidden animate-scale-in"
      style={{ ...windowStyle, zIndex }}
      onClick={onFocus}
    >
      <div
        className="h-10 bg-[#f3f3f3] border-b border-gray-200 flex items-center justify-between px-3 cursor-move select-none"
        onMouseDown={handleMouseDown}
      >
        <div className="flex items-center gap-2">
          <span className="text-lg">{icon}</span>
          <span className="text-sm font-medium text-gray-800">{title}</span>
        </div>
        <div className="flex items-center gap-1">
          <button
            onClick={onMinimize}
            className="w-8 h-8 flex items-center justify-center hover:bg-gray-200 rounded transition-colors"
          >
            <Icon name="Minus" size={14} className="text-gray-700" />
          </button>
          <button
            onClick={onMaximize}
            className="w-8 h-8 flex items-center justify-center hover:bg-gray-200 rounded transition-colors"
          >
            <Icon name="Square" size={14} className="text-gray-700" />
          </button>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center hover:bg-red-500 hover:text-white rounded transition-colors"
          >
            <Icon name="X" size={14} />
          </button>
        </div>
      </div>
      <div className="flex-1 overflow-auto bg-white">{content}</div>
    </div>
  );
};

export default Window;
