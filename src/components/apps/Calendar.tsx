import { useState } from "react";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  const monthNames = [
    "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
    "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"
  ];

  const events = [
    { date: 25, title: "Встреча с командой", time: "10:00" },
    { date: 27, title: "Презентация проекта", time: "14:30" },
    { date: 30, title: "День рождения", time: "18:00" },
  ];

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    
    const days = [];
    for (let i = 0; i < (firstDay === 0 ? 6 : firstDay - 1); i++) {
      days.push(null);
    }
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(i);
    }
    return days;
  };

  const previousMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
  };

  const days = getDaysInMonth(currentDate);
  const todayEvents = events.filter(e => e.date === selectedDate.getDate());

  return (
    <div className="flex h-full bg-white">
      <div className="flex-1 p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">
            {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
          </h2>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={previousMonth}
              className="h-8 w-8"
            >
              <Icon name="ChevronLeft" size={16} />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextMonth}
              className="h-8 w-8"
            >
              <Icon name="ChevronRight" size={16} />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-7 gap-2 mb-2">
          {["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"].map((day) => (
            <div
              key={day}
              className="text-center text-sm font-semibold text-gray-600 py-2"
            >
              {day}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-2">
          {days.map((day, index) => {
            const hasEvent = day && events.some(e => e.date === day);
            const isSelected = day === selectedDate.getDate() && 
              currentDate.getMonth() === selectedDate.getMonth();
            const isToday = day === new Date().getDate() &&
              currentDate.getMonth() === new Date().getMonth() &&
              currentDate.getFullYear() === new Date().getFullYear();

            return (
              <button
                key={index}
                onClick={() => day && setSelectedDate(new Date(currentDate.getFullYear(), currentDate.getMonth(), day))}
                disabled={!day}
                className={`aspect-square rounded-lg text-sm transition-colors relative ${
                  !day
                    ? "invisible"
                    : isSelected
                    ? "bg-[#0078D4] text-white font-semibold"
                    : isToday
                    ? "bg-blue-100 text-[#0078D4] font-semibold"
                    : "hover:bg-gray-100 text-gray-800"
                }`}
              >
                {day}
                {hasEvent && (
                  <div className={`absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full ${
                    isSelected ? "bg-white" : "bg-[#0078D4]"
                  }`} />
                )}
              </button>
            );
          })}
        </div>
      </div>

      <div className="w-80 border-l border-gray-200 bg-gray-50 p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          События на {selectedDate.getDate()} {monthNames[selectedDate.getMonth()]}
        </h3>
        {todayEvents.length > 0 ? (
          <div className="space-y-3">
            {todayEvents.map((event, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-3"
              >
                <div className="flex items-start gap-2">
                  <Icon name="Clock" size={16} className="text-[#0078D4] mt-0.5" />
                  <div>
                    <div className="font-medium text-sm text-gray-800">
                      {event.title}
                    </div>
                    <div className="text-xs text-gray-600">{event.time}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8 text-gray-500 text-sm">
            <Icon name="CalendarOff" size={48} className="mx-auto mb-2 text-gray-400" />
            Нет событий на этот день
          </div>
        )}

        <Button className="w-full mt-6 bg-[#0078D4] hover:bg-[#0063B1]">
          <Icon name="Plus" size={16} className="mr-2" />
          Добавить событие
        </Button>
      </div>
    </div>
  );
};

export default Calendar;
