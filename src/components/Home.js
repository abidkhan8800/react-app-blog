import React from 'react';
import{useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import db from '../config/firbaseConfig';
import {collection,onSnapshot} from 'firebase/firestore';

function Home() {
  const [posts, setPosts] = useState([]);
  const fetchData = ()  => {
    let allPosts = []
     const unsub = onSnapshot(collection(db, "posts"), (docs) => {
      docs.forEach((post)=>{
      let data = post.data();
      data.id = post.id;
      allPosts.push(data)

    });
    setPosts(allPosts)
   });
  }
  useEffect(()=>{
    
    fetchData();
  }, []);

  return (
    <div className="home">
      <h1>Tech Blog</h1>
      <div id="blog-by">Abid</div>
      {posts.map((post,idx)=>
        (
          <div className="post" key={`post-${idx}`}>
            <Link to={`/post/${post.id}`}>
              <h3>{post.title}</h3>
            </Link>
            <p>{post.subTitle}</p>
          </div>
        )
      )}
    </div>
  )
}

export default Home