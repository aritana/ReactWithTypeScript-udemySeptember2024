import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'


const PostLoader = () => {

    const [post, setPost] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")
    const [successMessage, setSuccessMessage] = useState()
    const { postId } = useParams();

    useEffect(() => {

        const fetchPost = async () => {
            setLoading(true);
            setError("");
            setSuccessMessage("");

            try {

                if(postId > 500){
                    throw new Error("Não Existe!!")
                }

                const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
                const data = response.data;

                setPost(data);    
                setSuccessMessage("Post carregado com sucesso!");   

            } catch (error) {

                setError("Falha ao carregar post: " + error.message);

            } finally {
                setLoading(false)
            }
        }

        fetchPost();

    }, [postId])

    return (
        <div>
            <h1>Post: {postId}</h1>
            {loading && <p>Carregando...</p>}
            {error && <p style={{color:"red"}}>{error}</p>}
            {successMessage && <p style={{color:"green"}}>{successMessage}</p>}
            {post &&  (
                <div>
                    <h2>{post.title}</h2>
                    <h2>{post.body}</h2>
                </div>
            )}
        </div>
    )
}

export default PostLoader
