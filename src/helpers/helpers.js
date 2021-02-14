import Dates from "./dates";

const Helpers = {
  capitalise: (value) => value.charAt(0).toUpperCase() + value.slice(1),
  buildMatchShareContent: (match, intl) => {
    const clubName = encodeURIComponent(match.clubName);
    // const clubUrl = "";//"https%3A%2F%2Fgoo.gl%2Fmaps%2FjCHX9hiu8FBHMAjH8";
    let matchDate = "";
    let fromTime = "";
    let toTime = "";
    if (match.dateAndTime) {
      matchDate = encodeURIComponent(Helpers.capitalise(Dates.format(new Date(match.dateAndTime), "EEEE dd/MM", intl.locale)));
      fromTime = encodeURIComponent(`${Dates.format(new Date(match.dateAndTime), "H:mm", intl.locale)}h`);
      toTime = encodeURIComponent(`${Dates.format(Dates.addMinutes(new Date(match.dateAndTime), 90), "H:mm", intl.locale)}h`);
    }
    const level = encodeURIComponent(match.level);
    const p1 = encodeURIComponent(match.players[0].name);
    const p2 = encodeURIComponent(match.players[1].name);
    const p3 = encodeURIComponent(match.players[2].name);
    const p4 = encodeURIComponent(match.players[3].name);

    let template = `${clubName}%0D%0A%0D%0A%F0%9F%93%85+${matchDate}%0D%0A%F0%9F%95%92+${fromTime}+-+${toTime}%0D%0A%F0%9F%8F%86+${level}`;
    template += `%0D%0A%0D%0A%F0%9F%8E%BE+${p1}%0D%0A%F0%9F%8E%BE+${p2}%0D%0A%F0%9F%8E%BE+${p3}+%0D%0A%F0%9F%8E%BE+${p4}`;

    return template;
  }
};

export default Helpers;