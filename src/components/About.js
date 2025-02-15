import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

const Content = styled.p`
  font-size: 18px;
  line-height: 1.6;
`;

function About() {
  return (
    <Container className="container">
      <Title>About Us</Title>
      <Content>
        Welcome to our blog platform! We provide a space for sharing thoughts, ideas, and stories. Feel free to explore and contribute.
      </Content>
    </Container>
  );
}

export default About;