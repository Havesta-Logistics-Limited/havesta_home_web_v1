/**
 * SVGO config focused on safe size reduction for very large exported SVGs.
 *
 * We keep viewBox and IDs to reduce breakage risk.
 */
export default {
  multipass: true,
  plugins: [
    {
      name: "preset-default",
      params: {
        overrides: {
          // avoid breaking CSS/JS references
          cleanupIds: false,
        },
      },
    },
    // Keep viewBox for responsive scaling
    { name: "removeViewBox", active: false },
    "removeDimensions",
    {
      // Some exporters emit a lot of decimals.
      name: "convertPathData",
      params: { floatPrecision: 2 },
    },
  ],
};
