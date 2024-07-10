import { defineDb, defineTable, column  } from 'astro:db';

const Subscriptions = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    email: column.text(),
  }
});


export default defineDb({
  tables: {
    Subscriptions,
  }
});
