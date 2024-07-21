import { db, AdminKeys, like, Images } from "astro:db";

export const prerender = false;

export const POST = async ({ request }) => {
  const { key, id } = await request.json();

  if (!key) {
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

    const images = await db.delete().from(Images).where(eq(Images.id, id))

    return new Response(
      JSON.stringify({
        message: "Imagen subida",
        images: images,
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
