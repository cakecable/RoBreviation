document.body.innerHTML = document.body.innerHTML.replace(/(\d+)([K|M])/g, (match, p1, p2) => {
    let num = parseInt(p1);
    if (p2 === "K") {
        num *= 1000; // Convert K (thousands) to full number
    } else if (p2 === "M") {
        num *= 1000000; // Convert M (millions) to full number
    }
    return num;
});
