// This file is generated by Astro DB
declare module 'astro:db' {
	export const Subscriptions: import("@astrojs/db/runtime").Table<
		"Subscriptions",
		{"id":{"type":"number","schema":{"unique":false,"deprecated":false,"name":"id","collection":"Subscriptions","primaryKey":true}},"email":{"type":"text","schema":{"unique":false,"deprecated":false,"name":"email","collection":"Subscriptions","primaryKey":false,"optional":false}}}
	>;
}
