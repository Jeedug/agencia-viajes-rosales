import validator from "validator";
import { db, like, Subscriptions } from "astro:db";

export const prerender = false;

export const POST = async ({ request }) => {
  try {
    const data = await request.json();
    const email = data.email;

    if (!email) {
      return new Response(
        JSON.stringify({
          status: 400,
          message: "Correo no ingresado",
        }),
        {
          status: 404,
        }
      );
    }

    if (!validator.isEmail(email)) {
      return new Response(
        JSON.stringify({
          status: 400,
          message: "El correo no es valido",
        }),
        {
          status: 404,
        }
      );
    }

    const sub = await db
      .select()
      .from(Subscriptions)
      .where(like(Subscriptions.email, email));

    if (sub.length > 0) {
      return new Response(
        JSON.stringify({
          message: "El correo ya esta suscrito",
        }),
        {
          status: 404,
        }
      );
    }

    await db.insert(Subscriptions).values(data);

    return new Response(
      JSON.stringify({
        message: "Correo suscrito",
      })
    );
  } catch (e) {
    return new Response(
      JSON.stringify({
        status: 400,
        message: "Internal server error",
      }),
      {
        status: 404,
      }
    );
  }
};
