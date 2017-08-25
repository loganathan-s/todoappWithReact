import React from 'react';


const RequestError = (props) => {
  return (
    <div className="top">
      <h1>
        <p> Request Error {this.props.errorMessage ? this.props.errorMessage : ''}</p>
      </h1>
    </div>
  )
}

export default RequestError;