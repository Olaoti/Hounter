class myHeader extends HTMLElement {
  connectedCallback() {
    alert("3h");

    this.innerHTML = `  
    <header>
     <h1>Just trying this out hope it works </h1>
        <p>Hey let it work o</p>
    </header>
    `;
  }
}
customElements.define("app-Navbar", myHeader);
