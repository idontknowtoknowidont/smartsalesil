import React from "react";

const AboutOutsourcing = () => {
  return (
    <section className="bg-[#E9EAEC] w-5/6 mx-auto py-8 mt-10 rounded-lg px-6 font-rubik lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center lg:items-center gap-12">
        {/* טקסט */}
        <div className="lg:w-1/2 flex flex-col text-right">
          <h2 className="text-3xl lg:text-2xl font-extrabold text-[#001c55] mb-3">
            למה מיקור חוץ הוא הבחירה הנכונה לעסק שלך?
          </h2>
          <p className="text-base text-gray-700 leading-relaxed mb-2">
            מכירות במיקור חוץ הן הפתרון האולטימטיבי לעסקים שמחפשים להגדיל את
            המכירות שלהם ביעילות וללא מאמץ נוסף. במקום להתעסק בגיוס, הכשרה
            וניהול של צוותי מכירות פנימיים, אנו מספקים צוות מקצועי וממוקד מטרה,
            שמביא תוצאות מוכחות בזמן קצר.
          </p>
          <p className="text-base text-gray-700 leading-relaxed mb-2">
            היתרון העיקרי של שירותי מיקור חוץ הוא המומחיות שלנו במכירות. אנחנו
            מתמקדים במכירות בלבד – כך שאנשי המכירות שלנו מיומנים בלנהל את כל
            תהליך המכירה, מהתקשרות ראשונית ועד לסגירת העסקה ואפילו בניהול קשר
            מתמשך עם הלקוח.
          </p>
          <p className="text-base text-gray-700 leading-relaxed mb-2">
            <span className="font-bold text-[#001c55]">Smart Sales</span> היא
            חברה שמביאה איתה את כל הכלים, המשאבים והניסיון הדרושים לניהול תהליכי
            מכירה מורכבים. צוותי המכירות שלנו עובדים מסביב לשעון כדי להפוך לידים
            ללקוחות נאמנים ולספק לך שקט נפשי – כך שתוכל להתמקד בניהול העסק שלך.
          </p>
          <p className="text-base text-gray-700 leading-relaxed">
            עם מיקור חוץ, אתם מקבלים צוות מכירות מקצועי ללא הצורך להתעסק בניהול
            תפעולי. פשוט תנו לנו לנהל את המכירות – ואנחנו נביא את התוצאות.
          </p>
        </div>

        {/* תמונה */}
        <div className="lg:w-1/2 flex justify-center lg:justify-end">
          <img
            src="/images/344.svg" // שים פה את התמונה הרצויה
            alt="Outsourcing Team"
            className="w-[80%] rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutOutsourcing;
