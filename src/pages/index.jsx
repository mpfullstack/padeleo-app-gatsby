import * as React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import IndexLayout from "../layouts";
import store, { persistor } from "../redux/store";
import CreateMatchPage from "../features/matches/createMatchPage";

const IndexPage = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <IndexLayout>
          <CreateMatchPage />
        </IndexLayout>
      </PersistGate>
    </Provider>
  );
};

export default IndexPage;
