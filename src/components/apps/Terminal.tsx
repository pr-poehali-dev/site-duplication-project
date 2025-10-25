import { useState, useRef, useEffect } from "react";
import Icon from "@/components/ui/icon";

const Terminal = () => {
  const [history, setHistory] = useState<string[]>([
    "SunTimesOS Terminal v1.0.0",
    "Введите 'help' для списка команд",
    "",
  ]);
  const [input, setInput] = useState("");
  const terminalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  const commands: Record<string, () => string[]> = {
    help: () => [
      "Доступные команды:",
      "  help     - показать список команд",
      "  clear    - очистить терминал",
      "  date     - показать текущую дату и время",
      "  whoami   - показать информацию о пользователе",
      "  sysinfo  - информация о системе",
      "  echo     - вывести текст",
      "  ls       - список файлов",
      "  pwd      - текущая директория",
    ],
    clear: () => {
      setHistory([]);
      return [];
    },
    date: () => [new Date().toLocaleString("ru-RU")],
    whoami: () => ["Пользователь"],
    sysinfo: () => [
      "Операционная система: SunTimesOS Pro",
      "Версия: 1.0.0",
      "Ядро: WebCore 2025",
      "Архитектура: x64",
      "ОЗУ: 16 ГБ",
      "Процессор: WebCore i9",
    ],
    pwd: () => ["C:\\Users\\Пользователь"],
    ls: () => [
      "Документы/",
      "Загрузки/",
      "Изображения/",
      "Рабочий стол/",
      "Видео/",
      "Музыка/",
    ],
  };

  const executeCommand = (cmd: string) => {
    const trimmed = cmd.trim();
    if (!trimmed) return;

    const newHistory = [...history, `> ${trimmed}`];

    const parts = trimmed.split(" ");
    const command = parts[0].toLowerCase();

    if (command === "echo") {
      newHistory.push(parts.slice(1).join(" "));
    } else if (commands[command]) {
      const output = commands[command]();
      newHistory.push(...output);
    } else {
      newHistory.push(`Команда не найдена: ${command}`);
      newHistory.push("Введите 'help' для списка команд");
    }

    newHistory.push("");
    setHistory(newHistory);
    setInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      executeCommand(input);
    }
  };

  return (
    <div className="flex flex-col h-full bg-[#0C0C0C] text-[#CCCCCC] font-mono">
      <div className="h-10 bg-[#1E1E1E] border-b border-[#2D2D2D] flex items-center px-3 gap-2">
        <Icon name="Terminal" size={16} className="text-gray-400" />
        <span className="text-sm text-gray-300">Terminal</span>
        <div className="flex-1" />
        <button className="w-6 h-6 flex items-center justify-center hover:bg-white/10 rounded transition-colors">
          <Icon name="Settings" size={14} className="text-gray-400" />
        </button>
      </div>

      <div
        ref={terminalRef}
        onClick={() => inputRef.current?.focus()}
        className="flex-1 overflow-auto p-4 cursor-text"
      >
        {history.map((line, index) => (
          <div key={index} className="leading-6">
            {line}
          </div>
        ))}
        <div className="flex items-center gap-2">
          <span className="text-[#4EC9B0]">C:\Users\Пользователь&gt;</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent outline-none caret-white"
            autoFocus
          />
        </div>
      </div>
    </div>
  );
};

export default Terminal;
