document.addEventListener("DOMContentLoaded", async () => {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get("id");

  if (productId) {
    try {
      const response = await fetch(
        `http://localhost:8000/product/${productId}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      console.log(data);
      // Populate your form or UI with the fetched data
      document.getElementById("name").value = data.name;
      document.getElementById("zustand").value = data.zustand;
      document.getElementById("preis").value = data.preis;
      document.getElementById("imagePreview").src = data.image;
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

      if (!productId) {
        console.error("No mitarbeiter ID found in query parameters");
        return;
      }

      const serverObjekt = new FormData();
      serverObjekt.append("id", productId);
      serverObjekt.append("name", document.getElementById("name").value);
      serverObjekt.append("zustand", document.getElementById("zustand").value);
      serverObjekt.append(
        "preis",
        document.getElementById("preis").value
      );
      serverObjekt.append("image", document.getElementById("image").files[0]);
      try {
        const response = await fetch(
          `http://localhost:8000/product/${productId}/`,
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
        window.location.href = "./equipment.html";
      } catch (error) {
        console.error(
          "There has been a problem with your fetch operation:",
          error
        );
      }
    });
});
