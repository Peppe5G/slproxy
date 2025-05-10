export default async function handler(req, res) {
  const apiKey = "39c9ef05880a432ab30b7ced4d6a9764"; // Din personliga SL-nyckel
  const siteId = "1724"; // Safirgränd
  const timeWindow = "30";

  const url = `https://api.sl.se/api2/realtimedeparturesV4.json?key=${apiKey}&siteid=${siteId}&timewindow=${timeWindow}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Något gick fel vid hämtning av data." });
  }
}
