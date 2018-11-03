import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../css/ImportDialog.css';

class ImportDialog extends Component {
  onImportableChordSheetChange = (event) => {
    const { onImportableChordSheetChange } = this.props;
    onImportableChordSheetChange(event.target.value);
  };

  render() {
    const { onCloseButtonClick, onImportButtonClick, show } = this.props;

    if (!show) {
      return null;
    }

    return (
      <section className="ImportDialog">
        <button className="ImportDialog__close-button" onClick={onCloseButtonClick}>×</button>

        <div className="ImportDialog__contents">
          <h1>Import chord sheet</h1>
          <textarea className="ChordSheetEditor" onChange={this.onImportableChordSheetChange} />

          <div className="ImportDialog__buttons">
            <button className="large" onClick={onImportButtonClick}>Import chord sheet</button>
          </div>
        </div>
      </section>
    );
  }
}

ImportDialog.propTypes = {
  show: PropTypes.bool.isRequired,
  onCloseButtonClick: PropTypes.func.isRequired,
  onImportButtonClick: PropTypes.func.isRequired,
  onImportableChordSheetChange: PropTypes.func.isRequired,
};

export default ImportDialog;