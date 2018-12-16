#!/usr/bin/env node

import { Logger, Arguments } from 'modern-cli'
import { parse } from 'url'
import { ProxyServer } from './lib/proxyserver'

// tslint:disable-next-line
const pkg = require('../package.json')

// enable logging
process.env.DEBUG = pkg.name

const log: Logger = new Logger(pkg.name)
const args: Arguments = new Arguments()
const url: string = args.get(0) || false
const port: number = args.get(1) || 9001

// log version
log(`v${pkg.version}`)

// check given url
if (!url) {
    log.red('Please enter a url to proxy!')
    process.exit(1)
}

// log
const proxyUrl: string = `${parse(url, false, true).protocol}//localhost:${port}`
log(`proxy started: ${Logger.cyan(proxyUrl)} -> ${Logger.cyan(url)}`)

// create proxy server
const options = {}
const server = new ProxyServer(options)
server.listen(url, port)
