import { withSentryConfig } from '@sentry/nextjs';

/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        // Required for Sentry with Next.js 15
        clientTraceMetadata: ['baggage', 'sentry-trace'],
    },
};

export default withSentryConfig(
    nextConfig,
    {
        // For all available options, see:
        // https://github.com/getsentry/sentry-webpack-plugin#options

        org: "self-employed-freelancer",
        project: "myportfolio",

        // Only print logs for uploading source maps in CI
        silent: !process.env.CI,

        // Upload a larger set of source maps for prettier stack traces (increases build time)
        widenClientFileUpload: true,

        // Uncomment to route browser requests to Sentry through a Next.js rewrite to circumvent ad-blockers.
        // This can increase your server load as well as your hosting bill.
        // Note: Check that the configured route will not match with your Next.js middleware, otherwise reporting of client-
        // side errors will fail.
        // tunnelRoute: "/monitoring",

        // Hides source maps from generated client bundles
        hideSourceMaps: true,
    },
    {
        // For all available options, see:
        // https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/

        // Suppresses all logs
        silent: true,
    }
);