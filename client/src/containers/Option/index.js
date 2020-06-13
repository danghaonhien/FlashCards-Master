import React from "react";
import { Button, Card } from "semantic-ui-react";
import { Link } from "react-router-dom";
export default () => {
  return (
    <Card centered color='green'>
      <Card.Content>
        <Card.Header>Welcome to Flashcards</Card.Header>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='olive'>
            <Link to='/addflashcards'>Add</Link>
          </Button>
          <Button basic color='red'>
            <Link to='/flashcards'>View</Link>
          </Button>
        </div>
      </Card.Content>
    </Card>
  );
};
