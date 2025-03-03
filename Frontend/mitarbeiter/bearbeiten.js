document.addEventListener("DOMContentLoaded", async () => {
  const urlParams = new URLSearchParams(window.location.search);
  const mitarbeiterId = urlParams.get("id");

  if (mitarbeiterId) {
    try {
      const response = await fetch(
        `http://localhost:8000/mitarbeiter/${mitarbeiterId}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      console.log(data);
      // Populate your form or UI with the fetched data
      document.getElementById("name").value = data.name;
      document.getElementById("status").value = data.status;
      document.getElementById("herkunft").value = data.herkunft;
      document.getElementById("kills").value = data.kills;
      document.getElementById("ehre").value = data.ehre;
      document.getElementById("imagePreview").src = data.bild;
    } catch (error) {
      console.error(
        "There has been a problem with your fetch operation:",
        error
      );
    }
  } else {
    console.error("No mitarbeiter ID found in query parameters");
  }

  document
    .getElementById("equipmentForm")
    .addEventListener("submit", async (event) => {
      event.preventDefault();

      if (!mitarbeiterId) {
        console.error("No mitarbeiter ID found in query parameters");
        return;
      }

      const serverObjekt = new FormData();
      serverObjekt.append("id", mitarbeiterId);
      serverObjekt.append("name", document.getElementById("name").value);
      serverObjekt.append("status", document.getElementById("status").value);
      serverObjekt.append(
        "herkunft",
        document.getElementById("herkunft").value
      );
      serverObjekt.append("kills", document.getElementById("kills").value);
      serverObjekt.append("ehre", document.getElementById("ehre").value);
      serverObjekt.append("bild", document.getElementById("image").files[0]);
      try {
        const response = await fetch(
          `http://localhost:8000/mitarbeiter/${mitarbeiterId}/`,
          {
            method: "PUT",
            body: serverObjekt,
          }
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const result = await response.json();
        console.log("Success:", result);
        window.location.href = "./samurai.html";
      } catch (error) {
        console.error(
          "There has been a problem with your fetch operation:",
          error
        );
      }
    });
});
