import React from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { TextField, Button } from '@material-ui/core';

class NewBoard extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showButton: false
    }
  }

  render() {
    return (
      <Card>
          <CardContent>
            <form autoComplete="off">
              <div className="form-group">
                <TextField 
                  id="board-name" 
                  label="Board Name" 
                  onFocus={() => this.setState({showButton: true})}
                  onBlur={() => this.setState({showButton: false})}/>
              </div>
              <div className="form-group">
                <Button id="btnCreate" style={{display: this.state.showButton ? "" : "none"}}>Create</Button>
                <Button id="btnCancel" style={{display: this.state.showButton ? "" : "none"}}>Cancel</Button>
              </div>
            </form>
          </CardContent>
      </Card>
    );
  }
}

export default NewBoard;