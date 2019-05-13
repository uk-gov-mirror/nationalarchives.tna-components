import React, { Component } from 'react';
//import FeedbackButton from "../button/details_feedback_widget_button.react";

class NoFieldset extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayFieldSet: true
    };
  }

  render() {
    return (
      <React.Fragment>
        {this.state.displayFieldSet && (
          <fieldset className="noBorder" id="no-fieldset">
            <legend>We'd like to hear from you</legend>
            <label for="explore-comments">
              Your feedback helps us improve our services. Please share any
              comments below.
            </label>
            <input type="text" id="no-comments" />
            <p>Please do not include personal contact details.</p>
          </fieldset>
        )}
      </React.Fragment>
    );
  }
}

export default NoFieldset;