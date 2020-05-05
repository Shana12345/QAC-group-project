(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--\n  ~ /*\n  ~  * Copyright 2016-2017 the original author or authors.\n  ~  *\n  ~  * Licensed under the Apache License, Version 2.0 (the \"License\");\n  ~  * you may not use this file except in compliance with the License.\n  ~  * You may obtain a copy of the License at\n  ~  *\n  ~  *      http://www.apache.org/licenses/LICENSE-2.0\n  ~  *\n  ~  * Unless required by applicable law or agreed to in writing, software\n  ~  * distributed under the License is distributed on an \"AS IS\" BASIS,\n  ~  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n  ~  * See the License for the specific language governing permissions and\n  ~  * limitations under the License.\n  ~  */\n  -->\n\n<div class=\"container-fluid\">\n\n<nav class=\"navbar navbar-default \" role=\"navigation\">\n  <div class=\"container-fluid\">\n  <div class=\"navbar-header\">\n    <a class=\"navbar-brand\" href=\"#\"><span></span></a>\n  </div>\n\n    <ul class=\"nav navbar-nav\">\n      <li>\n        <a routerLink=\"welcome\" title=\"home page\">\n          <span class=\"glyphicon glyphicon-home\" aria-hidden=\"true\"></span>\n          <span>Home</span>\n        </a>\n      </li>\n\n      <li class=\"dropdown\">\n        <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\"\n           aria-haspopup=\"true\" aria-expanded=\"false\">Owners<span class=\"caret\"></span>\n        </a>\n        <ul class=\"dropdown-menu\">\n          <li><a routerLink=\"/owners\"><span class=\"glyphicon glyphicon-search\"\n                                            aria-hidden=\"true\"></span><span> All</span></a></li>\n          <li><a routerLink=\"/owners/add\"><span class=\"glyphicon glyphicon-plus\" aria-hidden=\"true\"></span><span> Add New</span></a>\n          </li>\n        </ul>\n      </li>\n      <li class=\"dropdown\">\n        <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\"\n           aria-haspopup=\"true\" aria-expanded=\"false\">Veterinarians<span class=\"caret\"></span>\n        </a>\n        <ul class=\"dropdown-menu\">\n          <li><a routerLink=\"/vets\"><span class=\"glyphicon glyphicon-search\" aria-hidden=\"true\"></span><span> All</span></a>\n          </li>\n          <li><a routerLink=\"/vets/add\"><span class=\"glyphicon glyphicon-plus\"\n                                              aria-hidden=\"true\"></span><span> Add New</span></a></li>\n        </ul>\n      </li>\n      <li>\n        <a routerLink=\"/pettypes\" routerLinkActive=\"active\" title=\"pettypes\">\n          <span class=\"glyphicon glyphicon-th-list\" aria-hidden=\"true\"></span>\n          <span>Pet Types</span>\n        </a>\n      </li>\n      <li>\n        <a routerLink=\"/specialties\" routerLinkActive=\"active\" title=\"specialties\">\n          <span class=\"glyphicon glyphicon-th-list\" aria-hidden=\"true\"></span>\n          <span>Specialties</span>\n        </a>\n      </li>\n    </ul>\n\n  </div>\n</nav>\n\n</div>\n\n\n\n<router-outlet></router-outlet>\n\n<br/>\n<br/>\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-12 text-center\"><img src=\"./assets/images/angular.png\"\n                                         alt=\"Angular\" height=\"80\" width=\"80\"/>\n      <img src=\"./assets/images/spring-pivotal-logo.png\"\n           alt=\"Sponsored by Pivotal\"/></div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/owners/owner-add/owner-add.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/owners/owner-add/owner-add.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--\n  ~ /*\n  ~  * Copyright 2016-2017 the original author or authors.\n  ~  *\n  ~  * Licensed under the Apache License, Version 2.0 (the \"License\");\n  ~  * you may not use this file except in compliance with the License.\n  ~  * You may obtain a copy of the License at\n  ~  *\n  ~  *      http://www.apache.org/licenses/LICENSE-2.0\n  ~  *\n  ~  * Unless required by applicable law or agreed to in writing, software\n  ~  * distributed under the License is distributed on an \"AS IS\" BASIS,\n  ~  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n  ~  * See the License for the specific language governing permissions and\n  ~  * limitations under the License.\n  ~  */\n  -->\n\n<div class=\"container-fluid\">\n  <div class=\"container xd-container\">\n    <h2>\n      New Owner\n    </h2>\n    <form (ngSubmit)=\"onSubmit(ownerForm.value)\" #ownerForm=\"ngForm\" class=\"form-horizontal\">\n      <div class=\"form-group\" hidden=\"true\">\n        <input type=\"text\" hidden=\"true\" class=\"form-control\" id=\"id\" [(ngModel)]=\"owner.id\" name=\"id\"/>\n      </div>\n      <div class=\"form-group has-feedback\" [class.has-success]=\"firstName.dirty && firstName.valid\" [class.has-error]=\"firstName.dirty &&  !firstName.valid\">\n        <label for=\"firstName\" class=\"col-sm-2 control-label\">First Name</label>\n        <div class=\"col-sm-10\">\n          <input type=\"text\" class=\"form-control\" id=\"firstName\" [(ngModel)]=\"owner.firstName\" minlength=\"2\" required name=\"firstName\" #firstName=\"ngModel\"/>\n          <span class=\"glyphicon form-control-feedback\" [class.glyphicon-ok]=\"firstName.valid\" [class.glyphicon-remove]=\"!firstName.valid\" aria-hidden=\"true\"></span>\n          <span class=\"help-block\" *ngIf=\"firstName.dirty && firstName.hasError('required')\">First name is required</span>\n          <span class=\"help-block\" *ngIf=\"firstName.dirty && firstName.hasError('minlength')\">First name must be at least 2 characters long</span>\n        </div>\n      </div>\n      <div class=\"form-group has-feedback\" [class.has-success]=\"lastName.dirty && lastName.valid\" [class.has-error]=\"lastName.dirty && !lastName.valid\">\n        <label for=\"lastName\" class=\"col-sm-2 control-label\">Last Name</label>\n        <div class=\"col-sm-10\">\n          <input type=\"text\" class=\"form-control\" id=\"lastName\" [(ngModel)]=\"owner.lastName\" name=\"lastName\" minlength=\"2\" required #lastName=\"ngModel\"/>\n          <span class=\"glyphicon form-control-feedback\" [class.glyphicon-ok]=\"lastName.valid\" [class.glyphicon-remove]=\"!lastName.valid\" aria-hidden=\"true\"></span>\n          <span class=\"help-block\" *ngIf=\"lastName.dirty && lastName.hasError('required')\">Last name is required</span>\n          <span class=\"help-block\" *ngIf=\"lastName.dirty && lastName.hasError('minlength')\">Last name must be at least 2 characters long</span>\n        </div>\n      </div>\n      <div class=\"form-group has-feedback\" [class.has-success]=\"address.dirty && address.valid\" [class.has-error]=\"address.dirty && !address.valid\">\n        <label for=\"address\" class=\"col-sm-2 control-label\">Address</label>\n        <div class=\"col-sm-10\">\n          <input type=\"text\" class=\"form-control\" id=\"address\" [(ngModel)]=\"owner.address\" name=\"address\" required #address=\"ngModel\"/>\n          <span class=\"glyphicon form-control-feedback\" [class.glyphicon-ok]=\"address.valid\" [class.glyphicon-remove]=\"!address.valid\" aria-hidden=\"true\"></span>\n          <span class=\"help-block\" *ngIf=\"address.dirty && address.hasError('required')\">Address is required</span>\n        </div>\n      </div>\n      <div class=\"form-group has-feedback\" [class.has-success]=\"city.dirty && city.valid\" [class.has-error]=\"city.dirty && !city.valid\">\n        <label for=\"city\" class=\"col-sm-2 control-label\">City</label>\n        <div class=\"col-sm-10\">\n          <input type=\"text\" class=\"form-control\" id=\"city\" [(ngModel)]=\"owner.city\" name=\"city\" required #city=\"ngModel\"/>\n          <span class=\"glyphicon form-control-feedback\" [class.glyphicon-ok]=\"city.valid\" [class.glyphicon-remove]=\"!city.valid\" aria-hidden=\"true\"></span>\n          <span class=\"help-block\" *ngIf=\"city.dirty && city.hasError('required')\">City is required</span>\n        </div>\n      </div>\n      <div class=\"form-group has-feedback\" [class.has-success]=\"telephone.dirty && telephone.valid\" [class.has-error]=\"telephone.dirty && !telephone.valid\">\n        <label for=\"telephone\" class=\"col-sm-2 control-label\">Telephone</label>\n        <div class=\"col-sm-10\">\n          <input type=\"text\" class=\"form-control\" id=\"telephone\" [(ngModel)]=\"owner.telephone\" name=\"telephone\" required maxlength=\"10\" pattern=\"^[0-9]{0,10}$\" #telephone=\"ngModel\"/>\n          <span class=\"glyphicon form-control-feedback\" [class.glyphicon-ok]=\"telephone.valid\" [class.glyphicon-remove]=\"!telephone.valid\" aria-hidden=\"true\"></span>\n          <span class=\"help-block\" *ngIf=\"telephone.dirty && telephone.hasError('required')\">Phone number is required</span>\n          <span class=\"help-block\" *ngIf=\"telephone.dirty && telephone.hasError('maxlength')\">Phone number cannot be more than 10 digits long</span>\n          <span class=\"help-block\" *ngIf=\"telephone.dirty && telephone.hasError('pattern')\" >Phone number only accept digits</span>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <div class=\"col-sm-offset-2 col-sm-10\">\n          <button class=\"btn btn-default\" type=\"button\" (click)=\"gotoOwnersList()\">Back</button>\n          <button class=\"btn btn-default\" type=\"submit\" [disabled]=\"!ownerForm.valid\">Add Owner</button>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/owners/owner-detail/owner-detail.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/owners/owner-detail/owner-detail.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--\n  ~ /*\n  ~  * Copyright 2016-2017 the original author or authors.\n  ~  *\n  ~  * Licensed under the Apache License, Version 2.0 (the \"License\");\n  ~  * you may not use this file except in compliance with the License.\n  ~  * You may obtain a copy of the License at\n  ~  *\n  ~  *      http://www.apache.org/licenses/LICENSE-2.0\n  ~  *\n  ~  * Unless required by applicable law or agreed to in writing, software\n  ~  * distributed under the License is distributed on an \"AS IS\" BASIS,\n  ~  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n  ~  * See the License for the specific language governing permissions and\n  ~  * limitations under the License.\n  ~  */\n  -->\n\n<div class=\"container-fluid\">\n  <div class=\"container xd-container\">\n\n    <h2>Owner Information</h2>\n\n\n    <table class=\"table table-striped\">\n      <tr>\n        <th>Name</th>\n        <td><b>{{ owner.firstName }} {{ owner.lastName }}</b></td>\n      </tr>\n      <tr>\n        <th>Address</th>\n        <td>{{ owner.address }}</td>\n      </tr>\n      <tr>\n        <th>City</th>\n        <td>{{ owner.city }}</td>\n      </tr>\n      <tr>\n        <th>Telephone</th>\n        <td>{{ owner.telephone }}</td>\n      </tr>\n    </table>\n\n    <button class=\"btn btn-default\" (click)=\"gotoOwnersList()\">< Back</button>\n    <button class=\"btn btn-default\" (click)=\"editOwner()\">Edit Owner</button>\n    <button class=\"btn btn-default\" (click)=\"addPet(owner)\">Add New Pet</button>\n\n    <br/>\n    <br/>\n    <br/>\n    <h2>Pets and Visits</h2>\n\n    <table class=\"table table-striped\">\n      <tr>\n        <app-pet-list *ngFor=\"let pet of owner.pets\" [pet]=\"pet\"></app-pet-list>\n      </tr>\n    </table>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/owners/owner-edit/owner-edit.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/owners/owner-edit/owner-edit.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--\n  ~ /*\n  ~  * Copyright 2016-2017 the original author or authors.\n  ~  *\n  ~  * Licensed under the Apache License, Version 2.0 (the \"License\");\n  ~  * you may not use this file except in compliance with the License.\n  ~  * You may obtain a copy of the License at\n  ~  *\n  ~  *      http://www.apache.org/licenses/LICENSE-2.0\n  ~  *\n  ~  * Unless required by applicable law or agreed to in writing, software\n  ~  * distributed under the License is distributed on an \"AS IS\" BASIS,\n  ~  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n  ~  * See the License for the specific language governing permissions and\n  ~  * limitations under the License.\n  ~  */\n  -->\n\n<div class=\"container-fluid\">\n  <div class=\"container xd-container\">\n    <h2>\n      Edit Owner\n    </h2>\n    <div *ngIf=\"errorMessage\" class=\"alert alert-danger\">\n      {{ errorMessage }}\n    </div>\n    <form (ngSubmit)=\"onSubmit(ownerForm.value)\" #ownerForm=\"ngForm\" class=\"form-horizontal\">\n      <div class=\"form-group\" hidden=\"true\">\n        <input type=\"text\" hidden=\"true\" class=\"form-control\" id=\"id\" [(ngModel)]=\"owner.id\" name=\"id\"/>\n      </div>\n      <div class=\"form-group has-feedback\" [class.has-success]=\"firstName.valid\" [class.has-error]=\"!firstName.valid\">\n        <label for=\"firstName\" class=\"col-sm-2 control-label\">First Name</label>\n        <div class=\"col-sm-10\">\n          <input type=\"text\" class=\"form-control\" id=\"firstName\" [(ngModel)]=\"owner.firstName\" minlength=\"2\" required name=\"firstName\" #firstName=\"ngModel\"/>\n          <span class=\"glyphicon form-control-feedback\" [class.glyphicon-ok]=\"firstName.valid\" [class.glyphicon-remove]=\"!firstName.valid\" aria-hidden=\"true\"></span>\n          <span class=\"help-block\" *ngIf=\"firstName.dirty && firstName.hasError('required')\">First name is required</span>\n          <span class=\"help-block\" *ngIf=\"firstName.dirty && firstName.hasError('minlength')\">First name must be at least 2 characters long</span>\n        </div>\n      </div>\n      <div class=\"form-group has-feedback\" [class.has-success]=\"lastName.valid\" [class.has-error]=\"!lastName.valid\">\n        <label for=\"lastName\" class=\"col-sm-2 control-label\">Last Name</label>\n        <div class=\"col-sm-10\">\n          <input type=\"text\" class=\"form-control\" id=\"lastName\" [(ngModel)]=\"owner.lastName\" name=\"lastName\" minlength=\"2\" required #lastName=\"ngModel\"/>\n          <span class=\"glyphicon form-control-feedback\" [class.glyphicon-ok]=\"lastName.valid\" [class.glyphicon-remove]=\"!lastName.valid\" aria-hidden=\"true\"></span>\n          <span class=\"help-block\" *ngIf=\"lastName.dirty && lastName.hasError('required')\">Last name is required</span>\n          <span class=\"help-block\" *ngIf=\"lastName.dirty && lastName.hasError('minlength')\">Last name must be at least 2 characters long</span>\n        </div>\n      </div>\n      <div class=\"form-group has-feedback\" [class.has-success]=\"address.valid\" [class.has-error]=\"!address.valid\">\n        <label for=\"address\" class=\"col-sm-2 control-label\">Address</label>\n        <div class=\"col-sm-10\">\n          <input type=\"text\" class=\"form-control\" id=\"address\" [(ngModel)]=\"owner.address\" name=\"address\" required #address=\"ngModel\"/>\n          <span class=\"glyphicon form-control-feedback\" [class.glyphicon-ok]=\"address.valid\" [class.glyphicon-remove]=\"!address.valid\" aria-hidden=\"true\"></span>\n          <span class=\"help-block\" *ngIf=\"address.dirty && address.hasError('required')\">Address is required</span>\n        </div>\n      </div>\n      <div class=\"form-group has-feedback\" [class.has-success]=\"city.valid\" [class.has-error]=\"!city.valid\">\n        <label for=\"city\" class=\"col-sm-2 control-label\">City</label>\n        <div class=\"col-sm-10\">\n          <input type=\"text\" class=\"form-control\" id=\"city\" [(ngModel)]=\"owner.city\" name=\"city\" required #city=\"ngModel\"/>\n          <span class=\"glyphicon form-control-feedback\" [class.glyphicon-ok]=\"city.valid\" [class.glyphicon-remove]=\"!city.valid\" aria-hidden=\"true\"></span>\n          <span class=\"help-block\" *ngIf=\"city.dirty && city.hasError('required')\">City is required</span>\n        </div>\n      </div>\n      <div class=\"form-group has-feedback\" [class.has-success]=\"telephone.valid\" [class.has-error]=\"!telephone.valid\">\n        <label for=\"telephone\" class=\"col-sm-2 control-label\">Telephone</label>\n        <div class=\"col-sm-10\">\n          <input type=\"text\" class=\"form-control\" id=\"telephone\" [(ngModel)]=\"owner.telephone\" name=\"telephone\" required maxlength=\"10\" pattern=\"^[0-9]{0,10}$\" #telephone=\"ngModel\"/>\n          <span class=\"glyphicon form-control-feedback\" [class.glyphicon-ok]=\"telephone.valid\" [class.glyphicon-remove]=\"!telephone.valid\" aria-hidden=\"true\"></span>\n          <span class=\"help-block\" *ngIf=\"telephone.dirty && telephone.hasError('required')\">Phone number is required</span>\n          <span class=\"help-block\" *ngIf=\"telephone.dirty && telephone.hasError('maxlength')\">Phone number cannot be more than 10 digits long</span>\n          <span class=\"help-block\" *ngIf=\"telephone.dirty && telephone.hasError('pattern')\" >Phone number only accept digits</span>\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <div class=\"col-sm-offset-2 col-sm-10\">\n          <button class=\"btn btn-default\" (click)=\"gotoOwnerDetail(owner)\">Back</button>\n          <button type=\"submit\" [disabled]=\"!ownerForm.valid\" class=\"btn btn-default\">Update Owner</button>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/owners/owner-list/owner-list.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/owners/owner-list/owner-list.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--\n  ~ /*\n  ~  * Copyright 2016-2017 the original author or authors.\n  ~  *\n  ~  * Licensed under the Apache License, Version 2.0 (the \"License\");\n  ~  * you may not use this file except in compliance with the License.\n  ~  * You may obtain a copy of the License at\n  ~  *\n  ~  *      http://www.apache.org/licenses/LICENSE-2.0\n  ~  *\n  ~  * Unless required by applicable law or agreed to in writing, software\n  ~  * distributed under the License is distributed on an \"AS IS\" BASIS,\n  ~  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n  ~  * See the License for the specific language governing permissions and\n  ~  * limitations under the License.\n  ~  */\n  -->\n\n<div class=\"container-fluid\">\n  <div class=\"container xd-container\">\n    <h2>Owners</h2>\n    <div class=\"table-responsive\">\n      <table class=\"table table-striped\">\n        <thead>\n        <tr>\n          <th>Name</th>\n          <th>Address</th>\n          <th>City</th>\n          <th>Telephone</th>\n          <th>Pets</th>\n        </tr>\n        </thead>\n\n        <tbody>\n        <tr *ngFor=\"let owner of owners\">\n          <td class=\"ownerFullName\"><a routerLink=\"/owners/{{owner.id}}\" routerLinkActive=\"active\"\n                                       (click)=\"onSelect(owner)\">{{ owner.firstName }} {{ owner.lastName }}</a></td>\n          <td>{{ owner.address }}</td>\n          <td>{{ owner.city }}</td>\n          <td>{{ owner.telephone }}</td>\n          <td>\n        <tr *ngFor=\"let pet of owner.pets\">\n          {{ pet.name }}\n        </tr>\n        </td>\n        </tr>\n        </tbody>\n      </table>\n      <div>\n        <button class=\"btn btn-default\" (click)=\"addOwner()\">Add Owner</button>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/parts/page-not-found/page-not-found.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/parts/page-not-found/page-not-found.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--\n  ~ /*\n  ~  * Copyright 2016-2017 the original author or authors.\n  ~  *\n  ~  * Licensed under the Apache License, Version 2.0 (the \"License\");\n  ~  * you may not use this file except in compliance with the License.\n  ~  * You may obtain a copy of the License at\n  ~  *\n  ~  *      http://www.apache.org/licenses/LICENSE-2.0\n  ~  *\n  ~  * Unless required by applicable law or agreed to in writing, software\n  ~  * distributed under the License is distributed on an \"AS IS\" BASIS,\n  ~  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n  ~  * See the License for the specific language governing permissions and\n  ~  * limitations under the License.\n  ~  */\n  -->\n\n<h1>Oops! Page not found !</h1>\n\n<div class=\"container-fluid\">\n  <div class=\"container xd-container\">\n\n    <h2>Not Found - 404 error</h2>\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <img class=\"img-responsive\" src=\"./assets/images/pets.png\" alt=\"pets logo\"/>\n      </div>\n    </div>\n  </div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/parts/welcome/welcome.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/parts/welcome/welcome.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--\n  ~ /*\n  ~  * Copyright 2016-2017 the original author or authors.\n  ~  *\n  ~  * Licensed under the Apache License, Version 2.0 (the \"License\");\n  ~  * you may not use this file except in compliance with the License.\n  ~  * You may obtain a copy of the License at\n  ~  *\n  ~  *      http://www.apache.org/licenses/LICENSE-2.0\n  ~  *\n  ~  * Unless required by applicable law or agreed to in writing, software\n  ~  * distributed under the License is distributed on an \"AS IS\" BASIS,\n  ~  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n  ~  * See the License for the specific language governing permissions and\n  ~  * limitations under the License.\n  ~  */\n  -->\n\n<h1>Welcome to Petclinic</h1>\n\n<div class=\"container-fluid\">\n  <div class=\"container xd-container\">\n\n    <h2>Welcome</h2>\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <img class=\"img-responsive\" src=\"./assets/images/pets.png\" alt=\"pets logo\"/>\n      </div>\n    </div>\n  </div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pets/pet-add/pet-add.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pets/pet-add/pet-add.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--\n  ~ /*\n  ~  * Copyright 2016-2017 the original author or authors.\n  ~  *\n  ~  * Licensed under the Apache License, Version 2.0 (the \"License\");\n  ~  * you may not use this file except in compliance with the License.\n  ~  * You may obtain a copy of the License at\n  ~  *\n  ~  *      http://www.apache.org/licenses/LICENSE-2.0\n  ~  *\n  ~  * Unless required by applicable law or agreed to in writing, software\n  ~  * distributed under the License is distributed on an \"AS IS\" BASIS,\n  ~  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n  ~  * See the License for the specific language governing permissions and\n  ~  * limitations under the License.\n  ~  */\n  -->\n\n<div class=\"container-fluid\">\n  <div class=\"container xd-container\">\n    <h2>\n      Add Pet\n    </h2>\n    <form class=\"form-horizontal\" (ngSubmit)=\"onSubmit(petForm.value)\" #petForm=\"ngForm\">\n      <div class=\"form-group\" hidden=\"true\">\n        <input type=\"text\" hidden=\"true\" class=\"form-control\" id=\"id\" [(ngModel)]=\"pet.id\" name=\"id\"/>\n        <input type=\"text\" hidden=\"true\" class=\"form-control\" id=\"owner\" [(ngModel)]=\"pet.owner\" name=\"owner\"/>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"owner\" class=\"col-sm-2 control-label\">Owner</label>\n        <div class=\"col-sm-10\">\n          <input id=\"owner_name\" name=\"owner_name\" class=\"form-control\" type=\"text\"\n                 value=\"{{ currentOwner.firstName }} {{ currentOwner.lastName }}\" readonly/>\n        </div>\n      </div>\n      <br/>\n      <div class=\"form-group \">\n        <label for=\"name\" class=\"col-sm-2 control-label\">Name</label>\n        <div class=\"col-sm-10\">\n          <input id=\"name\" name=\"name\" class=\"form-control\" type=\"text\" [(ngModel)]=\"pet.name\"/>\n        </div>\n      </div>\n      <div class=\"form-group \">\n        <label class=\"col-sm-2 control-label\">Birth Date</label>\n        <div class=\"col-sm-10\">\n          <input matInput [matDatepicker]=\"birthDateDatepicker\" [ngModel]=\"pet.birthDate | date:'yyyy-MM-dd'\" name=\"birthDate\">\n          <mat-datepicker-toggle matSuffix [for]=\"birthDateDatepicker\"></mat-datepicker-toggle>\n          <mat-datepicker #birthDateDatepicker></mat-datepicker>\n        </div>\n      </div>\n      <div class=\"control-group\">\n        <div class=\"form-group \">\n          <label for=\"type\" class=\"col-sm-2 control-label\">Type </label>\n          <div class=\"col-sm-10\">\n            <select id=\"type\" name=\"type\" class=\"form-control\" [(ngModel)]=\"pet.type\">\n              <option *ngFor=\"let type of petTypes\"\n                      [ngValue]=\"type\">{{ type.name }}\n              </option>\n            </select>\n          </div>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <div class=\"col-sm-offset-2 col-sm-10\">\n          <br/>\n          <button class=\"btn btn-default\" type=\"button\" (click)=\"gotoOwnerDetail()\">< Back</button>\n          <button class=\"btn btn-default\" type=\"submit\">Save Pet</button>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pets/pet-edit/pet-edit.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pets/pet-edit/pet-edit.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--\n  ~ /*\n  ~  * Copyright 2016-2017 the original author or authors.\n  ~  *\n  ~  * Licensed under the Apache License, Version 2.0 (the \"License\");\n  ~  * you may not use this file except in compliance with the License.\n  ~  * You may obtain a copy of the License at\n  ~  *\n  ~  *      http://www.apache.org/licenses/LICENSE-2.0\n  ~  *\n  ~  * Unless required by applicable law or agreed to in writing, software\n  ~  * distributed under the License is distributed on an \"AS IS\" BASIS,\n  ~  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n  ~  * See the License for the specific language governing permissions and\n  ~  * limitations under the License.\n  ~  */\n  -->\n\n<div class=\"container-fluid\">\n  <div class=\"container xd-container\">\n\n    <h2>\n      Pet\n    </h2>\n    <form class=\"form-horizontal\" (ngSubmit)=\"onSubmit(petForm.value)\" #petForm=\"ngForm\">\n      <div class=\"form-group\" hidden=\"true\">\n        <input type=\"text\" hidden=\"true\" class=\"form-control\" id=\"id\" [(ngModel)]=\"pet.id\" name=\"id\"/>\n        <input type=\"text\" hidden=\"true\" class=\"form-control\" id=\"owner\" [(ngModel)]=\"pet.owner\" name=\"owner\"/>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"owner\" class=\"col-sm-2 control-label\">Owner</label>\n        <div class=\"col-sm-10\">\n          <input id=\"owner_name\" name=\"owner_name\" class=\"form-control\" type=\"text\"\n                 value=\"{{ currentOwner.firstName }} {{ currentOwner.lastName }}\" readonly/>\n        </div>\n      </div>\n      <br/>\n      <div class=\"form-group \">\n        <label for=\"name\" class=\"col-sm-2 control-label\">Name</label>\n        <div class=\"col-sm-10\">\n          <input id=\"name\" name=\"name\" class=\"form-control\" type=\"text\" [(ngModel)]=\"pet.name\"/>\n        </div>\n      </div>\n      <div class=\"form-group \">\n        <label class=\"col-sm-2 control-label\">Birth Date</label>\n        <input matInput [matDatepicker]=\"birthDateDatepicker\" [ngModel]=\"pet.birthDate | date:'yyyy-MM-dd'\" name=\"birthDate\">\n        <mat-datepicker-toggle matSuffix [for]=\"birthDateDatepicker\"></mat-datepicker-toggle>\n        <mat-datepicker #birthDateDatepicker></mat-datepicker>\n      </div>\n      <div class=\"control-group\">\n        <div class=\"form-group \">\n          <label for=\"type\" class=\"col-sm-2 control-label\">Type </label>\n          <div class=\"col-sm-10\">\n            <div class=\"col-sm-2\">\n              <input id=\"type1\" name=\"type1\" class=\"form-control\" type=\"text\" value=\"{{ currentType.name }}\" readonly/>\n            </div>\n            <div class=\"col-sm-8\">\n              <select id=\"type\" name=\"type\" class=\"form-control\" [(ngModel)]=\"currentType\">\n                <option *ngFor=\"let type of petTypes\"\n                        [selected]=\"type.id == currentType.id ? true : null\"\n                        [ngValue]=\"type\">{{ type.name }}\n                </option>\n              </select>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <div class=\"col-sm-offset-2 col-sm-10\">\n          <br/>\n          <button class=\"btn btn-default\" type=\"button\" (click)=\"gotoOwnerDetail(pet.owner)\">< Back</button>\n          <button class=\"btn btn-default\" type=\"submit\">Update Pet</button>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pets/pet-list/pet-list.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pets/pet-list/pet-list.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--\n  ~ /*\n  ~  * Copyright 2016-2017 the original author or authors.\n  ~  *\n  ~  * Licensed under the Apache License, Version 2.0 (the \"License\");\n  ~  * you may not use this file except in compliance with the License.\n  ~  * You may obtain a copy of the License at\n  ~  *\n  ~  *      http://www.apache.org/licenses/LICENSE-2.0\n  ~  *\n  ~  * Unless required by applicable law or agreed to in writing, software\n  ~  * distributed under the License is distributed on an \"AS IS\" BASIS,\n  ~  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n  ~  * See the License for the specific language governing permissions and\n  ~  * limitations under the License.\n  ~  */\n  -->\n\n<table [hidden]=\"deleteSuccess\" class=\"table table-striped\">\n  <tr>\n    <td valign=\"top\">\n      <dl class=\"dl-horizontal\">\n        <dt>Name</dt>\n        <dd>{{ pet.name }}</dd>\n        <dt>Birth Date</dt>\n        <dd>{{ pet.birthDate }}</dd>\n        <dt>Type</dt>\n        <dd *ngIf=\"!deleteSuccess\">{{ pet.type.name }}</dd>\n        <button class=\"btn btn-default\" (click)=\"editPet(pet)\">Edit Pet</button>\n        <button class=\"btn btn-default\" (click)=\"deletePet(pet)\">Delete Pet</button>\n        <button class=\"btn btn-default\" (click)=\"addVisit(pet)\">Add Visit</button>\n\n      </dl>\n    </td>\n    <td valign=\"top\">\n      <app-visit-list [visits]=\"pet.visits\"></app-visit-list>\n    </td>\n  </tr>\n\n</table>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pettypes/pettype-add/pettype-add.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pettypes/pettype-add/pettype-add.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--\n  ~ /*\n  ~  * Copyright 2016-2017 the original author or authors.\n  ~  *\n  ~  * Licensed under the Apache License, Version 2.0 (the \"License\");\n  ~  * you may not use this file except in compliance with the License.\n  ~  * You may obtain a copy of the License at\n  ~  *\n  ~  *      http://www.apache.org/licenses/LICENSE-2.0\n  ~  *\n  ~  * Unless required by applicable law or agreed to in writing, software\n  ~  * distributed under the License is distributed on an \"AS IS\" BASIS,\n  ~  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n  ~  * See the License for the specific language governing permissions and\n  ~  * limitations under the License.\n  ~  */\n  -->\n\n<div class=\"container-fluid\">\n  <div class=\"container xd-container\">\n    <h2>New Pet Type</h2>\n    <form id=\"pettype\" class=\"form-horizontal\" (ngSubmit)=\"onSubmit(pettypeForm.value)\" #pettypeForm=\"ngForm\">\n      <div class=\"form-group\" hidden=\"true\">\n        <input type=\"text\" hidden=\"true\" class=\"form-control\" id=\"id\" [(ngModel)]=\"pettype.id\" name=\"id\"/>\n      </div>\n      <div class=\"form-group has-feedback\">\n        <div class=\"form-group \">\n          <label class=\"col-sm-1 control-label\">Name</label>\n          <div class=\"col-sm-6\">\n            <input id=\"name\" name=\"name\" class=\"form-control\" type=\"text\" [(ngModel)]=\"pettype.name\"/>\n          </div>\n          <button class=\"btn btn-default\" type=\"submit\">Save</button>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pettypes/pettype-edit/pettype-edit.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pettypes/pettype-edit/pettype-edit.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--\n  ~ /*\n  ~  * Copyright 2017-2018 the original author or authors.\n  ~  *\n  ~  * Licensed under the Apache License, Version 2.0 (the \"License\");\n  ~  * you may not use this file except in compliance with the License.\n  ~  * You may obtain a copy of the License at\n  ~  *\n  ~  *      http://www.apache.org/licenses/LICENSE-2.0\n  ~  *\n  ~  * Unless required by applicable law or agreed to in writing, software\n  ~  * distributed under the License is distributed on an \"AS IS\" BASIS,\n  ~  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n  ~  * See the License for the specific language governing permissions and\n  ~  * limitations under the License.\n  ~  */\n  -->\n\n<div class=\"container-fluid\">\n  <div class=\"container xd-container\">\n    <h2>Edit Pet Type</h2>\n    <form id=\"pettype\" class=\"form-horizontal\" (ngSubmit)=\"onSubmit(pettypeForm.value)\" #pettypeForm=\"ngForm\">\n      <div class=\"form-group\" hidden=\"true\">\n        <input type=\"text\" hidden=\"true\" class=\"form-control\" id=\"id\" [(ngModel)]=\"pettype.id\" name=\"id\"/>\n      </div>\n      <div class=\"form-group has-feedback\">\n        <div class=\"form-group \">\n          <label class=\"col-sm-1 control-label\">Name</label>\n          <div class=\"col-sm-6\">\n            <input id=\"name\" name=\"name\" class=\"form-control\" type=\"text\" [(ngModel)]=\"pettype.name\"/>\n          </div>\n          <button class=\"btn btn-default\" type=\"submit\">Update</button>\n          <button class=\"btn btn-default\" (click)=\"onBack()\">Cancel</button>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pettypes/pettype-list/pettype-list.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pettypes/pettype-list/pettype-list.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--\n  ~ /*\n  ~  * Copyright 2016-2018 the original author or authors.\n  ~  *\n  ~  * Licensed under the Apache License, Version 2.0 (the \"License\");\n  ~  * you may not use this file except in compliance with the License.\n  ~  * You may obtain a copy of the License at\n  ~  *\n  ~  *      http://www.apache.org/licenses/LICENSE-2.0\n  ~  *\n  ~  * Unless required by applicable law or agreed to in writing, software\n  ~  * distributed under the License is distributed on an \"AS IS\" BASIS,\n  ~  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n  ~  * See the License for the specific language governing permissions and\n  ~  * limitations under the License.\n  ~  */\n  -->\n\n<div class=\"container-fluid\">\n  <div class=\"container xd-container\">\n\n    <h2>Pet Types</h2>\n    <table id=\"pettypes\" class=\"table table-striped\">\n      <thead>\n      <tr>\n        <th>Name</th>\n        <th></th>\n        <th></th>\n      </tr>\n      </thead>\n      <tbody>\n      <tr *ngFor=\"let pettype of pettypes; let element_id=index\">\n        <td>\n          <input [id]=element_id [readonly]=\"true\" type=\"text\" class=\"form-control\" [(ngModel)]=\"pettype.name\" name=\"pettype_name\" />\n        </td>\n        <td>\n          <button class=\"btn btn-default\" (click)=\"showEditPettypeComponent(pettype)\">Edit</button>\n          <button class=\"btn btn-default\" (click)=\"deletePettype(pettype)\">Delete</button>\n        </td>\n      </tr>\n      </tbody>\n    </table>\n    <div *ngIf=\"isInsert\">\n      <app-pettype-add (newPetType)=\"onNewPettype($event)\">...</app-pettype-add>\n    </div>\n    <div>\n      <button class=\"btn btn-default\" (click)=\"gotoHome()\">Home</button>\n      <button class=\"btn btn-default\" (click)=\"showAddPettypeComponent()\"> Add </button>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/specialties/specialty-add/specialty-add.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/specialties/specialty-add/specialty-add.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--\n  ~ /*\n  ~  * Copyright 2016-2017 the original author or authors.\n  ~  *\n  ~  * Licensed under the Apache License, Version 2.0 (the \"License\");\n  ~  * you may not use this file except in compliance with the License.\n  ~  * You may obtain a copy of the License at\n  ~  *\n  ~  *      http://www.apache.org/licenses/LICENSE-2.0\n  ~  *\n  ~  * Unless required by applicable law or agreed to in writing, software\n  ~  * distributed under the License is distributed on an \"AS IS\" BASIS,\n  ~  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n  ~  * See the License for the specific language governing permissions and\n  ~  * limitations under the License.\n  ~  */\n  -->\n\n<div class=\"container-fluid\">\n  <div class=\"container xd-container\">\n    <h2>New Specialty</h2>\n    <form id=\"specialty\" class=\"form-horizontal\" (ngSubmit)=\"onSubmit(specialtyForm.value)\" #specialtyForm=\"ngForm\">\n      <div class=\"form-group\" hidden=\"true\">\n        <input type=\"text\" hidden=\"true\" class=\"form-control\" id=\"id\" [(ngModel)]=\"specialty.id\" name=\"id\"/>\n      </div>\n      <div class=\"form-group has-feedback\">\n        <div class=\"form-group \">\n          <label class=\"col-sm-1 control-label\">Name</label>\n          <div class=\"col-sm-6\">\n            <input id=\"name\" name=\"name\" class=\"form-control\" type=\"text\" [(ngModel)]=\"specialty.name\"/>\n          </div>\n          <button class=\"btn btn-default\" type=\"submit\">Save</button>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/specialties/specialty-edit/specialty-edit.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/specialties/specialty-edit/specialty-edit.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--\n  ~ /*\n  ~  * Copyright 2017-2018 the original author or authors.\n  ~  *\n  ~  * Licensed under the Apache License, Version 2.0 (the \"License\");\n  ~  * you may not use this file except in compliance with the License.\n  ~  * You may obtain a copy of the License at\n  ~  *\n  ~  *      http://www.apache.org/licenses/LICENSE-2.0\n  ~  *\n  ~  * Unless required by applicable law or agreed to in writing, software\n  ~  * distributed under the License is distributed on an \"AS IS\" BASIS,\n  ~  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n  ~  * See the License for the specific language governing permissions and\n  ~  * limitations under the License.\n  ~  */\n  -->\n\n<div class=\"container-fluid\">\n  <div class=\"container xd-container\">\n    <h2>Edit Specialty</h2>\n    <form id=\"specialty\" class=\"form-horizontal\" (ngSubmit)=\"onSubmit(specialtyForm.value)\" #specialtyForm=\"ngForm\">\n      <div class=\"form-group\" hidden=\"true\">\n        <input type=\"text\" hidden=\"true\" class=\"form-control\" id=\"id\" [(ngModel)]=\"specialty.id\" name=\"id\"/>\n      </div>\n      <div class=\"form-group has-feedback\">\n        <div class=\"form-group \">\n          <label class=\"col-sm-1 control-label\">Name</label>\n          <div class=\"col-sm-6\">\n            <input id=\"name\" name=\"name\" class=\"form-control\" type=\"text\" [(ngModel)]=\"specialty.name\"/>\n          </div>\n          <button class=\"btn btn-default\" type=\"submit\">Update</button>\n          <button class=\"btn btn-default\" (click)=\"onBack()\">Cancel</button>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/specialties/specialty-list/specialty-list.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/specialties/specialty-list/specialty-list.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--\n  ~ /*\n  ~  * Copyright 2016-2018 the original author or authors.\n  ~  *\n  ~  * Licensed under the Apache License, Version 2.0 (the \"License\");\n  ~  * you may not use this file except in compliance with the License.\n  ~  * You may obtain a copy of the License at\n  ~  *\n  ~  *      http://www.apache.org/licenses/LICENSE-2.0\n  ~  *\n  ~  * Unless required by applicable law or agreed to in writing, software\n  ~  * distributed under the License is distributed on an \"AS IS\" BASIS,\n  ~  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n  ~  * See the License for the specific language governing permissions and\n  ~  * limitations under the License.\n  ~  */\n  -->\n\n<div class=\"container-fluid\">\n  <div class=\"container xd-container\">\n\n    <h2>Specialties</h2>\n    <table id=\"specialties\" class=\"table table-striped\">\n      <thead>\n      <tr>\n        <th>Name</th>\n        <th></th>\n        <th></th>\n      </tr>\n      </thead>\n      <tbody>\n      <tr *ngFor=\"let specialty of specialties; let element_id=index\">\n        <td>\n          <input [id]=element_id [readonly]=\"true\" type=\"text\" class=\"form-control\" [(ngModel)]=\"specialty.name\" name=\"spec_name\" />\n        </td>\n        <td>\n          <button class=\"btn btn-default\" (click)=\"showEditSpecialtyComponent(specialty)\">Edit</button>\n          <button class=\"btn btn-default\" (click)=\"deleteSpecialty(specialty)\">Delete</button>\n        </td>\n      </tr>\n      </tbody>\n    </table>\n    <div *ngIf=\"isInsert\">\n      <app-specialty-add (newSpeciality)=\"onNewSpecialty($event)\">...</app-specialty-add>\n    </div>\n    <div>\n      <button class=\"btn btn-default\" (click)=\"gotoHome()\">Home</button>\n      <button class=\"btn btn-default\" (click)=\"showAddSpecialtyComponent()\"> Add </button>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/vets/vet-add/vet-add.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/vets/vet-add/vet-add.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--\n  ~ /*\n  ~  * Copyright 2016-2018 the original author or authors.\n  ~  *\n  ~  * Licensed under the Apache License, Version 2.0 (the \"License\");\n  ~  * you may not use this file except in compliance with the License.\n  ~  * You may obtain a copy of the License at\n  ~  *\n  ~  *      http://www.apache.org/licenses/LICENSE-2.0\n  ~  *\n  ~  * Unless required by applicable law or agreed to in writing, software\n  ~  * distributed under the License is distributed on an \"AS IS\" BASIS,\n  ~  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n  ~  * See the License for the specific language governing permissions and\n  ~  * limitations under the License.\n  ~  */\n  -->\n\n<div class=\"container-fluid\">\n  <div class=\"container xd-container\">\n    <h2>New Veterinarian</h2>\n    <form id=\"vet\" class=\"form-horizontal\" (ngSubmit)=\"onSubmit(vetForm.value)\" #vetForm=\"ngForm\">\n      <div class=\"form-group\" hidden=\"true\">\n        <input type=\"text\" hidden=\"true\" class=\"form-control\" id=\"id\" [(ngModel)]=\"vet.id\" name=\"id\"/>\n      </div>\n      <div class=\"form-group has-feedback\" [class.has-success]=\"firstName.dirty && firstName.valid\" [class.has-error]=\"firstName.dirty &&  !firstName.valid\">\n        <label for=\"firstName\" class=\"col-sm-2 control-label\">First Name</label>\n        <div class=\"col-sm-10\">\n          <input type=\"text\" class=\"form-control\" id=\"firstName\" [(ngModel)]=\"vet.firstName\" minlength=\"2\" required name=\"firstName\" #firstName=\"ngModel\"/>\n          <span class=\"glyphicon form-control-feedback\" [class.glyphicon-ok]=\"firstName.valid\" [class.glyphicon-remove]=\"!firstName.valid\" aria-hidden=\"true\"></span>\n          <span class=\"help-block\" *ngIf=\"firstName.dirty && firstName.hasError('required')\">First name is required</span>\n          <span class=\"help-block\" *ngIf=\"firstName.dirty && firstName.hasError('minlength')\">First name must be at least 2 characters long</span>\n        </div>\n      </div>\n      <div class=\"form-group has-feedback\" [class.has-success]=\"lastName.dirty && lastName.valid\" [class.has-error]=\"lastName.dirty && !lastName.valid\">\n        <label for=\"lastName\" class=\"col-sm-2 control-label\">Last Name</label>\n        <div class=\"col-sm-10\">\n          <input type=\"text\" class=\"form-control\" id=\"lastName\" [(ngModel)]=\"vet.lastName\" name=\"lastName\" minlength=\"2\" required #lastName=\"ngModel\"/>\n          <span class=\"glyphicon form-control-feedback\" [class.glyphicon-ok]=\"lastName.valid\" [class.glyphicon-remove]=\"!lastName.valid\" aria-hidden=\"true\"></span>\n          <span class=\"help-block\" *ngIf=\"lastName.dirty && lastName.hasError('required')\">Last name is required</span>\n          <span class=\"help-block\" *ngIf=\"lastName.dirty && lastName.hasError('minlength')\">Last name must be at least 2 characters long</span>\n        </div>\n      </div>\n      <div class=\"control-group\">\n        <div class=\"form-group \">\n          <label for=\"specialties\" class=\"col-sm-2 control-label\">Type </label>\n          <div class=\"col-sm-10\">\n            <select id=\"specialties\" name=\"specialties\" class=\"form-control\" [(ngModel)]=\"selectedSpecialty\">\n              <option *ngFor=\"let spec of specialtiesList\" [ngValue]=\"spec\">\n                {{ spec.name }}\n              </option>\n            </select>\n          </div>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <div class=\"col-sm-offset-2 col-sm-10\">\n          <br/>\n          <button class=\"btn btn-default\" type=\"button\" (click)=\"gotoVetList()\">< Back</button>\n          <button class=\"btn btn-default\" type=\"submit\">Save Vet</button>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/vets/vet-edit/vet-edit.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/vets/vet-edit/vet-edit.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--\n  ~ /*\n  ~  * Copyright 2016-2018 the original author or authors.\n  ~  *\n  ~  * Licensed under the Apache License, Version 2.0 (the \"License\");\n  ~  * you may not use this file except in compliance with the License.\n  ~  * You may obtain a copy of the License at\n  ~  *\n  ~  *      http://www.apache.org/licenses/LICENSE-2.0\n  ~  *\n  ~  * Unless required by applicable law or agreed to in writing, software\n  ~  * distributed under the License is distributed on an \"AS IS\" BASIS,\n  ~  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n  ~  * See the License for the specific language governing permissions and\n  ~  * limitations under the License.\n  ~  */\n  -->\n\n<div class=\"container-fluid\">\n  <div class=\"container xd-container\">\n    <h2>Edit Veterinarian</h2>\n    <form id=\"vet_form\" class=\"form-horizontal\" (ngSubmit)=\"onSubmit(vetEditForm.value)\" [formGroup]=\"vetEditForm\">\n      <div class=\"form-group\" hidden=\"true\">\n        <input type=\"text\" hidden=\"true\" class=\"form-control\" id=\"id\" name=\"id\" formControlName=\"id\"/>\n      </div>\n      <div class=\"form-group has-feedback\" [class.has-success]=\"firstNameCtrl.dirty && firstNameCtrl.valid\" [class.has-error]=\"firstNameCtrl.dirty &&  !firstNameCtrl.valid\">\n        <label for=\"firstName\" class=\"col-sm-2 control-label\">First Name</label>\n        <div class=\"col-sm-10\">\n          <input type=\"text\" class=\"form-control\" id=\"firstName\" name=\"firstName\" formControlName=\"firstName\"/>\n          <span class=\"glyphicon form-control-feedback\" [class.glyphicon-ok]=\"firstNameCtrl.valid\" [class.glyphicon-remove]=\"!firstNameCtrl.valid\" aria-hidden=\"true\"></span>\n          <span class=\"help-block\" *ngIf=\"firstNameCtrl.dirty && firstNameCtrl.hasError('required')\">First name is required</span>\n          <span class=\"help-block\" *ngIf=\"firstNameCtrl.dirty && firstNameCtrl.hasError('minlength')\">First name must be at least 2 characters long</span>\n        </div>\n      </div>\n      <div class=\"form-group has-feedback\" [class.has-success]=\"lastNameCtrl.dirty && lastNameCtrl.valid\" [class.has-error]=\"lastNameCtrl.dirty && !lastNameCtrl.valid\">\n        <label for=\"lastName\" class=\"col-sm-2 control-label\">Last Name</label>\n        <div class=\"col-sm-10\">\n          <input type=\"text\" class=\"form-control\" id=\"lastName\" name=\"lastName\" formControlName=\"lastName\"/>\n          <span class=\"glyphicon form-control-feedback\" [class.glyphicon-ok]=\"lastNameCtrl.valid\" [class.glyphicon-remove]=\"!lastNameCtrl.valid\" aria-hidden=\"true\"></span>\n          <span class=\"help-block\" *ngIf=\"lastNameCtrl.dirty && lastNameCtrl.hasError('required')\">Last name is required</span>\n          <span class=\"help-block\" *ngIf=\"lastNameCtrl.dirty && lastNameCtrl.hasError('minlength')\">Last name must be at least 2 characters long</span>\n        </div>\n      </div>\n      <div class=\"control-group\">\n        <div class=\"form-group \">\n          <label for=\"spec\" class=\"col-sm-2 control-label\">Specialties</label>\n            <mat-form-field class=\"col-sm-10\">\n              <mat-select  [compareWith]=\"compareSpecFn\" id=\"spec\" name=\"specialties\" formControlName=\"specialties\" multiple>\n                <mat-option *ngFor=\"let specialty of specList\" [value]=\"specialty\">\n                  {{ specialty.name }}\n                </mat-option>\n              </mat-select>\n            </mat-form-field>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <div class=\"col-sm-offset-2 col-sm-10\">\n          <br/>\n          <button class=\"btn btn-default\" type=\"button\" (click)=\"gotoVetList()\">< Back</button>\n          <button class=\"btn btn-default\" type=\"submit\" [disabled]=\"vetEditForm.invalid\">Save Vet</button>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/vets/vet-list/vet-list.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/vets/vet-list/vet-list.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--\n  ~ /*\n  ~  * Copyright 2016-2017 the original author or authors.\n  ~  *\n  ~  * Licensed under the Apache License, Version 2.0 (the \"License\");\n  ~  * you may not use this file except in compliance with the License.\n  ~  * You may obtain a copy of the License at\n  ~  *\n  ~  *      http://www.apache.org/licenses/LICENSE-2.0\n  ~  *\n  ~  * Unless required by applicable law or agreed to in writing, software\n  ~  * distributed under the License is distributed on an \"AS IS\" BASIS,\n  ~  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n  ~  * See the License for the specific language governing permissions and\n  ~  * limitations under the License.\n  ~  */\n  -->\n\n<div class=\"container-fluid\">\n  <div class=\"container xd-container\">\n\n    <h2>Veterinarians</h2>\n\n    <table id=\"vets\" class=\"table table-striped\">\n      <thead>\n      <tr>\n        <th>Name</th>\n        <th>Specialties</th>\n        <th></th>\n        <th></th>\n      </tr>\n      </thead>\n      <tbody>\n      <tr *ngFor=\"let vet of vets\">\n        <td>\n          {{ vet.firstName }} {{ vet.lastName }}\n        </td>\n        <td>\n          <div *ngFor=\"let spec of vet.specialties\">\n            {{ spec.name }}\n          </div>\n        </td>\n        <td>\n          <button class=\"btn btn-default\" (click)=\"editVet(vet)\">Edit Vet</button>\n          <button class=\"btn btn-default\" (click)=\"deleteVet(vet)\">Delete Vet</button>\n        </td>\n      </tr>\n      </tbody>\n    </table>\n    <div>\n      <button class=\"btn btn-default\" (click)=\"gotoHome()\">Home</button>\n      <button class=\"btn btn-default\" (click)=\"addVet()\">Add Vet</button>\n    </div>\n  </div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/visits/visit-add/visit-add.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/visits/visit-add/visit-add.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--\n  ~ /*\n  ~  * Copyright 2016-2017 the original author or authors.\n  ~  *\n  ~  * Licensed under the Apache License, Version 2.0 (the \"License\");\n  ~  * you may not use this file except in compliance with the License.\n  ~  * You may obtain a copy of the License at\n  ~  *\n  ~  *      http://www.apache.org/licenses/LICENSE-2.0\n  ~  *\n  ~  * Unless required by applicable law or agreed to in writing, software\n  ~  * distributed under the License is distributed on an \"AS IS\" BASIS,\n  ~  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n  ~  * See the License for the specific language governing permissions and\n  ~  * limitations under the License.\n  ~  */\n  -->\n\n<div class=\"container-fluid\">\n  <div class=\"container xd-container\">\n\n    <h2>New Visit</h2>\n\n    <b>Pet</b>\n    <table class=\"table table-striped\">\n      <thead>\n      <tr>\n        <th>Name</th>\n        <th>Birth Date</th>\n        <th>Type</th>\n        <th>Owner</th>\n      </tr>\n      </thead>\n      <tr>\n        <td>{{ currentPet.name }}</td>\n        <td>{{ currentPet.birthDate }}</td>\n        <td>{{ currentPetType.name }}</td>\n        <td>{{ currentOwner.firstName }} {{ currentOwner.lastName }}</td>\n      </tr>\n\n    </table>\n\n    <form id=\"visit\" class=\"form-horizontal\" (ngSubmit)=\"onSubmit(visitForm.value)\" #visitForm=\"ngForm\">\n\n      <div class=\"form-group has-feedback\">\n\n        <div class=\"form-group \">\n          <label class=\"col-sm-2 control-label\">Date</label>\n          <div class=\"col-sm-10\">\n            <input matInput [matDatepicker]=\"visitDateDatepicker\" [ngModel]=\"visit.date | date:'yyyy-MM-dd'\" name=\"date\">\n            <mat-datepicker-toggle matSuffix [for]=\"visitDateDatepicker\"></mat-datepicker-toggle>\n            <mat-datepicker #visitDateDatepicker></mat-datepicker>\n          </div>\n        </div>\n        <div class=\"form-group \">\n          <label class=\"col-sm-2 control-label\">Description</label>\n          <div class=\"col-sm-10\">\n            <input id=\"description\" name=\"description\" class=\"form-control\" type=\"text\"\n                   [(ngModel)]=\"visit.description\"/>\n          </div>\n        </div>\n\n      </div>\n      <div class=\"form-group\">\n        <div class=\"col-sm-offset-2 col-sm-10\">\n          <input type=\"hidden\" name=\"id\" id=\"id\" [(ngModel)]=\"visit.id\"/>\n          <input type=\"hidden\" name=\"pet\" id=\"pet\" [(ngModel)]=\"visit.pet\"/>\n          <button class=\"btn btn-default\" type=\"button\" (click)=\"gotoOwnerDetail()\">Back</button>\n          <button class=\"btn btn-default\" type=\"submit\">Add Visit</button>\n        </div>\n      </div>\n    </form>\n\n    <br/>\n    <div class=\"col-12 text-left\">\n      <p>\n        <b>Previous Visits</b>\n      </p>\n    </div>\n    <br/>\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-12 text-center\">\n          <app-visit-list [visits]=\"currentPet.visits\"></app-visit-list>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/visits/visit-edit/visit-edit.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/visits/visit-edit/visit-edit.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--\n  ~ /*\n  ~  * Copyright 2016-2017 the original author or authors.\n  ~  *\n  ~  * Licensed under the Apache License, Version 2.0 (the \"License\");\n  ~  * you may not use this file except in compliance with the License.\n  ~  * You may obtain a copy of the License at\n  ~  *\n  ~  *      http://www.apache.org/licenses/LICENSE-2.0\n  ~  *\n  ~  * Unless required by applicable law or agreed to in writing, software\n  ~  * distributed under the License is distributed on an \"AS IS\" BASIS,\n  ~  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n  ~  * See the License for the specific language governing permissions and\n  ~  * limitations under the License.\n  ~  */\n  -->\n\n<div class=\"container-fluid\">\n  <div class=\"container xd-container\">\n\n    <h2>Edit Visit</h2>\n\n    <b>Pet</b>\n    <table class=\"table table-striped\">\n      <thead>\n      <tr>\n        <th>Name</th>\n        <th>Birth Date</th>\n        <th>Type</th>\n        <th>Owner</th>\n      </tr>\n      </thead>\n      <tr>\n        <td>{{ currentPet.name }}</td>\n        <td>{{ currentPet.birthDate }}</td>\n        <td>{{ currentPetType.name }}</td>\n        <td>{{ currentOwner.firstName }} {{ currentOwner.lastName }}</td>\n      </tr>\n\n    </table>\n\n    <form id=\"visit\" class=\"form-horizontal\" (ngSubmit)=\"onSubmit(visitForm.value)\" #visitForm=\"ngForm\">\n\n      <div class=\"form-group has-feedback\">\n\n        <div class=\"form-group \">\n          <label class=\"col-sm-2 control-label\">Date</label>\n          <div class=\"col-sm-10\">\n            <input matInput [matDatepicker]=\"visitDateDatepicker\" [ngModel]=\"visit.date | date:'yyyy-MM-dd'\" name=\"date\">\n            <mat-datepicker-toggle matSuffix [for]=\"visitDateDatepicker\"></mat-datepicker-toggle>\n            <mat-datepicker #visitDateDatepicker></mat-datepicker>\n          </div>\n        </div>\n        <div class=\"form-group \">\n          <label class=\"col-sm-2 control-label\">Description</label>\n          <div class=\"col-sm-10\">\n            <input id=\"description\" name=\"description\" class=\"form-control\" type=\"text\"\n                   [(ngModel)]=\"visit.description\"/>\n          </div>\n        </div>\n\n      </div>\n      <div class=\"form-group\">\n        <div class=\"col-sm-offset-2 col-sm-10\">\n          <input type=\"hidden\" name=\"id\" id=\"id\" [(ngModel)]=\"visit.id\"/>\n          <input type=\"hidden\" name=\"pet\" id=\"pet\" [(ngModel)]=\"visit.pet\"/>\n          <button class=\"btn btn-default\" type=\"button\" (click)=\"gotoOwnerDetail()\">Back</button>\n          <button class=\"btn btn-default\" type=\"submit\">Update Visit</button>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/visits/visit-list/visit-list.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/visits/visit-list/visit-list.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--\n  ~ /*\n  ~  * Copyright 2016-2017 the original author or authors.\n  ~  *\n  ~  * Licensed under the Apache License, Version 2.0 (the \"License\");\n  ~  * you may not use this file except in compliance with the License.\n  ~  * You may obtain a copy of the License at\n  ~  *\n  ~  *      http://www.apache.org/licenses/LICENSE-2.0\n  ~  *\n  ~  * Unless required by applicable law or agreed to in writing, software\n  ~  * distributed under the License is distributed on an \"AS IS\" BASIS,\n  ~  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n  ~  * See the License for the specific language governing permissions and\n  ~  * limitations under the License.\n  ~  */\n  -->\n\n<table [hidden]=\"noVisits\" class=\" table table-condensed\">\n  <thead>\n  <tr>\n    <th>Visit Date</th>\n    <th>Description</th>\n    <th>Actions</th>\n  </tr>\n  </thead>\n  <tr *ngFor=\"let visit of visits\">\n    <td>{{ visit.date }}</td>\n    <td>{{ visit.description }}</td>\n    <td>\n      <button class=\"btn btn-default\" (click)=\"editVisit(visit)\">Edit Visit</button>\n      <button class=\"btn btn-default\" (click)=\"deleteVisit(visit)\">Delete Visit</button>\n    </td>\n  </tr>\n</table>\n\n\n\n\n\n");

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _parts_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./parts/page-not-found/page-not-found.component */ "./src/app/parts/page-not-found/page-not-found.component.ts");
/* harmony import */ var _parts_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./parts/welcome/welcome.component */ "./src/app/parts/welcome/welcome.component.ts");
/*
 *
 *  * Copyright 2016-2017 the original author or authors.
 *  *
 *  * Licensed under the Apache License, Version 2.0 (the "License");
 *  * you may not use this file except in compliance with the License.
 *  * You may obtain a copy of the License at
 *  *
 *  *      http://www.apache.org/licenses/LICENSE-2.0
 *  *
 *  * Unless required by applicable law or agreed to in writing, software
 *  * distributed under the License is distributed on an "AS IS" BASIS,
 *  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  * See the License for the specific language governing permissions and
 *  * limitations under the License.
 *
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
/**
 * @author Vitaliy Fedoriv
 */




