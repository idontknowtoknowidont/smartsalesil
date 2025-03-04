"use client";
import Image from "next/image";
import Head from "next/head";

export default function LandingPage() {
  return (
    <>
      <Head>
        <title>SmartSalesIL</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=3, user-scalable=yes" />
      </Head>

      {/* Background */}
      <div className="background" style={{ backgroundImage: "url('/images/1.png')" }}></div>

      {/* Content Wrapper */}
      <main className="content-wrapper">
        <h1 className="text-3xl font-bold mb-6">Welcome to SmartSalesIL</h1>

        {/* Image Grid */}
        <div className="image-grid">
          {[2, 3, 4].map((num) => (
            <Image key={num} src={`/images/${num}.png`} alt={`Image ${num}`} width={300} height={200} className="rounded-lg shadow-md" />
          ))}
        </div>

        {/* Contact & Calendly Section */}
        <div className="form-container">
          {/* Contact Form */}
          <div className="contact-form">
            <h2 className="text-2xl font-semibold mb-4">קבלו ייעוץ חינם</h2>
            <form className="flex flex-col gap-4 text-right">
              <input type="text" placeholder="שם מלא" className="border p-2 rounded shadow-sm hover:shadow-md transition" required />
              <input type="email" placeholder="אימייל" className="border p-2 rounded shadow-sm hover:shadow-md transition" required />
              <textarea placeholder="ההודעה שלכם" className="border p-2 rounded shadow-sm hover:shadow-md transition" rows="3"></textarea>
              <button type="submit" className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 hover:shadow-lg transition">
                שלח
              </button>
            </form>
          </div>

          {/* Calendly Embed */}
          <div className="calendly-form">
            <h2 className="text-2xl font-semibold mb-4">קבעו פגישה בקלנדלי</h2>
            <iframe
              src="https://calendly.com/smartsalesil/meet-with-me"
              width="100%"
              height="400px"
              frameBorder="0"
              className="rounded-lg shadow-md"
            ></iframe>
          </div>
        </div>
      </main>
    </>
  );
}
