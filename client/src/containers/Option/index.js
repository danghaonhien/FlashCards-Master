import React, { Fragment } from "react";
import { Button, Card, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
export default () => {
  return (
    <Fragment>
      <Link to='/dashboard'>
        <Icon name='arrow alternate circle left outline' size='big' />
      </Link>
      <Card centered color='green'>
        <Card.Content>
          <Card.Header>Create your own card</Card.Header>
        </Card.Content>
        <Card.Content extra>
          <div className='ui two buttons'>
            <Button basic color='olive'>
              <Link to='/addflashcards'>
                <strong>Create</strong>
              </Link>
            </Button>
            <Button basic color='red'>
              <Link to='/flashcards'>
                <strong>View</strong>
              </Link>
            </Button>
          </div>
        </Card.Content>
      </Card>
    </Fragment>
  );
};
