import { useState } from "react";
import Icon from "@/components/ui/icon";

const FileExplorer = () => {
  const [currentPath, setCurrentPath] = useState("Этот компьютер");

  const folders = [
    { name: "Документы", icon: "FileText", size: "-", date: "25.10.2025" },
    { name: "Загрузки", icon: "Download", size: "-", date: "24.10.2025" },
    { name: "Изображения", icon: "Image", size: "-", date: "23.10.2025" },
    { name: "Музыка", icon: "Music", size: "-", date: "22.10.2025" },
    { name: "Видео", icon: "Video", size: "-", date: "21.10.2025" },
    { name: "Рабочий стол", icon: "Monitor", size: "-", date: "20.10.2025" },
  ];

  const files = [
    { name: "Отчет.docx", icon: "FileText", size: "45 КБ", date: "25.10.2025" },
    { name: "Презентация.pptx", icon: "FileText", size: "2.3 МБ", date: "24.10.2025" },
    { name: "Фото.jpg", icon: "Image", size: "1.8 МБ", date: "23.10.2025" },
  ];

  return (
    <div className="flex h-full bg-white">
      <div className="w-48 bg-gray-50 border-r border-gray-200 p-2">
        <div className="space-y-1">
          <button className="w-full flex items-center gap-2 px-3 py-2 rounded hover:bg-gray-200 transition-colors text-sm">
            <Icon name="HardDrive" size={16} className="text-gray-600" />
            <span className="text-gray-800">Этот компьютер</span>
          </button>
          <button className="w-full flex items-center gap-2 px-3 py-2 rounded hover:bg-gray-200 transition-colors text-sm">
            <Icon name="Monitor" size={16} className="text-gray-600" />
            <span className="text-gray-800">Рабочий стол</span>
          </button>
          <button className="w-full flex items-center gap-2 px-3 py-2 rounded hover:bg-gray-200 transition-colors text-sm">
            <Icon name="FileText" size={16} className="text-gray-600" />
            <span className="text-gray-800">Документы</span>
          </button>
          <button className="w-full flex items-center gap-2 px-3 py-2 rounded hover:bg-gray-200 transition-colors text-sm">
            <Icon name="Download" size={16} className="text-gray-600" />
            <span className="text-gray-800">Загрузки</span>
          </button>
          <button className="w-full flex items-center gap-2 px-3 py-2 rounded hover:bg-gray-200 transition-colors text-sm">
            <Icon name="Image" size={16} className="text-gray-600" />
            <span className="text-gray-800">Изображения</span>
          </button>
        </div>
      </div>

      <div className="flex-1 flex flex-col">
        <div className="h-12 bg-white border-b border-gray-200 flex items-center px-4 gap-2">
          <button className="w-8 h-8 flex items-center justify-center hover:bg-gray-200 rounded transition-colors">
            <Icon name="ChevronLeft" size={16} className="text-gray-600" />
          </button>
          <button className="w-8 h-8 flex items-center justify-center hover:bg-gray-200 rounded transition-colors">
            <Icon name="ChevronRight" size={16} className="text-gray-600" />
          </button>
          <button className="w-8 h-8 flex items-center justify-center hover:bg-gray-200 rounded transition-colors">
            <Icon name="ChevronUp" size={16} className="text-gray-600" />
          </button>
          <div className="flex-1 bg-gray-100 rounded px-3 py-1 text-sm text-gray-700">
            {currentPath}
          </div>
          <button className="w-8 h-8 flex items-center justify-center hover:bg-gray-200 rounded transition-colors">
            <Icon name="RotateCw" size={16} className="text-gray-600" />
          </button>
        </div>

        <div className="flex-1 overflow-auto p-4">
          <div className="mb-4">
            <h3 className="text-sm font-semibold text-gray-600 mb-2">Папки</h3>
            <div className="grid grid-cols-4 gap-3">
              {folders.map((folder) => (
                <button
                  key={folder.name}
                  className="flex flex-col items-center p-3 rounded hover:bg-gray-100 transition-colors"
                  onDoubleClick={() => setCurrentPath(folder.name)}
                >
                  <Icon name={folder.icon} size={48} className="text-[#0078D4] mb-2" />
                  <span className="text-xs text-gray-800">{folder.name}</span>
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-600 mb-2">Файлы</h3>
            <div className="space-y-1">
              {files.map((file) => (
                <div
                  key={file.name}
                  className="flex items-center gap-3 px-3 py-2 rounded hover:bg-gray-100 transition-colors cursor-pointer"
                >
                  <Icon name={file.icon} size={24} className="text-gray-600" />
                  <span className="flex-1 text-sm text-gray-800">{file.name}</span>
                  <span className="text-xs text-gray-500">{file.size}</span>
                  <span className="text-xs text-gray-500">{file.date}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FileExplorer;
