import app from './../src/index';
import {describe, expect, test} from "vitest";
import { SELF, env } from 'cloudflare:test';

describe("/", () => {
	test("/", async () => {
		const response = await app.handle({
			req: new Request("http://a.b/", {
				method: "GET",
			}),
			env: env,
			ctx: undefined as unknown as ExecutionContext
		});

		expect(response).toBeTruthy();
		expect(response.status).toBe(200);
		expect((await response.json())).toEqual({message: "Hello World"});
	})
})

