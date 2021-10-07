// ---Dependencys
import React, { useState, ReactElement } from 'react';
import { MenuFoldOutlined, MenuOutlined, UserOutlined } from '@ant-design/icons';
import Link from 'CComps/Link';
import { Row, Col } from 'antd';
// ---Components
import NavButton from 'Comp/NavBar/NavbarItems/NavButton';
// ---Others
// import { appConfig } from 'Others/global-config';
// style={{ backgroundColor: 'greenyellow' }}

// -------------------------------------AUX COMPONENTS--------------------------------
function JustButtons(props: { currentPath: string }) {
  const { currentPath } = props;
  const navGrid = {
    xs: 24,
    sm: 24,
    md: 4,
    lg: 4,
    xl: 4,
    xxl: 4
  };
  const logInGrid = {
    xs: 24,
    sm: 24,
    md: { offset: 4, span: 4 },
    lg: { offset: 4, span: 4 },
    xl: { offset: 4, span: 4 },
    xxl: { offset: 4, span: 4 }
  };
  return (
    <Row>
      <NavButton path="/" currentPath={currentPath} grid={navGrid}>
        Inicio
      </NavButton>
      <NavButton path="/ProductsPage" currentPath={currentPath} grid={navGrid}>
        Productos
      </NavButton>
      <NavButton path="/ServicesPage" currentPath={currentPath} grid={navGrid}>
        Servicios
      </NavButton>
      <NavButton path="/LoginPage" currentPath={currentPath} grid={logInGrid}>
        <>
          <UserOutlined />
          Iniciar sesión
        </>
      </NavButton>
      <NavButton path="/HelpPage" currentPath={currentPath} grid={navGrid}>
        Ayuda
      </NavButton>
    </Row>
  );
}
interface OtherProps {
  currentPath: string;
  menuVisible: boolean;
  setMenuVisible: (arg: boolean) => void;
}
function MovilMenu(props: OtherProps) {
  const { menuVisible, setMenuVisible, currentPath } = props;
  return (
    <Row>
      <Col span={24}>
        <button
          className="nav-btn"
          onClick={() => setMenuVisible(!menuVisible)}
          type="button"
        >
          {menuVisible ? <MenuFoldOutlined /> : <MenuOutlined />}
        </button>
      </Col>
      <Col span={24}>
        {menuVisible ? <JustButtons currentPath={currentPath} /> : null}
      </Col>
    </Row>
  );
}
// ------------------------------------------ TYPES-----------------------------------------
interface Props {
  isMovil: boolean;
  logo: string;
  currentPath: string;
}
// ------------------------------------------ COMPONENT-----------------------------------------
export default function Navbar(props: Props): ReactElement {
  const { isMovil, logo, currentPath } = props;
  const [menuVisible, setMenuVisible] = useState(false);
  return (
    <Row className="nav-div">
      <Col xs={24} sm={24} md={4} lg={4} xl={6} xxl={6}>
        <Link to="/">
          <div className="to-home">
            <img src={logo} alt="Shelly" width="100%" />
          </div>
        </Link>
      </Col>
      <Col xs={24} sm={24} md={20} lg={20} xl={18} xxl={18}>
        {isMovil ? (
          <MovilMenu
            currentPath={currentPath}
            menuVisible={menuVisible}
            setMenuVisible={setMenuVisible}
          />
        ) : (
          <JustButtons currentPath={currentPath} />
        )}
      </Col>
    </Row>
  );
}
