// This file is generated by Astro DB
declare module 'astro:db' {
	export const Subscriptions: import("@astrojs/db/runtime").Table<
		"Subscriptions",
		{"id":{"type":"number","schema":{"unique":false,"deprecated":false,"name":"id","collection":"Subscriptions","primaryKey":true}},"email":{"type":"text","schema":{"unique":false,"deprecated":false,"name":"email","collection":"Subscriptions","primaryKey":false,"optional":false}}}
	>;
	export const Promotions: import("@astrojs/db/runtime").Table<
		"Promotions",
		{"id":{"type":"number","schema":{"unique":false,"deprecated":false,"name":"id","collection":"Promotions","primaryKey":true}},"name":{"type":"text","schema":{"unique":false,"deprecated":false,"name":"name","collection":"Promotions","primaryKey":false,"optional":false}},"description":{"type":"text","schema":{"unique":false,"deprecated":false,"name":"description","collection":"Promotions","primaryKey":false,"optional":false}},"image":{"type":"text","schema":{"unique":false,"deprecated":false,"name":"image","collection":"Promotions","primaryKey":false,"optional":false}},"price":{"type":"number","schema":{"unique":false,"deprecated":false,"name":"price","collection":"Promotions","primaryKey":false,"optional":false}},"discount":{"type":"number","schema":{"unique":false,"deprecated":false,"name":"discount","collection":"Promotions","primaryKey":false,"optional":true}}}
	>;
	export const Packages: import("@astrojs/db/runtime").Table<
		"Packages",
		{"id":{"type":"number","schema":{"unique":false,"deprecated":false,"name":"id","collection":"Packages","primaryKey":true}},"name":{"type":"text","schema":{"unique":false,"deprecated":false,"name":"name","collection":"Packages","primaryKey":false,"optional":false}},"description":{"type":"text","schema":{"unique":false,"deprecated":false,"name":"description","collection":"Packages","primaryKey":false,"optional":false}},"items":{"type":"json","schema":{"optional":false,"unique":false,"deprecated":false,"name":"items","collection":"Packages"}},"image":{"type":"text","schema":{"unique":false,"deprecated":false,"name":"image","collection":"Packages","primaryKey":false,"optional":false}},"price":{"type":"number","schema":{"unique":false,"deprecated":false,"name":"price","collection":"Packages","primaryKey":false,"optional":false}},"discount":{"type":"number","schema":{"unique":false,"deprecated":false,"name":"discount","collection":"Packages","primaryKey":false,"optional":true}}}
	>;
}
