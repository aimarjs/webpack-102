import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';

// import Routes from '../components/Routes';
import App from '../components/App';

export default () => (req, res) => {
	res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <link href="/main.css" rel="stylesheet" />
      <title>Webpack</title>
    </head>
    <body>
      <div id="root">${renderToString(
				<StaticRouter location={req.url} context={{}}>
					<App />
				</StaticRouter>
			)}</div>
      <script src="vendor.js"></script>
      <script src="main.js"></script>
    </body>
    </html>
  `);
};
