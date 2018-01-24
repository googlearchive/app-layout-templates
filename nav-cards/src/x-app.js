import '../../../iron-icons/iron-icons.js';
import '../../../paper-drawer-panel/paper-drawer-panel.js';
import '../../../paper-header-panel/paper-header-panel.js';
import '../../../paper-icon-button/paper-icon-button.js';
import '../../../paper-material/paper-material.js';
import '../../../paper-toolbar/paper-toolbar.js';
const $_documentContainer = document.createElement('div');
$_documentContainer.setAttribute('style', 'display: none;');

$_documentContainer.innerHTML = `<dom-module id="x-app">

  

  <template>

    <paper-drawer-panel id="drawerPanel" responsive-width="1280px">

      <div class="nav" drawer="">
        <!-- Nav Content -->
      </div>

      <paper-header-panel class="main" main="" mode="waterfall">

        <!-- Main Toolbar -->
        <paper-toolbar>
          <paper-icon-button icon="menu" paper-drawer-toggle=""></paper-icon-button>
        </paper-toolbar>

        <!-- Main Content -->
        <div class="content">
          <paper-material></paper-material>
          <paper-material></paper-material>
          <paper-material></paper-material>
          <paper-material></paper-material>
          <paper-material></paper-material>
          <paper-material></paper-material>
          <paper-material></paper-material>
        </div>

      </paper-header-panel>

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

Left Nav + Cards

 */
Polymer({

  is: 'x-app'

});
