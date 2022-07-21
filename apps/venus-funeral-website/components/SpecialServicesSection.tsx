import { Container, Text } from '@venus-funeral/ui'
import styled from 'styled-components'
import React from 'react'
import { attributes } from '../../../content/specialServices.md'

const { services } = attributes

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 24px;
`;

const ServiceWrapper = styled.div`
  margin-bottom: 32px;

  & h6 {
    margin-bottom: 8px;
  }
`

const SpecialServicesSection: React.FC = () => {
  return (
    <>
    <Text component="h5" fontSize="h3">
      特式服務
    </Text>
    <Wrapper>
      {
        services && services.map(({ serviceName, serviceDescription }, idx) => (
          <ServiceWrapper key={idx}>
            <Text component="h6" fontSize="h5">
              {serviceName}
            </Text>
            <Text component="p">
              {serviceDescription}
            </Text>
          </ServiceWrapper>
        ))
      }
    </Wrapper>
      </>
  )
}

export default SpecialServicesSection