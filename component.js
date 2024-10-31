class DocProjectCard extends HTMLElement {
  constructor() {
    super();

    // Attach a shadow DOM
    const shadow = this.attachShadow({ mode: "open" });

    // Create the container
    const container = document.createElement("div");
    container.classList.add("container");

    // Create the images
    const img1 = document.createElement("img");
    img1.src = this.getAttribute("img1-src") || "./Group 12.svg";
    img1.alt = this.getAttribute("img1-alt") || "";

    const img2 = document.createElement("img");
    img2.src = this.getAttribute("img2-src") || "./Rectangle 138.png";
    img2.alt = this.getAttribute("img2-alt") || "";
    img2.height = this.getAttribute("img2-height") || "300";

    const img3 = document.createElement("img");
    img3.src = this.getAttribute("img3-src") || "./Group 35.svg";
    img3.alt = this.getAttribute("img3-alt") || "";

    // Append images to the container
    container.appendChild(img1);
    container.appendChild(img2);
    container.appendChild(img3);

    // Apply styles
    const style = document.createElement("style");
    style.textContent = `
        .container {
            position: relative;
            display: inline-block;
        }
  
        img:first-of-type {
            position: absolute;
            inset-inline-start: -2px;
            inset-block-start: 20px;
            transition: all 0.3s ease;
        }
  
        .container:hover img:first-of-type {
            translate: -16px 0;
        }
  
        img:nth-of-type(2) {
            filter: grayscale(1);
            transition: all 1s ease;
        }
  
        .container:hover img:nth-of-type(2) {
            filter: grayscale(0);
        }
  
        img:last-of-type {
            position: absolute;
            inset-inline-end: 20px;
            inset-block-end: 20px;
            transition: all 0.6s ease;
        }
  
        .container:hover img:last-of-type {
            rotate: 360deg;
        }
      `;

    // Attach the elements to the shadow DOM
    shadow.appendChild(style);
    shadow.appendChild(container);
  }
}

// Define the new custom element
customElements.define("doc-project-card", DocProjectCard);
