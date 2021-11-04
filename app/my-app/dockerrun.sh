docker run \
    --tty \
    -p 19000-19100:19000-19100 \
    --interactive \
    --workdir /code \
    --volume $PWD:/code \
    --env EXPO_TOKEN=az4OMf1ViLaQVswspzHTBZocLj8Tl5cMRdgHMFcy \
    bycedric/expo-cli bash
