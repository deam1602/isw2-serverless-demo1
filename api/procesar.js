export default function handler(req, res) {
  const nombre = req.query.nombre || "anónimo";

  if (nombre.toLowerCase() === "error") {
    return res.status(500).json({
      error: "Error interno simulado",
      detalle: "Se recibió la palabra clave de fallo"
    });
  }
  
  res.status(200).json({
    resultado: `Nombre procesado: ${nombre.toUpperCase()}`,
    timestamp: new Date().toISOString() 
  });
}
