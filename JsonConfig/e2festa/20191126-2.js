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
		  module: "MMM-DailyAlarm",
		  position:"top_left",
		  config: {
		    alarms: [
		      {
		        time: "06:00:00",
		        showAt: "12:00", // You can control showing/hiding of this event with this fields.
		        hideAt: "06:30",
		        exceptDays: ["SUN", "SAT"], // You can except this event on specific day.
		        //available values : array of "SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"
		        beforeText: "Good Morning",
		        afterText: "wake up",
		        humanize:true, //If set as true, remain/past time is written as human-readable.
		        alarmNotification: { //You can send notification also.
		          notification: "SHOW_ALERT",
		          payload: {
		            message: "I'm going work!!!",
		          }
		        }
		      },
		    ],
		  }
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
			module: "compliments",
			position: "lower_third",
			config: {
			  compliments: {
				anytime:[
					"UKM X CBNU SMAT",
					"Welcome to E2festa",
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
      header: "Weather Forecast: Incheon",
      position: "top_right",
      classes: "default everyone",
      disabled: false,
      config: {
        apikey: "20f04cabfc540cfaf22a6664b736226b",
        latitude: "37.4694",
        longitude: "126.6614",
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
       		module: "MMM-Hello-Mirror",
       			position: "top_right",
        		config: {
          			  // See 'Configuration options' for more information.
        		}
    		},
{
			module: "newsfeed",
			position: "bottom_bar",
			config: {
				feeds: [
					{
						title: "My news",
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
