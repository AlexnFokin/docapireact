
import webpack from 'webpack';

import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { BuildPath , BuildEnv} from './config/build/types/config';
import path from 'path';



export default (env: BuildEnv) => {

    const paths: BuildPath = {
        entry:  path.resolve(__dirname, "src", "index.tsx"),
        build: path.resolve(__dirname, "build"),
        html: path.resolve(__dirname, "public", "index.html"),
        src: path.resolve(__dirname, 'src'),
    }
  
    const PORT = env.port || 3000;
    const mode = env.mode ?? "development";
    const isDev = mode === 'development';
    const apiUrl = env.apiUrl || 'http://localhost:5000/api'
    
    const config: webpack.Configuration = buildWebpackConfig({
        mode,
        paths,
        isDev,
        port: PORT,
        apiUrl
    });

    return config
};