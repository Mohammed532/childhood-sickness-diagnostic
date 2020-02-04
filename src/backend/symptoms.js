const GoogleSpreadsheet = require('google-spreadsheet');
const { promisify} = require('util');

const creds = require('./client_secret.json');

async function accessSpreadsheet(){
	const doc = new GoogleSpreadsheet('1H4QFrOrV_ZkE4Lb-MjDP1xYuRhjy2s1ctpr2g54OKmo');
	await promisify(doc.useServiceAccountAuth)(creds);
	const info = await promisify(doc.getInfo)();
	const sheet = info.worksheets[0];

	const columns = await promisify(sheet.getColumns)({
		offset: 2
	});

	console.log(columns);
}

accessSpreadsheet();
