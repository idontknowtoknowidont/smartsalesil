"use client";

import React, { useState } from "react";

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleQuestion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "מה הניסיון שלכם בתחום המכירות במיקור חוץ?",
      answer:
        "יש לנו ניסיון של מעל 10 שנים במכירות במיקור חוץ, עם התמקדות בתחומים כמו טכנולוגיה, שירותים פיננסיים, eCommerce ועוד.",
    },

    {
      question:
        "איך אתם מבינים את הצרכים והמטרות העסקיות שלנו לפני תחילת העבודה?",
      answer:
        "אנו מקיימים פגישת התנעה, שבה אנו מנתחים את הצרכים העסקיים, קהל היעד והאסטרטגיות הנוכחיות, ומפתחים תוכנית מותאמת.",
    },
    {
      question:
        "אילו מדדים (KPIs) אתם משתמשים כדי להעריך את ההצלחה של הקמפיינים שלכם?",
      answer:
        "אנו משתמשים במדדים כמו מספר הלידים שהומרו, שיעור סגירת עסקאות, ערך העסקאות הממוצע וזמן ממוצע לסגירה.",
    },
    {
      question: "איך מתבצע תהליך גיוס והכשרת אנשי המכירות שלכם?",
      answer:
        "אנו מגייסים מועמדים בעלי ניסיון בתחום הרלוונטי ומכשירים אותם לעבודה לפי ערכי המותג, תוך התמקדות בטכניקות מכירה עדכניות.",
    },
    {
      question:
        "כיצד אתם משתפים אותנו במידע על ההתקדמות (דו”חות, פגישות עדכון וכו’)?",
      answer:
        "אנו מספקים דו”חות שבועיים או חודשיים ומקיימים פגישות עדכון סדירות כדי לדון בהתקדמות ובשיפורים.",
    },
    {
      question: "איך מתבצע תהליך ה-onboarding של הלקוח?",
      answer:
        "התהליך כולל פגישות התנעה, הגדרת יעדים, הכשרות מותאמות והקמה של מערכות עבודה.",
    },
    {
      question: "איך אתם מבטיחים תקשורת שוטפת איתנו?",
      answer:
        "מנהל פרויקט ייעודי עומד לרשותכם, ומתקיימות פגישות קבועות לעדכון ומעקב.",
    },
    {
      question: "האם יש תמיכה במקרים בהם יש צורך בשינויים במהלך העבודה?",
      answer:
        "כן, אנו גמישים לשינויים ומבצעים התאמות מהירות בהתאם לצרכים שלכם.",
    },
    {
      question: "כיצד מתבצע תהליך סיום שיתוף הפעולה?",
      answer:
        "אנו מספקים דוחות מסכמים, מעבירים את כל המידע בצורה מסודרת ודואגים למעבר חלק לצוותים הפנימיים שלכם.",
    },
  ];

  return (
    <section id="faq" className="py-12 px-6 lg:px-24 font-rubik">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-bold text-[#001c55] text-center mb-8">
          שאלות נפוצות
        </h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`border rounded-lg overflow-hidden text-black transition-colors ${
                activeIndex === index
                  ? "border-[#001c55]"
                  : "border-gray-300 hover:border-[#001c55]"
              }`}
            >
              <button
                className="w-full text-right px-4 py-3 flex justify-between items-center font-medium text-lg"
                onClick={() => toggleQuestion(index)}
              >
                <span>{faq.question}</span>
                <span className="ml-2 text-[#001c55]">
                  {activeIndex === index ? "-" : "+"}
                </span>
              </button>
              {activeIndex === index && (
                <div className="px-4 py-3 text-gray-700 text-sm lg:text-base">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
