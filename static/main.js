class GalleryElement extends HTMLElement {
    static observedAttributes = ["src"];

    constructor() {
        super();
        this.img = document.createElement("img");
        this.index = 0;
        this.length = 0;
        this.json = null;
    }

    connectedCallback () {
        console.log("Galley added to page!");

        const gallery = this
        const shadow = this.attachShadow({ mode: 'open' });
        const style = document.createElement("style");
        const img = this.img
        const button_left = document.createElement("button");
        const button_right = document.createElement("button");

        style.textContent = `
            img {
                width: 100%;
            }
        `

        shadow.appendChild(img)
        shadow.appendChild(style)
        shadow.appendChild(button_left)
        shadow.appendChild(button_right)

        fetch(this.getAttribute("src"))
            .then(res => res.json())
            .then(val => {
                img.src = val[0].src;
                gallery.json = val
            });
        
        button_left.addEventListener("click", function() {
            gallery.changeImage(-1);
        })

        button_right.addEventListener("click", function() {
            gallery.changeImage(1);
        })
    }

    changeImage(by) {
        this.index += by;
        const gallery = this;

        if (this.index < 0 ) {
            this.index = this.json.length - 1;
        }
        if (this.index >= this.json.length) {
            this.index = 0;
        }

        this.img.src = this.json[this.index].src

        console.log("Index: ", this.index)
    }
}

customElements.define("image-gallery", GalleryElement)