/* eslint-disable @next/next/no-img-element */
import { Container, PageLayout, Text, TextBanner, transformCloundinaryImage } from "@venus-funeral/ui"
import { NextPage } from "next/types"
import styled from 'styled-components'
import Gallery from "react-photo-gallery"
// import optional lightbox plugins
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";


import { attributes } from '../../../../content/flowerService.md'
import { useState } from "react";

const KeyPointNode = styled.div`
${({ theme }) => `
  border: 1px solid ${theme.colors.lightgray};
  border-radius: 9999px;
  width: 200px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  letter-spacing: 1.05px;
  
`}
`

const KeyPointNodesWrapper = styled.div`
  align-items: center;
  display: flex;
  margin: 64px 0;
  justify-content: center;
  gap: 12px;
`

const FlowerImageCard = styled.div`
  display: inline-block;
`

const FlowerImage = styled.img``

const FlowerImageDescription = styled.div`
  display: flex;
  justify-content: space-between;
`

const {
  bannerImage,
  description,
  serviceKeyPoints,
  services,
} = attributes

const photoData = services.map(({
  thumbnail,
  flowerName,
  tier,
  price
}) => ({
  src: thumbnail,
  width: 3,
  height: 2,
  price,
  tier,
  flowerName
}))

const breakpoints = [600, 1200]

const photos = services.map(({
  thumbnail,
  floweName,
  tier,
}, index) => {
  const width = 1920;
  const height = 1080;
  return {
    src: thumbnail,
    key: `${index}`,
    width,
    height,
    hahah: '123',
    images: breakpoints.map((breakpoint) => {
      const breakpointHeight = Math.round((height / width) * breakpoint);
      return {
        src: thumbnail,
        width: breakpoint,
        height: breakpointHeight,
        hahah: 'ggg'
      };
    })
  };
});

const slides = photos.map(({
  src, width, height, images
}) => ({
  src,
  aspectRatio: width / height,
  srcSet: images.map((image) => ({
    src: image.src,
    width: image.width,
  })),
}));

const GalleryImage = (props: any) => {
  const { index, left, top, key, photo, onClick } = props
  const { flowerName, price, tier, ...photoProps } = photo
  console.log(props)
  return (
    <FlowerImageCard>
      <FlowerImage
        alt={flowerName}
        style={{ borderRadius: '12px' }}
        key={key} {...photoProps}
        onClick={onClick}
      />
      <FlowerImageDescription>
        <Text>{flowerName}</Text>
        <Text>${price}</Text>
      </FlowerImageDescription>
    </FlowerImageCard>
  )
}

const FlowerPage: NextPage = () => {
  const [index, setIndex] = useState(-1);

  const clickPhotoHandler = (event, { photo, index }) => {
    console.log('clicked')
    console.log('index', index)
    setIndex(index)
  }

  return (
    <PageLayout
      title="帛事花牌"
    >
      <TextBanner
        header="帛事花牌"
        content={description}
        imageSrc={transformCloundinaryImage(bannerImage, 891)}
      />

      <KeyPointNodesWrapper>
        {
          serviceKeyPoints && serviceKeyPoints.map(({ keyPoint }, idx) => (
            <KeyPointNode key={idx}>
              <Text fontSize="body1" bold>
                {keyPoint}
              </Text>
            </KeyPointNode>
          ))
        }
      </KeyPointNodesWrapper>
      <Container>
        <Gallery
          direction="column"
          photos={photoData}
          targetRowHeight={150}
          renderImage={GalleryImage}
          onClick={clickPhotoHandler as any}
        // onClick={(event, photo, index) => setIndex(index)}
        />

        <Lightbox
          slides={slides}
          open={index >= 0}
          index={index}
          close={() => setIndex(-1)}
          // enable optional lightbox plugins
          plugins={[Fullscreen, Slideshow, Thumbnails]}
        />
      </Container>
    </PageLayout>
  )
}

export default FlowerPage
