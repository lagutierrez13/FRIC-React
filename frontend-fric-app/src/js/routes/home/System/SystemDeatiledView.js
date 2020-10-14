import React, { Component } from 'react';
import axios from 'axios';

class SystemDetailedView extends Component {

    constructor(props) {
        super(props);

        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeNoOfFindings = this.onChangeNoOfFindings.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            title: '',
            description: '',
            no_of_finding: '',

        }
    }

    onChangeTitle(e) {
        this.setState({
            title: e.target.value
        });
    }

    onChangeDescription(e) {
        this.setState({
            description: e.target.value
        });
    }

    onChangeNoOfFindings(e) {
        this.setState({
            no_of_finding: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        
        console.log(`System Form submitted:`);
        console.log(`Title: ${this.state.title}`);
        console.log(`Description: ${this.state.description}`);
        console.log(`no of findings: ${this.state.no_of_finding}`);

        const newSystem = {
            title: this.state.title,
            description: this.state.description,
            no_of_finding: this.state.no_of_finding,
            
        };

        axios.post('http://localhost:4000/home/systems/add', newSystem)
            .then(res => console.log(res.data));

        
        this.setState({
            title: '',
            description: '',
            todo_priority: '',
            
        })
    }

    render() {
        return (
            <div style={{marginTop: 10}}>
                <h3>Create New Todo</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group"> 
                        <label>Title: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.title}
                                onChange={this.onChangeTitle}
                                />
                    </div>
                    <div className="form-group">
                        <label>Description: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.description}
                                onChange={this.onChangeDescription}
                                />
                    </div>
                    <div className="form-group">
                        <label>Number of findings: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.no_of_finding}
                                onChange={this.onChangeNoOfFindings}
                                />
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Create Todo" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}
export default SystemDetailedView