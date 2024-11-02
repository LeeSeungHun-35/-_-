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
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  text-align: left;
  padding: 2rem;
`;

const Title = styled.h1`
  font-family: 'Inter', -apple-system, sans-serif;
  font-size: 3.5rem;
  color: #e2e8f0;
  margin-bottom: 1.5rem;
  font-weight: 700;
  line-height: 1.2;
`;

const Description = styled.div`
  font-family: 'SF Pro Display', -apple-system, sans-serif;
  font-size: 1.25rem;
  color: #94a3b8;
  line-height: 1.8;
  margin-bottom: 2.5rem;
  max-width: 600px;
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
`;

const CodeBlock = styled.div`
  font-family: 'JetBrains Mono', monospace;
  font-size: 1.1rem;
  color: #60a5fa;
  margin-bottom: 1rem;
  padding: 0.5rem 0;
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
`;

const Section = styled.div`
  margin-bottom: 2rem;
`;

const SectionTitle = styled.h2`
  font-family: 'Inter', -apple-system, sans-serif;
  font-size: 1.5rem;
  color: #e2e8f0;
  margin-bottom: 1rem;
  font-weight: 600;
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
          <HighlightText> 인공지능</HighlightText> 등 소프트웨어 분야 전반에 관심이 많고 
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
          <SectionTitle>개발경험</SectionTitle>
          <ul>
            <ListItem>딥페이크 판독 서비스: 프론트, AI모델 개발</ListItem>
            <ListItem>유튜브 쇼츠: 코어(AI기반 알고리즘 개발 담당)</ListItem>
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