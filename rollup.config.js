import image from "svelte-image";


export default {
    plugins: [
        svelte({
            preprocess: image(),
          })
    ]
};