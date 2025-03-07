import Keycloak from "@auth/core/providers/keycloak";
import { defineConfig } from "auth-astro";

// TODO: Prepare server outside my homelab
export default defineConfig({
    providers: [
        Keycloak({
            jwks_endpoint: `${process.env.AUTH_KEYCLOAK_ISSUER}/protocol/openid-connect/certs`,
            wellKnown: `${process.env.AUTH_KEYCLOAK_ISSUER}/.well-known/openid-configuration`,
            clientId: `${process.env.AUTH_KEYCLOAK_ID}`,
            clientSecret: `${process.env.AUTH_SECRET}`,
            issuer: `${process.env.AUTH_KEYCLOAK_ISSUER}`,
            authorization: {
                params: {
                    scope: "openid email profile",
                },
                url: `${process.env.AUTH_KEYCLOAK_ISSUER}/protocol/openid-connect/auth`,
            },
            token: `${process.env.AUTH_KEYCLOAK_ISSUER
                }/protocol/openid-connect/token`,
            userinfo: `${process.env.AUTH_KEYCLOAK_ISSUER
                }/protocol/openid-connect/userinfo`,
        }),
    ],
});