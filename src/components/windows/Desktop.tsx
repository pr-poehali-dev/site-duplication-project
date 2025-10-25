import Icon from "@/components/ui/icon";

interface DesktopProps {
  onDoubleClick: (appName: string) => void;
}

const Desktop = ({ onDoubleClick }: DesktopProps) => {
  const desktopIcons = [
    { name: "Этот компьютер", icon: "Monitor", app: "explorer" },
    { name: "Корзина", icon: "Trash2", app: "recycle" },
    { name: "Microsoft Edge", icon: "Globe", app: "browser" },
    { name: "Блокнот", icon: "FileText", app: "notepad" },
  ];

  return (
    <div className="absolute inset-0 p-4 grid grid-cols-[repeat(auto-fill,120px)] gap-4 content-start">
      {desktopIcons.map((item) => (
        <div
          key={item.name}
          onDoubleClick={() => onDoubleClick(item.app)}
          className="flex flex-col items-center gap-1 p-2 rounded cursor-pointer hover:bg-white/10 transition-colors group"
        >
          <div className="w-12 h-12 flex items-center justify-center text-white">
            <Icon name={item.icon} size={48} />
          </div>
          <span className="text-white text-xs text-center drop-shadow-lg group-hover:bg-[#0078D4] px-1 rounded">
            {item.name}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Desktop;
