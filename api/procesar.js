export default function handler(req, res) {
  const nombre = req.query.nombre || "anónimo";
  if (nombre.toLowerCase() === "error") {
    return res.status(500).json({ 
      error: "Falla simulada del sistema" 
    });
  }
  res.status(200).json({
    resultado: `Nombre procesado: ${nombre.toUpperCase()}`,
    longitud: nombre.length
  });
}
//Comentario taller práctico
