import '../../../iron-media-query/iron-media-query.js';
import '../../../iron-icons/iron-icons.js';
import '../../../paper-drawer-panel/paper-drawer-panel.js';
import '../../../paper-header-panel/paper-header-panel.js';
import '../../../paper-icon-button/paper-icon-button.js';
import '../../../paper-item/paper-item.js';
import '../../../paper-material/paper-material.js';
import '../../../paper-menu/paper-menu.js';
import '../../../paper-toolbar/paper-toolbar.js';
const $_documentContainer = document.createElement('div');
$_documentContainer.setAttribute('style', 'display: none;');

$_documentContainer.innerHTML = `<dom-module id="x-app">

  

  <template>

    <paper-drawer-panel id="drawerPanel" responsive-width="1024px" drawer-width="{{drawerWidth}}">

      <paper-header-panel class="list-panel" drawer="" mode="seamed">

        <!-- List Toolbar -->
        <paper-toolbar class\$="{{toolbarClass}}"></paper-toolbar>

        <!-- List -->
        <paper-menu class="list" on-iron-activate="_listTap">
          <paper-item></paper-item>
          <paper-item></paper-item>
          <paper-item></paper-item>
          <paper-item></paper-item>
          <paper-item></paper-item>
          <paper-item></paper-item>
          <paper-item></paper-item>
          <paper-item></paper-item>
          <paper-item></paper-item>
          <paper-item></paper-item>
          <paper-item></paper-item>
          <paper-item></paper-item>
          <paper-item></paper-item>
          <paper-item></paper-item>
          <paper-item></paper-item>
          <paper-item></paper-item>
          <paper-item></paper-item>
          <paper-item></paper-item>
          <paper-item></paper-item>
          <paper-item></paper-item>
        </paper-menu>

      </paper-header-panel>

      <paper-header-panel class="main-panel" main="" mode="{{mainMode}}">

        <!-- Main Toolbar -->
        <paper-toolbar class\$="{{toolbarClass}}">
          <paper-icon-button icon="menu" paper-drawer-toggle=""></paper-icon-button>
        </paper-toolbar>

        <div class="content">

          <paper-material>
            <!-- Card Content -->
          </paper-material>

        </div>

      </paper-header-panel>

    </paper-drawer-panel>

    <iron-media-query query="(max-width: 780px)" query-matches="{{_isMobile}}"></iron-media-query>

  </template>

  

</dom-module>`;

document.head.appendChild($_documentContainer);

/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
/*

Extended Header + List Left + Card Over Toolbar

 */
Polymer({

  is: 'x-app',

  properties: {

    _isMobile: {
      type: Boolean,
      observer: '_isMobileChanged'
    }

  },

  _listTap: function() {
    this.$.drawerPanel.closeDrawer();
  },

  _isMobileChanged: function(isMobile) {
    this.mainMode = isMobile ? 'seamed' : 'cover';
    this.drawerWidth = isMobile ? '100%' : '320px';
    this.toolbarClass = isMobile ? '' : 'tall';
    this.updateStyles();
  }

});
