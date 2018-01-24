import * as bs from 'browser-sync';
export interface ProxyServerOptions extends bs.Options {
}
export declare class ProxyServer {
    private options;
    private browserSync;
    /**
     * Initializes the ProxyServer.
     *
     * @returns {ProxyServer}
     */
    constructor(options?: ProxyServerOptions);
    /**
     * Starts listening on a given port.
     *
     * @param {string} url - The url to proxy.
     * @param {number} port - An optional port.
     * @returns {void}
     */
    listen(url: string, port?: number): void;
}
