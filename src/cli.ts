#!/usr/bin/env node

import * as debug from 'debug'
import chalk from 'chalk'
import { parse } from 'url'
import { ProxyServer } from './lib/proxyserver'

// tslint:disable-next-line
const { name, version } = require('../package.json')

// enable logging
debug.enable(name)

const log = debug(name)
const url: string = process.argv[2] || ''
const port: number = parseInt(process.argv[3], 10) || 9001

// log version
log(`v${version}`)

// check given url
if (url.length === 0) {
    log(chalk.red('Please enter a url to proxy!'))
    process.exit(1)
}

// log
const proxyUrl: string = `${parse(url, false, true).protocol}//localhost:${port}`
log(`proxy started: ${chalk.cyan(proxyUrl)} -> ${chalk.cyan(url)}`)

// create proxy server
const server = new ProxyServer()
server.listen(url, port)
