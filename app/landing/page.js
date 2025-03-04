"use client"; // Ensure React hooks work properly

import Image from 'next/image';
import Head from 'next/head';

export default function LandingPage() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=3, user-scalable=yes" />
      </Head>

      {/* Background Image */}
      <div className="background" style={{ backgroundImage: 'url(/images/1.png)' }}></div>

      <main className="flex flex-col items-center p-0 text-right rtl">
        {/* Hero Section */}
        <section className="w-full h-screen flex justify-center items-center">
          <h1 className="text-4xl text-white font-bold">Welcome</h1>
        </section>

        {/* Other Sections */}
        {[2, 3, 4].map((num) => (
          <section key={num} className="w-full h-screen flex justify-center items-center">
            <Image src={`/images/${num}.png`} alt={`Image ${num}`} layout="intrinsic" width={800} height={500} />
          </section>
        ))}

        {/* Contact Form and Calendly */}
        <section className="w-full h-screen flex justify-center items-center relative">
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="relative z-10 text-white text-center p-6">
            <h2 className="text-3xl mb-4">קבלו ייעוץ חינם</h2>
            <form className="space-y-4">
              <input type="text" placeholder="שם מלא" className="block w-full p-2 rounded bg-white text-black" required />
              <input type="email" placeholder="אימייל" className="block w-full p-2 rounded bg-white text-black" required />
              <textarea placeholder="ההודעה שלכם" className="block w-full p-2 rounded bg-white text-black" rows="3"></textarea>
              <button type="submit" className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700">שלח</button>
            </form>
          </div>
        </section>
      </main>
    </>
  );
}
