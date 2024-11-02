import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const ProjectContainer = styled.div`
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

const BackButton = styled.button`
  background-color: transparent;
  color: #60a5fa;
  padding: 0.75rem 1.5rem;
  border: 2px solid #60a5fa;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1rem;
  margin-bottom: 2rem;
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(59, 130, 246, 0.2);
    background-color: rgba(59, 130, 246, 0.1);
  }
`;

const VideoContainer = styled.div`
  width: 100%;
  margin-bottom: 2rem;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  background-color: #000;
  aspect-ratio: 16 / 9;
`;

const StyledVideo = styled.video`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
`;

const TechStackSection = styled.div`
  background-color: #1e293b;
  border-radius: 12px;
  padding: 2rem;
  margin-bottom: 2rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.8rem;
  color: #60a5fa;
  margin-bottom: 1.5rem;
`;

const TechCategory = styled.div`
  margin-bottom: 1.5rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

const CategoryTitle = styled.h3`
  color: #94a3b8;
  font-size: 1.2rem;
  margin-bottom: 0.8rem;
  font-weight: 600;
`;

const TechList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const TechItem = styled.li`
  color: #e2e8f0;
  margin-bottom: 0.5rem;
  padding-left: 1.5rem;
  position: relative;
  line-height: 1.6;

  &:last-child {
    margin-bottom: 0;
  }

  &::before {
    content: '•';
    position: absolute;
    left: 0;
    color: #60a5fa;
  }
`;

function Projects() {
  const navigate = useNavigate();
  const videoPath = process.env.PUBLIC_URL + '/videos/test.mp4';

  return (
    <ProjectContainer>
      <ContentWrapper>
        <BackButton onClick={() => navigate('/')}>← 돌아가기</BackButton>
        
        <VideoContainer>
          <StyledVideo 
            muted 
            autoPlay 
            loop 
            playsInline
            preload="auto"
            controlsList="nodownload"
          >
            <source src={videoPath} type="video/mp4" />
            Your browser does not support the video tag.
          </StyledVideo>
        </VideoContainer>

        <TechStackSection>
          <SectionTitle>딥페이크 판독 서비스 기술 스택</SectionTitle>
          
          <TechCategory>
            <CategoryTitle>프로그래밍 언어</CategoryTitle>
            <TechList>
              <TechItem>Python</TechItem>
              <TechItem>JavaScript</TechItem>
            </TechList>
          </TechCategory>

          <TechCategory>
            <CategoryTitle>딥러닝</CategoryTitle>
            <TechList>
              <TechItem>프레임워크: TensorFlow</TechItem>
              <TechItem>고수준 API: Keras</TechItem>
              <TechItem>모델 아키텍처: CNN (Convolutional Neural Network)</TechItem>
            </TechList>
          </TechCategory>

          <TechCategory>
            <CategoryTitle>영상 처리</CategoryTitle>
            <TechList>
              <TechItem>라이브러리: OpenCV</TechItem>
            </TechList>
          </TechCategory>

          <TechCategory>
            <CategoryTitle>데이터셋</CategoryTitle>
            <TechList>
              <TechItem>FaceForensics++</TechItem>
              <TechItem>User-uploaded real/fake videos</TechItem>
            </TechList>
          </TechCategory>

          <TechCategory>
            <CategoryTitle>데이터 분석 및 시각화</CategoryTitle>
            <TechList>
              <TechItem>데이터 분석: Google Trends</TechItem>
              <TechItem>시각화 라이브러리: Matplotlib</TechItem>
            </TechList>
          </TechCategory>

          <TechCategory>
            <CategoryTitle>개발 환경</CategoryTitle>
            <TechList>
              <TechItem>IDE: VSCode</TechItem>
              <TechItem>클라우드 개발 환경: Google Colab</TechItem>
            </TechList>
          </TechCategory>

          <TechCategory>
            <CategoryTitle>프론트엔드</CategoryTitle>
            <TechList>
              <TechItem>프레임워크: React</TechItem>
            </TechList>
          </TechCategory>
        </TechStackSection>
      </ContentWrapper>
    </ProjectContainer>
  );
}

export default Projects;