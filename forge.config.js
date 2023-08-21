module.exports = {
  packagerConfig: {
    asar: true,
    icon: '/asset/main.ico'
  },
  rebuildConfig: {},
  makers: [
    {
      name: '@electron-forge/maker-squirrel',
      config: {},
    },
    {
      name: '@electron-forge/maker-zip',
      platforms: ['darwin'],
    },
    {
      name: '@electron-forge/maker-deb',
      config: {},
    },
    {
      name: '@electron-forge/maker-rpm',
      config: {},
    },
  ],
  plugins: [
    {
      name: '@electron-forge/plugin-auto-unpack-natives',
      config: {},
    },
  ],
  publishers: [
    {
      name: '@electron-forge/publisher-github',
      config: {
        repository: {
          owner: 'youryCh',
          name: 'expenses_tracker',
          environment: process.env.GITHUB_TOKEN
        },
        prerelease: false,
        draft: true,
        environment: process.env.GITHUB_TOKEN
      }
    }
  ]
};
