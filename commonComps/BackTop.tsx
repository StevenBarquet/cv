import { ReactElement } from 'react';
import { VerticalAlignTopOutlined } from '@ant-design/icons';

export default function BackTop(): ReactElement {
  function goTop() {
    if (typeof window !== 'undefined') {
      let bodyScroll = document.body.scrollTop;
      // eslint-disable-next-line no-multi-assign
      bodyScroll = document.documentElement.scrollTop = 0;
      return bodyScroll;
    }
    return 0;
  }
  return (
    <button type="button" className="back-top-button" onClick={goTop}>
      <VerticalAlignTopOutlined />
    </button>
  );
}
