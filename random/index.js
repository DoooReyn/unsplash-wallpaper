const Unsplash = require('unsplash-js').default;
const toJson = require('unsplash-js').toJson;
const request = require('request');
const fetch = require('node-fetch');
const fs = require('fs');
global.fetch = fetch;

/************************************************************************************************
// downlaod test
const photo_name = './images/man sitting surrounded by smoke-Cianna Jolie.jpg'.replace(/\s/g, '_');
const url = 'https://images.unsplash.com/photo-1458025835567-4de2f6f82412?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyNTY2N30';
request.get({ uri: url, encoding: 'binary' }, (err, res) => {
	if (err) return console.error(err);
	// fs.writeFileSync(photo_name, res.body, { encoding: 'binary' });
	console.log(`wallpaper has been saved at ${photo_name}`);
});
************************************************************************************************/

const APP_ACCESS_KEY = 'ukDugk2tljFZ6nP_sl-67Wc3E9jEnvCcVnDZSACIcRM';
const APP_OPTIONS = {
	accessKey: APP_ACCESS_KEY,
	headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
};
const APP_QUERY_PARAMS = {
    query: 'nature',
    orientation: 'landscape'
};
async function getRandomWallpaper(){
	const unsplash = new Unsplash(APP_OPTIONS);
	const data = await unsplash.photos.getRandomPhoto(APP_QUERY_PARAMS);
	const json = await toJson(data);
    const photo_name = `${json.alt_description}-${json.user.name}.jpg`.replace(/\s/g, '_');
    const information = {
        name: json.description,
        desc: json.alt_description,
        user: json.user.name,
        filename: photo_name,
        downloadUrl: json.urls.raw
    };
	console.log(`wallpaper information: \n${JSON.stringify(information, null, 2)}`);
	console.log(`wallpaper is downloading...`);
	request.get({ uri: json.urls.raw, encoding: 'binary' }, (err, res) => {
		if (err) return console.error(err);
		const file_path = `./images/${photo_name}`;
		fs.writeFileSync(file_path, res.body, { encoding: 'binary' });
		console.log(`wallpaper has been saved at ${file_path}`);
	});
}
getRandomWallpaper();
