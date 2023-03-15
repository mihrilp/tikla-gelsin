import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

const SvgBackArrow = (props: SvgProps) => (
  <Svg width={14} height={24} fill="none" {...props}>
    <Path
      d="M13.714 1.714A1.713 1.713 0 0 0 10.788.502L.502 10.788a1.713 1.713 0 0 0 0 2.424l10.286 10.286a1.714 1.714 0 1 0 2.424-2.424L4.138 12l9.074-9.074c.322-.321.502-.756.502-1.212Z"
      fill="#EB1730"
    />
  </Svg>
);

export default SvgBackArrow;
