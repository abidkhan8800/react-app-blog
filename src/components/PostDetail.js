import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import db from '../config/firbaseConfig';
import { doc, getDoc } from "firebase/firestore";

function PostDetail() {
  const [post, setPost] = useState({});
  const {postId} = useParams();

  const fetchPost = async () =>{
    const docRef = doc(db, "posts", postId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      setPost(docSnap.data());
    } else {
      console.log("No such document!");
    }
  }


  useEffect(() =>{
    fetchPost();
  },[])
  return (
    <div className="post-detail">
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  )
}

export default PostDetail