import React from 'react';
import { useParams} from 'react-router-dom';
import blogPosts from './blogpost';
import NavbarBlog from './navbarblog'; // Import the NavbarBlog component

const Post= () => {
  const { id } = useParams(); // Retrieve the id parameter from the URL
  const postId = parseInt(id); // Parse the id to an integer
  const post = blogPosts.find(post => post.id === postId); // Find the post with the matching id

  if (!post) {
    return <div>Post not found</div>; // Handle the case where the post is not found
  }

  return (
    <div>
      <NavbarBlog /> {/* Include the NavbarBlog component */}
      <div>
        <h2>{post.title}</h2>
        <p>{post.content}</p>
        {/* <Link to="/">Go Back</Link> */}
      </div>
    </div>
  );
}

export default Post;