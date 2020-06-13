import React, { Component } from "react";
import { Pagination, Header, Button } from "semantic-ui-react";
import { connect } from "react-redux";
import { compose } from "redux";
import { Link } from "react-router-dom";
import requireAuth from "../../../hoc/requireAuth";
import {
  getUserFlashcards,
  deleteFlashcardById,
} from "../../../actions/flashcard";
import RenderFlashcard from "../RenderFlashcard";
class HandleFlashcard extends Component {
  state = {
    activePage: 1,
    start: 0,
    end: 1,
  };
  componentDidMount() {
    this.props.getUserFlashcards();
  }
  handlePageChange = (event, data) => {
    this.setState({
      activePage: data.activePage,
      start: data.activePage === 1 ? 0 : data.activePage - 1,
      end: data.activePage,
    });
  };
  render() {
    return (
      <>
        <div>
          <RenderFlashcard
            flashcards={this.props.flashcards.slice(
              this.state.start,
              this.state.end
            )}
            handleDelete={this.props.deleteFlashcardById}
          />
          {this.props.flashcards.length <= 1 ? null : (
            <Pagination
              totalPages={this.props.flashcards.length}
              onPageChange={(event, data) => this.handlePageChange(event, data)}
              activePage={this.state.activePage}
            />
          )}
        </div>
        <div>
          <Button as={Link} to='/dashboard' color='teal'>
            Go back
          </Button>
          <Button as={Link} to='/addflashcards' color='teal'>
            Add Flashcard
          </Button>
        </div>
      </>
    );
  }
}
function mapStateToProps({
  flashcards: {
    userFlashcards,
    getUserFlashcardsServerError,
    getUserFlashcardsClientError,
    deleteFlashcardByIdError,
  },
}) {
  return {
    flashcards: userFlashcards,
    clientError: getUserFlashcardsClientError,
    serverError: getUserFlashcardsServerError,
    deleteFlashcardByIdError,
  };
}
export default compose(
  requireAuth,
  connect(mapStateToProps, { getUserFlashcards, deleteFlashcardById })
)(HandleFlashcard);
