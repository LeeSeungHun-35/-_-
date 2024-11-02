import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const ResumeContainer = styled.div`
  min-height: 100vh;
  background-color: #0f172a;
  padding: 2rem;
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  color: #e2e8f0;
`;

const Title = styled.h1`
  font-family: 'Inter', -apple-system, sans-serif;
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #e2e8f0;
`;

const BackButton = styled.button`
  background-color: transparent;
  color: #60a5fa;
  padding: 0.75rem 1.5rem;
  border: 2px solid #60a5fa;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  font-family: 'Inter', -apple-system, sans-serif;
  margin-bottom: 2rem;

  &:hover {
    background-color: rgba(59, 130, 246, 0.1);
    transform: translateY(-2px);
  }
`;

function Resume() {
  const navigate = useNavigate();

  return (
    <ResumeContainer>
      <ContentWrapper>
        <BackButton onClick={() => navigate('/')}>← 돌아가기</BackButton>
        <Title>이력서</Title>
        {/* 여기에 이력서 내용을 추가하세요 */}
      </ContentWrapper>
    </ResumeContainer>
  );
}

export default Resume;