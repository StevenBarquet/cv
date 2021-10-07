// ---Dependencys
import { ReactElement } from 'react';
import { Row, Col } from 'antd';
// ---Redux
import { useSelector } from 'react-redux';
import { ReduxState } from 'Reducers';
// ---Components
import Name from 'Comp/Home/Name';
import Start from 'Comp/Home/Start';
// ---Others
import { ownerData } from 'Others/global-config';

// ----------------------------------------COMPONENT----------------------------------------
export default function Home(): ReactElement {
  // ---Redux States
  const { winSize } = useSelector((reducers: ReduxState) => reducers.appInfoReducer);
  // ---Main Methods
  function getPadding() {
    if (winSize === 'xs' || winSize === 'sm' || winSize === 'md') {
      return { paddingTop: '155px' };
    }
    return { paddingTop: '170px' };
  }
  function getClassname() {
    if (winSize === 'xs' || winSize === 'sm' || winSize === 'md') {
      return 'home-container-movil';
    }
    return 'home-container-desk';
  }
  return (
    <div className={getClassname()}>
      <section>
        <Row style={getPadding()}>
          <Col style={{ width: 300, height: 300 }} xs={24} sm={24} md={8} lg={8} xl={8} xxl={8}>
            <Name />
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
            <Start />
          </Col>
        </Row>
      </section>
    </div>
  );
}
