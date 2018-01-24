import * as bs from 'browser-sync'

export interface ProxyServerOptions extends bs.Options {}

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
    public constructor(options?: ProxyServerOptions) {
        const defaults: ProxyServerOptions = {
            open: false,
            ui: false,
            logLevel: 'silent'
        }

        this.options = { ...defaults, ...options }
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
        if (!url || url.match(/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/) === null) {
            throw new Error('Please enter a valid url to proxy!')
        }

        // start server
        this.browserSync.init({
            ...this.options,
            port: port,
            proxy: url
        })
    }
}
