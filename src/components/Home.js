import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
    //it sames like we donot need this states
    // const [blogs, setBlogs] = useState(null);
    // const [isloading, setIsloading] = useState(true);
    // const [error, setError] = useState(null);

    // function handeldelete(id) {
    //     const newblogs = blogs.filter(blog => blog.id !== id);
    //     setBlogs(newblogs);
    // }
    const { error, isloading, data: blogs } = useFetch('http://localhost:7000/blogs')

    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isloading && <div>Loading ...</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs" />}
        </div>
    );
}

export default Home;