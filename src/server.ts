import { createStartHandler, defaultStreamHandler } from "@tanstack/react-start/server";

const fetch = createStartHandler(defaultStreamHandler);

function createServerEntry(entry: { fetch: (...args: unknown[]) => Promise<Response> | Response }) {
  return {
    async fetch(...args: unknown[]) {
      return entry.fetch(...args);
    },
  };
}

export default createServerEntry({ fetch });
