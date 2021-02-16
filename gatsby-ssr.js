/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

const React = require("react");
const { Provider } = require("react-redux");
const store = require("./src/redux/store");

// Wraps every page in a component
exports.wrapPageElement = ({ element }) => {
  return (
    <Provider store={store.default}>
      <div>
        {element}
      </div>
    </Provider>
  );
}
