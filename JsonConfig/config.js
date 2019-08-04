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
						url: ""
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
					"Hello, Captain11!",
					"UKM X CBNU SMAT"
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
			module: "currentweather",
			position: "top_right",
			config: {
				location: "Seoul",
				locationID: "",  //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				appid: ""
			}
		},		{
			module: "weatherforecast",
			position: "top_right",
			header: "Weather Forecast",
			config: {
				location: "Seoul",
				locationID: "1835847",  //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				appid: ""
			}
		},
		{
			module: "newsfeed",
			position: "bottom_bar",
			config: {
				feeds: [
					{
						title: "New York Times",
						url: "http://www.nytimes.com/services/xml/rss/nyt/HomePage.xml"
					}
				],
				showSourceTitle: true,
				showPublishDate: true,
				broadcastNewsFeeds: true,
				broadcastNewsUpdates: true
			}
		},
		{
		      module: "MMM-AssistantMk2",
  		      position: "top_right",
      		config: {
        	  record: {
                    recordProgram : "arecord",  
          	    device        : "plughw:1",
        	},
        	notifications: {
          	  ASSISTANT_ACTIVATED: "HOTWORD_PAUSE",
          	  ASSISTANT_DEACTIVATED: "HOTWORD_RESUME",
        	},
 	        deviceLocation: {
         	  coordinates: {
            	    latitude: 37.57,
                    longitude: 126.98
          	   }
                 },
        	profiles: {
          	  "default": {
           	   lang: "ko-KR"
          	  }
 	         }
      		}
	      },
     	    {
      	     module: "MMM-Hotword",
      	     config: {
        	snowboy: [
          	 {
	            hotwords: "smartmirror",
        	    file: "resources/models/smart_mirror.umdl",
            	    sensitivity: '1.0',
                 },
          	 {
   	          hotwords: "snowboy",
                  file: "resources/models/snowboy.umdl",
            	  sensitivity: '1.0',
          	 },
           	 {
	            file: 'resources/models/jarvis.umdl',
        	    sensitivity: '0.8,0.80',
            	    hotwords: ['jarvis', 'jarvis']
         	 }
	        ],
        	 record: {
          	   recordProgram : "arecord",  
     	           device        : "plughw:1",
        	 },
	         autostart:true,
        	 onDetected: {
          	   notification: function (payload) {
            		return "ASSISTANT_ACTIVATE"
          	   },
        	   payload: function (payload){
            	     return {
              		profile: payload.hotword
            	       }
	              }
        	    },
	          },
	        },
	]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
