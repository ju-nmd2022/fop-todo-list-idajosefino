function onLoadHandler() {
    const headlineElement = document.querySelector("h1");
    console.log(headlineElement);

    const footerElement = document.getElementById("footer");
    console.log(footerElement);
}

window.addEventListener("load", onLoadHandler);