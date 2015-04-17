/// <reference path="../../lib/scripts/angular.d.ts" />

import bController = require("../controller/BaseController")

interface BaseScope extends ng.IScope {
    ctrl:bController
}

export = BaseScope;
