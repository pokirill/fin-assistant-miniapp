import React from "react";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <div className="max-w-xl w-full rounded-2xl shadow-xl bg-white p-8">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Fin Assistant MiniApp
        </h1>
        <p className="mb-4 text-gray-600 text-center">
          Добро пожаловать в Telegram MiniApp для управления финансовыми целями!
        </p>
        <div className="mt-8 flex flex-col gap-3">
          <button className="rounded-xl px-6 py-3 bg-blue-600 text-white font-semibold hover:bg-blue-700 transition">Добавить финансовую цель</button>
          <button className="rounded-xl px-6 py-3 bg-gray-200 font-semibold hover:bg-gray-300 transition">Посмотреть все цели</button>
        </div>
      </div>
      <footer className="mt-6 text-gray-400 text-xs text-center">MVP – UI/UX финальный прототип</footer>
    </div>
  );
}

export default App;
