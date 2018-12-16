import { BrowserSyncInstance, Options } from 'browser-sync';
export declare class ProxyServer {
    private options;
    private instance;
    /**
     * Initializes the ProxyServer.
     *
     * @param {Options} options
     */
    constructor(options?: Options);
    /**
     * Starts listening on a given port.
     *
     * @param {string} url - The url to proxy.
     * @param {number} port - An optional port.
     * @returns {Promise<BrowserSyncInstance>}
     */
    listen(url: string, port?: number): Promise<BrowserSyncInstance>;
}
