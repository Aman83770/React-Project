import React, { Component } from 'react';
import './App.css';

class App extends React.Component {
  state = {
    forms: {},
  };

  addForm = () => {
    const newForm = {
      id: guid(),
      i1: "",
      i2: "",
      i3: "",
    }
    this.setState(prevState => ({
      forms: { ...prevState.forms, [newForm.id]: newForm },
    }));
  };

  removeForm = id => {
    const forms = { ...this.state.forms };
    delete forms[id];
    this.setState({ forms });
  };

  onChange = ( e ) => {
    const { id, name, value } = e.target;
    this.setState( prevState => ( {
      forms: { ...prevState.forms, [id]: { ...prevState.forms[id], [name]: value } }
    } ));
  };

  onSubmit = id => { 
    const { i1, i2, i3 } = this.state.forms[id];
    console.log( ` Form id: ${id}, start time: ${i1}, end time: ${i2}, Description: ${i3} ` );
  }

  renderForms = () => Object.keys(this.state.forms).map(key => (
    <FormItem
      key={this.state.forms[key].id}
      id={this.state.forms[key].id}
      removeForm={this.removeForm}
      onChange={this.onChange}
      onSubmit={this.onSubmit}
      />
  ));

  render() {
    return (
      <div className="App ">
        <div className="App-header App-intro">
          <button className="btn btn-success" onClick={this.addForm}>+</button>
        </div>
        {this.renderForms()}
      </div>
    );
  }
}

const FormItem = (props) => {
  const { id, removeForm, onChange, onSubmit } = props;
  
  const handleRemove = () => removeForm(id);
 
  const handleSubmit = e => {
    e.preventDefault();
    onSubmit( id );
  } 

  return (
      <div className="container">
        <div className="panel-group">
          <div className="panel panel-primary">
          <div className="panel-heading">Add Component In your video </div>
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label >Start Time:</label>
                  <input id={id} onChange={onChange}  name="i1" type="time" className="form-control" placeholder="Start Time" />
                </div>
                <div className="form-group col-md-6">
                  <label >End Time</label>
                  <input  id={id} onChange={onChange}  name="i2" type="time" className="form-control" placeholder="End Time" />
                </div>
                <div className="form-group col-md-12">
                  <label>Description:</label>
                  <input  id={id} onChange={onChange}  name="i3" type="text" className="form-control" placeholder="Add Description About Component" />
                </div>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>{"       "}
              <button value="Remove" className="btn btn-danger" onClick={handleRemove}>Remove</button>
            </form>
          </div>
        </div>
      </div>
  );
}

function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}

export default App;


