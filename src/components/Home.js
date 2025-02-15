import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { posts } from '../data/posts';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  font-size: 32px;
  margin-bottom: 20px;
  text-align: center;
  color: #333;
`;

const SearchBar = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const PostList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const PostItem = styled.li`
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 8px;
  margin-bottom: 20px;
  padding: 20px;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

const PostTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
  color: #007bff;
  transition: color 0.3s ease;

  &:hover {
    color: #0056b3;
  }
`;

const PostExcerpt = styled.p`
  font-size: 18px;
  line-height: 1.6;
  margin-bottom: 20px;
  color: #555;
`;

const NewPostLink = styled(Link)`
  display: inline-block;
  padding: 10px 20px;
  background-color: #28a745;
  color: #fff;
  border-radius: 5px;
  text-decoration: none;
  transition: background-color 0.3s ease;
  font-size: 16px;
  margin: 0 auto;
  display: block;

  &:hover {
    background-color: #218838;
  }
`;

function Home() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container className="container">
      <Title>Blog Posts</Title>
      <SearchBar
        type="text"
        placeholder="Search posts..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <PostList>
        {filteredPosts.map(post => (
          <PostItem key={post.id}>
            <Link to={`/post/${post.id}`}>
              <PostTitle>{post.title}</PostTitle>
            </Link>
            <PostExcerpt>{post.content.substring(0, 150)}...</PostExcerpt>
            <Link to={`/post/${post.id}`} className="read-more">
              Read More
            </Link>
          </PostItem>
        ))}
      </PostList>
      <NewPostLink to="/new">Create New Post</NewPostLink>
    </Container>
  );
}

export default Home;