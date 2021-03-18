
import './App.css';
import React, { Component } from 'react'


class App extends Component {

  constructor(props) {
      super(props);
      this.state = {
        userList: [],
        id: "",
        title: "",
        description: "",
        responsable: ""
      };
      this.componentDidMount= this.componentDidMount.bind(this)
      this.showinfo= this.showinfo.bind(this);
      this.handleNewtask = this.handleNewtask.bind(this)
      this.sendNewtask= this.sendNewtask.bind(this)
  }

  componentDidMount(){
    fetch('https://9atwwkzjcb.execute-api.us-east-1.amazonaws.com/IetiLab7/ieti-lab7-listtasks')
        .then(response => response.json())
        .then(data => {
            let listtasks = [];
            for (let i = 0; i < data.tasklist.length; i++) {
              listtasks.push(data.tasklist[i]);
            }
            console.log(listtasks);
            this.setState({userList: listtasks});
        });
  }

  showinfo() {
    let temp = []
    this.state.userList.forEach(task => {
        temp.push(<li key={temp.length}>{task.id} - {task.title} - {task.description} - {task.responsable} - </li>);
    });
    return temp;
  }

  handleNewtask(e){
    console.log(e.target.name)
    this.setState({[e.target.name]: e.target.value})
  }

  sendNewtask(){
    fetch('https://9atwwkzjcb.execute-api.us-east-1.amazonaws.com/IetiLab7/ieti-lab7-addtask',{
          method: "POST",
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            id: this.state.id, 
            title:this.state.title, 
            description: this.state.description, 
            responsable: this.state.responsable
          })
        })
        .then(response => response.json())
        .then(data => {
            let listtasks = [];
            for (let i = 0; i < data.tasklist.length; i++) {
              listtasks.push(data.tasklist[i]);
            }
            console.log(listtasks);
            this.setState({userList: listtasks});
        });
  }
  

  render() {
      return (
          <div>
              {/* <!-- Implement a React compontent to render the list --> */}
              <br></br>
              <input id="id" name="id" type="number" placeholder="identifier" onChange={this.handleNewtask}></input>
              <br></br>
              <input id="title" name="title" placeholder="title" onChange={this.handleNewtask}></input>
              <br></br>
              <input id="description" name="description" placeholder="description" onChange={this.handleNewtask}></input>
              <br></br>
              <input id="responsable" name="responsable" placeholder="responsable" onChange={this.handleNewtask}></input>
              <br></br>
              <button onClick={this.sendNewtask}>POST</button>
              <ul>
                {this.showinfo()}
              </ul>
          </div>
      );
  }
}

export default App;
