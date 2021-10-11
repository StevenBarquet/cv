// ---Dependencies
import { ReactElement } from 'react';
// ---Redux
import { useSelector } from 'react-redux';
import { ReduxState } from 'Reducers';
// ---Comps
import Introduction from 'Comp/MainCV/Introduction';
import TechGraphs from 'Comp/MainCV/TechGraphs';
import DevToolsTable from 'Comp/MainCV/DevToolsTable';
import WorkTiemeLine from 'Comp/MainCV/WorkTiemeLine';
// ---CommonComps
import LangButton from 'CComps/LangButton';
// ---Containers
import NavbarCont from 'Cont/NavbarCont';
import Footer from 'Cont/Footer';

// ----------------------------------------COMPONENT----------------------------------------
export default function MainCV(): ReactElement {
  // ------------------------Const, States and Hooks-------------------------
  const { winSize } = useSelector((reducers: ReduxState) => reducers.appInfoReducer);
  // ---Main Methods
  function getClassname() {
    if (winSize === 'xs' || winSize === 'sm' || winSize === 'md') {
      return 'maincv-container-movil';
    }
    return 'maincv-container-desk';
  }
  return (
    <>
      <div id="top" className={getClassname()}>
        <NavbarCont />
        <Introduction />
        <TechGraphs />
        <DevToolsTable />
        <WorkTiemeLine />
        <Footer />
      </div>
      <LangButton />
    </>

  );
}
