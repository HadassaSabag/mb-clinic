
import { useState } from 'react';
import logo from './assets/logo without.png';
import CoupleTherapy from './components/CoupleTherapy';
import ParentingGuidance from './components/ParentingGuidance';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="min-h-screen bg-[#FDFBF7] font-['Assistant',sans-serif] text-slate-800" dir="rtl">
      {/* ייבוא פונט Assistant מ-Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Assistant:wght@400;600;700;800&display=swap');
        body { font-family: 'Assistant', sans-serif; }
      `}</style>

      {/* סרגל ניווט עליון (Navbar) */}
      <header className={`${activeTab === 'home' ? 'absolute inset-x-0 top-0' : 'relative'} z-50 grid grid-cols-[1fr_auto_1fr] items-center gap-3 px-4 py-4 sm:px-8 sm:py-5 bg-white/45 backdrop-blur-sm shadow-sm border-b border-white/20`}>
        {/* לוגו בצד ימין */}
        <div className="justify-self-start text-xl font-extrabold tracking-wide text-slate-900">
          <img src={logo} alt="לוגו" className="h-20 w-auto sm:h-24" />
        </div>

        {/* לשוניות ניווט במרכז */}
        <nav className="hidden md:flex items-center justify-center gap-2 lg:gap-4 xl:gap-8 font-medium text-sm lg:text-lg xl:text-2xl text-slate-700">
          <button 
            onClick={() => setActiveTab('home')} 
            className={`transition hover:text-pink-600 ${activeTab === 'home' ? 'text-pink-600 font-bold' : ''}`}
          >
            דף הבית
          </button>
          <button 
            onClick={() => setActiveTab('couple')} 
            className={`transition hover:text-pink-600 ${activeTab === 'couple' ? 'text-pink-600 font-bold' : ''}`}
          >
            טיפול זוגי בשניים
          </button>
          <button 
            onClick={() => setActiveTab('parenting')} 
            className={`transition hover:text-pink-600 ${activeTab === 'parenting' ? 'text-pink-600 font-bold' : ''}`}
          >
            הדרכת הורים ופרק ב'
          </button>
          <button 
            onClick={() => setActiveTab('about')} 
            className={`transition hover:text-pink-600 ${activeTab === 'about' ? 'text-pink-600 font-bold' : ''}`}
          >
            מי אנחנו
          </button>
          <button 
            onClick={() => setActiveTab('contact')} 
            className={`transition hover:text-pink-600 ${activeTab === 'contact' ? 'text-pink-600 font-bold' : ''}`}
          >
            יצירת קשר
          </button>
        </nav>

        {/* כפתור פעולה מהיר בצד שמאל */}
        <button
          onClick={() => setActiveTab('contact')}
          className="justify-self-end whitespace-nowrap rounded-full bg-gradient-to-r from-pink-600 to-purple-700 px-3 py-2 text-xs font-semibold text-white shadow-md transition hover:opacity-90 sm:px-5 sm:py-2.5 sm:text-sm"
        >
          תיאום שיחת התייעצות
        </button>
      </header>

      {/* תצוגת דף הבית (Hero) */}
      {activeTab === 'home' && (
        <section 
          className="relative flex h-screen w-full items-center justify-center px-4 pt-32 text-center bg-cover bg-center bg-no-repeat sm:pt-40" 
          style={{ backgroundImage: `url('/clinic-bg.jpg')` }}
        >
          {/* שכבת הצללה דקיקה לשמירה על חדות וקריאות */}
          <div className="absolute inset-0 bg-white/25"></div>

          {/* תוכן ה-Hero */}
          <div className="relative z-10 max-w-3xl mx-auto space-y-6 text-slate-800">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-sm text-[#1E293B]">
              שני מטפלים. זוג אחד. מרחב שלם של מקום, הבנה ושינוי עמוק.
            </h1>
            <p className="text-lg md:text-xl font-medium max-w-2xl mx-auto text-slate-700 drop-shadow-sm">
              מודל טיפולי ייחודי המשלב עבודה פרטנית במקביל לצד פגישות זוגיות משותפות – ללא "מחנות", ללא שיפוטיות, ובסינרגיה מלאה.
            </p>
            <div className="flex justify-center gap-4 pt-4">
              <button 
                onClick={() => setActiveTab('couple')}
                className="bg-pink-600 text-white px-8 py-3.5 rounded-full shadow-lg hover:bg-pink-700 transition font-bold text-lg"
              >
                לקרוא על המודל
              </button>
              <button
                onClick={() => setActiveTab('contact')}
                className="bg-white/90 text-slate-900 border border-slate-300 px-8 py-3.5 rounded-full shadow-sm hover:bg-white transition font-bold text-lg"
              >
                צור קשר
              </button>
            </div>
          </div>
        </section>
      )}

      {activeTab === 'couple' && <CoupleTherapy />}
      {activeTab === 'parenting' && <ParentingGuidance />}
      {activeTab === 'about' && <AboutUs />}
      {activeTab === 'contact' && <ContactUs />}

    </div>
  );
}