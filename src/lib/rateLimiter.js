const rateLimit = (options) => {
    const requests = new Map();
  
    return async function (request) {
      const ip = request.headers.get('x-forwarded-for') || request.headers.get('cf-connecting-ip') || 'unknown-ip';
      const now = Date.now();
  
      if (!requests.has(ip)) {
        requests.set(ip, []);
      }
  
      const timestamps = requests.get(ip);
      timestamps.push(now);
  
      // Eliminar solicitudes antiguas fuera de la ventana de tiempo
      while (timestamps.length && timestamps[0] <= now - options.windowMs) {
        timestamps.shift();
      }
  
      if (timestamps.length > options.max) {
        return new Response(JSON.stringify({
          message: "Demasiadas peticiones",
        }), { status: 429 });
      }
  
      console.log(timestamps.length)
  
      return null;
  
  
    };
  };
  
  export const limiter = rateLimit({
    windowMs: 60 * 1000, // 1 minuto
    max: 12, // Límite de 100 solicitudes por IP por ventana
  });


