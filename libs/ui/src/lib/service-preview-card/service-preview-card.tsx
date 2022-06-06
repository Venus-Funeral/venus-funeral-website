import Link from 'next/link';
import styled from 'styled-components';
import Text from '../text/text';
import { transformCloundinaryImage } from '../../utils/transformCloundinaryImage';

/* eslint-disable-next-line */
export interface ServicePreviewCardProps {
  thumbnail: string;
  serviceName: string;
}

const StyledServicePreviewCard = styled.div<Partial<ServicePreviewCardProps>>`
  background-color: ${({ theme }) => theme.colors.gray};
  background-image: url(${props => props.thumbnail});
  background-size: 100%;
  background-blend-mode: overlay;
  background-position: center ;
  background-repeat: no-repeat ;
  border-radius: 8px;
  cursor: pointer;
  position: relative;
  width: 100%;
  transition: 300ms ease-out;
  height: 150px;

  &:hover {
    background-size: 110%;
    transition: 300ms ease-out;
  }

  ${({ theme }) => theme.breakPoints.desktop} {
    height: 150px;
  }

  ${({ theme }) => theme.breakPoints.tablet} {
    height: 160px;
  }
`;

const StyledText = styled(Text)`
  /* font-weight: lighter; */
  position: absolute;
  text-align: center ;
  width: 100%;
  left: 0;
  bottom: 20px;
`

export function ServicePreviewCard({
  thumbnail,
  serviceName,
}: ServicePreviewCardProps) {
  return (
    <Link href={`/services/${serviceName}`}>
      <a>
        <StyledServicePreviewCard thumbnail={transformCloundinaryImage(thumbnail, 300)}>
          <StyledText color="white" fontSize="subtitle">
            {serviceName}
          </StyledText>
        </StyledServicePreviewCard>
      </a>
    </Link>
  );
}

export default ServicePreviewCard;
