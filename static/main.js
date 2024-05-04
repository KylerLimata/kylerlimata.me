class GalleryElement extends HTMLElement {
    static observedAttributes = ["src"];

    constructor() {
        super();
        this.img = document.createElement("img")
    }

    connectedCallback () {
        console.log("Galley added to page!");

        const shadow = this.attachShadow({ mode: 'open' });
        const img = this.img

        shadow.appendChild(img)

        this.json = fetch(this.getAttribute("src"))
            .then(res => res.json())
            .then(val => {
                img.src = val[0].src;
            });
    }
}

customElements.define("image-gallery", GalleryElement)