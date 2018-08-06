import React, { Component } from 'react';
import './App.css';


class App extends Component {
  state = {
    forms: [],
    lastNum: 0,
  }

  addForm = () => {
    this.setState( prevState => ( {
      forms: [ ...prevState.forms, prevState.lastNum++ ],
    } ));
  }

  removeForm = form => {
    const newForms = this.state.forms.filter( el => el !== form  );
    this.setState( { forms: newForms } );
  }

  render() {
    const forms = this.state.forms.map( form => (
      <Test key={form} form={form} removeForm={this.removeForm} />
    ));

    return (
      <div className="App ">
        <div className="App-header App-intro">
          <button className="btn btn-success" onClick={this.addForm}>+</button>
        </div>
        {forms}
      </div>
    );
  }

}

const Test = ( props ) => {
  const handleRemove =  e => {
    e.preventDefault();
    props.removeForm( props.form );
  }

  const handleSubmit =  (e) => {
    e.preventDefault();
    console.log("Submitted values are : " +" "+e.target[0].value);
    
  }

  return (
  <div className="container">
    <div className="panel-group">
      <div className="panel panel-primary">
      <div className="panel-heading">Add Component In your video </div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label >Start Time:</label>
              <input type="time" className="form-control" name="start_time" placeholder="Start Time" />
            </div>
            <div className="form-group col-md-6">
              <label >End Time</label>
              <input type="time" className="form-control" placeholder="End Time" />
            </div>
            <div className="form-group col-md-12">
              <label>Description:</label>
              <input type="text" className="form-control" placeholder="Add Description About Component" />
            </div>
          </div>
          <button type="button" className="btn btn-primary" >Submit</button>{"       "}
          <button value="Remove" className="btn btn-danger" onClick={handleRemove}>Remove</button>
        </form>
      </div>
    </div>
  </div>
    
  );
}

export default App;