var appRoutes = [
    { path: 'welcome', component: _parts_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_3__["WelcomeComponent"] },
    { path: '', component: _parts_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_3__["WelcomeComponent"] },
    { path: '**', component: _parts_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_2__["PageNotFoundComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/*\n *\n *  * Copyright 2016-2017 the original author or authors.\n *  *\n *  * Licensed under the Apache License, Version 2.0 (the \"License\");\n *  * you may not use this file except in compliance with the License.\n *  * You may obtain a copy of the License at\n *  *\n *  *      http://www.apache.org/licenses/LICENSE-2.0\n *  *\n *  * Unless required by applicable law or agreed to in writing, software\n *  * distributed under the License is distributed on an \"AS IS\" BASIS,\n *  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *  * See the License for the specific language governing permissions and\n *  * limitations under the License.\n *\n */\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7RUFnQkUiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKlxuICogICogQ29weXJpZ2h0IDIwMTYtMjAxNyB0aGUgb3JpZ2luYWwgYXV0aG9yIG9yIGF1dGhvcnMuXG4gKiAgKlxuICogICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqICAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqICAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICogICpcbiAqICAqICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKiAgKlxuICogICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiAgKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiAgKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqXG4gKi9cblxuIl19 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/*
 *
 *  * Copyright 2016-2017 the original author or authors.
 *  *
 *  * Licensed under the Apache License, Version 2.0 (the "License");
 *  * you may not use this file except in compliance with the License.
 *  * You may obtain a copy of the License at
 *  *
 *  *      http://www.apache.org/licenses/LICENSE-2.0
 *  *
 *  * Unless required by applicable law or agreed to in writing, software
 *  * distributed under the License is distributed on an "AS IS" BASIS,
 *  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  * See the License for the specific language governing permissions and
 *  * limitations under the License.
 *
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
/**
 * @author Vitaliy Fedoriv
 */

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __importDefault(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _owners_owners_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./owners/owners.module */ "./src/app/owners/owners.module.ts");
/* harmony import */ var _pets_pets_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pets/pets.module */ "./src/app/pets/pets.module.ts");
/* harmony import */ var _visits_visits_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./visits/visits.module */ "./src/app/visits/visits.module.ts");
/* harmony import */ var _pettypes_pettypes_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pettypes/pettypes.module */ "./src/app/pettypes/pettypes.module.ts");
/* harmony import */ var _vets_vets_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./vets/vets.module */ "./src/app/vets/vets.module.ts");
/* harmony import */ var _parts_parts_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./parts/parts.module */ "./src/app/parts/parts.module.ts");
/* harmony import */ var _specialties_specialties_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./specialties/specialties.module */ "./src/app/specialties/specialties.module.ts");
/* harmony import */ var _error_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./error.service */ "./src/app/error.service.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/animations.js");
/*
 *
 *  * Copyright 2016-2017 the original author or authors.
 *  *
 *  * Licensed under the Apache License, Version 2.0 (the "License");
 *  * you may not use this file except in compliance with the License.
 *  * You may obtain a copy of the License at
 *  *
 *  *      http://www.apache.org/licenses/LICENSE-2.0
 *  *
 *  * Unless required by applicable law or agreed to in writing, software
 *  * distributed under the License is distributed on an "AS IS" BASIS,
 *  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  * See the License for the specific language governing permissions and
 *  * limitations under the License.
 *
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
/**
 * @author Vitaliy Fedoriv
 */















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _owners_owners_module__WEBPACK_IMPORTED_MODULE_6__["OwnersModule"],
                _pets_pets_module__WEBPACK_IMPORTED_MODULE_7__["PetsModule"],
                _visits_visits_module__WEBPACK_IMPORTED_MODULE_8__["VisitsModule"],
                _pettypes_pettypes_module__WEBPACK_IMPORTED_MODULE_9__["PetTypesModule"],
                _vets_vets_module__WEBPACK_IMPORTED_MODULE_10__["VetsModule"],
                _specialties_specialties_module__WEBPACK_IMPORTED_MODULE_12__["SpecialtiesModule"],
                _parts_parts_module__WEBPACK_IMPORTED_MODULE_11__["PartsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"]
            ],
            providers: [
                _error_service__WEBPACK_IMPORTED_MODULE_13__["HttpErrorHandler"],
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/error.service.ts":
/*!**********************************!*\
  !*** ./src/app/error.service.ts ***!
  \**********************************/
/*! exports provided: HttpErrorHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpErrorHandler", function() { return HttpErrorHandler; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/*
 *
 *  * Copyright 2016-2018 the original author or authors.
 *  *
 *  * Licensed under the Apache License, Version 2.0 (the "License");
 *  * you may not use this file except in compliance with the License.
 *  * You may obtain a copy of the License at
 *  *
 *  *      http://www.apache.org/licenses/LICENSE-2.0
 *  *
 *  * Unless required by applicable law or agreed to in writing, software
 *  * distributed under the License is distributed on an "AS IS" BASIS,
 *  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  * See the License for the specific language governing permissions and
 *  * limitations under the License.
 *
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
/**
 * @author Antoine Rey
 */


/** Handles HttpClient errors */
var HttpErrorHandler = /** @class */ (function () {
    function HttpErrorHandler() {
        var _this = this;
        /** Create curried handleError function that already knows the service name */
        this.createHandleError = function (serviceName) {
            if (serviceName === void 0) { serviceName = ''; }
            return function (operation, result) {
                if (operation === void 0) { operation = 'operation'; }
                if (result === void 0) { result = {}; }
                return _this.handleError(serviceName, operation, result);
            };
        };
    }
    /**
     * Returns a function that handles Http operation failures.
     * @param serviceName = name of the data service that attempted the operation
     * @param operation - name of the operation that failed
     * @param result - type of a valid result
     */
    HttpErrorHandler.prototype.handleError = function (serviceName, operation, result) {
        if (serviceName === void 0) { serviceName = ''; }
        if (operation === void 0) { operation = 'operation'; }
        if (result === void 0) { result = {}; }
        return function (error) {
            var message = (error.error instanceof ErrorEvent) ?
                error.error.message :
                "server returned code " + error.status + " with body \"" + error.error + "\"";
            var errorsHeader = error.headers.get('errors');
            if (errorsHeader) {
                var errors = JSON.parse(errorsHeader);
                // Retrieve the Spring MVC errorMessage of the first FieldError
                if ((errors instanceof Array) && (errors.length > 0) && errors[0].errorMessage) {
                    message = errors[0].errorMessage;
                }
            }
            console.error(error);
            console.error(serviceName + "::" + operation + " failed: " + message);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(message);
        };
    };
    HttpErrorHandler = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], HttpErrorHandler);
    return HttpErrorHandler;
}());



