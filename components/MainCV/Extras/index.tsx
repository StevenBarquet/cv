// ---Dependencys
import { ReactElement } from 'react';
import { Row, Col } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';
// ------------------------------------------ COMPONENT-----------------------------------------
export default function WorkTiemeLine(): ReactElement {
  // ------------------------Const, States and Hooks-------------------------

  // ------------------------Main Methods-------------------------
  return (
    <Row className="extras-container">
      <Col span={24}>
        <h1>Extras</h1>
      </Col>
      <Col span={12}>
        <h2>CV in PDF</h2>
        <div className="center-from-father">
          <a href="/downloads/cv.pdf" download>
            <button className="glow-on-hover " type="button">
              Download
              <CaretRightOutlined />
            </button>
          </a>
        </div>
      </Col>
      <Col span={12}>
        <h2>Vist my GitHub</h2>
        <a href="https://github.com/StevenBarquet" target="_blank" rel="noopener noreferrer">
          <img src="https://clipart.info/images/ccovers/1499794873github-logo-png.png" alt="Steven" />
        </a>
      </Col>
    </Row>
  );
}
