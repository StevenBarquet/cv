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
  function getBackground() {
    if (winSize === 'xs' || winSize === 'sm' || winSize === 'md') {
      return '/images/movil-frame.png';
    }
    return '/images/desktop-frame.png';
  }
  function getPadding() {
    if (winSize === 'xs' || winSize === 'sm' || winSize === 'md') {
      return { paddingTop: '125px' };
    }
    return { paddingTop: '210px' };
  }
  return (
    <div className="home-container">
      <img
        src={getBackground()} // Route of the image file
        height="700px"
        width="94%"
        alt={ownerData.name.withLast}
      />
      <Row style={getPadding()}>
        <Col span={8}>
          <Name />
        </Col>
        <Col span={12}>
          <Start />
        </Col>
      </Row>
    </div>
  );
}
