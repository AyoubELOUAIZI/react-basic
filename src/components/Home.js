import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState(null);
    const [isloading, setIsloading] = useState(true);

    function handeldelete(id) {
        const newblogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newblogs);
    }

    useEffect(() => {
        console.log('this useEffect works every time the page renderes means every time the usestate works and some thing changed');
    });

    //hhhhh his code will make the user waite 1s before starting the function fetch
    useEffect(() => {
        setTimeout(() => {
            console.log('this useEffect works only in the begining');
            fetch("http://localhost:7000/blogs")
                .then(res => {
                    return res.json();
                })
                .then(data => {
                    //    console.log(data);
                    setBlogs(data);
                    setIsloading(false);
                });
        }, 1000);
    }, []);

    return (
        <div className="home">
            {isloading && <div>Loading ...</div>}
            {blogs && <BlogList blogs={blogs} title="All MY Blogs" handeldelete={handeldelete} />}
        </div>
    );
}

export default Home;