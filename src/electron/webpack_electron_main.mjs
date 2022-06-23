// Copyright 2021 The Outline Authors
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import path from 'path';
import {DefinePlugin} from 'webpack';

export default ({networkStack}) => ({
  entry: './src/electron/index.ts',
  target: 'electron-main',
  node: {
    __dirname: false,
    __filename: false,
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [
    new DefinePlugin({
      networkStack,
    }),
  ],
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, '../../build/electron/electron'),
  },
});
