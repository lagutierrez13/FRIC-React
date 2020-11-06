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

const CounterMeasure = () => (
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
)
const Severity = () => (
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
)

const Risk = () => (
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
)
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


const FindingSystemLevelImpact = () => (
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
)

class DetailedView extends Component {
    constructor(props) {
        super(props);

        this.onChangeFindingID = this.onChangeFindingID.bind(this);
        this.onChangeHostname = this.onChangeHostname.bind(this);
        this.onChangeIP = this.onChangeIP.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeLongDescription = this.onChangeLongDescription.bind(this); //assessment date
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeSystem = this.onChangeSystem.bind(this); //security classification title guide
        this.onChangeTask = this.onChangeTask.bind(this);
        this.onChangeSubtask = this.onChangeTask.bind(this);
        this.onChangeAnalyst = this.onChangeAnalyst.bind(this); // declassification date
        this.onChangeCollaborator = this.onChangeCollaborator.bind(this);
        this.onChangePosture = this.onChangePosture.bind(this);
        this.onChangeStatus = this.onChangeStatus.bind(this);
        this.onChangeClassification = this.onChangeClassification.bind(this);
        this.onChangeRelated = this.onChangeRelated.bind(this);
        this.onChangeType = this.onChangeType.bind(this);
        this.onChangeProgress = this.onChangeProgress.bind(this);
        this.onChangeConfidentiality = this.onChangeConfidentiality.bind(this);
        this.onChangeIntegrity = this.onChangeIntegrity.bind(this);
        this.onChangeAvailability = this.onChangeAvailability.bind(this);
        this.onChangeMitigationBrief = this.onChangeMitigationBrief.bind(this);
        this.onChangeMitigationLong = this.onChangeMitigationLong.bind(this);
        this.onChangeRelevance = this.onChangeRelevance.bind(this);
        this.onChangeEffectiveness = this.onChangeEffectiveness.bind(this);
        this.onChangeImpactLevel = this.onChangeImpactLevel.bind(this);
        this.onChangeImpactDescription = this.onChangeImpactDescription.bind(this);
        this.onChangeSeverityCategoryCode = this.onChangeSeverityCategoryCode.bind(this);
        this.onChangeSeverityCategoryScore = this.onChangeSeverityCategoryScore.bind(this);
        this.onChangeVulnerabilitySeverity = this.onChangeVulnerabilitySeverity.bind(this);
        this.onChangeRisk = this.onChangeRisk.bind(this);
        this.onChangeLikelihood = this.onChangeLikelihood.bind(this);
        this.onChangeConfImpactSystem = this.onChangeConfImpactSystem.bind(this);
        this.onChangeIntegImpactSystem = this.onChangeIntegImpactSystem.bind(this);
        this.onChangeAvailImpactSystem = this.onChangeAvailImpactSystem.bind(this);
        this.onChangeImpactScore = this.onChangeImpactScore.bind(this);

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

    onChangeFindingID(e) {
        this.setState({
            findingID: e.target.value,
        });
    }
    onChangeHostname(e) {
        this.setState({
            hostname: e.target.value,
        });

    }
    onChangeIP(e) {
        this.setState({
            ipPort: e.target.value,
        });
    }
    onChangeDescription(e) {
        this.setState({
            description: e.target.value,
        });
    }

    onChangeLongDescription(e) {
        this.setState({
            longDescription: e.target.value,
        });
    }
    onChangeTitle(e) {
        this.setState({
            title: e.target.value,
        });
    }
    onChangeSystem(e) {
        this.setState({
            findingSystem: e.target.value,
        });
    }
    onChangeTask(e) {
        this.setState({
            findingTask: e.target.value,
        });
    }
    onChangeSubtask(e) {
        this.setState({
            findingTask: e.target.value,
        });
    }
    onChangeAnalyst(e) {
        this.setState({
            findingAnalyst: e.target.value,
        });
    }
    onChangeCollaborator(e) {
        this.setState({
            collaborator: e.target.value,
        });
    }
    onChangePosture(e) {
        this.setState({
            posture: e.target.value,
        });
    }
    onChangeStatus(e) {
        this.setState({
            status: e.target.value,
        });
    }
    onChangeClassification(e) {
        this.setState({
            classification: e.target.value
        })
    }
    onChangeRelated(e) {
        this.setState({
            related: e.target.value
        })
    }
    onChangeType(e) {
        this.setState({
            type: e.target.value
        })
    }
    onChangeProgress(e) {
        this.setState({
            progress: e.target.value
        })
    }
    onChangeConfidentiality(e) {
        this.setState({
            confidentiality: e.target.value
        })
    }
    onChangeIntegrity(e) {
        this.setState({
            integrity: e.target.value
        })
    }
    onChangeAvailability(e) {
        this.setState({
            availability: e.target.value
        })
    }
    onChangeMitigationBrief(e) {
        this.setState({
            mitigationBrief: e.target.value
        })
    }
    onChangeMitigationLong(e) {
        this.setState({
            mitigationLong: e.target.value
        })
    }
    onChangeRelevance(e) {
        this.setState({
            relevance: e.target.value
        })
    }
    onChangeEffectiveness(e) {
        this.setState({
            effectivenessRate: e.target.value
        })
    }
    onChangeImpactLevel(e) {
        this.setState({
            impactLevel: e.target.value
        })
    }
    onChangeImpactDescription(e) {
        this.setState({
            impactDescription: e.target.value
        })
    }
    onChangeSeverityCategoryCode(e) {
        this.setState({
            severityCategoryCode: e.target.value
        })
    }
    onChangeSeverityCategoryScore(e) {
        this.setState({
            severityCategoryScore: e.target.value
        })
    }
    onChangeVulnerabilitySeverity(e) {
        this.setState({
            vulnerabilitySeverity: e.target.value
        })
    }
    onChangeRisk(e) {
        this.setState({
            risk: e.target.value
        })
    }
    onChangeLikelihood(e) {
        this.setState({
            likelihood: e.target.value
        })
    }
    onChangeConfImpactSystem(e) {
        this.setState({
            confImpactSystem: e.target.value
        })
    }
    onChangeIntegImpactSystem(e) {
        this.setState({
            integImpactSystem: e.target.value
        })
    }
    onChangeAvailImpactSystem(e) {
        this.setState({
            availImpactSystem: e.target.value
        })
    }
    onChangeImpactScore(e) {
        this.setState({
            impactScore: e.target.value
        })
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
                                            value={this.findingID}
                                            onChange={this.onChangeFindingID}
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
                                            value={this.hostname}
                                            onChange={this.onChangeHostname}
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
                                            value={this.ipPort}
                                            onChange={this.onChangeIP}
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
                                            value={this.description}
                                            onChange={this.onChangeDescription}
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
                                            value={this.longDescription}
                                            onChange={this.onChangeLongDescription}
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
                                                value={this.state.status}
                                                onChange={this.onChangeStatus}
                                            >
                                                {this.state.statusValues.map((value) => (
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
                                                value={this.state.type}
                                                onChange={this.onChangeType}
                                            >
                                                {this.state.typeValues.map((value) => (
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
                                                value={this.state.type}
                                                onChange={this.onChangeType}
                                            >
                                                {this.state.classificationValues.map((value) => (
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
                                            <select
                                                class="form-control"
                                                value={this.state.related}
                                                onChange={this.onChangeRelated}
                                            >
                                                {/* {this.state.valuesType.map((value) => (
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

                                    </Col>
                                    <Col md={4} sm={2} xs={12}>
                                        {/* Task */}
                                        <div class="form-group row">
                                            <label class="control-label col-md-4 col-sm-2 ">Task</label>
                                            <div class="col-md-10 col-sm-10 ">
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
                                    </Col>
                                    <Col md={4} sm={2} xs={12}>
                                        {/* Subtask */}
                                        <div class="form-group row">
                                            <label class="control-label col-md-4 col-sm-2 ">Subtask</label>
                                            <div class="col-md-10 col-sm-10 ">
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
                                    </Col>
                                </Row>
                            </div>
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
                        <this.Mitigation/>
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