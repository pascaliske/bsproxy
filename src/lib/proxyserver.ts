import * as bs from 'browser-sync';

export interface ProxyServerOptions extends bs.Options {

}

export class ProxyServer {
    private defaults: ProxyServerOptions = {
        open: false,
        ui: false,
        logLevel: 'silent'
    }

    private options: ProxyServerOptions
    private browserSync: bs.BrowserSyncInstance

    /**
     * Initializes the ProxyServer.
     *
     * @returns {ProxyServer}
     */
    constructor(options: ProxyServerOptions) {
        this.options = Object.assign({}, this.defaults)
        this.browserSync = bs.create()
    }

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