/***/ }),

/***/ "./src/app/owners/owner-add/owner-add.component.css":
/*!**********************************************************!*\
  !*** ./src/app/owners/owner-add/owner-add.component.css ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/*\n *\n *  * Copyright 2016-2017 the original author or authors.\n *  *\n *  * Licensed under the Apache License, Version 2.0 (the \"License\");\n *  * you may not use this file except in compliance with the License.\n *  * You may obtain a copy of the License at\n *  *\n *  *      http://www.apache.org/licenses/LICENSE-2.0\n *  *\n *  * Unless required by applicable law or agreed to in writing, software\n *  * distributed under the License is distributed on an \"AS IS\" BASIS,\n *  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *  * See the License for the specific language governing permissions and\n *  * limitations under the License.\n *\n */\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3duZXJzL293bmVyLWFkZC9vd25lci1hZGQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7OztFQWdCRSIsImZpbGUiOiJzcmMvYXBwL293bmVycy9vd25lci1hZGQvb3duZXItYWRkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICpcbiAqICAqIENvcHlyaWdodCAyMDE2LTIwMTcgdGhlIG9yaWdpbmFsIGF1dGhvciBvciBhdXRob3JzLlxuICogICpcbiAqICAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiAgKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiAgKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqICAqXG4gKiAgKiAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICogICpcbiAqICAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqICAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqICAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKlxuICovXG5cbiJdfQ== */");

/***/ }),

/***/ "./src/app/owners/owner-add/owner-add.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/owners/owner-add/owner-add.component.ts ***!
  \*********************************************************/
/*! exports provided: OwnerAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OwnerAddComponent", function() { return OwnerAddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _owner_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../owner.service */ "./src/app/owners/owner.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/*
 *
 *  * Copyright 2016-2017 the original author or authors.
 *  *
 *  * Licensed under the Apache License, Version 2.0 (the "License");
 *  * you may not use this file except in compliance with the License.
 *  * You may obtain a copy of the License at
 *  *
 *  *      http://www.apache.org/licenses/LICENSE-2.0
 *  *
 *  * Unless required by applicable law or agreed to in writing, software
 *  * distributed under the License is distributed on an "AS IS" BASIS,
 *  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  * See the License for the specific language governing permissions and
 *  * limitations under the License.
 *
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
/**
 * @author Vitaliy Fedoriv
 */



var OwnerAddComponent = /** @class */ (function () {
    function OwnerAddComponent(ownerService, router) {
        this.ownerService = ownerService;
        this.router = router;
        this.owner = {};
    }
    OwnerAddComponent.prototype.ngOnInit = function () {
    };
    OwnerAddComponent.prototype.onSubmit = function (owner) {
        var _this = this;
        owner.id = null;
        this.ownerService.addOwner(owner).subscribe(function (newOwner) {
            _this.owner = newOwner;
            _this.gotoOwnersList();
        }, function (error) { return _this.errorMessage = error; });
    };
    OwnerAddComponent.prototype.gotoOwnersList = function () {
        this.router.navigate(['/owners']);
    };
    OwnerAddComponent.ctorParameters = function () { return [
        { type: _owner_service__WEBPACK_IMPORTED_MODULE_1__["OwnerService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    OwnerAddComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-owner-add',
            template: __importDefault(__webpack_require__(/*! raw-loader!./owner-add.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/owners/owner-add/owner-add.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./owner-add.component.css */ "./src/app/owners/owner-add/owner-add.component.css")).default]
        }),
        __metadata("design:paramtypes", [_owner_service__WEBPACK_IMPORTED_MODULE_1__["OwnerService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], OwnerAddComponent);
    return OwnerAddComponent;
}());



/***/ }),

/***/ "./src/app/owners/owner-detail/owner-detail.component.css":
/*!****************************************************************!*\
  !*** ./src/app/owners/owner-detail/owner-detail.component.css ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/*\n *\n *  * Copyright 2016-2017 the original author or authors.\n *  *\n *  * Licensed under the Apache License, Version 2.0 (the \"License\");\n *  * you may not use this file except in compliance with the License.\n *  * You may obtain a copy of the License at\n *  *\n *  *      http://www.apache.org/licenses/LICENSE-2.0\n *  *\n *  * Unless required by applicable law or agreed to in writing, software\n *  * distributed under the License is distributed on an \"AS IS\" BASIS,\n *  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *  * See the License for the specific language governing permissions and\n *  * limitations under the License.\n *\n */\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3duZXJzL293bmVyLWRldGFpbC9vd25lci1kZXRhaWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7OztFQWdCRSIsImZpbGUiOiJzcmMvYXBwL293bmVycy9vd25lci1kZXRhaWwvb3duZXItZGV0YWlsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICpcbiAqICAqIENvcHlyaWdodCAyMDE2LTIwMTcgdGhlIG9yaWdpbmFsIGF1dGhvciBvciBhdXRob3JzLlxuICogICpcbiAqICAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiAgKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiAgKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqICAqXG4gKiAgKiAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICogICpcbiAqICAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqICAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqICAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKlxuICovXG5cbiJdfQ== */");

/***/ }),

/***/ "./src/app/owners/owner-detail/owner-detail.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/owners/owner-detail/owner-detail.component.ts ***!
  \***************************************************************/
