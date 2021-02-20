import React, { Component } from 'react';
import service from './service.js';

const contactArray = [
    {
        date: '2021-02-19',
        place: 'India',
        type: 'Trek'
      },
    ];
class AddComponent extends React.Component {
      constructor() {
        super();
        this.state = {
          contacts: contactArray,
          totalcount:1,
          typearray:[]
        };
        this.handleSubmit = this.handleSubmit.bind(this);
      }
      handleClick = () => {
        this.setState(prevState => {
         // console.log("hello");
         service.sharedData=this.state.totalcount+1;
        // console.log(service.sharedData);
        service.sharedArray=this.state.contacts;
           return {totalcount: prevState.totalcount + 1}
        });
    }
    
      handleSubmit(e) {
        e.preventDefault();
        const
        { contacts } = this.state,
        date = this.refs.date.value,
        place = this.refs.place.value,
        type = this.refs.type.value;
        this.setState({
          contacts: [...contacts, {
            date,
            place,
            type
          }]
        }, () => {
          this.refs.date.value = '';
          this.refs.place.value = '';
          this.refs.type.value = '';
        });
      }

     render(){
      const { contacts } = this.state;
        return (   
          <div>
            <h2>Add Trips</h2>
            <form onSubmit={this.handleSubmit}>
            <input type="date"  className="trip-start" ref="date" min="1999-01-01" max="2040-12-31"/> 
            <input type="text" placeholder="Enter Place" className="place" ref="place"/> 
            <select className="type" ref="type" name="cars"> 
                    <option >Trek</option>
                    <option >Tropic</option> 
                    <option >Club</option> </select>
              <button type="submit" onClick={this.handleClick} >Submit</button>
            </form>
            <h2>Exsiting contacts:</h2>
            <ul id="myul">
              {(this.state.contacts).map((contact) => 
               <li>{`Date: ${contact.date} Place: ${contact.place} Type: ${contact.type}`}</li>
              )}
            </ul>
            <div>{this.state.totalcount}</div>
          </div>
        );
      }
    }
    class Shared {
      sharedData;
   }
   
   const  serviceName = new Shared();
    export default AddComponent;
   