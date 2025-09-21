  function checkAnswers() {
  let score = 0;
  const form = document.forms['quizForm'];
  for (let i = 1; i <= 5; i++) {
    const answer = form['q' + i].value;
    if (answer === "1") score++;
  }

  document.getElementById('result').innerText =
    "Ваш результат: " + score + "/5";

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

