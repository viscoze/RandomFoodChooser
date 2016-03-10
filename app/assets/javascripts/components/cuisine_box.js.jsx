var ChosenCuisineBox = React.createClass({
  render: function() {
    if (this.props.name === undefined) {
      return (<div className="cuisine-box empty-box">Choose Something</div>)
    }
    var image = "cuisine/" + this.props.name + ".jpg"

    return (
        <div className="cuisine-box">
          <div className="row">
            <div className="col-sm-2">
              <img src={image} />
            </div>
            <div className="col-sm-9">
              <span className="name">{this.props.name}</span><br />
            </div>
          </div>
        </div>
      );
  }
});

var Cuisine = React.createClass({

  clickOnCuisine(event) {
    ReactDOM.render(<ChosenCuisineBox name={this.props.name}/>,
                    document.getElementById('chosen'));
  },

  render(){
    var image = "app/assets/images/cuisine/" + this.props.name + ".jpg"

    return (
    <div className="cuisine-box" onClick={this.clickOnCuisine}>
      <div className="row">
        <div className="col-sm-2">
          <img src={image} />
        </div>
        <div className="col-sm-9">
          <span className="name">{this.props.name}</span><br />
          <span className="description">{this.props.description}</span>
        </div>
      </div>
    </div>
    )
  }

})
