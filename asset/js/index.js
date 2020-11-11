function openFile(data) {
  let url;
  (() => {
    switch (data) {
      case 0:
        return (url = "asset/PDF/汉语.pdf");
      case 1:
        return (url = "");
      case 2:
        return (url = "");
      case 3:
        return (url = "");
      case 4:
        return (url = "");
      case 5:
        return (url = "");
      case 6:
        return (url = "");
      case 7:
        return (url = "");
      case 8:
        return (url = "");
      case 9:
        return (url = "");
    }
  })();
  const outFile = document.createElement("a");
  outFile.href = url;
  outFile.target = "_blank";

  outFile.click();
}
