import Dates from "./dates";

const Helpers = {
  capitalise: (value) => value.charAt(0).toUpperCase() + value.slice(1),
  buildMatchShareContent: (match, intl, withIcons = false) => {
    const clubName = encodeURIComponent(match.clubName);
    // const clubUrl = "";//"https%3A%2F%2Fgoo.gl%2Fmaps%2FjCHX9hiu8FBHMAjH8";
    let matchDate = "";
    let fromTime = "";
    let toTime = "";
    const startMatchTime = Helpers.getStartMatchTime(match);
    const endMatchTime = Helpers.getEndMatchTime(match);
    if (startMatchTime) {
      matchDate = encodeURIComponent(Helpers.capitalise(Dates.format(startMatchTime, "EEEE dd/MM", intl.locale)));
      fromTime = encodeURIComponent(`${Dates.format(startMatchTime, "H:mm", intl.locale)}h`);
    }
    if (endMatchTime) {
      toTime = encodeURIComponent(`${Dates.format(endMatchTime, "H:mm", intl.locale)}h`);
    }
    const level = encodeURIComponent(match.level);
    const p1 = encodeURIComponent(match.players[0].name);
    const p2 = encodeURIComponent(match.players[1].name);
    const p3 = encodeURIComponent(match.players[2].name);
    const p4 = encodeURIComponent(match.players[3].name);

    let template;
    if (withIcons) {
      template = `${clubName}%0D%0A%0D%0A%F0%9F%93%85+${matchDate}%0D%0A%F0%9F%95%92+${fromTime}+-+${toTime}%0D%0A%F0%9F%8F%86+${level}`;
      template += `%0D%0A%0D%0A%F0%9F%8E%BE+${p1}%0D%0A%F0%9F%8E%BE+${p2}%0D%0A%F0%9F%8E%BE+${p3}+%0D%0A%F0%9F%8E%BE+${p4}`;
    } else {
      template = `%2A${clubName}%2A%0D%0A%0D%0A%2A${intl.formatMessage({id: "date" })}%3A`;
      template += `%2A+${matchDate}%0D%0A%2A${intl.formatMessage({id: "time" })}%3A%2A+${fromTime}+-+${toTime}%0D%0A%2A`;
      template += `${intl.formatMessage({id: "level" })}%3A%2A+${level}%0D%0A`;
      template += `%0D%0A%2A${intl.formatMessage({id: "playerAbr"}, {num: 1})}%3A%2A+${p1}`;
      template += `%0D%0A%2A${intl.formatMessage({id: "playerAbr"}, {num: 2})}%3A%2A+${p2}`;
      template += `%0D%0A%2A${intl.formatMessage({id: "playerAbr"}, {num: 3})}%3A%2A+${p3}`;
      template += `%0D%0A%2A${intl.formatMessage({id: "playerAbr"}, {num: 4})}%3A%2A+${p4}`;
    }

    return template;
  },
  buildMatchDetailsForCalendar: (match, intl) => {
    const p1 = match.players[0].name;
    const p2 = match.players[1].name;
    const p3 = match.players[2].name;
    const p4 = match.players[3].name;

    let template = `${intl.formatMessage({id: "level" })}: ${match.level}`;
    template += `\n\r${intl.formatMessage({id: "playerAbr"}, {num: 1})}: ${p1}`;
    template += `\n\r${intl.formatMessage({id: "playerAbr"}, {num: 2})}: ${p2}`;
    template += `\n\r${intl.formatMessage({id: "playerAbr"}, {num: 3})}: ${p3}`;
    template += `\n\r${intl.formatMessage({id: "playerAbr"}, {num: 4})}: ${p4}`;
    return template;
  },
  buildLink: (link, language) => {
    if (!link.match(new RegExp(`^/${language}/`, 'gmi'))) {
      return `/${language}/${link}`;
    }
    return link;
  },
  getStartMatchTime: (match) => {
    // We have new matches state data version
    if (typeof match.dateAndTime === 'object') {
      return match.dateAndTime.start ? new Date(match.dateAndTime.start) : "";
    } else {
      return match.dateAndTime ? new Date(match.dateAndTime) : "";
    }
  },
  getEndMatchTime: (match) => {
    // We have new matches state data version
    if (typeof match.dateAndTime === 'object') {
      if (match.dateAndTime.end) {
        return new Date(match.dateAndTime.end);
      } else {
        return match.dateAndTime.start ? Dates.addMinutes(new Date(match.dateAndTime.start), 90) : "";
      }
    } else {
      return match.dateAndTime ? Dates.addMinutes(new Date(match.dateAndTime), 90) : "";
    }
  }
};

export default Helpers;