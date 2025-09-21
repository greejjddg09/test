function checkAnswers() {
  let score = 0;
  const form = document.forms['quizForm'];
  const answer = form['q1'].value;
  if (answer === "1") score++;

  document.getElementById("result").innerText =
    "Ваш результат: " + score + "/1";

  // отправляем результат + userId на сервер
  fetch("/api/send", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      result: score,
      userId: telegramUser?.id
    })
  });
}
