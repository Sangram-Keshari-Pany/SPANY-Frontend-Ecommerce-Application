import { Backgroundcolor, Themes } from './color';
import React from 'react';
import { Dimensions, View } from 'react-native';
import Svg, { Path } from 'react-native-svg';
const { width, height } = Dimensions.get('window');

const isTablet = width >= 600;
const viewBoxWidth = isTablet ? width *0.5: width *0.9; // Larger viewBox for tablets
const viewBoxHeight = isTablet ? height * 0.5 : height *0.9;
const viewBox = `0 0 ${viewBoxWidth} ${viewBoxHeight}`;

export const CreateScreenSvg = () => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 375 812"  fill="none">
      <Path d="M149.237 157.191C116.216 286.524 -45.9048 161.1 -68.0053 64.9774C-90.1057 -31.1454 -61.2453 -117.739 24.2087 -152.265C109.663 -186.791 179.467 -129.479 217.161 -54.0902C254.856 21.299 182.259 27.8587 149.237 157.191Z" fill={Themes.color3} />
      <Path d="M405.963 64.974C463.48 -13.2608 527.361 119.326 527.361 186.372C527.361 253.419 473.009 307.771 405.963 307.771C338.916 307.771 275.716 256.724 284.564 186.372C293.413 116.02 348.446 143.209 405.963 64.974Z" fill={Themes.color2} />
    </Svg>
  );
};

export const LoginscreenSvg = () => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox={viewBox}  fill="none">
      <Path d="M532.592 737.646C626.561 868.528 384.573 901.354 278.768 866.976C172.963 832.598 115.061 718.957 149.439 613.152C183.817 507.347 290.971 487.269 389.928 510.907C488.885 534.546 438.623 606.764 532.592 737.646Z" fill={Themes.color3} />
      <Path d="M350.132 392.879C302.333 420.118 299.823 336.772 315.273 302.07C330.724 267.368 371.381 251.761 406.083 267.211C440.785 282.662 456.392 323.319 440.941 358.021C425.491 392.723 397.931 365.641 350.132 392.879Z" fill={Themes.color2} />
      <Path d="M201.008 266.33C161.149 422.443 -19.5441 258.17 -61.2191 155.021C-102.894 51.8718 -53.0593 -65.5313 50.0897 -107.206C153.239 -148.881 237.498 -79.7022 282.998 11.2978C328.498 102.298 240.867 110.216 201.008 266.33Z" fill={Themes.color3} />
      <Path d="M42.9996 -131.222C138.438 -261.036 244.435 -41.0359 244.435 70.214C244.435 181.464 154.25 271.65 42.9996 271.65C-68.2502 271.65 -158.436 181.464 -158.436 70.214C-158.436 -41.0359 -52.4385 -1.40715 42.9996 -131.222Z" fill={Themes.color2} />
    </Svg>
  );
};

export const PasswordScreenSvg = () => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox={viewBox}  fill="none">
      <Path d="M201.008 266.33C161.149 422.443 -19.5441 258.17 -61.2191 155.021C-102.894 51.8718 -53.0593 -65.5313 50.0897 -107.206C153.239 -148.881 237.498 -79.7022 282.998 11.2978C328.498 102.298 240.867 110.216 201.008 266.33Z" fill={Themes.color3}/>
      <Path d="M42.9996 -131.222C138.438 -261.036 244.435 -41.0359 244.435 70.214C244.435 181.464 154.25 271.65 42.9996 271.65C-68.2502 271.65 -158.436 181.464 -158.436 70.214C-158.436 -41.0359 -52.4385 -1.40715 42.9996 -131.222Z" fill={Themes.color2}/>
    </Svg>
  );
};


