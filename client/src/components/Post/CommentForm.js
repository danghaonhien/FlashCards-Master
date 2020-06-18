import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Form, Button, Divider } from "semantic-ui-react";
import { addComment } from "../../actions/post";
function CommentForm({ postId, addComment }) {
  const [text, setText] = useState("");
  return (
    <Fragment>
      <Divider />
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          addComment(postId, { text });
          setText("");
        }}
      >
        <Form.TextArea
          label='Comment'
          placeholder='Leave a Comment'
          content={text}
          onChange={(e) => setText(e.target.value)}
        />

        <Button type='submit'>Submit</Button>
      </Form>
      <Divider />
    </Fragment>
  );
}

CommentForm.propTypes = {
  addComment: PropTypes.func.isRequired,
};

export default connect(null, { addComment })(CommentForm);
