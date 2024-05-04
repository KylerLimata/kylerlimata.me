class GalleryElement extends HTMLElement {
    static observedAttributes = ["src"];

    constructor() {
        super();
        this.img = document.createElement("img");
        this.caption_box = document.createElement("div");
        this.index = 0;
    }

    connectedCallback () {
        console.log("Galley added to page!");

        const gallery = this
        const shadow = this.attachShadow({ mode: 'open' });
        const style = document.createElement("style");
        const container = document.createElement("div");
        const img = this.img
        const button_left = document.createElement("button");
        const button_right = document.createElement("button");
        const caption_box = this.caption_box;

        style.textContent = `
            .container {
                position: relative; /* set container to a relative position */
                width: 100%
            }

            img {
                width: 100%;
            }

            .left-button {
                position: absolute; /* set button to an absolute position */
                top: 50%; /* adjust the top position of the button */
                left: 0%; /* adjust the left position of the button */
                transform: translate(0%, -50%); /* center the button */
                z-index: 2; /* set a higher z-index than the image */
                color: #fff; /* set your desired text color */
                cursor: pointer; /* change mouse cursor on hover */
            }

            .right-button {
                position: absolute; /* set button to an absolute position */
                top: 50%; /* adjust the top position of the button */
                left: 100%; /* adjust the left position of the button */
                transform: translate(-100%, -50%); /* center the button */
                z-index: 2; /* set a higher z-index than the image */
                color: #fff; /* set your desired text color */
                cursor: pointer; /* change mouse cursor on hover */
            }
        `

        shadow.appendChild(container);
        container.appendChild(img);
        container.appendChild(style);
        container.appendChild(button_left);
        container.appendChild(button_right);
        shadow.appendChild(caption_box)

        container.classList = "container"
        button_left.classList = "left-button"
        button_left.textContent = "<"
        button_right.textContent = ">"
        button_right.classList = "right-button"

        fetch(this.getAttribute("src"))
            .then(res => res.json())
            .then(val => {
                const data = val[0]
                img.src = data.src;
                caption_box.textContent = data.caption;
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

        if (this.index < 0 ) {
            this.index = this.json.length - 1;
        }
        if (this.index >= this.json.length) {
            this.index = 0;
        }

        const data = this.json[this.index];
        this.img.src = data.src;
        this.caption_box.textContent = data.caption;
    }
}

customElements.define("image-gallery", GalleryElement)