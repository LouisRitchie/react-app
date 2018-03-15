const path = require("path")
const express = require("express")
const webpack = require("webpack")
const config = require("./webpack.config.js")

let PUBLIC_URL

function startWebpack() {
	const compiler = webpack(config)

	const watching = compiler.watch({
		aggregateTimeout: 300,
		poll: undefined
	}, (err, stats) => {
		// do nothing for now, as stats appears to be a big object...
	})
}

function startExpress(port) {
	const app = express()
	const PUBLIC_DIR = path.join(__dirname, "public")
	const DIST_DIR = path.join(__dirname, "dist")
	PUBLIC_URL = `http://localhost:${port}`

	app.use(express.static(PUBLIC_DIR))

	app.get("/code", function (req, res) {
		res.sendFile(path.join(DIST_DIR, "bundle.js"))
	})

	app.get("/", function (req, res) {
		res.sendFile(path.join(PUBLIC_DIR, "index.html"))
	})

	app.listen(port)
	console.log('done start express.')
}

startWebpack()
startExpress(3000)
