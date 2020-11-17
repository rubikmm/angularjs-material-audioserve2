class AppCtrl {
  constructor($scope) {
    "ngInject";
    var ctrl = this;
    // TODO add your code here.

    $scope.primaryMenu = [
      { label: "Main Tab", value: "pageTab1" },
      { label: "Main Tab", value: "pageTab2" },
      { label: "Main Tab", value: "pageTab3" },
      { label: "Main Tab", value: "pageTab4" },
      { label: "Main Tab", value: "pageTab5" },
      { label: "Main Tab", value: "pageTab6" }
    ];
  }
}

export default AppCtrl;
