import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import { connect } from "react-redux";
import { deletePost } from "../../actions/post";
import { Button, Icon } from "semantic-ui-react";
const PostItem = ({
  auth,
  deletePost,
  post: { _id, text, name, user, comments, date },
  showSinglePost,
}) => {
  return (
    <div className='post bg-white p-1 my-1'>
      <Link to={`/profile/${user}`}>
        <h2>{name}</h2>
      </Link>

      <div>
        <p className='my-1'>{text}</p>
        <p className='post-date'>
          Posted on <Moment format='YYYY/MM/DD'>{date}</Moment>
        </p>

        {showSinglePost && (
          <Fragment>
            <Button>
              <Link to={`/posts/${_id}`}>
                Comment{" "}
                {comments.length > 0 && (
                  <span className='comment-count'>{comments.length}</span>
                )}
              </Link>
            </Button>{" "}
            {!auth.loading && user === auth.user._id && (
              <Icon name='close' onClick={(e) => deletePost(_id)} size='big' />
            )}
          </Fragment>
        )}
      </div>
    </div>
  );
};

PostItem.defaultProps = {
  showSinglePost: true,
};

PostItem.propTypes = {
  auth: PropTypes.object.isRequired,
  post: PropTypes.object.isRequired,
  deletePost: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { deletePost })(PostItem);
