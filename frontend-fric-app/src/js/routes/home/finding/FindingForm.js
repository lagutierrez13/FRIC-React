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
    console.log("Finding id: " + props.values.findingID)
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
                        value={props.values.hostname}
                        name="hostname"
                        onChange={props.handleOnChange}
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
                        value={ props.values.ipPort}
                        name="ipPort"
                        onChange={props.handleOnChange}
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
                        value={props.values.description}
                        name="description"
                        onChange={props.handleOnChange}
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
                        value={props.values.longDescription}
                        name="longDescription"
                        onChange={props.handleOnChange}
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
                            value={props.values.status}
                            name="status"
                            onChange={props.handleOnChange}
                        >
                         {props.statusValues.map((value) => (
                             <option>{value}</option>
                         ))}
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
                            value={props.values.type}
                            name="type"
                            onChange={props.handleOnChange}
                        >
                            {props.typeValues.map((value) => (
                             <option>{value}</option>
                         ))}
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
                            onChange={props.handleOnChange}
                        >
                            {props.classificationValues.map((value) => (
                             <option>{value}</option>
                         ))}
                        </select>
                    }
                </div>
            </div>
            {/* Related findings */}
            <div class="form-group row">
                <label class="control-label col-sm-2 ">Related Finding(s)</label>
                <div class="col-md-10 col-sm-10 ">
                    {
                        <Multiselect
                            class="form-control"
                            options={props.relatedValues}
                            displayValue="value"
                            onSelect={props.onMultiSelect}
                            name="related"
                        />
                    }
                    <br></br>
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
                                    onChange={props.handleOnChange}
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
                                onChange={props.handleOnChange}
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
                                    onChange={props.handleOnChange}
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
function AnalystInformation(props){
    
    return(
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
                                class="form-control"
                                options={props.analystValues}
                                displayValue="value"
                                onSelect={props.onMultiSelect}
                                //onRemove={this.onMultiRemove}
                            />
                        }
                    </div>
                </div>

                <div class="form-group row">
                    <label class="control-label col-md-3 col-sm-3 ">Collaborator</label>
                    <div class="col-md-6 col-sm-10 ">
                        {
                             <Multiselect
                                class="form-control"
                                options={props.collaboratorValues}
                                displayValue="value"
                                onSelect={props.onMultiSelect}
                                //onRemove={this.onMultiRemove}
                         />
                        }
                    </div>
                </div>

                <div class="form-group row">
                    <label class="control-label col-md-3 col-sm-3 ">Posture</label>
                    <div class="col-md-6 col-sm-10 ">
                        {
                             <select
                                class="form-control"
                                value={props.posture}
                                name="posture"
                                onChange={props.handleOnChange}
                            >
                             {props.postureValues.map((value) => (
                                <option>{value}</option>
                                ))}
                            </select>
                        }
                    </div>
                </div>
            </Row>
        </div>
    )
}
function FindingImpact(props){
    return(
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
                                value={props.confidentiality}
                                name="confidentiality"
                                onChange={props.handleOnChange}
                            >
                            {props.ciaValues.map((value) => (
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
                                value={props.integrity}
                                name="integrity"
                                onChange={props.handleOnChange}
                            >
                            {props.ciaValues.map((value) => (
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
                                value={props.availability}
                                name="availability"
                                onChange={props.handleOnChange}
                            >
                            {props.ciaValues.map((value) => (
                                <option>{value}</option>
                            ))}
                            </select>
                        }
                    </div>
                </div>
            </Row>
        </div>

    )
}
function ThreatRelevance(props){
    return(
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
                            // value={this.state.relevance}
                            // onChange={this.onChangeRelevance}
                        >
                            {/* {this.state.relevanceValues.map((value) => (
                                <option>{value}</option>
                            ))} */}
                        </select>
                    }
                </div>
            </div>
        </div>
    )
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
function Impact(props){
    return(
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
                            // value={this.state.impactLevel}
                            // onChange={this.onChangeImpactLevel}
                        >
                            {/* {this.state.impactLevelValues.map((value) => (
                                <option>{value}</option>
                            ))} */}
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
    )
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
        this.onMultiSelect = this.onMultiSelect.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.setSingleValuesFromDatabase = this.setSingleValuesFromDatabase.bind(this);
        this.setMultiValuesFromDatabase = this.setMultiValuesFromDatabase.bind(this);
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
            collaborator: [],
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
            ciaValues: [],
            impactLevelValues: [], //done
            postureValues: [], //done
            relevanceValues: [], //done
            analystValues: [],
            collaboratorValues: [],
            relatedValues: [],
        };
    }
    setSingleValuesFromDatabase(request,tempList,valueArray){
        axios
            .get(request)
            .then((response) => {
                for (var i = 0; i < response.data.values.length; i++) {
                    tempList.push(response.data.values[i]);
                }
                this.setState({
                    [valueArray] : tempList
                })
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    setMultiValuesFromDatabase(request,tempList,valueToGet,setName,valueArray){
        axios
            .get(request)
            .then((response) => {
                for (var i = 0; i < response.data.length; i++) {
                    tempList.push({
                        value: response.data[i][valueToGet],
                        name: setName
                    });
                }
                this.setState({
                    [valueArray]: tempList
                })
            })
    }
    componentDidMount() {
        this.setState({
            classificationValues: [" ","Vulnerability","Information"],
            postureValues: [" ","Insider","Outsider"],
            ciaValues: [" ", "Low ", "Medium", "High", "Information"]
        })
        //For finding status values 
        let analystList = []
        let collaboratorList = []
        let postureList = []
        let findingList = []
        let statusList = [" "]
        let typeList = [" "]
        let classificationList = [" "]
        
        //For finding status
        this.setSingleValuesFromDatabase("http://localhost:4000/configuration/get/findingstatus",statusList,"statusValues")
        //For finding type values 
        this.setSingleValuesFromDatabase("http://localhost:4000/configuration/get/findingtype",typeList,"typeValues")
        //For posture values
        // this.setSingleValuesFromDatabase("http://localhost:4000/configuration/get/posture",postureList,"postureValues")
        //For classification values
        this.setSingleValuesFromDatabase("http://localhost:4000/configuration/get/findingclassification",classificationList,"classificationValues")
        // For Analyst values 
        this.setMultiValuesFromDatabase("http://localhost:4000/analyst/get",analystList,"initials","findingAnalyst","analystValues")
        //For collaborator values
        this.setMultiValuesFromDatabase("http://localhost:4000/analyst/get",collaboratorList,"initials","collaborator","collaboratorValues")
        //For related values
        this.setMultiValuesFromDatabase("http://localhost:4000/home/findings/get",findingList,"findingID","related","relatedValues")
        
    }
    handleOnChange = (e) => {
        const { value, name } = e.target
        this.setState({ [name] : value })
    }
    onMultiSelect = (option) => {
        console.log("Option: " + option[0].name)
        let objList = option.map(a => a.value + " ");
        this.setState({ [option[0].name]: objList})
    }
    onSubmit(e) {
        e.preventDefault();

        console.log("Finding Submitted");
        console.log("Finding ID: ${this.state.findingID}");

        const newFinding = {
            findingID: this.state.findingID,
            findingAnalyst: this.state.findingAnalyst,
            collaborator: this.state.collaborator,
            status: this.state.status,
            posture: this.state.posture,
            related: this.state.related,
            type: this.state.type,
            classification: this.state.classification,
            hostname: this.state.hostname,
            ipPort: this.state.ipPort,
            description: this.state.description,
            longDescription: this.state.longDescription,
            confidentiality: this.state.confidentiality,
            integrity: this.state.integrity,
            availability: this.state.availability
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
                            <FindingInformation values={this.props} 
                                                statusValues={this.state.statusValues}
                                                classificationValues={this.state.classificationValues}
                                                typeValues={this.state.typeValues}
                                                relatedValues={this.state.relatedValues}
                                                handleOnChange={this.handleOnChange} 
                                                onMultiSelect={this.onMultiSelect}
                            />
                        </Col>
                        <Col md={6} sm={6} xs={12}>
                            <AnalystInformation values={this.props}
                                                analystValues={this.state.analystValues} 
                                                collaboratorValues={this.state.collaboratorValues}
                                                postureValues={this.state.postureValues}
                                                onMultiSelect={this.onMultiSelect}
                                                handleOnChange={this.handleOnChange} />
                        </Col>
                        <Col md={6} sm={6} xs={12}>
                            <FindingImpact ciaValues={this.state.ciaValues}
                                        handleOnChange={this.handleOnChange} />
                        </Col>
                        <Col md={6} sm={6} xs={12}>
                            <ThreatRelevance />
                        </Col>
                        <Col md={6} sm={6} xs={12}>
                            <CounterMeasure />
                        </Col>
                        <Col md={6} sm={6} xs={12}>
                            <Impact />
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