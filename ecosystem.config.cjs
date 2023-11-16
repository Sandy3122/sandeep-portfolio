module.exports = {
  apps: [
    {
      name: "index.js",
      script: "F:\\Portfolio\\Sandeep Portfolio\\index.js",
      instances: "max",
      exec_mode: "cluster",
      watch: true, // optional, for automatic restarts on file changes
      env: {
        NODE_ENV: "production",
        PORT: 8000, // specify your port
      },
    },
  ],
};