export const EmptyWishlist = ({ svgSize }: any) => {
  return (
    <Svg width={svgSize} height={svgSize}>
      <Path d="M35.0047 52.4793L32.6451 50.1029C23.9457 42.3608 18.1937 37.1378 18.1937 30.7224C18.1641 28.2637 19.1277 25.897 20.8664 24.1583C22.6051 22.4196 24.9718 21.4559 27.4305 21.4855C30.3434 21.5188 33.0994 22.811 34.9879 25.0291C36.8764 22.811 39.6324 21.5188 42.5453 21.4855C45.004 21.4559 47.3707 22.4196 49.1094 24.1583C50.8481 25.897 51.8118 28.2637 51.7822 30.7224C51.7822 37.1378 46.0721 42.3608 37.3307 50.1197L35.0047 52.4793Z" stroke="#004CFF" strokeWidth="3" strokeLinecap="round" fill={'#ffffff'} />
      <Path d="M34.863 0.165039V8.56217" stroke="#004CFF" strokeWidth="3" strokeLinecap="round" />
      <Path d="M17.3607 4.98486L21.5593 12.2568" stroke="#004CFF" strokeWidth="3" strokeLinecap="round" />
      <Path d="M4.66882 17.7744L11.9407 21.973" stroke="#004CFF" strokeWidth="3" strokeLinecap="round" />
      <Path d="M0 35.3105H8.39713" stroke="#004CFF" strokeWidth="3" strokeLinecap="round" />
      <Path d="M4.81995 52.8045L12.0919 48.606" stroke="#004CFF" strokeWidth="3" strokeLinecap="round" />
      <Path d="M17.6095 65.496L21.8081 58.2241" stroke="#004CFF" strokeWidth="3" strokeLinecap="round" />
      <Path d="M35.1453 70.1652V61.7681" stroke="#004CFF" strokeWidth="3" strokeLinecap="round" />
      <Path d="M52.6394 65.3535L48.4408 58.0815" stroke="#004CFF" strokeWidth="3" strokeLinecap="round" />
      <Path d="M65.3312 52.5555L58.0593 48.3569" stroke="#004CFF" strokeWidth="3" strokeLinecap="round" />
      <Path d="M70 35.0283H61.6029" stroke="#004CFF" strokeWidth="3" strokeLinecap="round" />
      <Path d="M65.1884 17.5259L57.9165 21.7244" stroke="#004CFF" strokeWidth="3" strokeLinecap="round" />
      <Path d="M52.3905 4.83398L48.1919 12.1059" stroke="#004CFF" strokeWidth="3" strokeLinecap="round" />
    </Svg>)
};

export const EmptyCart = () => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox={viewBox}  fill="none">
      <Path xmlns="http://www.w3.org/2000/svg" d="M7 16.0005H51C53.7614 16.0005 56 18.2391 56 21.0005L58 59.0005C58 61.7619 55.7614 64.0005 53 64.0005H5C2.23858 64.0005 0 61.7619 0 59.0005L2 21.0005C2 18.2391 4.23858 16.0005 7 16.0005Z" fill="#004CFF"/>
      <Path d="M13.919 26.691V12.8111C13.919 7.3602 18.466 2.94141 24.0751 2.94141H33.3169C38.9259 2.94141 43.473 7.3602 43.473 12.8111V26.691" stroke="white" stroke-width="5" stroke-linecap="round"/>
      <Path d="M13.919 14.691V12.8111C13.919 7.3602 18.466 2.94141 24.0751 2.94141H33.3169C38.9259 2.94141 43.473 7.3602 43.473 12.8111V14.691" stroke="#004CFF" stroke-width="5" stroke-linecap="round"/>
      <Path d="M33.4305 33.1568C32.4739 32.8982 31.1296 32.6914 29.9404 32.6914C25.1318 32.6914 23.167 35.1474 23.167 37.7327C23.167 39.9301 24.2528 41.4813 27.6395 43.808C29.9921 45.4109 31.0262 46.3157 31.0262 47.3757C31.0262 48.4873 30.0438 49.4956 28.0531 49.4956C26.3727 49.4956 24.3045 49.0302 23.4255 48.6941L23.3738 52.0808C24.3045 52.3652 26.5278 52.6754 27.8205 52.6754C32.0344 52.6754 34.8265 50.4004 34.8265 47.2205C34.8265 44.868 33.0944 43.1875 30.2764 41.2228C27.9239 39.594 26.9156 38.7409 26.9156 37.7068C26.9156 36.5951 27.7946 35.8713 29.9404 35.8713C31.0779 35.8713 32.4739 36.1298 33.3787 36.4917L33.4305 33.1568Z" fill="white"/>
    </Svg>
  )
};