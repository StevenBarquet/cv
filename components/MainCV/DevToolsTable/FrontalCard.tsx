// ---Dependencys
import { ReactElement } from 'react';
import { Row, Col } from 'antd';
// ---Types
import { Technolgy, DevSkill } from '@Reducers/language/customTypes';
// ---Comps
import ToolsList from 'Comp/MainCV/DevToolsTable/ToolsList';
import Achivements from 'Comp/MainCV/DevToolsTable/Achivements';

// ------------------------------------------ PROPS-----------------------------------------
interface Props {
  devSkill: DevSkill;
  onToolChange: (tools: Array<Technolgy>, index: number)=>void;
}
// ------------------------------------------ COMPONENT-----------------------------------------
export default function FrontalCard(props: Props) : ReactElement {
  // ------------------------Const, States and Hooks-------------------------
  const { devSkill, onToolChange } = props;
  // ------------------------Render-------------------------
  return (
    <Row justify="center" className="frontal-card">
      <Col xs={24} sm={24} md={14} lg={14} xl={14} xxl={14}>
        <ToolsList onToolChange={onToolChange} devTools={devSkill.devTools} />
      </Col>
      <Col xs={24} sm={24} md={8} lg={8} xl={8} xxl={8}>
        <Achivements achivements={devSkill.achivements} />
      </Col>
    </Row>

  );
}
