// ---Dependencys
import { ReactElement } from 'react';
import { Col } from 'antd';
// ---Others
import { ownerData } from 'Others/global-config';

// ----------------------------------------COMPONENT----------------------------------
export default function DevImage(): ReactElement {
  return (
    <Col xs={24} sm={24} md={10} lg={10} xl={10} xxl={8}>
      <img width="100%" src="/images/InDev/engrane.png" alt={ownerData.domain} />
    </Col>
  );
}
