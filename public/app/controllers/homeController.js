app.controller('homeController',['$scope', 'appConstants', 'profileService', '$sce',
function ($scope, appConstants, profileService, $sce) {
	var ctrl = this;
	profileService.showContent = null;
	ctrl.heading = null;
	ctrl.isGrayScale = false;
	ctrl.switchTo = 'Gray Scale';
	ctrl.sendingMail = false;
	ctrl.sentMail = false;
	var hoverDP = document.getElementById('hoverDpDiv');

	var pageResetters = function(){
		ctrl.sendingMail = false;
		ctrl.sentMail = false;
		ctrl.contact.name = "";
		ctrl.contact.mail = "";
		ctrl.contact.message = "";
	}

	ctrl.sendMsg = function(){
		ctrl.sendingMail = true;
		profileService.sendMail(ctrl.contact, function(){
			ctrl.sendingMail = false;
			ctrl.mailMsg = $sce.trustAsHtml("Woohoo!! your message has been sent successfully.");
			ctrl.sentMail = true;
			//messageSent();
		}, function(){
			ctrl.sendingMail = false;
			ctrl.mailMsg = $sce.trustAsHtml('<div class="small">Oops!! trouble contanting Mailgun client. Please send mail manually to below Id</div><div><a href="mailto:vicnwz@gmail.com?Subject=Hi%20Ankit" target="_top">vicnwz@gmail.com</a></div>');
			ctrl.sentMail = true;
		});
	}

	ctrl.init = function(){
		profileService.boxes.initializer();
		ctrl.skills = profileService.skills;
		ctrl.socials = profileService.socials;
		ctrl.isPrevArr = profileService.buildPrevArr(null);
		google.maps.event.addDomListener(window, 'load', initContactMap);
	}

	ctrl.switchColor = function(){
		profileService.switchColor();
	}

	ctrl.revealMe = function(flag, e){
		if(flag){
			hoverDP.style.display = "block";
			if(angular.isDefined(e)){
				var x = e.offsetX;
				var y = e.offsetY;
				hoverDP.style.left = x + 'px';
				hoverDP.style.top = (y) + 'px';
				hoverDP.style.backgroundPosition = -1*x + 'px ' + -1*y + 'px';
			}
		}else{
			hoverDP.style.display = "none";
		}
	}

	$scope.$on('navChanged', function(){
		ctrl.showContent = profileService.currentNavIndex;
		if(ctrl.showContent == 0){
			ctrl.hideScroll = true;
		}else{
			ctrl.hideScroll = false;
		}
		ctrl.heading = null;
		if(profileService.currentNavIndex != null){
			ctrl.navLinks = profileService.buildPrevArr(profileService.currentNavIndex);
			ctrl.heading = ctrl.navLinks[profileService.currentNavIndex].name;
		}
		pageResetters();
	});

	var messageSent = function(){
		setTimeout(function(){ctrl.sentMail = false;}, 3000);
	}

	var initContactMap = function(){
		var myCenter = new google.maps.LatLng(12.923097,80.237054);
		var styledMap = new google.maps.StyledMapType(mapStyle, {name: "Location Map"});
		 var mapProp = {
			center: new google.maps.LatLng(12.930097,80.236054),
			zoom:14,
			scrollwheel: false,
			mapTypeControl: true,
			scaleControl: true,
			draggable: true,
			mapTypeControlOptions:{
				mapTypeIds:[google.maps.MapTypeId.ROADMAP, 'contact_map']
			}
		};
		var map=new google.maps.Map(document.getElementById("contactMap"), mapProp);
		var marker=new google.maps.Marker({
			position:myCenter,
			icon: 'images/mapMarker4.png'
		});

		marker.setMap(map);
		map.mapTypes.set('contact_map', styledMap);
		map.setMapTypeId('contact_map');

	}

	$scope.isOpen = false;
		 $scope.demo = {
			 isOpen: false,
			 count: 0,
			 selectedDirection: 'left'
		 };

	var mapStyle = [{"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#000000"},{"lightness":40}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#000000"},{"lightness":16}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":17},{"weight":1.2}]},{"featureType":"administrative.country","elementType":"geometry.fill","stylers":[{"saturation":"-4"},{"lightness":"48"},{"gamma":"1.00"},{"weight":"0.93"}]},{"featureType":"administrative.country","elementType":"labels.text.fill","stylers":[{"visibility":"simplified"},{"saturation":"41"}]},{"featureType":"administrative.country","elementType":"labels.text.stroke","stylers":[{"lightness":"10"}]},{"featureType":"administrative.province","elementType":"geometry.fill","stylers":[{"lightness":"-34"},{"gamma":"1.33"},{"weight":"2.68"}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":21}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":16}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":19}]},{"featureType":"transit.line","elementType":"geometry.fill","stylers":[{"saturation":"69"}]},{"featureType":"transit.station.airport","elementType":"geometry.fill","stylers":[{"saturation":"45"},{"hue":"#ff0000"},{"gamma":"1.28"},{"lightness":"90"},{"weight":"9.38"}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":17}]}];


	ctrl.init();
}
]);
