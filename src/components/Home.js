import { useState,useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState(null);

    function handeldelete(id){
       const newblogs=blogs.filter(blog=>blog.id !== id);
       setBlogs(newblogs);
    }

useEffect(()=>{
console.log('this useEffect works every time the page renderes means every time the usestate works and some thing changed');
});
useEffect(()=>{
console.log('this useEffect works only in the begining');
    fetch("http://localhost:7000/blogs")
    .then(res=>{
        return res.json();
    })
    .then(data=>{
    //    console.log(data);
    setBlogs(data);
    });

},[]);

    return (
        <div className="home">
           {blogs&& <BlogList blogs={blogs} title="All MY Blogs" handeldelete={handeldelete}/> }           
        </div>
    );
}

export default Home;