import * as webpack from "@cypress/webpack-preprocessor";

export default (
  on,
  config
) => {
  on(
    "file:preprocessor",
    webpack({
      webpackOptions: {
        resolve: {
          extensions: [".ts", ".js"],
        },
        module: {
          rules: [
            {
                test: /\.ts$/,
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            transpileOnly: true,
                        },
                    },
                ],
                exclude: /node_modules/,
            },
            {
                test: /\.feature$/,
                use: [
                    {
                        loader: '@badeball/cypress-cucumber-preprocessor/webpack',
                        options: config
                    },
                ],
            }
          ]
        },
      },
    })
  );
}