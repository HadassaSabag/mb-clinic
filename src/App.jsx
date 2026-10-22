
import { useState } from 'react';
import logo from './assets/logo without.png';
import pagesBackground from './assets/pages-bg.png';
import CoupleTherapy from './components/CoupleTherapy';
import ParentingGuidance from './components/ParentingGuidance';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [activeProfile, setActiveProfile] = useState('בצלאל');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileAboutOpen, setIsMobileAboutOpen] = useState(false);

  const navigateTo = (tab) => {
    setActiveTab(tab);
    setIsMobileMenuOpen(false);
    setIsMobileAboutOpen(false);
  };

  const selectProfile = (profile) => {
    setActiveProfile(profile);
    navigateTo('about');
  };

  return (
    <div
      className={`min-h-screen bg-[#FDFBF7] font-['Assistant',sans-serif] text-slate-800 ${
        activeTab !== 'home' ? 'bg-cover bg-center bg-fixed bg-no-repeat' : ''
      }`}
      dir="rtl"
      style={
        activeTab !== 'home'
          ? {
              backgroundImage: `linear-gradient(rgba(253, 251, 247, 0.78), rgba(253, 251, 247, 0.78)), url(${pagesBackground})`,
            }
          : undefined
      }
    >
      {/* ייבוא פונט Assistant מ-Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Assistant:wght@400;600;700;800&display=swap');
        body { font-family: 'Assistant', sans-serif; }
      `}</style>

      {/* סרגל ניווט עליון (Navbar) */}
      <header className={`${activeTab === 'home' ? 'absolute inset-x-0 top-0' : 'relative'} z-50 flex items-center gap-4 px-4 py-3 sm:px-8 sm:py-4 bg-white/45 backdrop-blur-sm shadow-sm border-b border-white/20`}>
        {/* לוגו בצד ימין */}
        <div className="shrink-0 text-xl font-extrabold tracking-wide text-slate-900">
          <button
            aria-label="חזרה לעמוד הבית"
            className="block rounded focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-pink-600"
            onClick={() => navigateTo('home')}
            type="button"
          >
            <img src={logo} alt="לוגו" className="h-20 w-auto scale-125 sm:h-34" />
          </button>
        </div>

        <button
          aria-expanded={isMobileMenuOpen}
          aria-label={isMobileMenuOpen ? 'סגירת תפריט ניווט' : 'פתיחת תפריט ניווט'}
          className="mr-auto rounded p-2 text-slate-800 hover:text-pink-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600 md:hidden"
          onClick={() => setIsMobileMenuOpen((isOpen) => !isOpen)}
          type="button"
        >
          <svg aria-hidden="true" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* לשוניות ניווט במרכז */}
        <nav className="hidden flex-1 items-center justify-evenly gap-3 whitespace-nowrap font-medium text-base text-slate-700 md:flex lg:gap-5 lg:text-xl xl:text-2xl">
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
          <div className="group relative">
            <button
              aria-haspopup="menu"
              className={`transition hover:text-pink-600 ${activeTab === 'about' ? 'text-pink-600 font-bold' : ''}`}
              type="button"
            >
              מי אנחנו
            </button>
            <div
              className="invisible absolute left-1/2 top-full z-50 flex min-w-max -translate-x-1/2 flex-row gap-4 pt-3 text-right opacity-0 transition-opacity duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100"
              role="menu"
            >
              {['מיכל', 'בצלאל'].map((profile) => (
                <button
                  className={`text-right transition focus-visible:outline-none ${
                    profile === 'מיכל'
                      ? 'hover:text-pink-600 focus-visible:text-pink-600'
                      : 'hover:text-blue-600 focus-visible:text-blue-600'
                  }`}
                  key={profile}
                  onClick={() => {
                    selectProfile(profile);
                  }}
                  role="menuitem"
                  type="button"
                >
                  {profile}
                </button>
              ))}
            </div>
          </div>
          <button 
            onClick={() => setActiveTab('contact')} 
            className={`transition hover:text-pink-600 ${activeTab === 'contact' ? 'text-pink-600 font-bold' : ''}`}
          >
            יצירת קשר
          </button>
        </nav>

        {isMobileMenuOpen && (
          <nav
            aria-label="ניווט ראשי"
            className="absolute inset-x-0 top-full flex flex-col gap-1 border-t border-white/40 bg-white/95 px-5 py-3 text-lg font-medium text-slate-700 shadow-lg backdrop-blur-sm md:hidden"
          >
            <button className="py-2 text-right hover:text-pink-600" onClick={() => navigateTo('home')} type="button">
              דף הבית
            </button>
            <button className="py-2 text-right hover:text-pink-600" onClick={() => navigateTo('couple')} type="button">
              טיפול זוגי בשניים
            </button>
            <button className="py-2 text-right hover:text-pink-600" onClick={() => navigateTo('parenting')} type="button">
              הדרכת הורים ופרק ב&apos;
            </button>
            <button
              aria-expanded={isMobileAboutOpen}
              className={`py-2 text-right hover:text-pink-600 ${activeTab === 'about' ? 'font-bold text-pink-600' : ''}`}
              onClick={() => setIsMobileAboutOpen((isOpen) => !isOpen)}
              type="button"
            >
              מי אנחנו
            </button>
            {isMobileAboutOpen && (
              <div className="flex gap-6 pr-4 pb-2">
                {['מיכל', 'בצלאל'].map((profile) => (
                  <button
                    className={`transition ${
                      profile === 'מיכל'
                        ? 'hover:text-pink-600 focus-visible:text-pink-600'
                        : 'hover:text-blue-600 focus-visible:text-blue-600'
                    }`}
                    key={profile}
                    onClick={() => selectProfile(profile)}
                    type="button"
                  >
                    {profile}
                  </button>
                ))}
              </div>
            )}
            <button className="py-2 text-right hover:text-pink-600" onClick={() => navigateTo('contact')} type="button">
              יצירת קשר
            </button>
          </nav>
        )}

      </header>

      {/* תצוגת דף הבית (Hero) */}
      {activeTab === 'home' && (
        <section 
          className="relative flex min-h-screen w-full flex-col items-center px-4 pb-3 pt-56 text-center bg-cover bg-center bg-no-repeat sm:pt-60" 
          style={{ backgroundImage: `url('/clinic-bg.jpg')` }}
        >
          {/* שכבת הצללה דקיקה לשמירה על חדות וקריאות */}
          <div className="absolute inset-0 bg-white/25"></div>

          {/* תוכן ה-Hero */}
          <div className="relative z-10 my-auto max-w-3xl space-y-6 text-slate-800">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-sm text-[#1E293B]">
              שני מטפלים. זוג אחד.
              <br />
              מרחב שלם של מקום,
              <br />
              הבנה ושינוי עמוק.
            </h1>
            <p className="mx-auto max-w-2xl text-lg font-bold text-slate-950 drop-shadow-[0_2px_3px_rgba(255,255,255,0.95)] md:text-2xl">
              מודל טיפולי ייחודי המשלב עבודה פרטנית במקביל לצד פגישות זוגיות משותפות – בנעימות, בדיסקרטיות, ובסינרגיה מלאה.
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
          <footer className="relative z-10 w-full pt-6 text-left text-base font-bold text-slate-900 drop-shadow-[0_1px_2px_rgba(255,255,255,0.95)]">
            © הדסה עיצוב ובניית אתרים ·{' '}
            <a className="hover:text-pink-700" href="tel:0545220442" dir="ltr">
              054-522-0442
            </a>
          </footer>
        </section>
      )}

      {activeTab !== 'home' && (
        <div className="mx-auto min-h-screen w-full max-w-7xl bg-white/55 shadow-sm backdrop-blur-sm">
          {activeTab === 'couple' && <CoupleTherapy />}
          {activeTab === 'parenting' && <ParentingGuidance />}
          {activeTab === 'about' && <AboutUs profileName={activeProfile} />}
          {activeTab === 'contact' && <ContactUs />}
        </div>
      )}

    </div>
  );
}