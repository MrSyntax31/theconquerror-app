$(function() {
    App.init();
});
var App = {
    init: function() {
          this.datetime(), this.side.nav(), this.search.bar(), this.navigation(), this.hyperlinks(), setInterval("App.datetime();", 1e3)
    },
    datetime: function() {
          var e = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"),
                t = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"),
                a = new Date,
                i = a.getYear();
          1e3 > i && (i += 1900);
          var s = a.getDay(),
                n = a.getMonth(),
                r = a.getDate();
          10 > r && (r = "0" + r);
          var l = a.getHours(),
                c = a.getMinutes(),
                h = a.getSeconds(),
                o = "AM";
          l >= 12 && (o = "PM"), l > 12 && (l -= 12), 0 == l && (l = 12), 9 >= c && (c = "0" + c), 9 >= h && (h = "0" + h), $(".welcome .datetime .day").text(e[s]), $(".welcome .datetime .date").text(t[n] + " " + r + ", " + i), $(".welcome .datetime .time").text(l + ":" + c + ":" + h + " " + o)
    },
    title: function(e) {
          return $(".header>.title").text(e)
    },
    side: {
          nav: function() {
                this.toggle(), this.navigation()
          },
          toggle: function() {
                $(".ion-ios-navicon").on("touchstart click", function(e) {
                      e.preventDefault(), $(".sidebar").toggleClass("active"), $(".nav").removeClass("active"), $(".sidebar .sidebar-overlay").removeClass("fadeOut animated").addClass("fadeIn animated")
                }), $(".sidebar .sidebar-overlay").on("touchstart click", function(e) {
                      e.preventDefault(), $(".ion-ios-navicon").click(), $(this).removeClass("fadeIn").addClass("fadeOut")
                })
          },
          navigation: function() {
                $(".nav-left a").on("touchstart click", function(e) {
                      e.preventDefault();
                      var t = $(this).attr("href").replace("#", "");
                      $(".sidebar").toggleClass("active"), $(".html").removeClass("visible"), "home" == t || "" == t || null == t ? $(".html.welcome").addClass("visible") : $(".html." + t).addClass("visible"), App.title($(this).text())
                })
          }
    },
    search: {
          bar: function() {
                $(".header .ion-ios-search").on("touchstart click", function() {
                      var e = ($(".header .search input").hasClass("search-visible"), $(".header .search input").val());
                      return "" != e && null != e ? (App.search.html($(".header .search input").val()), !1) : ($(".nav").removeClass("active"), $(".header .search input").focus(), void $(".header .search input").toggleClass("search-visible"))
                }), $(".search form").on("submit", function(e) {
                      e.preventDefault(), App.search.html($(".header .search input").val())
                })
          },
          html: function(e) {
                $(".search input").removeClass("search-visible"), $(".html").removeClass("visible"), $(".html.search").addClass("visible"), App.title("Result"), $(".html.search").html($(".html.search").html()), $(".html.search .key").html(e), $(".header .search input").val("")
          }
    },
    navigation: function() {
          $(".nav .mask").on("touchstart click", function(e) {
                e.preventDefault(), $(this).parent().toggleClass("active")
          })
    },
    hyperlinks: function() {
          $(".nav .nav-item").on("click", function(e) {
                e.preventDefault();
                var t = $(this).attr("href").replace("#", "");
                $(".html").removeClass("visible"), $(".html." + t).addClass("visible"), $(".nav").toggleClass("active"), App.title($(this).text())
          })
    }
};