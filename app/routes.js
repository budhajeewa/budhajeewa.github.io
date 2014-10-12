define([
	'app'
], function (app) {
	app
		.config([
		'$urlRouterProvider',
		'$stateProvider',
		function (
				$urlRouterProvider,
				$stateProvider
		) {
				$urlRouterProvider.otherwise('/');

				$stateProvider
					.state('home', {
						url: '/',
						templateUrl: 'app/views/home.html'
					})
					.state('AngularBegin', {
						url: '/AngularBegin',
						templateUrl: 'app/views/AngularBegin.html'
					})
		}
	]);
});