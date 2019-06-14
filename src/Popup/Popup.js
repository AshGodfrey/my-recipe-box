import React, {Component} from 'react';
import './Popup.css'

class Popup extends React.Component {
  render() {
    return (
      <div className='popup'>
        <div className='popup_inner'>
          <button className="x-button" onClick={this.props.closePopup}>X</button>
          <div className="text">{this.props.text}</div>
        </div>
      </div>
    );
  }
}

export default Popup;