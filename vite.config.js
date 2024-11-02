import { defineConfig } from "vite";
import * as glob from  "glob";
import path, { resolve } from "node:path";

const getHtmlEntries = ()=>{
    return Object.fromEntries(
        [
            ...glob.sync('./**/*.html', { ignore:'.dist/**' }).map(file=>[,
            file.slice(0, file.length - path.extname(file).length),
            resolve(__dirname, file)
            ])
        ]
    )
}

 /*
 nombre 
 */

export default  defineConfig(
    {
        appType:'mpa',
        base: "/",
        build:{
            rollupOptions:{
                input: getHtmlEntries()
            }

        }

    }
)

