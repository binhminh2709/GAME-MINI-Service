function setupProxy({ tls }) {
  const conf = [
    {
      context: ['/api', '/services', '/management', '/v3/api-docs', '/h2-console', '/auth', '/health'],
      target: `http${tls ? 's' : ''}://localhost:9090`,
      secure: false,
      changeOrigin: tls,
    },
    {
      context: ['/websocket'],
      target: 'ws://127.0.0.1:9090',
      ws: true,
    },
  ];
  return conf;
}

module.exports = setupProxy;
