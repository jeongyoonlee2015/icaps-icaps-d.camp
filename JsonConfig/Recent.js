/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information how you can configurate this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
	address: "localhost", // Address to listen on, can be:
	                      // - "localhost", "127.0.0.1", "::1" to listen on loopback interface
	                      // - another specific IPv4/6 to listen on a specific interface
	                      // - "", "0.0.0.0", "::" to listen on any interface
	                      // Default, when address config is left out, is "localhost"
	port: 8080,
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], // Set [] to allow all IP addresses
	                                                       // or add a specific IPv4 of 192.168.1.5 :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
	                                                       // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	language: "en",
	timeFormat: 24,
	units: "metric",

	modules: [
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "top_left"
		},
		{
			module: "calendar",
			header: "SMAT",
			position: "top_left",
			config: {
				calendars: [
					{
						symbol: "calendar-check",
						url: "https://calendar.google.com/calendar/ical/2019captain11%40gmail.com/private-54ccbdf0a89e8f20a3dc94d991308ef5/basic.ics"
					}
				]
			}
		},
		{
			module:"compliments",
			position: "top_left",
			config:{
				compliments: {
					anytime:[
						"HEIGT: 175cm"
					]
				}
			}
		},
		{
			module: "compliments",
			position: "lower_third",
			config: {
			  compliments: {
				anytime:[
					"UKM X CBNU SMAT",
					"Hello, Captain11!"
				],
				morning:[
					"Hello,Captain",
					"Selamat pagi",
					"Good morning Captain"
				],
				afternoon:[
					  "Nice Captain",
					  "Selamat petan"
				]
			  }
			}
		},

    {
      module: "MMM-DarkSkyForecast",
      header: "Weather Forecast: Daejeon",
      position: "top_right",
      classes: "default everyone",
      disabled: false,
      config: {
        apikey: "a2a06f1b519edad7ea7950f0d00b6e5d",
        latitude: "36.330101",
        longitude: "127.422470",
        iconset: "4c",
        concise: false,
        forecastLayout: "table"
      }
    },
		{
			module: 'MMM-GoogleFit',
			position: "top_left",
			config: {
			}
		},
			{
	    disabled: false,
	    module: "MMM-BMI",
	    position: "top_left",
	    config: {
	        name: "Captain",                    // Your name
	        imperialUnits: true,		      // true or (false = metric)
	        weight: "155",                    // lbs and inches or kg and m
	        height: "71",                     // lbs and inches or kg and m
	        herName: "SMAT",
	        herWeight: "100",                 // lbs and inches or kg and m
	        herHeight: "65",                 // lbs and inches or kg and m
	        useHeader: true,                 // true if you want a header
	        header: "YOUR BODY MASS INDEX",
	        maxWidth: "350px",
	    }
		},
		{
			module: 'MMM-AirQuality',
			position: 'top_right', // you may choose any location
			config: {
	  		location: 'daejeon' // the location to check the index for
				}
		},
		
		{
			module: "newsfeed",
			position: "bottom_bar",
			config: {
				feeds: [
					{
						title: "oh my news",
						url: "http://www.nytimes.com/services/xml/rss/nyt/HomePage.xml"
						//url: "http://rss.ohmynews.com/rss/ab_reporter.xml"안 됨
					}
				],
				showSourceTitle: true,
				showPublishDate: true,
				broadcastNewsFeeds: true,
				broadcastNewsUpdates: true
			}
		},
	]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
