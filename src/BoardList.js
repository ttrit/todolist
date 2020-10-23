import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';


class BoardList extends React.Component {
  constructor(props){
    super(props);
    this.state = {boardList: ["1", "2"]};
  }

  render() {
    return (
      <div>
        {this.state.boardList.map((board) => 
          <Card>
            <CardContent>
              <Button size="small">New Board</Button>
            </CardContent>
          </Card>
      )}
      </div>
    );
  }
}

export default BoardList;