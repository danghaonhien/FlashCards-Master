import React from "react";
import { Button, Modal } from "semantic-ui-react";
export default (props) => (
  <Modal trigger={<Button color='blue' content='submit' size='small' />} basic>
    <Modal.Content>
      <h1>your score is :{props.score} </h1>
      {props.score === 20 ? <p>You Answered Wrong Four Questions</p> : null}
      {props.score === 40 ? <p>You Answered Wrong Three Questions</p> : null}
      {props.score === 60 ? <p>You Answered Wrong Two Questions</p> : null}
      {props.score === 80 ? <p>You Answered Wrong One Questions</p> : null}
      {props.score === 100 ? <p>You Answered Questions Right</p> : null}
    </Modal.Content>
  </Modal>
);