/*! exports provided: OwnerDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OwnerDetailComponent", function() { return OwnerDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _owner_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../owner.service */ "./src/app/owners/owner.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/*
 *
 *  * Copyright 2016-2017 the original author or authors.
 *  *
 *  * Licensed under the Apache License, Version 2.0 (the "License");
 *  * you may not use this file except in compliance with the License.
 *  * You may obtain a copy of the License at
 *  *
 *  *      http://www.apache.org/licenses/LICENSE-2.0
 *  *
 *  * Unless required by applicable law or agreed to in writing, software
 *  * distributed under the License is distributed on an "AS IS" BASIS,
 *  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  * See the License for the specific language governing permissions and
 *  * limitations under the License.
 *
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
/**
 * @author Vitaliy Fedoriv
 */



var OwnerDetailComponent = /** @class */ (function () {
    function OwnerDetailComponent(route, router, ownerService) {
        this.route = route;
        this.router = router;
        this.ownerService = ownerService;
        this.owner = {};
    }
    OwnerDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        var ownerId = this.route.snapshot.params.id;
        this.ownerService.getOwnerById(ownerId).subscribe(function (owner) { return _this.owner = owner; }, function (error) { return _this.errorMessage = error; });
    };
    OwnerDetailComponent.prototype.gotoOwnersList = function () {
        this.router.navigate(['/owners']);
    };
    OwnerDetailComponent.prototype.editOwner = function () {
        this.router.navigate(['/owners', this.owner.id, 'edit']);
    };
    OwnerDetailComponent.prototype.addPet = function (owner) {
        this.router.navigate(['/owners', owner.id, 'pets', 'add']);
    };
    OwnerDetailComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _owner_service__WEBPACK_IMPORTED_MODULE_1__["OwnerService"] }
    ]; };
    OwnerDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-owner-detail',
            template: __importDefault(__webpack_require__(/*! raw-loader!./owner-detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/owners/owner-detail/owner-detail.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./owner-detail.component.css */ "./src/app/owners/owner-detail/owner-detail.component.css")).default]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _owner_service__WEBPACK_IMPORTED_MODULE_1__["OwnerService"]])
    ], OwnerDetailComponent);
    return OwnerDetailComponent;
}());



/***/ }),

/***/ "./src/app/owners/owner-edit/owner-edit.component.css":
/*!************************************************************!*\
  !*** ./src/app/owners/owner-edit/owner-edit.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/*\n *\n *  * Copyright 2016-2017 the original author or authors.\n *  *\n *  * Licensed under the Apache License, Version 2.0 (the \"License\");\n *  * you may not use this file except in compliance with the License.\n *  * You may obtain a copy of the License at\n *  *\n *  *      http://www.apache.org/licenses/LICENSE-2.0\n *  *\n *  * Unless required by applicable law or agreed to in writing, software\n *  * distributed under the License is distributed on an \"AS IS\" BASIS,\n *  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *  * See the License for the specific language governing permissions and\n *  * limitations under the License.\n *\n */\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3duZXJzL293bmVyLWVkaXQvb3duZXItZWRpdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7O0VBZ0JFIiwiZmlsZSI6InNyYy9hcHAvb3duZXJzL293bmVyLWVkaXQvb3duZXItZWRpdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqXG4gKiAgKiBDb3B5cmlnaHQgMjAxNi0yMDE3IHRoZSBvcmlnaW5hbCBhdXRob3Igb3IgYXV0aG9ycy5cbiAqICAqXG4gKiAgKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKiAgKlxuICogICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqICAqXG4gKiAgKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiAgKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiAgKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqICAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqICAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICpcbiAqL1xuXG4iXX0= */");

/***/ }),

/***/ "./src/app/owners/owner-edit/owner-edit.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/owners/owner-edit/owner-edit.component.ts ***!
  \***********************************************************/
/*! exports provided: OwnerEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OwnerEditComponent", function() { return OwnerEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _owner_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../owner.service */ "./src/app/owners/owner.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/*
 *
 *  * Copyright 2016-2017 the original author or authors.
 *  *
 *  * Licensed under the Apache License, Version 2.0 (the "License");
 *  * you may not use this file except in compliance with the License.
 *  * You may obtain a copy of the License at
 *  *
 *  *      http://www.apache.org/licenses/LICENSE-2.0
 *  *
 *  * Unless required by applicable law or agreed to in writing, software
 *  * distributed under the License is distributed on an "AS IS" BASIS,
 *  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  * See the License for the specific language governing permissions and
 *  * limitations under the License.
 *
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
/**
 * @author Vitaliy Fedoriv
 */



var OwnerEditComponent = /** @class */ (function () {
    function OwnerEditComponent(ownerService, route, router) {
        this.ownerService = ownerService;
        this.route = route;
        this.router = router;
        this.owner = {};
    }
    OwnerEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        var ownerId = this.route.snapshot.params.id;
        this.ownerService.getOwnerById(ownerId).subscribe(function (owner) { return _this.owner = owner; }, function (error) { return _this.errorMessage = error; });
    };
    OwnerEditComponent.prototype.onSubmit = function (owner) {
        var _this = this;
        var that = this;
        this.ownerService.updateOwner(owner.id.toString(), owner).subscribe(function (res) { return _this.gotoOwnerDetail(owner); }, function (error) { return _this.errorMessage = error; });
    };
    OwnerEditComponent.prototype.gotoOwnerDetail = function (owner) {
        this.errorMessage = null;
        this.router.navigate(['/owners', owner.id]);
    };
    OwnerEditComponent.ctorParameters = function () { return [
        { type: _owner_service__WEBPACK_IMPORTED_MODULE_1__["OwnerService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    OwnerEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-owner-edit',
            template: __importDefault(__webpack_require__(/*! raw-loader!./owner-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/owners/owner-edit/owner-edit.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./owner-edit.component.css */ "./src/app/owners/owner-edit/owner-edit.component.css")).default]
        }),
        __metadata("design:paramtypes", [_owner_service__WEBPACK_IMPORTED_MODULE_1__["OwnerService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], OwnerEditComponent);
    return OwnerEditComponent;
}());



/***/ }),

/***/ "./src/app/owners/owner-list/owner-list.component.css":
/*!************************************************************!*\
  !*** ./src/app/owners/owner-list/owner-list.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/*\n *\n *  * Copyright 2016-2017 the original author or authors.\n *  *\n *  * Licensed under the Apache License, Version 2.0 (the \"License\");\n *  * you may not use this file except in compliance with the License.\n *  * You may obtain a copy of the License at\n *  *\n *  *      http://www.apache.org/licenses/LICENSE-2.0\n *  *\n *  * Unless required by applicable law or agreed to in writing, software\n *  * distributed under the License is distributed on an \"AS IS\" BASIS,\n *  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *  * See the License for the specific language governing permissions and\n *  * limitations under the License.\n *\n */\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3duZXJzL293bmVyLWxpc3Qvb3duZXItbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7O0VBZ0JFIiwiZmlsZSI6InNyYy9hcHAvb3duZXJzL293bmVyLWxpc3Qvb3duZXItbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqXG4gKiAgKiBDb3B5cmlnaHQgMjAxNi0yMDE3IHRoZSBvcmlnaW5hbCBhdXRob3Igb3IgYXV0aG9ycy5cbiAqICAqXG4gKiAgKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKiAgKlxuICogICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqICAqXG4gKiAgKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiAgKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiAgKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqICAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqICAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICpcbiAqL1xuXG4iXX0= */");

/***/ }),

/***/ "./src/app/owners/owner-list/owner-list.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/owners/owner-list/owner-list.component.ts ***!
  \***********************************************************/
/*! exports provided: OwnerListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OwnerListComponent", function() { return OwnerListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _owner_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../owner.service */ "./src/app/owners/owner.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/*
 *
 *  * Copyright 2016-2017 the original author or authors.
 *  *
 *  * Licensed under the Apache License, Version 2.0 (the "License");
 *  * you may not use this file except in compliance with the License.
 *  * You may obtain a copy of the License at
 *  *
 *  *      http://www.apache.org/licenses/LICENSE-2.0
 *  *
 *  * Unless required by applicable law or agreed to in writing, software
 *  * distributed under the License is distributed on an "AS IS" BASIS,
 *  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  * See the License for the specific language governing permissions and
 *  * limitations under the License.
 *
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
/**
 * @author Vitaliy Fedoriv
 */



var OwnerListComponent = /** @class */ (function () {
    function OwnerListComponent(router, ownerService) {
        this.router = router;
        this.ownerService = ownerService;
    }
    OwnerListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ownerService.getOwners().subscribe(function (owners) { return _this.owners = owners; }, function (error) { return _this.errorMessage = error; });
    };
    OwnerListComponent.prototype.onSelect = function (owner) {
        this.router.navigate(['/owners', owner.id]);
    };
    OwnerListComponent.prototype.addOwner = function () {
        this.router.navigate(['/owners/add']);
    };
    OwnerListComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _owner_service__WEBPACK_IMPORTED_MODULE_1__["OwnerService"] }
    ]; };
    OwnerListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-owner-list',
            template: __importDefault(__webpack_require__(/*! raw-loader!./owner-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/owners/owner-list/owner-list.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./owner-list.component.css */ "./src/app/owners/owner-list/owner-list.component.css")).default]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _owner_service__WEBPACK_IMPORTED_MODULE_1__["OwnerService"]])
    ], OwnerListComponent);
    return OwnerListComponent;
}());



/***/ }),

/***/ "./src/app/owners/owner.service.ts":
/*!*****************************************!*\
  !*** ./src/app/owners/owner.service.ts ***!
  \*****************************************/
/*! exports provided: OwnerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OwnerService", function() { return OwnerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _error_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../error.service */ "./src/app/error.service.ts");
/*
 *
 *  * Copyright 2016-2017 the original author or authors.
 *  *
 *  * Licensed under the Apache License, Version 2.0 (the "License");
 *  * you may not use this file except in compliance with the License.
 *  * You may obtain a copy of the License at
 *  *
 *  *      http://www.apache.org/licenses/LICENSE-2.0
 *  *
 *  * Unless required by applicable law or agreed to in writing, software
 *  * distributed under the License is distributed on an "AS IS" BASIS,
 *  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  * See the License for the specific language governing permissions and
 *  * limitations under the License.
 *
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
/**
 * @author Vitaliy Fedoriv
 */





var OwnerService = /** @class */ (function () {
    function OwnerService(http, httpErrorHandler) {
        this.http = http;
        this.httpErrorHandler = httpErrorHandler;
        this.entityUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].REST_API_URL + 'owners';
        this.handlerError = httpErrorHandler.createHandleError('OwnerService');
    }
    OwnerService.prototype.getOwners = function () {
        return this.http.get(this.entityUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handlerError('getOwners', [])));
    };
    OwnerService.prototype.getOwnerById = function (ownerId) {
        return this.http.get(this.entityUrl + '/' + ownerId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handlerError('getOwnerById', {})));
    };
    OwnerService.prototype.addOwner = function (owner) {
        return this.http.post(this.entityUrl, owner)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handlerError('addOwner', owner)));
    };
    OwnerService.prototype.updateOwner = function (ownerId, owner) {
        return this.http.put(this.entityUrl + '/' + ownerId, owner)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handlerError('updateOwner', owner)));
    };
    OwnerService.prototype.deleteOwner = function (ownerId) {
        return this.http.delete(this.entityUrl + '/' + ownerId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handlerError('deleteOwner', [ownerId])));
    };
    OwnerService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _error_service__WEBPACK_IMPORTED_MODULE_4__["HttpErrorHandler"] }
    ]; };
    OwnerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _error_service__WEBPACK_IMPORTED_MODULE_4__["HttpErrorHandler"]])
    ], OwnerService);
    return OwnerService;
}());



/***/ }),

/***/ "./src/app/owners/owners-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/owners/owners-routing.module.ts ***!
  \*************************************************/
/*! exports provided: OwnersRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OwnersRoutingModule", function() { return OwnersRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _owner_detail_owner_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./owner-detail/owner-detail.component */ "./src/app/owners/owner-detail/owner-detail.component.ts");
/* harmony import */ var _owner_list_owner_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./owner-list/owner-list.component */ "./src/app/owners/owner-list/owner-list.component.ts");
/* harmony import */ var _owner_edit_owner_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./owner-edit/owner-edit.component */ "./src/app/owners/owner-edit/owner-edit.component.ts");
/* harmony import */ var _owner_add_owner_add_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./owner-add/owner-add.component */ "./src/app/owners/owner-add/owner-add.component.ts");
/* harmony import */ var _pets_pet_add_pet_add_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../pets/pet-add/pet-add.component */ "./src/app/pets/pet-add/pet-add.component.ts");
/*
 *
 *  * Copyright 2016-2017 the original author or authors.
 *  *
 *  * Licensed under the Apache License, Version 2.0 (the "License");
 *  * you may not use this file except in compliance with the License.
 *  * You may obtain a copy of the License at
 *  *
 *  *      http://www.apache.org/licenses/LICENSE-2.0
 *  *
 *  * Unless required by applicable law or agreed to in writing, software
 *  * distributed under the License is distributed on an "AS IS" BASIS,
 *  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  * See the License for the specific language governing permissions and
 *  * limitations under the License.
 *
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
/**
 * @author Vitaliy Fedoriv
 */







var ownerRoutes = [
    { path: 'owners', component: _owner_list_owner_list_component__WEBPACK_IMPORTED_MODULE_3__["OwnerListComponent"] },
    { path: 'owners/add', component: _owner_add_owner_add_component__WEBPACK_IMPORTED_MODULE_5__["OwnerAddComponent"] },
    { path: 'owners/:id', component: _owner_detail_owner_detail_component__WEBPACK_IMPORTED_MODULE_2__["OwnerDetailComponent"] },
    { path: 'owners/:id/edit', component: _owner_edit_owner_edit_component__WEBPACK_IMPORTED_MODULE_4__["OwnerEditComponent"] },
    { path: 'owners/:id/pets/add', component: _pets_pet_add_pet_add_component__WEBPACK_IMPORTED_MODULE_6__["PetAddComponent"] }
];
var OwnersRoutingModule = /** @class */ (function () {
    function OwnersRoutingModule() {
    }
    OwnersRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(ownerRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], OwnersRoutingModule);
    return OwnersRoutingModule;
}());



/***/ }),

/***/ "./src/app/owners/owners.module.ts":
/*!*****************************************!*\
  !*** ./src/app/owners/owners.module.ts ***!
  \*****************************************/
/*! exports provided: OwnersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OwnersModule", function() { return OwnersModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _owner_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./owner.service */ "./src/app/owners/owner.service.ts");
/* harmony import */ var _owner_list_owner_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./owner-list/owner-list.component */ "./src/app/owners/owner-list/owner-list.component.ts");
/* harmony import */ var _owner_detail_owner_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./owner-detail/owner-detail.component */ "./src/app/owners/owner-detail/owner-detail.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _owner_add_owner_add_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./owner-add/owner-add.component */ "./src/app/owners/owner-add/owner-add.component.ts");
/* harmony import */ var _owner_edit_owner_edit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./owner-edit/owner-edit.component */ "./src/app/owners/owner-edit/owner-edit.component.ts");
/* harmony import */ var _owners_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./owners-routing.module */ "./src/app/owners/owners-routing.module.ts");
/* harmony import */ var _pets_pets_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../pets/pets.module */ "./src/app/pets/pets.module.ts");
/*
 *
 *  * Copyright 2016-2017 the original author or authors.
 *  *
 *  * Licensed under the Apache License, Version 2.0 (the "License");
 *  * you may not use this file except in compliance with the License.
 *  * You may obtain a copy of the License at
 *  *
 *  *      http://www.apache.org/licenses/LICENSE-2.0
 *  *
 *  * Unless required by applicable law or agreed to in writing, software
 *  * distributed under the License is distributed on an "AS IS" BASIS,
 *  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  * See the License for the specific language governing permissions and
 *  * limitations under the License.
 *
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
/**
 * @author Vitaliy Fedoriv
 */










var OwnersModule = /** @class */ (function () {
    function OwnersModule() {
    }
    OwnersModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _owners_routing_module__WEBPACK_IMPORTED_MODULE_8__["OwnersRoutingModule"],
                _pets_pets_module__WEBPACK_IMPORTED_MODULE_9__["PetsModule"]
            ],
            declarations: [
                _owner_list_owner_list_component__WEBPACK_IMPORTED_MODULE_2__["OwnerListComponent"],
                _owner_detail_owner_detail_component__WEBPACK_IMPORTED_MODULE_3__["OwnerDetailComponent"],
                _owner_edit_owner_edit_component__WEBPACK_IMPORTED_MODULE_7__["OwnerEditComponent"],
                _owner_add_owner_add_component__WEBPACK_IMPORTED_MODULE_6__["OwnerAddComponent"]
            ],
            providers: [_owner_service__WEBPACK_IMPORTED_MODULE_1__["OwnerService"]]
        })
    ], OwnersModule);
    return OwnersModule;
}());



/***/ }),

/***/ "./src/app/parts/page-not-found/page-not-found.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/parts/page-not-found/page-not-found.component.css ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/*\n *\n *  * Copyright 2016-2017 the original author or authors.\n *  *\n *  * Licensed under the Apache License, Version 2.0 (the \"License\");\n *  * you may not use this file except in compliance with the License.\n *  * You may obtain a copy of the License at\n *  *\n *  *      http://www.apache.org/licenses/LICENSE-2.0\n *  *\n *  * Unless required by applicable law or agreed to in writing, software\n *  * distributed under the License is distributed on an \"AS IS\" BASIS,\n *  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *  * See the License for the specific language governing permissions and\n *  * limitations under the License.\n *\n */\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFydHMvcGFnZS1ub3QtZm91bmQvcGFnZS1ub3QtZm91bmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7OztFQWdCRSIsImZpbGUiOiJzcmMvYXBwL3BhcnRzL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICpcbiAqICAqIENvcHlyaWdodCAyMDE2LTIwMTcgdGhlIG9yaWdpbmFsIGF1dGhvciBvciBhdXRob3JzLlxuICogICpcbiAqICAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiAgKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiAgKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqICAqXG4gKiAgKiAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICogICpcbiAqICAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqICAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqICAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKlxuICovXG5cbiJdfQ== */");

/***/ }),

/***/ "./src/app/parts/page-not-found/page-not-found.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/parts/page-not-found/page-not-found.component.ts ***!
  \******************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/*
 *
 *  * Copyright 2016-2017 the original author or authors.
 *  *
 *  * Licensed under the Apache License, Version 2.0 (the "License");
 *  * you may not use this file except in compliance with the License.
 *  * You may obtain a copy of the License at
 *  *
 *  *      http://www.apache.org/licenses/LICENSE-2.0
 *  *
 *  * Unless required by applicable law or agreed to in writing, software
 *  * distributed under the License is distributed on an "AS IS" BASIS,
 *  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  * See the License for the specific language governing permissions and
 *  * limitations under the License.
 *
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
/**
 * @author Vitaliy Fedoriv
 */

var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page-not-found',
            template: __importDefault(__webpack_require__(/*! raw-loader!./page-not-found.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/parts/page-not-found/page-not-found.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/parts/page-not-found/page-not-found.component.css")).default]
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/parts/parts.module.ts":
/*!***************************************!*\
  !*** ./src/app/parts/parts.module.ts ***!
  \***************************************/
/*! exports provided: PartsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartsModule", function() { return PartsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/parts/page-not-found/page-not-found.component.ts");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./welcome/welcome.component */ "./src/app/parts/welcome/welcome.component.ts");
/*
 *
 *  * Copyright 2016-2017 the original author or authors.
 *  *
 *  * Licensed under the Apache License, Version 2.0 (the "License");
 *  * you may not use this file except in compliance with the License.
 *  * You may obtain a copy of the License at
 *  *
 *  *      http://www.apache.org/licenses/LICENSE-2.0
 *  *
 *  * Unless required by applicable law or agreed to in writing, software
 *  * distributed under the License is distributed on an "AS IS" BASIS,
 *  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  * See the License for the specific language governing permissions and
 *  * limitations under the License.
 *
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
/**
 * @author Vitaliy Fedoriv
 */





var PartsModule = /** @class */ (function () {
    function PartsModule() {
    }
    PartsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
            ],
            declarations: [
                _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_3__["PageNotFoundComponent"],
                _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_4__["WelcomeComponent"]
            ],
            exports: [
                _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_3__["PageNotFoundComponent"],
                _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_4__["WelcomeComponent"]
            ]
        })
    ], PartsModule);
    return PartsModule;
}());



/***/ }),

/***/ "./src/app/parts/welcome/welcome.component.css":
/*!*****************************************************!*\
  !*** ./src/app/parts/welcome/welcome.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/*\n *\n *  * Copyright 2016-2017 the original author or authors.\n *  *\n *  * Licensed under the Apache License, Version 2.0 (the \"License\");\n *  * you may not use this file except in compliance with the License.\n *  * You may obtain a copy of the License at\n *  *\n *  *      http://www.apache.org/licenses/LICENSE-2.0\n *  *\n *  * Unless required by applicable law or agreed to in writing, software\n *  * distributed under the License is distributed on an \"AS IS\" BASIS,\n *  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *  * See the License for the specific language governing permissions and\n *  * limitations under the License.\n *\n */\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFydHMvd2VsY29tZS93ZWxjb21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7RUFnQkUiLCJmaWxlIjoic3JjL2FwcC9wYXJ0cy93ZWxjb21lL3dlbGNvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKlxuICogICogQ29weXJpZ2h0IDIwMTYtMjAxNyB0aGUgb3JpZ2luYWwgYXV0aG9yIG9yIGF1dGhvcnMuXG4gKiAgKlxuICogICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqICAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqICAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICogICpcbiAqICAqICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKiAgKlxuICogICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiAgKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiAgKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqXG4gKi9cblxuIl19 */");

/***/ }),

/***/ "./src/app/parts/welcome/welcome.component.ts":
/*!****************************************************!*\
  !*** ./src/app/parts/welcome/welcome.component.ts ***!
  \****************************************************/
/*! exports provided: WelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function() { return WelcomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/*
 *
 *  * Copyright 2016-2017 the original author or authors.
 *  *
 *  * Licensed under the Apache License, Version 2.0 (the "License");
 *  * you may not use this file except in compliance with the License.
 *  * You may obtain a copy of the License at
 *  *
 *  *      http://www.apache.org/licenses/LICENSE-2.0
 *  *
 *  * Unless required by applicable law or agreed to in writing, software
 *  * distributed under the License is distributed on an "AS IS" BASIS,
 *  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  * See the License for the specific language governing permissions and
 *  * limitations under the License.
 *
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
/**
 * @author Vitaliy Fedoriv
 */

var WelcomeComponent = /** @class */ (function () {
    function WelcomeComponent() {
    }
    WelcomeComponent.prototype.ngOnInit = function () {
    };
    WelcomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-welcome',
            template: __importDefault(__webpack_require__(/*! raw-loader!./welcome.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/parts/welcome/welcome.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./welcome.component.css */ "./src/app/parts/welcome/welcome.component.css")).default]
        }),
        __metadata("design:paramtypes", [])
    ], WelcomeComponent);
    return WelcomeComponent;
}());



/***/ }),

/***/ "./src/app/pets/pet-add/pet-add.component.css":
/*!****************************************************!*\
  !*** ./src/app/pets/pet-add/pet-add.component.css ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/*\n *\n *  * Copyright 2016-2017 the original author or authors.\n *  *\n *  * Licensed under the Apache License, Version 2.0 (the \"License\");\n *  * you may not use this file except in compliance with the License.\n *  * You may obtain a copy of the License at\n *  *\n *  *      http://www.apache.org/licenses/LICENSE-2.0\n *  *\n *  * Unless required by applicable law or agreed to in writing, software\n *  * distributed under the License is distributed on an \"AS IS\" BASIS,\n *  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *  * See the License for the specific language governing permissions and\n *  * limitations under the License.\n *\n */\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGV0cy9wZXQtYWRkL3BldC1hZGQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7OztFQWdCRSIsImZpbGUiOiJzcmMvYXBwL3BldHMvcGV0LWFkZC9wZXQtYWRkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICpcbiAqICAqIENvcHlyaWdodCAyMDE2LTIwMTcgdGhlIG9yaWdpbmFsIGF1dGhvciBvciBhdXRob3JzLlxuICogICpcbiAqICAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiAgKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiAgKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqICAqXG4gKiAgKiAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICogICpcbiAqICAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqICAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqICAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKlxuICovXG5cbiJdfQ== */");

