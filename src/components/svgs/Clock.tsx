import Svg, { Path } from "react-native-svg";

const Clock = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={12}
    height={12}
    fill="none"
    {...props}
  >
    <Path stroke="currentColor" d="M6 11A5 5 0 1 0 6 1a5 5 0 0 0 0 10Z" />
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 4v2l1 1"
    />
  </Svg>
);
export default Clock;
