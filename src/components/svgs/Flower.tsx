import Svg, { Path } from "react-native-svg";

const Flower = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.667 10c0 3.866 3 7 3 7s3-3.134 3-7-3-7-3-7-3 3.134-3 7Z"
    />
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.998 8C4.78 7.046 2.667 7 2.667 7s.095 4.381 2.857 7.143C8.285 16.904 12.667 17 12.667 17s4.381-.096 7.143-2.857C22.57 11.38 22.666 7 22.666 7s-2.115.046-4.331 1M12.687 17c-.166 1.333.64 4 3.493 4 1.996 0 2.994-2 6.487 0-.4-2-1.2-3.28-2.368-4m-7.653 0c.166 1.333-.64 4-3.493 4-1.996 0-2.994-2-6.486 0 .4-2 1.2-3.28 2.367-4"
    />
  </Svg>
);
export default Flower;
