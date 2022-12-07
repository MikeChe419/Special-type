import "./ScheduleList.sass";
import { useState, useEffect } from "react";
import dataEvent from "../../TEMP_EVENT";
import ScheduleItem from "../ScheduleItem/ScheduleItem";
import Pagination from "../Pagination/Pagination";

const ScheduleList = ({ setItemForRegistration, scheduleData }) => {
  return (
    <ul className="schedule__list">
      <ScheduleItem
        events={scheduleData}
        setItemForRegistration={setItemForRegistration}
      />
    </ul>
  );
};

export default ScheduleList;
