# Get started with frontend

Install node.js from the internet.

By default npm does not have access to the folder it needs on our Macs. To solve this, run:

```bash
sudo chown -R $(whoami) $(npm config get prefix)/{lib/node_modules,bin,share}
```

Install yarn:

```bash
curl -o- -L https://yarnpkg.com/install.sh | bash
```

Install dependencies:

```bash
yarn install
```

Run project:

```bash
yarn web
```