import * as React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { toggleEmojis } from "./settingsSlice";
import { useIntl } from "gatsby-plugin-intl";
import Menu from "../../modules/common/components/Menu";
import Switch from "../../modules/common/components/Switch";
import { Link } from "gatsby";

const mapDispatchToProps = { toggleEmojis };
const mapStateToProps = ({ settings }) => {
  return {
    settings
  }
}

const StyledLink = styled(Link)`
  text-decoration: none;
  text-transform: uppercase;
  color: ${props => props.theme.palette.secondary.main};
  font-size: 14px;
  &.selected {
    font-weight: bold;
  }
`;

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
      .current-language {
        font-size: 14px;
        color: ${props => props.theme.palette.secondary.main};
      }
    }
  }
`;

const idioms = [
  {
    key: "en",
    value: "English"
  },
  {
    key: "es",
    value: "Castellano"
  },
  {
    key: "ca",
    value: "Català"
  }
];

const getIdiomLabel = (locale, idioms) => {
  return idioms.find(idiom => idiom.key === locale);
}

const Settings = ({ settings, toggleEmojis }) => {
  const intl = useIntl();

  return (
    <SettingsWrapper>
      <div className="settings-item">
        <p className="settings-item-name">
          <span>Emojis</span>
          <span className="settings-item-desc">
            {intl.formatMessage({ id: "emojisDesc" })}
          </span>
        </p>
        <span className="settings-item-value">
          <Switch
            name="emojis"
            label={intl.formatMessage({ id: "emojisLabel" })}
            checked={settings.emojis}
            handleChange={() => toggleEmojis()} />
        </span>
      </div>
      <div className="settings-item">
        <p className="settings-item-name">
          <span>{intl.formatMessage({ id: "idiom" })}</span>
        </p>
        <span className="settings-item-value">
          <Menu Icon={() => <span className="current-language">{getIdiomLabel(intl.locale, idioms).value.toUpperCase()}</span>}
            options={idioms.map(idiom => ({
              key: idiom.key,
              value: <StyledLink
                className={idiom.key === intl.locale ? "selected" : ""}
                to={`/${idiom.key}/settings`}
              >
                {idiom.value}
              </StyledLink>
            }))}
          />
        </span>
      </div>
      <div className="settings-item">
        <p className="settings-item-name">
          <span>{intl.formatMessage({ id: "reports" })}</span>
        </p>
        <span className="settings-item-value">
          <Link to={`/${intl.locale}/reports`}>{intl.formatMessage({ id: "view" })}</Link>
        </span>
      </div>
    </SettingsWrapper>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);

