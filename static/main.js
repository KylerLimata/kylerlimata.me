class GalleryElement extends HTMLElement {
    static observedAttributes = ["src"];

    constructor() {
        super();
        this.img = document.createElement("img")
    }

    connectedCallback () {
        console.log("Galley added to page!")
    }
}

customElements.define("image-gallery", GalleryElement)