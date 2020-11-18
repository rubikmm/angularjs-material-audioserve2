class PageTab1Ctrl {
  pageItemsOptions = [];

  constructor($scope, $filter, $mdBottomSheet) {
    "ngInject";
    var ctrl = this;
    // TODO add your code here.

    ctrl.pageItemsOptions = [
      { name: "5", value: 5 },
      { name: "10", value: 10 },
      { name: "15", value: 15 },
      { name: "20", value: 20 },
      { name: "25", value: 25 },
      { name: "50", value: 50 },
      { name: "100", value: 100 },
      { name: "200", value: 200 }
    ];

    $scope.pageItems = 5;

    $scope.selectedContent = "";

    $scope.headerClass = {
      name: "fill-content",
      metric1: "table-amount-content",
      metric2: "table-amount-content",
      metric3: "table-amount-content",
      metric4: "table-amount-content"
    };
    $scope.contentClass = {
      name: "bold",
      metric1: "grey",
      metric2: "grey",
      metric3: "grey",
      metric4: "grey"
    };

    $scope.headers = initHeaders();

    $scope.loadDatas = function() {
      $scope.contents = initContent();
    };
    $scope.loadDatas();
    $scope.deleteOperation = function(selectedContent, $event) {
      // $mdBottomSheet;
      // .show({
      //   controller: function($scope) {
      //     $scope.deleteItem = function() {
      //       $mdBottomSheet.hide();
      //     };
      //   },
      //   targetEvent: $event,
      //   template:
      //     '<md-bottom-sheet class="md-grid"><span flex></span><md-button aria-label="Delete" ng-click="deleteItem()"><i class="material-icons md-18">delete</i></md-button></md-bottom-sheet>'
      // })
      // .then(function() {
      //   console.log(selectedContent);
      // });
    };
    $scope.selectOperation = function(checked, selectedContent) {
      console.log("Is it checked ? " + checked);
      console.log(selectedContent);
    };

    function initHeaders() {
      return [
        {
          contentField: "name",
          contentType: "text",
          label: "Object Name",
          sortableField: true
        },
        {
          contentField: "metric1",
          contentType: "text",
          label: "Metric1",
          sortableField: true
        },
        {
          contentField: "metric2",
          contentType: "text",
          label: "Metric2",
          sortableField: true
        },
        {
          contentField: "metric3",
          contentType: "text",
          label: "Metric3",
          sortableField: true
        },
        {
          contentField: "metric4",
          contentType: "text",
          label: "Metric4",
          sortableField: true
        }
      ];
    }

    function initContent() {
      return [
        {
          name: "Object Name 1",
          metric1: 207724,
          metric2: 2580,
          metric3: 0,
          metric4: 7.85
        },
        {
          name: "Object Name 2",
          metric1: 397644,
          metric2: 5930,
          metric3: 5139,
          metric4: 11.31
        },
        {
          name: "Object Name 3",
          metric1: 1397644,
          metric2: 10500,
          metric3: 7381,
          metric4: 2.99
        },
        {
          name: "Object Name 4",
          metric1: 5900644,
          metric2: 320000,
          metric3: 87321,
          metric4: 1.51
        },
        {
          name: "Object Name 5",
          metric1: 500000,
          metric2: 5000,
          metric3: 50000,
          metric4: 5.85
        },
        {
          name: "Object Name 6",
          metric1: 600000,
          metric2: 6000,
          metric3: 60000,
          metric4: 6.85
        },
        {
          name: "Object Name 7",
          metric1: 700000,
          metric2: 7000,
          metric3: 70000,
          metric4: 7.85
        },
        {
          name: "Object Name 8",
          metric1: 800000,
          metric2: 8000,
          metric3: 80000,
          metric4: 8.85
        },
        {
          name: "Object Name 9",
          metric1: 900000,
          metric2: 9000,
          metric3: 90000,
          metric4: 9.85
        },
        {
          name: "Object Name 10",
          metric1: 900000,
          metric2: 9000,
          metric3: 90000,
          metric4: 9.85
        },
        {
          name: "Object Name 11",
          metric1: 900000,
          metric2: 9000,
          metric3: 90000,
          metric4: 9.85
        },
        {
          name: "Object Name 12",
          metric1: 900000,
          metric2: 9000,
          metric3: 90000,
          metric4: 9.85
        }
      ];
    }
  }
}

export default PageTab1Ctrl;
