import { useContext } from "react";
import AlertContext from "./Alert.context";

const useAlert = () => {
  const alert = useContext(AlertContext);

  if (!alert) throw new Error("Alert must be inside AlertProvider");

  return alert;
};

export { useAlert };
