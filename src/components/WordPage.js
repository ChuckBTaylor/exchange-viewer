import React from 'react';

const WordPage = (props) => {
  return (
  <div>
    {props.match.params.word}
  </div>
  )
}

WordPage.defaultProps = {

}

export default WordPage
