import { css } from 'styled-components';

const deviceSize = {
  mobile: '420px',
  tablet: '768px',
  laptop: '1200px',
};

export const MEDIA_QUERIES = {
  MOBILE: `screen and (max-width: ${deviceSize.mobile})`,
  TABLET: `screen and (max-width: ${deviceSize.tablet})`,
  LAPTOP: `screen and (max-width: ${deviceSize.laptop})`,
};

const medias = Object.keys(deviceSize).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media screen and (max-width: ${deviceSize[label]}) {
      ${css(...args)};
    }
  `;
  return acc;
}, {});

export default medias;
