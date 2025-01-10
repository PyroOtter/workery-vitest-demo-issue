**Workery Vitest Demo Error**

```
TypeError: Cannot use require() to import an ES Module.
❯ node_modules/.pnpm/openapi3-ts@4.4.0/node_modules/openapi3-ts/dist/oas30-E9r1WxRR.js:1:22
❯ node_modules/.pnpm/openapi3-ts@4.4.0/node_modules/openapi3-ts/dist/oas30.js?mf_vitest_no_cjs_esm_shim:1:27
❯ node_modules/.pnpm/@asteasolutions+zod-to-openapi@5.5.0_zod@3.24.1/node_modules/@asteasolutions/zod-to-openapi/dist/index.js?mf_vitest_no_cjs_esm_shim:35:34
```

**To Resolve**
- Bump @asteasolutions/zod-to-openapi to >= 6.4.0

**Override from package.json to validate:**

```
"pnpm": {
	"overrides": {
		"workery>@asteasolutions/zod-to-openapi": "7.3.0"
	}
}
```
