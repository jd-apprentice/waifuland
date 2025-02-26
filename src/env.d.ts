/// <reference path="../.astro/types.d.ts" />

interface ImportMetaEnv {
    readonly SITE_URL: string;
    readonly AUTH_KEYCLOAK_ISSUER: string;
    readonly AUTH_KEYCLOAK_ID: string;
    readonly AUTH_SECRET: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}