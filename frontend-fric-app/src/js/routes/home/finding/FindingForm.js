import React, { Component } from "react";
import { Row, Col } from 'react-bootstrap'
import axios from "axios";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { Multiselect } from 'multiselect-react-dropdown';

const Tooltip = () => (
    <Popup trigger={<button>?</button>} position="right center">
        {(close) => (
            <div>
                Fill out Finding Information
                <a className="close" onClick={close}>
                    &times;
                </a>
            </div>
        )}
    </Popup>
);

function FindingInformation(props){
    return(
        <div class="x_panel tile">
            {/* Finding information */}
            <div class="x_title">
                <h2>
                    Finding Information <Tooltip />
                </h2>
                <div class="clearfix"></div>
            </div>
            {/* ID */}
            <div class="form-group row">
                <label class="control-label  col-sm-2 ">ID</label>
                <div class=" col-sm-10 ">
                    <input
                        type="text"
                        class="form-control"
                        value={props.values.findingID}
                        name="findingID"
                        onChange={props.handleOnChange}
                    />
                </div>
            </div>
            {/*  Host Name */}
            <div class="form-group row">
                <label class="control-label  col-sm-2 ">Host Name</label>
                <div class=" col-sm-10 ">
                    <input
                        type="text"
                        class="form-control"
                        value={props.hostname}
                        name="hostname"
                        // onChange={ handleOnChange}
                    />
                </div>
            </div>
            {/* IP port */}
            <div class="form-group row">
                <label class="control-label  col-sm-2 ">IP Port</label>
                <div class=" col-sm-10 ">
                    <input
                        type="text"
                        class="form-control"
                        value={ props.ipPort}
                        name="ipPort"
                        // onChange={handleOnChange}
                    />
                </div>
            </div>
            {/* Description */}
            <div class="form-group row">
                <label class="control-label  col-sm-2 ">Description</label>
                <div class=" col-sm-10 ">
                    <textarea
                        rows="2"
                        type="text"
                        class="form-control"
                        value={props.description}
                        name="description"
                        // onChange={handleOnChange}
                    ></textarea>
                </div>
            </div>
            {/* Long description */}
            <div class="form-group row">
                <label class="control-label  col-sm-2 ">Long description</label>
                <div class=" col-sm-10 ">
                    <textarea
                        rows="2"
                        type="text"
                        class="form-control"
                        value={props.longDescription}
                        name="longDescription"
                        // onChange={handleOnChange}
                    ></textarea>
                </div>
            </div>
            {/* Status */}
            <div class="form-group row">
                <label class="control-label col-md-2 col-sm-2 ">Status</label>
                <div class="col-md-10 col-sm-10 ">
                    {
                        <select
                            class="form-control"
                            value={props.status}
                            name="status"
                            // onChange={handleOnChange}
                        >
                            {/* {state.statusValues.map((value) => (
                                <option>{value}</option>
                            ))} */}
                        </select>
                    }
                </div>
            </div>
            {/* Type */}
            <div class="form-group row">
                <label class="control-label col-md-2 col-sm-2 ">Type</label>
                <div class="col-md-10 col-sm-10 ">
                    {
                        <select
                            class="form-control"
                            value={props.type}
                            name="type"
                            // onChange={handleOnChange}
                        >
                            {/* {state.typeValues.map((value) => (
                                <option>{value}</option>
                            ))} */}
                        </select>
                    }
                </div>
            </div>
            {/* Classification */}
            <div class="form-group row">
                <label class="control-label col-md-2 col-sm-2 ">Classification</label>
                <div class="col-md-10 col-sm-10 ">
                    {
                        <select
                            class="form-control"
                            value={props.type}
                            name="classification"
                            // onChange={handleOnChange}
                        >
                            {/* {state.classificationValues.map((value) => (
                                <option>{value}</option>
                            ))} */}
                        </select>
                    }
                </div>
            </div>
            {/* Related findings */}
            <div class="form-group row">
                <label class="control-label col-sm-2 ">Related Finding(s)</label>
                <div class="col-md-10 col-sm-10 ">
                    {
                        <select
                            class="form-control"
                            value={props.related}
                            name="related"
                            // onChange={handleOnChange}
                        >
                            {/* {state.valuesType.map((value) => (
                                <option>{value}</option>))} */}
                        </select>
                    }
                </div>
            </div>
                   
            <Row>
                <Col md={4} sm={2} xs={12}>
                    {/* System */}
                    <div class="form-group row">
                        <label class="control-label col-md-4 col-sm-2 ">System</label>
                        <div class="col-md-10 col-sm-10 ">
                            {
                                <select
                                    class="form-control"
                                // value={state.type}
                                // onChange={handleOnChange}
                                >
                                    {/* {state.valuesType.map((value) => (
                                    <option>{value}</option>
                                    ))} */}
                                </select>
                            }
                        </div>
                    </div>
                </Col>
                <Col md={4} sm={2} xs={12}>
                    {/* Task */}
                    <div class="form-group row">
                        <label class="control-label col-md-4 col-sm-2 ">Task</label>
                        <div class="col-md-10 col-sm-10 ">
                            {
                                <select
                                    class="form-control"
                                // value={state.type}
                                // onChange={handleOnChange}
                                >
                                    {/* {state.valuesType.map((value) => (
                    <option>{value}</option>
                    ))} */}
                                </select>
                            }
                        </div>
                    </div>
                </Col>
                <Col md={4} sm={2} xs={12}>
                    {/* Subtask */}
                    <div class="form-group row">
                        <label class="control-label col-md-4 col-sm-2 ">Subtask</label>
                        <div class="col-md-10 col-sm-10 ">
                            {
                                <select
                                    class="form-control"
                                // value={state.type}
                                // onChange={onChangeType}
                                >
                                    {/* {state.valuesType.map((value) => (
                    <option>{value}</option>
                    ))} */}
                                </select>

                            }
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    );
}
function CounterMeasure(props) {
    return(
        <div class="x_panel tile">
            <div class="x_title">
                <h2> Countermeasure <Tooltip /></h2>
                <div class="clearfix"></div>
            </div>
            <div class="form-group row">
                <label class="control-label col-md-3 col-sm-3 ">Effectiveness Rating</label>
                <div class="col-md-6 col-sm-10 ">
                    {
                        <select
                            class="form-control"
                        // value={this.state.type}
                        // onChange={this.onChangeType}
                        >
                            {/* {this.state.valuesType.map((value) => (
                            <option>{value}</option>
                            ))} */}
                        </select>
                    }
                </div>
            </div>
        </div>
    );
}

