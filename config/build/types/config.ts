export type buildMode = 'production' | 'development';

export interface buildEnv {
    mode:buildMode,
    port: number
}

export interface buildPaths {
    entry: string;
    build:string;
    html:string;
}

export interface buildOptions {
    mode:buildMode;
    paths:buildPaths;
    isDev:boolean
    port:number
}