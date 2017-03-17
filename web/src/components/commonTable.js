import React, { Component } from 'react';
import { connect } from "react-redux"
import  { Link } from "react-router";
import { FormattedMessage } from 'react-intl';

class CommonTable extends Component {

    render() {
        let keys = this.props.items.length > 0 ? Object.keys(this.props.items[0]).map((item, index) =>
            <th key={index}>{item}</th>
        ) : null;
        let rows = this.props.items.length > 0 ? this.props.items.map((item, index) =>

              <tr key={index}>
                {
                  Object.values(item).map((item, index) =>
                    <td>
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

export default CommonTable;
