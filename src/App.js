import React, { Component } from 'react';
import './App.css';
import './Person/Person.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: 's5d4f645d', name: 'Max', age: 28 },
      { id: 'd45v54v54', name: 'Dave', age: 29 },
      { id: 'w5e665da6', name: 'Step', age: 26 }
    ],
    otherState: 'Some value',
    showPersons: false
  }

  choseNameHandler = ( event, id ) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    // const person = Object.assign({}, this.state.persons[personsIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( {persons: persons} );
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice(); UMA FORMA DE FAZER
    const persons = [...this.state.persons]; // OUTRA FORMA DE FAZER USANDO ESX
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState( { showPersons: !doesShow } );
  }

  render () {

    const style = {
        backgroundColor: 'greenyellow',
        padding: '10px 25px',
        color: 'green',
        border: '2px solid green',
        fontWeight: '900',
        borderRadius: '5px',
        cursor: 'pointer',
        outline: 'none',
    };
 
    let persons = null;

    if ( this.state.showPersons ) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => this.choseNameHandler(event, person.id)}/>
          })}
        </div>
      );

      style.backgroundColor = 'red';
      style.color = 'black';
      style.border = '2px solid black';
    }

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red'); //Classes = ['red', 'bold']
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold'); //Classes = ['red', 'bold']
    }

    return (
      <div className="App">
        <h1>Hello World</h1>
        <p className={classes.join(' ')}>Starting react app !</p>
        <button
          style={style}
          onClick={this.togglePersonsHandler}>Show/Hide</button>
          {persons}
      </div>
    );
  }
}

export default App;
