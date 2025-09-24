function renderTest(course) {
  const container = document.getElementById("content");
  container.innerHTML = `<h2>${course.test.title}</h2>`;
  let html = "";
  course.test.questions.forEach((q) => {
    html += `
      <div class="question">
        <p>${q.q}</p>
        ${q.options
          .map(
            (opt, i) =>
              `<label><input type="radio" name="q${q.id}" value="${i}"> ${opt}</label><br>`
          )
          .join("")}
      </div>`;
  });
  html += `<button onclick="checkTest(${course.id})">Отправить</button>`;
  html += `<div id="testResult" style="margin-top:10px;font-weight:bold;"></div>`;
  container.innerHTML += html;
}



  // Показываем пользователю результат
function checkAnswers() {
  let score = 0;
  const form = document.forms['quizForm'];
  const answer = form['q1'].value;
  if (answer === "1") score++;

  document.getElementById("result").innerText =
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




