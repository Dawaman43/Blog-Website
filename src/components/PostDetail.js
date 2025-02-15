import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { posts } from '../data/posts';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  font-size: 28px;
  margin-bottom: 20px;
`;

const Content = styled.p`
  font-size: 18px;
  line-height: 1.6;
  margin-bottom: 20px;
`;

const EditLink = styled(Link)`
  display: inline-block;
  margin-right: 10px;
  padding: 10px 15px;
  background-color: #ffc107;
  color: #fff;
  border-radius: 5px;
  text-decoration: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e0a800;
  }
`;

const BackLink = styled(Link)`
  display: inline-block;
  padding: 10px 15px;
  background-color: #6c757d;
  color: #fff;
  border-radius: 5px;
  text-decoration: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #545b62;
  }
`;

function PostDetail() {
  const { id } = useParams();
  const post = posts.find(p => p.id === parseInt(id));

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <Container className="container">
      <Title>{post.title}</Title>
      <Content>{post.content}</Content>
      <EditLink to={`/edit/${post.id}`}>Edit Post</EditLink>
      <BackLink to="/">Back to Home</BackLink>
    </Container>
  );
}

export default PostDetail;