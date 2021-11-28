// arrays to hold copies of the markers and html used by the side_bar
// because the function closure trick doesnt work there
var gmarkers = [];
var map = null;

function initialize() {
  var myWrapper = $("#wrapper");
  $("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
    myWrapper.one(
      "webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",
      function(e) {
        // code to execute after transition ends
        google.maps.event.trigger(map, "resize");
      }
    );
  });
  // create the map
  var myOptions = {
    zoom: 8,
    center: new google.maps.LatLng(43.907787, -79.359741),
    mapTypeControl: true,
    mapTypeControlOptions: {
      style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
    },
    navigationControl: true,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);

  google.maps.event.addListener(map, "click", function() {
    infowindow.close();
  });

  // Add markers to the map
  // Set up three markers with info windows
  // add the points
  var point = new google.maps.LatLng(43.65654, -79.90138);
  var marker = createMarker(
    point,
    "This place",
    "Some stuff to display in the<br>First Info Window"
  );

  var point = new google.maps.LatLng(43.91892, -78.89231);
  var marker = createMarker(
    point,
    "That place",
    "Some stuff to display in the<br>Second Info Window"
  );

  var point = new google.maps.LatLng(43.82589, -78.89231);
  var marker = createMarker(
    point,
    "The other place",
    "Some stuff to display in the<br>Third Info Window"
  );
}

var infowindow = new google.maps.InfoWindow({
  size: new google.maps.Size(150, 50)
});

// This function picks up the click and opens the corresponding info window
function myclick(i) {
  google.maps.event.trigger(gmarkers[i], "click");
}

// A function to create the marker and set up the event window function
function createMarker(latlng, name, html) {
  var contentString = html;
  var marker = new google.maps.Marker({
    position: latlng,
    map: map,
    zIndex: Math.round(latlng.lat() * -100000) << 5
  });

  google.maps.event.addListener(marker, "click", function() {
    infowindow.setContent(contentString);
    infowindow.open(map, marker);
  });
  // save the info we need to use later for the side_bar
  gmarkers.push(marker);
  // add a line to the side_bar html
  var sidebar = $("#side_bar");
  var sidebar_entry = $("<li/>", {
    html: name,
    click: function() {
      google.maps.event.trigger(marker, "click");
    },
    mouseenter: function() {
      $(this).css("color", "red");
    },
    mouseleave: function() {
      $(this).css("color", "#999999");
    }
  }).appendTo(sidebar);
}

google.maps.event.addDomListener(window, "load", initialize);