import { useState, useEffect } from 'react';

import Header from './Components/Header';
import Posts from './Components/Posts';
import addPost from './Components/AddPosts';


import './Styles/main.css';
import './Styles/Container.css';



function App() {

      const [showaddPost, setShowForm] = useState(false)

      const [posts, setPosts] = useState([])


      useEffect (() => {

        const getPosts = async () => {
          const postsFromServer = await fetchPosts()
          setPosts(postsFromServer)
        }

        getPosts()
      }, [])


      const fetchPosts = async () =>{
        const res = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await res.json()

        return data
      }


    // add Task
    const addPost = async (post) =>{
      const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers:{
          'Content-type': 'application/json'
        },
        body: JSON.stringify(post)
      })

      const data = await res.json()

      setPosts([...posts, data])
    }

  return (
    <div className="container">
      <Header title="Tabrez's Task : CRUD on JSON Data" onAdd={() => setShowForm(!showaddPost)}  showAdd={showaddPost}/>
      {showaddPost && <addPost onAdd={addPost}/>}
      {posts.length > 0 ? <Posts posts={posts} />  : 'There is no post to show' }
    </div>
  );
}

export default App;
