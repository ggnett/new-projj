import { Configuration } from "webpack-dev-server";
import { buildOptions } from "./types/config";

export function  buildDevServer (option:buildOptions):Configuration {
    return {
        port:option.port,
        open:true,
        historyApiFallback:true
    }
}