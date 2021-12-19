var APP_DATA = {
  "scenes": [
    {
      "id": "0-com1-building_edited",
      "name": "COM1 Building_edited",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.2889668702110093,
        "pitch": -0.03849089910554859,
        "fov": 1.2344983363832869
      },
      "linkHotspots": [
        {
          "yaw": 0.35257530901455425,
          "pitch": 0.08535096797390018,
          "rotation": 12.566370614359176,
          "target": "1-lobby_edited"
        },
        {
          "yaw": 0.21405449611011562,
          "pitch": -0.21698412741602446,
          "rotation": 5.497787143782138,
          "target": "2-foyer-at-level-2_edited"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.948722182627847,
          "pitch": 0.0006733939284053747,
          "title": "Carpark",
          "text": "You may park your motor vehicles here."
        },
        {
          "yaw": 0.570913672916511,
          "pitch": -0.09395372408988933,
          "title": "Welcome to the COM1 Building",
          "text": "Exterior building."
        }
      ]
    },
    {
      "id": "1-lobby_edited",
      "name": "Lobby_edited",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": -2.70428949178854,
        "pitch": -0.02745987784074444,
        "fov": 1.2344983363832869
      },
      "linkHotspots": [
        {
          "yaw": 1.1782543041977895,
          "pitch": 0.18734670612430193,
          "rotation": 0,
          "target": "0-com1-building_edited"
        },
        {
          "yaw": 2.431203941174161,
          "pitch": 0.07431984288284355,
          "rotation": 0,
          "target": "2-foyer-at-level-2_edited"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.740671410563124,
          "pitch": 0.24279277977485414,
          "title": "Welcome to the<div>&nbsp;COM 1 Lobby</div>",
          "text": "Please remember to check-in via SafeEntry before entering the building. Thank you for your cooperation. :)"
        },
        {
          "yaw": -0.6223408071597163,
          "pitch": 0.4288540493454711,
          "title": "Computer Display",
          "text": "Mini showcase of old computer models. Do they look familiar to you?<br>"
        }
      ]
    },
    {
      "id": "2-foyer-at-level-2_edited",
      "name": "Foyer at Level 2_edited",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.0011444721219362464,
        "pitch": -0.009834653388031356,
        "fov": 1.2344983363832869
      },
      "linkHotspots": [
        {
          "yaw": 2.5927388709605754,
          "pitch": 0.11660860085698666,
          "rotation": 0,
          "target": "0-com1-building_edited"
        },
        {
          "yaw": -1.3802181293495686,
          "pitch": -0.009747170571895225,
          "rotation": 1.5707963267948966,
          "target": "1-lobby_edited"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.7336308989089133,
          "pitch": 0.12725070539596572,
          "title": "Outside COM 1 Building",
          "text": "Head on outside for some fresh air! =)"
        },
        {
          "yaw": -0.05947356427112993,
          "pitch": 0.1126399009786816,
          "title": "Tables and chairs",
          "text": "Studying area for students"
        }
      ]
    }
  ],
  "name": "School of Computing",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
