import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/component/Footer';
import Header from './components/component/Header';
import Navbar from './components/component/Navbar';
import SinglePost from './components/component/SinglePost';
import About from './components/screens/About';
import Contact from './components/screens/Contact';
import Home from './components/screens/Home';
import Login from './components/screens/Login';
import Mamuriyat from './components/screens/Mamuriyat';
import News from './components/screens/News';
import Victories from './components/screens/Victories';
import Write from './components/screens/Write';
import { useContext, useState, useEffect } from 'react';
import { Context } from './context/Context';
import axios from 'axios';
import Search from './components/screens/Search';
import Children from './components/screens/Children';
import SingleChild from "./components/component/SingleChild"
import Messenger from './components/screens/Messenger';

function App() {
  const axiosInstance = axios.create({baseURL:process.env.REACT_APP_API_URL,})
  const {user} = useContext(Context);
  const [apploading, setApploading] = useState(true)
  useEffect(() => {
    const fetchPosts = async () => {
        setApploading(true)
        const res = await axiosInstance.get("/posts")
        console.log(res.data)
        setApploading(false)
    }
    fetchPosts()
}, [])

  if (apploading) {
    return (
      <div className="boshi">
        <div className="planet"></div>
      </div>

    )
  }
  return (
      <BrowserRouter>
        <Navbar />
        <Header />
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/mamuriyat">
          <Mamuriyat />
        </Route>
        <Route path="/victories">
          <Victories />
        </Route>
        <Route path="/post/:postId">
          <SinglePost />
        </Route>
        <Route path="/getchild/:postId">
          <SingleChild />
        </Route>
        <Route path="/news">
          <News />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/adminpanel">
          {user ? <Write /> : <Login />}
        </Route>
        <Route path="/search">
          <Search />
        </Route>
        <Route path="/oquvchilar">
          <Children />
        </Route>
        <Route path="/messenger">
          <Messenger />
        </Route>
        <Footer /> 
      </BrowserRouter>
  );
}

export default App;
