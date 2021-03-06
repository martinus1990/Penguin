import bController = require('../../common/controller/BaseController');
import bScope = require('../../common/model/BaseScope');
import bGlobals = require('../../common/model/AppGlobals');

interface IHomeScope extends bScope{
    
}

class HomeController extends bController{

    static partialUrl:string = "home/views/partial.html";
    static url:string = "/home";

    public static $inject:string[] = [
        bGlobals.$SCOPE
    ];
    
    text:string = "HomeController";
    message:string;

    constructor(private $scope: IHomeScope) {
        super(arguments, HomeController.$inject);
        $scope.ctrl = this;
    }
}

export = HomeController;

