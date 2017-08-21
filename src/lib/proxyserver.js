import browsersync from 'browser-sync';

export default class ProxyServer {
    /**
     * Initializes the proxyserver
     *
     * @return {ProxyServer}
     */
    constructor() {
        this.options = {
            open: false,
            ui: false,
            logLevel: 'silent'
        };

        this.browsersync = browsersync.create();
    }

    /**
     * Starts listening on a given port
     *
     * @param {Integer} port
     * @return {void}
     */
    listen(url=false, port=9001) {
        if (!url) {
            throw new Error('Please enter a url to proxy!');
        }

        // merge options
        const options = Object.assign({}, this.options, {
            port: port,
            proxy: url
        });

        // start server
        this.browsersync.init(options);
    }
}
