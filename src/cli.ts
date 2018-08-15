#!/usr/bin/env node

import { Logger, Arguments } from 'modern-cli'
import { parse } from 'url'
import { ProxyServer } from './lib/proxyserver'
import * as pkg from '../package.json'

// fetch package data
const { name, version } = pkg as any

// enable logging
process.env.DEBUG = name

const log: Logger = new Logger(name)
const args: Arguments = new Arguments()
const url: string = args.get(0) || false
const port: number = args.get(1) || 9001

// log version
log(`v${version}`)

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
