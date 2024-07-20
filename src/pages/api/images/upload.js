import { db, AdminKeys, like, Images } from "astro:db";
import { v2 as cloudinary } from 'cloudinary';

export const prerender = false;

cloudinary.config({ 
  cloud_name: import.meta.env.CLOUDINARY_CLOUD_NAME,
  api_key: import.meta.env.CLOUDINARY_API_KEY,
  api_secret: import.meta.env.CLOUDINARY_API_SECRET
});

export const POST = async ({ request }) => {
  const { key, image } = await request.json();

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

    const uploadResult = await cloudinary.uploader.upload(`data:image/jpeg;base64,${image}`, {
      public_id: `uploaded_image_${Date.now()}`,
      folder: "images" // Opcional: especifica la carpeta en Cloudinary
    });

    if (!uploadResult || !uploadResult.secure_url) {
      return new Response(
        JSON.stringify({
          message: "Error al subir la imagen a Cloudinary",
        }),
        {
          status: 500,
        }
      );
    }

    const imageUrl = uploadResult.secure_url;

    await db.insert(Images).values({
      image: imageUrl,
    });

    return new Response(
      JSON.stringify({
        message: "Imagen subida",
        url: imageUrl,
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
