export default async function handler(req, res) {
    if (req.method !== "POST") {
      return res.status(405).json({ error: "Method not allowed" });
    }
  
    const { user_id, score } = req.body;
    const BOT_TOKEN = process.env.BOT_TOKEN; // токен спрятан в настройках Vercel
  
    const text = `Ваш результат: ${score}/5 ✅`;
  
    await fetch(`https://api.telegram.org/bot${7095220207:AAGbyb_Wz1qQJnEQzCN_RARB2K01srXcrRQ}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: user_id, text })
    });
  
    res.status(200).json({ ok: true });
  }

  

