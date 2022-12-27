import React, { Component } from "react";
import "./List.css";
import PropTypes from "prop-types";

class List extends Component {
  static propTypes = {
    contacts: PropTypes.array.isRequired,
  };

  state = {
    filterText: "",
  };

  onChangeFilterText = (e) => {
    this.setState({
      filterText: e.target.value,
    });
  };

  render() {
    const filteredContact = this.props.contacts.filter(
        contact=>{
            return contact.name.toLowerCase().indexOf(
                this.state.filterText.toLowerCase()
            ) !== -1;
        }
    )
    return (
      <div className="listArea">
        <input
          name="filter"
          id="filter"
          value={this.state.filterText}
          onChange={this.onChangeFilterText}
          placeholder="Filter by name or phone"
        />
        <ul className={"list"}>
          {filteredContact.map((e) => {
            return (
              <li key={e.phone}>
                <span className="name">{e.name}</span>
                <span className="phone">{e.phone}</span>
                <span className="clearFix"></span>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default List;
