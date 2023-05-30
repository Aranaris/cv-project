import { Component } from "react";
import React from "react";
import "./Contact.css";

class Contact extends Component {
    constructor(props) {
        super(props);

        this.state = {
            contactName: "",
            contactEmail: "",
            contactPhone: "",
            displayName: "test name",
            displayEmail: "email@example.com",
            displayPhone: "1234567890",
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({
            displayName: this.state.contactName || this.state.displayName,
            displayEmail: this.state.contactEmail || this.state.displayEmail,
            displayPhone: this.state.contactPhone || this.state.displayPhone,
        })
    }

    handleInputChange(event) {
        let target = event.target;
        let value = target.value;
        let name = target.name;
        this.setState({
            [name]: value,
        })
    }

    render() {
        return (
            <div className="info-section">
                <h3>Contact Info</h3>
                <ul>
                    <li>Name: {this.state.displayName}</li>
                    <li>E-mail: {this.state.displayEmail}</li>
                    <li>Phone: {this.state.displayPhone}</li>
                </ul>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="contactName">Name: </label>
                    <input type="text" name="contactName" value={this.state.displayName} onChange={this.handleInputChange}></input><br />
                    <label htmlFor="contactEmail">E-mail: </label>
                    <input type="email" name="contactEmail" value={this.state.displayEmail} onChange={this.handleInputChange}></input><br />
                    <label htmlFor="contactPhone">Phone: </label>
                    <input type="tel" name="contactPhone" value={this.state.displayPhone} onChange={this.handleInputChange}></input><br />
                    <input type="submit" value="Submit"></input>
                </form>
            </div>
        )
    }
}

export default Contact;