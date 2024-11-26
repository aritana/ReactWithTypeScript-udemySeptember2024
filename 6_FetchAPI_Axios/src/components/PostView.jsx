import React from 'react'
import { useParams } from 'react-router-dom'
import useHttp from '../hooks/useHttp';

function PostView() {

    const { postId } = useParams();
    const { data: post, error, loading } = useHttp(`https://jsonplaceholder.typicode.com/posts/${postId}`)

    return (
        <div>
            <h1>Post: {postId}</h1>
            {loading && <p>Carregando...</p>}
            {error && <p style={{ color: "red" }}>{error}</p>}       
            {post && (
                <div>
                    <h2>{post.title}</h2>
                    <h2>{post.body}</h2>
                </div>
            )}
        </div>
    )
}

export default PostView
