function openFile(data) {
  let url;
  (function () {
    switch (data) {
      case 0:
        return (url =
          "https://skyworth-cloud-image.oss-cn-beijing.aliyuncs.com/LGD2329/manual/23_zh.pdf");
      case 1:
        return (url =
          "https://skyworth-cloud-image.oss-cn-beijing.aliyuncs.com/LGD2329/manual/23_en.pdf");
      case 2:
        return (url =
          "https://skyworth-cloud-image.oss-cn-beijing.aliyuncs.com/LGD2329/manual/23_ko.pdf");
      case 3:
        return (url =
          "https://skyworth-cloud-image.oss-cn-beijing.aliyuncs.com/LGD2329/manual/23_ja.pdf");
      case 4:
        return (url =
          "https://skyworth-cloud-image.oss-cn-beijing.aliyuncs.com/LGD2329/manual/23_ru.pdf");
      case 5:
        return (url =
          "https://skyworth-cloud-image.oss-cn-beijing.aliyuncs.com/LGD2329/manual/29_zh.pdf");
      case 6:
        return (url =
          "https://skyworth-cloud-image.oss-cn-beijing.aliyuncs.com/LGD2329/manual/29_en.pdf");
      case 7:
        return (url =
          "https://skyworth-cloud-image.oss-cn-beijing.aliyuncs.com/LGD2329/manual/29_ko.pdf");
      case 8:
        return (url =
          "https://skyworth-cloud-image.oss-cn-beijing.aliyuncs.com/LGD2329/manual/29_ja.pdf");
      case 9:
        return (url =
          "https://skyworth-cloud-image.oss-cn-beijing.aliyuncs.com/LGD2329/manual/29_ru.pdf");
    }
  })();
  const outFile = document.createElement("a");
  outFile.href = url;
  outFile.target = "_blank";

  outFile.click();
}
