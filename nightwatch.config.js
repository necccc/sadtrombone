module.exports = {
	"src_folders" : ["src"],

	"webdriver" : {
	  "start_process": true,
	  "server_path": `${__dirname}/node_modules/.bin/chromedriver`,
	  "port": 9515
	},

	"test_settings" : {
	  "default" : {
		"desiredCapabilities": {
		  "browserName": "chrome"
		}
	  }
	}
  }