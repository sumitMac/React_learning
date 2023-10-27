import { useLayoutEffect, useState } from "react";
export const useLayout = () => {
  const [value, setValue] = useState("GFG");

  useLayoutEffect(() => {
    if (value === "GFG") {
      // Changing the state
      setValue("hello sumit");
    }
    console.log("UseLayoutEffect is called with the value of ", value);
  }, [value]);
  return [value, useLayout];
};
