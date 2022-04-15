/* tslint:disable */
/*
  Copyright 2022 The Outline Authors

  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
*/

import "./index";

import {html} from "lit";

import {ServerConnectionIndicator, ServerConnectionState} from "./index";

export default {
  title: "Servers View/Server Connection Indicator",
  component: "server-connection-indicator",
  args: {
    state: ServerConnectionState.INITIAL,
    expanded: false,
  },
  argTypes: {
    state: {
      control: "select",
      options: Object.keys(ServerConnectionState),
    },
    expanded: {
      control: "boolean",
    },
  },
};

export const Example = ({state, expanded}: ServerConnectionIndicator) =>
  html`
    <server-connection-indicator
      .state="${state ?? ServerConnectionState.INITIAL}"
      .expanded="${expanded}"
    ></server-connection-indicator>
  `;
