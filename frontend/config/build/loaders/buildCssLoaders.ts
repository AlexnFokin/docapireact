import MiniCssExtractPlugin from "mini-css-extract-plugin";

export default function buildCssLoaders(isDev: boolean) {
    return {
        test: /\.s[ac]ss$/i,
        use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        auto: (resPath: string) => Boolean(resPath.includes('.module.scss')),
                        localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:8]'
                    },
                    importLoaders: 1
                }
            },
            'postcss-loader',
            'sass-loader',
        ]
    }
}