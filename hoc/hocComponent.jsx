import React, { Component } from "react";

export default function Hoc(ReportComponent, data) {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        data: data
      };
    }
    render() {
      return <ReportComponent data={this.state.data} />;
    }
  };
}
