export function JSON(data, filename) {
      //Convert JSON to string.
      let json = JSON.stringify(data);

      //Convert JSON string to BLOB.
      json = [json];
      const blob1 = new Blob(json, { type: "text/plain;charset=utf-8" });

      //Check the Browser.
      const isIE = false || !!document.documentMode;
      if (isIE) {
        window.navigator.msSaveBlob(blob1, "Customers.txt");
      } else {
        const url = window.URL || window.webkitURL;
        const link = url.createObjectURL(blob1);
        const a = document.createElement("a");
        a.download = filename;
        a.href = link;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      }
};

export function CSV(data, fileName) {
      const arrData =
        typeof data != "object" ? JSON.parse(data) : data;
      let CSV = "";
      for (let i = 0; i < arrData.length; i++) {
        let row = "";
        for (const index in arrData[i]) {
          if (index !== "associations") {
            const arrValue =
              arrData[i][index] == null ? "" : '="' + arrData[i][index] + '"';
            row += arrValue + ",";
          }
        }
        row.slice(0, row.length - 1);
        CSV += row + "\r\n";
      }
      const uri = "data:application/csv;charset=utf-8," + escape(CSV);
      const link = document.createElement("a");
      link.href = uri;
      link.style = "visibility:hidden";
      link.download = fileName + ".csv";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }