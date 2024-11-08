import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

const AxiosPost = () => {

    const [posts, setPosts] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts')

                const data = response.data;
                setPosts(data);
            } catch (error) {
                setError(error.message)
            }
        };
        fetchPosts();
    }, [])

    return (
        <div>
            <h2>Posts (Fetch API)</h2>
            {error ? (<p>Erro: {error} </p>) :
                posts.map((post) => (
                    <div key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default AxiosPost