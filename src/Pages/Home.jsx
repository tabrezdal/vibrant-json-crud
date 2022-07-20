import { useState, useEffect } from "react";

import Header from "../Components/Header";
import Posts from "../Components/Posts";

import "../Styles/main.css";
import "../Styles/Container.css";

function Home() {
  const [showaddPost, setShowForm] = useState(false);

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const postsFromServer = await fetchPosts();
      setPosts(postsFromServer);
    };

    getPosts();
  }, []);


  //fetch
  const fetchPosts = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();

    return data;
  };

  //update
  const updatePost = async (id) =>{
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const data = await res.json() 
    return data
  }

  return (
    <div className="container">
      <Header title="Tabrez's Task : CRUD on JSON Data" />
      {posts.length > 0 ? <Posts posts={posts} /> : "There is no post to show"}
    </div>
  );
}

export default Home;
