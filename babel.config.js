module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    presets: ['module:metro-react-native-babel-preset'],
    presets: ["module:metro-react-native-babel-preset", "@babel/preset-typescript"],
  };
};
