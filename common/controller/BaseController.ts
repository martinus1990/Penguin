/// <reference path="../../lib/scripts/angular.d.ts" />
/// <reference path="../../lib/scripts/underscore.d.ts" />
import bScope = require('../model/BaseScope');
import _ = require('underscore');


class BaseController{
    
    definedArguments(args:any):string[] {
        var functionText = args.callee.toString();
        var foundArgs = /\(([^)]+)/.exec(functionText);
        if (foundArgs[1]) {
            return foundArgs[1].split(/\s*,\s*/);
        }

        return [];
    }

    constructor(args:any, injection:string[]){

        var expectedInjections = _.zip(this.definedArguments(args), injection);

        _.each(expectedInjections, val => {
            var injectionId = val[0];
            var argument:string = val[1];
            if(argument == null){
                throw "missing injection id.  Argument for " + injectionId + " is undefined. Make sure to add the ID as part of the $inject function";
            }
        })
    }
}

export = BaseController;