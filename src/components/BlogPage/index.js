import React from 'react';
import Container from "./style/Container";
import BlogWrapper from "./style/BlogWrapper";
import blogFallbackImage from "../../assets/blogFallback.svg";

const Blogs = ({postData}) => {
    return (
        <Container>
            <h2>All Posts</h2>
            <div>
                {postData.map((data, index) => (
                    <BlogWrapper key={index}>
                        <img src={data.cover_image ? data.cover_image : blogFallbackImage} alt="Cover" height='200px' />
                        <span />
                        <div>
                            <h3>{data.title} </h3>
                            <h5>Posted On <a href={data.url} target="_blank" rel="noopener noreferrer">{new Date(data.published_at).toLocaleDateString()}</a> By <a href="https://dev.to/NeerajSewani" target="_blank" rel="noopener noreferrer">@Neeraj</a></h5>
                            <p>{data.description}</p>
                            <a href={data.url} target="_blank" rel="noopener noreferrer">Read More <i className="fas fa-chevron-right" alt="project link" /></a>
                        </div>
                    </BlogWrapper>
                ))}
            </div>
        </Container>
    )
}

export default Blogs;