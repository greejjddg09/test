export default async function handler(req, res) {
  if (req.method === "POST") {
    const { result } = req.body;  // <-- вот здесь сервер получает score

    const BOT_TOKEN = process.env.BOT_TOKEN;
    const CHAT_ID = process.env.CHAT_ID;

    const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

    await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: `Пользователь прошёл тест! Результат: ${result}/5`
      })
    });

    res.status(200).json({ ok: true });
  } else {
    res.status(405).end();
  }
}

