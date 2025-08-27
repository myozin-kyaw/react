import { useEffect, useState } from "react";

export default function UseEffectExample() {
    const [posts, setPosts] = useState([]);
    const [searchPost, setSearchPost] = useState('');

    const fetchPosts = (searchPost = '') => {
        const url = searchPost ? 'https://jsonplaceholder.typicode.com/posts?title=' + searchPost : 'https://jsonplaceholder.typicode.com/posts';
        fetch(url)
            .then((response) => response.json())
            .then((json) => setPosts(json));
    }
    
    useEffect(() => {
        fetchPosts(searchPost);
    }, [searchPost]);
    
    return (
        <div>
            <h1>useEffect() Example</h1>

            <div>
                <label htmlFor="searchPost">Search Post : </label>
                <input type="text" id="searchPost" onChange={(e) => setSearchPost(e.target.value)} value={searchPost}/>
            </div>

            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <div>
                            <h3>{post.title}</h3>
                            <p>{post.body}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}