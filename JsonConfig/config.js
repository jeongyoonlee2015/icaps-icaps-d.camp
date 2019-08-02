var config = {
  address: "localhost",
  port: 8080,
  ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"],
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
      position: "top_left",
      config: {
        dateFormat: "LL dddd",
      }
    },
    {
      module: "calendar",
      position: "top_left",
      config: {
        urgency: 21,
        fetchInterval: 3600000,
        calendars: [{
          url: 'https://calendar.google.com/calendar/ical/2019captain11%40gmail.com/private-54ccbdf0a89e8f20a3dc94d991308ef5/basic.ics',
          symbol: 'calendar-check',
        }, ]
      }
    },
    {
      module: "currentweather",
      position: "top_right",
      config: {
        location: "Seoul", //https://openweathermap.org/ 에서 지역을 찾으세요.
        locationID: "",
        appid: "24e8ec656f3ef8f436abeefc89490047" //openweathermap.org의 API key를 입력하세요.
      }
    },
    {
      module: "weatherforecast",
      position: "top_right",
      config: {
        location: "Seoul", //https://openweathermap.org/ 에서 지역을 찾으세요.
        locationID: "1835847",
        appid: "24e8ec656f3ef8f436abeefc89490047" //openweathermap.org의 API key를 입력하세요.
      }
    },
    {
      module: "compliments",
      position: "lower_third",
      config: {
        compliments: {
          anytime: [ //아무때나
            "CBNU X UKM SMAT"
          ],
          morning: [ //아침
            "Good Morning Captain11",
            "selamat pagi",
            "Did you sleep well?"
          ],
          afternoon: [ //오후
            "How are you captain?",
            "selamat petang",
            "Good afternoon"
          ],
          evening: [ //저녁
            "How was your day today?",
            "selamat malam",
            "Good Evening"
          ],
          day_sunny: [//맑은 낮
            "Sunny Time"
          ],
          day_cloudy: [//흐린 낮
            "Cloudy Time"
          ],
          cloudy: [//흐림
            "Today is Cloudy."
          ],
          cloudy_windy: [//흐리고 바람
            "Cloudy n Windy"
          ],
          showers: [//소나기
            "Showers Time"
          ],
          rain: [//비
            "Rain droppp"
          ],
          thunderstorm: [//천둥번개
            "Super Power Thunderstorm"
          ],
          snow: [//눈
            "We make a Snowman"
          ],
          fog: [//안개
            "foggy day"
          ],
          night_clear: [//맑은 밤

          ],
          night_cloudy: [//흐린 밤

          ],
          night_showers: [//소나기 밤

          ],
          night_rain: [//비오는 밤

          ],
          night_thunderstorm: [//천둥번개 밤

          ],
          night_snow: [//눈오는 밤

          ],
          night_alt_cloudy_windy: [//흐리고 바람부는 밤

          ],
        }
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
           lang: "ko-KR"//"en-US"
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
if (typeof module !== "undefined") {
  module.exports = config;
}
