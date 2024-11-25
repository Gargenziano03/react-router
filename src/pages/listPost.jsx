import { useState, useEffect } from 'react'
export default function ListPost() {

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
        </>
    )
}
