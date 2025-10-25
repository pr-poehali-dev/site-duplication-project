import { useState } from "react";
import Icon from "@/components/ui/icon";
import { Textarea } from "@/components/ui/textarea";

const Notepad = () => {
  const [text, setText] = useState("");

  return (
    <div className="flex flex-col h-full bg-white">
      <div className="h-10 bg-gray-50 border-b border-gray-200 flex items-center px-2 gap-4">
        <div className="flex items-center gap-1">
          <button className="px-3 py-1 text-sm hover:bg-gray-200 rounded transition-colors">
            Файл
          </button>
          <button className="px-3 py-1 text-sm hover:bg-gray-200 rounded transition-colors">
            Правка
          </button>
          <button className="px-3 py-1 text-sm hover:bg-gray-200 rounded transition-colors">
            Формат
          </button>
          <button className="px-3 py-1 text-sm hover:bg-gray-200 rounded transition-colors">
            Вид
          </button>
          <button className="px-3 py-1 text-sm hover:bg-gray-200 rounded transition-colors">
            Справка
          </button>
        </div>
      </div>

      <div className="h-10 bg-white border-b border-gray-200 flex items-center px-2 gap-1">
        <button className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded transition-colors" title="Создать">
          <Icon name="FilePlus" size={16} className="text-gray-600" />
        </button>
        <button className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded transition-colors" title="Открыть">
          <Icon name="FolderOpen" size={16} className="text-gray-600" />
        </button>
        <button className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded transition-colors" title="Сохранить">
          <Icon name="Save" size={16} className="text-gray-600" />
        </button>
        <div className="w-px h-6 bg-gray-300 mx-1" />
        <button className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded transition-colors" title="Вырезать">
          <Icon name="Scissors" size={16} className="text-gray-600" />
        </button>
        <button className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded transition-colors" title="Копировать">
          <Icon name="Copy" size={16} className="text-gray-600" />
        </button>
        <button className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded transition-colors" title="Вставить">
          <Icon name="Clipboard" size={16} className="text-gray-600" />
        </button>
        <div className="w-px h-6 bg-gray-300 mx-1" />
        <button className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded transition-colors" title="Отменить">
          <Icon name="Undo" size={16} className="text-gray-600" />
        </button>
        <button className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded transition-colors" title="Повторить">
          <Icon name="Redo" size={16} className="text-gray-600" />
        </button>
      </div>

      <div className="flex-1 p-2">
        <Textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Начните вводить текст..."
          className="w-full h-full resize-none border-0 focus-visible:ring-0 font-mono text-sm"
        />
      </div>

      <div className="h-6 bg-gray-50 border-t border-gray-200 flex items-center justify-between px-3 text-xs text-gray-600">
        <span>Строка 1, столбец 1</span>
        <span>100%</span>
        <span>Windows (CRLF)</span>
        <span>UTF-8</span>
      </div>
    </div>
  );
};

export default Notepad;
