import { db, Promotions, AdminKeys, like, eq } from "astro:db";

export const prerender = false;

export const POST = async ({ request }) => {
  const { key, values, id } = await request.json();

  console.log(key);

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

    console.log(values);
    console.log(id)

      await db.update(Promotions).set(values).where(eq(Promotions.id, id))


    return new Response(
      JSON.stringify({
        message: "Promociones modificada",
      }),
      {
        status: 200,
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
      }
    );
  }
};
