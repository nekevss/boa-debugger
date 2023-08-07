const isGithubActions = process.env.GITHUB_ACTIONS || false;

const assetPrefix = isGithubActions ? "https://nekevss.github.io/boa-debugger" : undefined;

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  reactStrictMode: true,
  assetPrefix: assetPrefix,
  webpack: function(config, { isServer }) {
    patchWasmModuleImport(config, isServer)
    return config
  }
}

// Courtesy of the below issue (most recent post by iksent).
//
// This may fail in future builds as this config seems to be both dependent on Webpack,
// and however Next.js/Vercel wants the webpack config.
function patchWasmModuleImport(config, isServer) {
  config.experiments = Object.assign(config.experiments || {}, {
      asyncWebAssembly: true,
  });

  config.optimization.moduleIds = 'named';

  config.module.rules.push({
      test: /\.wasm$/,
      type: 'webassembly/async',
  });

  // TODO: improve this function -> track https://github.com/vercel/next.js/issues/25852
  if (isServer) {
      config.output.webassemblyModuleFilename = './../static/wasm/[modulehash].wasm';
  } else {
      config.output.webassemblyModuleFilename = 'static/wasm/[modulehash].wasm';
  }
}

module.exports = nextConfig
