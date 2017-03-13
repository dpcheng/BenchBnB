import React from 'react';

class BenchIndex extends React.Component {
  constructor(props) {
    super(props);
    this.renderBenches = this.renderBenches.bind(this);
  }

  componentDidMount() {
    this.props.fetchBenches();
  }

  renderBenches() {
    const benches = this.props.benches;
    let result = [];
    for (let key in this.props.benches) {
      let bench = this.props.benches[key];
      result.push(<li key={bench.id}>{bench.description} at {bench.lat}, {bench.lng}</li>);
    }
    return result;
  }

  render () {
    return (
      <ul>
        {this.renderBenches()}
      </ul>
    );
  }
}

export default BenchIndex;
