!function(){"use strict";angular.module("app",["pascalprecht.translate","tmh.dynamicLocale","ui.router"])}(),function(){"use strict";function t(t,e,n){var a=this;a.updateValue=function(t){},a.addToList=function(t){var e=a.lists[t].items,n=a.lists[t].tempTask;n.length>0?(e.push(n),a.lists[t].tempTask=""):alert("Please Enter A Task 🙌"),console.log(a)},a.moveList=function(t,e,n){var s=a.lists[e].items[t],l=0,i=a.lists.length,o=null;switch(n){case"L":l-=1;break;case"R":l+=1}console.log(t),o=function(t,n,a){return(e+l+a)%a}(0,0,i),a.lists[o].items.push(s),a.lists[e].items.splice(t,1)},a.addList=function(t){a.lists.push(a.listTemplate),a.lists[a.lists.length-1].name="George"},a.lists=[{name:"Bob",items:["Make Lunch","Tie Shoes","Count By Twos"],tempTask:"add me!"},{name:"Andy",items:[],tempTask:""},{name:"Sally",items:[],tempTask:""},{name:"Rachel",items:[],tempTask:""}],a.listTemplate=[{name:"",items:[],tempTask:""}]}t.$inject=["$log","$translate","SAMPLE_CONSTANT"],angular.module("app").component("home",{controller:t,controllerAs:"vm",templateUrl:"app/home/home.view.html"})}(),function(){"use strict";function t(t,e,n){e.$on("$translateChangeSuccess",function(t,e){n.set(e.language),document.documentElement.setAttribute("lang",e.language)}),t.debug("App run block end")}t.$inject=["$log","$rootScope","tmhDynamicLocale"],angular.module("app").run(t)}(),function(){"use strict";function t(t,e){t.state("home",{url:"/*",component:"home"})}t.$inject=["$stateProvider","$urlRouterProvider"],angular.module("app").config(t)}(),function(){"use strict";angular.module("app").constant("SAMPLE_CONSTANT","Sample constant")}(),function(){"use strict";function t(t,e,n,a){t.html5Mode(!0),e.debugEnabled(!0),n.useStaticFilesLoader({prefix:"/locales/",suffix:".json"}).preferredLanguage("en").fallbackLanguage("en").useSanitizeValueStrategy("escape").useMissingTranslationHandlerLog(),a.localeLocationPattern("/locales/angular-locale_{{locale}}.js").defaultLocale("en")}t.$inject=["$locationProvider","$logProvider","$translateProvider","tmhDynamicLocaleProvider"],angular.module("app").config(t)}(),angular.module("app").run(["$templateCache",function(t){t.put("app/home/home.view.html",'<div class=homeContainer><div class=container><div class=row><div class="listContainer col-md-3" ng-repeat="list in vm.lists track by $index"><div class=well><h2>{{ list.name }}</h2><ul class=list><li ng-repeat="item in list.items track by $index"><button class="btn btn-default pull-left" ng-click="vm.moveList($index, $parent.$index, \'L\')">👈</button> <span class=textDesc>{{item}}</span> <button class="btn btn-default pull-right" ng-click="vm.moveList($index, $parent.$index, \'R\')">👉</button></li></ul><div class="addNew form-group"><input type=text ng-model=vm.lists[$index].tempTask ng-change=vm.updateValue($index) ng-trim=true placeholder="Add a task"> <button class="btn btn-default" ng-click=vm.addToList($index)>+</button></div></div></div><div class=col-md-3><button class="btn btn-default" ng-click=vm.addList()>+</button></div></div></div></div>')}]);
//# sourceMappingURL=../maps/scripts/app-b3c3bbe401.js.map
