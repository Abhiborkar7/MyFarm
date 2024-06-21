import React, { useContext, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import UserContext from "../context/UserContext";

const Post = ({ post }) => {
  const { setPosts } = useContext(UserContext);

  const handleLikeClick = () => {
    console.log("Like button clicked");
    console.log(post._id);
    axios
      .patch(`/api/posts/${post._id}/like`)
      .then((response) => {
        console.log("Post liked successfully: ", response);
      })
      .catch((error) => {
        console.error("Error liking post(unknown): ", error.response);
      });
  };

  const handleCommentClick = () => {
    console.log("Comment button clicked");
    // Add your functionality here
  };

  // const handleEditClick = () => {
  //   console.log("Edit button clicked");
  //   // Add your functionality here
  // };

  const handleBookmarkClick = () => {
    console.log("Bookmark button clicked");
    // Add your functionality here
  };

  // const handleDeleteClick = () => {
  //   console.log("Delete button clicked");
  //   //deleting the post from the backend
  //   axios
  //     .delete(`/api/posts/${post.id}`)
  //     .then((response) => {
  //       console.log(response);
  //     })
  //     .catch((error) => {
  //       console.error(`Error deleting post: ${error}`);
  //     });
  //   //deleting the post from the frontend
  //   setPosts((prevPosts) => {
  //     return prevPosts.filter((item) => item.id !== post.id);
  //   });
  // };

  return (
    <PostWrapper>
      <UserInfo>
        <UserData>
          <UserProfile src={post.createdBy.profilePhoto} />
          <UserName>{post.createdBy.username}</UserName>
        </UserData>
        <i className="fa-solid fa-bars"></i>
      </UserInfo>

      <PostMedia>
        <img src={post.file} alt="" />
      </PostMedia>

      <PostInfo>
        <button onClick={handleLikeClick}>
          <i className="fa-regular fa-heart like"></i>
        </button>

        <button onClick={handleCommentClick}>
          <i className="fa-regular fa-comment"></i>
        </button>

        <button onClick={handleBookmarkClick}>
          <i className="fa-regular fa-bookmark"></i>
        </button>

        {/* <button onClick={handleEditClick}>
          <i className="fa-regular fa-pen-to-square"></i>
          </button> */}
        {/* <button onClick={handleDeleteClick}>
          <i className="fa-regular fa-trash-can"></i>
        </button> */}
      </PostInfo>

      <PostDetails>
        <p className="likesAndComments">{`${post.likes?.length} likes, ${post.comments?.length} comments`}</p>
        {/* <p className="likesAndComments">{`${post.comments.length} comments`}</p> */}
        <h2>{post.title}</h2>
        <p>{post.content}</p>
      </PostDetails>
    </PostWrapper>
  );
};

export default Post;

const PostWrapper = styled.div`
  width: 80%;
  height: auto;
  margin: 0 auto;
  margin-top: 20px;
  padding-bottom: 10px;
  background-color: #fff;
  border-radius: 20px;
`;

const UserInfo = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 30px;
  /* background-color: #afdaaf; */
  i {
    font-size: 1.5rem;
    color: #333;
    cursor: pointer;
  }
`;

const UserData = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const UserProfile = styled.img`
  height: 30px;
  width: 30px;
  border-radius: 50%;
  object-fit: center;
`;

const UserName = styled.div``;

const PostMedia = styled.div`
  flex: 1;
  height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;

  /* height: 300px; */
  background-color: #c5c5c5;
  overflow: hidden;
  img {
    object-fit: cover;
    width: 100%;
  }
`;

const PostInfo = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 30px;
  padding: 15px 0 10px 20px;
  /* background-color: #afdaaf; */
  button {
    font-size: 1.5rem;
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
`;

const PostDetails = styled.div`
  /* margin: 5px 15px; */
  /* background-color: #f9b3b3; */
  height: auto;
  * {
    margin-left: 20px;
  }
  .likesAndComments {
    /* font-size: 1rem; */
    color: #aaa;
  }
  h2 {
    /* margin: 5px 0 10px 15px; */
    font-size: 2rem;
    margin-top: 10px;
    color: #333333;
    margin-bottom: 7px;
  }
  p {
    /* margin: 0 0 3px 15px; */
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 0.8rem;
    color: #818181;
  }
`;
