// app/landing/page.js
export default function LandingPage() {
  return (
    <main className="flex flex-col items-center p-8 text-right rtl">
      {/* Hero Section */}
      <section className="text-center">
        <h1 className="text-4xl font-bold">הגדילו את המכירות שלכם עם Smart Sales</h1>
        <p className="mt-4 text-lg">צוותי מכירות מקצועיים במיקור חוץ שיצמיחו את העסק שלכם.</p>
        <button className="mt-6 bg-blue-500 text-white px-6 py-2 rounded">התחילו עכשיו</button>
      </section>

      {/* Benefits */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold">למה לבחור בנו?</h2>
        <ul className="mt-4 list-disc text-lg">
          <li>אנשי מכירות מומחים</li>
          <li>אסטרטגיות מותאמות אישית לעסק שלכם</li>
          <li>הצלחה מוכחת בשטח</li>
        </ul>
      </section>

      {/* Contact Form */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold">קבלו ייעוץ חינם</h2>
        <form className="mt-4 flex flex-col gap-4">
          <input type="text" placeholder="שם מלא" className="border p-2" required />
          <input type="email" placeholder="אימייל" className="border p-2" required />
          <textarea placeholder="ההודעה שלכם" className="border p-2"></textarea>
          <button type="submit" className="bg-green-500 text-white px-6 py-2 rounded">שלח</button>
        </form>
      </section>
    </main>
  );
}
