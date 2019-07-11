module.exports = {
	'Demo test Google' : function (browser) {
	  browser
		.url('https://matthewrayfield.com/goodies/popup-trombone/')
		.waitForElementVisible('body')
		.click('h1')

		browser.windowHandles((handles) => {
			const handle = handles.value[1]
			browser
				.switchWindow(handle)
				.waitForElementVisible('body')
				.windowSize(handle, 420, 278)
				.windowSize(handle, 421, 278)
				.windowSize(handle, 422, 278)
				.windowSize(handle, 423, 278)
				.windowSize(handle, 424, 278)
				.pause(500)
				.windowSize(handle, 470, 278)
				.windowSize(handle, 471, 278)
				.windowSize(handle, 472, 278)
				.windowSize(handle, 473, 278)
				.windowSize(handle, 474, 278)
				.pause(500)
				.windowSize(handle, 490, 278)
				.windowSize(handle, 491, 278)
				.windowSize(handle, 492, 278)
				.windowSize(handle, 493, 278)
				.windowSize(handle, 494, 278)
				.pause(500)
				.windowSize(handle, 540, 278)
				.windowSize(handle, 541, 278)
				.windowSize(handle, 542, 278)
				.windowSize(handle, 543, 278)
				.windowSize(handle, 544, 278)
				.windowSize(handle, 545, 278)
				.windowSize(handle, 546, 278)
				.windowSize(handle, 547, 278)
				.windowSize(handle, 548, 278)
				.windowSize(handle, 549, 278)
				.windowSize(handle, 550, 278)
		})

	}
  };

  /*
  Bb-G

Bb-A

A-Ab

Ab-G
  */