/***/ }),

/***/ "./src/app/pets/pet-add/pet-add.component.ts":
/*!***************************************************!*\
  !*** ./src/app/pets/pet-add/pet-add.component.ts ***!
  \***************************************************/
/*! exports provided: PetAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PetAddComponent", function() { return PetAddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _pettypes_pettype_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../pettypes/pettype.service */ "./src/app/pettypes/pettype.service.ts");
/* harmony import */ var _pet_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pet.service */ "./src/app/pets/pet.service.ts");
/* harmony import */ var _owners_owner_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../owners/owner.service */ "./src/app/owners/owner.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "./node_modules/moment/src/moment.js");
/*
 *
 *  * Copyright 2016-2017 the original author or authors.
 *  *
 *  * Licensed under the Apache License, Version 2.0 (the "License");
 *  * you may not use this file except in compliance with the License.
 *  * You may obtain a copy of the License at
 *  *
 *  *      http://www.apache.org/licenses/LICENSE-2.0
 *  *
 *  * Unless required by applicable law or agreed to in writing, software
 *  * distributed under the License is distributed on an "AS IS" BASIS,
 *  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  * See the License for the specific language governing permissions and
 *  * limitations under the License.
 *
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
/**
 * @author Vitaliy Fedoriv
 */






var PetAddComponent = /** @class */ (function () {
    function PetAddComponent(ownerService, petService, petTypeService, router, route) {
        this.ownerService = ownerService;
        this.petService = petService;
        this.petTypeService = petTypeService;
        this.router = router;
        this.route = route;
        this.addedSuccess = false;
        this.pet = {};
        this.currentOwner = {};
        this.currentType = {};
        this.petTypes = [];
    }
    PetAddComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.petTypeService.getPetTypes().subscribe(function (pettypes) { return _this.petTypes = pettypes; }, function (error) { return _this.errorMessage = error; });
        var ownerId = this.route.snapshot.params.id;
        this.ownerService.getOwnerById(ownerId).subscribe(function (response) {
            _this.currentOwner = response;
        }, function (error) { return _this.errorMessage = error; });
    };
    PetAddComponent.prototype.onSubmit = function (pet) {
        var _this = this;
        pet.id = null;
        pet.owner = this.currentOwner;
        // format output from datepicker to short string yyyy/mm/dd format
        pet.birthDate = moment__WEBPACK_IMPORTED_MODULE_5__(pet.birthDate).format('YYYY/MM/DD');
        this.petService.addPet(pet).subscribe(function (newPet) {
            _this.pet = newPet;
            _this.addedSuccess = true;
            _this.gotoOwnerDetail();
        }, function (error) { return _this.errorMessage = error; });
    };
    PetAddComponent.prototype.gotoOwnerDetail = function () {
        this.router.navigate(['/owners', this.currentOwner.id]);
    };
    PetAddComponent.ctorParameters = function () { return [
        { type: _owners_owner_service__WEBPACK_IMPORTED_MODULE_4__["OwnerService"] },
        { type: _pet_service__WEBPACK_IMPORTED_MODULE_3__["PetService"] },
        { type: _pettypes_pettype_service__WEBPACK_IMPORTED_MODULE_2__["PetTypeService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PetAddComponent.prototype, "currentType", void 0);
    PetAddComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pet-add',
            template: __importDefault(__webpack_require__(/*! raw-loader!./pet-add.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pets/pet-add/pet-add.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./pet-add.component.css */ "./src/app/pets/pet-add/pet-add.component.css")).default]
        }),
        __metadata("design:paramtypes", [_owners_owner_service__WEBPACK_IMPORTED_MODULE_4__["OwnerService"], _pet_service__WEBPACK_IMPORTED_MODULE_3__["PetService"],
            _pettypes_pettype_service__WEBPACK_IMPORTED_MODULE_2__["PetTypeService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], PetAddComponent);
    return PetAddComponent;
}());



/***/ }),

/***/ "./src/app/pets/pet-edit/pet-edit.component.css":
/*!******************************************************!*\
  !*** ./src/app/pets/pet-edit/pet-edit.component.css ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/*\n *\n *  * Copyright 2016-2017 the original author or authors.\n *  *\n *  * Licensed under the Apache License, Version 2.0 (the \"License\");\n *  * you may not use this file except in compliance with the License.\n *  * You may obtain a copy of the License at\n *  *\n *  *      http://www.apache.org/licenses/LICENSE-2.0\n *  *\n *  * Unless required by applicable law or agreed to in writing, software\n *  * distributed under the License is distributed on an \"AS IS\" BASIS,\n *  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *  * See the License for the specific language governing permissions and\n *  * limitations under the License.\n *\n */\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGV0cy9wZXQtZWRpdC9wZXQtZWRpdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7O0VBZ0JFIiwiZmlsZSI6InNyYy9hcHAvcGV0cy9wZXQtZWRpdC9wZXQtZWRpdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqXG4gKiAgKiBDb3B5cmlnaHQgMjAxNi0yMDE3IHRoZSBvcmlnaW5hbCBhdXRob3Igb3IgYXV0aG9ycy5cbiAqICAqXG4gKiAgKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKiAgKlxuICogICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqICAqXG4gKiAgKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiAgKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiAgKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqICAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqICAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICpcbiAqL1xuXG4iXX0= */");

/***/ }),

/***/ "./src/app/pets/pet-edit/pet-edit.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/pets/pet-edit/pet-edit.component.ts ***!
  \*****************************************************/
/*! exports provided: PetEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PetEditComponent", function() { return PetEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _pet_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pet.service */ "./src/app/pets/pet.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _pettypes_pettype_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../pettypes/pettype.service */ "./src/app/pettypes/pettype.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/src/moment.js");
/*
 *
 *  * Copyright 2016-2017 the original author or authors.
 *  *
 *  * Licensed under the Apache License, Version 2.0 (the "License");
 *  * you may not use this file except in compliance with the License.
 *  * You may obtain a copy of the License at
 *  *
 *  *      http://www.apache.org/licenses/LICENSE-2.0
 *  *
 *  * Unless required by applicable law or agreed to in writing, software
 *  * distributed under the License is distributed on an "AS IS" BASIS,
 *  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  * See the License for the specific language governing permissions and
 *  * limitations under the License.
 *
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
/**
 * @author Vitaliy Fedoriv
 */





var PetEditComponent = /** @class */ (function () {
    function PetEditComponent(petService, petTypeService, router, route) {
        this.petService = petService;
        this.petTypeService = petTypeService;
        this.router = router;
        this.route = route;
        this.pet = {};
        this.currentOwner = {};
        this.currentType = {};
        this.petTypes = [];
    }
    PetEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.petTypeService.getPetTypes().subscribe(function (pettypes) { return _this.petTypes = pettypes; }, function (error) { return _this.errorMessage = error; });
        var petId = this.route.snapshot.params.id;
        this.petService.getPetById(petId).subscribe(function (pet) {
            _this.pet = pet;
            _this.currentOwner = _this.pet.owner;
            _this.currentType = _this.pet.type;
        }, function (error) { return _this.errorMessage = error; });
    };
    PetEditComponent.prototype.onSubmit = function (pet) {
        var _this = this;
        pet.type = this.currentType;
        var that = this;
        // format output from datepicker to short string yyyy/mm/dd format
        pet.birthDate = moment__WEBPACK_IMPORTED_MODULE_4__(pet.birthDate).format('YYYY/MM/DD');
        this.petService.updatePet(pet.id.toString(), pet).subscribe(function (res) { return _this.gotoOwnerDetail(_this.currentOwner); }, function (error) { return _this.errorMessage = error; });
    };
    PetEditComponent.prototype.gotoOwnerDetail = function (owner) {
        this.router.navigate(['/owners', owner.id]);
    };
    PetEditComponent.ctorParameters = function () { return [
        { type: _pet_service__WEBPACK_IMPORTED_MODULE_1__["PetService"] },
        { type: _pettypes_pettype_service__WEBPACK_IMPORTED_MODULE_3__["PetTypeService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PetEditComponent.prototype, "currentType", void 0);
    PetEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pet-edit',
            template: __importDefault(__webpack_require__(/*! raw-loader!./pet-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pets/pet-edit/pet-edit.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./pet-edit.component.css */ "./src/app/pets/pet-edit/pet-edit.component.css")).default]
        }),
        __metadata("design:paramtypes", [_pet_service__WEBPACK_IMPORTED_MODULE_1__["PetService"], _pettypes_pettype_service__WEBPACK_IMPORTED_MODULE_3__["PetTypeService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], PetEditComponent);
    return PetEditComponent;
}());



/***/ }),

/***/ "./src/app/pets/pet-list/pet-list.component.css":
/*!******************************************************!*\
  !*** ./src/app/pets/pet-list/pet-list.component.css ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/*\n *\n *  * Copyright 2016-2017 the original author or authors.\n *  *\n *  * Licensed under the Apache License, Version 2.0 (the \"License\");\n *  * you may not use this file except in compliance with the License.\n *  * You may obtain a copy of the License at\n *  *\n *  *      http://www.apache.org/licenses/LICENSE-2.0\n *  *\n *  * Unless required by applicable law or agreed to in writing, software\n *  * distributed under the License is distributed on an \"AS IS\" BASIS,\n *  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *  * See the License for the specific language governing permissions and\n *  * limitations under the License.\n *\n */\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGV0cy9wZXQtbGlzdC9wZXQtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7O0VBZ0JFIiwiZmlsZSI6InNyYy9hcHAvcGV0cy9wZXQtbGlzdC9wZXQtbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqXG4gKiAgKiBDb3B5cmlnaHQgMjAxNi0yMDE3IHRoZSBvcmlnaW5hbCBhdXRob3Igb3IgYXV0aG9ycy5cbiAqICAqXG4gKiAgKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKiAgKlxuICogICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqICAqXG4gKiAgKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiAgKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiAgKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqICAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqICAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICpcbiAqL1xuXG4iXX0= */");

/***/ }),

/***/ "./src/app/pets/pet-list/pet-list.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/pets/pet-list/pet-list.component.ts ***!
  \*****************************************************/
/*! exports provided: PetListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PetListComponent", function() { return PetListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _pet_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pet.service */ "./src/app/pets/pet.service.ts");
/*
 *
 *  * Copyright 2016-2017 the original author or authors.
 *  *
 *  * Licensed under the Apache License, Version 2.0 (the "License");
 *  * you may not use this file except in compliance with the License.
 *  * You may obtain a copy of the License at
 *  *
 *  *      http://www.apache.org/licenses/LICENSE-2.0
 *  *
 *  * Unless required by applicable law or agreed to in writing, software
 *  * distributed under the License is distributed on an "AS IS" BASIS,
 *  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  * See the License for the specific language governing permissions and
 *  * limitations under the License.
 *
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
/**
 * @author Vitaliy Fedoriv
 */



var PetListComponent = /** @class */ (function () {
    function PetListComponent(router, petService) {
        this.router = router;
        this.petService = petService;
        this.deleteSuccess = false;
        this.pet = {};
    }
    PetListComponent.prototype.ngOnInit = function () {
    };
    PetListComponent.prototype.editPet = function (pet) {
        this.router.navigate(['/pets', pet.id, 'edit']);
    };
    PetListComponent.prototype.deletePet = function (pet) {
        var _this = this;
        this.petService.deletePet(pet.id.toString()).subscribe(function (response) {
            _this.deleteSuccess = true;
            _this.pet = {};
        }, function (error) { return _this.errorMessage = error; });
    };
    PetListComponent.prototype.addVisit = function (pet) {
        this.router.navigate(['/pets', pet.id, 'visits', 'add']);
    };
    PetListComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _pet_service__WEBPACK_IMPORTED_MODULE_2__["PetService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PetListComponent.prototype, "pet", void 0);
    PetListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pet-list',
            template: __importDefault(__webpack_require__(/*! raw-loader!./pet-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pets/pet-list/pet-list.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./pet-list.component.css */ "./src/app/pets/pet-list/pet-list.component.css")).default]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _pet_service__WEBPACK_IMPORTED_MODULE_2__["PetService"]])
    ], PetListComponent);
    return PetListComponent;
}());



/***/ }),

/***/ "./src/app/pets/pet.service.ts":
/*!*************************************!*\
  !*** ./src/app/pets/pet.service.ts ***!
  \*************************************/
/*! exports provided: PetService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PetService", function() { return PetService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _error_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../error.service */ "./src/app/error.service.ts");
/*
 *
 *  * Copyright 2016-2017 the original author or authors.
 *  *
 *  * Licensed under the Apache License, Version 2.0 (the "License");
 *  * you may not use this file except in compliance with the License.
 *  * You may obtain a copy of the License at
 *  *
 *  *      http://www.apache.org/licenses/LICENSE-2.0
 *  *
 *  * Unless required by applicable law or agreed to in writing, software
 *  * distributed under the License is distributed on an "AS IS" BASIS,
 *  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  * See the License for the specific language governing permissions and
 *  * limitations under the License.
 *
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
/**
 * @author Vitaliy Fedoriv
 */





var PetService = /** @class */ (function () {
    function PetService(http, httpErrorHandler) {
        this.http = http;
        this.httpErrorHandler = httpErrorHandler;
        this.entityUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].REST_API_URL + 'pets';
        this.handlerError = httpErrorHandler.createHandleError('OwnerService');
    }
    PetService.prototype.getPets = function () {
        return this.http.get(this.entityUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handlerError('getPets', [])));
    };
    PetService.prototype.getPetById = function (petId) {
        return this.http.get(this.entityUrl + '/' + petId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handlerError('getPetById', {})));
    };
    PetService.prototype.addPet = function (pet) {
        return this.http.post(this.entityUrl, pet)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handlerError('addPet', pet)));
    };
    PetService.prototype.updatePet = function (petId, pet) {
        return this.http.put(this.entityUrl + '/' + petId, pet)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handlerError('updatePet', pet)));
    };
    PetService.prototype.deletePet = function (petId) {
        return this.http.delete(this.entityUrl + '/' + petId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handlerError('deletePet', 0)));
    };
    PetService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _error_service__WEBPACK_IMPORTED_MODULE_4__["HttpErrorHandler"] }
    ]; };
    PetService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _error_service__WEBPACK_IMPORTED_MODULE_4__["HttpErrorHandler"]])
    ], PetService);
    return PetService;
}());



/***/ }),

/***/ "./src/app/pets/pets-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pets/pets-routing.module.ts ***!
  \*********************************************/
/*! exports provided: PetsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PetsRoutingModule", function() { return PetsRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _pet_list_pet_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pet-list/pet-list.component */ "./src/app/pets/pet-list/pet-list.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _visits_visit_add_visit_add_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../visits/visit-add/visit-add.component */ "./src/app/visits/visit-add/visit-add.component.ts");
/* harmony import */ var _pet_edit_pet_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pet-edit/pet-edit.component */ "./src/app/pets/pet-edit/pet-edit.component.ts");
/* harmony import */ var _pet_add_pet_add_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pet-add/pet-add.component */ "./src/app/pets/pet-add/pet-add.component.ts");
/*
 *
 *  * Copyright 2016-2017 the original author or authors.
 *  *
 *  * Licensed under the Apache License, Version 2.0 (the "License");
 *  * you may not use this file except in compliance with the License.
 *  * You may obtain a copy of the License at
 *  *
 *  *      http://www.apache.org/licenses/LICENSE-2.0
 *  *
 *  * Unless required by applicable law or agreed to in writing, software
 *  * distributed under the License is distributed on an "AS IS" BASIS,
 *  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  * See the License for the specific language governing permissions and
 *  * limitations under the License.
 *
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
/**
 * @author Vitaliy Fedoriv
 */






var petRoutes = [
    { path: 'pets', component: _pet_list_pet_list_component__WEBPACK_IMPORTED_MODULE_1__["PetListComponent"] },
    { path: 'pets/add', component: _pet_add_pet_add_component__WEBPACK_IMPORTED_MODULE_5__["PetAddComponent"] },
    {
        path: 'pets/:id',
        children: [
            {
                path: 'edit',
                component: _pet_edit_pet_edit_component__WEBPACK_IMPORTED_MODULE_4__["PetEditComponent"]
            },
            {
                path: 'visits\/add',
                component: _visits_visit_add_visit_add_component__WEBPACK_IMPORTED_MODULE_3__["VisitAddComponent"]
            }
        ]
    }
];
var PetsRoutingModule = /** @class */ (function () {
    function PetsRoutingModule() {
    }
    PetsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(petRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        })
    ], PetsRoutingModule);
    return PetsRoutingModule;
}());



/***/ }),

/***/ "./src/app/pets/pets.module.ts":
/*!*************************************!*\
  !*** ./src/app/pets/pets.module.ts ***!
  \*************************************/
/*! exports provided: MY_DATE_FORMATS, PetsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MY_DATE_FORMATS", function() { return MY_DATE_FORMATS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PetsModule", function() { return PetsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _pets_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pets-routing.module */ "./src/app/pets/pets-routing.module.ts");
/* harmony import */ var _pet_list_pet_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pet-list/pet-list.component */ "./src/app/pets/pet-list/pet-list.component.ts");
/* harmony import */ var _pet_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pet.service */ "./src/app/pets/pet.service.ts");
/* harmony import */ var _visits_visits_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../visits/visits.module */ "./src/app/visits/visits.module.ts");
/* harmony import */ var _pet_edit_pet_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pet-edit/pet-edit.component */ "./src/app/pets/pet-edit/pet-edit.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _pet_add_pet_add_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pet-add/pet-add.component */ "./src/app/pets/pet-add/pet-add.component.ts");
/* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material-moment-adapter */ "./node_modules/@angular/material-moment-adapter/__ivy_ngcc__/esm5/material-moment-adapter.es5.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/datepicker.es5.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/core.es5.js");
/*
 *
 *  * Copyright 2016-2017 the original author or authors.
 *  *
 *  * Licensed under the Apache License, Version 2.0 (the "License");
 *  * you may not use this file except in compliance with the License.
 *  * You may obtain a copy of the License at
 *  *
 *  *      http://www.apache.org/licenses/LICENSE-2.0
 *  *
 *  * Unless required by applicable law or agreed to in writing, software
 *  * distributed under the License is distributed on an "AS IS" BASIS,
 *  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  * See the License for the specific language governing permissions and
 *  * limitations under the License.
 *
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
/**
 * @author Vitaliy Fedoriv
 */












var MY_DATE_FORMATS = {
    parse: {
        dateInput: 'YYYY/MM/DD',
    },
    display: {
        dateInput: 'YYYY/MM/DD',
        monthYearLabel: 'MM YYYY',
        dateA11yLabel: 'YYYY/MM/DD',
        monthYearA11yLabel: 'MM YYYY',
    },
};
var PetsModule = /** @class */ (function () {
    function PetsModule() {
    }
    PetsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerModule"],
                _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_9__["MatMomentDateModule"],
                _pets_routing_module__WEBPACK_IMPORTED_MODULE_2__["PetsRoutingModule"],
                _visits_visits_module__WEBPACK_IMPORTED_MODULE_5__["VisitsModule"]
            ],
            declarations: [
                _pet_list_pet_list_component__WEBPACK_IMPORTED_MODULE_3__["PetListComponent"],
                _pet_edit_pet_edit_component__WEBPACK_IMPORTED_MODULE_6__["PetEditComponent"],
                _pet_add_pet_add_component__WEBPACK_IMPORTED_MODULE_8__["PetAddComponent"]
            ],
            exports: [
                _pet_list_pet_list_component__WEBPACK_IMPORTED_MODULE_3__["PetListComponent"],
                _pet_edit_pet_edit_component__WEBPACK_IMPORTED_MODULE_6__["PetEditComponent"],
                _pet_add_pet_add_component__WEBPACK_IMPORTED_MODULE_8__["PetAddComponent"]
            ],
            providers: [
                _pet_service__WEBPACK_IMPORTED_MODULE_4__["PetService"],
                { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["DateAdapter"], useClass: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_9__["MomentDateAdapter"], deps: [_angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MAT_DATE_LOCALE"]] },
                { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MAT_DATE_FORMATS"], useValue: MY_DATE_FORMATS }
            ]
        })
    ], PetsModule);
    return PetsModule;
}());



/***/ }),

/***/ "./src/app/pettypes/pettype-add/pettype-add.component.css":
/*!****************************************************************!*\
  !*** ./src/app/pettypes/pettype-add/pettype-add.component.css ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BldHR5cGVzL3BldHR5cGUtYWRkL3BldHR5cGUtYWRkLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/pettypes/pettype-add/pettype-add.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/pettypes/pettype-add/pettype-add.component.ts ***!
  \***************************************************************/
/*! exports provided: PettypeAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PettypeAddComponent", function() { return PettypeAddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _pettype_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pettype.service */ "./src/app/pettypes/pettype.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var PettypeAddComponent = /** @class */ (function () {
    function PettypeAddComponent(pettypeService) {
        this.pettypeService = pettypeService;
        this.newPetType = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.pettype = {};
    }
    PettypeAddComponent.prototype.ngOnInit = function () {
    };
    PettypeAddComponent.prototype.onSubmit = function (pettype) {
        var _this = this;
        pettype.id = null;
        this.pettypeService.addPetType(pettype).subscribe(function (newPettype) {
            _this.pettype = newPettype;
            _this.newPetType.emit(_this.pettype);
        }, function (error) { return _this.errorMessage = error; });
    };
    PettypeAddComponent.ctorParameters = function () { return [
        { type: _pettype_service__WEBPACK_IMPORTED_MODULE_1__["PetTypeService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], PettypeAddComponent.prototype, "newPetType", void 0);
    PettypeAddComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pettype-add',
            template: __importDefault(__webpack_require__(/*! raw-loader!./pettype-add.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pettypes/pettype-add/pettype-add.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./pettype-add.component.css */ "./src/app/pettypes/pettype-add/pettype-add.component.css")).default]
        }),
        __metadata("design:paramtypes", [_pettype_service__WEBPACK_IMPORTED_MODULE_1__["PetTypeService"]])
    ], PettypeAddComponent);
    return PettypeAddComponent;
}());



/***/ }),

/***/ "./src/app/pettypes/pettype-edit/pettype-edit.component.css":
/*!******************************************************************!*\
  !*** ./src/app/pettypes/pettype-edit/pettype-edit.component.css ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BldHR5cGVzL3BldHR5cGUtZWRpdC9wZXR0eXBlLWVkaXQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/pettypes/pettype-edit/pettype-edit.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pettypes/pettype-edit/pettype-edit.component.ts ***!
  \*****************************************************************/
/*! exports provided: PettypeEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PettypeEditComponent", function() { return PettypeEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _pettype_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pettype.service */ "./src/app/pettypes/pettype.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/*
 *
 *  * Copyright 2017-2018 the original author or authors.
 *  *
 *  * Licensed under the Apache License, Version 2.0 (the "License");
 *  * you may not use this file except in compliance with the License.
 *  * You may obtain a copy of the License at
 *  *
 *  *      http://www.apache.org/licenses/LICENSE-2.0
 *  *
 *  * Unless required by applicable law or agreed to in writing, software
 *  * distributed under the License is distributed on an "AS IS" BASIS,
 *  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  * See the License for the specific language governing permissions and
 *  * limitations under the License.
 *
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
/**
 * @author Vitaliy Fedoriv
 */



