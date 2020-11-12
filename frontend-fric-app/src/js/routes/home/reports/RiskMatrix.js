import React, { Component } from "react";
import Link from "react-router-dom/Link";
import { Button } from "react-bootstrap";

class LoginView extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <html>
        <head>
          <title>SpreadJS ExcelIO</title>
          <script
            src="./node_modules/jquery/dist/jquery.min.js"
            type="text/javascript"
          ></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/FileSaver.js/2014-11-29/FileSaver.min.js"></script>

          <link
            href="./node_modules/@grapecity/spread-sheets/styles/gc.spread.sheets.excel2013white.css"
            rel="stylesheet"
            type="text/css"
          />
          <script
            type="text/javascript"
            src="./node_modules/@grapecity/spread-sheets/dist/gc.spread.sheets.all.min.js"
          ></script>
          <script
            type="text/javascript"
            src="./node_modules/@grapecity/spread-excelio/dist/gc.spread.excelio.min.js"
          ></script>
        </head>
        <body>
          <div id="ss" style="height:600px; width :100%; "></div>
        </body>
      </html>
    );
  }
}
export default LoginView;
