import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../Spinner";
import { getPost } from "../../actions/post";
import PostItem from "../Posts/PostItem";
import CommentForm from "../Post/CommentForm";
import CommentItem from "../Post/CommentItem";
import { Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
const Post = ({ getPost, post: { post, loading }, match }) => {
  useEffect(() => {
    getPost(match.params.id);
  }, [getPost]);
  return loading || post === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <Link to='/profiles'>
        <Icon name='arrow alternate circle left outline' size='big' />
      </Link>
      <PostItem post={post} showSinglePost={false} />

      <CommentForm postId={post._id} />
      <div className='comments'>
        {post.comments.map((comment) => (
          <CommentItem key={comment._id} comment={comment} postId={post._id} />
        ))}
      </div>
    </Fragment>
  );
};

Post.propTypes = {
  getPost: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  post: state.post,
});
export default connect(mapStateToProps, { getPost })(Post);
