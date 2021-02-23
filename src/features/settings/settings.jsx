import * as React from "react";
import styled from "styled-components";
import { toggleEmojis } from "./settingsSlice";
import { useIntl } from "gatsby-plugin-intl";
import { connect } from "react-redux";
import Switch from "../../modules/common/components/Switch";

const mapDispatchToProps = { toggleEmojis };
const mapStateToProps = ({ settings }) => {
  return {
    settings
  }
}

const SettingsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  .create-match {
    align-self: center;
  }
  .settings-item {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    .settings-item-name {
      font-weight: bold;
      display: flex;
      flex-direction: column;
      .settings-item-desc {
        font-size: 14px;
        font-weight: normal;
      }
    }
    .settings-item-value {
      margin-left: auto;
    }
  }
`;

const Settings = ({ settings, toggleEmojis }) => {
  const intl = useIntl();

  return (
    <SettingsWrapper>
      <div className="settings-item">
        <p className="settings-item-name">
          <span>Emojis</span>
          <span className="settings-item-desc">
            Usar iconos al compartir partido por Whatsapp
          </span>
        </p>
        <span className="settings-item-value">
          <Switch
            name="emojis"
            label="Enable emojis"
            checked={settings.emojis}
            handleChange={() => toggleEmojis()} />
        </span>
      </div>
    </SettingsWrapper>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);

