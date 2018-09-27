import React from "react";

class PanelHeader extends React.Component {
  render() {
    return (
      <div
        className={
          " " +
          (this.props.size !== undefined
            ? "" + this.props.size
            : "")
        }
      >
        {this.props.content}
      </div>
    );
  }
}

export default PanelHeader;
