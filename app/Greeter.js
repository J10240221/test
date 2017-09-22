import React, {Component} from 'react';
import config from './config.json';
import CountdownComponent from './component/CountdownComponent';

export default class Greeter extends Component {
   constructor(props){
      super(props);
   }

   render() {
      return (
         <div>
            <h1>{config.greetText}</h1>
            <CountdownComponent endTime={"2019/09/19 18:30:00"} />
         </div>
      )
   }
}