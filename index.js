const Nightwatch = require('nightwatch');

Nightwatch.runTests('./src', {
	"webdriver" : {
		"start_process": true,
		"server_path": "node_modules/.bin/chromedriver",
		"port": 9515
	  },
  
	  "test_settings" : {
		"default" : {
		  "desiredCapabilities": {
			"browserName": "chrome"
		  }
		}
	  }
}).then(function() {
  // Tests finished
}).catch(function(err) {
  // An error occurred
});