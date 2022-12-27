import './App.css';
import Contact from './Contact';
import React,{Component} from 'react'


class App extends Component {
  constructor(){
    super();
    this.addContact = this.addContact.bind(this);
  }

  state ={
    contacts : [{
      name : "Valeh Goja",
      phone : 23425234
    },{
      name : "Azer Goja",
      phone : 3442545
    }]
  };

  addContact(contact){
    const {contacts} = this.state;
    contacts.push(contact);
    this.setState({
      contacts:contacts
    })
  }
  render(){

  return (
    <div className="App">
      <Contact addContact={this.addContact} contacts={this.state.contacts}/>
    </div>
  );
}
}


export default App;
