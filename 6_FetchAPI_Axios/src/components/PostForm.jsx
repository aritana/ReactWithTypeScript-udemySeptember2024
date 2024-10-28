import axios from "axios";
import { useState } from "react";

const PostForm = ({onSuccess}) => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    const handleSumit = async (e) => {
        e.preventDefault();

        const newPost = { title, body, userId: 1 };

        try {

            const response = await axios.post("https://jsonplaceholder.typicode.com/posts", newPost);
            //adicionar na lista
            onSuccess(response.data,"add")

        } catch (error) {

            console.log("Erro ao enviar postagens: ", error)

        }
    }

    return (
        <form onSubmit={handleSumit}>
            <div>
                <input type="text"
                    value={title}
                    placeholder="Digite o título"
                    onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div>
                <textarea
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    placeholder="Digite o conteúdo">
                </textarea>
            </div>
            <button type="submit">Enviar</button>
        </form>
    )
}

export default PostForm
