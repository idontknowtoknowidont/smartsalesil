"use client";

import React from "react";

const AboutUs = () => {
  return (
    <section
      id="about"
      className="flex flex-col lg:flex-row  anchor items-center bg-gray-100 rounded-lg shadow-lg overflow-hidden my-8 mx-auto w-5/6 font-rubik text-right"
    >
      {/* תוכן */}
      <div className="lg:w-1/2 p-6 flex flex-col justify-center">
        <h2 className="text-xl lg:text-3xl text-[#001c55] font-bold mb-3">
          מי אנחנו ?
        </h2>
        <p className="text-sm lg:text-base text-gray-600 leading-relaxed mb-2">
          ב-<span className="font-bold text-[#001c55]">Smart Sales</span> אנו
          מתמחים במתן שירותי מכירות במיקור חוץ לעסקים קטנים ובינוניים, עם צוותי
          מכירה מנוסים בעלי מעל 10 שנות ניסיון. אנו עובדים עם אנשי המכירות
          המובילים בתחום, המתמחים במכירות B2B ו-B2C, בתהליכים מורכבים ופשוטים
          כאחד.
        </p>
        <p className="text-sm lg:text-base text-gray-600 leading-relaxed mb-2">
          אנו מציעים שירותים גם בשפה האנגלית, ומאפשרים ללקוחותינו להגיע לשווקים
          מקומיים ובינלאומיים ביעילות ובמקצועיות.
        </p>
        <p className="text-sm lg:text-base text-gray-600 leading-relaxed mb-2">
          החזון שלנו הוא להוביל לשיפור ביצועים, הגדלת מכירות וצמיחה בהכנסות תוך
          התאמה אישית לכל לקוח ושיתוף פעולה אמיתי.
        </p>
        <p className="text-sm border-b border-b-1 pb-4 border-b-black lg:text-base text-gray-600 leading-relaxed">
          אם אתם מחפשים שותף אמין להצלחה העסקית שלכם – אנחנו כאן בשבילכם!
        </p>

        {/* כרטיס קטן */}
        <div className="flex items-start w-full      p-4  mt-3">
          <div className="flex  items-center justify-center w-14 h-14 bg-white border border-gray-500 rounded-full text-white ">
            {/* אייקון */}
            <lord-icon
              src="https://cdn.lordicon.com/idecrumg.json"
              trigger="loop"
              delay="1000"
              state="hover-talking"
              colors="primary:#4be1ec,secondary:#2516c7"
              style={{ width: "50px", height: "50px" }}
            ></lord-icon>
          </div>
          <div className="ml-3 px-2 md:ml-4  min-w-52   md:px-4">
            <h4 className="font-bold text-[#001c55] text-sm md:text-base lg:text-lg">
              שירות אישי ומותאם
            </h4>
            <p className="text-xs md:text-sm text-gray-500">
              התאמה אישית לכל לקוח, תוך הבנת הצרכים המיוחדים של העסק.
            </p>
          </div>
        </div>
      </div>

      {/* תמונה */}
      <div className=" lg:w-[48%] lg:h-full -mt-4 ">
        <img
          src="/images/aboutus.png" // שים כאן את נתיב התמונה שלך
          alt="על אודותינו"
          className="object-cover rounded-lg   "
        />
      </div>
    </section>
  );
};

export default AboutUs;
