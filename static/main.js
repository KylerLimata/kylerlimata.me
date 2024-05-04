class GalleryElement extends HTMLElement {
    static observedAttributes = ["src"];

    constructor() {
        super();
        this.img = document.createElement("img")
    }

    connectedCallback () {
        console.log("Galley added to page!");

        const shadow = this.attachShadow({ mode: 'open' });
        const style = document.createElement("style");
        const img = this.img

        style.textContent = `
            img {
                width: 100%;
            }
        `

        shadow.appendChild(img)
        shadow.appendChild(style)

        this.json = fetch(this.getAttribute("src"))
            .then(res => res.json())
            .then(val => {
                img.src = val[0].src;
            });
    }
}

customElements.define("image-gallery", GalleryElement)