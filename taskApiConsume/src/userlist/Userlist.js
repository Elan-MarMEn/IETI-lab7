import React, { Component } from 'react';

class Userlist extends Component {
  constructor(props) {
    super(props);
    this.list = this.props.list;
    this.state = {
    };
    this.showinfo= this.showinfo.bind(this)
  }

  showinfo() {
    let temp = []
    this.list.forEach(task => {
        temp.push(<li>{task.id}</li>);
    });
    console.log(temp);
    return temp;
  }

  render() {
    return (
      <div>
          <ul>
            {this.showinfo()}
          </ul>
      </div>
    );
  }
}

export default Userlist;
