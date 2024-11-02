import React from 'react';
import './Certification.css';

function Certification() {
  const sections = [
    {
      title: "현재 진행중",
      icon: "🔄",
      content: [
        {
          subtitle: "진행중인 활동",
          items: [
            {
              course: "대구경찰청 사이버수사과 대외활동",
              institution: "대구경찰청",
              period: "2024"
            },
            {
              course: "SW풀스택개발 양성 교육생",
              institution: "(재)포항테크노파크",
              period: "2024"
            }
          ]
        }
      ]
    },
    {
      title: "수료 & 교육 & 이수",
      icon: "📚",
      content: [
        {
          subtitle: "교육 이수 내역",
          items: [
            {
              course: "침해사고 대응을 위한 네트워크 데이터 분석 및 포렌식",
              institution: "KISA",
              period: "2024"
            },
            {
              course: "정보보안 기술적 이해",
              institution: "KISA",
              period: "2024"
            },
            {
              course: "랜섬웨어 이해와 방어",
              institution: "동남정보보호지원센터",
              period: "2023"
            },
            {
              course: "군장병 AI.SW 역량강화 개발과정",
              institution: "kakao x goorm",
              period: "2023"
            },
            {
              course: "악성코드",
              institution: "한국정보보호산업협회",
              period: "2021"
            },
            {
              course: "ICS & OT 산업제어 시스템 보안 및 대응방안",
              institution: "쿤텍(주)",
              period: "2021"
            },
            {
              course: "KUCIS소속 해킹 동아리 2년",
              institution: "한국정보보호산업협회",
              period: "2020~2021"
            },
            {
              course: "인공지능 기본과정(AI기술 활용)",
              institution: "(재)포항테크노파크",
              period: "2020"
            }
          ]
        }
      ]
    }
  ];

  return (
    <div className="main-container">
      <div className="terminal-header">
        <span className="terminal-title">root@:LSH~/수료 및 활동</span>
      </div>
      
      <div className="sections-container">
        {sections.map((section, index) => (
          <div key={index} className="section-card">
            <div className="section-header">
              <span className="section-icon">{section.icon}</span>
              <h2 className="section-title">{section.title}</h2>
            </div>
            
            <div className="education-content"> 
              {section.content[0].items.map((item, eduIndex) => (
                <div key={eduIndex} className="education-item">
                  <div className="course-info">
                    <span className="course-name">{item.course}</span>
                    <div className="institution-info">
                      <span className="institution">{item.institution}</span>
                      <span className="period">{item.period}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Certification;