var PettypeEditComponent = /** @class */ (function () {
    function PettypeEditComponent(pettypeService, route, router) {
        this.pettypeService = pettypeService;
        this.route = route;
        this.router = router;
        this.pettype = {};
    }
    PettypeEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        var pettypeId = this.route.snapshot.params.id;
        this.pettypeService.getPetTypeById(pettypeId).subscribe(function (pettype) { return _this.pettype = pettype; }, function (error) { return _this.errorMessage = error; });
    };
    PettypeEditComponent.prototype.onSubmit = function (pettype) {
        var _this = this;
        this.pettypeService.updatePetType(pettype.id.toString(), pettype).subscribe(function (res) {
            console.log('update success');
            _this.onBack();
        }, function (error) { return _this.errorMessage = error; });
    };
    PettypeEditComponent.prototype.onBack = function () {
        this.router.navigate(['/pettypes']);
    };
    PettypeEditComponent.ctorParameters = function () { return [
        { type: _pettype_service__WEBPACK_IMPORTED_MODULE_1__["PetTypeService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    PettypeEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pettype-edit',
            template: __importDefault(__webpack_require__(/*! raw-loader!./pettype-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pettypes/pettype-edit/pettype-edit.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./pettype-edit.component.css */ "./src/app/pettypes/pettype-edit/pettype-edit.component.css")).default]
        }),
        __metadata("design:paramtypes", [_pettype_service__WEBPACK_IMPORTED_MODULE_1__["PetTypeService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], PettypeEditComponent);
    return PettypeEditComponent;
}());



/***/ }),

/***/ "./src/app/pettypes/pettype-list/pettype-list.component.css":
/*!******************************************************************!*\
  !*** ./src/app/pettypes/pettype-list/pettype-list.component.css ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BldHR5cGVzL3BldHR5cGUtbGlzdC9wZXR0eXBlLWxpc3QuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/pettypes/pettype-list/pettype-list.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pettypes/pettype-list/pettype-list.component.ts ***!
  \*****************************************************************/
/*! exports provided: PettypeListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PettypeListComponent", function() { return PettypeListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _pettype_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pettype.service */ "./src/app/pettypes/pettype.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var PettypeListComponent = /** @class */ (function () {
    function PettypeListComponent(pettypeService, router) {
        this.pettypeService = pettypeService;
        this.router = router;
        this.isInsert = false;
        this.pettypes = [];
    }
    PettypeListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pettypeService.getPetTypes().subscribe(function (pettypes) { return _this.pettypes = pettypes; }, function (error) { return _this.errorMessage = error; });
    };
    PettypeListComponent.prototype.deletePettype = function (pettype) {
        var _this = this;
        this.pettypeService.deletePetType(pettype.id.toString()).subscribe(function (response) {
            _this.responseStatus = response;
            _this.pettypes = _this.pettypes.filter(function (currentItem) { return !(currentItem.id === pettype.id); });
        }, function (error) { return _this.errorMessage = error; });
    };
    PettypeListComponent.prototype.onNewPettype = function (newPetType) {
        this.pettypes.push(newPetType);
        this.showAddPettypeComponent();
    };
    PettypeListComponent.prototype.showAddPettypeComponent = function () {
        this.isInsert = !this.isInsert;
    };
    PettypeListComponent.prototype.showEditPettypeComponent = function (updatedPetType) {
        this.router.navigate(['/pettypes', updatedPetType.id.toString(), 'edit']);
    };
    PettypeListComponent.prototype.gotoHome = function () {
        this.router.navigate(['/welcome']);
    };
    PettypeListComponent.ctorParameters = function () { return [
        { type: _pettype_service__WEBPACK_IMPORTED_MODULE_2__["PetTypeService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
    ]; };
    PettypeListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pettype-list',
            template: __importDefault(__webpack_require__(/*! raw-loader!./pettype-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pettypes/pettype-list/pettype-list.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./pettype-list.component.css */ "./src/app/pettypes/pettype-list/pettype-list.component.css")).default]
        }),
        __metadata("design:paramtypes", [_pettype_service__WEBPACK_IMPORTED_MODULE_2__["PetTypeService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], PettypeListComponent);
    return PettypeListComponent;
}());



/***/ }),

/***/ "./src/app/pettypes/pettype.service.ts":
/*!*********************************************!*\
  !*** ./src/app/pettypes/pettype.service.ts ***!
  \*********************************************/
/*! exports provided: PetTypeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PetTypeService", function() { return PetTypeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _error_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../error.service */ "./src/app/error.service.ts");
/*
 *
 *  * Copyright 2016-2017 the original author or authors.
 *  *
 *  * Licensed under the Apache License, Version 2.0 (the "License");
 *  * you may not use this file except in compliance with the License.
 *  * You may obtain a copy of the License at
 *  *
 *  *      http://www.apache.org/licenses/LICENSE-2.0
 *  *
 *  * Unless required by applicable law or agreed to in writing, software
 *  * distributed under the License is distributed on an "AS IS" BASIS,
 *  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  * See the License for the specific language governing permissions and
 *  * limitations under the License.
 *
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
/**
 * @author Vitaliy Fedoriv
 */





var PetTypeService = /** @class */ (function () {
    function PetTypeService(http, httpErrorHandler) {
        this.http = http;
        this.httpErrorHandler = httpErrorHandler;
        this.entityUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].REST_API_URL + 'pettypes';
        this.handlerError = httpErrorHandler.createHandleError('OwnerService');
    }
    PetTypeService.prototype.getPetTypes = function () {
        return this.http.get(this.entityUrl)
            .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handlerError('getPetTypes', [])));
    };
    PetTypeService.prototype.getPetTypeById = function (typeId) {
        return this.http.get((this.entityUrl + '/' + typeId))
            .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handlerError('getPetTypeById', {})));
    };
    PetTypeService.prototype.updatePetType = function (typeId, petType) {
        return this.http.put(this.entityUrl + '/' + typeId, petType)
            .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handlerError('updatePetType', petType)));
    };
    PetTypeService.prototype.addPetType = function (petType) {
        return this.http.post(this.entityUrl, petType)
            .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handlerError('addPetType', petType)));
    };
    PetTypeService.prototype.deletePetType = function (typeId) {
        return this.http.delete(this.entityUrl + '/' + typeId)
            .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handlerError('deletePetType', 0)));
    };
    PetTypeService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _error_service__WEBPACK_IMPORTED_MODULE_4__["HttpErrorHandler"] }
    ]; };
    PetTypeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _error_service__WEBPACK_IMPORTED_MODULE_4__["HttpErrorHandler"]])
    ], PetTypeService);
    return PetTypeService;
}());



/***/ }),

/***/ "./src/app/pettypes/pettypes-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pettypes/pettypes-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: PettypesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PettypesRoutingModule", function() { return PettypesRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _pettype_list_pettype_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pettype-list/pettype-list.component */ "./src/app/pettypes/pettype-list/pettype-list.component.ts");
/* harmony import */ var _pettype_add_pettype_add_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pettype-add/pettype-add.component */ "./src/app/pettypes/pettype-add/pettype-add.component.ts");
/* harmony import */ var _pettype_edit_pettype_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pettype-edit/pettype-edit.component */ "./src/app/pettypes/pettype-edit/pettype-edit.component.ts");
/*
 *
 *  * Copyright 2016-2017 the original author or authors.
 *  *
 *  * Licensed under the Apache License, Version 2.0 (the "License");
 *  * you may not use this file except in compliance with the License.
 *  * You may obtain a copy of the License at
 *  *
 *  *      http://www.apache.org/licenses/LICENSE-2.0
 *  *
 *  * Unless required by applicable law or agreed to in writing, software
 *  * distributed under the License is distributed on an "AS IS" BASIS,
 *  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  * See the License for the specific language governing permissions and
 *  * limitations under the License.
 *
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
/**
 * @author Vitaliy Fedoriv
 */





var pettypesRoutes = [
    { path: 'pettypes', component: _pettype_list_pettype_list_component__WEBPACK_IMPORTED_MODULE_2__["PettypeListComponent"] },
    { path: 'pettypes/add', component: _pettype_add_pettype_add_component__WEBPACK_IMPORTED_MODULE_3__["PettypeAddComponent"] },
    { path: 'pettypes/:id/edit', component: _pettype_edit_pettype_edit_component__WEBPACK_IMPORTED_MODULE_4__["PettypeEditComponent"] }
];
var PettypesRoutingModule = /** @class */ (function () {
    function PettypesRoutingModule() {
    }
    PettypesRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(pettypesRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], PettypesRoutingModule);
    return PettypesRoutingModule;
}());



/***/ }),

/***/ "./src/app/pettypes/pettypes.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pettypes/pettypes.module.ts ***!
  \*********************************************/
/*! exports provided: PetTypesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PetTypesModule", function() { return PetTypesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _pettype_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pettype.service */ "./src/app/pettypes/pettype.service.ts");
/* harmony import */ var _pettype_list_pettype_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pettype-list/pettype-list.component */ "./src/app/pettypes/pettype-list/pettype-list.component.ts");
/* harmony import */ var _pettype_add_pettype_add_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pettype-add/pettype-add.component */ "./src/app/pettypes/pettype-add/pettype-add.component.ts");
/* harmony import */ var _pettype_edit_pettype_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pettype-edit/pettype-edit.component */ "./src/app/pettypes/pettype-edit/pettype-edit.component.ts");
/* harmony import */ var _pettypes_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pettypes-routing.module */ "./src/app/pettypes/pettypes-routing.module.ts");
/*
 *
 *  * Copyright 2016-2017 the original author or authors.
 *  *
 *  * Licensed under the Apache License, Version 2.0 (the "License");
 *  * you may not use this file except in compliance with the License.
 *  * You may obtain a copy of the License at
 *  *
 *  *      http://www.apache.org/licenses/LICENSE-2.0
 *  *
 *  * Unless required by applicable law or agreed to in writing, software
 *  * distributed under the License is distributed on an "AS IS" BASIS,
 *  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  * See the License for the specific language governing permissions and
 *  * limitations under the License.
 *
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
/**
 * @author Vitaliy Fedoriv
 */








var PetTypesModule = /** @class */ (function () {
    function PetTypesModule() {
    }
    PetTypesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _pettypes_routing_module__WEBPACK_IMPORTED_MODULE_7__["PettypesRoutingModule"]
            ],
            declarations: [
                _pettype_list_pettype_list_component__WEBPACK_IMPORTED_MODULE_4__["PettypeListComponent"],
                _pettype_add_pettype_add_component__WEBPACK_IMPORTED_MODULE_5__["PettypeAddComponent"],
                _pettype_edit_pettype_edit_component__WEBPACK_IMPORTED_MODULE_6__["PettypeEditComponent"]
            ],
            exports: [
                _pettype_list_pettype_list_component__WEBPACK_IMPORTED_MODULE_4__["PettypeListComponent"]
            ],
            providers: [_pettype_service__WEBPACK_IMPORTED_MODULE_3__["PetTypeService"]]
        })
    ], PetTypesModule);
    return PetTypesModule;
}());



/***/ }),

/***/ "./src/app/specialties/spec-resolver.ts":
/*!**********************************************!*\
  !*** ./src/app/specialties/spec-resolver.ts ***!
  \**********************************************/
/*! exports provided: SpecResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpecResolver", function() { return SpecResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _specialty_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./specialty.service */ "./src/app/specialties/specialty.service.ts");
/*
 *
 *  * Copyright 2016-2017 the original author or authors.
 *  *
 *  * Licensed under the Apache License, Version 2.0 (the "License");
 *  * you may not use this file except in compliance with the License.
 *  * You may obtain a copy of the License at
 *  *
 *  *      http://www.apache.org/licenses/LICENSE-2.0
 *  *
 *  * Unless required by applicable law or agreed to in writing, software
 *  * distributed under the License is distributed on an "AS IS" BASIS,
 *  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  * See the License for the specific language governing permissions and
 *  * limitations under the License.
 *
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


/**
 * @author Vitaliy Fedoriv
 */
var SpecResolver = /** @class */ (function () {
    function SpecResolver(specialtyService) {
        this.specialtyService = specialtyService;
    }
    SpecResolver.prototype.resolve = function () {
        return this.specialtyService.getSpecialties();
    };
    SpecResolver.ctorParameters = function () { return [
        { type: _specialty_service__WEBPACK_IMPORTED_MODULE_1__["SpecialtyService"] }
    ]; };
    SpecResolver = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_specialty_service__WEBPACK_IMPORTED_MODULE_1__["SpecialtyService"]])
    ], SpecResolver);
    return SpecResolver;
}());



/***/ }),

/***/ "./src/app/specialties/specialties-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/specialties/specialties-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: SpecialtiesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpecialtiesRoutingModule", function() { return SpecialtiesRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _specialty_list_specialty_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./specialty-list/specialty-list.component */ "./src/app/specialties/specialty-list/specialty-list.component.ts");
/* harmony import */ var _specialty_edit_specialty_edit_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./specialty-edit/specialty-edit.component */ "./src/app/specialties/specialty-edit/specialty-edit.component.ts");
/*
 *
 *  * Copyright 2016-2017 the original author or authors.
 *  *
 *  * Licensed under the Apache License, Version 2.0 (the "License");
 *  * you may not use this file except in compliance with the License.
 *  * You may obtain a copy of the License at
 *  *
 *  *      http://www.apache.org/licenses/LICENSE-2.0
 *  *
 *  * Unless required by applicable law or agreed to in writing, software
 *  * distributed under the License is distributed on an "AS IS" BASIS,
 *  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  * See the License for the specific language governing permissions and
 *  * limitations under the License.
 *
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
/**
 * @author Vitaliy Fedoriv
 */




var specialtyRoutes = [
    { path: 'specialties', component: _specialty_list_specialty_list_component__WEBPACK_IMPORTED_MODULE_2__["SpecialtyListComponent"] },
    // {path: 'specialties/add', component: SpecialtyAddComponent},
    // {path: 'specialties/:id', component: SpecialtyDetailComponent},
    { path: 'specialties/:id/edit', component: _specialty_edit_specialty_edit_component__WEBPACK_IMPORTED_MODULE_3__["SpecialtyEditComponent"] }
];
var SpecialtiesRoutingModule = /** @class */ (function () {
    function SpecialtiesRoutingModule() {
    }
    SpecialtiesRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(specialtyRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], SpecialtiesRoutingModule);
    return SpecialtiesRoutingModule;
}());



/***/ }),

/***/ "./src/app/specialties/specialties.module.ts":
/*!***************************************************!*\
  !*** ./src/app/specialties/specialties.module.ts ***!
  \***************************************************/
/*! exports provided: SpecialtiesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpecialtiesModule", function() { return SpecialtiesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _specialty_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./specialty.service */ "./src/app/specialties/specialty.service.ts");
/* harmony import */ var _specialty_list_specialty_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./specialty-list/specialty-list.component */ "./src/app/specialties/specialty-list/specialty-list.component.ts");
/* harmony import */ var _specialties_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./specialties-routing.module */ "./src/app/specialties/specialties-routing.module.ts");
/* harmony import */ var _specialty_add_specialty_add_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./specialty-add/specialty-add.component */ "./src/app/specialties/specialty-add/specialty-add.component.ts");
/* harmony import */ var _specialty_edit_specialty_edit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./specialty-edit/specialty-edit.component */ "./src/app/specialties/specialty-edit/specialty-edit.component.ts");
/* harmony import */ var _spec_resolver__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./spec-resolver */ "./src/app/specialties/spec-resolver.ts");
/*
 *
 *  * Copyright 2016-2017 the original author or authors.
 *  *
 *  * Licensed under the Apache License, Version 2.0 (the "License");
 *  * you may not use this file except in compliance with the License.
 *  * You may obtain a copy of the License at
 *  *
 *  *      http://www.apache.org/licenses/LICENSE-2.0
 *  *
 *  * Unless required by applicable law or agreed to in writing, software
 *  * distributed under the License is distributed on an "AS IS" BASIS,
 *  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  * See the License for the specific language governing permissions and
 *  * limitations under the License.
 *
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
/**
 * @author Vitaliy Fedoriv
 */









var SpecialtiesModule = /** @class */ (function () {
    function SpecialtiesModule() {
    }
    SpecialtiesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _specialties_routing_module__WEBPACK_IMPORTED_MODULE_5__["SpecialtiesRoutingModule"]
            ],
            declarations: [
                _specialty_list_specialty_list_component__WEBPACK_IMPORTED_MODULE_4__["SpecialtyListComponent"],
                _specialty_add_specialty_add_component__WEBPACK_IMPORTED_MODULE_6__["SpecialtyAddComponent"],
                _specialty_edit_specialty_edit_component__WEBPACK_IMPORTED_MODULE_7__["SpecialtyEditComponent"]
            ],
            exports: [
                _specialty_list_specialty_list_component__WEBPACK_IMPORTED_MODULE_4__["SpecialtyListComponent"]
            ],
            providers: [_specialty_service__WEBPACK_IMPORTED_MODULE_3__["SpecialtyService"], _spec_resolver__WEBPACK_IMPORTED_MODULE_8__["SpecResolver"]]
        })
    ], SpecialtiesModule);
    return SpecialtiesModule;
}());



/***/ }),

/***/ "./src/app/specialties/specialty-add/specialty-add.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/specialties/specialty-add/specialty-add.component.css ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NwZWNpYWx0aWVzL3NwZWNpYWx0eS1hZGQvc3BlY2lhbHR5LWFkZC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/specialties/specialty-add/specialty-add.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/specialties/specialty-add/specialty-add.component.ts ***!
  \**********************************************************************/
/*! exports provided: SpecialtyAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpecialtyAddComponent", function() { return SpecialtyAddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _specialty_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../specialty.service */ "./src/app/specialties/specialty.service.ts");
/*
 *
 *  * Copyright 2016-2017 the original author or authors.
 *  *
 *  * Licensed under the Apache License, Version 2.0 (the "License");
 *  * you may not use this file except in compliance with the License.
 *  * You may obtain a copy of the License at
 *  *
 *  *      http://www.apache.org/licenses/LICENSE-2.0
 *  *
 *  * Unless required by applicable law or agreed to in writing, software
 *  * distributed under the License is distributed on an "AS IS" BASIS,
 *  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  * See the License for the specific language governing permissions and
 *  * limitations under the License.
 *
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var SpecialtyAddComponent = /** @class */ (function () {
    function SpecialtyAddComponent(specialtyService) {
        this.specialtyService = specialtyService;
        this.addedSuccess = false;
        this.newSpeciality = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.specialty = {};
    }
    SpecialtyAddComponent.prototype.ngOnInit = function () {
    };
    SpecialtyAddComponent.prototype.onSubmit = function (specialty) {
        var _this = this;
        specialty.id = null;
        this.specialtyService.addSpecialty(specialty).subscribe(function (newSpecialty) {
            _this.specialty = newSpecialty;
            _this.addedSuccess = true;
            _this.newSpeciality.emit(_this.specialty);
        }, function (error) { return _this.errorMessage = error; });
    };
    SpecialtyAddComponent.ctorParameters = function () { return [
        { type: _specialty_service__WEBPACK_IMPORTED_MODULE_1__["SpecialtyService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], SpecialtyAddComponent.prototype, "newSpeciality", void 0);
    SpecialtyAddComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-specialty-add',
            template: __importDefault(__webpack_require__(/*! raw-loader!./specialty-add.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/specialties/specialty-add/specialty-add.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./specialty-add.component.css */ "./src/app/specialties/specialty-add/specialty-add.component.css")).default]
        }),
        __metadata("design:paramtypes", [_specialty_service__WEBPACK_IMPORTED_MODULE_1__["SpecialtyService"]])
    ], SpecialtyAddComponent);
    return SpecialtyAddComponent;
}());



/***/ }),

/***/ "./src/app/specialties/specialty-edit/specialty-edit.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/specialties/specialty-edit/specialty-edit.component.css ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NwZWNpYWx0aWVzL3NwZWNpYWx0eS1lZGl0L3NwZWNpYWx0eS1lZGl0LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/specialties/specialty-edit/specialty-edit.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/specialties/specialty-edit/specialty-edit.component.ts ***!
  \************************************************************************/
/*! exports provided: SpecialtyEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpecialtyEditComponent", function() { return SpecialtyEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _specialty_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../specialty.service */ "./src/app/specialties/specialty.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/*
 *
 *  * Copyright 2017-2018 the original author or authors.
 *  *
 *  * Licensed under the Apache License, Version 2.0 (the "License");
 *  * you may not use this file except in compliance with the License.
 *  * You may obtain a copy of the License at
 *  *
 *  *      http://www.apache.org/licenses/LICENSE-2.0
 *  *
 *  * Unless required by applicable law or agreed to in writing, software
 *  * distributed under the License is distributed on an "AS IS" BASIS,
 *  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  * See the License for the specific language governing permissions and
 *  * limitations under the License.
 *
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
/**
 * @author Vitaliy Fedoriv
 */



var SpecialtyEditComponent = /** @class */ (function () {
    function SpecialtyEditComponent(specialtyService, route, router) {
        this.specialtyService = specialtyService;
        this.route = route;
        this.router = router;
        this.specialty = {};
    }
    SpecialtyEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        var specId = this.route.snapshot.params.id;
        this.specialtyService.getSpecialtyById(specId).subscribe(function (specialty) { return _this.specialty = specialty; }, function (error) { return _this.errorMessage = error; });
    };
    SpecialtyEditComponent.prototype.onSubmit = function (specialty) {
        var _this = this;
        this.specialtyService.updateSpecialty(specialty.id.toString(), specialty).subscribe(function (res) {
            console.log('update success');
            _this.onBack();
        }, function (error) { return _this.errorMessage = error; });
    };
    SpecialtyEditComponent.prototype.onBack = function () {
        this.router.navigate(['/specialties']);
    };
    SpecialtyEditComponent.ctorParameters = function () { return [
        { type: _specialty_service__WEBPACK_IMPORTED_MODULE_1__["SpecialtyService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    SpecialtyEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-specialty-edit',
            template: __importDefault(__webpack_require__(/*! raw-loader!./specialty-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/specialties/specialty-edit/specialty-edit.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./specialty-edit.component.css */ "./src/app/specialties/specialty-edit/specialty-edit.component.css")).default]
        }),
        __metadata("design:paramtypes", [_specialty_service__WEBPACK_IMPORTED_MODULE_1__["SpecialtyService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SpecialtyEditComponent);
    return SpecialtyEditComponent;
}());



/***/ }),

/***/ "./src/app/specialties/specialty-list/specialty-list.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/specialties/specialty-list/specialty-list.component.css ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/*\n *\n *  * Copyright 2016-2017 the original author or authors.\n *  *\n *  * Licensed under the Apache License, Version 2.0 (the \"License\");\n *  * you may not use this file except in compliance with the License.\n *  * You may obtain a copy of the License at\n *  *\n *  *      http://www.apache.org/licenses/LICENSE-2.0\n *  *\n *  * Unless required by applicable law or agreed to in writing, software\n *  * distributed under the License is distributed on an \"AS IS\" BASIS,\n *  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *  * See the License for the specific language governing permissions and\n *  * limitations under the License.\n *\n */\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3BlY2lhbHRpZXMvc3BlY2lhbHR5LWxpc3Qvc3BlY2lhbHR5LWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7OztFQWdCRSIsImZpbGUiOiJzcmMvYXBwL3NwZWNpYWx0aWVzL3NwZWNpYWx0eS1saXN0L3NwZWNpYWx0eS1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICpcbiAqICAqIENvcHlyaWdodCAyMDE2LTIwMTcgdGhlIG9yaWdpbmFsIGF1dGhvciBvciBhdXRob3JzLlxuICogICpcbiAqICAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiAgKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiAgKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqICAqXG4gKiAgKiAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICogICpcbiAqICAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqICAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqICAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKlxuICovXG5cbiJdfQ== */");

/***/ }),

/***/ "./src/app/specialties/specialty-list/specialty-list.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/specialties/specialty-list/specialty-list.component.ts ***!
  \************************************************************************/
/*! exports provided: SpecialtyListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpecialtyListComponent", function() { return SpecialtyListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _specialty_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../specialty.service */ "./src/app/specialties/specialty.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/*
 *
 *  * Copyright 2016-2018 the original author or authors.
 *  *
 *  * Licensed under the Apache License, Version 2.0 (the "License");
 *  * you may not use this file except in compliance with the License.
 *  * You may obtain a copy of the License at
 *  *
 *  *      http://www.apache.org/licenses/LICENSE-2.0
 *  *
 *  * Unless required by applicable law or agreed to in writing, software
 *  * distributed under the License is distributed on an "AS IS" BASIS,
 *  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  * See the License for the specific language governing permissions and
 *  * limitations under the License.
 *
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
/**
 * @author Vitaliy Fedoriv
 */



