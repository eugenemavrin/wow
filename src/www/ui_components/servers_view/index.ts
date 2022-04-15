/*
  Copyright 2020 The Outline Authors

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

import {Polymer} from "@polymer/polymer/lib/legacy/polymer-fn.js";
import {html} from "@polymer/polymer/lib/utils/html-tag.js";

import "./server_list";
import "./server_card";
import "./server_connection_indicator";
import {ServerListItem} from "./server_list";

Polymer({
  _template: html`
    <style>
      :host {
        margin: 0 !important;
        width: 100%;
        height: 100%;
        /* Use vh, as % does not work in iOS. |header-height|+|server-margin| = 64px.
         * Subtract |header-height| to fix iOS padding, and |server-margin| to fix scrolling in Android.
         */
        height: -webkit-calc(100vh - 64px);
        font-size: 14px;
        line-height: 20px;
      }
      :host a {
        color: var(--medium-green);
        text-decoration: none;
      }
      /* Do not remove, this allows the hidden attribute to work with flex displays. */
      [hidden] {
        display: none !important;
      }
      .server-list-container {
        background-color: #efefef;
        width: 100%;
        height: 100%;
      }
      .flex-column-container {
        margin: 0 auto;
        width: 100%;
        height: 100%;
        text-align: center;
        display: -webkit-flex;
        -webkit-flex-wrap: wrap;
        flex-wrap: wrap;
        -webkit-flex-direction: column;
        flex-direction: column;
        -webkit-flex: 1;
        flex: 1;
        justify-content: center;
      }
      .header {
        font-size: 20px;
        color: rgba(0, 0, 0, 0.87);
        line-height: 32px;
        margin-top: 34px;
      }
      .subtle {
        color: rgba(0, 0, 0, 0.54);
      }
      .footer {
        margin: 0;
        padding: 24px 0 16px 0;
        border-top-width: 1px;
        border-top-color: rgba(0, 0, 0, 0.08);
        border-top-style: solid;
      }
      paper-button {
        display: flex;
        flex-direction: column;
        text-transform: none;
        outline: none; /* Remove outline for Safari. */
      }
    </style>
    <div class="server-list-container">
      <div class="flex-column-container" hidden$="[[!shouldShowZeroState]]">
        <div class="flex-column-container">
          <paper-button noink="" on-tap="_requestPromptAddServer">
            <server-connection-viz state="INITIAL" root-path="[[rootPath]]" expanded=""></server-connection-viz>
            <div class="header">[[localize('server-add')]]</div>
            <div class="subtle">[[localize('server-add-zero-state-instructions')]]</div>
          </paper-button>
        </div>
        <div
          class="footer subtle"
          inner-h-t-m-l="[[localize('server-create-your-own-zero-state', 'breakLine', '<br/>', 'openLink', '<a href=https://s3.amazonaws.com/outline-vpn/index.html>', 'closeLink', '</a>')]]"
        ></div>
      </div>
      <user-comms-dialog
        id="autoConnectDialog"
        localize="[[localize]]"
        title-localization-key="auto-connect-dialog-title"
        detail-localization-key="auto-connect-dialog-detail"
        fire-event-on-hide="AutoConnectDialogDismissed"
      ></user-comms-dialog>
      <server-list
        id="serverList"
        hidden$="[[shouldShowZeroState]]"
        servers="[[servers]]"
        localize="[[localize]]"
        root-path="[[rootPath]]"
      ></server-list>
    </div>
  `,

  is: "servers-view",

  properties: {
    localize: Function,
    rootPath: String,
    servers: Array,
    shouldShowZeroState: {
      type: Boolean,
      computed: "_computeShouldShowZeroState(servers)",
    },
  },

  _computeShouldShowZeroState(servers: ServerListItem[]) {
    return !!servers ? servers.length === 0 : false;
  },

  _requestPromptAddServer() {
    this.fire("PromptAddServerRequested", {});
  },
});