function Severity(props) {
    return(
        <div class="x_panel tile">
            <div class="x_title">
                <h2> Severity <Tooltip /></h2>
                <div class="clearfix"></div>
            </div>
            <div class="form-group row">
                <label class="control-label col-md-3 col-sm-3 ">Severity Category Score</label>
                <div class=" col-md-6 col-sm-10">
                    <input type="text" class="form-control" />
                </div>
            </div>
            <div class="form-group row">
                <label class="control-label col-md-3 col-sm-3 ">Vulnerability Severity</label>
                <div class="col-md-6 col-sm-10">
                    <input type="text" class="form-control" />
                </div>
            </div>
            <div class="form-group row">
                <label class="control-label col-md-3 col-sm-3 ">Quantitative Vulnerability Severity</label>
                <div class=" col-md-6 col-sm-10">
                    <input type="text" class="form-control" />
                </div>
            </div>
        </div>
    );
}

function Risk(props){
    return(
        <div class="x_panel tile">
            <div class="x_title">
                <h2> Risk <Tooltip /></h2>
                <div class="clearfix"></div>
            </div>
            <div class="form-group row">
                <label class="control-label col-md-3 col-sm-3 ">Risk</label>
                <div class=" col-md-6 col-sm-10">
                    <input type="text" class="form-control" />
                </div>
            </div>
            <div class="form-group row">
                <label class="control-label col-md-3 col-sm-3 ">Likelihood</label>
                <div class="col-md-6 col-sm-10">
                    <input type="text" class="form-control" />
                </div>
            </div>
        </div>

    );
}
    
