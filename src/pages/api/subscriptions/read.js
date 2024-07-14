import { db, Subscriptions, AdminKeys, like } from "astro:db";

export const prerender = false;

export const POST = async ({ request }) => {
  const { key } = await request.json();

  console.log(key);

  if (!key) {
    console.log("no key");

    return new Response(
      JSON.stringify({
        message: "Llave de acceso no ingresada",
      }),
      {
        status: 400,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT",
          "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
        }
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
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT",
            "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
          }
        }
      );
    }

    const allSubscriptions = await db
      .select()
      .from(Subscriptions)

    return new Response(
      JSON.stringify({
        message: "Llave valida",
        subscriptions: allSubscriptions,
      }),
      {
        status: 200,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT",
          "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
        }
      }
    );
  } catch (e) {
    console.error(e);
    return new Response(
      JSON.stringify({
        message: "Internal server error",
      }),
      {
        status: 500,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT",
          "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
        }
      }
    );
  }
};
