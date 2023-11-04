import PropTypes from 'prop-types';
const Blog = ({blog}) => {
    /* const {cover_img, title} = blog; */
    console.log(blog)
    return (
        <div>
            <h3>blog: </h3>
            <img className="w-52" src="" alt="" />
            <h3>title: knowledge </h3>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired
}

export default Blog;    