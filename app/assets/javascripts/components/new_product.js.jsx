var NewProduct = React.createClass({
  propTypes: {
    name: React.PropTypes.string,
    company: React.PropTypes.string,
    category: React.PropTypes.string,
    amount: React.PropTypes.number,
    cardinality: React.PropTypes.number,
    unit: React.PropTypes.string,
    dueDate: React.PropTypes.string
  },

  _addProduct: function(e) {

  },

  render: function() {
    return (
      <div>
        <div>Name: {this.props.name}</div>
        <div>Company: {this.props.company}</div>
        <div>Category: {this.props.category}</div>
        <div>Amount: {this.props.amount}</div>
        <div>Cardinality: {this.props.cardinality}</div>
        <div>Unit: {this.props.unit}</div>
        <div>Due Date: {this.props.dueDate}</div>
        <button onClick=#{}}>Send</button>
      </div>
    );
  }
});
