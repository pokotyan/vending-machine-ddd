const path = require('path');

module.exports = {
  // モード値を production に設定すると最適化された状態で、
  // development に設定するとソースマップ有効でJSファイルが出力される
  mode: 'development',
  // メインとなるJavaScriptファイル（エントリーポイント）
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        // 拡張子 .ts .jsの場合
        test: /\.ts$|\.js$/,
        // TypeScript をコンパイルする
        use: 'ts-loader'
      }
    ]
  },
  // import 文で .ts .js ファイルを解決するため
  resolve: {
    extensions: [
      '.ts', '.js'
    ]
  }
};
