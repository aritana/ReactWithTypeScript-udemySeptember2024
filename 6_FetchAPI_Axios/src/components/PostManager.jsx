import { useState, useEffect } from "react";
import axios from "axios";
import PostForm from "./PostForm";

const PostManager = () => {

    const [posts, setPosts] = useState([]);
    const [error, setError] = useState("");

    const handleSuccess = (post, operation) => {
        if(operation == "add"){
            setPosts((currentPost)=> [post, ...currentPost]);
        }
    }

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts')

                const data = response.data.slice(0, 2);
                setPosts(data);
            } catch (error) {
                setError(error.message)
            }
        };
        fetchPosts();
    }, [])

    return (
        <div>
            <h1>Gerenciar Posts</h1>
            <PostForm onSuccess ={handleSuccess}/>
            <h2>Postagens</h2>
            {
                posts.map((post) => (
                    <div key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                        <button>Editar</button>
                    </div>
                ))
            }
        </div>
    )
}

export default PostManager
