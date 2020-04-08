const Unsplash = require('unsplash-js').default;
const toJson = require('unsplash-js').toJson;
const fetch = require('node-fetch');
global.fetch = fetch;

// Your Personal Access Key
const APP_ACCESS_KEY = 'ukDugk2tljFZ6nP_sl-67Wc3E9jEnvCcVnDZSACIcRM';

const unsplash = new Unsplash({
	accessKey: APP_ACCESS_KEY,
	headers: {
		'Content-Type': 'application/x-www-form-urlencoded'
	}
});

// unsplash.search.photos('dogs', 1, 10, { orientation: 'portrait' }).then(toJson).then((json) => {
//     // Your code
//     console.log("dogs:", json);
// });

unsplash.photos.getRandomPhoto().then(toJson).then((json) => {
    console.log("random:", json);
    unsplash.photos.downloadPhoto(json);
});
