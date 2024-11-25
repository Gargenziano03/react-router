import { useState, useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/Homepage'
import ChiSiamo from './pages/ChiSiamo'
import ListPost from './pages/ListPost'
import DefaultLayout from './pages/DefaultLayout'
function App() {
  const [postsData, setPostsData] = useState({})



  function fetchData(url = 'http://127.0.0.1:3000/posts') {
    fetch(url)
      .then(resp => resp.json())
      .then(data => {
        console.log(data);
        setPostsData(data)

      })
  }

  useEffect(fetchData, [])

  return (
    <>
      {/*<button type='button' onClick={handleClick}>fetch posts</button>*/}
      <section className='posts'>
        <div className="container">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-">
            {postsData.data ? postsData.data.map(post => (
              <div className="col" key={post.id}>
                <div className="card">
                  <h3>{post.title}</h3>
                  <img width="200px" height="150px" src={`http://127.0.0.1:3000/${post.image}`} alt="" />
                  <p>{post.content}</p>
                </div>
              </div>
            )) :
              <p>no results yet</p>}
          </div>
        </div>
      </section>

      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path='/' element={<HomePage />} />
            <Route path='/ChiSiamo' element={<ChiSiamo />} />
            <Route path='/ListPost' element={<ListPost />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
