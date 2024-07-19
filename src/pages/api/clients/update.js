import { db, Clients, AdminKeys, like, eq } from "astro:db";

export const prerender = false;

export const POST = async ({ request }) => {
  const { key, values, id } = await request.json();

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

    await db.update(Clients).set(values).where(eq(Clients.id, id));

    return new Response(
      JSON.stringify({
        message: "Paquete modificado",
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
