import {  useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const { id } = useParams();
    const { error, isloading, data: blog } = useFetch('http://localhost:7000/blogs/'+id);

    const handelClick=()=>{
        fetch('http://localhost:7000/blogs/' + blog.id, {
            method: 'DELETE',
        }).then(() => {
            console.log(`blog ${blog.id} has been deleted`);
          
        });
    }

    return (
        <div className="blog-details">
            {/* <h2>Blog details - {id}</h2> */}
            {isloading && <div>Loading ...</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <div>{blog.body}</div>
                    <button onClick={handelClick}>Delete blog</button>
                </article>
            )}  

        </div>
    );
}

export default BlogDetails;