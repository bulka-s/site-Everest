"use client";

import "../../styles/faq.css";
import { useState } from "react";

export function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "Нужен ли опыт в кулинарии?",
      answer:
        "Нет, наши курсы подходят как для новичков, так и для тех, кто хочет улучшить свои навыки. Мы начинаем с основ и постепенно переходим к более сложным техникам. Каждый преподаватель адаптирует программу под уровень группы.",
    },
    {
      question: "Что нужно принести с собой?",
      answer:
        "Все необходимое оборудование, продукты и инструменты предоставляет школа. Вам нужно только хорошее настроение и желание учиться! По желанию можете взять фартук и блокнот для заметок.",
    },
    {
      question: "Сколько длится один курс?",
      answer:
        "Продолжительность зависит от курса. В среднем курс состоит из 8-12 занятий по 3 часа каждое. Полная программа с расписанием указана в описании каждого курса. Занятия проходят 2-3 раза в неделю.",
    },
    {
      question: "Можно ли пропустить занятие?",
      answer:
        "Да, если вы предупредите нас заранее (минимум за 24 часа), мы предоставим запись занятия в HD качестве и поможем наверстать пропущенный материал на следующем уроке или в индивидуальном порядке.",
    },
    {
      question: "Есть ли рассрочка?",
      answer:
        "Да, мы предлагаем беспроцентную рассрочку на 3 месяца для всех курсов стоимостью от 10 000 ₽. Также доступна оплата частями через популярные сервисы. Подробности уточняйте у менеджера.",
    },
    {
      question: "Выдается ли сертификат?",
      answer:
        "Да, после успешного завершения курса вы получите официальный сертификат нашей школы с печатью и подписью директора. Сертификат подтверждает ваши навыки и может помочь при трудоустройстве.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq">
      <div className="container">
        <h2 className="faq-title">Часто задаваемые вопросы</h2>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${activeIndex === index ? "active" : ""}`}
            >
              <button className="faq-question" onClick={() => toggleFAQ(index)}>
                <div className="faq-left-block">
                  <img src="/Question.svg" alt="" />
                  <span>{faq.question}</span>
                </div>

                <svg
                  className="faq-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="faq-answer">
                <div className="faq-answer-content">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
