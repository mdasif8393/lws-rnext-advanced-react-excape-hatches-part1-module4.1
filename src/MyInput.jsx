import { useImperativeHandle } from "react";
import { useRef } from "react";
import { forwardRef } from "react";

const MyInput = forwardRef((props, ref) => {
  const realInputRef = useRef(null);

  useImperativeHandle(ref, () => ({
    focus() {
      realInputRef.current.focus();
    },
  }));

  return <input {...props} ref={realInputRef} />;
});

export default MyInput;
