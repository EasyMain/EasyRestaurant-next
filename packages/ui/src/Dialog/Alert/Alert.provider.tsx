import React, { Fragment, useCallback, useState } from "react";
import AlertContext from "./Alert.context";
import { AlertDialog } from "./Alert.dialog";
import {
  AlertOptionsProps,
  AlertProviderProps,
  AlertProviderResolveType,
} from "./types";

const AlertProvider = ({ children, defaultOptions }: AlertProviderProps) => {
  const [options, setOptions] = useState<AlertOptionsProps | undefined>();
  const [resolveReject, setResolveReject] = useState<AlertProviderResolveType>(
    []
  );
  const [resolve, reject] = resolveReject;

  const alert = useCallback((options: AlertOptionsProps) => {
    return new Promise<void>((resolve, reject) => {
      setOptions({ ...(defaultOptions || {}), ...(options || {}) });
      setResolveReject([resolve, reject]);
    });
  }, []);

  const handleClose = useCallback(() => {
    setResolveReject([]);
  }, []);

  const handleCancel = useCallback(() => {
    if (reject) {
      reject();
      handleClose();
    }
  }, [reject, handleClose]);

  const handleConfirm = useCallback(() => {
    if (resolve) {
      resolve();
      handleClose();
    }
  }, [resolve, handleClose]);

  return (
    <Fragment>
      <AlertContext.Provider value={alert}>{children}</AlertContext.Provider>
      {/* <AlertDialog
        open={resolveReject.length === 2}
        options={options}
        onClose={handleClose}
        onCancel={handleCancel}
        onConfirm={handleConfirm}
      /> */}
    </Fragment>
  );
};

export { AlertProvider };
