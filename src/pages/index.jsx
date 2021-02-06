import * as React from "react";
import { Provider } from "react-redux";
import IndexLayout from "../layouts";
import store from "../redux/store";
import CreateMatchPage from "../features/matches/createMatchPage";

const IndexPage = () => {
  return (
    <Provider store={store}>
      <IndexLayout>
        <CreateMatchPage />
      </IndexLayout>
    </Provider>
  );
};

export default IndexPage;
