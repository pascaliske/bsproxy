import * as bs from 'browser-sync';

export interface ProxyServerOptions extends bs.Options {

}

export class ProxyServer {
    /* --- constants --- */

    /* --- properties --- */

    private options: ProxyServerOptions

    private browserSync: bs.BrowserSyncInstance

    /* --- constructor --- */

    /**
     * Initializes the ProxyServer.
     *
     * @returns {ProxyServer}
     */
    constructor(options?: ProxyServerOptions) {
        const defaults: ProxyServerOptions = {
            open: false,
            ui: false,
            logLevel: 'silent'
        }

        this.options = Object.assign(defaults, options)
        this.browserSync = bs.create()
    }

    /* --- private --- */

    /* --- protected --- */

    /* --- public --- */

    /**
     * Starts listening on a given port.
     *
     * @param {string} url - The url to proxy.
     * @param {number} port - An optional port.
     * @returns {void}
     */
    public listen(url: string, port: number = 9001): void {
        if (!url) {
            throw new Error('Please enter a url to proxy!')
        }

        // start server
        this.browserSync.init(Object.assign(this.options, {
            port: port,
            proxy: url
        }))
    }
}
