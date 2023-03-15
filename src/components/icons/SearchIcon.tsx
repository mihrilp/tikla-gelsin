import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

const SvgSearch = (props: SvgProps) => (
  <Svg width={25} height={24} fill="none" {...props}>
    <Path
      d="m23.89 22.29-6.892-6.897a9.31 9.31 0 0 0 2.176-5.986C19.174 4.219 14.916 0 9.68 0 4.44 0 .173 4.224.173 9.412c0 5.188 4.258 9.407 9.496 9.407a9.521 9.521 0 0 0 5.897-2.038l6.916 6.916a.97.97 0 0 0 1.408 0 .97.97 0 0 0 0-1.408ZM2.191 9.411c0-4.076 3.358-7.389 7.478-7.389 4.12 0 7.477 3.313 7.477 7.389 0 4.076-3.357 7.389-7.477 7.389S2.19 13.483 2.19 9.412Z"
      fill="#EB1730"
    />
  </Svg>
);

export default SvgSearch;
