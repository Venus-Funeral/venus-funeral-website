import {
  Container,
  PageLayout,
  Text,
  TextBanner,
  theme,
} from '@venus-funeral/ui';
import styled from 'styled-components';
import {
  MdOutlineEmail,
  MdOutlinePhoneAndroid,
  MdOutlineFacebook,
} from 'react-icons/md';
import { ReactComponent as AvatarIcon } from '../../public/avatar1.svg';

const ContactContainer = styled(Container)`
  height: 600px;
  padding: 12px 0px;
  position: relative;
  margin: 12px auto;
`;

const ContactBgImage = styled.img`
  height: 100%;
  width: 50%;
  background-size: cover;
  background-position: left;
  position: absolute;
  top: 0;
  right: 0;
  z-index: -1;
`;

const ContactDetail = styled.div`
  /* padding-top: 36px; */
  /* padding-bottom: 36px; */
  padding: 44px 24px;
  height: 100%;
  z-index: 2;
`;

const ContactUsTitle = styled.h1`
  font-size: 4rem;
	color: ${(props) => props.theme.colors.gold}}
	margin-bottom: 0.75rem;
`;

const ContactDetailsCardContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const ContactDetailsCard = styled.div`
  box-shadow: 0 1px 6px 0 rgb(0 0 0 / 6%), 0 2px 32px 0 rgb(0 0 0 / 16%);
  margin: 0 8px;
  background-color: white;
  padding: 24px 48px;
  height: 100%;
  width: 40%;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: flex-start;
`;

const StyledAvastar = styled(AvatarIcon)`
  margin-bottom: 28px;
  border-radius: 50%;
  align-self: center;
  svg {
    width: 100%%;
    height: 36px;
  }
`;

const ContactTextContainer = styled.div`
  padding: 4px;
	margin-bottom: 4px;
  display: flex;
  align-items: center;
	color: ${(props) => props.theme.colors.gold}};
	font-size: 36px;
`;

const ContactDetailsText = styled.h1`
  padding-left: 12px;
	font-size: 20px;
	color: ${(props) => props.theme.colors.gold}};
	width: 70%;
`;

export function Contact() {
  return (
    <PageLayout title="聯絡我們" description="聯絡我們">
      <ContactContainer>
        <ContactDetail>
          <ContactUsTitle>聯絡我們</ContactUsTitle>
          <ContactDetailsCardContainer>
            <ContactDetailsCard>
              <StyledAvastar />
              <ContactTextContainer>
                <MdOutlineEmail />
                <ContactDetailsText>{process.env['email']}</ContactDetailsText>
              </ContactTextContainer>
              <ContactTextContainer>
                <MdOutlinePhoneAndroid />
                <ContactDetailsText>{process.env['phone']}</ContactDetailsText>
              </ContactTextContainer>
              <ContactTextContainer>
                <MdOutlineFacebook />
                <ContactDetailsText>
                  {process.env['facebookUrl']}
                </ContactDetailsText>
              </ContactTextContainer>
            </ContactDetailsCard>
            <ContactDetailsCard>
              <h1>For Form</h1>
              <h1>Input1</h1>
            </ContactDetailsCard>
          </ContactDetailsCardContainer>
        </ContactDetail>
        <ContactBgImage src="/contact.jpg"></ContactBgImage>
        {/*  */}
      </ContactContainer>
    </PageLayout>
  );
}

export default Contact;
