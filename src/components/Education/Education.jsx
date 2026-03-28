import './Education.css';

const Education = () => {
  const eduData = [
    {
      institution: "CINEC Campus",
      degree: "BSc (Hons) Computer Science (Software Engineering)",
      period: "2024 - 2027",
      university: "University of Wolverhampton, UK"
    },
    {
      institution: "G/Galahitiyawa Central College",
      degree: "G.C.E (A/L) Exam",
      period: "2023",
      university: "National School"
    }
  ];

  return (
    <section className="education-section" id="education">
      <h2 className="section-title">Education</h2>
      <div className="edu-grid">
        {eduData.map((item, index) => (
          <div className="edu-card" key={index}>
            <h3>{item.institution}</h3>
            <p className="degree">{item.degree}</p>
            <p className="univ">{item.university}</p>
            <span className="year">{item.period}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;