var SpecialtyListComponent = /** @class */ (function () {
    function SpecialtyListComponent(specService, router) {
        this.specService = specService;
        this.router = router;
        this.isInsert = false;
        this.specialties = [];
    }
    SpecialtyListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.specService.getSpecialties().subscribe(function (specialties) { return _this.specialties = specialties; }, function (error) { return _this.errorMessage = error; });
    };
    SpecialtyListComponent.prototype.deleteSpecialty = function (specialty) {
        var _this = this;
        this.specService.deleteSpecialty(specialty.id.toString()).subscribe(function (response) {
            _this.responseStatus = response;
            _this.specialties = _this.specialties.filter(function (currentItem) { return !(currentItem.id === specialty.id); });
        }, function (error) { return _this.errorMessage = error; });
    };
    SpecialtyListComponent.prototype.onNewSpecialty = function (newSpecialty) {
        this.specialties.push(newSpecialty);
        this.showAddSpecialtyComponent();
    };
    SpecialtyListComponent.prototype.showAddSpecialtyComponent = function () {
        this.isInsert = !this.isInsert;
    };
    SpecialtyListComponent.prototype.showEditSpecialtyComponent = function (updatedSpecialty) {
        this.router.navigate(['/specialties', updatedSpecialty.id.toString(), 'edit']);
    };
    SpecialtyListComponent.prototype.gotoHome = function () {
        this.router.navigate(['/welcome']);
    };
    SpecialtyListComponent.ctorParameters = function () { return [
        { type: _specialty_service__WEBPACK_IMPORTED_MODULE_1__["SpecialtyService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    SpecialtyListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-specialty-list',
            template: __importDefault(__webpack_require__(/*! raw-loader!./specialty-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/specialties/specialty-list/specialty-list.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./specialty-list.component.css */ "./src/app/specialties/specialty-list/specialty-list.component.css")).default]
        }),
        __metadata("design:paramtypes", [_specialty_service__WEBPACK_IMPORTED_MODULE_1__["SpecialtyService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SpecialtyListComponent);
    return SpecialtyListComponent;
}());



/***/ }),

/***/ "./src/app/specialties/specialty.service.ts":
/*!**************************************************!*\
  !*** ./src/app/specialties/specialty.service.ts ***!
  \**************************************************/
/*! exports provided: SpecialtyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpecialtyService", function() { return SpecialtyService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _error_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../error.service */ "./src/app/error.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/*
 *
 *  * Copyright 2016-2017 the original author or authors.
 *  *
 *  * Licensed under the Apache License, Version 2.0 (the "License");
 *  * you may not use this file except in compliance with the License.
 *  * You may obtain a copy of the License at
 *  *
 *  *      http://www.apache.org/licenses/LICENSE-2.0
 *  *
 *  * Unless required by applicable law or agreed to in writing, software
 *  * distributed under the License is distributed on an "AS IS" BASIS,
 *  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  * See the License for the specific language governing permissions and
 *  * limitations under the License.
 *
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
/**
 * @author Vitaliy Fedoriv
 */





var SpecialtyService = /** @class */ (function () {
    function SpecialtyService(http, httpErrorHandler) {
        this.http = http;
        this.httpErrorHandler = httpErrorHandler;
        this.entityUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].REST_API_URL + 'specialties';
        this.handlerError = httpErrorHandler.createHandleError('OwnerService');
    }
    SpecialtyService.prototype.getSpecialties = function () {
        return this.http.get(this.entityUrl)
            .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handlerError('getSpecialties', [])));
    };
    SpecialtyService.prototype.getSpecialtyById = function (specId) {
        return this.http.get((this.entityUrl + '/' + specId))
            .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handlerError('getSpecialtyById', {})));
    };
    SpecialtyService.prototype.addSpecialty = function (specialty) {
        return this.http.post(this.entityUrl, specialty)
            .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handlerError('addSpecialty', specialty)));
    };
    SpecialtyService.prototype.updateSpecialty = function (specId, specialty) {
        return this.http.put((this.entityUrl + '/' + specId), specialty)
            .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handlerError('updateSpecialty', specialty)));
    };
    SpecialtyService.prototype.deleteSpecialty = function (specId) {
        return this.http.delete((this.entityUrl + '/' + specId))
            .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handlerError('deleteSpecialty', 0)));
    };
    SpecialtyService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
        { type: _error_service__WEBPACK_IMPORTED_MODULE_3__["HttpErrorHandler"] }
    ]; };
    SpecialtyService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], _error_service__WEBPACK_IMPORTED_MODULE_3__["HttpErrorHandler"]])
    ], SpecialtyService);
    return SpecialtyService;
}());



/***/ }),

/***/ "./src/app/vets/vet-add/vet-add.component.css":
/*!****************************************************!*\
  !*** ./src/app/vets/vet-add/vet-add.component.css ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/*\n *\n *  * Copyright 2016-2017 the original author or authors.\n *  *\n *  * Licensed under the Apache License, Version 2.0 (the \"License\");\n *  * you may not use this file except in compliance with the License.\n *  * You may obtain a copy of the License at\n *  *\n *  *      http://www.apache.org/licenses/LICENSE-2.0\n *  *\n *  * Unless required by applicable law or agreed to in writing, software\n *  * distributed under the License is distributed on an \"AS IS\" BASIS,\n *  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *  * See the License for the specific language governing permissions and\n *  * limitations under the License.\n *\n */\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmV0cy92ZXQtYWRkL3ZldC1hZGQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7OztFQWdCRSIsImZpbGUiOiJzcmMvYXBwL3ZldHMvdmV0LWFkZC92ZXQtYWRkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICpcbiAqICAqIENvcHlyaWdodCAyMDE2LTIwMTcgdGhlIG9yaWdpbmFsIGF1dGhvciBvciBhdXRob3JzLlxuICogICpcbiAqICAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiAgKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiAgKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqICAqXG4gKiAgKiAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICogICpcbiAqICAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqICAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqICAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKlxuICovXG5cbiJdfQ== */");

/***/ }),

/***/ "./src/app/vets/vet-add/vet-add.component.ts":
/*!***************************************************!*\
  !*** ./src/app/vets/vet-add/vet-add.component.ts ***!
  \***************************************************/
/*! exports provided: VetAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VetAddComponent", function() { return VetAddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var app_specialties_specialty_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/specialties/specialty.service */ "./src/app/specialties/specialty.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _vet_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../vet.service */ "./src/app/vets/vet.service.ts");
/*
 *
 *  * Copyright 2016-2018 the original author or authors.
 *  *
 *  * Licensed under the Apache License, Version 2.0 (the "License");
 *  * you may not use this file except in compliance with the License.
 *  * You may obtain a copy of the License at
 *  *
 *  *      http://www.apache.org/licenses/LICENSE-2.0
 *  *
 *  * Unless required by applicable law or agreed to in writing, software
 *  * distributed under the License is distributed on an "AS IS" BASIS,
 *  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  * See the License for the specific language governing permissions and
 *  * limitations under the License.
 *
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
/**
 * @author Vitaliy Fedoriv
 */




var VetAddComponent = /** @class */ (function () {
    function VetAddComponent(specialtyService, vetService, router) {
        this.specialtyService = specialtyService;
        this.vetService = vetService;
        this.router = router;
        this.vet = {};
        this.selectedSpecialty = {};
        this.specialtiesList = [];
    }
    VetAddComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.specialtyService.getSpecialties().subscribe(function (specialties) { return _this.specialtiesList = specialties; }, function (error) { return _this.errorMessage = error; });
    };
    VetAddComponent.prototype.onSubmit = function (vet) {
        var _this = this;
        vet.id = null;
        vet.specialties = [];
        if (this.selectedSpecialty.id !== undefined) {
            vet.specialties.push(this.selectedSpecialty);
        }
        this.vetService.addVet(vet).subscribe(function (newVet) {
            _this.vet = newVet;
            _this.gotoVetList();
        }, function (error) { return _this.errorMessage = error; });
    };
    VetAddComponent.prototype.gotoVetList = function () {
        this.router.navigate(['/vets']);
    };
    VetAddComponent.ctorParameters = function () { return [
        { type: app_specialties_specialty_service__WEBPACK_IMPORTED_MODULE_1__["SpecialtyService"] },
        { type: _vet_service__WEBPACK_IMPORTED_MODULE_3__["VetService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    VetAddComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-vet-add',
            template: __importDefault(__webpack_require__(/*! raw-loader!./vet-add.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/vets/vet-add/vet-add.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./vet-add.component.css */ "./src/app/vets/vet-add/vet-add.component.css")).default]
        }),
        __metadata("design:paramtypes", [app_specialties_specialty_service__WEBPACK_IMPORTED_MODULE_1__["SpecialtyService"], _vet_service__WEBPACK_IMPORTED_MODULE_3__["VetService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], VetAddComponent);
    return VetAddComponent;
}());



/***/ }),

/***/ "./src/app/vets/vet-edit/vet-edit.component.css":
/*!******************************************************!*\
  !*** ./src/app/vets/vet-edit/vet-edit.component.css ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/*\n *\n *  * Copyright 2016-2017 the original author or authors.\n *  *\n *  * Licensed under the Apache License, Version 2.0 (the \"License\");\n *  * you may not use this file except in compliance with the License.\n *  * You may obtain a copy of the License at\n *  *\n *  *      http://www.apache.org/licenses/LICENSE-2.0\n *  *\n *  * Unless required by applicable law or agreed to in writing, software\n *  * distributed under the License is distributed on an \"AS IS\" BASIS,\n *  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *  * See the License for the specific language governing permissions and\n *  * limitations under the License.\n *\n */\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmV0cy92ZXQtZWRpdC92ZXQtZWRpdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7O0VBZ0JFIiwiZmlsZSI6InNyYy9hcHAvdmV0cy92ZXQtZWRpdC92ZXQtZWRpdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqXG4gKiAgKiBDb3B5cmlnaHQgMjAxNi0yMDE3IHRoZSBvcmlnaW5hbCBhdXRob3Igb3IgYXV0aG9ycy5cbiAqICAqXG4gKiAgKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKiAgKlxuICogICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqICAqXG4gKiAgKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiAgKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiAgKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqICAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqICAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICpcbiAqL1xuXG4iXX0= */");

/***/ }),

/***/ "./src/app/vets/vet-edit/vet-edit.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/vets/vet-edit/vet-edit.component.ts ***!
  \*****************************************************/
/*! exports provided: VetEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VetEditComponent", function() { return VetEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _vet_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../vet.service */ "./src/app/vets/vet.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _specialties_specialty_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../specialties/specialty.service */ "./src/app/specialties/specialty.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/*
 *
 *  * Copyright 2016-2018 the original author or authors.
 *  *
 *  * Licensed under the Apache License, Version 2.0 (the "License");
 *  * you may not use this file except in compliance with the License.
 *  * You may obtain a copy of the License at
 *  *
 *  *      http://www.apache.org/licenses/LICENSE-2.0
 *  *
 *  * Unless required by applicable law or agreed to in writing, software
 *  * distributed under the License is distributed on an "AS IS" BASIS,
 *  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  * See the License for the specific language governing permissions and
 *  * limitations under the License.
 *
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
/**
 * @author Vitaliy Fedoriv
 */





var VetEditComponent = /** @class */ (function () {
    function VetEditComponent(formBuilder, specialtyService, vetService, route, router) {
        this.formBuilder = formBuilder;
        this.specialtyService = specialtyService;
        this.vetService = vetService;
        this.route = route;
        this.router = router;
        this.vet = {};
        this.specList = [];
        this.buildForm();
    }
    VetEditComponent.prototype.buildForm = function () {
        this.idCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null);
        this.firstNameCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(2)]);
        this.lastNameCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(2)]);
        this.specialtiesCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null);
        this.vetEditForm = this.formBuilder.group({
            id: this.idCtrl,
            firstName: this.firstNameCtrl,
            lastName: this.lastNameCtrl,
            specialties: this.specialtiesCtrl
        });
    };
    VetEditComponent.prototype.compareSpecFn = function (c1, c2) {
        return c1 && c2 ? c1.id === c2.id : c1 === c2;
    };
    VetEditComponent.prototype.initFormValues = function () {
        this.idCtrl.setValue(this.vet.id);
        this.firstNameCtrl.setValue(this.vet.firstName);
        this.lastNameCtrl.setValue(this.vet.lastName);
        this.specialtiesCtrl.setValue(this.vet.specialties);
    };
    VetEditComponent.prototype.ngOnInit = function () {
        // we use SpecResolver and VetResolver (get data before init component)
        this.specList = this.route.snapshot.data.specs;
        this.vet = this.route.snapshot.data.vet;
        this.vet.specialties = this.route.snapshot.data.vet.specialties;
        this.initFormValues();
    };
    VetEditComponent.prototype.onSubmit = function (vet) {
        var _this = this;
        this.vetService.updateVet(vet.id.toString(), vet).subscribe(function (res) {
            console.log('update success');
            _this.gotoVetList();
        }, function (error) { return _this.errorMessage = error; });
    };
    VetEditComponent.prototype.gotoVetList = function () {
        this.router.navigate(['/vets']);
    };
    VetEditComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
        { type: _specialties_specialty_service__WEBPACK_IMPORTED_MODULE_3__["SpecialtyService"] },
        { type: _vet_service__WEBPACK_IMPORTED_MODULE_1__["VetService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    VetEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-vet-edit',
            template: __importDefault(__webpack_require__(/*! raw-loader!./vet-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/vets/vet-edit/vet-edit.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./vet-edit.component.css */ "./src/app/vets/vet-edit/vet-edit.component.css")).default]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _specialties_specialty_service__WEBPACK_IMPORTED_MODULE_3__["SpecialtyService"],
            _vet_service__WEBPACK_IMPORTED_MODULE_1__["VetService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], VetEditComponent);
    return VetEditComponent;
}());



/***/ }),

/***/ "./src/app/vets/vet-list/vet-list.component.css":
/*!******************************************************!*\
  !*** ./src/app/vets/vet-list/vet-list.component.css ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/*\n *\n *  * Copyright 2016-2017 the original author or authors.\n *  *\n *  * Licensed under the Apache License, Version 2.0 (the \"License\");\n *  * you may not use this file except in compliance with the License.\n *  * You may obtain a copy of the License at\n *  *\n *  *      http://www.apache.org/licenses/LICENSE-2.0\n *  *\n *  * Unless required by applicable law or agreed to in writing, software\n *  * distributed under the License is distributed on an \"AS IS\" BASIS,\n *  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *  * See the License for the specific language governing permissions and\n *  * limitations under the License.\n *\n */\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmV0cy92ZXQtbGlzdC92ZXQtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7O0VBZ0JFIiwiZmlsZSI6InNyYy9hcHAvdmV0cy92ZXQtbGlzdC92ZXQtbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqXG4gKiAgKiBDb3B5cmlnaHQgMjAxNi0yMDE3IHRoZSBvcmlnaW5hbCBhdXRob3Igb3IgYXV0aG9ycy5cbiAqICAqXG4gKiAgKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKiAgKlxuICogICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqICAqXG4gKiAgKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiAgKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiAgKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqICAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqICAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICpcbiAqL1xuXG4iXX0= */");

/***/ }),

/***/ "./src/app/vets/vet-list/vet-list.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/vets/vet-list/vet-list.component.ts ***!
  \*****************************************************/
/*! exports provided: VetListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VetListComponent", function() { return VetListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _vet_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../vet.service */ "./src/app/vets/vet.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/*
 *
 *  * Copyright 2016-2017 the original author or authors.
 *  *
 *  * Licensed under the Apache License, Version 2.0 (the "License");
 *  * you may not use this file except in compliance with the License.
 *  * You may obtain a copy of the License at
 *  *
 *  *      http://www.apache.org/licenses/LICENSE-2.0
 *  *
 *  * Unless required by applicable law or agreed to in writing, software
 *  * distributed under the License is distributed on an "AS IS" BASIS,
 *  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  * See the License for the specific language governing permissions and
 *  * limitations under the License.
 *
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
/**
 * @author Vitaliy Fedoriv
 */



var VetListComponent = /** @class */ (function () {
    function VetListComponent(vetService, router) {
        this.vetService = vetService;
        this.router = router;
        this.vets = [];
    }
    VetListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.vetService.getVets().subscribe(function (vets) { return _this.vets = vets; }, function (error) { return _this.errorMessage = error; });
    };
    VetListComponent.prototype.deleteVet = function (vet) {
        var _this = this;
        this.vetService.deleteVet(vet.id.toString()).subscribe(function (response) {
            _this.responseStatus = response;
            _this.vets = _this.vets.filter(function (currentItem) { return !(currentItem.id === vet.id); });
        }, function (error) { return _this.errorMessage = error; });
    };
    VetListComponent.prototype.gotoHome = function () {
        this.router.navigate(['/welcome']);
    };
    VetListComponent.prototype.addVet = function () {
        this.router.navigate(['/vets/add']);
    };
    VetListComponent.prototype.editVet = function (vet) {
        this.router.navigate(['/vets', vet.id, 'edit']);
    };
    VetListComponent.ctorParameters = function () { return [
        { type: _vet_service__WEBPACK_IMPORTED_MODULE_1__["VetService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    VetListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-vet-list',
            template: __importDefault(__webpack_require__(/*! raw-loader!./vet-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/vets/vet-list/vet-list.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./vet-list.component.css */ "./src/app/vets/vet-list/vet-list.component.css")).default]
        }),
        __metadata("design:paramtypes", [_vet_service__WEBPACK_IMPORTED_MODULE_1__["VetService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], VetListComponent);
    return VetListComponent;
}());



/***/ }),

/***/ "./src/app/vets/vet-resolver.ts":
/*!**************************************!*\
  !*** ./src/app/vets/vet-resolver.ts ***!
  \**************************************/
/*! exports provided: VetResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VetResolver", function() { return VetResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _vet_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vet.service */ "./src/app/vets/vet.service.ts");
/*
 *
 *  * Copyright 2016-2018 the original author or authors.
 *  *
 *  * Licensed under the Apache License, Version 2.0 (the "License");
 *  * you may not use this file except in compliance with the License.
 *  * You may obtain a copy of the License at
 *  *
 *  *      http://www.apache.org/licenses/LICENSE-2.0
 *  *
 *  * Unless required by applicable law or agreed to in writing, software
 *  * distributed under the License is distributed on an "AS IS" BASIS,
 *  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  * See the License for the specific language governing permissions and
 *  * limitations under the License.
 *
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


/**
 * @author Vitaliy Fedoriv
 */
var VetResolver = /** @class */ (function () {
    function VetResolver(vetService) {
        this.vetService = vetService;
    }
    VetResolver.prototype.resolve = function (route, state) {
        return this.vetService.getVetById(route.paramMap.get('id'));
    };
    VetResolver.ctorParameters = function () { return [
        { type: _vet_service__WEBPACK_IMPORTED_MODULE_1__["VetService"] }
    ]; };
    VetResolver = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_vet_service__WEBPACK_IMPORTED_MODULE_1__["VetService"]])
    ], VetResolver);
    return VetResolver;
}());



/***/ }),

/***/ "./src/app/vets/vet.service.ts":
/*!*************************************!*\
  !*** ./src/app/vets/vet.service.ts ***!
  \*************************************/
/*! exports provided: VetService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VetService", function() { return VetService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _error_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../error.service */ "./src/app/error.service.ts");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__);
/*
 *
 *  * Copyright 2016-2017 the original author or authors.
 *  *
 *  * Licensed under the Apache License, Version 2.0 (the "License");
 *  * you may not use this file except in compliance with the License.
 *  * You may obtain a copy of the License at
 *  *
 *  *      http://www.apache.org/licenses/LICENSE-2.0
 *  *
 *  * Unless required by applicable law or agreed to in writing, software
 *  * distributed under the License is distributed on an "AS IS" BASIS,
 *  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  * See the License for the specific language governing permissions and
 *  * limitations under the License.
 *
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
/**
 * @author Vitaliy Fedoriv
 */





var VetService = /** @class */ (function () {
    function VetService(http, httpErrorHandler) {
        this.http = http;
        this.httpErrorHandler = httpErrorHandler;
        this.entityUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].REST_API_URL + 'vets';
        this.handlerError = httpErrorHandler.createHandleError('OwnerService');
    }
    VetService.prototype.getVets = function () {
        return this.http.get(this.entityUrl)
            .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handlerError('getVets', [])));
    };
    VetService.prototype.getVetById = function (vetId) {
        return this.http.get((this.entityUrl + '/' + vetId))
            .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handlerError('getVetById', {})));
    };
    VetService.prototype.updateVet = function (vetId, vet) {
        return this.http.put(this.entityUrl + '/' + vetId, vet)
            .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handlerError('updateVet', vet)));
    };
    VetService.prototype.addVet = function (vet) {
        return this.http.post(this.entityUrl, vet)
            .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handlerError('addVet', vet)));
    };
    VetService.prototype.deleteVet = function (vetId) {
        return this.http.delete(this.entityUrl + '/' + vetId)
            .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handlerError('deleteVet', 0)));
    };
    VetService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _error_service__WEBPACK_IMPORTED_MODULE_3__["HttpErrorHandler"] }
    ]; };
    VetService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _error_service__WEBPACK_IMPORTED_MODULE_3__["HttpErrorHandler"]])
    ], VetService);
    return VetService;
}());



/***/ }),

/***/ "./src/app/vets/vets-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/vets/vets-routing.module.ts ***!
  \*********************************************/
/*! exports provided: VetsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VetsRoutingModule", function() { return VetsRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _vet_list_vet_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vet-list/vet-list.component */ "./src/app/vets/vet-list/vet-list.component.ts");
/* harmony import */ var _vet_add_vet_add_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vet-add/vet-add.component */ "./src/app/vets/vet-add/vet-add.component.ts");
/* harmony import */ var _vet_edit_vet_edit_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vet-edit/vet-edit.component */ "./src/app/vets/vet-edit/vet-edit.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _vet_resolver__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./vet-resolver */ "./src/app/vets/vet-resolver.ts");
/* harmony import */ var _specialties_spec_resolver__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../specialties/spec-resolver */ "./src/app/specialties/spec-resolver.ts");
/*
 *
 *  * Copyright 2016-2017 the original author or authors.
 *  *
 *  * Licensed under the Apache License, Version 2.0 (the "License");
 *  * you may not use this file except in compliance with the License.
 *  * You may obtain a copy of the License at
 *  *
 *  *      http://www.apache.org/licenses/LICENSE-2.0
 *  *
 *  * Unless required by applicable law or agreed to in writing, software
 *  * distributed under the License is distributed on an "AS IS" BASIS,
 *  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  * See the License for the specific language governing permissions and
 *  * limitations under the License.
 *
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
/**
 * @author Vitaliy Fedoriv
 */







var vetRoutes = [
    { path: 'vets', component: _vet_list_vet_list_component__WEBPACK_IMPORTED_MODULE_1__["VetListComponent"] },
    { path: 'vets/add', component: _vet_add_vet_add_component__WEBPACK_IMPORTED_MODULE_2__["VetAddComponent"] },
    { path: 'vets/:id/edit', component: _vet_edit_vet_edit_component__WEBPACK_IMPORTED_MODULE_3__["VetEditComponent"], resolve: { vet: _vet_resolver__WEBPACK_IMPORTED_MODULE_5__["VetResolver"], specs: _specialties_spec_resolver__WEBPACK_IMPORTED_MODULE_6__["SpecResolver"] } }
];
var VetsRoutingModule = /** @class */ (function () {
    function VetsRoutingModule() {
    }
    VetsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(vetRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        })
    ], VetsRoutingModule);
    return VetsRoutingModule;
}());



/***/ }),

/***/ "./src/app/vets/vets.module.ts":
/*!*************************************!*\
  !*** ./src/app/vets/vets.module.ts ***!
  \*************************************/
