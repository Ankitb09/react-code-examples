import React from 'react';
import Login from '../containers/Login';

const App = (props)=>{
    return(
        <Login history={props.history}/>
    )
}

export default App;