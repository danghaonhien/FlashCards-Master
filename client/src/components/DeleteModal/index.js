import React, { Fragment } from "react";
import { Button, Header, Icon, Modal } from "semantic-ui-react";

export default (props) => (
  <Fragment>
    <Modal trigger={<Icon name='remove' size='large' />} basic>
      <Header icon='archive' content='Delete' />
      <Modal.Content>
        <p>Are you sure you want to delete this flashcard?</p>
      </Modal.Content>
      <Modal.Actions>
        <Button
          fluid
          negative
          content='Delete'
          onClick={() => props.handleDelete(props.id)}
        ></Button>
      </Modal.Actions>
    </Modal>
  </Fragment>
);
