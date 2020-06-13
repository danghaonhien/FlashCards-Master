import React from "react";
import { Header } from "semantic-ui-react";
import DeleteModal from "../../../components/DeleteModal";
import "./index.css";
export default (props) => {
  if (props.flashcards.length === 0) {
    return <Header content='Flashcard is empty!' />;
  } else {
    return props.flashcards.map(({ _id, front, back }) => {
      return (
        <div key={_id} className='wrapper'>
          <div className='card'>
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
          <DeleteModal handleDelete={props.handleDelete} id={_id} />
        </div>
      );
    });
  }
};
