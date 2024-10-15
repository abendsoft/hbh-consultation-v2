const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const logInfo = (message) => console.log(`[ info ] ${message}`);
const logSuccess = (message) => console.log(`[ success ] ${message}`);
const logError = (message) => console.error(`[ error ] ${message}`);

const args = process.argv.slice(2);
const apiKeyArg = args.find((arg) => arg.startsWith("-key="));
const apiKey = apiKeyArg ? apiKeyArg.split("=")[1] : null;

if (!apiKey) {
  logError("Shopify API key not provided. Use -key=<your-api-key>");
  process.exit(1);
}

const buildPath = path.join(__dirname, "build");
const serverBuildPath = path.join(__dirname, "web/build");
const frontendDistPath = path.join(__dirname, "web/frontend/dist");

if (fs.existsSync(buildPath)) {
  logInfo("Cleaning up old output directory (build)");
  fs.rmSync(buildPath, { recursive: true, force: true });
  fs.mkdirSync(buildPath, { recursive: true });
  fs.mkdirSync(serverBuildPath, { recursive: true });
  logInfo("Created directory output directory (build)");
} else {
  fs.mkdirSync(buildPath, { recursive: true });
  logInfo("Created directory output directory (build)");
}

if (fs.existsSync(serverBuildPath)) {
  logInfo("Cleaning up old server output directory (build)");
  fs.rmSync(serverBuildPath, { recursive: true, force: true });
}

let packageManager;
if (fs.existsSync(path.join(__dirname, "yarn.lock"))) {
  packageManager = "yarn";
} else if (fs.existsSync(path.join(__dirname, "package-lock.json"))) {
  packageManager = "npm";
} else {
  packageManager = "unknown (defaulting to npm)";
}
logInfo(`Using package manager (${packageManager})`);

try {
  logInfo("Starting app build process...");

  execSync(
    `
      cd web &&
      swc . -d build --copy-files --log-watch-compilation --include-dotfiles --ignore node_modules,frontend,inject-json-assertion.cjs,.eslintignore,.eslintrc,.prettierignore,prettier.config.js,nodemon.json,shopify.web.toml,tsconfig.json,yarn.lock,.env.example,server/logs &&
      node inject-json-assertion.cjs &&
      cd frontend &&
      SHOPIFY_API_KEY='${apiKey}' yarn build &&
      mkdir -p ../build/frontend/dist &&
      cp -r ./dist/* ../build/frontend/dist
    `,
    { stdio: "inherit" }
  );

  logSuccess("App build completed");

  if (fs.existsSync(path.join(__dirname, "web/build"))) {
    execSync(`mv web/build/* ${buildPath}`);
    logInfo("Copy app .env to build folder");
    execSync(`cp web/build/.env ${buildPath}`);
    execSync(`rm -rf ${serverBuildPath}`);
    execSync(`rm -rf ${frontendDistPath}`);
    logInfo("Cleaning up directories");
    logInfo("Moved app to build folder");
  } else {
    logError("Error: 'web/app' directory not found.");
    process.exit(1);
  }

  logSuccess("Build process completed");

  console.log(`
            ╭────────────────────────────────────────────────────────────────────────╮
            │    Run the following commands to start the server in production        │
            │────────────────────────────────────────────────────────────────────────│
            │                                                                        │
            │    ❯ cd build                                                          │
            │    ❯ ${packageManager} install --production                                         │
            │    ❯ ${packageManager} start                                                        │
            │    or                                                                  │
            │    ❯ cross-env NODE_ENV=production node server/server.js               │
            │                                                                        │
            ╰────────────────────────────────────────────────────────────────────────╯
  `);
} catch (error) {
  logError("Error during the build process:");
  logError(error.message);
  process.exit(1);
}
