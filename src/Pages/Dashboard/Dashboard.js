// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import DashboardPage from "../../Component/Dashboard/DashboardPage";

const Dashboard = () => {
  // const navigate = useNavigate();
  // useEffect(() => {
  //   if (!localStorage.getItem("token")) {
  //     navigate({ pathname: "/" }, { replace: "false" });
  //   }
  // });
  return (
    <>
      <DashboardPage />
    </>
  );
};
export default Dashboard;
