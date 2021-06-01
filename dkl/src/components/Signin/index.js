import React from 'react';
import {
  Container,
  FormWrap,
  Icon,
  FormContent,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormButton,
  FormInputMessage,
  LinkE
} from './SigninElement';
import ParticlesBg from 'particles-bg';

const SignIn = () => {

  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">DKL</Icon>
          <ParticlesBg type="circle" bg={true} />
          <FormContent>
            <Form>
              <FormH1>Contact us for a speedy quote</FormH1>
              <FormLabel>Email</FormLabel>
                <FormInput type='text' required />
                <FormLabel htmlFor='for'>Subject</FormLabel>
                <FormInput type='text' required />
                <FormLabel htmlFor='for'>
                Message</FormLabel>
                <FormInputMessage type='message' />
              <FormButton type='submit'>
                <LinkE href="mailto:bglance68@gmail.com">
              Send message</LinkE></FormButton>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default SignIn;
