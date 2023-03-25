import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

const SvgLogOut = (props: SvgProps) => (
  <Svg width={30} height={30} viewBox="0 0 24 24" {...props}>
    <Path d="M16 13v-2H7V8l-5 4 5 4v-3z" />
    <Path d="M20 3h-9c-1.103 0-2 .897-2 2v4h2V5h9v14h-9v-4H9v4c0 1.103.897 2 2 2h9c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2z" />
  </Svg>
);

export default SvgLogOut;
