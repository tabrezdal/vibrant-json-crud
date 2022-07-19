import { Routes, Route } from 'react-router';
import AddPost from './Pages/AddPost';
import EditPost from './Pages/EditPost';
import Home from './Pages/Home';


function App() {
  return (
   <Routes>
     <Route path="/" element={<Home />}></Route> 
     <Route path="add" element={<AddPost />}></Route>
     <Route path="edit" element={<EditPost />}></Route> 
   </Routes>
  );
}

export default App;
