var RandomButton = React.createClass({
  clickOnRandom(event) {
    var result = getOption(chosenCuisines);
    console.log(result);
    ReactDOM.render(<ShowResultOfRandom result={result} />,
                    document.getElementById("show-result"));
  },

  render() {
    return (
      <a className="btn btn-warning btn-lg"
         id="lets-start-button"
         onClick={this.clickOnRandom}>
        Let's random it!
      </a>
    )
  }
})

var ShowResultOfRandom = React.createClass({
  render() {
    return (<div id="show-result">{this.props.result}</div>);
  }
})
