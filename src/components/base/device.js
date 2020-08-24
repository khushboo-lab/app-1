const size = {
  mobileM: '375px',
  mobileL: '425px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '1920px',
};

export const device = {
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
};

export default device;