import React from "react";
import { Header } from "semantic-ui-react";
import DeleteModal from "../../../components/DeleteModal";
import { Link } from "react-router-dom";
import { Icon, Divider } from "semantic-ui-react";
export default (props) => {
  if (props.flashcards.length === 0) {
    return <Header content='Flashcard is empty!' />;
  } else {
    return props.flashcards.map(({ _id, front, back }) => {
      return (
        <div key={_id} className='container'>
          <div className='wrapper'>
            <div className='flashcard'>
              <input
                type='checkbox'
                id='card'
                className='more'
                aria-hidden='true'
              />
              <div className='content'>
                <div className='front'>
                  <div className='inner'>
                    <h2>{front}</h2>
                    <label htmlFor='card' className='button' aria-hidden='true'>
                      Flip
                    </label>
                  </div>
                </div>
                <div className='back'>
                  <div className='inner'>
                    <div className='description'>
                      <p>{back}</p>
                    </div>
                    <label
                      htmlFor='card'
                      className='button return'
                      aria-hidden='true'
                    >
                      Flip
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Divider />
          <div>
            <Link to='/addflashcards'>
              <Icon name='add' size='large' />{" "}
            </Link>
            <span>
              {" "}
              <DeleteModal handleDelete={props.handleDelete} id={_id} />
            </span>
          </div>
        </div>
      );
    });
  }
};
