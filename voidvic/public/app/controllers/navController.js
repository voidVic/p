app.controller("navController",['$rootScope', '$timeout', '$location', '$uibModal', 'profileService',
	function($rootScope, $timeout, $location, $uibModal, profileService){
	var ctrl = this;

	$rootScope.closeNav = false;
	ctrl.closeNav = false;
	ctrl.links = profileService.navLinks;
	ctrl.currentNavIndex = null;
	ctrl.navTitle = profileService.navTitle;


	ctrl.redirectTo = function(index){
		if(ctrl.currentNavIndex == null){
		profileService.currentNavIndex = index;
			profileService.boxes.methods.serializeBox();
			ctrl.currentNavIndex = index;
			broadcastNavInfo(500);
		} else if(index != ctrl.currentNavIndex){
			profileService.currentNavIndex = index;
			//profileService.boxes.methods.serializeBox();
			ctrl.currentNavIndex = index;
			broadcastNavInfo(0);
		} else{
			profileService.currentNavIndex = null;
			profileService.boxes.methods.randomizeBox();
			ctrl.currentNavIndex = null;
			broadcastNavInfo(0);
		}
		if(ctrl.currentNavIndex == null){
			$rootScope.closeNav = false;
		}else{
			$rootScope.closeNav = true;
		}
		ctrl.closeNav = $rootScope.closeNav;

		if(ctrl.links[index].redirect){
			profileService.currentApp = index;
			$location.path('/spaceShoot');
		}
	}

	ctrl.resumePreviewer = function(){
		var modalInstance = $uibModal.open({
	      animation: true,
	      template: '<embed src="images/resume.pdf" type="application/pdf">',
	      size: 'lg'
	    });
	}
	ctrl.toggleNav = function(){
		$rootScope.closeNav = !$rootScope.closeNav;
		ctrl.closeNav = $rootScope.closeNav;
	}

	var broadcastNavInfo = function(time){
		if(time == 0){
			$rootScope.$broadcast('navChanged');
		}else
			$timeout(function(){
				$rootScope.$broadcast('navChanged');
			}, time);
	}

}
]);
