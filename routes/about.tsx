import { Handlers } from "$fresh/server.ts";

export const handlers: Handlers = {
  async GET(req, ctx) {
    const resp = await ctx.render();
    resp.headers.set("X-Custom-Header", "Hello");
    return resp;
  },
};

export default function About() {
  return <p>about</p>;
}
