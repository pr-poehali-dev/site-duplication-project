import { useState } from "react";
import Desktop from "@/components/windows/Desktop";
import Taskbar from "@/components/windows/Taskbar";
import StartMenu from "@/components/windows/StartMenu";
import Window from "@/components/windows/Window";
import FileExplorer from "@/components/apps/FileExplorer";
import Browser from "@/components/apps/Browser";
import Notepad from "@/components/apps/Notepad";
import Calculator from "@/components/apps/Calculator";

export interface WindowState {
  id: string;
  title: string;
  icon: string;
  isMinimized: boolean;
  isMaximized: boolean;
  zIndex: number;
  content: React.ReactNode;
}

const Index = () => {
  const [startMenuOpen, setStartMenuOpen] = useState(false);
  const [windows, setWindows] = useState<WindowState[]>([]);
  const [nextZIndex, setNextZIndex] = useState(1);

  const openApp = (appName: string) => {
    const appConfigs: Record<string, Partial<WindowState>> = {
      explorer: { title: "Проводник", icon: "📁", content: <FileExplorer /> },
      browser: { title: "Microsoft Edge", icon: "🌐", content: <Browser /> },
      notepad: { title: "Блокнот", icon: "📝", content: <Notepad /> },
      calculator: { title: "Калькулятор", icon: "🔢", content: <Calculator /> },
    };

    const config = appConfigs[appName];
    if (config) {
      const newWindow: WindowState = {
        id: `${appName}-${Date.now()}`,
        title: config.title || "",
        icon: config.icon || "",
        isMinimized: false,
        isMaximized: false,
        zIndex: nextZIndex,
        content: config.content,
      };
      setWindows([...windows, newWindow]);
      setNextZIndex(nextZIndex + 1);
    }
    setStartMenuOpen(false);
  };

  const closeWindow = (id: string) => {
    setWindows(windows.filter((w) => w.id !== id));
  };

  const minimizeWindow = (id: string) => {
    setWindows(
      windows.map((w) => (w.id === id ? { ...w, isMinimized: true } : w))
    );
  };

  const maximizeWindow = (id: string) => {
    setWindows(
      windows.map((w) =>
        w.id === id ? { ...w, isMaximized: !w.isMaximized } : w
      )
    );
  };

  const focusWindow = (id: string) => {
    setWindows(
      windows.map((w) =>
        w.id === id ? { ...w, zIndex: nextZIndex, isMinimized: false } : w
      )
    );
    setNextZIndex(nextZIndex + 1);
  };

  return (
    <div className="h-screen w-screen overflow-hidden bg-gradient-to-br from-[#0078D4] via-[#0063B1] to-[#004E8C] relative">
      <Desktop onDoubleClick={(appName) => openApp(appName)} />
      
      {windows.map((window) => (
        <Window
          key={window.id}
          {...window}
          onClose={() => closeWindow(window.id)}
          onMinimize={() => minimizeWindow(window.id)}
          onMaximize={() => maximizeWindow(window.id)}
          onFocus={() => focusWindow(window.id)}
        />
      ))}

      {startMenuOpen && (
        <StartMenu
          onClose={() => setStartMenuOpen(false)}
          onOpenApp={openApp}
        />
      )}

      <Taskbar
        onStartClick={() => setStartMenuOpen(!startMenuOpen)}
        windows={windows}
        onWindowClick={focusWindow}
      />
    </div>
  );
};

export default Index;
