import webpack from "webpack";
import {BuildOptions} from "./types/config";
import buildCssLoaders from "./loaders/buildCssLoaders";
import buildSvgLoader  from "./loaders/buildSvgLoader";


export function buildLoaders({isDev}: BuildOptions): webpack.RuleSetRule[] {

    const svgLoader = buildSvgLoader();

    const fileLoader =  {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    };

    const cssLoader = buildCssLoaders(isDev)

    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    return [
        fileLoader,
        svgLoader,
        typescriptLoader,
        cssLoader,      
    ]
}