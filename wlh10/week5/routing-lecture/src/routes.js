export default (
  <Switch>
    <Route
      exact
      path="/"
      component={() => (
        <Home
          updateHouseInfo={this.updateHouseInfo}
          sorted={this.state.house}
        />
      )}
    />
    <Route
      path="/about"
      component={() => <About sorted={this.state.house} />}
    />
    <Route
      path="/house/:name"
      component={() => (
        <CommonRoom
          mainColor={this.state.mainColor}
          secondaryColor={this.state.secondaryColor}
        />
      )}
    />
    <Route component={MissingPage} />
  </Switch>
)
