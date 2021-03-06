import React from 'react';

import styles from './Cockpit.css';

const cockpit = ( props ) => {
    const assignedClasses = [];
    let btnClass = '';
    if (props.showPersons) {
        btnClass = styles.Red;
    }

    if ( props.persons.length <= 2 ) {
      assignedClasses.push( styles.red ); // styles = ['red']
    }

    if ( props.persons.length <= 1 ) {
      assignedClasses.push( styles.bold ); // styles = ['red', 'bold']
    }

    return (
        <div className={styles.Cockpit}>
            <h1>Hello World !</h1>
            <p className={assignedClasses.join( ' ' )}>This is really working!</p>
            <button
                className={btnClass}
                onClick={props.clicked}>Toggle Persons</button>
        </div>
    );
};

export default cockpit;