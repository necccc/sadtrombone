const Nightwatch = require('nightwatch');

// read the CLI arguments
Nightwatch.cli(function(argv) {
	// create the Nightwatch CLI runner
	const runner = Nightwatch.CliRunner({
		env: ['default'],
		config: `${__dirname}/nightwatch.config.js`
	});

	// setup and run tests
	runner
	  .setup()
	  .startWebDriver()
	  .then(() => runner.runTests())
	  .then(() => runner.stopWebDriver())
	  .catch(err => console.error(err));
  });


