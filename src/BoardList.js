import React from 'react';
import NewBoard from './NewBoard'


class BoardList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      boardList: ["1"],
      showButton: false
    };
  }

  toggleButton = (value) => {
    this.setState({showButton: value});
  }

  render() {
    return (
      <div>
        <NewBoard/>
      </div>
    );
  }
}

export default BoardList;