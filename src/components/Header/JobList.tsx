import React from 'react';
import { isMobile } from 'react-device-detect';

interface Props {
  title: string;
  jobList: string[];
}

function JobList(props: Props) {
  return (
    <div className="job mt-5">
      <p className={isMobile ? "mb-2" : "mb-3"}><strong>{props.title},</strong></p>
      <ul>
        {props.jobList.map((item, index) => <li key={index}><p>{item}</p></li>)}
      </ul>
    </div>
  );
}

export default JobList;
