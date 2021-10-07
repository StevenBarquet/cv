// ---Dependencys
import React from 'react';
import { CaretRightOutlined } from '@ant-design/icons';
// ---CommonComps
import Link from 'CComps/Link';
// ---Others
import { englishData, englishLabels } from 'Others/globalData';

// ------------AUX COMPS
function AmazingBytton() {
  return (
    <Link to="/MainPage">
      <button className="glow-on-hover" type="button">
        {englishLabels.startButton}
        <CaretRightOutlined />
      </button>
    </Link>
  );
}
// ------------------------------------------ COMPONENT-----------------------------------------
export default function Start(): React.ReactElement {
  return (
    <div className="start-container">
      <h1>{englishData.jobWanted}</h1>
      <AmazingBytton />
    </div>
  );
}
