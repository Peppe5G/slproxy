export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");

  const siteId = req.query.siteId || "1724"; // Tar från URL om det finns, annars standard

  const url = `https://transport.integration.sl.se/v1/sites/${siteId}/departures`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({
      error: "Kunde inte hämta data från SL:s öppna API.",
      details: error.message,
    });
  }
}
