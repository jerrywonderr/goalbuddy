import Svg, { Path } from "react-native-svg";

const Goal = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      stroke="currentColor"
      strokeWidth={1.5}
      d="M22.833 12c0 5.523-4.477 10-10 10-5.522 0-10-4.477-10-10s4.478-10 10-10c5.523 0 10 4.477 10 10Z"
    />
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.686 4.717C18.872 9.422 14.77 13 9.833 13a9.965 9.965 0 0 1-6.853-2.717m19.663-.233C20.526 14.738 15.811 18 10.333 18a13.44 13.44 0 0 1-6.52-1.676m.675-9.836A7.002 7.002 0 0 0 15.69 2.414"
    />
  </Svg>
);
export default Goal;
