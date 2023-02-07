import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState(null);
    const [isloading, setIsloading] = useState(true);
    const [error, setError] = useState(null);

    function handeldelete(id) {
        const newblogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newblogs);
    }

    useEffect(() => {
        console.log('this useEffect works every time the page renderes means every time the usestate works and some thing changed');
    });

    //hhhhh his code will make the user waite 1s before starting the function fetch
    //this is not for the real apps it is just kind of semilating what hapent befor fetching data
    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:7000/blogs')
                .then(res => {
                    console.log("---------res--------")
                    console.log(res)
                    if (!res.ok) { // error coming back from server
                        throw Error('could not fetch the data for that resource');
                    }
                    return res.json();
                })
                .then(data => {
                    setIsloading(false);
                    setBlogs(data);
                    setError(null);
                })
                .catch(err => {
                    // auto catches network / connection error
                    setIsloading(false);
                    setError(err.message);
                })
        }, 1000);
    }, [])

    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isloading && <div>Loading ...</div>}
            {blogs && <BlogList blogs={blogs} title="All MY Blogs" handeldelete={handeldelete} />}
        </div>
    );
}

export default Home;