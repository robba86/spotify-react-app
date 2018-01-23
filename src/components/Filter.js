import React, { Component } from 'react';

export class Filter extends Component {
   render() {
      return (
         <div style={{textAlign: 'center'}}>
            <input placeholder="Filter..." onKeyUp={event => this.props.onTextChange(event.target.value) } />
         </div>
      )
   }
}