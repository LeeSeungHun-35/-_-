import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const ProjectContainer = styled.div`
  min-height: 100vh;
  background-color: #0f172a;
  padding: 2rem;
  
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  color: #e2e8f0;
  
  @media (max-width: 768px) {
    padding: 1rem;
  }
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

  @media (max-width: 768px) {
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
    margin-bottom: 1.5rem;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  margin-bottom: 1rem;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  background-color: #000;
  aspect-ratio: 16 / 9;

  @media (max-width: 768px) {
    margin-bottom: 0.8rem;
    border-radius: 8px;
  }
`;

const ImagesSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    gap: 0.8rem;
    margin-bottom: 1.5rem;
  }
`;

const StyledImage = styled.img`
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

  @media (max-width: 768px) {
    padding: 1.5rem;
    margin-bottom: 1.5rem;
    border-radius: 8px;
  }

  @media (max-width: 480px) {
    padding: 1rem;
    margin-bottom: 1rem;
  }
`;

const SectionTitle = styled.h2`
  font-size: 1.8rem;
  color: #60a5fa;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 1.4rem;
    margin-bottom: 1.2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }
`;

const TechCategory = styled.div`
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    margin-bottom: 1.2rem;
  }

  @media (max-width: 480px) {
    margin-bottom: 1rem;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

const CategoryTitle = styled.h3`
  color: #94a3b8;
  font-size: 1.2rem;
  margin-bottom: 0.8rem;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 0.6rem;
  }

  @media (max-width: 480px) {
    font-size: 0.95rem;
    margin-bottom: 0.5rem;
  }
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
  font-size: 1rem;

  &:last-child {
    margin-bottom: 0;
  }

  &::before {
    content: '•';
    position: absolute;
    left: 0;
    color: #60a5fa;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding-left: 1.2rem;
    margin-bottom: 0.4rem;
    line-height: 1.5;
  }

  @media (max-width: 480px) {
    font-size: 0.85rem;
    padding-left: 1rem;
    margin-bottom: 0.3rem;
    line-height: 1.4;
  }
`;

function Projects() {
  const navigate = useNavigate();
  const imagePath1 = process.env.PUBLIC_URL + '/videos/project1.jpg';
  const imagePath2 = process.env.PUBLIC_URL + '/videos/project2.jpg';
  const imagePath3 = process.env.PUBLIC_URL + '/videos/project3.jpg';

  return (
    <ProjectContainer>
      <ContentWrapper>
        <BackButton onClick={() => navigate('/')}>← 돌아가기</BackButton>
        
        <ImagesSection>
          <ImageContainer>
            <StyledImage src={imagePath1} alt="Deepfake Project 1" />
          </ImageContainer>
          <ImageContainer>
            <StyledImage src={imagePath2} alt="Deepfake Project 2" />
          </ImageContainer>
          <ImageContainer>
            <StyledImage src={imagePath3} alt="Deepfake Project 3" />
          </ImageContainer>
        </ImagesSection>

        <TechStackSection>
          <SectionTitle>딥페이크 판독 서비스 사용 기술 스택</SectionTitle>
          
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
              <TechItem>깃허브, 캐글 등 커뮤니티 데이터셋</TechItem>
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