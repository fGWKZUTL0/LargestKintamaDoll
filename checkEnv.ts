import { Secret } from "./secret.ts";

console.log(atob(Secret.DISCORD_TOKEN.split(".")[0]));
