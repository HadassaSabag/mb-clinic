const processSteps = [
  {
    title: 'פגישת היכרות ואבחון משותפת',
    subtitle: '(של ארבעתנו)',
    description:
      'אנחנו מתחילים יחד בחדר אחד. בפגישה הראשונה אנחנו ממפים את האתגרים, מבינים את מערכת היחסים, הדינמיקה הזוגית והיעדים שתרצו להשיג בתהליך.',
  },
  {
    title: 'פגישות פרטניות במקביל',
    subtitle: '(עבודה אישית)',
    description:
      'בשלבים המותאמים לתהליך, אנחנו מתפצלים: מיכל נפגשת עם האישה, ובצלאל נפגש עם הגבר. במפגש הפרטני כל אחד מבני הזוג מקבל מרחב אישי בטוח לחלוטין לעבוד על החסמים, הדפוסים הרגשיים, המשקעים מהעבר, הצרכים האישיים והתקשורת הפרטית שלו – ללא חשש משיפוטיות או מעימות מיידי.',
  },
  {
    title: 'מפגשים זוגיים משותפים',
    subtitle: '(איחוד וסנכרון)',
    description:
      'לאחר העבודה האישית, או בשילוב עמה, אנחנו חוזרים אל החדר המשותף. כעת, כשכל אחד מביא איתו תובנות ועיבוד עמוק יותר, אנחנו מנהלים דיאלוג זוגי חדש, מקדם ומקרב.',
  },
  {
    title: 'סנכרון מקצועי בין המטפלים',
    subtitle: '(מאחורי הקלעים)',
    description:
      'כצוות מטפלים הנשואים גם בחיים האישיים, אנחנו מקיימים סנכרון וחשיבה משותפת, בדיסקרטיות מלאה ובכבוד הדדי, כדי לדייק את התהליך הזוגי שלכם ולהוביל אתכם אל היעד בצורה האפקטיבית ביותר.',
  },
];

const benefits = [
  {
    title: 'איזון וניטרליות',
    description:
      'אין תחושה של "שניים נגד אחד". כל אחד מבני הזוג יודע שיש לו מטפל שנמצא איתו, מבין את עולמו ומלווה אותו אישית.',
  },
  {
    title: 'עבודה מעמיקה וממוקדת',
    description:
      'השילוב בין פגישות פרטניות (עיבוד אישי) לפגישות זוגיות (יישום בקשר) מקדם את התהליך ומאפשר לפתוח נושאים מורכבים בביטחון.',
  },
  {
    title: 'שיקוף כפול ומדויק',
    description:
      'בחדר הטיפולים המשותף נוכחות גם האנרגיה הנשית וגם האנרגיה הגברית, מתוך ראייה זוגית רחבה ומאוזנת.',
  },
  {
    title: 'מודל לחיקוי',
    description:
      'כזוג מטפלים המנהל דיאלוג מכבד ומשלים, אנחנו מביאים לחדר תקשורת מקדמת, קשובה ומאפשרת.',
  },
];

export default function CoupleTherapy() {
  return (
    <main className="min-h-screen px-5 pb-20 pt-6 sm:px-8 sm:pt-8">
      <div className="mx-auto max-w-3xl">
        <header className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-3 text-base font-bold tracking-wide text-pink-700">
            טיפול זוגי בשניים
          </p>
          <h1 className="text-4xl font-extrabold leading-tight text-slate-900 sm:text-5xl">
            המודל המרובע
          </h1>
          <p className="mx-auto mt-5 text-xl leading-9 text-slate-700">
            מודל טיפולי המשלב שני מטפלים, מפגשים אישיים וזוגיים, ומרחב בטוח
            לתהליך משותף.
          </p>
        </header>

        <section className="mb-14">
          <h2 className="mb-5 border-r-4 border-pink-300 pr-4 text-2xl font-bold text-slate-900 sm:text-3xl">
            מהו מודל הטיפול הזוגי בשניים?
          </h2>
          <p className="text-lg leading-9 text-slate-700 sm:text-xl">
            כשזוג מגיע לטיפול זוגי קלאסי, הרבה פעמים עולה חשש סמוי: "האם
            המטפל/ת יבינו אותי?", "האם ייווצר פה מצב שבו המטפל נוטה לצד אחד?"
            או "אני מרגיש/ה שאין לי מספיק מקום לבטא את מה שיושב עלי באמת".
          </p>
          <p className="mt-5 text-lg leading-9 text-slate-700 sm:text-xl">
            כדי לתת מענה מדויק ומקיף לאתגרים הללו, פיתחנו את המודל המרובע:
            תהליך טיפולי שבו שנינו – מיכל ובצלאל – מלווים אתכם יחד כזוג
            מטפלים. התהליך משלב בין מפגשים אישיים במקביל לבין מפגשים זוגיים
            משותפים של ארבעתנו בחדר.
          </p>
        </section>

        <section className="mb-14">
          <h2 className="mb-8 border-r-4 border-pink-300 pr-4 text-2xl font-bold text-slate-900 sm:text-3xl">
            איך התהליך מתנהל בפועל?
          </h2>
          <div className="space-y-8">
            {processSteps.map((step) => (
              <article key={step.title}>
                <h3 className="text-xl font-bold leading-snug text-slate-900 sm:text-2xl">
                  {step.title}
                  <span className="mr-2 text-lg font-semibold text-pink-700">
                    {step.subtitle}
                  </span>
                </h3>
                <p className="mt-2 text-lg leading-9 text-slate-700 sm:text-xl">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section>
          <h2 className="mb-8 border-r-4 border-pink-300 pr-4 text-2xl font-bold text-slate-900 sm:text-3xl">
            היתרונות המרכזיים של המודל
          </h2>
          <div className="space-y-7">
            {benefits.map((benefit) => (
              <article key={benefit.title}>
                <h3 className="text-xl font-bold text-pink-800 sm:text-2xl">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-lg leading-9 text-slate-700 sm:text-xl">
                  {benefit.description}
                </p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
