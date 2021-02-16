/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

const React = require("react");
const { Provider } = require("react-redux");
const { PersistGate } = require("redux-persist/integration/react");
const store = require("./src/redux/store");

require("./src/styles/global.css");

// Wraps every page in a component
exports.wrapPageElement = ({ element }) => {
  return (
    <Provider store={store.default}>
      <PersistGate loading={null} persistor={store.persistor}>
        {element}
      </PersistGate>
    </Provider>
  );
}
