const emails = [
  { label: 'מיכל', address: 'michallevy0@gmail.com' },
  { label: 'בצלאל', address: 'betsalel21@gmail.com' },
  { label: 'הקליניקה', address: 'mbclinic.nlp@gmail.com' },
];

const phones = [
  { label: 'מיכל', number: '0545456783' },
  { label: 'בצלאל', number: '0546720789' },
];

const fieldClassName =
  'mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-lg text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-pink-500 focus:ring-2 focus:ring-pink-100';

function ContactForm() {
  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = formData.get('name');
    const phone = formData.get('phone');
    const email = formData.get('email');
    const message = formData.get('message');
    const subject = `פנייה חדשה מהאתר - ${name}`;
    const body = [
      `שם: ${name}`,
      `טלפון: ${phone}`,
      `אימייל: ${email || 'לא צוין'}`,
      '',
      'תוכן הפנייה:',
      message,
    ].join('\n');

    window.location.href = `mailto:mbclinic.nlp@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <div>
        <label className="font-semibold text-slate-800" htmlFor="contact-name">
          שם מלא
        </label>
        <input
          autoComplete="name"
          className={fieldClassName}
          id="contact-name"
          name="name"
          placeholder="איך קוראים לך?"
          required
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="font-semibold text-slate-800" htmlFor="contact-phone">
            מספר טלפון
          </label>
          <input
            autoComplete="tel"
            className={fieldClassName}
            id="contact-phone"
            name="phone"
            placeholder="למשל: 050-1234567"
            required
            type="tel"
          />
        </div>
        <div>
          <label className="font-semibold text-slate-800" htmlFor="contact-email">
            כתובת אימייל
          </label>
          <input
            autoComplete="email"
            className={fieldClassName}
            id="contact-email"
            name="email"
            placeholder="name@example.com"
            type="email"
          />
        </div>
      </div>

      <div>
        <label className="font-semibold text-slate-800" htmlFor="contact-message">
          במה נוכל לעזור?
        </label>
        <textarea
          className={fieldClassName}
          id="contact-message"
          name="message"
          placeholder="אפשר לכתוב כאן כמה מילים..."
          required
          rows="5"
        />
      </div>

      <button
        className="rounded-full bg-gradient-to-r from-pink-600 to-purple-700 px-8 py-3 font-bold text-white shadow-md transition hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-700"
        type="submit"
      >
        שליחת פנייה
      </button>
      <p className="text-sm leading-6 text-slate-500">
        בלחיצה תיפתח תוכנת הדואר שלך עם פרטי הפנייה, מוכנים לשליחה לכתובת
        הקליניקה.
      </p>
    </form>
  );
}

export default function ContactUs() {
  return (
    <main className="min-h-screen px-5 pb-20 pt-6 sm:px-8 sm:pt-8">
      <div className="mx-auto max-w-6xl">
        <header className="mb-10 text-center">
          <p className="mb-3 text-base font-bold tracking-wide text-pink-700">
            אנחנו כאן בשבילכם
          </p>
          <h1 className="text-4xl font-extrabold text-slate-900 sm:text-5xl">
            יצירת קשר
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-700 sm:text-xl">
            נשמח לשמוע מכם. השאירו פרטים ונחזור אליכם, או צרו איתנו קשר ישירות.
          </p>
        </header>

        <div className="grid gap-12 md:grid-cols-[1.2fr_0.8fr]">
          <section aria-labelledby="contact-form-title">
            <h2
              className="mb-6 border-r-4 border-pink-300 pr-4 text-2xl font-bold text-slate-900"
              id="contact-form-title"
            >
              שלחו לנו הודעה
            </h2>
            <ContactForm />
          </section>

          <aside aria-labelledby="contact-details-title">
            <h2
              className="mb-6 border-r-4 border-pink-300 pr-4 text-2xl font-bold text-slate-900"
              id="contact-details-title"
            >
              פרטי קשר
            </h2>

            <section className="mb-8">
              <h3 className="mb-3 text-xl font-bold text-slate-800">טלפונים</h3>
              <ul className="space-y-3 text-lg text-slate-700">
                {phones.map(({ label, number }) => (
                  <li key={label}>
                    <span className="ml-2 font-semibold">{label}:</span>
                    <a
                      className="text-pink-800 underline decoration-pink-300 underline-offset-4 hover:text-pink-600"
                      href={`tel:${number}`}
                      dir="ltr"
                    >
                      {number}
                    </a>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h3 className="mb-3 text-xl font-bold text-slate-800">אימייל</h3>
              <ul className="space-y-3 text-lg text-slate-700">
                {emails.map(({ label, address }) => (
                  <li className="flex flex-wrap gap-x-2" key={address}>
                    <span className="font-semibold">{label}:</span>
                    <a
                      className="text-pink-800 underline decoration-pink-300 underline-offset-4 hover:text-pink-600"
                      href={`mailto:${address}`}
                      dir="ltr"
                    >
                      {address}
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          </aside>
        </div>
      </div>
    </main>
  );
}
