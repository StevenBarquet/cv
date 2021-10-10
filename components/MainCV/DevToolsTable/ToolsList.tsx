// ---Dependencys
import { ReactElement } from 'react';
import { Row, Col } from 'antd';
// ---Types
import { Technolgy } from '@Reducers/language/customTypes';

// ------------------------------------------ PROPS-----------------------------------------
interface Props {
  devTools: Array<Technolgy>;
  // onFlip: ()=>void;
  onToolChange: (tools: Array<Technolgy>, index: number)=>void;
}
// ------------------------------------------ COMPONENT-----------------------------------------
export default function ToolsList(props: Props) : ReactElement {
  const { devTools, onToolChange } = props;
  function onClick(i: number) {
    onToolChange(devTools, i);
  }
  const grid = {
    xs: 8,
    sm: 8,
    md: 6,
    lg: 6,
    xl: 4,
    xxl: 3
  };
  return (
    <Row>
      {
        devTools.map((tool, i) => (
          <Col key={tool.title} {...grid}>
            <button type="button" onClick={() => onClick(i)}>
              <img src={tool.imgRoute} alt={tool.title} width="90%" />
              <h4>{tool.title}</h4>
            </button>
          </Col>
        ))
      }
    </Row>
  );
}
