var ChosenCuisineBox = React.createClass({
  render: function() {
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

var X = React.createClddass({
  render: () => {
    return (<span className="glyphicon glyphicon-grain"></span>);
  }
})
