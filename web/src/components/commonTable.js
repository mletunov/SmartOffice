import React, { Component } from 'react';
import { connect } from "react-redux"
import  { Link } from "react-router";
import { FormattedMessage } from 'react-intl';
import cellActions from "../actionCreators/selectedCell"

class CommonTable extends Component {

    render() {
        let keys = this.props.items.length > 0 ? Object.keys(this.props.items[0]).map((item, index) =>
            <th key={index}>{item}</th>
        ) : null;
        let rows = this.props.items.length > 0 ? this.props.items.map((item, firstIndex) =>

              <tr key={firstIndex}>
                {
                  Object.values(item).map((item, secondIndex) =>
                    <td className={(this.props.selectedCell && this.props.selectedCell.firstKey == firstIndex && this.props.selectedCell.secondKey == secondIndex) ? "selected-cell" : null} onClick={() => {this.props.selectCell(firstIndex, secondIndex, item)}} key={secondIndex}>
                      {item}
                    </td>
                  )
                }
              </tr>

        ) : null;

        return (
              <table className="table table-bordered cmn-tbl">
                <thead>
                  <tr>
                    {keys}
                  </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
              </table>
        );
    }
}

CommonTable.propTypes = {
  items: React.PropTypes.array
};

function mapStateToProps(store) {
  return {
    selectedCell: store.selectedCell
  };
}

function mapDispatchToProps(dispatch) {
  return {
      selectCell: (firstKey, secondKey, value) => dispatch(cellActions.cellSelected(firstKey, secondKey, value))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps)
(CommonTable)
