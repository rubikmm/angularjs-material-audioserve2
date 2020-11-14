class PageTab2Ctrl {

  name = "Mihai Patrascu";
  apiResult = {};

  constructor($http, $routeParams, $scope) {
    "ngInject";
    var ctrl = this;
    
    $scope.name="Mihai Viteazul 2";
    $scope.submeniuId = $routeParams.submeniuId;


    $scope.items = [
      { name:'name1', quantity:20},
      { name:'name2', quantity:50},
      { name:'name3', quantity:10}
    ];

    $http.get('https://support.oneskyapp.com/hc/en-us/article_attachments/202761627/example_1.json').then(function(response) {
          ctrl.apiResult = response.data;
      });

  }
}


export default PageTab2Ctrl;
