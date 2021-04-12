interface Props {
  title: string;
  jobList: string[];
}

function JobList(props: Props) {
  return (
    <div>
      <p><strong>{props.title},</strong></p>
      <ul>
        {props.jobList.map((item, index) => <li key={index}><p>{item}</p></li>)}
      </ul>
    </div>
  );
}

export default JobList;
