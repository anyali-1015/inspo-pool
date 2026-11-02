// Copy the single-page app into www/ for the native shell.
import { mkdirSync, copyFileSync, rmSync } from "node:fs";
rmSync("www", { recursive: true, force: true });
mkdirSync("www");
for (const f of ["index.html", "manifest.webmanifest", "icon-192.png", "icon-512.png", "apple-touch-icon.png", "favicon.png"]) copyFileSync(f, `www/${f}`);
console.log("www/ ready");
