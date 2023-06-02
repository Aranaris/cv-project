import { Component } from "react";
import React from "react";
import "../styles/Work.css";

class Work extends Component {
    constructor(props) {
        super(props);


        this.state = {
            setCompanyName: "",
            setJobTitle: "",
            setDescription: "",
            setStartDate: "",
            setEndDate: "",
            employmentList: [],
            addMode: false,
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.addNewEmployment = this.addNewEmployment.bind(this);
        this.setAddMode = this.setAddMode.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        let index = event.target.getAttribute("data-key");
        if (!index) {
            this.addNewEmployment(this.state.setCompanyName, this.state.setJobTitle, this.state.setDescription, this.state.setStartDate, this.state.setEndDate);
            this.setAddMode();
        } else {
            let updatedWorkInfo = {
                companyName: this.state.setCompanyName || this.state.employmentList[index].companyName,
                jobTitle: this.state.setJobTitle || this.state.employmentList[index].jobTitle,
                jobDescription: this.state.setDescription || this.state.employmentList[index].jobDescription,
                start: this.state.setStartDate || this.state.employmentList[index].start,
                end: this.state.setEndDate || this.state.employmentList[index].end,
            }

            let newEmploymentList = this.state.employmentList;
            newEmploymentList[index] = updatedWorkInfo;
            this.setState({
                employmentList: newEmploymentList,
            })
            this.props.setEditMode();
        }
    }

    handleInputChange(event) {
        let target = event.target;
        let value = target.value;
        let name = target.name;
        this.setState({
            [name]: value,
        })
    }

    addNewEmployment(company, position, description, startDate, endDate) {
        this.setState({
            employmentList: this.state.employmentList.concat([{
                companyName: company,
                jobTitle: position,
                jobDescription: description,
                start: startDate,
                end: endDate,
            }])
        })
    }

    setAddMode() {
        this.setState({
            addMode: !this.state.addMode,
        })
    }

    render() {
        return (
            <div className="info-section">
                <h3>Employment Info</h3>
                <ul>
                    {this.state.employmentList.map((workInfo, i) => {
                        return (
                            <li key={i}>
                                <ul>
                                    <li>Company: {workInfo.companyName}</li>
                                    <li>Position: {workInfo.jobTitle}</li>
                                    <li>Start Date: {workInfo.start}</li>
                                    <li>End Date: {workInfo.end}</li>
                                    <li>Description: {workInfo.jobDescription}</li>
                                </ul>
                                {this.props.editMode && (
                                <form onSubmit={this.handleSubmit} data-key={i}>
                                    <label htmlFor="setCompanyName">Company: </label>
                                    <input type="text" name="setCompanyName" onChange={this.handleInputChange}></input><br />
                                    <label htmlFor="setJobTitle">Position: </label>
                                    <input type="text" name="setJobTitle" onChange={this.handleInputChange}></input><br />
                                    <label htmlFor="setStartDate">Start Date: </label>
                                    <input type="date" name="setStartDate" onChange={this.handleInputChange}></input><br />
                                    <label htmlFor="setEndDate">End Date: </label>
                                    <input type="date" name="setEndDate" onChange={this.handleInputChange}></input><br />
                                    <label htmlFor="setDescription">Role Description: </label>
                                    <input type="text" name="setDescription" onChange={this.handleInputChange}></input><br />
                                    <input type="submit" value="Submit"></input>
                                </form>
                                )}
                            </li>
                        )
                    })}
                </ul>
                {!this.props.editMode && !this.state.addMode && (<button onClick={this.setAddMode}>Add</button>)}
                {this.state.addMode && (
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="setCompanyName">Company: </label>
                    <input type="text" name="setCompanyName" onChange={this.handleInputChange}></input><br />
                    <label htmlFor="setJobTitle">Position: </label>
                    <input type="text" name="setJobTitle" onChange={this.handleInputChange}></input><br />
                    <label htmlFor="setStartDate">Start Date: </label>
                    <input type="date" name="setStartDate" onChange={this.handleInputChange}></input><br />
                    <label htmlFor="setEndDate">End Date: </label>
                    <input type="date" name="setEndDate" onChange={this.handleInputChange}></input><br />
                    <label htmlFor="setDescription">Role Description: </label>
                    <input type="text" name="setDescription" onChange={this.handleInputChange}></input><br />
                    <input type="submit" value="Submit"></input>
                </form>
                )}
                {this.state.addMode &&(<button onClick={this.setAddMode}>Cancel</button>)}
            </div>
        )
    }
}

export default Work;