function Mitigation(props) {
    return(
        <div class="x_panel tile">
            <div class="x_title">
                <h2> Mitigation <Tooltip /></h2>
                <div class="clearfix"></div>
            </div>
            <div class="form-group row">
                <label class="control-label  col-sm-2 ">Brief Description</label>
                <div class=" col-sm-10 ">
                    <textarea
                        rows="2" type="text" class="form-control" >
                    </textarea>
                </div>
            </div>
            <div class="form-group row">
                <label class="control-label  col-sm-2 ">Long description</label>
                <div class=" col-sm-10 ">
                    <textarea
                        rows="4" type="text" class="form-control" ></textarea>
                </div>
            </div>
        </div>

    );
}


function FindingSystemLevelImpact(props) {
    return(
        <div class="x_panel tile">
            <div class="x_title">
                <h2> Finding System Level Impact <Tooltip /></h2>
                <div class="clearfix"></div>
            </div>
            <div class="form-group row">
                <label class="control-label col-md-3 col-sm-3 ">Confidentiality Finding Impact on System</label>
                <div class=" col-md-6 col-sm-10">
                    <input type="text" class="form-control" />
                </div>
            </div>
            <div class="form-group row">
                <label class="control-label col-md-3 col-sm-3 ">Integrity Finding Impact on System</label>
                <div class="col-md-6 col-sm-10">
                    <input type="text" class="form-control" />
                </div>
            </div>
            <div class="form-group row">
                <label class="control-label col-md-3 col-sm-3 ">Availability Finding Impact on System</label>
                <div class="col-md-6 col-sm-10">
                    <input type="text" class="form-control" />
                </div>
            </div>
            <div class="form-group row">
                <label class="control-label col-md-3 col-sm-3 ">Impact Score</label>
                <div class="col-md-6 col-sm-10">
                    <input type="text" class="form-control" />
                </div>
            </div>
        </div>
    );
} 


