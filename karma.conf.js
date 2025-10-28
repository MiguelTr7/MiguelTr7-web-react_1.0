// karma.conf.js
module.exports = function(config){
    //llamo a set para modificar la configuración
    config.set({

        // 1. AÑADIMOS 'webpack' AL ARRAY DE FRAMEWORKS
        frameworks: ['jasmine', 'webpack'],

        //tipo de archivos para testing
        //*>src que tengan la extensión .spec.js
        files: ['src/**/*.spec.js'],

        preprocessors:{ 
            //pueda entender .js o .jsx
            'src/**/*.spec.js': ['webpack']
        },

        //Configuramos WebPack
        webpack: {
            mode: 'development',
            //module=reglas
            module: {
                rules: [
                    //1ra regla (.js/.jsx)
                    {
                        //aplica esto a los archivos .js o .jsx
                        test: /\.jsx?$/,
                        exclude: /node_modules/,
                        loader: 'babel-loader',
                    },

                    //2da regla (.css)
                    {
                        test: /\.css$/i,
                        use: ['style-loader', 'css-loader']
                    },
                    
                    // 3ra regla (imágenes) - YA INCLUIDA
                    {
                        test: /\.(png|jpe?g|gif|svg)$/i,
                        loader: 'file-loader',
                        options: {
                            name: '[path][name].[ext]',
                        },
                    },

                ],
            },

            //como resolver las importaciones
            resolve: {
                // 3. CORREGIDO (añadido '.')
                extensions: ['.js','.jsx'], 
            },
        },

        //definir como mostrar los resultados
        //progress = consola y kjhtml = navegador
        reporters: ['progress', 'kjhtml'],

        browsers: ['Chrome'],
        //false = se mantiene ejecutando el navegador para ver los cambios
        singleRun: false,
    });
};