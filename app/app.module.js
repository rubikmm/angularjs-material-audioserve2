import angular from "angular";

// Create the module where our functionality can attach to
let appModule = angular.module("app", [require("angular-route")]).config([
  "$locationProvider",
  "$routeProvider",

  function config($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix("!");

    $routeProvider
      .when("/pageTab1", {
        template: "<page-tab1-component></page-tab1-component>"
      })
      .when("/pageTab2", {
        template: "<page-tab2-component></page-tab2-component>"
      })
      .when("/pageTab2/:submeniuId", {
        template: "<page-tab2-component></page-tab2-component>"
      })
      .otherwise("/pageTab1");
  }
]);

// Controllers
import AppCtrl from "./app.controller";
import UserInformationCardCtrl from "./user-information-card/user-information-card.controller";
import PageTab1Ctrl from "./page-tab1/page-tab1.controller";
import PageTab2Ctrl from "./page-tab2/page-tab2.controller";

appModule.component("appComponent", {
  templateUrl: "app/app.template.html",
  controller: AppCtrl,
  function() {
    $scope.currentNavItem = "pageTab1";
  }
});

appModule.component("userInformationCardComponent", {
  templateUrl: "app/user-information-card/user-information-card.template.html",
  controller: UserInformationCardCtrl
});

appModule.component("pageTab1Component", {
  templateUrl: "app/page-tab1/page-tab1.template.html",
  controller: PageTab1Ctrl
});

appModule.component("pageTab2Component", {
  templateUrl: "app/page-tab2/page-tab2.template.html",
  controller: ["$http", "$routeParams", "$scope", PageTab2Ctrl]
});

export default appModule;
