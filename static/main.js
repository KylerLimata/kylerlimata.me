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
        const button_container = document.createElement("div");
        const button_left = document.createElement("button");
        const button_right = document.createElement("button");
        const left_arrow = document.createElement("img");
        const right_arrow = document.createElement("img");
        const caption_box = this.caption_box;

        style.textContent = `
            .container {
                position: relative; /* set container to a relative position */
                width: 100%
            }

            img {
                width: 100%;
            }

            .button-container {
                z-index: 2;
                position: absolute; /* set button to an absolute position */
                top: 0;
                left: 0;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                width: 100%;
                height: 100%;
                align-items: center;
            }

            .left-button {
                cursor: pointer; /* change mouse cursor on hover */
            }

            .right-button {
                cursor: pointer; /* change mouse cursor on hover */
            }
        `

        shadow.appendChild(container);
        shadow.appendChild(style);
        container.appendChild(img);
        container.appendChild(button_container)
        button_container.appendChild(button_left);
        button_container.appendChild(button_right);
        shadow.appendChild(caption_box);
        button_left.appendChild(left_arrow);
        button_right.appendChild(right_arrow);

        container.classList = "container"
        button_container.classList = "button-container"
        button_left.classList = "left-button"
        button_right.classList = "right-button"

        img.part = "img";
        button_left.part = "button";
        button_right.part = "button";
        caption_box.part = "caption";
        left_arrow.part = "arrow";
        right_arrow.part = "arrow";

        left_arrow.src = this.getAttribute("left-arrow-src");
        right_arrow.src = this.getAttribute("right-arrow-src");

        button_left.title = "Previous Image";
        button_right.title = "Next Image"

        fetch(this.getAttribute("src"))
            .then(res => res.json())
            .then(val => {
                const data = val[0]
                img.src = data.src;
                img.alt = data.caption;
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