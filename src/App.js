import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { Components, View } from 'rally-sdk';
import Immutable from 'immutable';

const { DataTableWithToolbar } = Components;
const { Data: { withSchema, fromScope } } = Components;
const { FieldLabel, LoadingMask } = View;

import './App.scss';

class App extends Component {

  static propTypes = {
    context: ImmutablePropTypes.map.isRequired
  };

  state = {
    severity: Immutable.List(),
    columnNames: Immutable.List([
      'DragAndDropRank',
      'FormattedID',
      'Name',
      'Blocked',
      'PlanEstimate',
      'Owner',
    ]),
    selectedItems: Immutable.Map(),
    sortByColumnName: 'DragAndDropRank',
    sortDirection: 'ASC',
  }

  render() {
    return <div className="app">
      <LoadingMask />
    </div>;
  }

  onColumnChange = (columnNames) => {
    this.setState({ columnNames });
  };

  onSelectedItemsChanged = (selectedItems) => {
    this.setState({ selectedItems });
  }

  onReorderColumns = (columnNames) => {
    this.setState({ columnNames });
  };

  onSort = (sortByColumnName, sortDirection) => {
    this.setState({ sortByColumnName, sortDirection });
  };

  renderGrid() {
    const { schema, scope } = this.props;
    if (!schema) {
      return <LoadingMask />;
    }

    const { columnNames, selectedItems, sortByColumnName, sortDirection } = this.state;
    const dataTableProps = {
      canDragAndDrop: false,
      columnNames,
      onColumnChange: this.onColumnChange,
      onReorderColumns: this.onReorderColumns,
      onSelectedItemsChanged: this.onSelectedItemsChanged,
      onSort: this.onSort,
      componentScope: fromScope(scope),
      selectedItems,
      schema,
      sortByColumnName,
      sortDirection,
      typePaths: Immutable.List(['Defect'])
    };

    return <div className="grid">
      <DataTableWithToolbar { ...dataTableProps } />
    </div>;
  }
}

export default withSchema(App);