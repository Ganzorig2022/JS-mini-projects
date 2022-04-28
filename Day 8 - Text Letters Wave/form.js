const labels = document.querySelectorAll(".form-control label");
console.log(labels);

labels.forEach((label) => {
  // 1.label tag dotorh EMAIL gesen vgend dund LOOOP hiine.
  label.innerHTML = label.innerText
    // 2.EMAIL gesen vgiig E-M-A-I-L gej neg negeer ni salgana.
    .split("")
    // 3.Map() function-aar salgaj awsan vsegnvvdeeree array uusgene. Indehdee letter, idx gesen 2 parameter damjuulna. E useg 0 idx dr, M useg 1 idx dr geh met. Utga butsaahda shineer SPAN vvsgej ogow.
    .map(
      function (letter, idx) {
        return `<span style="transition-delay:${idx * 50}ms">${letter}</span>`;
      }
    )
    //   join() function dotor hooson "" zaaj ogohgv bol bvh useg E,M,A,I,L gej haragdana. Join() function- ni ARRAY-n elementvvdiig STRING bolgoj RETURN hiideg.
    .join("");
});
