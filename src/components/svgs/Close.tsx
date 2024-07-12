import Svg, { Path } from "react-native-svg";

const Close = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={12}
    height={12}
    fill="none"
    {...props}
  >
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m12.667 3.333-9.334 9.333m0-9.333 9.334 9.333"
    />
  </Svg>
);
export default Close;
