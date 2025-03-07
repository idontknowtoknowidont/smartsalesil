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

      {/* Full Page Layout */}
      <div className="full-page-container">
        {/* Content Wrapper */}
        <div className="content-box">
          {/* Right: Calendly & WhatsApp */}
          <div className="info-container">
            {/* WhatsApp Icon */}
            <a
              href="https://wa.me/972772217100"
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-icon"
            >
              <Image
                src="/images/whatsapp-icon.png" // Make sure this file is in /public/images/
                alt="WhatsApp"
                width={70}
                height={70}
              />
            </a>

            {/* Calendly */}
            <iframe
              src="https://calendly.com/smartsalesil/meet-with-me"
              width="100%"
              height="250px"
              frameBorder="0"
              className="styled-calendly"
            ></iframe>
          </div>

          {/* Left: Images */}
          <div className="image-container">
            {[3, 4].map((num) => (
              <Image
                key={num}
                src={`/images/${num}.png`}
                alt={`Image ${num}`}
                width={450}
                height={350}
                className="styled-image"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Styles */}
      <style jsx>{`
        /* Full Page Background */
        .full-page-container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          background-image: url('/images/1.png');
          background-size: cover;
          background-position: center;
          padding: 5%;
        }

        /* Content Box */
        .content-box {
          display: flex;
          align-items: center;
          gap: 40px;
          padding: 20px;
          background: rgba(255, 255, 255, 0.85);
          border-radius: 15px;
          box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.2);
          max-width: 90%;
          height: auto;
        }

        /* Images */
        .image-container {
          display: flex;
          flex-direction: column;
          gap: 20px;
          width: 50%;
        }

        .styled-image {
          border-radius: 10px;
          box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
          object-fit: cover;
          width: 100%;
          height: auto;
        }

        /* Calendly & WhatsApp */
        .info-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
          width: 50%;
        }

        .styled-calendly {
          border-radius: 10px;
          box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
        }

        /* WhatsApp Icon */
        .whatsapp-icon {
          display: flex;
          justify-content: center;
          align-items: center;
          transition: 0.3s;
        }

        .whatsapp-icon:hover {
          transform: scale(1.1);
        }

        /* Responsive Styles */
        @media (max-width: 1024px) {
          .content-box {
            flex-direction: column-reverse;
            text-align: center;
            gap: 30px;
          }

          .image-container {
            width: 100%;
          }

          .info-container {
            width: 100%;
          }

          /* Adjust Images for Mobile */
          .styled-image {
            width: 100%;
            height: auto;
          }
        }
      `}</style>
    </>
  );
}
