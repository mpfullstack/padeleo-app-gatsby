import * as React from "react";
import PropTypes from "prop-types";
import MuiTabs from "@material-ui/core/Tabs";
import MuiTab from "@material-ui/core/Tab";

const Tabs = ({ options = [], selected, handleTabChange }) => {
  const [value, setValue] = React.useState(selected);

  const handleChange = (e, newValue) => {
    setValue(newValue);
    if (typeof handleTabChange === 'function') {
      handleTabChange(newValue);
    }
  };

  const renderTabs = () => {
    return options.map(option => {
      return (
        <MuiTab key={option.key} label={option.label} value={option.key} />
      );
    });
  }

  return (
    <MuiTabs
      value={value}
      onChange={handleChange}
      indicatorColor="secondary"
      textColor="secondary"
      centered
    >
      {renderTabs()}
    </MuiTabs>
  );
}

Tabs.propTypes = {
  options: PropTypes.array.isRequired,
  selected: PropTypes.string,
  onChangeTab: PropTypes.func
};

export default Tabs;