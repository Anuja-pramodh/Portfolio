import { GraduationCap, Calendar, Award, MapPin } from 'lucide-react';
import './Education.css';

const Education = () => {
  const education = [
    {
      degree: 'BSc (Hons) Computer Science',
      specialization: 'Software Engineering',
      institution: 'CINEC Campus',
      university: 'University of Wolverhampton',
      location: 'Sri Lanka',
      period: '2024 - 2027',
      status: 'Currently Enrolled',
      icon: '🎓',
      color: '#4361ee'
    },
    {
      degree: 'G.C.E Advanced Level (A/L)',
      institution: 'G/Galahitiyawa Central College',
      location: 'National School',
      period: '2023',
      status: 'Completed',
      icon: '📚',
      color: '#10b981'
    },
    {
      degree: 'G.C.E Ordinary Level (O/L)',
      institution: 'G/Galahitiyawa Central College',
      location: 'National School',
      period: '2020',
      status: 'Completed',
      icon: '📝',
      color: '#f59e0b'
    }
  ];

  const certifications = [
    {
      name: 'Online English Course',
      provider: 'Lanka Institute of Language and Information Technology',
      icon: '🌐'
    },
    {
      name: 'Computer Course',
      provider: 'MDP Computer Training Institute',
      icon: '💻'
    },
    {
      name: 'Computer & English Course',
      provider: 'IMBS Green Campus',
      icon: '📖'
    }
  ];

  return (
    <section id="education" className="education">
      <div className="education-container">
        <div className="education-header">
          <span className="education-subtitle">Academic Background</span>
          <h2 className="education-title">Education & Certifications</h2>
        </div>

        <div className="education-content">
          <div className="education-main">
            <h3 className="education-section-title">
              <GraduationCap size={24} />
              Formal Education
            </h3>
            
            <div className="education-timeline">
              {education.map((item, index) => (
                <div key={index} className="education-item">
                  <div className="education-timeline-line">
                    <div 
                      className="education-timeline-dot" 
                      style={{ background: item.color }}
                    >
                      <span>{item.icon}</span>
                    </div>
                    {index !== education.length - 1 && <div className="education-timeline-connector"></div>}
                  </div>
                  
                  <div className="education-card">
                    <div className="education-card-header">
                      <div>
                        <h4 className="education-degree">{item.degree}</h4>
                        {item.specialization && (
                          <span className="education-specialization">{item.specialization}</span>
                        )}
                      </div>
                      <span className={`education-status status-${item.status.toLowerCase().replace(' ', '-')}`}>
                        {item.status}
                      </span>
                    </div>
                    
                    <div className="education-details">
                      <div className="education-detail">
                        <Award size={16} />
                        <span>{item.institution}</span>
                        {item.university && <span className="education-university">• {item.university}</span>}
                      </div>
                      <div className="education-detail">
                        <MapPin size={16} />
                        <span>{item.location}</span>
                      </div>
                      <div className="education-detail">
                        <Calendar size={16} />
                        <span>{item.period}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="education-certifications">
            <h3 className="education-section-title">
              <Award size={24} />
              Certifications
            </h3>
            
            <div className="certifications-grid">
              {certifications.map((cert, index) => (
                <div key={index} className="certification-card">
                  <span className="certification-icon">{cert.icon}</span>
                  <h4 className="certification-name">{cert.name}</h4>
                  <p className="certification-provider">{cert.provider}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;