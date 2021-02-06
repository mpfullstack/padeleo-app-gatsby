// https://github.com/kush-agra/react-horizontal-datepicker

/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from "react";
import styles from "./DatePicker.styles.css"
import { ArrowLeft, ArrowRight } from '../../components/icons';
import {
    addDays,
    addMonths,
    differenceInMonths,
    format,
    isSameDay,
    lastDayOfMonth,
    startOfMonth
} from "date-fns";
import { es } from 'date-fns/locale'

function capitalise(value) {
    return value.charAt(0).toUpperCase() + value.slice(1);
}

export default function DatePicker({fromDate, endDate, selectDate, getSelectedDay, labelFormat, isDateAvailable}) {
    const [selectedDate, setSelectedDate] = useState(fromDate || new Date());
    const firstSection = {marginLeft: '0'};
    const startDate = fromDate || new Date();
    const lastDate = addDays(startDate, endDate || 90);
    const selectedStyle = {fontWeight:"bold",width:"49px",height:"49px",borderRadius:"50%"};

    const getStyles = (day) => {
        if (isSameDay(day, selectedDate)) {
            return selectedStyle;
        }
        return null
    };

    const getId = (day) => {
        if (isSameDay(day, selectedDate)) {
            return ('selected')
        } else {
            return ("")
        }
    };

    function renderDay(month, j) {
      const dayFormat = "E";
      const dateFormat = "d";
      const currentDate = addDays(month, j);
      let classNames = '';
      let isAvailable = true;
      if (isDateAvailable) {
        isAvailable = isDateAvailable(currentDate);
      }
      if (!isAvailable) {
        classNames = ` not-available`;
      }
      return (
        <div id={`${getId(addDays(startDate, j))}`}
              className={`${styles.dateDayItem} dateDayItem${isSameDay(addDays(month, j), selectedDate) ? ' selected' : ''}${classNames}`}
              style={getStyles(addDays(month, j))}
              key={addDays(month, j)}
              onClick={() => onDateClick(addDays(month, j))}
              onKeyDown={() => null}
              role='button'
              aria-hidden='true'
        >
            <div className={`${styles.dayLabel} dayLabel`}>
                {capitalise(format(addDays(month, j), dayFormat, { locale: es }))}
            </div>
            <div className={`${styles.dateLabel} dateLabel`}>
                {format(addDays(month, j), dateFormat, { locale: es })}
            </div>
        </div>
      );
    }

    function renderDays() {
        const dateFormat = "d";
        const months = [];
        let days = [];
        for (let i = 0; i <= differenceInMonths(lastDate, startDate); i++) {
            let start, end;
            const month = startOfMonth(addMonths(startDate, i));
            start = i === 0 ? Number(format(startDate, dateFormat, { locale: es })) - 1 : 0;
            end = i === differenceInMonths(lastDate, startDate) ? Number(format(lastDate, "d")) : Number(format(lastDayOfMonth(month), "d"));
            for (let j = start; j < end; j++) {
                days.push(renderDay(month, j));
            }
            months.push(
                <div className={`${styles.monthContainer} monthYearLabelContainer`} key={month}>
                    <span className={`${styles.monthYearLabel} monthYearLabel`}>
                        {capitalise(format(month, labelFormat || "MMMM yyyy", { locale: es }))}
                    </span>
                    <div className={styles.daysContainer} style={i===0?firstSection:null}>
                        {days}
                    </div>
                </div>
            );
            days = [];
        }
        return <div id={"container"} className={styles.dateListScrollable}>{months}</div>;
    }

    const onDateClick = day => {
        setSelectedDate(day);
        if (getSelectedDay) {
            getSelectedDay(day);
        }
    };

    useEffect(() => {
        if (getSelectedDay) {
            if (selectDate) {
                getSelectedDay(selectDate);
            } else {
                getSelectedDay(startDate);
            }
        }
    }, []);

    useEffect(() => {
        if (selectDate) {
            if (!isSameDay(selectedDate, selectDate)) {
                setSelectedDate(selectDate);
                setTimeout(() => {
                    let view = document.getElementById('selected');
                    if (view) {
                        view.scrollIntoView({behavior: "smooth", inline: "center", block: "nearest"});
                    }
                }, 20);
            }
        }
    }, [selectDate]);

    const nextWeek = () => {
        const e = document.getElementById('container');
        const width = e ? e.getBoundingClientRect().width : null;
        e.scrollLeft += width - 60;
    };

    const prevWeek = () => {
        const e = document.getElementById('container');
        const width = e ? e.getBoundingClientRect().width : null;
        e.scrollLeft -= width - 60;
    };

    return (
        <div className={styles.container}>
            <div className={styles.buttonWrapper}>
                <button className={styles.button} onClick={prevWeek}>
                    <ArrowLeft />
                </button>
            </div>
            {renderDays()}
            <div className={styles.buttonWrapper}>
                <button className={styles.button} onClick={nextWeek}>
                    <ArrowRight />
                </button>
            </div>
        </div>
    )
}

/*more pictures
* example code sandbox
* update readme*/