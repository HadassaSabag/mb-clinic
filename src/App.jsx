import React, { useState } from 'react';

import bgImage from '../src/assets/'

export default function App() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="min-h-screen bg-gray-50 font-sans" dir="rtl">
      {/* סרגל ניווט עליון (Navbar) */}
      <header className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 bg-transparent">
        {/* לוגו או שם הקליניקה */}
        <div className="text-2xl font-bold tracking-wide text-gray-800 drop-shadow-sm">
          MB קליניק <span className="block text-xs font-normal text-gray-600">הדרך שלך לעצמך</span>
        </div>

        {/* לשוניות ניווט */}
        <nav className="hidden md:flex items-center gap-8 text-gray-800 font-medium bg-white/60 backdrop-blur-md px-6 py-2.5 rounded-full shadow-sm">
          <button 
            onClick={() => setActiveTab('home')} 
            className="hover:text-pink-600 transition"
          >
            דף הבית
          </button>
          <button 
            onClick={() => setActiveTab('about')} 
            className="hover:text-pink-600 transition"
          >
            מי אנחנו
          </button>
          <button 
            onClick={() => setActiveTab('nlp')} 
            className="hover:text-pink-600 transition"
          >
            מה זה NLP?
          </button>
          <button 
            onClick={() => setActiveTab('treatments')} 
            className="hover:text-pink-600 transition"
          >
            אופני טיפול
          </button>
          <button 
            onClick={() => setActiveTab('contact')} 
            className="hover:text-pink-600 transition"
          >
            יצירת קשר
          </button>
        </nav>

        {/* כפתור פעולה מהיר (CTA) */}
        <div>
          <a 
            href="#contact" 
            className="bg-gradient-to-r from-pink-600 to-purple-700 text-white px-5 py-2.5 rounded-full shadow-md hover:opacity-90 transition font-medium text-sm"
          >
            תיאום שיחת התייעצות
          </a>
        </div>
      </header>

      {/* אזור ה-Hero המרכזי עם תמונת הרקע */}
      <section className="relative h-screen flex items-center justify-center text-center px-4">
        {/* תמונת הרקע */}
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: `url(${bgImage})` }}
        >
          {/* שכבת הצללה (Overlay) כדי שהטקסט יבלוט */}
          <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px]"></div>
        </div>

        {/* תוכן ה-Hero */}
        <div className="relative z-10 max-w-3xl mx-auto space-y-6">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight drop-shadow-sm">
            מרגישים שיש בכם הרבה מעבר למה שאתם מצליחים להוציא?
          </h1>
          <p className="text-lg md:text-xl text-gray-700 font-medium max-w-2xl mx-auto">
            זוג מטפלים מנוסה ינחה אתכם בקליניקה נעימה ופרטית לתהליך בו תראו כי מציאות חייכם עולה על כל דמיון.
          </p>
          <div className="flex justify-center gap-4 pt-4">
            <a 
              href="#contact" 
              className="bg-pink-600 text-white px-8 py-3.5 rounded-full shadow-lg hover:bg-pink-700 transition font-semibold text-lg"
            >
              בואו נדבר
            </a>
            <a 
              href="#nlp" 
              className="bg-white/80 backdrop-blur-sm text-gray-800 border border-gray-300 px-8 py-3.5 rounded-full shadow-sm hover:bg-white transition font-semibold text-lg"
            >
              לקרוא על NLP
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}