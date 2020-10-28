import React, { Component } from "react";
import { Row, Col } from 'react-bootstrap'
import axios from "axios";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

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

const FindingInformation = () => (
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
                <input type="text" class="form-control" />
            </div>
        </div>
        {/*  Host Name */}
        <div class="form-group row">
            <label class="control-label  col-sm-2 ">Host Name</label>
            <div class=" col-sm-10 ">
                <input type="text" class="form-control" />
            </div>
        </div>
        {/* IP port */}
        <div class="form-group row">
            <label class="control-label  col-sm-2 ">IP Port</label>
            <div class=" col-sm-10 ">
                <input type="text" class="form-control" />
            </div>
        </div>
        {/* Description */}
        <div class="form-group row">
            <label class="control-label  col-sm-2 ">Description</label>
            <div class=" col-sm-10 ">
                <textarea
                    rows="2" type="text" class="form-control" ></textarea>
            </div>
        </div>
        {/* Long description */}
        <div class="form-group row">
            <label class="control-label  col-sm-2 ">Long description</label>
            <div class=" col-sm-10 ">
                <textarea
                    rows="4" type="text" class="form-control" ></textarea>
            </div>
        </div>
        {/* Status */}
        <div class="form-group row">
            <label class="control-label col-md-2 col-sm-2 ">Status</label>
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
        {/* Type */}
        <div class="form-group row">
            <label class="control-label col-md-2 col-sm-2 ">Type</label>
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
        {/* Classification */}
        <div class="form-group row">
            <label class="control-label col-md-2 col-sm-2 ">Classification</label>
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
        {/* Related findings */}
        <div class="form-group row">
            <label class="control-label col-sm-2 ">Related Finding(s)</label>
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
)

const FindingImpact = () => (

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
                <label class="control-label col-md-3 col-sm-3 ">Integrity</label>
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
                <label class="control-label col-md-3 col-sm-3 ">Availability</label>
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
        </Row> 
     </div>
)

const AnalystInformation = () => (
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
        </Row> 
     </div>

)

const Mitigation = () => (
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

)

const Threat = () => (
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
const Impact = () => (
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
            <label class="control-label  col-sm-3 ">Impact description</label>
            <div class=" col-sm-10 ">
                <textarea
                    rows="3" type="text" class="form-control" ></textarea>
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
    }

    // what you see
    render() {
        return (
            // x_panel is container
            <div class="x_panel" >
                <Tooltip />
                <form>
                    <Row>
                        <Col md={6} sm={6} xs={12}>
                            <FindingInformation />
                        </Col>
                        <Col md={6} sm={6} xs={12}>
                            <AnalystInformation />
                        </Col>
                        <Col md={6} sm={6} xs={12}>
                            <FindingImpact />
                        </Col>
                        <Col md={6} sm={6} xs={12}>
                            <Threat />
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
                        <Mitigation />
                    </Row>
                    
                    {/* Buttons */}
                    <br />
                    <div class="item form-group">
                        <button class="btn btn-primary" type="submit" value="Save Task">
                            Save
                        </button>
                        <button class="btn btn-danger" type="cancel">
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}
export default DetailedView;