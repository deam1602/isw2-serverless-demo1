export default function handler(req, res) {
  const nombre = req.query.nombre || "anónimo";

  if (nombre.toLowerCase() === "error") {
    return res.status(500).json({
      error: "Error recibido",
      detalle: "Se recibió la palabra de fallo"
    });
  }
  
  res.status(200).json({
    resultado: `Nombre procesado: ${nombre.toUpperCase()}`,
    timestamp: new Date().toISOString() 
  });
}
