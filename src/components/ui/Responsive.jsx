const breakpoints = {
  mobile: "620px",
};

export const media = Object.keys(breakpoints).reduce((acc, device) => {
  acc[device] = (style) => `
      @media (max-width: ${breakpoints[device]}) {
        ${style};
      }
    `;
  return acc;
}, {});
