import { useEffect, useState } from "react";

function App() {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    // Проверяем, доступен ли Telegram WebApp SDK
    if (window.Telegram && window.Telegram.WebApp) {
      window.Telegram.WebApp.ready();
      // Пытаемся получить имя пользователя
      const user = window.Telegram.WebApp.initDataUnsafe?.user;
      if (user && user.first_name) {
        setUserName(user.first_name);
      } else {
        setUserName("");
      }
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-50">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">
        {userName
          ? `Привет, ${userName}! 👋`
          : "Telegram WebApp SDK подключён!"}
      </h1>
      <p className="text-lg text-blue-600">
        {userName
          ? "SDK работает, имя пользователя получено из Telegram!"
          : "Открой приложение через Telegram MiniApp, чтобы увидеть имя пользователя."}
      </p>
    </div>
  );
}

export default App;