/*! exports provided: VetsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VetsModule", function() { return VetsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/select.es5.js");
/* harmony import */ var _vet_list_vet_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./vet-list/vet-list.component */ "./src/app/vets/vet-list/vet-list.component.ts");
/* harmony import */ var _vet_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./vet.service */ "./src/app/vets/vet.service.ts");
/* harmony import */ var _vets_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./vets-routing.module */ "./src/app/vets/vets-routing.module.ts");
/* harmony import */ var _vet_edit_vet_edit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./vet-edit/vet-edit.component */ "./src/app/vets/vet-edit/vet-edit.component.ts");
/* harmony import */ var _vet_add_vet_add_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./vet-add/vet-add.component */ "./src/app/vets/vet-add/vet-add.component.ts");
/* harmony import */ var _vet_resolver__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./vet-resolver */ "./src/app/vets/vet-resolver.ts");
/*
 *
 *  * Copyright 2016-2018 the original author or authors.
 *  *
 *  * Licensed under the Apache License, Version 2.0 (the "License");
 *  * you may not use this file except in compliance with the License.
 *  * You may obtain a copy of the License at
 *  *
 *  *      http://www.apache.org/licenses/LICENSE-2.0
 *  *
 *  * Unless required by applicable law or agreed to in writing, software
 *  * distributed under the License is distributed on an "AS IS" BASIS,
 *  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  * See the License for the specific language governing permissions and
 *  * limitations under the License.
 *
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
/**
 * @author Vitaliy Fedoriv
 */










var VetsModule = /** @class */ (function () {
    function VetsModule() {
    }
    VetsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"],
                _vets_routing_module__WEBPACK_IMPORTED_MODULE_6__["VetsRoutingModule"]
            ],
            declarations: [
                _vet_list_vet_list_component__WEBPACK_IMPORTED_MODULE_4__["VetListComponent"],
                _vet_edit_vet_edit_component__WEBPACK_IMPORTED_MODULE_7__["VetEditComponent"],
                _vet_add_vet_add_component__WEBPACK_IMPORTED_MODULE_8__["VetAddComponent"]
            ],
            exports: [
                _vet_list_vet_list_component__WEBPACK_IMPORTED_MODULE_4__["VetListComponent"],
                _vet_edit_vet_edit_component__WEBPACK_IMPORTED_MODULE_7__["VetEditComponent"],
                _vet_add_vet_add_component__WEBPACK_IMPORTED_MODULE_8__["VetAddComponent"]
            ],
            providers: [_vet_service__WEBPACK_IMPORTED_MODULE_5__["VetService"], _vet_resolver__WEBPACK_IMPORTED_MODULE_9__["VetResolver"]]
        })
    ], VetsModule);
    return VetsModule;
}());



/***/ }),

/***/ "./src/app/visits/visit-add/visit-add.component.css":
/*!**********************************************************!*\
  !*** ./src/app/visits/visit-add/visit-add.component.css ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/*\n *\n *  * Copyright 2016-2017 the original author or authors.\n *  *\n *  * Licensed under the Apache License, Version 2.0 (the \"License\");\n *  * you may not use this file except in compliance with the License.\n *  * You may obtain a copy of the License at\n *  *\n *  *      http://www.apache.org/licenses/LICENSE-2.0\n *  *\n *  * Unless required by applicable law or agreed to in writing, software\n *  * distributed under the License is distributed on an \"AS IS\" BASIS,\n *  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *  * See the License for the specific language governing permissions and\n *  * limitations under the License.\n *\n */\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlzaXRzL3Zpc2l0LWFkZC92aXNpdC1hZGQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7OztFQWdCRSIsImZpbGUiOiJzcmMvYXBwL3Zpc2l0cy92aXNpdC1hZGQvdmlzaXQtYWRkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICpcbiAqICAqIENvcHlyaWdodCAyMDE2LTIwMTcgdGhlIG9yaWdpbmFsIGF1dGhvciBvciBhdXRob3JzLlxuICogICpcbiAqICAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiAgKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiAgKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqICAqXG4gKiAgKiAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICogICpcbiAqICAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqICAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqICAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKlxuICovXG5cbiJdfQ== */");

/***/ }),

/***/ "./src/app/visits/visit-add/visit-add.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/visits/visit-add/visit-add.component.ts ***!
  \*********************************************************/
/*! exports provided: VisitAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisitAddComponent", function() { return VisitAddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _visit_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../visit.service */ "./src/app/visits/visit.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _pets_pet_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../pets/pet.service */ "./src/app/pets/pet.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/src/moment.js");
/*
 *
 *  * Copyright 2016-2017 the original author or authors.
 *  *
 *  * Licensed under the Apache License, Version 2.0 (the "License");
 *  * you may not use this file except in compliance with the License.
 *  * You may obtain a copy of the License at
 *  *
 *  *      http://www.apache.org/licenses/LICENSE-2.0
 *  *
 *  * Unless required by applicable law or agreed to in writing, software
 *  * distributed under the License is distributed on an "AS IS" BASIS,
 *  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  * See the License for the specific language governing permissions and
 *  * limitations under the License.
 *
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
/**
 * @author Vitaliy Fedoriv
 */





var VisitAddComponent = /** @class */ (function () {
    function VisitAddComponent(visitService, petService, router, route) {
        this.visitService = visitService;
        this.petService = petService;
        this.router = router;
        this.route = route;
        this.addedSuccess = false;
        this.visit = {};
        this.currentPet = {};
        this.currentOwner = {};
        this.currentPetType = {};
    }
    VisitAddComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log(this.route.parent);
        var petId = this.route.snapshot.params.id;
        this.petService.getPetById(petId).subscribe(function (response) {
            _this.currentPet = response;
            _this.visit.pet = _this.currentPet;
            _this.currentPetType = _this.currentPet.type;
            _this.currentOwner = _this.currentPet.owner;
        }, function (error) { return _this.errorMessage = error; });
    };
    VisitAddComponent.prototype.onSubmit = function (visit) {
        var _this = this;
        visit.id = null;
        var that = this;
        // format output from datepicker to short string yyyy/mm/dd format
        visit.date = moment__WEBPACK_IMPORTED_MODULE_4__(visit.date).format('YYYY/MM/DD');
        this.visitService.addVisit(visit).subscribe(function (newVisit) {
            _this.visit = newVisit;
            _this.addedSuccess = true;
            that.gotoOwnerDetail();
        }, function (error) { return _this.errorMessage = error; });
    };
    VisitAddComponent.prototype.gotoOwnerDetail = function () {
        this.router.navigate(['/owners', this.currentOwner.id]);
    };
    VisitAddComponent.ctorParameters = function () { return [
        { type: _visit_service__WEBPACK_IMPORTED_MODULE_1__["VisitService"] },
        { type: _pets_pet_service__WEBPACK_IMPORTED_MODULE_3__["PetService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
    ]; };
    VisitAddComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-visit-add',
            template: __importDefault(__webpack_require__(/*! raw-loader!./visit-add.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/visits/visit-add/visit-add.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./visit-add.component.css */ "./src/app/visits/visit-add/visit-add.component.css")).default]
        }),
        __metadata("design:paramtypes", [_visit_service__WEBPACK_IMPORTED_MODULE_1__["VisitService"], _pets_pet_service__WEBPACK_IMPORTED_MODULE_3__["PetService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], VisitAddComponent);
    return VisitAddComponent;
}());



/***/ }),

/***/ "./src/app/visits/visit-edit/visit-edit.component.css":
/*!************************************************************!*\
  !*** ./src/app/visits/visit-edit/visit-edit.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/*\n *\n *  * Copyright 2016-2017 the original author or authors.\n *  *\n *  * Licensed under the Apache License, Version 2.0 (the \"License\");\n *  * you may not use this file except in compliance with the License.\n *  * You may obtain a copy of the License at\n *  *\n *  *      http://www.apache.org/licenses/LICENSE-2.0\n *  *\n *  * Unless required by applicable law or agreed to in writing, software\n *  * distributed under the License is distributed on an \"AS IS\" BASIS,\n *  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *  * See the License for the specific language governing permissions and\n *  * limitations under the License.\n *\n */\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlzaXRzL3Zpc2l0LWVkaXQvdmlzaXQtZWRpdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7O0VBZ0JFIiwiZmlsZSI6InNyYy9hcHAvdmlzaXRzL3Zpc2l0LWVkaXQvdmlzaXQtZWRpdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqXG4gKiAgKiBDb3B5cmlnaHQgMjAxNi0yMDE3IHRoZSBvcmlnaW5hbCBhdXRob3Igb3IgYXV0aG9ycy5cbiAqICAqXG4gKiAgKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKiAgKlxuICogICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqICAqXG4gKiAgKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiAgKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiAgKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqICAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqICAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICpcbiAqL1xuXG4iXX0= */");

/***/ }),

/***/ "./src/app/visits/visit-edit/visit-edit.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/visits/visit-edit/visit-edit.component.ts ***!
  \***********************************************************/
/*! exports provided: VisitEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisitEditComponent", function() { return VisitEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _visit_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../visit.service */ "./src/app/visits/visit.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/src/moment.js");
/*
 *
 *  * Copyright 2016-2017 the original author or authors.
 *  *
 *  * Licensed under the Apache License, Version 2.0 (the "License");
 *  * you may not use this file except in compliance with the License.
 *  * You may obtain a copy of the License at
 *  *
 *  *      http://www.apache.org/licenses/LICENSE-2.0
 *  *
 *  * Unless required by applicable law or agreed to in writing, software
 *  * distributed under the License is distributed on an "AS IS" BASIS,
 *  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  * See the License for the specific language governing permissions and
 *  * limitations under the License.
 *
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
/**
 * @author Vitaliy Fedoriv
 */




var VisitEditComponent = /** @class */ (function () {
    function VisitEditComponent(visitService, route, router) {
        this.visitService = visitService;
        this.route = route;
        this.router = router;
        this.updateSuccess = false;
        this.visit = {};
        this.currentPet = {};
        this.currentOwner = {};
        this.currentPetType = {};
    }
    VisitEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        var visitId = this.route.snapshot.params.id;
        this.visitService.getVisitById(visitId).subscribe(function (response) {
            _this.visit = response;
            _this.currentPet = _this.visit.pet;
            _this.currentPetType = _this.currentPet.type;
            _this.currentOwner = _this.currentPet.owner;
        }, function (error) { return _this.errorMessage = error; });
    };
    VisitEditComponent.prototype.onSubmit = function (visit) {
        var _this = this;
        visit.pet = this.currentPet;
        // format output from datepicker to short string yyyy/mm/dd format
        visit.date = moment__WEBPACK_IMPORTED_MODULE_3__(visit.date).format('YYYY/MM/DD');
        this.visitService.updateVisit(visit.id.toString(), visit).subscribe(function (res) { return _this.gotoOwnerDetail(); }, function (error) { return _this.errorMessage = error; });
    };
    VisitEditComponent.prototype.gotoOwnerDetail = function () {
        this.router.navigate(['/owners', this.currentOwner.id]);
    };
    VisitEditComponent.ctorParameters = function () { return [
        { type: _visit_service__WEBPACK_IMPORTED_MODULE_1__["VisitService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    VisitEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-visit-edit',
            template: __importDefault(__webpack_require__(/*! raw-loader!./visit-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/visits/visit-edit/visit-edit.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./visit-edit.component.css */ "./src/app/visits/visit-edit/visit-edit.component.css")).default]
        }),
        __metadata("design:paramtypes", [_visit_service__WEBPACK_IMPORTED_MODULE_1__["VisitService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], VisitEditComponent);
    return VisitEditComponent;
}());



/***/ }),

/***/ "./src/app/visits/visit-list/visit-list.component.css":
/*!************************************************************!*\
  !*** ./src/app/visits/visit-list/visit-list.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/*\n *\n *  * Copyright 2016-2017 the original author or authors.\n *  *\n *  * Licensed under the Apache License, Version 2.0 (the \"License\");\n *  * you may not use this file except in compliance with the License.\n *  * You may obtain a copy of the License at\n *  *\n *  *      http://www.apache.org/licenses/LICENSE-2.0\n *  *\n *  * Unless required by applicable law or agreed to in writing, software\n *  * distributed under the License is distributed on an \"AS IS\" BASIS,\n *  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *  * See the License for the specific language governing permissions and\n *  * limitations under the License.\n *\n */\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlzaXRzL3Zpc2l0LWxpc3QvdmlzaXQtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7O0VBZ0JFIiwiZmlsZSI6InNyYy9hcHAvdmlzaXRzL3Zpc2l0LWxpc3QvdmlzaXQtbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqXG4gKiAgKiBDb3B5cmlnaHQgMjAxNi0yMDE3IHRoZSBvcmlnaW5hbCBhdXRob3Igb3IgYXV0aG9ycy5cbiAqICAqXG4gKiAgKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKiAgKlxuICogICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqICAqXG4gKiAgKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiAgKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiAgKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqICAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqICAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICpcbiAqL1xuXG4iXX0= */");

/***/ }),

/***/ "./src/app/visits/visit-list/visit-list.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/visits/visit-list/visit-list.component.ts ***!
  \***********************************************************/
/*! exports provided: VisitListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisitListComponent", function() { return VisitListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _visit_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../visit.service */ "./src/app/visits/visit.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/*
 *
 *  * Copyright 2016-2017 the original author or authors.
 *  *
 *  * Licensed under the Apache License, Version 2.0 (the "License");
 *  * you may not use this file except in compliance with the License.
 *  * You may obtain a copy of the License at
 *  *
 *  *      http://www.apache.org/licenses/LICENSE-2.0
 *  *
 *  * Unless required by applicable law or agreed to in writing, software
 *  * distributed under the License is distributed on an "AS IS" BASIS,
 *  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  * See the License for the specific language governing permissions and
 *  * limitations under the License.
 *
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
/**
 * @author Vitaliy Fedoriv
 */



var VisitListComponent = /** @class */ (function () {
    function VisitListComponent(router, visitService) {
        this.router = router;
        this.visitService = visitService;
        this.noVisits = false;
        this.visits = [];
    }
    VisitListComponent.prototype.ngOnInit = function () {
    };
    VisitListComponent.prototype.editVisit = function (visit) {
        this.router.navigate(['/visits', visit.id, 'edit']);
    };
    VisitListComponent.prototype.deleteVisit = function (visit) {
        var _this = this;
        this.visitService.deleteVisit(visit.id.toString()).subscribe(function (response) {
            _this.responseStatus = response;
            console.log('delete success');
            _this.visits.splice(_this.visits.indexOf(visit), 1);
            if (_this.visits.length === 0) {
                _this.noVisits = true;
            }
        }, function (error) { return _this.errorMessage = error; });
    };
    VisitListComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _visit_service__WEBPACK_IMPORTED_MODULE_1__["VisitService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], VisitListComponent.prototype, "visits", void 0);
    VisitListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-visit-list',
            template: __importDefault(__webpack_require__(/*! raw-loader!./visit-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/visits/visit-list/visit-list.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./visit-list.component.css */ "./src/app/visits/visit-list/visit-list.component.css")).default]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _visit_service__WEBPACK_IMPORTED_MODULE_1__["VisitService"]])
    ], VisitListComponent);
    return VisitListComponent;
}());



/***/ }),

/***/ "./src/app/visits/visit.service.ts":
/*!*****************************************!*\
  !*** ./src/app/visits/visit.service.ts ***!
  \*****************************************/
/*! exports provided: VisitService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisitService", function() { return VisitService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _error_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../error.service */ "./src/app/error.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__);
/*
 *
 *  * Copyright 2016-2017 the original author or authors.
 *  *
 *  * Licensed under the Apache License, Version 2.0 (the "License");
 *  * you may not use this file except in compliance with the License.
 *  * You may obtain a copy of the License at
 *  *
 *  *      http://www.apache.org/licenses/LICENSE-2.0
 *  *
 *  * Unless required by applicable law or agreed to in writing, software
 *  * distributed under the License is distributed on an "AS IS" BASIS,
 *  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  * See the License for the specific language governing permissions and
 *  * limitations under the License.
 *
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
/**
 * @author Vitaliy Fedoriv
 */





var VisitService = /** @class */ (function () {
    function VisitService(http, httpErrorHandler) {
        this.http = http;
        this.httpErrorHandler = httpErrorHandler;
        this.entityUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].REST_API_URL + 'visits';
        this.handlerError = httpErrorHandler.createHandleError('OwnerService');
    }
    VisitService.prototype.getVisits = function () {
        return this.http.get(this.entityUrl)
            .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handlerError('getVisits', [])));
    };
    VisitService.prototype.getVisitById = function (visitId) {
        return this.http.get(this.entityUrl + '/' + visitId)
            .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handlerError('getVisitById', {})));
    };
    VisitService.prototype.addVisit = function (visit) {
        return this.http.post(this.entityUrl, visit)
            .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handlerError('addVisit', visit)));
    };
    VisitService.prototype.updateVisit = function (visitId, visit) {
        return this.http.put(this.entityUrl + '/' + visitId, visit)
            .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handlerError('updateVisit', visit)));
    };
    VisitService.prototype.deleteVisit = function (visitId) {
        return this.http.delete(this.entityUrl + '/' + visitId)
            .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handlerError('deleteVisit', 0)));
    };
    VisitService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: _error_service__WEBPACK_IMPORTED_MODULE_2__["HttpErrorHandler"] }
    ]; };
    VisitService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _error_service__WEBPACK_IMPORTED_MODULE_2__["HttpErrorHandler"]])
    ], VisitService);
    return VisitService;
}());



/***/ }),

/***/ "./src/app/visits/visits-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/visits/visits-routing.module.ts ***!
  \*************************************************/
/*! exports provided: VisitsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisitsRoutingModule", function() { return VisitsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _visit_list_visit_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./visit-list/visit-list.component */ "./src/app/visits/visit-list/visit-list.component.ts");
/* harmony import */ var _visit_edit_visit_edit_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./visit-edit/visit-edit.component */ "./src/app/visits/visit-edit/visit-edit.component.ts");
/* harmony import */ var _visit_add_visit_add_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./visit-add/visit-add.component */ "./src/app/visits/visit-add/visit-add.component.ts");
/*
 *
 *  * Copyright 2016-2017 the original author or authors.
 *  *
 *  * Licensed under the Apache License, Version 2.0 (the "License");
 *  * you may not use this file except in compliance with the License.
 *  * You may obtain a copy of the License at
 *  *
 *  *      http://www.apache.org/licenses/LICENSE-2.0
 *  *
 *  * Unless required by applicable law or agreed to in writing, software
 *  * distributed under the License is distributed on an "AS IS" BASIS,
 *  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  * See the License for the specific language governing permissions and
 *  * limitations under the License.
 *
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
/**
 * @author Vitaliy Fedoriv
 */





var visitRoutes = [
    { path: 'visits', component: _visit_list_visit_list_component__WEBPACK_IMPORTED_MODULE_2__["VisitListComponent"] },
    { path: 'visits/add', component: _visit_add_visit_add_component__WEBPACK_IMPORTED_MODULE_4__["VisitAddComponent"] },
    { path: 'visits/:id/edit', component: _visit_edit_visit_edit_component__WEBPACK_IMPORTED_MODULE_3__["VisitEditComponent"] }
];
var VisitsRoutingModule = /** @class */ (function () {
    function VisitsRoutingModule() {
    }
    VisitsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(visitRoutes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], VisitsRoutingModule);
    return VisitsRoutingModule;
}());



/***/ }),

/***/ "./src/app/visits/visits.module.ts":
/*!*****************************************!*\
  !*** ./src/app/visits/visits.module.ts ***!
  \*****************************************/
/*! exports provided: MY_DATE_FORMATS, VisitsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MY_DATE_FORMATS", function() { return MY_DATE_FORMATS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisitsModule", function() { return VisitsModule; });
/* harmony import */ var _visits_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./visits-routing.module */ "./src/app/visits/visits-routing.module.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _visit_list_visit_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./visit-list/visit-list.component */ "./src/app/visits/visit-list/visit-list.component.ts");
/* harmony import */ var _visit_edit_visit_edit_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./visit-edit/visit-edit.component */ "./src/app/visits/visit-edit/visit-edit.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _visit_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./visit.service */ "./src/app/visits/visit.service.ts");
/* harmony import */ var _visit_add_visit_add_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./visit-add/visit-add.component */ "./src/app/visits/visit-add/visit-add.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _pets_pets_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../pets/pets-routing.module */ "./src/app/pets/pets-routing.module.ts");
/* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material-moment-adapter */ "./node_modules/@angular/material-moment-adapter/__ivy_ngcc__/esm5/material-moment-adapter.es5.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/datepicker.es5.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/core.es5.js");
/*
 *
 *  * Copyright 2016-2017 the original author or authors.
 *  *
 *  * Licensed under the Apache License, Version 2.0 (the "License");
 *  * you may not use this file except in compliance with the License.
 *  * You may obtain a copy of the License at
 *  *
 *  *      http://www.apache.org/licenses/LICENSE-2.0
 *  *
 *  * Unless required by applicable law or agreed to in writing, software
 *  * distributed under the License is distributed on an "AS IS" BASIS,
 *  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  * See the License for the specific language governing permissions and
 *  * limitations under the License.
 *
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
/**
 * @author Vitaliy Fedoriv
 */












var MY_DATE_FORMATS = {
    parse: {
        dateInput: 'YYYY/MM/DD',
    },
    display: {
        dateInput: 'YYYY/MM/DD',
        monthYearLabel: 'MM YYYY',
        dateA11yLabel: 'YYYY/MM/DD',
        monthYearA11yLabel: 'MM YYYY',
    },
};
var VisitsModule = /** @class */ (function () {
    function VisitsModule() {
    }
    VisitsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerModule"],
                _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_9__["MatMomentDateModule"],
                _visits_routing_module__WEBPACK_IMPORTED_MODULE_0__["VisitsRoutingModule"],
                _pets_pets_routing_module__WEBPACK_IMPORTED_MODULE_8__["PetsRoutingModule"]
            ],
            declarations: [
                _visit_list_visit_list_component__WEBPACK_IMPORTED_MODULE_2__["VisitListComponent"],
                _visit_edit_visit_edit_component__WEBPACK_IMPORTED_MODULE_3__["VisitEditComponent"],
                _visit_add_visit_add_component__WEBPACK_IMPORTED_MODULE_6__["VisitAddComponent"]
            ],
            exports: [
                _visit_list_visit_list_component__WEBPACK_IMPORTED_MODULE_2__["VisitListComponent"],
                _visit_edit_visit_edit_component__WEBPACK_IMPORTED_MODULE_3__["VisitEditComponent"],
                _visit_add_visit_add_component__WEBPACK_IMPORTED_MODULE_6__["VisitAddComponent"]
            ],
            providers: [
                _visit_service__WEBPACK_IMPORTED_MODULE_5__["VisitService"],
                { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["DateAdapter"], useClass: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_9__["MomentDateAdapter"], deps: [_angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MAT_DATE_LOCALE"]] },
                { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MAT_DATE_FORMATS"], useValue: MY_DATE_FORMATS }
            ]
        })
    ], VisitsModule);
    return VisitsModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/*
 *
 *  * Copyright 2016-2017 the original author or authors.
 *  *
 *  * Licensed under the Apache License, Version 2.0 (the "License");
 *  * you may not use this file except in compliance with the License.
 *  * You may obtain a copy of the License at
 *  *
 *  *      http://www.apache.org/licenses/LICENSE-2.0
 *  *
 *  * Unless required by applicable law or agreed to in writing, software
 *  * distributed under the License is distributed on an "AS IS" BASIS,
 *  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  * See the License for the specific language governing permissions and
 *  * limitations under the License.
 *
 */
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    REST_API_URL: 'http://35.178.12.138:9966/petclinic/api/'
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/*
 *
 *  * Copyright 2016-2017 the original author or authors.
 *  *
 *  * Licensed under the Apache License, Version 2.0 (the "License");
 *  * you may not use this file except in compliance with the License.
 *  * You may obtain a copy of the License at
 *  *
 *  *      http://www.apache.org/licenses/LICENSE-2.0
 *  *
 *  * Unless required by applicable law or agreed to in writing, software
 *  * distributed under the License is distributed on an "AS IS" BASIS,
 *  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  * See the License for the specific language governing permissions and
 *  * limitations under the License.
 *
 */
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
// import './polyfills.ts';




if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_0__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/ubuntu/QAC-group-project/frontend/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map