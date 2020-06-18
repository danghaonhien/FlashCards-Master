import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getPosts } from "../../actions/post";
import { Header } from "semantic-ui-react";
import Spinner from "../Spinner";
import PostItem from "./PostItem.js";
import PostForm from "./PostForm.js";
import { Link } from "react-router-dom";
import { Icon } from "semantic-ui-react";
const Posts = ({ getPosts, post: { posts, loading } }) => {
  useEffect(() => {
    getPosts();
  }, [getPosts]);
  return loading ? (
    <Spinner />
  ) : (
    <Fragment>
      <Link to='/profiles'>
        {" "}
        <Icon name='arrow alternate circle left outline' size='big' />
      </Link>
      <h1>Playground</h1>
      <Header>Let's Chat </Header>
      <PostForm />
      <div className='posts'>
        {posts.map((post) => (
          <PostItem key={post._id} post={post} />
        ))}
      </div>
    </Fragment>
  );
};

Posts.propTypes = {
  getPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  post: state.post,
});
export default connect(mapStateToProps, { getPosts })(Posts);
