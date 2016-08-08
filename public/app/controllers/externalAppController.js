app.controller("externalAppController", function($sce, profileService){
	var ctrl = this;

	var init = function(){
		ctrl.extApp = $sce.trustAsResourceUrl(profileService.navLinks[profileService.currentApp].url);
	}


	init();
});