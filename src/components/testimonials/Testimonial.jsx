import { useState } from "react";
import styles from "./testimonial.module.css";

const testimonialsData = [
  {
    id: 1,
    name: "JOHN DOE",
    role: "BUSINESS OWNER",
    text: "I have been using FastGo cargo logistic & transportation services for over a year now and I am extremely satisfied with their service. They are efficient, reliable, and always deliver on time.",
    stars: 5,
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=500&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "JANE SMITH",
    role: "FREELANCE CONSULTANT",
    text: "I was very impressed with FastGo handling of my recent shipment. They went above and beyond to ensure my cargo arrived safely and on time. I will definitely be using their services again in the future.",
    stars: 5,
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=500&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "MICHAEL JOHNSON",
    role: "CEO",
    text: "I was very impressed with FastGo handling of my recent shipment. They went above and beyond to ensure my cargo arrived safely and on time. I will definitely be using their services again in the future.",
    stars: 5,
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=500&auto=format&fit=crop",
  },
];

const Testimonial = () => {
  // Dastlab birinchi card aktiv turadi
  const [activeItem, setActiveItem] = useState(testimonialsData[0]);

  return (
    <section className={styles.testimonialsSection}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <span className={styles.subtitle}>TESTIMONIALS</span>
          <h2 className={styles.title}>OUR CLIENTS SPEAK FOR US</h2>
        </div>

        <div className={styles.testimonialsGrid}>
          <div className={styles.leftColumn}>
            <div className={styles.heroCard}>
              <img
                src={activeItem.image}
                alt={activeItem.name}
                className={styles.heroImage}
              />
              <div className={styles.quoteIcon}>“</div>
            </div>
          </div>

          <div className={styles.rightColumn}>
            {testimonialsData.map((item) => (
              <div
                key={item.id}
                className={`${styles.testimonialCard} ${activeItem.id === item.id ? styles.active : ""}`}
                onClick={() => setActiveItem(item)}
              >
                <div className={styles.starRating}>
                  {[...Array(item.stars)].map((_, i) => (
                    <span key={i} className={styles.star}>
                      ★
                    </span>
                  ))}
                </div>
                <p className={styles.testimonialText}>{item.text}</p>
                <div className={styles.clientInfo}>
                  <span className={styles.clientName}>{item.name}</span>
                  <span className={styles.clientRole}>, {item.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
