import { defineDb, defineTable, column  } from 'astro:db';

const Subscriptions = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    email: column.text(),
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
    image: column.text(),
    price: column.number(),
  }
});


export default defineDb({
  tables: {
    Subscriptions,
    Promotions
  }
});