class DetailedView extends Component {
    constructor(props) {
        super(props);

        this.handleOnChange = this.handleOnChange.bind(this);

        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            findingID: "",
            hostname: "",
            ipPort: "",
            description: "",
            longDescription: "",
            title: "",
            findingSystem: "",
            findingTask: "",
            findingSubtask: "",
            findingAnalyst: [],
            collaborator: "",
            posture: "",
            status: "",
            classification: "",
            related: [],
            type: "",
            progress: 0,
            confidentiality: "",
            integrity: "",
            availability: "",
            mitigationBrief: "",
            mitigationLong: "",
            relevance: "",
            effectivenessRate: "",
            impactLevel: "",
            impactDescription: "",
            severityCategoryCode: "",
            severityCategoryScore: 0,
            vulnerabilitySeverity: 0,
            risk: "",
            likelihood: "",
            confImpactSystem: "",
            integImpactSystem: "",
            availImpactSystem: "",
            impactScore: 0,
            statusValues: [], //done
            typeValues: [], //done
            classificationValues: [], //done
            confidentialityValues: [],
            integrityValues: [],
            availabilityValues: [],
            impactLevelValues: [], //done
            postureValues: [], //done
            relevanceValues: [], //done
            analystValues: []

        };
    }
    componentDidMount() {
        //For finding status values 
        let analystList = []
        
        axios
            .get("http://localhost:4000/configuration/get/findingstatus")
            .then((response) => {
                this.setState({
                    statusValues: response.data.values
                })
            })
            .catch(function (error) {
                console.log(error);
            });

        //For finding type values 
        axios
            .get("http://localhost:4000/configuration/get/findingtype")
            .then((response) => {
                this.setState({
                    typeValues: response.data.values
                })
            })
            .catch(function (error) {
                console.log(error);
            });

        // For Analyst values
        axios
            .get("http://localhost:4000/analyst/get")
            .then((response) => {
                for (var i = 0; i < response.data.length; i++) {
                    analystList.push({
                        label: JSON.stringify(response.data[i].initials),
                        value: JSON.stringify(response.data[i].initials)
                    });
                }
                console.log("ANALYST VALUES: " + analystList[0].label)

                this.setState({
                    analystValues: analystList
                })
                console.log("ANALYST VALUES: " + this.state.analystValues)
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    handleOnChange = (e) => {
        const { value, name } = e.target
        this.setState({ [name] : value })
    }

    onSubmit(e) {
        e.preventDefault();

        console.log("Finding Submitted");
        console.log("Finding ID: ${this.state.findingID}");
        console.log("Host name: ${this.state.hostname}");
        console.log("IP Port: ${this.state.ipPort}");
        console.log("Description: ${this.state.description}");
        console.log("Description long: ${this.state.longDescription}");

        const newFinding = {
            findingID: this.state.findingID,
            hostname: this.state.hostname,
            ipPort: this.state.ipPort,
            description: this.state.description,
            longDescription: this.state.longDescription,
        };

        const newHistory = {
            action: "Finding added",
            analyst: "",
        };

        axios
            .post("http://localhost:4000/home/findings/new", newFinding) //double check this
            .then((res) => console.log(res.data));

        axios
            .post("http://localhost:4000/history/new", newHistory)
            .then((res) => console.log(res.data));

        this.setState({
            name: "",
            description: "",
            type: "",
            version: "",
            assessdate: "",
            organizationname: "",
            sctg: "",
            classification: "",
            declassificationdate: "",
            customername: "",
            progress: 0,
        });
    }
    
    // what you see
    render() {
        return (
            // x_panel is container
            <div class="x_panel" >
                <Tooltip />
                <form onSubmit={this.onSubmit}>
                    <Row>
                        <Col md={6} sm={6} xs={12}>
                            <FindingInformation values={this.props} handleOnChange={this.handleOnChange} />
                        </Col>
                        <Col md={6} sm={6} xs={12}>
                            <div class="x_panel tile">
                                <div class="x_title">
                                    <h2> Analyst Information <Tooltip /></h2>
                                    <div class="clearfix"></div>
                                </div>
                                <Row>
                                    <div class="form-group row">
                                        <label class="control-label col-md-3 col-sm-3 ">Analyst</label>
                                        <div class="col-md-6 col-sm-10 ">
                                            {
                                                <Multiselect
                                                    // class="form-control"
                                                    options={this.state.analystValues}
                                                    onChange={this.onChangeAnalyst}
                                                    onRemove={this.onRemoveAnalyst}
                                                    placeholder="Analysts"
                                                >
                                                    {this.state.analystValues.map((value)=> (
                                                        <option> {value} </option>
                                                    ))}
                                                </Multiselect>
                                            }
                                        </div>
                                    </div>

                                    <div class="form-group row">
                                        <label class="control-label col-md-3 col-sm-3 ">Collaborator</label>
                                        <div class="col-md-6 col-sm-10 ">
                                            {
                                                <select
                                                    class="form-control"
                                                // value={this.state.type}
                                                // onChange={this.onChangeType}
                                                >
                                                    {/* {this.state.valuesType.map((value) => (
                                                    <option>{value}</option>
                                                    ))} */}
                                                </select>
                                            }
                                        </div>
                                    </div>

                                    <div class="form-group row">
                                        <label class="control-label col-md-3 col-sm-3 ">Posture</label>
                                        <div class="col-md-6 col-sm-10 ">
                                            {
                                                <select
                                                    class="form-control"
                                                    value={this.state.posture}
                                                    onChange={this.onChangePosture}
                                                >
                                                    {this.state.postureValues.map((value) => (
                                                        <option>{value}</option>
                                                    ))}
                                                </select>
                                            }
                                        </div>
                                    </div>
                                </Row>
                            </div>
                        </Col>
                        <Col md={6} sm={6} xs={12}>
                            <div class="x_panel tile">
                                <div class="x_title">
                                    <h2> Finding Impact <Tooltip /></h2>
                                    <div class="clearfix"></div>
                                </div>
                                <Row>
                                    <div class="form-group row">
                                        <label class="control-label col-md-3 col-sm-3 ">Confidentiality </label>
                                        <div class="col-md-6 col-sm-10 ">
                                            {
                                                <select
                                                    class="form-control"
                                                    value={this.state.confidentiality}
                                                    onChange={this.onChangeConfidentiality}
                                                >
                                                    {this.state.confidentialityValues.map((value) => (
                                                        <option>{value}</option>
                                                    ))}
                                                </select>
                                            }
                                        </div>
                                    </div>

                                    <div class="form-group row">
                                        <label class="control-label col-md-3 col-sm-3 ">Integrity</label>
                                        <div class="col-md-6 col-sm-10 ">
                                            {
                                                <select
                                                    class="form-control"
                                                    value={this.state.integrity}
                                                    onChange={this.onChangeIntegrity}
                                                >
                                                    {this.state.integrityValues.map((value) => (
                                                        <option>{value}</option>
                                                    ))}
                                                </select>
                                            }
                                        </div>
                                    </div>

                                    <div class="form-group row">
                                        <label class="control-label col-md-3 col-sm-3 ">Availability</label>
                                        <div class="col-md-6 col-sm-10 ">
                                            {
                                                <select
                                                    class="form-control"
                                                    value={this.state.availability}
                                                    onChange={this.onChangeAvailability}
                                                >
                                                    {this.state.availabilityValues.map((value) => (
                                                        <option>{value}</option>
                                                    ))}
                                                </select>
                                            }
                                        </div>
                                    </div>
                                </Row>
                            </div>
                        </Col>
                        <Col md={6} sm={6} xs={12}>
                            <div class="x_panel tile">
                                <div class="x_title">
                                    <h2> Threat Relevance <Tooltip /></h2>
                                    <div class="clearfix"></div>
                                </div>
                                <div class="form-group row">
                                    <label class="control-label col-md-3 col-sm-3 ">Relevance</label>
                                    <div class="col-md-6 col-sm-10 ">
                                        {
                                            <select
                                                class="form-control"
                                                value={this.state.relevance}
                                                onChange={this.onChangeRelevance}
                                            >
                                                {this.state.relevanceValues.map((value) => (
                                                    <option>{value}</option>
                                                ))}
                                            </select>
                                        }
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col md={6} sm={6} xs={12}>
                            <CounterMeasure />
                        </Col>
                        <Col md={6} sm={6} xs={12}>
                            <div class="x_panel tile">
                                <div class="x_title">
                                    <h2> Impact <Tooltip /></h2>
                                    <div class="clearfix"></div>
                                </div>
                                <div class="form-group row">
                                    <label class="control-label col-md-3 col-sm-3 ">Impact Level</label>
                                    <div class="col-md-10 col-sm-10 ">
                                        {
                                            <select
                                                class="form-control"
                                                value={this.state.impactLevel}
                                                onChange={this.onChangeImpactLevel}
                                            >
                                                {this.state.impactLevelValues.map((value) => (
                                                    <option>{value}</option>
                                                ))}
                                            </select>
                                        }
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label class="control-label  col-sm-3 ">Impact description</label>
                                    <div class=" col-sm-10 ">
                                        <textarea
                                            rows="3" type="text" class="form-control" ></textarea>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col md={6} sm={6} xs={12}>
                            <Severity />
                        </Col>
                        <Col md={6} sm={6} xs={12}>
                            <Risk />
                        </Col>
                        <Col md={6} sm={6} xs={12}>
                            <FindingSystemLevelImpact />
                        </Col>
                    </Row>

                    <Row md={6} sm={6} xs={12}>
                        <Mitigation/>
                    </Row>

                    {/* Buttons */}
                    <br />
                    <div class="item form-group">
                        <button onClick={() => window.location.reload(false)} class="btn btn-primary" type="submit" value="Save Finding">
                            Save
                        </button>
                        <button onClick={() => window.location.reload(false)} class="btn btn-danger" type="cancel">
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}
export default DetailedView;