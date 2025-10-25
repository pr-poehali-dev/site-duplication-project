import { useState, useRef, useEffect } from "react";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

const Paint = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [color, setColor] = useState("#000000");
  const [brushSize, setBrushSize] = useState(5);
  const [tool, setTool] = useState<"brush" | "eraser" | "fill">("brush");

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }, []);

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement>) => {
    setIsDrawing(true);
    draw(e);
  };

  const stopDrawing = () => {
    setIsDrawing(false);
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.beginPath();
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawing && e.type !== "mousedown") return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    if (tool === "fill") {
      ctx.fillStyle = color;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      return;
    }

    ctx.lineWidth = brushSize;
    ctx.lineCap = "round";
    ctx.strokeStyle = tool === "eraser" ? "white" : color;

    ctx.lineTo(x, y);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x, y);
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  };

  const colors = [
    "#000000", "#FFFFFF", "#FF0000", "#00FF00", "#0000FF",
    "#FFFF00", "#FF00FF", "#00FFFF", "#FFA500", "#800080",
  ];

  return (
    <div className="flex flex-col h-full bg-white">
      <div className="h-10 bg-gray-50 border-b border-gray-200 flex items-center px-2 gap-1">
        <Button
          variant={tool === "brush" ? "default" : "ghost"}
          size="sm"
          onClick={() => setTool("brush")}
          className="h-8"
        >
          <Icon name="Paintbrush" size={16} className="mr-1" />
          Кисть
        </Button>
        <Button
          variant={tool === "eraser" ? "default" : "ghost"}
          size="sm"
          onClick={() => setTool("eraser")}
          className="h-8"
        >
          <Icon name="Eraser" size={16} className="mr-1" />
          Ластик
        </Button>
        <Button
          variant={tool === "fill" ? "default" : "ghost"}
          size="sm"
          onClick={() => setTool("fill")}
          className="h-8"
        >
          <Icon name="PaintBucket" size={16} className="mr-1" />
          Заливка
        </Button>
        <div className="w-px h-6 bg-gray-300 mx-1" />
        <Button variant="ghost" size="sm" onClick={clearCanvas} className="h-8">
          <Icon name="Trash2" size={16} className="mr-1" />
          Очистить
        </Button>
      </div>

      <div className="flex flex-1 overflow-hidden">
        <div className="w-16 bg-gray-50 border-r border-gray-200 p-2 flex flex-col gap-2">
          <div className="text-xs text-gray-600 mb-1">Цвет</div>
          <div className="grid grid-cols-2 gap-1">
            {colors.map((c) => (
              <button
                key={c}
                onClick={() => setColor(c)}
                className={`w-6 h-6 rounded border-2 transition-all ${
                  color === c ? "border-blue-500 scale-110" : "border-gray-300"
                }`}
                style={{ backgroundColor: c }}
              />
            ))}
          </div>
          <div className="mt-2">
            <input
              type="color"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              className="w-full h-8 rounded cursor-pointer"
            />
          </div>
          <div className="text-xs text-gray-600 mt-4 mb-1">Размер</div>
          <input
            type="range"
            min="1"
            max="20"
            value={brushSize}
            onChange={(e) => setBrushSize(Number(e.target.value))}
            className="w-full"
          />
          <div className="text-center text-xs text-gray-600">{brushSize}px</div>
        </div>

        <div className="flex-1 flex items-center justify-center bg-gray-100 p-4">
          <canvas
            ref={canvasRef}
            width={700}
            height={500}
            onMouseDown={startDrawing}
            onMouseMove={draw}
            onMouseUp={stopDrawing}
            onMouseLeave={stopDrawing}
            className="bg-white border border-gray-300 cursor-crosshair shadow-lg"
          />
        </div>
      </div>

      <div className="h-6 bg-gray-50 border-t border-gray-200 flex items-center justify-between px-3 text-xs text-gray-600">
        <span>Инструмент: {tool === "brush" ? "Кисть" : tool === "eraser" ? "Ластик" : "Заливка"}</span>
        <span>Размер: {brushSize}px</span>
      </div>
    </div>
  );
};

export default Paint;
