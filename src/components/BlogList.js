const BlogList = ({ blogs, title, handeldelete }) => {
    // Destructuring the props object to get the blogs and title data
    // The equivalent code is:
    // const blogs = props.blogs;
    // const title = props.title;

    // Logging the blogs data to the console
    // console.log(blogs);

    // Returning the JSX for the component
    return (
        <div className="blog-list">
            {/* Displaying the title passed as a prop */}
            <h2>{title}</h2>
            {/* Mapping over the blogs data to create a preview for each blog */}
            {blogs.map(blog => (
                <div className="blog-preview" key={blog.id} >
                    {/* Displaying the title and author of each blog */}
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <p>{blog.body}</p>
                    <button onClick={()=>handeldelete(blog.id)}>delete blog</button>
                </div>
            ))}
        </div>
    );
}

// Exporting the component for use in other parts of the application
export default BlogList;
