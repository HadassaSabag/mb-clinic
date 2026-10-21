
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
      <header className={`${activeTab === 'home' ? 'absolute top-0 left-0 right-0' : 'relative'} z-50 flex items-center justify-between px-8 py-5 bg-white/35 backdrop-blur-sm shadow-sm border-b border-white/20`}>
        {/* לוגו בצד ימין */}
        <div className="text-xl font-extrabold tracking-wide text-slate-900">
          <img src={logo} alt="לוגו" className="h-36 w-auto" />
        </div>

        {/* לשוניות ניווט במרכז */}
        <nav className="hidden md:flex items-center gap-8 font-medium text-2xl text-slate-700">
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
      </header>

      {/* תצוגת דף הבית (Hero) */}
      {activeTab === 'home' && (
        <section 
          className="relative h-screen w-full flex items-center justify-center text-center px-4 bg-cover bg-center bg-no-repeat" 
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