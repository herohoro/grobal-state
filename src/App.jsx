import { useContext } from "react";
import { Card } from "./components/Card";
import { AdminFlagContext } from "./components/providers/AdminFlagProvider";

export const App = () => {
  //Context内のisAdminと更新関数を取得
  const { isAdmin, setIsAdmin } = useContext(AdminFlagContext);
  //切り替え_押下時
  const onClickSwitch = () => setIsAdmin(!isAdmin);
  return (
    <div>
      {/* 管理者フラグがtrueの時とそれ以外で文字を出し分ける */}
      {isAdmin ? <span>管理者です</span> : <span>管理者以外です</span>}
      <button onClick={onClickSwitch}>切り替え</button>
      <Card isAdmin={isAdmin} />
    </div>
  );
};
