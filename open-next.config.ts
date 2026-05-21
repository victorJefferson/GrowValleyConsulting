import { defineCloudflareConfig } from "@opennextjs/cloudflare";
import staticAssetsIncrementalCache from "@opennextjs/cloudflare/overrides/incremental-cache/static-assets-incremental-cache";

/**
 * Static assets cache: pages are generated at build and served without ISR revalidation.
 * Do not set `export const revalidate` on routes — that requires a real queue (R2/DO), not "dummy".
 * CMS/content changes: redeploy. Workers Free: keep prefetch={false} on heavy links.
 */
export default defineCloudflareConfig({
	incrementalCache: staticAssetsIncrementalCache,
	enableCacheInterception: true,
});
