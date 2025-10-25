import { useState } from "react";
import Icon from "@/components/ui/icon";

const Photos = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);
  const [viewMode, setViewMode] = useState<"grid" | "detail">("grid");

  const photos = [
    { id: 1, name: "Закат.jpg", date: "25.10.2025", size: "2.4 МБ", color: "from-orange-400 to-pink-500" },
    { id: 2, name: "Горы.jpg", date: "24.10.2025", size: "3.1 МБ", color: "from-blue-400 to-cyan-500" },
    { id: 3, name: "Море.jpg", date: "23.10.2025", size: "2.8 МБ", color: "from-cyan-400 to-blue-500" },
    { id: 4, name: "Лес.jpg", date: "22.10.2025", size: "2.6 МБ", color: "from-green-400 to-emerald-500" },
    { id: 5, name: "Город.jpg", date: "21.10.2025", size: "1.9 МБ", color: "from-gray-400 to-slate-500" },
    { id: 6, name: "Пляж.jpg", date: "20.10.2025", size: "2.2 МБ", color: "from-yellow-400 to-orange-500" },
    { id: 7, name: "Небо.jpg", date: "19.10.2025", size: "1.5 МБ", color: "from-purple-400 to-pink-500" },
    { id: 8, name: "Зима.jpg", date: "18.10.2025", size: "3.3 МБ", color: "from-blue-200 to-cyan-300" },
  ];

  const selectedPhotoData = photos.find(p => p.id === selectedPhoto);

  const openPhoto = (id: number) => {
    setSelectedPhoto(id);
    setViewMode("detail");
  };

  return (
    <div className="flex flex-col h-full bg-white">
      <div className="h-12 bg-gray-50 border-b border-gray-200 flex items-center px-4 justify-between">
        <div className="flex items-center gap-2">
          {viewMode === "detail" && (
            <button
              onClick={() => setViewMode("grid")}
              className="w-8 h-8 flex items-center justify-center hover:bg-gray-200 rounded transition-colors"
            >
              <Icon name="ChevronLeft" size={16} className="text-gray-600" />
            </button>
          )}
          <h2 className="text-sm font-semibold text-gray-800">Фотографии</h2>
        </div>
        <div className="flex items-center gap-1">
          <button className="w-8 h-8 flex items-center justify-center hover:bg-gray-200 rounded transition-colors">
            <Icon name="Upload" size={16} className="text-gray-600" />
          </button>
          <button className="w-8 h-8 flex items-center justify-center hover:bg-gray-200 rounded transition-colors">
            <Icon name="Share2" size={16} className="text-gray-600" />
          </button>
          <button className="w-8 h-8 flex items-center justify-center hover:bg-gray-200 rounded transition-colors">
            <Icon name="MoreHorizontal" size={16} className="text-gray-600" />
          </button>
        </div>
      </div>

      {viewMode === "grid" ? (
        <div className="flex-1 overflow-auto p-6">
          <div className="mb-6">
            <h3 className="text-sm font-semibold text-gray-600 mb-3">
              Недавние фото ({photos.length})
            </h3>
            <div className="grid grid-cols-4 gap-4">
              {photos.map((photo) => (
                <button
                  key={photo.id}
                  onClick={() => openPhoto(photo.id)}
                  className="aspect-square rounded-lg overflow-hidden hover:scale-105 transition-transform cursor-pointer group relative"
                >
                  <div className={`w-full h-full bg-gradient-to-br ${photo.color} flex items-center justify-center`}>
                    <Icon name="Image" size={48} className="text-white/50" />
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                  <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="text-white text-xs font-medium truncate">
                      {photo.name}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="flex-1 flex">
          <div className="flex-1 bg-gray-900 flex items-center justify-center">
            {selectedPhotoData && (
              <div className={`w-full h-full max-w-4xl max-h-[600px] bg-gradient-to-br ${selectedPhotoData.color} rounded-lg flex items-center justify-center m-8`}>
                <Icon name="Image" size={120} className="text-white/30" />
              </div>
            )}
          </div>
          <div className="w-80 bg-white border-l border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Сведения</h3>
            {selectedPhotoData && (
              <div className="space-y-4">
                <div className={`w-full aspect-square rounded-lg bg-gradient-to-br ${selectedPhotoData.color} flex items-center justify-center mb-4`}>
                  <Icon name="Image" size={64} className="text-white/40" />
                </div>
                <div className="space-y-2 text-sm">
                  <div>
                    <div className="text-gray-600 text-xs">Имя файла</div>
                    <div className="font-medium text-gray-800">{selectedPhotoData.name}</div>
                  </div>
                  <div>
                    <div className="text-gray-600 text-xs">Дата создания</div>
                    <div className="font-medium text-gray-800">{selectedPhotoData.date}</div>
                  </div>
                  <div>
                    <div className="text-gray-600 text-xs">Размер файла</div>
                    <div className="font-medium text-gray-800">{selectedPhotoData.size}</div>
                  </div>
                  <div>
                    <div className="text-gray-600 text-xs">Разрешение</div>
                    <div className="font-medium text-gray-800">1920 × 1080</div>
                  </div>
                </div>
                <div className="pt-4 space-y-2">
                  <button className="w-full flex items-center gap-2 px-3 py-2 text-sm hover:bg-gray-100 rounded transition-colors">
                    <Icon name="Share2" size={16} />
                    Поделиться
                  </button>
                  <button className="w-full flex items-center gap-2 px-3 py-2 text-sm hover:bg-gray-100 rounded transition-colors">
                    <Icon name="Download" size={16} />
                    Скачать
                  </button>
                  <button className="w-full flex items-center gap-2 px-3 py-2 text-sm hover:bg-red-50 text-red-600 rounded transition-colors">
                    <Icon name="Trash2" size={16} />
                    Удалить
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Photos;
