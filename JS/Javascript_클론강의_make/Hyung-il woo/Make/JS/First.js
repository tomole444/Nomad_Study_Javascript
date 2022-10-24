function show_name(e) {
  const word = document.getElementById("word");
  const txt = document.getElementById("txt").value;
  const form = document.getElementById("form");
  const code = e.code;

  if (code == "Enter") {
    word.innerHTML = `안녕하세요 ${txt}님`;
    form.remove();
  }
}
