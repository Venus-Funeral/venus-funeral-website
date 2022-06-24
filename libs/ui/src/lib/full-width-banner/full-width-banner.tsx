import styled from 'styled-components';
import { PropsWithChildren } from 'react';

/* eslint-disable-next-line */
export interface FullWidthBannerProps {
  imageSrc?: string;
}

const StyledFullWidthBanner = styled.div`
  display: flex;
  background: ${({ theme }) => theme.colors.lightgold};
  width: 100%;
  flex-direction: column-reverse
  
  ${({ theme }) => theme.breakPoints.tablet} {
    height: 735px;
    flex-direction: row;
  }
`;

const BannerImage = styled.img`
  ${({ theme }) => theme.breakPoints.tablet} {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`

const ImageWrapper = styled.div`
  ${({ theme }) => theme.breakPoints.tablet} {
    width: 50%;
  }
`

const TextContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`

export function FullWidthBanner({
  imageSrc,
  children
}: PropsWithChildren<FullWidthBannerProps>) {
  return (
    <StyledFullWidthBanner>
      <TextContainer>
        {children}
      </TextContainer>
      <ImageWrapper>
        <BannerImage src={imageSrc} alt="banner image" />
      </ImageWrapper>
    </StyledFullWidthBanner>
  );
}

export default FullWidthBanner;
