import styled from 'styled-components';


const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 2000px;
`

const ImageWrapper = styled.div`
  display: flex;
  padding-left: 50px;
  gap: 50px;
  flex-direction: row;
  width: 2000px;
`
  const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImageText = styled.p`
  margin-top: 10px;
  font-size: 20px;
`;

const imagePath1 = `./public/nature01.jpg`;
const imagePath2 = `./public/nature02.jpg`;
const imagePath3 = `./public/nature03.jpg`;
const imagePath4 = `./public/nature04.jpg`;


const MovieCategoryPage = () => {
    return (
        <PageWrapper>
            <h1>카테고리</h1>
            <ImageWrapper>
                <ImageContainer>
                    <img src={imagePath1} alt="이미지 설명" height = '300px' />
                    <ImageText>현재 상영 중인</ImageText>
                </ImageContainer>
                <ImageContainer>
                    <img src={imagePath2} alt="이미지 설명" height = '300px' />
                    <ImageText>인기 있는</ImageText>
                </ImageContainer>
                <ImageContainer>
                    <img src={imagePath3} alt="이미지 설명" height = '300px' />
                    <ImageText>높은 평가를 받은</ImageText>
                </ImageContainer>
                <ImageContainer>
                    <img src={imagePath4} alt="이미지 설명" height = '300px' />
                    <ImageText>개봉 예정중인</ImageText>
                </ImageContainer>
            </ImageWrapper>
        </PageWrapper>
    );
};

export default MovieCategoryPage;