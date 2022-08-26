{
  /**
   *
   */
  async function loaded(reader) {
    const response = await fetch(
      "https://hf.space/embed/hblings/fastai/+/api/predict",
      {
        method: "POST",
        body: JSON.stringify({ data: [reader.result] }),
        headers: { "Content-Type": "application/json" },
      }
    );
    const json = await response.json();
    const label = json["data"][0]["confidences"][0]["label"];
    const div = document.createElement("div");
    div.innerHTML = `<br /><img src="${reader.result}" width="300px" /> <p>${label}</p>`;
    document.body.append(div);
  }

  /**
   *
   */
  function read(file) {
    const reader = new FileReader();
    reader.addEventListener("load", () => loaded(reader));
    reader.readAsDataURL(file);
  }

  window.addEventListener("load", () => {
    document.getElementById("photos").addEventListener("input", () => {
      [...photos.files].map(read);
    });
  });
}
