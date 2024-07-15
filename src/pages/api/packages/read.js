import { db, Packages, AdminKeys, like } from "astro:db";

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

    const allPackages = await db
      .select()
      .from(Packages)

    return new Response(
      JSON.stringify({
        message: "Llave valida",
        packages: allPackages,
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
