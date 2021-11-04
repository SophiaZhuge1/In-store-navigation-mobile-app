# Get started with frontend

## Setup

1. Pull image

```bash
docker pull bycedric/expo-cli
```

2. Run image (make sure you are in project root folder (tesco-in-store-navigation-app))

```bash
docker run \
    --tty \
    -p 19000-19100:19000-19100 \
    --interactive \
    --workdir /code \
    --volume $PWD:/code \
    --env EXPO_TOKEN=az4OMf1ViLaQVswspzHTBZocLj8Tl5cMRdgHMFcy \
    bycedric/expo-cli bash
```

## NEXT STEPs

Attach VSCode to running container, and navigate to folder with code (/code/app/my-app). If setting up for first time, run 

```bash
yarn install
```

The above command will take around two millennia.

To start running:

```bash
yarn web
```

Wait a century or so, you should get the webapp running (it will take a while to build the webapp, there will be a lot of misleading moments in the console leading you to believe the process is finished :D )
