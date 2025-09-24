export default async function handler(req, res) {
  if (req.method === "POST") {
    const { result, userId } = req.body;

    const BOT_TOKEN = process.env.BOT_TOKEN;
    const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: userId,
        text: `Ваш результат: ${result}/1`
      })
    });

    const data = await response.json();
    res.status(200).json(data);
  } else {
    res.status(405).end();
  }
}

