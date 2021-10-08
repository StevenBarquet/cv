// ---Dependencys
import { ReactElement } from 'react';
import { Row, Col } from 'antd';
// ---Comps
import TechCounter from 'Comp/MainCV/TechGraphs/TechCounter';
import EngLevel from 'Comp/MainCV/TechGraphs/EngLevel';
import Graphs from 'Comp/MainCV/TechGraphs/Graphs';
// ---Others
import { stack } from 'Others/globalData';

// ------------------------------------------ PROPS-----------------------------------------
interface Data {
  area: 'Back'| 'Front'| 'Arch';
  number: number;
}
// ------------------------------------------ COMPONENT-----------------------------------------
export default function Introduction() : ReactElement {
  // ------------------------Const, States and Hooks-------------------------
  const graphData: Array<Data> = [{ area: 'Front', number: stack.front.length }, { area: 'Arch', number: stack.arch.length }, { area: 'Back', number: stack.back.length }];
  const count = stack.front.length + stack.back.length + stack.arch.length;
  // -----------------------------------Render---------------------------------
  return (
    <Row id="stack" className="tech-graph">
      <Col xs={24} sm={24} md={8} lg={8} xl={8} xxl={8}>
        <TechCounter count={count} />
      </Col>
      <Col xs={24} sm={24} md={8} lg={8} xl={8} xxl={8}>
        <Graphs gData={graphData} />
      </Col>
      <Col xs={24} sm={24} md={8} lg={8} xl={8} xxl={8}>
        <EngLevel />
      </Col>
    </Row>
  );
}
