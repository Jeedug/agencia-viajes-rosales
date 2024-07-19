import { defineDb, defineTable, column  } from 'astro:db';

const Subscriptions = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    email: column.text(),
    blocked: column.boolean(),
  }
});

const Promotions = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    name: column.text(),
    description: column.text(),
    image: column.text(),
    price: column.number(),
    discount: column.number({ optional: true }),
  }
});

const Packages = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    name: column.text(),
    description: column.text(),
    items: column.json(),
    image: column.text(),
    price: column.number(),
    discount: column.number({ optional: true }),
  }
});

const AdminKeys = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    key: column.text(),
  }
});

const Clients = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    name: column.text(),
    email: column.text(),
    phone: column.text()
  }
});


export default defineDb({
  tables: {
    Subscriptions,
    Promotions,
    Packages,
    AdminKeys,
    Clients
  }
});
