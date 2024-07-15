import { db, Subscriptions, AdminKeys, like, eq } from "astro:db";

export const prerender = false;

export const POST = async ({ request }) => {
  const { key, id } = await request.json();

  console.log(key);
  console.log(id);

  if (!key) {
    console.log("no key");

    return new Response(
      JSON.stringify({
        message: "Llave de acceso no ingresada",
      }),
      {
        status: 400,
      }
    );
  }

  try {
    const keyValue = await db
      .select()
      .from(AdminKeys)
      .where(like(AdminKeys.key, key));

    if (keyValue.length === 0) {
      return new Response(
        JSON.stringify({
          message: "Llave no valida",
        }),
        {
          status: 404,
        }
      );
    }

    const subscription = await db
    .select()
    .from(Subscriptions)
    .where(eq(Subscriptions.id, id));

    console.log(subscription);

    if (subscription[0].blocked) {
        await db.update(Subscriptions).set({ blocked: false }).where(eq(Subscriptions.id, id))
        return new Response(
            JSON.stringify({
              message: "Subscription unblocked",
            }),
            {
              status: 200,
            }
          );
    } {
        await db.update(Subscriptions).set({ blocked: true }).where(eq(Subscriptions.id, id))
        return new Response(
            JSON.stringify({
              message: "Subscription blocked",
            }),
            {
              status: 200,
            }
          );
    }
    

  } catch (e) {
    console.error(e);
    return new Response(
      JSON.stringify({
        message: "Internal server error",
      }),
      {
        status: 500,
      }
    );
  }
};
