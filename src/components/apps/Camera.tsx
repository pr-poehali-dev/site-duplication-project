import { useState } from "react";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

const Camera = () => {
  const [mode, setMode] = useState<"photo" | "video">("photo");
  const [isRecording, setIsRecording] = useState(false);
  const [photos, setPhotos] = useState<number[]>([]);

  const takePhoto = () => {
    setPhotos([...photos, Date.now()]);
  };

  const toggleRecording = () => {
    setIsRecording(!isRecording);
  };

  return (
    <div className="flex flex-col h-full bg-black">
      <div className="h-12 bg-gray-900 border-b border-gray-800 flex items-center px-4 justify-between">
        <div className="flex items-center gap-2 text-white">
          <Icon name="Camera" size={20} />
          <span className="text-sm font-semibold">Камера</span>
        </div>
        <div className="flex gap-1">
          <button className="w-8 h-8 flex items-center justify-center hover:bg-white/10 rounded transition-colors">
            <Icon name="Settings" size={16} className="text-white" />
          </button>
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center animate-pulse">
              <Icon name="Camera" size={64} className="text-white" />
            </div>
            <p className="text-white/60 text-sm">
              Камера в режиме демонстрации
            </p>
          </div>
        </div>

        <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm rounded-lg px-3 py-1.5 flex items-center gap-2">
          <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
          <span className="text-white text-sm">
            {mode === "photo" ? "Фото" : isRecording ? "Запись..." : "Видео"}
          </span>
        </div>

        {mode === "video" && isRecording && (
          <div className="absolute top-4 right-4 bg-red-500 rounded-lg px-3 py-1.5">
            <span className="text-white text-sm font-mono">00:00</span>
          </div>
        )}
      </div>

      <div className="h-24 bg-gray-900 border-t border-gray-800 flex items-center justify-center gap-8">
        <div className="flex gap-2">
          <Button
            variant={mode === "photo" ? "default" : "ghost"}
            onClick={() => setMode("photo")}
            className="text-white"
          >
            <Icon name="Camera" size={16} className="mr-2" />
            Фото
          </Button>
          <Button
            variant={mode === "video" ? "default" : "ghost"}
            onClick={() => setMode("video")}
            className="text-white"
          >
            <Icon name="Video" size={16} className="mr-2" />
            Видео
          </Button>
        </div>

        {mode === "photo" ? (
          <button
            onClick={takePhoto}
            className="w-16 h-16 rounded-full bg-white border-4 border-gray-600 hover:scale-110 transition-transform active:scale-95"
          />
        ) : (
          <button
            onClick={toggleRecording}
            className={`w-16 h-16 rounded-full border-4 border-gray-600 hover:scale-110 transition-transform active:scale-95 ${
              isRecording ? "bg-red-500" : "bg-white"
            }`}
          />
        )}

        <button className="w-12 h-12 rounded-full bg-gray-800 border-2 border-gray-600 flex items-center justify-center hover:bg-gray-700 transition-colors">
          <Icon name="Image" size={20} className="text-white" />
          {photos.length > 0 && (
            <div className="absolute -top-1 -right-1 w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs">
              {photos.length}
            </div>
          )}
        </button>
      </div>
    </div>
  );
};

export default Camera;
