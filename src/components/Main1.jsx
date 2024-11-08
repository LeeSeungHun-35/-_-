import React from 'react';
import styled from 'styled-components';
import { TypeAnimation } from 'react-type-animation';
import { useNavigate } from 'react-router-dom';

const HomeContainer = styled.div`
  min-height: 100vh;
  background-color: #0f172a;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;
  }
`;

const ContentWrapper = styled.div`
  max-width: 1300px;
  width: 100%;
  text-align: left;
  padding: 2rem;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;
  }
`;

const Title = styled.h1`
  font-family: 'Inter', -apple-system, sans-serif;
  font-size: 3.5rem;
  color: #e2e8f0;
  margin-bottom: 1.5rem;
  font-weight: 700;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 2.8rem;
    margin-bottom: 1.2rem;
  }

  @media (max-width: 480px) {
    font-size: 2.2rem;
    margin-bottom: 1rem;
  }
`;

const Description = styled.div`
  font-family: 'SF Pro Display', -apple-system, sans-serif;
  font-size: 1.25rem;
  color: #94a3b8;
  line-height: 1.8;
  margin-bottom: 2.5rem;
  max-width: 600px;

  @media (max-width: 768px) {
    font-size: 1.1rem;
    line-height: 1.6;
    margin-bottom: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    line-height: 1.5;
    margin-bottom: 1.5rem;
  }
`;

const HighlightText = styled.span`
  color: #60a5fa;
  font-weight: 600;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: #60a5fa;
    opacity: 0.2;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 0.8rem;
  }
`;

const Button = styled.button`
  background-color: ${props => props.primary ? '#3b82f6' : 'transparent'};
  color: ${props => props.primary ? '#ffffff' : '#60a5fa'};
  padding: 0.75rem 1.5rem;
  border: 2px solid ${props => props.primary ? '#3b82f6' : '#60a5fa'};
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  font-family: 'Inter', -apple-system, sans-serif;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(59, 130, 246, 0.2);
    background-color: ${props => props.primary ? '#2563eb' : 'rgba(59, 130, 246, 0.1)'};
  }

  @media (max-width: 768px) {
    padding: 0.6rem 1.2rem;
    font-size: 0.95rem;
  }

  @media (max-width: 480px) {
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
    width: 100%;
  }
`;

const CodeBlock = styled.div`
  font-family: 'JetBrains Mono', monospace;
  font-size: 1.1rem;
  color: #60a5fa;
  margin-bottom: 1rem;
  padding: 0.5rem 0;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

const ListItem = styled.li`
  margin-bottom: 0.5rem;
  list-style-type: none;
  position: relative;
  padding-left: 1.5rem;
  color: #94a3b8;
  
  &::before {
    content: '•';
    position: absolute;
    left: 0;
    color: #60a5fa;
  }

  @media (max-width: 768px) {
    font-size: 0.95rem;
    margin-bottom: 0.4rem;
    padding-left: 1.2rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    margin-bottom: 0.3rem;
    padding-left: 1rem;
  }
`;

const Section = styled.div`
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    margin-bottom: 1.5rem;
  }

  @media (max-width: 480px) {
    margin-bottom: 1.2rem;
  }
`;

const SectionTitle = styled.h2`
  font-family: 'Inter', -apple-system, sans-serif;
  font-size: 1.5rem;
  color: #e2e8f0;
  margin-bottom: 1rem;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 1.3rem;
    margin-bottom: 0.8rem;
  }

  @media (max-width: 480px) {
    font-size: 1.1rem;
    margin-bottom: 0.6rem;
  }
`;

function Main1() {
  const navigate = useNavigate();

  const handleProjectClick = () => {
    navigate('/projects');  
  };

  const handleResumeClick = () => {
    navigate('/resume');    
  };

  return (
    <HomeContainer>
      <ContentWrapper>
        <CodeBlock>
          <TypeAnimation
            sequence={[
              '// Hacking & Security',
              1000,
              '// Machine Learning & Deep Learning',
              1000,
              '// Development',
              1000,
            ]}
            wrapper="div"
            speed={50}
            repeat={Infinity}
          />
        </CodeBlock>
        <Title>
          사이버보안 전공<br />
          대학생입니다.
        </Title>
        <Description>
          <HighlightText>보안</HighlightText>, <HighlightText>개발</HighlightText>, 
          <HighlightText> 인공지능</HighlightText> 등 소프트웨어 분야 전반에 관심 많고 
          다양한 기술을 활용하는 걸 좋아합니다.
        </Description>

        <Section>
          <SectionTitle>주 관심분야</SectionTitle>
          <ul>
            <ListItem>개발: 웹 풀스택</ListItem>
            <ListItem>해킹&보안: 취약점분석, 악성코드</ListItem>
            <ListItem>인공지능: 딥러닝</ListItem>
          </ul>
        </Section>

        <Section>
          <SectionTitle>개발 프로젝트 경험</SectionTitle>
          <ul>
            <ListItem>딥페이크 판독 서비스 <br/>프론트, AI모델 개발</ListItem><br/>
            <ListItem>유튜브 쇼츠 <br/>코어 담당 진행중<br/>(AI기반 알고리즘 개발 담당)</ListItem>
          </ul>
        </Section>

        <ButtonGroup>
          <Button primary onClick={handleProjectClick}>프로젝트 보기</Button>
          <Button onClick={handleResumeClick}>이력서 보기</Button>
        </ButtonGroup>
      </ContentWrapper>
    </HomeContainer>
  );
}

export default Main1;