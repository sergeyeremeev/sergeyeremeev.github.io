function initMap(){ko.applyBindings(new App)}function mapError(){alert("There was a problem loading google maps!")}var App=function(){"use strict";function e(){function e(e){return new google.maps.Marker({position:e.geometry.location,map:i,animation:google.maps.Animation.DROP,id:"marker-"+e.place_id})}function a(a,t){if(t===google.maps.places.PlacesServiceStatus.OK){for(var n=a.length,o=0;o<n;o++){var l=a[o],r=e(l);s(r,l),l.placeMatches=ko.observable(!0),c.places.push(l),p[l.name]=r,f.extend(new google.maps.LatLng(l.geometry.location.lat(),l.geometry.location.lng()))}i.fitBounds(f),window.onresize=function(){i.fitBounds(f)},c.placesLoaded(!0)}else alert("Sorry, Google Place Search was unable to return any results.")}function t(e,a){l.setContent('<span class="iw-loading"></span>'),n(e,function(a){l.setContent(h(e,a))}),l.open(i,a),a.setAnimation(google.maps.Animation.BOUNCE),setTimeout(function(){a.setAnimation(null)},1400)}function n(e,a){var t={oauth_consumer_key:v.consumerKey,oauth_token:v.accessToken,oauth_signature_method:"HMAC-SHA1",limit:1,callback:"cb",oauth_nonce:Math.floor(1e12*Math.random()).toString(),oauth_timestamp:Math.floor(Date.now()/1e3),location:e.vicinity,term:e.name};t.oauth_signature=oauthSignature.generate("GET",v.url,t,v.consumerSecret,v.accessTokenSecret);var n={yelp:null,wiki:null};$.ajax({url:v.url,data:t,cache:!0,dataType:"jsonp"}).done(function(){console.log("yelp successful")}).fail(function(){console.log("Yelp not available")}).always(function(t){n.yelp=t,o(e,n,a)})}function o(e,a,t){var n={action:"parse",prop:"text",format:"json",page:e.name,section:0};$.ajax({url:"https://en.wikipedia.org/w/api.php",data:n,dataType:"jsonp"}).done(function(){console.log("Wiki successful")}).fail(function(){console.log("Wiki not available")}).always(function(e){a.wiki=e,t(a)})}function s(e,a){google.maps.event.addListener(e,"click",function(){i.panTo(e.getPosition()),t(a,e)})}var i,l,r,c=this,p={};c.places=ko.observableArray(),c.placeFilter=ko.observable(""),c.placesLoaded=ko.observable(!1),c.noMatches=ko.observable(!1),$(document).width()>=768?c.menuOpen=ko.observable(!0):c.menuOpen=ko.observable(!1);var u=new google.maps.LatLng(40.7484444,(-73.9878441),17),m=[{featureType:"administrative",elementType:"all",stylers:[{visibility:"on"},{lightness:33}]},{featureType:"landscape",elementType:"all",stylers:[{color:"#f2e5d4"}]},{featureType:"poi.park",elementType:"geometry",stylers:[{color:"#c5dac6"}]},{featureType:"poi.park",elementType:"labels",stylers:[{visibility:"on"},{lightness:20}]},{featureType:"road",elementType:"all",stylers:[{lightness:20}]},{featureType:"road.highway",elementType:"geometry",stylers:[{color:"#c5c6c6"}]},{featureType:"road.arterial",elementType:"geometry",stylers:[{color:"#e4d7c6"}]},{featureType:"road.local",elementType:"geometry",stylers:[{color:"#fbfaf7"}]},{featureType:"water",elementType:"all",stylers:[{visibility:"on"},{color:"#acbcc9"}]}],g={mapTypeId:"roadmap",center:u,styles:m,zoom:15};i=new google.maps.Map(document.getElementById("map"),g);var y={location:u,radius:"1000",types:["restaurant","cafe","bakery","bar","store"]},d=new google.maps.places.PlacesService(i),f=new google.maps.LatLngBounds;d.nearbySearch(y,a);var v={consumerKey:"iLsXatdw5GShDtUd3IKqYw",consumerSecret:"A1LpfhnBOIgJWIXCggtt_nF9P_0",accessToken:"UNJtXwRqzWVHmwelKlCNDeqi-xLtEaon",accessTokenSecret:"rnbRnALSvXj9CS3CU_Z0Xlm6ttU",serviceProvider:{signatureMethod:"HMAC-SHA1"},url:"https://api.yelp.com/v2/search"};l=new google.maps.InfoWindow,_.templateSettings.variable="rc";var b=_.template($("#infowindow-content").html()),h=function(e,a){console.log(a);var t="",n="";if(a.wiki.parse){var o=a.wiki.parse.text["*"];n="https://www.wikipedia.org/wiki/"+e.name.replace(/ /g,"_"),t=$("<div/>").html(o).text().substring(0,330)+"..."}else t=a.wiki.error?"Sorry, wiki data for this place is not available.":"Wikipedia service is not available";var s={message:"",name:"",img:"",text:"",rating:"",ratingStars:"",reviewCount:"",url:""},i="";return a.yelp.businesses?0===a.yelp.businesses.length?s.message="Sorry, yelp data for this place is not available.":(s.name=a.yelp.businesses[0].name,s.img=a.yelp.businesses[0].image_url,s.text=a.yelp.businesses[0].snippet_text,s.rating=a.yelp.businesses[0].rating,s.ratingStars=a.yelp.businesses[0].rating_img_url,s.reviewCount=a.yelp.businesses[0].review_count,s.url=a.yelp.businesses[0].url,i=a.yelp.businesses[0].display_phone):s.message="Yelp service is not available",b({tabs:[{name:"Info",content:{title:e.name,address:e.vicinity,phone:i,openNow:e.opening_hours}},{name:"Reviews",content:{message:s.message,name:s.name,img:s.img,text:s.text,rating:s.rating,ratingStars:s.ratingStars,reviewCount:s.reviewCount,url:s.url}},{name:"Wiki",content:{text:t,link:n}}]})};$(document).on("click",".tabs li",function(){r=$(this),$(".tabs").find("li").removeClass("selected"),r.addClass("selected"),$(".tab-single").removeClass("current"),$('.tab-single[data-content="'+r.data("content")+'"]').addClass("current")}),c.toggleMarker=function(e){var a=p[e.name];t(e,a)},c.filterPlaces=ko.computed(function(){if(c.placesLoaded()){for(var e=c.places(),a=e.length,t=a,n=0;n<a;n++){var o=e[n],s=p[o.name];o.name.toLowerCase().indexOf(c.placeFilter().toLowerCase())===-1&&""!==c.placeFilter()?(s.setMap(null),o.placeMatches(!1),t--):(s.setMap(i),o.placeMatches(!0))}0===t?c.noMatches(!0):c.noMatches(!1)}}),c.toggleMenu=function(){c.menuOpen(!c.menuOpen())}}return e}();