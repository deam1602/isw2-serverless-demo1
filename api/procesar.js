export default function handler(req, res) {
  const nombre = req.query.nombre || "anónimo"; [cite: 34]
  
  if (nombre.toLowerCase() === "error") {
    return res.status(500).json({ error: "Error simulado en procesar" });
  }

  res.status(200).json({
    resultado: `Nombre procesado: ${nombre.toUpperCase()}`, [cite: 36]
    timestamp: new Date().toISOString()
  });
}
