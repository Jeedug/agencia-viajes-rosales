import { db, Subscriptions, AdminKeys, like, eq } from "astro:db";
import nodemailer from "nodemailer";

export const prerender = false;

export const POST = async ({ request }) => {
  const { key, imageSrc, text } = await request.json();

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

    const allSubscriptions = await db
      .select({
        email: Subscriptions.email,
      })
      .from(Subscriptions)
      .where(eq(Subscriptions.blocked, false));

    const transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: "viajesrosalesagencia@gmail.com",
        pass: "gary zaze lwke evxe",
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    transporter.sendMail({
      from: "viajesrosalesagencia@gmail.com",
      to: allSubscriptions.map((subscription) => subscription.email),
      subject: "Viajes Rosales - Nuevo envío",
      text: "Nueva oferta an Viajes Rosales",
      html: `
        <h1 style="background-color: #f00; color: #fff; padding: 10px;">${text}</h1>
        <img src="${imageSrc}" />
      `,
    });

    return new Response(
      JSON.stringify({
        message: "Emails enviados",
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
