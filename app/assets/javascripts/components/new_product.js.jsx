var NewProduct = React.createClass({
  getInitialState: function(){
    return {  isClosed: true,
              name: '',
              company: '',
              category: '',
              amount: '',
              cardinality: '',
              unit: '',
              dueDate: ''};
  },

  _changeClosingState: function(e) {
    const _isClosed = !this.state.isClosed;
    this.setState({isClosed: _isClosed});
  },

  _onFieldChange: function(e) {
    var input_name = e.target.name;
    var value = e.target.value;
    this.setState({ [input_name] : value });
  },

  _addProduct: function(e) {
    e.preventDefault();
    if(this._checkFields())
    {
      const data = {
        name: this.state.name,
        company: this.state.company,
        category: this.state.category,
        amount: this.state.amount,
        cardinality: this.state.cardinality,
        unit: this.state.unit,
        due_date: this.state.dueDate
      }

      this._handleProductAdd(data);
    } else
    {
      console.log("Odpowiednieola nie są wypełnione");
    }
  },

  _checkFields: function() {
    /*Tu bedzie sprawdzenie, czy odpowiednie pola sa wypelnione*/
    return true;
  },

  _handleProductAdd: function(data) {
    self = this;
    $.ajax({
      url: '/items',
      method: 'POST',
      data: {item: data},
      success: function(data) {
        //self._updateAccomodations(data);
        console.log("Udało się dodać nowy produkt!");
      },
      error: function(xhr, status, error) {
        alert('Create not successful! ', error);
      }
    });
  },

  render: function() {
    const isClosed = this.state.isClosed;
    return (
      <div className="row">
      {isClosed ? (
        <div className="col-md-6 col-md-offset-3 text-center">
          <button className="btn btn-circle btn-xl" onClick={this._changeClosingState}><i className="glyphicon glyphicon-plus" /> </button>
        </div>
      ) : (
          <div className="col-md-6 col-md-offset-3 main-color-border text-center">
          <form onSubmit={this._addProduct}>
            <div className="form-group">
              <input  type="text"
                      class="form-control"
                      id="nameInput"
                      value={this.props.name}
                      onChange={this._onFieldChange}
                      className="main-color-border bottom-border black-color font-bold h1-font-size expanded"
                      placeholder="nazwa produktu"/>
            </div>
            <div className="row">
              <div className="col-md-6">
                <input  type="text"
                        class="form-control"
                        id="categoryInput"
                        value={this.props.category}
                        onChange={this._onFieldChange}
                        className="main-color-border bottom-border black-color font-normal paragraph-font-size"
                        placeholder="kategoria"/>
              </div>
              <div className="col-md-6">
                <input  type="text"
                        class="form-control"
                        id="companyInput"
                        value={this.props.company}
                        onChange={this._onFieldChange}
                        className="main-color-border bottom-border black-color font-normal paragraph-font-size"
                        placeholder="firma"/>
              </div>
            </div>

            <div className="form-group">
              <label for="amountInput">Amount</label>
              <input type="number" class="form-control" id="amountInput" value={this.props.amount} onChange={this._onFieldChange} placeholder="Amount"/>
            </div>
            <div className="form-group">
              <label for="cardinalityInput">Cardinality</label>
              <input type="number" class="form-control" id="cardinalityInput" value={this.props.cardinality} onChange={this._onFieldChange} placeholder="Cardinality"/>
            </div>
            <div className="form-group">
              <label for="unitInput">Unit</label>
              <input type="text" class="form-control" id="unitInput" value={this.props.unit} onChange={this._onFieldChange} placeholder="Unit"/>
            </div>
            <div className="form-group">
              <label for="dueDateInput">Due Date</label>
              <input type="text" class="form-control" id="dueDateInput" value={this.props.dueDate} onChange={this._onFieldChange} placeholder="Due Date"/>
            </div>
            <button type="submit" className="btn btn-success">Send</button>
            <button type="button" className="btn btn-default" onClick={this._changeClosingState}>Close</button>
          </form>
          </div>
        )}
      </div>
    );
  }
});
