import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import renderer from "react-test-renderer";


test('but there is a "stop" in Christoph', () => {
  expect("Christoph").toMatch(/stop/);
});
it("renders without crashing", () => {
  // const div = document.createElement('div');
  // ReactDOM.render(<App />, div);
  // ReactDOM.unmountComponentAtNode(div);
  const component = renderer.create(<App />);
  let tree = component.toJSON;
  expect(tree).toMatchSnapshot();
  tree = component.toJSON;
  expect(tree).toMatchSnapshot();
});
