// ---Dependencys
import { Modal } from 'antd';
// --- Var, Const-------
const { error } = Modal;

// ------------------------------------------ COMPONENT-----------------------------------------
function ModalError(title: string, details: string) : void {
  error({
    title,
    content: details
  });
}
export default ModalError;
