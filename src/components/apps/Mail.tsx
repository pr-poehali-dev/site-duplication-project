import { useState } from "react";
import Icon from "@/components/ui/icon";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const Mail = () => {
  const [selectedMail, setSelectedMail] = useState<number | null>(1);
  const [composing, setComposing] = useState(false);

  const emails = [
    {
      id: 1,
      from: "Команда SunTimesOS",
      subject: "Добро пожаловать в SunTimesOS!",
      preview: "Спасибо за использование нашей операционной системы...",
      time: "10:30",
      unread: true,
    },
    {
      id: 2,
      from: "Уведомления",
      subject: "Доступно обновление системы",
      preview: "Установите последнее обновление для улучшения безопасности...",
      time: "Вчера",
      unread: false,
    },
    {
      id: 3,
      from: "Поддержка",
      subject: "Ваш запрос обработан",
      preview: "Мы получили ваше обращение и работаем над решением...",
      time: "2 дня назад",
      unread: false,
    },
  ];

  const selectedEmail = emails.find(e => e.id === selectedMail);

  const folders = [
    { name: "Входящие", icon: "Inbox", count: 3 },
    { name: "Отправленные", icon: "Send", count: 0 },
    { name: "Черновики", icon: "FileText", count: 0 },
    { name: "Спам", icon: "AlertTriangle", count: 0 },
    { name: "Корзина", icon: "Trash2", count: 0 },
  ];

  return (
    <div className="flex h-full bg-white">
      <div className="w-48 bg-gray-50 border-r border-gray-200 p-2">
        <Button
          onClick={() => setComposing(true)}
          className="w-full mb-4 bg-[#0078D4] hover:bg-[#0063B1]"
        >
          <Icon name="Plus" size={16} className="mr-2" />
          Написать
        </Button>
        <div className="space-y-1">
          {folders.map((folder) => (
            <button
              key={folder.name}
              className="w-full flex items-center justify-between px-3 py-2 rounded hover:bg-gray-200 transition-colors text-sm"
            >
              <div className="flex items-center gap-2">
                <Icon name={folder.icon} size={16} className="text-gray-600" />
                <span className="text-gray-800">{folder.name}</span>
              </div>
              {folder.count > 0 && (
                <span className="text-xs bg-[#0078D4] text-white rounded-full px-1.5">
                  {folder.count}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {composing ? (
        <div className="flex-1 flex flex-col bg-white p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-800">Новое сообщение</h2>
            <button
              onClick={() => setComposing(false)}
              className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded transition-colors"
            >
              <Icon name="X" size={16} className="text-gray-600" />
            </button>
          </div>
          <div className="space-y-3 flex-1">
            <Input type="email" placeholder="Кому:" className="w-full" />
            <Input type="text" placeholder="Тема:" className="w-full" />
            <Textarea
              placeholder="Введите сообщение..."
              className="w-full flex-1 resize-none min-h-[300px]"
            />
          </div>
          <div className="flex gap-2 mt-4">
            <Button className="bg-[#0078D4] hover:bg-[#0063B1]">
              <Icon name="Send" size={16} className="mr-2" />
              Отправить
            </Button>
            <Button variant="outline">
              <Icon name="Paperclip" size={16} className="mr-2" />
              Прикрепить
            </Button>
          </div>
        </div>
      ) : (
        <>
          <div className="w-80 border-r border-gray-200 flex flex-col">
            <div className="p-3 border-b border-gray-200">
              <Input
                type="text"
                placeholder="Поиск в почте..."
                className="w-full"
              />
            </div>
            <div className="flex-1 overflow-auto">
              {emails.map((email) => (
                <button
                  key={email.id}
                  onClick={() => setSelectedMail(email.id)}
                  className={`w-full p-4 border-b border-gray-200 text-left hover:bg-gray-50 transition-colors ${
                    selectedMail === email.id ? "bg-blue-50" : ""
                  }`}
                >
                  <div className="flex items-start justify-between mb-1">
                    <span
                      className={`text-sm ${
                        email.unread ? "font-semibold" : "font-medium"
                      } text-gray-800`}
                    >
                      {email.from}
                    </span>
                    <span className="text-xs text-gray-500">{email.time}</span>
                  </div>
                  <div
                    className={`text-sm ${
                      email.unread ? "font-semibold" : ""
                    } text-gray-800 mb-1`}
                  >
                    {email.subject}
                  </div>
                  <div className="text-xs text-gray-600 line-clamp-2">
                    {email.preview}
                  </div>
                  {email.unread && (
                    <div className="w-2 h-2 bg-[#0078D4] rounded-full mt-2" />
                  )}
                </button>
              ))}
            </div>
          </div>

          <div className="flex-1 flex flex-col">
            {selectedEmail ? (
              <>
                <div className="p-6 border-b border-gray-200">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h2 className="text-xl font-semibold text-gray-800 mb-1">
                        {selectedEmail.subject}
                      </h2>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <span className="font-medium">{selectedEmail.from}</span>
                        <span>•</span>
                        <span>{selectedEmail.time}</span>
                      </div>
                    </div>
                    <div className="flex gap-1">
                      <button className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded transition-colors">
                        <Icon name="Reply" size={16} className="text-gray-600" />
                      </button>
                      <button className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded transition-colors">
                        <Icon name="Forward" size={16} className="text-gray-600" />
                      </button>
                      <button className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded transition-colors">
                        <Icon name="Trash2" size={16} className="text-gray-600" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex-1 overflow-auto p-6">
                  <p className="text-gray-800 leading-relaxed">
                    {selectedEmail.id === 1 && (
                      <>
                        Здравствуйте!
                        <br /><br />
                        Спасибо за использование SunTimesOS - современной операционной системы нового поколения.
                        <br /><br />
                        Мы рады приветствовать вас в нашей экосистеме. SunTimesOS предлагает множество возможностей для продуктивной работы и комфортного использования.
                        <br /><br />
                        С уважением,
                        <br />
                        Команда SunTimesOS
                      </>
                    )}
                    {selectedEmail.id === 2 && "Для вашей системы доступно важное обновление безопасности. Рекомендуем установить его как можно скорее."}
                    {selectedEmail.id === 3 && "Ваше обращение получено и находится в обработке. Мы свяжемся с вами в ближайшее время."}
                  </p>
                </div>
              </>
            ) : (
              <div className="flex-1 flex items-center justify-center text-gray-500">
                Выберите письмо для просмотра
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Mail;
