#!/usr/bin/env node
import { name, version } from '../package.json';
import { Logger, Arguments } from 'modern-cli';
import { parse } from 'url';
import ProxyServer from './lib/proxyserver';

process.env.DEBUG = name

const log = new Logger(name);
const args = new Arguments();
const url = args.get(0) || false;
const port = args.get(1) || 9001;

// log version
log(version);

// check given url
if (!url) {
    log.red('Please enter a url to proxy!');
    process.exit(1);
}

// log
const proxyUrl = `${parse(url, false, true).protocol}//localhost:${port}`;
log(`proxy started: ${Logger.cyan(proxyUrl)} -> ${Logger.cyan(url)}`);

// create proxy server
(new ProxyServer()).listen(url, port);
