import { dotenv } from "./deps.ts";

/* MEMO: deno deployはRead権限が存在しないため、クラッシュ対策 */
try {
  dotenv.configSync({
    export: true,
    path: "./.env.local",
  });
} catch {}

export const Secret = {
  DISCORD_TOKEN: Deno.env.get("DISCORD_TOKEN")!,
  GUILD_ID: Deno.env.get("GUILD_ID")!,
};
