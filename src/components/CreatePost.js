import React from 'react';
import db from '../config/firbaseConfig';
import {collection, addDoc} from 'firebase/firestore';
import {useFormInput} from '../Hooks/hooks'

function CreatePost() {
  const title = useFormInput('');
  const subTitle = useFormInput('');
  const content = useFormInput('');

  async function handleSubmit(e){
    e.preventDefault();
    console.log('title', title);
    console.log('subTitle', subTitle);
    console.log('content', content);

    const docRef = await addDoc(collection(db, "posts"),{
      title: title.value,
      subTitle: subTitle.value,
      content: content.value,
      createdAt: new Date(),
    });
    if(!docRef){
      console.log("error: ", docRef)
    }else{
      console.log('docRef ',docRef)
    }
  }

  return (
    <div className="create-post">
      <h1>Create Post</h1>
      <form onSubmit={handleSubmit}> 
        <div className="form-field">
          <label>Title</label>
          <input {...title}/>

          <label>Subtitle</label>
          <input {...subTitle} />

          <label>Content</label>
          <textarea {...content}></textarea>

          <button className="create-post-btn">Create Post</button>
        </div>
      </form>
    </div>
  )
}

export default CreatePost
