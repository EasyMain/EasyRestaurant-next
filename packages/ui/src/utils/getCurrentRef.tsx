export function getCurrentRef<T>(ref: React.RefObject<T>) {
  return () => {
    if (ref.current === null) {
      throw new Error(
        "getCurrentRef should only be used when ref is certainly defined"
      );
    }

    return ref.current;
  };
}
