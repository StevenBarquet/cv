// ---Dependencys
import { ReactElement, useReducer } from 'react';
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
  const { labels, data } = useSelector(
    (reducers: ReduxState) => reducers.languageReducer
  );
  const { first, second, third } = labels.DevSkills;
  const { front, back, arch } = data.stack;
  // ---State
  const initalState: State = {
    devTool: data.stack.front.devTools[1],
    reverse: false
  };
  const [state, dispatch] = useReducer(reducer, initalState);
  // ------------------------Main Method-------------------------
  function onFlip() {
    dispatch({ type: FLIP });
  }
  function onToolChange(tools: Array<Technolgy>, index: number) {
    const devTool = tools[index];
    dispatch({ type: TOOL_CHANGE, payload: devTool });
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
          <ReverseCard devTool={state.devTool} />
        </TabPane>
        <TabPane tab={second} key={second}>
          <FrontalCard
            onToolChange={onToolChange}
            devSkill={back}
          />
          <ReverseCard devTool={state.devTool} />
        </TabPane>
        <TabPane tab={third} key={third}>
          <FrontalCard
            onToolChange={onToolChange}
            devSkill={arch}
          />
          <ReverseCard devTool={state.devTool} />
        </TabPane>
      </Tabs>
    </div>
  );
}
