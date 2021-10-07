// ---Dependencys
import { ReactElement } from 'react';
import { Col } from 'antd';
// ---Others
import { ownerData } from 'Others/global-config';
// -----------------------------------------TYPES-----------------------------------
interface Props {
  compName: string;
}
// ----------------------------------------COMPONENT----------------------------------
export default function DevText({ compName }: Props): ReactElement {
  return (
    <Col span={24}>
      <h1>¡OH NO! LO SENTIMOS</h1>
      <p>
        En estos momentos
        {' '}
        <span>{ownerData.title.shortStoreName}</span>
        {' '}
        no puede mostrarte el módulo
        &quot;
        <span>{compName}</span>
        &quot;
      </p>
      <h2>SE ENCUENTRA EN ETAPA DE DESARROLLO</h2>
    </Col>
  );
}
