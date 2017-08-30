module.exports = function(paths){
    return {
        module: {
            rules: [
              {
                test: /\.(png|jpg|gif|svg)$/,
                include: paths,
                loader: 'file-loader',
                options: {
                    name: 'img/[name].[ext]'
                }
              }
            ]
          }
    }
};