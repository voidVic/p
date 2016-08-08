
app.factory('profileService',['appConstants', '$timeout', '$http', function(appConstants, $timeout, $http){
	var profileService = {};

	profileService.navLinks = [
		{name: "About me", url: "/#", redirect: false, tense: 'future'},
		{name: "Skills", url: "/#", redirect: false, tense: 'future'},
		{name: "Work", url: "/#", redirect: false, tense: 'future'},
		{name: "Contact", url: "/#", redirect: false, tense: 'future'},
		// {name: "About this site", url: "/#", redirect: false, tense: 'future'},
	];

	profileService.skills = [
		{name: 'HTML5', per: 95 , type: 'success'},
		{name: 'CSS3', per: 95 , type: 'success'},
		{name: 'AngularJs 1.x', per: 90 , type: 'success'},
		{name: 'Node Js', per: 70 , type: 'success'},
		{name: 'Mongo DB', per: 70 , type: 'success'},
		{name: 'Unity 3D', per: 60 , type: 'success'},
		{name: 'Augmented/Virtual Reality', per: 50 , type: 'success'},
		{name: 'Bootstrap', per: 90 , type: 'success'}
	];
	profileService.socials = [
		{name: "LinkedIn", class: "linked-in", link: "https://www.linkedin.com/in/ankit-sharma-330b4264" },
		{name: "Facebook", class: "fb", link: "https://www.facebook.com/VoidVic" },
		{name: "Google+", class: "google-plus", link: "https://plus.google.com/+AnkitSharma1" },
		{name: "Instagram", class: "instagram", link: "https://www.instagram.com/voidvic/" }
	];

	profileService.contact = {
		name: '', email: '', message: '', active: {
			name: false, email: false, message: false
		}
	};

	profileService.colors = {
		dark:{
			midnight: "#2c3e50",
			darkPrimary : "#1976D2",
			primaryColor: "#2196F3",
			lightPrimary: "#B2DFDB",
			accentColor: "#FF5252",
			primaryText: "#212121",
			secondaryText: "#727272",
			colorLight: "#ecf0f1",
		},
		light:{
			midnight: "#FF5252",
			darkPrimary : "#B2DFDB",
			primaryColor: "#2196F3",
			lightPrimary: "#1976D2",
			accentColor: "#FF5252",
			primaryText: "#212121",
			secondaryText: "#727272",
			colorLight: "#ecf0f1",
		}
	}

	profileService.currentApp = null;
	profileService.navTitle = "Ankit Sharma";
	profileService.currentNavIndex = null;

	var init = function(){
		calculateSkillType();
	}

	var calculateSkillType = function(){
		for(var i = 0 ; i < profileService.skills.length ; i++){
			if(profileService.skills[i].per < 80){
				profileService.skills[i].type = 'info';
			}
		}
	}

	var isMobileDevice = function(){
	  var check = false;
	  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
	  return check;
	}

	profileService.calcMobView = function(){
		var width = window.innerWidth;
		if(width > appConstants.mobWidth || isMobileDevice()){

		}
	}

	profileService.sendMail = function(contact){
		$http({
			url: "sendMail",
			method: "POST",
			data: contact
		})
		.then(function(data){
			console.log(data);
		}, function(err){console.log(err);});
	}

	profileService.buildPrevArr = function(index){
		for(var i = 0 ; i < profileService.navLinks.length ; i++ ){
			if(index > i){
				profileService.navLinks[i].tense = 'past';
			}else
			if(index == i){
				profileService.navLinks[i].tense = 'current';
			}else
			if(index < i){
				profileService.navLinks[i].tense = 'future';
			}
		}
		return profileService.navLinks;
	}

	profileService.switchColor = function(){
		//document.documentElement.style.setProperty('--midnight', '#FFF');
	}

	profileService.boxes = {
		methods: {
	    renderBox : function(){
	      for(var i = 0 ; i < dom.xBox ; i++){
	        for(var j = 0 ; j < dom.yBox ; j++){
	          var box = document.createElement('DIV');
	          box.className = 'box';
	          dom.cont.appendChild(box);
	          dom.boxArr.push(box);
	        }
	      }
	      mt.randomizeBox();
	    },

	    randomizeBox: function(){
	    	for(var i = 0 ; i < dom.xBox*dom.yBox ; i++){
	      	dom.boxArr[i].style.left = mt.random(dom.xLow, dom.xUp) + '%';
	      	dom.boxArr[i].style.top = mt.random(dom.yLow, dom.yUp) + '%';
	      	dom.boxArr[i].style.transform = 'rotate('+ mt.random(0, 90) +'deg)';
	      	dom.boxArr[i].className = 'box';
	      }
	    },

	    random : function(l, u){
	    	return Math.random() * u + l;
	    },

	    serializeBox: function(){
		    for( var i = 0 ; i < dom.xBox ; i++){
		        for( var j = 0 ; j < dom.yBox ; j++){
		          dom.boxArr[(i*dom.yBox) + j].style.left = dom.xLow + ( j * dom.blkSizeX ) + '%';
		          dom.boxArr[(i*dom.yBox) + j].style.top = dom.yLow + ( i * dom.blkSizeY ) + '%';
		          dom.boxArr[(i*dom.yBox) + j].style.transform = 'rotate(0deg)';
		          dom.boxArr[(i*dom.yBox) + j].className = 'box merged-box';
		        }
		    }
			$timeout(function(){
				for(var i = 0 ; i < dom.xBox*dom.yBox ; i ++){
					dom.boxArr[i].className = 'hide-box';
				}
				profileService.showContent = true;
			}, 1000);
	    },

		getBlockSize: function(){
		}

	  },
	  events: function(){
	  },
	  initializer: function(){

		  dom.xBox = appConstants.xBox;
		  dom.yBox = appConstants.yBox;
		  dom.xLow = appConstants.xLow;
		  dom.xUp = appConstants.xUp;
		  dom.yLow = appConstants.yLow;
		  dom.yUp = appConstants.yUp;
		  dom.blkSizeX = appConstants.blkSizeX;
		  dom.blkSizeY = appConstants.blkSizeY;
		  dom.boxArr = [];
		  dom.switchingDelay = appConstants.switchingDelay;
		  dom.currentNav = null;
		  dom.currentNavSpan = null;
		  dom.cont = document.getElementsByClassName('home-container')[0];
		  dom.navCont = document.getElementById('navContent');

		  mt.renderBox();
	  },
	  doms: {
		  xBox: appConstants.xBox,
		  yBox: appConstants.yBox,
		  xLow: appConstants.xLow,
		  xUp: appConstants.xUp,
		  yLow: appConstants.yLow,
		  yUp: appConstants.yUp,
		  blkSizeX: appConstants.blkSizeX,
		  blkSizeY: appConstants.blkSizeY,
		  boxArr: [],
		  switchingDelay: appConstants.switchingDelay,
		  currentNav: null,
		  currentNavSpan: null,
		  cont: document.getElementsByClassName('home-container')[0],
		  navCont: document.getElementById('navContent')
	  }
	};

	var mt = profileService.boxes.methods;
	var dom = profileService.boxes.doms;

	init();

	return profileService;
}
]);
