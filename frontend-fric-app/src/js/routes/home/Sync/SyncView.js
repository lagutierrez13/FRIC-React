import React, { Component, useEffect, useState} from "react";
import { Row, Col, Clearfix } from "react-bootstrap";
import openSocket from 'socket.io-client';
import axios from "axios";

class SyncView extends Component {

    constructor(props){
        super(props);
        this.sendSocket = this.sendSocket.bind(this);
        this.connectSocket = this.connectSocket.bind(this);
        this.handleOnChange = this.handleOnChange.bind(this);
        this.setMultiValuesFromDatabase = this.setMultiValuesFromDatabase.bind(this);
        this.state = {
            senderInitial: "",
            senderIP: "",
            recieverInitial: "",
            recieverIP: "",
            analystInitials: []
        }
    }
    setMultiValuesFromDatabase(request,tempList,valueToGet,setName,valueArray){
        axios
            .get(request)
            .then((response) => {
                for (var i = 0; i < response.data.length; i++) {
                    tempList.push(
                        response.data[i][valueToGet]
                    );
                }
                this.setState({
                    [valueArray]: tempList
                })
            })
    }

    componentDidMount() {
        let analystList = []
        this.setMultiValuesFromDatabase("http://localhost:4000/analyst/get",analystList,"initials","analystInitials","analystInitials")
    }
    handleOnChange = (e) => {
        const { value, name } = e.target
        this.setState({ [name] : value }) 
    }
    connectSocket(){
        console.log("Sync Activated")
        var socket = openSocket("http://172.19.224.59:4000", {
            withCredentials: true,
          
        });
    }
    sendSocket(){
       // socket.emit('chat message', 'demo')
    }
    render(){
        return (
            <div class="x_panel">
                <div class="x_title">
                    <h2>Sync </h2> 
                    <div class="clearfix"></div>
                </div>
                <Col md={6} sm={6} xs={12}>
                    <Row>
                        <div class="form-group row">
                            <label class="control-label col-md-3 col-sm-3 ">From </label>
                            <div class="col-md-6 col-sm-10 ">
                                {
                                    <select
                                        class="form-control"
                                        name="senderInitial"
                                        onChange={this.handleOnChange}
                                    >
                                    {this.state.analystInitials.map((value) => (
                                        <option>{value}</option>
                                    ))}
                                    </select>
                                }
                            </div>
                        </div>
                    </Row>
                </Col>
                <Col md={6} sm={6} xs={3}>
                    <Row>
                        <div class="form-group row">
                            <label class="control-label col-md-3 col-sm-3 ">IP Address</label>
                            <div class="col-md-6 col-sm-6 ">
                                <input id="senderIP" name="senderIP" class="form-control" onChange={this.handleOnChange} type="text" placeholder="Sender IP" />
                            </div>
                        </div>
                    </Row>
                </Col>
                <Col md={6} sm={6} xs={12}>
                    <Row>
                        <div class="form-group row">
                            <label class="control-label col-md-3 col-sm-3 ">To </label>
                            <div class="col-md-6 col-sm-10 ">
                                {
                                    <select
                                        class="form-control"
                                        name="recieverInitial"
                                        onChange={this.handleOnChange}
                                    >
                                    {this.state.analystInitials.map((value) => (
                                        <option>{value}</option>
                                    ))}
                                    </select>
                                }
                            </div>
                        </div>
                    </Row>
                </Col>
                <Col md={6} sm={6} xs={3}>
                    <Row>
                        <div class="form-group row">
                            <label class="control-label col-md-3 col-sm-3 ">IP Address</label>
                            <div class="col-md-6 col-sm-6 ">
                                <input id="recieverIP" name="recieverIp" class="form-control" type="text" onChange={this.handleOnChange} placeholder="Reciever IP" />
                            </div>
                        </div>
                    </Row>
                </Col>
                
                <div class="form-group row">
                    
                    <div class="col-md-2 col-sm-5">
                        <button id="connect" class="btn btn-primary" onClick={this.connectSocket}>Sync</button>
                    </div>
                </div>
            </div>
        )
    }
}
export default SyncView; 