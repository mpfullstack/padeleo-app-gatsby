import dateFNSformat from "date-fns/format";
import en from "date-fns/locale/en-GB";
import es from "date-fns/locale/es";
import addHours from "date-fns/addHours";
import addMinutes from "date-fns/addMinutes";
import addMonths from "date-fns/addMonths";

const Dates = {
  format: (date, strFormat, language) => {
    let locale = en;
    if (language === "es") {
      locale = es;
    }
    return dateFNSformat(date, strFormat, { locale });
  },
  addHours,
  addMinutes,
  addMonths
};

export const localeMap = {
  es,
  en
};

export default Dates;