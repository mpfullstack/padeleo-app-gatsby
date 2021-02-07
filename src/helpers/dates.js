import dateFNSformat from "date-fns/format";
import { es, en } from "date-fns/locale";
import addHours from "date-fns/addHours";
import addMinutes from "date-fns/addMinutes";

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
};

export default Dates;