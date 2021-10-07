// ---Dependencys
import { ReactElement } from 'react';
import { DownOutlined } from '@ant-design/icons';
import Link from 'CComps/Link';
import {
  Col, ColProps, Menu, Dropdown
} from 'antd';
// ---Types
import { ObjLabelValue } from '@Declarations';
// ---Other
import { includesValue } from 'Others/otherMethods';

// -------------------------------------AUX COMPONENTS--------------------------------
interface OtherProps {
  paths: Array<ObjLabelValue>;
}
function DropdownMenu({ paths }: OtherProps) {
  return (
    <Menu>
      {paths.map((element) => (
        <Menu.Item key={element.label}>
          <Link to={`${element.value}`}>
            {element.label}
          </Link>
        </Menu.Item>
      ))}
    </Menu>
  );
}
// ------------------------------------TYPES---------------------------------------
interface Props {
  currentPath: string;
  grid: ColProps
  label: string;
  paths: Array<ObjLabelValue>;
}
// -----------------------------------COMPONENT------------------------------------
export default function NavDropdown(props: Props): ReactElement {
  const {
    grid, currentPath, label, paths
  } = props;
  const {
    xs, sm, md, lg, xl, xxl
  } = grid;

  return (
    <Col className="nav-col" xs={xs} sm={sm} md={md} lg={lg} xl={xl} xxl={xxl}>
      <div
        className={includesValue(currentPath, paths, 'value') ? 'nav-btn nav-border' : 'nav-btn'}
      >
        <Dropdown overlay={<DropdownMenu paths={paths} />}>
          <a href="/" onClick={(e) => e.preventDefault()}>
            {label}
            <DownOutlined />
          </a>
        </Dropdown>
      </div>
      <div className="slider" />
    </Col>
  );
}
