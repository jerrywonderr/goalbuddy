import Svg, { Path } from "react-native-svg";

const CaretRight = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6 4s4 2.946 4 4c0 1.054-4 4-4 4"
    />
  </Svg>
);
export default CaretRight;
