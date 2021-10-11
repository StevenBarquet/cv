// ---Dependencys
import { ReactElement } from 'react';
import { Timeline } from 'antd';
// ---Types
import { JobDetail } from '@Reducers/language/customTypes';

const { Item } = Timeline;

// ------------------------------------------ AUX COMP
interface WorkItemProps {
  company: string;
  title: string;
  time: string;
  onClickItem: () => void
}
function WorkItem(props: WorkItemProps) {
  const {
    company, title, time, onClickItem
  } = props;
  return (
    <button type="button" onClick={onClickItem}>
      <h3>{company}</h3>
      <h4>{title}</h4>
      <h4 className="time">{time}</h4>
    </button>
  );
}
// ------------------------------------------ PROPS-----------------------------------------
interface Props {
  workExp: Array<JobDetail>;
  setModalJob: (job: JobDetail)=>void;
  showModal: ()=>void;
}
// ------------------------------------------ COMPONENT-----------------------------------------
export default function TiemeLine(props: Props): ReactElement {
  // ------------------------Const, States and Hooks-------------------------
  const { showModal, setModalJob, workExp } = props;
  // ------------------------Main Methods-------------------------
  function onClickItem(job: JobDetail) {
    setModalJob(job);
    showModal();
  }
  return (
    <Timeline mode="left">
      {
        workExp.map((jobExp) => (
          <Item key={jobExp.title} label={jobExp.date}>
            <WorkItem
              onClickItem={() => { onClickItem(jobExp); }}
              time={jobExp.time}
              company={jobExp.company}
              title={jobExp.title}
            />
          </Item>
        ))
      }
    </Timeline>
  );
}
