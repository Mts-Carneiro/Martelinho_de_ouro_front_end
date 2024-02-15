import { useContext, useEffect } from "react";
import { StyledCompany } from "./styles";
import { AuthContext } from "../../../Context/AuthContext";
import { useNavigate } from "react-router-dom";

export const TitleCompany = () => {
  const { user, getUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const userID = localStorage.getItem("@USER_ID");

  useEffect(() => {
    if (!userID) {
      navigate("/login");
    }
    try {
      getUser();
    } catch {
      console.log("Erro!");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userID]);

  return (
    <StyledCompany>
      <h3>{user?.trading_name}</h3>
      <span>CNPJ: {user?.CNPJ}</span>
    </StyledCompany>
  );
};
