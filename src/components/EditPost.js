import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { posts } from '../data/posts';
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

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 10px;
  font-weight: bold;
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Textarea = styled.textarea`
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  resize: vertical;
`;

const Button = styled.button`
  padding: 10px 15px;
  background-color: #ffc107;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e0a800;
  }
`;

const BackLink = styled(Link)`
  display: inline-block;
  margin-top: 10px;
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

function EditPost() {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = posts.find(p => p.id === parseInt(id));
  const [title, setTitle] = useState(post ? post.title : '');
  const [content, setContent] = useState(post ? post.content : '');

  useEffect(() => {
    if (!post) {
      navigate('/');
    }
  }, [post, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (post) {
      post.title = title;
      post.content = content;
    }
    navigate('/');
  };

  return (
    <Container className="container">
      <Title>Edit Post</Title>
      <Form onSubmit={handleSubmit}>
        <Label>
          Title:
          <Input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </Label>
        <Label>
          Content:
          <Textarea value={content} onChange={(e) => setContent(e.target.value)} required />
        </Label>
        <Button type="submit">Save Changes</Button>
      </Form>
      <BackLink to="/">Back to Home</BackLink>
    </Container>
  );
}

export default EditPost;