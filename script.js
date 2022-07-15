let app = angular.module("portfolioSignIn", ["ngRoute"]);

app.config(function ($routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "login-signup.html",
    })
    .when("login-signup", {
      templateUrl: "login-signup.html",
    })
    .when("/portfolio", {
      templateUrl: "portfolio.html",
    });
});

app.controller("portfolio", function ($scope, $http) {
  let initUser = netlifyIdentity.currentUser();
  netlifyIdentity.on("init", () => {
    initUser = netlifyIdentity.currentUser();
  });
  netlifyIdentity.on("login", () => {
    if (initUser == null) {
      window.location.replace("#!portfolio");
    }
    netlifyIdentity.close();
  });
  netlifyIdentity.on("logout", () => {
    netlifyIdentity.close();
    window.location.replace("/");
  });
});
