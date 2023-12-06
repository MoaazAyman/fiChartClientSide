// module.exports = {
//   transform: {
//     "^.+\\.jsx?$": "babel-jest",
//   },
//   transformIgnorePatterns: ["/node_modules/(?!axios)/"],

//   // Module file extensions for importing
//   moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
// };

export const transform = {
  "^.+\\.jsx?$": "babel-jest",
};
export const transformIgnorePatterns = ["/node_modules/(?!axios)/"];
