import Svg, { Path } from "react-native-svg";

const Buddies = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      stroke="#141B34"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M20.774 18c.75 0 1.345-.471 1.88-1.13 1.096-1.35-.703-2.43-1.389-2.957-.697-.537-1.476-.842-2.265-.913m-1-2a2.5 2.5 0 0 0 0-5M3.226 18c-.75 0-1.345-.471-1.88-1.13-1.096-1.35.703-2.43 1.389-2.957C3.432 13.376 4.21 13.07 5 13m.5-2a2.5 2.5 0 0 1 0-5"
    />
    <Path
      stroke="#141B34"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.084 15.111c-1.022.632-3.701 1.922-2.07 3.536C6.813 19.436 7.7 20 8.817 20h6.368c1.117 0 2.004-.564 2.801-1.353 1.632-1.614-1.047-2.904-2.069-3.536a7.457 7.457 0 0 0-7.832 0Z"
    />
    <Path
      stroke="#141B34"
      strokeWidth={1.5}
      d="M15.5 7.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
    />
  </Svg>
);
export default Buddies;
