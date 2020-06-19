import React from "react";
import { Button, Modal } from "semantic-ui-react";
export default (props) => (
  <Modal trigger={<Button color='blue' content='submit' size='small' />} basic>
    <Modal.Content>
      <h1>your score is :{props.score} </h1>
      {props.score === 0 ? (
        <p>0/5 Correct. You need to do more homework!</p>
      ) : null}
      {props.score === 20 ? <p>1/5 Correct</p> : null}
      {props.score === 40 ? <p>2/5 Correct</p> : null}
      {props.score === 60 ? <p>3/5 Correct</p> : null}
      {props.score === 80 ? <p>4/5 Correct</p> : null}
      {props.score === 100 ? <p>5/5 Correct. Congratulation!</p> : null}
    </Modal.Content>
  </Modal>
);
