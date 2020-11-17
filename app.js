import angular from "angular";
import "angular-material";
import "angular-messages";
import "angular-material-icons";

// Import your app stylesheets
import "./style.css";
import "./app/lib/md-table/md-table.css";

// Import your app functionality
import "./app/app.module.js";
import "./app/lib/md-table/md-table.js";

// Create and bootstrap application
const requires = [
  "app",
  "ngMaterial",
  "ngMessages",
  "ngMdIcons",
  "mdCustomTable"
];
const app = angular.module("appRoot", requires);
app.config([
  "$mdGestureProvider",
  "$mdThemingProvider",
  "$mdIconProvider",
  function($mdGestureProvider, $mdThemingProvider, $mdIconProvider) {
    $mdGestureProvider.skipClickHijack();
    $mdThemingProvider
      .theme("default")
      .primaryPalette("indigo")
      .accentPalette("purple")
      .warnPalette("purple")
      .backgroundPalette("grey");
  }
]);
window.app = app;
