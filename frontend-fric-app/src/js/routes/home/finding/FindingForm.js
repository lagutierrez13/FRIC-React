import React, { Component } from "react";
import { Row, Col } from 'react-bootstrap'
import axios from "axios";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { Multiselect } from 'multiselect-react-dropdown';

function Tooltip(props){
    return(
        <Popup trigger={<button>?</button>} position="right center">
            {(close) => (
                <div>
                    {props.description}
                    <a className="close" onClick={close}>
                        &times;
                    </a>
                </div>
            )}
        </Popup>
    )
}
function FindingInformation(props){
    return(
        <div class="x_panel tile">
            {/* Finding information */}
            <div class="x_title">
                <h2>
                    Finding Information <Tooltip description="" />
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
                        <div class="pull-right">
                            <label>OR</label>
                        </div>
                        <div class="col-md-10 col-sm-10 ">
                            {
                                <select
                                    class="form-control"
                                    name="findingSystem"
                                    onChange={props.handleOnChange}
                                >
                                    {props.systemValues.map((value) => (
                                        <option>{value.value}</option>
                                    ))}
                                </select>
                            }
                        </div>
                    </div>
                </Col>
                <Col md={4} sm={2} xs={12}>
                    {/* Task */}
                    <div class="form-group row">
                        <label class="control-label col-md-4 col-sm-2 ">Task</label>
                        <div class="pull-right">
                            <label>OR</label>
                        </div>
                        <div class="col-md-10 col-sm-10 ">
                            {
                                <select
                                    class="form-control"
                                    name="findingTask"
                                    onChange={props.handleOnChange}
                                >
                                    {props.taskValues.map((value) => (
                                        <option>{value.value}</option>
                                    ))}
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
                                    name="findingSubtask"
                                    onChange={props.handleOnChange}
                                >
                                    {props.subtaskValues.map((value) => (
                                        <option>{value.value}</option>
                                    ))}
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
                            value={props.relevance}
                            name="relevance"
                            onChange={props.handleOnChange}
                        >
                            {props.relevanceValues.map((value) => (
                                <option>{value}</option>
                            ))}
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
                            name="effectivenessRate"
                            onChange={props.handleOnChange}
                        >
                            {props.counterMeasureValues.map((value) => (
                            <option>{value}</option>
                            ))}
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
                            name="impactLevel"
                            onChange={props.handleOnChange}
                        >
                            {props.impactLevelValues.map((value) => (
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
                        rows="3" 
                        type="text" 
                        class="form-control" 
                        value={props.impactDescription}
                        name="impactDescription"
                        onChange={props.handleOnChange}>

                        </textarea>
                </div>
            </div>
        </div>
    )
}
function Severity(props) {
    return(
        <div class="x_panel tile">
            <div class="x_title">
                <h2> Severity <Tooltip description="Vulnerability Severity needs the values of Severity Category Score, Impact Score, and Effectiveness rating to be calculated.
                                                    Qualitative Vulnerability Severity needs the value of Vulnerability Severity to be calculated. " /></h2>
                <div class="clearfix"></div>
            </div>
            <div class="form-group row">
                <label class="control-label col-md-3 col-sm-3 ">Severity Category Code</label>
                <div class="col-md-6 col-sm-10 ">
                    {
                        <select
                            class="form-control"
                            name="severityCategoryCode"
                            onChange={props.changeCatScore}
                        >
                            {props.catValues.map((value) => (
                                <option>{value}</option>
                            ))}
                        </select>
                    }
                </div>
            </div>
            <div class="form-group row">
                <label class="control-label col-md-3 col-sm-3 ">Severity Category Score</label>
                <div class=" col-md-6 col-sm-10">
                    <input type="text" class="form-control" readOnly={true} placeholder={props.severityCategoryScore} />
                </div>
            </div>
            <div class="form-group row">
                <label class="control-label col-md-3 col-sm-3 ">Vulnerability Severity</label>
                <div class="col-md-6 col-sm-10">
                    <input type="text" class="form-control" readOnly={true} placeholder={props.vulnerabilitySeverity} />
                    <div class="pull-right">
                        <button class="btn btn-primary" type="button" onClick={props.changeVulnerabilitySeverity}> Calculate </button>
                    </div>
                </div>
            </div>
            <div class="form-group row">
                <label class="control-label col-md-3 col-sm-3 ">Qualitative Vulnerability Severity</label>
                <div class=" col-md-6 col-sm-10">
                    <input type="text" class="form-control" readOnly={true}  placeholder={props.qualitativeVS} />
                    <div class="pull-right">
                        <button class="btn btn-primary" type="button" onClick={props.changeQualitativeVS}> Calculate </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
function Risk(props){
    return(
        <div class="x_panel tile">
            <div class="x_title">
                <h2> Risk 
                    <Tooltip description="Calculate Likelihood first, then Risk.
                                         Likelihood needs the values of Vulnerability Severity and Relevance of Threat to be calculated.
                                         Risk needs the values of Likelihood and Impact Level to be calculated.
                                             "/>
                </h2>
                <div class="clearfix"></div>
            </div>
            <div class="form-group row">
                <label class="control-label col-md-3 col-sm-3 ">Likelihood</label>
                <div class="col-md-6 col-sm-10">
                    <input type="text" class="form-control" readOnly={true} placeholder={props.likelihood} />
                </div>
                <div class="pull-right">
                    <button class="btn btn-primary" type="button" onClick={props.changeLikeliHood}> Calculate </button>
                </div>
            </div>
            <div class="form-group row">
                <label class="control-label col-md-3 col-sm-3 ">Risk</label>
                <div class=" col-md-6 col-sm-10">
                    <input type="text" class="form-control" readOnly={true} placeholder={props.risk} />
                </div>
                <div class="pull-right">
                    <button class="btn btn-primary" type="button" onClick={props.changeRisk}> Calculate </button>
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
                        rows="2" 
                        type="text" 
                        class="form-control"
                        value={props.values.mitigationBrief}
                        name="mitigationBrief"
                        onChange={props.handleOnChange}
                         >
                    </textarea>
                </div>
            </div>
            <div class="form-group row">
                <label class="control-label  col-sm-2 ">Long description</label>
                <div class=" col-sm-10 ">
                    <textarea
                        rows="2" 
                        type="text" 
                        class="form-control"
                        value={props.values.mitigationLong}
                        name="mitigationLong"
                        onChange={props.handleOnChange}
                         >
                    </textarea>
                </div>
            </div>
        </div>

    );
}
function FindingSystemLevelImpact(props) {
    return(
        <div class="x_panel tile">
            <div class="x_title">
                <h2> Finding System Level Impact 
                    <Tooltip />
                </h2>
                <div class="clearfix"></div>
            </div>
            <div class="form-group row">
                <label class="control-label col-md-3 col-sm-3 ">Confidentiality Finding Impact on System</label>
                <div class=" col-md-6 col-sm-10">
                    <input type="text" class="form-control" readOnly={true}/>
                </div>
            </div>
            <div class="form-group row">
                <label class="control-label col-md-3 col-sm-3 ">Integrity Finding Impact on System</label>
                <div class="col-md-6 col-sm-10">
                    <input type="text" class="form-control" readOnly={true} />
                </div>
            </div>
            <div class="form-group row">
                <label class="control-label col-md-3 col-sm-3 ">Availability Finding Impact on System</label>
                <div class="col-md-6 col-sm-10">
                    <input type="text" class="form-control" readOnly={true} />
                </div>
            </div>
            <div class="form-group row">
                <label class="control-label col-md-3 col-sm-3 ">Impact Score</label>
                <div class="col-md-6 col-sm-10">
                    <input 
                        type="number"  
                        min={1}
                        max={10}
                        class="form-control"
                        name="impactScore"
                        onChange={props.handleOnChange}>
                    </input>
                </div>
            </div>
        </div>
    );
} 
class DetailedView extends Component {
    constructor(props) {
        super(props);
        this.getCatScore = this.getCatScore.bind(this)
        this.changeCatScore = this.changeCatScore.bind(this);
        this.getNumberCounterMeasure = this.getNumberCounterMeasure.bind(this);
        this.changeVulnerabilitySeverity = this.changeVulnerabilitySeverity.bind(this);
        this.getQualitativeVS = this.getQualitativeVS.bind(this)
        this.changeQualitativeVS = this.changeQualitativeVS.bind(this)
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
            posture: " ",
            status: " ",
            classification: " ",
            related: [],
            type: " ",
            progress: 0,
            confidentiality: " ",
            integrity: " ",
            availability: " ",
            mitigationBrief: " ",
            mitigationLong: " ",
            relevance: " ",
            effectivenessRate: " ",
            impactLevel: " ",
            impactDescription: " ",
            severityCategoryCode: " ",
            severityCategoryScore: 0, //derived
            vulnerabilitySeverity: 0, //derived
            qualitativeVS: " ",
            risk: " ", //derived
            likelihood: " ", //derived
            confImpactSystem: "", //derived but idk how need to ask
            integImpactSystem: "", //derived but idk how need to ask
            availImpactSystem: "", //derived but idk how need to ask
            impactScore: 0,
            statusValues: [],
            typeValues: [], 
            classificationValues: [],
            ciaValues: [],
            impactLevelValues: [], 
            postureValues: [], 
            relevanceValues: [],
            counterMeasureValues: [],
            analystValues: [],
            collaboratorValues: [],
            relatedValues: [],
            catValues: [],
            systemValues: [],
            taskValues: [],
            subtaskValues: [],
            likelihoodMap: new Map(),
            riskMap: new Map()
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
            ciaValues: [" ", "Low ", "Medium", "High", "Information"],
            catValues: [" ", "I", "II", "III"],
            likelihoodMap: new Map([
                ["ConfirmedVL","VL"],["ConfirmedL","L"],["ConfirmedM","M"],["ConfirmedH","H"],["ConfirmedVH","VH"],
                ["ExpectedVL","VL"],["ExpectedL","L"],["ExpectedM","M"],["ExpectedH","H"],["ExpectedVH","VH"],
                ["AnticipatedVL","VL"],["AnticipatedL","L"],["AnticipatedM","M"],["AnticipatedH","M"],["AnticipatedVH","H"],
                ["PredictedVL","VL"],["PredictedL","L"],["PredictedM","L"],["PredictedH","L"],["PredictedVH","M"],
                ["PossibleVL","VL"],["PossibleL","VL"],["PossibleM","L"],["PossibleH","L"],["PossibleVH","L"]
    
            ]),
            riskMap: new Map([
                ["VHVL","VL"],["VHL","L"],["VHM","M"],["VHH","H"],["VHVH","VH"],
                ["HVL","VL"],["HL","L"],["HM","M"],["HH","H"],["VHVH","VH"],
                ["MVL","VL"],["ML","L"],["MM","M"],["MH","M"],["MVH","H"],
                ["LVL","VL"],["LL","L"],["LM","L"],["LH","L"],["LVH","M"],
                ["VLVL","VL"],["VLL","VL"],["VLM","L"],["VLH","L"],["VLVH","L"]
    
            ])
        })
        //For finding status values 
        let analystList = []
        let collaboratorList = []
        let postureList = []
        let findingList = []
        let statusList = [" "]
        let typeList = [" "]
        let classificationList = [" "]
        let systemList = [" "]
        let taskList = [" "]
        let subtaskList = [" "]
        let impactLevelList = [ " "]
        let countermeasureList = [" "]
        let relevanceList = [" "]
        //For system
        this.setMultiValuesFromDatabase("http://localhost:4000/home/systems/get",systemList,"systemname","findingSystem","systemValues")
        // //For task
        this.setMultiValuesFromDatabase("http://localhost:4000/home/tasks/get",taskList,"tasktitle","findingTask","taskValues")
        // //For subtask
        this.setMultiValuesFromDatabase("http://localhost:4000/home/subtasks/get",subtaskList,"title","findingSubtask","subtaskValues")
        //For finding status
        this.setSingleValuesFromDatabase("http://localhost:4000/configuration/get/findingstatus",statusList,"statusValues")
        //For finding impact level
        this.setSingleValuesFromDatabase("http://localhost:4000/configuration/get/findingimpactlevel",impactLevelList,"impactLevelValues")
        //For relevance
        this.setSingleValuesFromDatabase("http://localhost:4000/configuration/get/relevance", relevanceList, "relevanceValues")
        //For countermeasure
        this.setSingleValuesFromDatabase("http://localhost:4000/configuration/get/effectivenessrating",countermeasureList,"counterMeasureValues")
        //For finding type values 
        this.setSingleValuesFromDatabase("http://localhost:4000/configuration/get/findingtype",typeList,"typeValues")
        //For finding classification values 
        this.setSingleValuesFromDatabase("http://localhost:4000/configuration/get/findingclassification",classificationList,"classificationValues")
        //For posture values
        this.setSingleValuesFromDatabase("http://localhost:4000/configuration/get/posture",postureList,"postureValues")
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
            availability: this.state.availability,
            mitigationBrief: this.state.mitigationBrief,
            mitigationLong: this.state.mitigationLong,
            effectivenessRate: this.state.effectivenessRate,
            relevance: this.state.relevance,
            impactDescription: this.state.impactDescription,
            impactLevel: this.state.impactLevel,
            severityCategoryCode:this.state.severityCategoryCode,
            severityCategoryScore:this.state.severityCategoryScore,
            vulnerabilitySeverity:this.state.vulnerabilitySeverity,
            qualitativeVS:this.state.qualitativeVS,
            impactScore:this.state.impactScore,
            findingSystem: this.state.findingSystem,
            findingTask: this.state.findingTask,
            findingSubtask: this.state.findingSubtask,
            likelihood: this.state.likelihood,
            risk: this.state.risk

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
     // Derived values section start
    getCatScore = (val) =>{
        switch(val) {
            case "I":
                return 10;
            case "II":
                return 7;
            case "III":
                return 4;
            default:
                return 0;
        }
    }
    //a.k.a Severity Category Code
    changeCatScore = (e) => {
        let value  = e.target.value
        this.setState({
            severityCategoryCode: value,
            severityCategoryScore : this.getCatScore(value)
        })
    }
    //For countermeasure a.k.a effectivenessRate
    getNumberCounterMeasure = (val) => {
        let newVal = 0
        if(val !== " "){
            let arrVal = val.split('-')
            newVal = arrVal[1]
        }
        return newVal
    }
    //changes vs and qualitativevs
    changeVulnerabilitySeverity = () => {
        let countermeasure = this.getNumberCounterMeasure(this.state.effectivenessRate)
        let val = ((this.state.severityCategoryScore * countermeasure * this.state.impactScore)/10)
        this.setState({
            vulnerabilitySeverity : val
        })
    }
    getQualitativeVS = () => {
        let vs = parseInt(this.state.vulnerabilitySeverity,10)
        if(vs >= 95 && vs <= 100){
            return "VH"
        }
        else if(vs >= 80 && vs < 95){
            return "H"
        }
        else if(vs >= 20 && vs < 80){
            return "M"
        }
        else if(vs >= 5 && vs < 20){
            return "L"
        }
        else if(vs >= 0 && vs < 5){
            return "VL"
        }
        else{
            return "INFO"
        }
    }
    changeQualitativeVS = () => {
        this.setState({
            qualitativeVS : this.getQualitativeVS()
        })
    }
    changeLikeliHood = () =>{
        let vs = this.state.qualitativeVS
        let relevance = this.state.relevance
        console.log("CHECK LIKELIHOOD: " + relevance.concat(vs))
        this.setState({
            likelihood : this.state.likelihoodMap.get(relevance.concat(vs))
        })
    }
    changeRisk = () =>{
        let impact = this.state.impactLevel
        let lh = this.state.likelihood
        console.log("CHECK RISK: " + lh.concat(impact))
        this.setState({
            risk : this.state.riskMap.get(lh.concat(impact))
        })
    }
    
    //Derived values end
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
                                                systemValues={this.state.systemValues}
                                                taskValues={this.state.taskValues}
                                                subtaskValues={this.state.subtaskValues}
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
                            <ThreatRelevance values={this.props}
                                             relevanceValues={this.state.relevanceValues}
                                             handleOnChange={this.handleOnChange} />
                        </Col>
                        <Col md={6} sm={6} xs={12}>
                            <CounterMeasure values={this.props}
                                            counterMeasureValues={this.state.counterMeasureValues}
                                            handleOnChange={this.handleOnChange}  />
                        </Col>
                        <Col md={6} sm={6} xs={12}>
                            <Impact  impactLevelValues={this.state.impactLevelValues}
                                     impactDescription={this.props.impactDescription}
                                     handleOnChange={this.handleOnChange} />
                        </Col>
                        <Col md={6} sm={6} xs={12}>
                            <Severity   severityCategoryScore={this.state.severityCategoryScore}
                                        vulnerabilitySeverity={this.state.vulnerabilitySeverity}
                                        qualitativeVS={this.state.qualitativeVS}
                                        catValues={this.state.catValues}
                                        handleOnChange={this.handleOnChange}
                                        changeCatScore={this.changeCatScore}
                                        changeVulnerabilitySeverity={this.changeVulnerabilitySeverity}
                                        changeQualitativeVS={this.changeQualitativeVS}
                            />
                        </Col>
                        <Col md={6} sm={6} xs={12}>
                            <Risk 
                                risk={this.state.risk}
                                likelihood={this.state.likelihood}
                                changeRisk={this.changeRisk}
                                changeLikeliHood={this.changeLikeliHood}/>
                        </Col>
                        <Col md={6} sm={6} xs={12}>
                            <FindingSystemLevelImpact handleOnChange={this.handleOnChange} />
                        </Col>
                    </Row>
                    <Row md={6} sm={6} xs={12}>
                        <Mitigation values={this.props}
                                    handleOnChange={this.handleOnChange} />
                    </Row>
                    {/* Buttons */}
                    <br />
                    <div class="item form-group">
                        <button onClick={() => window.location.reload(false)} class="btn btn-primary" type="submit" value="Save Finding">
                            Save
                        </button>
                        <button onClick={() => window.location.reload(false)} class="btn btn-danger" type="button">
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}
export default DetailedView;