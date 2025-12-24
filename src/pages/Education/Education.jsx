import React from "react";
import { useTranslation, Trans } from "react-i18next";
import { MdDateRange } from "react-icons/md";
import { FaUniversity } from "react-icons/fa";
import "./Education.css";

function Education() {
  const { t } = useTranslation();

  const educationData = [
    {
      yearKey: "education_1337_year",
      titleKey: "education_1337_title",
      schoolKey: "education_1337_school",
    },
    {
      yearKey: "education_ofppt_year",
      titleKey: "education_ofppt_title",
      schoolKey: "education_ofppt_school",
    },
    {
      yearKey: "education_bac_year",
      titleKey: "education_bac_title",
      schoolKey: "education_bac_school",
    },
  ];

  return (
    <section id="education" className="education-section">
      <div className="education-container">
        
        <h2 className="section-title">
           <Trans 
             i18nKey="education_title" 
             components={{ span: <span className="text-primary" /> }} 
           />
        </h2>

        <div className="timeline">
          {educationData.map((item, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-date">
                  <MdDateRange className="icon-small" /> {t(item.yearKey)}
                </div>
                
                <h3 className="timeline-title">{t(item.titleKey)}</h3>
                
                <h5 className="timeline-school">
                  <FaUniversity className="icon-small" /> {t(item.schoolKey)}
                </h5>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Education;