module.exports = {
  port: 8085,
  proxyTo: {
    host: 'localhost',
    port: 8080
  },
  sessionSecret: 'AeV8Thaieel0Oor6shainu6OUfoh3ohwZaemohC0Ahn3guowieth2eiCkohhohG4', // change me
  modules: {
    google: {
      appId: '878695286765-adp7s5uml7vih4k3npma75kqgptalm6u.apps.googleusercontent.com',
      appSecret: 'd1GZWstbD4cnBNfPOaU-63xs',
      requiredDomain: 'flowcom.se'
    }
  }
};
