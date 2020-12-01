import React, { Component, useEffect, useState } from "react";
import openSocket from 'socket.io-client';
//const socket = openSocket('http://172.19.224.195:4000/');
// const socket = openSocket("http://172.19.224.195:4000", {
//   withCredentials: true,

// });

class SyncView extends Component {

    constructor(props){
        super(props);
        this.sendSocket = this.sendSocket.bind(this);
        this.connectSocket = this.connectSocket.bind(this);
    }
    connectSocket(){
        console.log("Button pressed");
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
                </div>
                <div class="form-group row">
                    <label class="control-label col-md-3 col-sm-3 ">Sync</label>
                    <div class="col-md-2 col-sm-5">
                        <input id="senderIP" class="form-control" type="text" placeholder="Sender IP" />
                        <input id="recieverIP" class="form-control" type="text" placeholder="Reciever IP" />
                        <button id="connect" class="btn btn-primary" onClick={this.connectSocket}>Connect</button>
                    </div>
                </div>
            </div>
        )
    }
}
export default SyncView; 