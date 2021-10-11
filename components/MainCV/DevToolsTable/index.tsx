// ---Dependencys
import { ReactElement, useReducer, useRef } from 'react';
import { Tabs } from 'antd';
// ---Redux
import { useSelector } from 'react-redux';
import { ReduxState } from 'Reducers';
// ---Types
import { Technolgy } from '@Reducers/language/customTypes';
// ---Comps
import FrontalCard from 'Comp/MainCV/DevToolsTable/FrontalCard';
import ReverseCard from 'Comp/MainCV/DevToolsTable/ReverseCard';

const { TabPane } = Tabs;
// ------------------------------------------ REDUCER -----------------------------------------
const typesR = {
  TOOL_CHANGE: 'TOOL_CHANGE',
  FLIP: 'FLIP'
};

const { TOOL_CHANGE, FLIP } = typesR;

interface Action {
  type: string;
  payload?: unknown;
}

interface State {
  devTool: Technolgy;
  reverse: boolean;
}

function reducer(state: State, action: Action) {
  const { type, payload } = action;
  switch (type) {
    case TOOL_CHANGE:
      return {
        ...state,
        reverse: true,
        devTool: payload as Technolgy
      };

    case FLIP:
      return {
        ...state,
        reverse: !state.reverse
      };

    default:
      return state;
  }
}
// ------------------------------------------ COMPONENT-----------------------------------------
export default function DevToolsTable(): ReactElement {
  // ------------------------Const, States and Hooks-------------------------
  const { languageReducer, appInfoReducer } = useSelector((reducers: ReduxState) => reducers);
  const { labels, data } = languageReducer;
  const { isMovil } = appInfoReducer;
  const { first, second, third } = labels.DevSkills;
  const { front, back, arch } = data.stack;
  // ---State
  const initalState: State = {
    devTool: data.stack.front.devTools[1],
    reverse: false
  };
  const [state, dispatch] = useReducer(reducer, initalState);
  const revreseCardRef = useRef<null | HTMLElement>(null);
  // ------------------------Main Method-------------------------
  function onToolChange(tools: Array<Technolgy>, index: number) {
    const devTool = tools[index];
    dispatch({ type: TOOL_CHANGE, payload: devTool });
    if (isMovil) {
      scrollToReverse();
    }
  }
  // ------------------------Aux Method-------------------------
  function scrollToReverse() {
    if (revreseCardRef && revreseCardRef.current) {
      revreseCardRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }
  // ------------------------Render-------------------------
  return (
    <div className="dev-tools">
      <Tabs defaultActiveKey={first}>
        <TabPane tab={first} key={first}>
          <FrontalCard
            onToolChange={onToolChange}
            devSkill={front}
          />
          <ReverseCard revreseCardRef={revreseCardRef} devTool={state.devTool} />
        </TabPane>
        <TabPane tab={second} key={second}>
          <FrontalCard
            onToolChange={onToolChange}
            devSkill={back}
          />
          <ReverseCard revreseCardRef={revreseCardRef} devTool={state.devTool} />
        </TabPane>
        <TabPane tab={third} key={third}>
          <FrontalCard
            onToolChange={onToolChange}
            devSkill={arch}
          />
          <ReverseCard revreseCardRef={revreseCardRef} devTool={state.devTool} />
        </TabPane>
      </Tabs>
    </div>
  );
}
