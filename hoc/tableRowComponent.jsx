import React, { Component } from "react";

class TableRowComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <tr>
        {Object.keys(this.props.rec).map((k, i) => (
          <td key={k}>{this.props.rec[k]}</td>
        ))}
      </tr>
      //   <td>{this.props.rec.id}</td>
      //   <td>{this.props.rec.name}</td>
    );
  }
}

export default TableRowComponent;
