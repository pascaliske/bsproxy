import { BrowserSyncInstance, Options, create } from 'browser-sync'

export class ProxyServer {
    private options: Options

    private instance: BrowserSyncInstance

    /**
     * Initializes the ProxyServer.
     *
     * @param {Options} options
     */
    public constructor(options?: Options) {
        const defaults: Options = {
            ui: false,
            open: false,
            logLevel: 'silent'
        }

        this.options = { ...defaults, ...options }
        this.instance = create()
    }

    /**
     * Starts listening on a given port.
     *
     * @param {string} url - The url to proxy.
     * @param {number} port - An optional port.
     * @returns {Promise<BrowserSyncInstance>}
     */
    public listen(url: string, port: number = 9001): Promise<BrowserSyncInstance> {
        if (!url || url.match(/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/) === null) {
            throw new Error('Please enter a valid url to proxy!')
        }

        // start server
        return new Promise((resolve, reject) => {
            const options = {
                ...this.options,
                port: port,
                proxy: url
            }

            this.instance.init(options, error => {
                if (error) {
                    reject(error)
                }
                resolve(this.instance)
            })
        })
    }
}
