import { dotenv } from "./deps.ts";

dotenv.configSync({
  export: true,
  path: "./.env",
});

export const Secret = {
  DISCORD_TOKEN: Deno.env.get("DISCORD_TOKEN")!,
};
