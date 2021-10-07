// ---Dependencys
import { ReactElement } from 'react';
import { Row, Col } from 'antd';
// ---Types
import { ResponsiveData } from '@Reducers/appInfo/customTypes';
// ---Comps
import TechCounter from 'Comp/MainCV/TechGraphs/TechCounter';
import EngLevel from 'Comp/MainCV/TechGraphs/EngLevel';

// ------------------------------------------ PROPS-----------------------------------------
type Props = ResponsiveData;
// ------------------------------------------ COMPONENT-----------------------------------------
export default function Introduction(props: Props) : ReactElement {
  // ------------------------Const, States and Hooks-------------------------
  const { winSize } = props;
  const gridOffset = { span: 8, offset: 8 };
  // ---Main Methods
  function getClassname() {
    if (winSize === 'xs' || winSize === 'sm') {
      return 'tech-graph-movil';
    }
    return 'tech-graph-desk';
  }
  // -----------------------------------Render---------------------------------
  return (
    <Row id="stack" className={getClassname()}>
      <Col xs={24} sm={24} md={8} lg={8} xl={8} xxl={8}>
        <TechCounter />
      </Col>
      <Col xs={24} sm={24} md={gridOffset} lg={gridOffset} xl={gridOffset} xxl={gridOffset}>
        <EngLevel />
      </Col>
    </Row>
  );
}
