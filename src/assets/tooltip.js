const template = document.createElement("template");
template.innerHTML = `
                <style>
                .tooltip-container {

                }
                .cancel {
                  display: none;
                }
                svg {
                  cursor: pointer;
                }

                .notify-container {
                  position: absolute;
                  z-index: 9;
                  width:100px;
                  background: white;
                  box-shadow: 5px 5px 10px rgba(0,0,0,.1);
                  font-size: 15px;
                  border-radius: 10px;
                  padding: 10px;
                  transform: scale(0);
                  transform-origin: bottom left;
                  transition: transform .5s cubic-bezier(0.860, 0.000, 0.070, 1.000);
                }
                </style>
                <div class="tooltip-container">
                  <svg class="alert" width="24" height="24" viewBox="0 0 24 24"><path d="M12 5.177l8.631 15.823h-17.262l8.631-15.823zm0-4.177l-12 22h24l-12-22zm-1 9h2v6h-2v-6zm1 9.75c-.689 0-1.25-.56-1.25-1.25s.561-1.25 1.25-1.25 1.25.56 1.25 1.25-.561 1.25-1.25 1.25z"/></svg>
                  <svg class="cancel" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.151 17.943l-4.143-4.102-4.117 4.159-1.833-1.833 4.104-4.157-4.162-4.119 1.833-1.833 4.155 4.102 4.106-4.16 1.849 1.849-4.1 4.141 4.157 4.104-1.849 1.849z"/></svg>
                  <div class="notify-container">
                    <slot name="message"/>
                  </div>
                </div>`;

class Tooltip extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  tooltip(expandState) {
    const tooltip = this.shadowRoot.querySelector(".notify-container");
    const alert = this.shadowRoot.querySelector(".alert");
    const cancel = this.shadowRoot.querySelector(".cancel");

    if (expandState === true) {
      tooltip.style.transform = "scale(1)";
      alert.style.display = "none";
      cancel.style.display = "block";
      expandState = false;
    } else {
      tooltip.style.transform = "scale(0)";
      cancel.style.display = "none";
      alert.style.display = "block";
    }
  }

  connectedCallback() {
    this.shadowRoot.querySelector(".alert").addEventListener("click", () => {
      this.tooltip(true);
    });
    this.shadowRoot.querySelector(".cancel").addEventListener("click", () => {
      this.tooltip(false);
    });

    if (this.getAttribute("tip_background")) {
      this.shadowRoot.querySelector(".notify-container").style.background =
        this.getAttribute("tip_background");
    }

    if (this.getAttribute("tip_color")) {
      this.shadowRoot.querySelector(".notify-container").style.color =
        this.getAttribute("tip_color");
    }
  }
}

customElements.define("wc-tooltip", Tooltip);
