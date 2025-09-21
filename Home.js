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

function checkTest(courseId) {
  const course = COURSES.find((c) => c.id === courseId);
  let correct = 0;
  course.test.questions.forEach((q) => {
    const selected = document.querySelector(
      `input[name="q${q.id}"]:checked`
    )?.value;
    if (parseInt(selected) === q.answer) correct++;
  });

  // Показываем пользователю результат
  const resultText = `Ты ответил правильно на ${correct} из ${course.test.questions.length}`;
  document.getElementById("testResult").innerText = resultText;

  // Отправляем результат в backend
  fetch("/api/send-test-result", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      course: course.title,
      correct: correct,
      total: course.test.questions.length
    })
  });
}


