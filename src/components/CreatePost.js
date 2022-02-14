import React, {useState} from 'react'

function CreatePost() {
  const [title, setTitle] = useState('');
  const [subTitle, setSubTitle] = useState('');
  const [content, setContent] = useState('');

  function handleSubmit(e){
    e.preventDefault();
    console.log('title', title);
    console.log('subTitle', subTitle);
    console.log('content', content);
  }

  return (
    <div className="create-post">
      <h1>Create Post</h1>
      <form onSubmit={handleSubmit}> 
        <div className="form-field">
          <label>Title</label>
          <input value={title} onChange={(e)=> setTitle(e.target.value)}/>

          <label>Subtitle</label>
          <input value={subTitle} onChange={(e)=> setSubTitle(e.target.value)}/>

          <label>Content</label>
          <textarea value={content} onChange={(e)=> setContent(e.target.value)}></textarea>

          <button className="create-post-btn">Create Post</button>
        </div>
      </form>
    </div>
  )
}

export default CreatePost
