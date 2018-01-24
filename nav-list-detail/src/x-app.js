import '../../../iron-icons/iron-icons.js';
import '../../../paper-drawer-panel/paper-drawer-panel.js';
import '../../../paper-header-panel/paper-header-panel.js';
import '../../../paper-icon-button/paper-icon-button.js';
import '../../../paper-item/paper-item.js';
import '../../../paper-menu/paper-menu.js';
import '../../../paper-toolbar/paper-toolbar.js';
const $_documentContainer = document.createElement('div');
$_documentContainer.setAttribute('style', 'display: none;');

$_documentContainer.innerHTML = `<dom-module id="x-app">

  

  <template>

    <paper-drawer-panel id="navDrawerPanel" responsive-width="1280px">

      <div class="nav" drawer="">
        <!-- Nav Content -->
      </div>

      <paper-drawer-panel id="mainDrawerPanel" class="main-drawer-panel" main="" responsive-width="600px" drawer-width="[[_computeListWidth(_isMobile)]]" drawer-toggle-attribute="list-toggle" narrow="{{_isMobile}}">

        <paper-header-panel class="list-panel" drawer="">

          <!-- List Toolbar -->
          <paper-toolbar>
            <paper-icon-button icon="menu" paper-drawer-toggle=""></paper-icon-button>
          </paper-toolbar>

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

        <paper-header-panel class="content-panel" main="">

          <!-- Main Toolbar -->
          <paper-toolbar>
            <paper-icon-button icon="arrow-back" list-toggle=""></paper-icon-button>
          </paper-toolbar>

          <!-- Main Content -->
          <div class="content"></div>

        </paper-header-panel>

      </paper-drawer-panel>

    </paper-drawer-panel>

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

Left Nav + List + Detail

 */
Polymer({

  is: 'x-app',

  _computeListWidth: function(isMobile) {
    // when in mobile screen size, make the list be 100% width to cover the whole screen
    return isMobile ? '100%' : '33%';
  },

  _listTap: function() {
    this.$.mainDrawerPanel.closeDrawer();
  }

});
