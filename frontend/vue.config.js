module.exports = {
    publicPath: "dito-pro.fr",
    devServer: {
      proxy: {
        '/maps-api': {
          target: 'https://maps.googleapis.com',
          changeOrigin: true,
          pathRewrite: {
            '^/maps-api': ''
          },
          headers: {
            Referer: 'http://localhost:5173' // Remplacez par l'URL de votre site local
          }
        }
      }
    }
  };
  