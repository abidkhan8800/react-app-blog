import {Routes, Route} from 'react-router-dom';
import {NavBar, Home, CreatePost, PostDetail} from './'
function App() {
  return (
    <div className="container">
      <NavBar/>
      <Routes>
        <Route path="/" element={< Home />}></Route>
        <Route exact path="/post/:postId" element={< PostDetail />}></Route>
        <Route exact path="/create-post" element={< CreatePost />} ></Route>
      </Routes>
    </div>
  );
}

export default App;
