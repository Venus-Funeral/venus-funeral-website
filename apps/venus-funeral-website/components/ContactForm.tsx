import { Button, Text } from '@venus-funeral/ui';
import React from 'react';
import styled, { css } from 'styled-components';

const textFieldCommonStyles = css`
  color: ${({ theme }) => theme.colors.default};
  border-radius: 4px;
  border: 1px solid ${({theme}) => theme.colors.lightgold};
  padding: 0 12px;
  font-size: ${({theme}) => theme.fontSize.body1};
  outline-color: ${({theme}) => theme.colors.gold};
  width: 100%;
`

const StyledInput = styled.input`
  ${textFieldCommonStyles}
  height: 48px;
`;

const StyledTextarea = styled.textarea`
  ${textFieldCommonStyles}
  padding-top: 12px;
  padding-bottom: 12px;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
`

const ContactForm: React.FC = () => {
  return (
    <StyledForm>
      <Text></Text>
      <StyledInput type="text" placeholder="聯絡人姓名" required/>
      <StyledInput type="text" placeholder="聯絡電話" required/>
      <StyledTextarea placeholder="內容" rows={7} required />
      <Button type="submit" isButton href="" variant="contained">傳送</Button>
    </StyledForm>
  );
};

export default ContactForm;
