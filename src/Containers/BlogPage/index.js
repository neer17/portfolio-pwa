import React from "react";
import BlogPage from "../../components/BlogPage/index";
import Spinner from "../Spinner/index";
import usePosts from "../../hooks/usePosts";

const BlogPageContainer = () => {
    const [loading, postData] = usePosts();

    return (
        <>
            {postData[0] && !loading ? (
                <BlogPage
                    postData={postData}
                />
            ) : (
                <Spinner />
            )}
        </>
    );
};

export default BlogPageContainer;
