import { Component } from "react";
import React from "react";
import "../styles/Education.css";

class Education extends Component {
    constructor(props) {
        super(props);

        this.state = {
            setSchoolName: "",
            setDegreeName: "",
            setCompletionYear: "",
            educationList: [],
            addMode: false,
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.addNewEducation = this.addNewEducation.bind(this);
        this.setAddMode = this.setAddMode.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        let index = event.target.getAttribute("data-key");
        if (!index) {
            this.addNewEducation(this.state.setSchoolName, this.state.setDegreeName, this.state.setCompletionYear);
            this.setAddMode();
        } else {
            let updatedEducation = {
                schoolName: this.state.setSchoolName || this.state.educationList[index].schoolName,
                degreeName: this.state.setDegreeName || this.state.educationList[index].degreeName,
                completionYear: this.state.setCompletionYear || this.state.educationList[index].completionYear
            }

            let newEducationList = this.state.educationList;
            newEducationList[index] = updatedEducation;
            this.setState({
                educationList: newEducationList,
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

    addNewEducation(school, degree, completionYear) {
        this.setState({
            educationList: this.state.educationList.concat([{
                schoolName: school,
                degreeName: degree,
                completionYear: completionYear,
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
                <h3>Education Info</h3>
                <ul>
                    {this.state.educationList.map((edInfo, i) => {
                        return (
                            <li key={i}>
                                <ul>
                                    <li>School: {edInfo.schoolName}</li>
                                    <li>Degree: {edInfo.degreeName}</li>
                                    <li>Year: {edInfo.completionYear}</li>
                                </ul>
                                {this.props.editMode && (
                                <form onSubmit={this.handleSubmit} data-key={i}>
                                    <label htmlFor="setSchoolName">School: </label>
                                    <input type="text" name="setSchoolName" onChange={this.handleInputChange}></input><br />
                                    <label htmlFor="setDegreeName">Degree: </label>
                                    <input type="text" name="setDegreeName" onChange={this.handleInputChange}></input><br />
                                    <label htmlFor="setCompletionYear">Year of Completion: </label>
                                    <input type="number" name="setCompletionYear" onChange={this.handleInputChange}></input><br />
                                    <input type="submit" value="Submit"></input>
                                </form>
                                )}
                            </li>
                        )
                    })}
                </ul>
                {!this.props.editMode && !this.state.addMode && (<button onClick={this.setAddMode}>Add</button>)}
                {this.state.addMode && (<form onSubmit={this.handleSubmit}>
                    <label htmlFor="setSchoolName">School: </label>
                    <input type="text" name="setSchoolName" onChange={this.handleInputChange}></input><br />
                    <label htmlFor="setDegreeName">Degree: </label>
                    <input type="text" name="setDegreeName" onChange={this.handleInputChange}></input><br />
                    <label htmlFor="setCompletionYear">Year of Completion: </label>
                    <input type="number" name="setCompletionYear" onChange={this.handleInputChange}></input><br />
                    <input type="submit" value="Submit"></input>
                </form>
                )}
                {this.state.addMode &&(<button onClick={this.setAddMode}>Cancel</button>)}
            </div>
        )
    }
}

export default Education;