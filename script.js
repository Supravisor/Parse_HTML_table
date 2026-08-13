
// Parse raw HTML strings
let header = document.editor.header;

const readHtml = () => {
  document.editor.textbox.value+=`
html_string = """
<table>
  <thead>
    <tr>
      <th>Customer name</th>
      <th>Phone</th> 
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Jane Purdy</td>
      <td>123 456-789</td>
    </tr>
    <tr>
      <td>George Smith</td>
      <td>232 567-358</td>
    </tr>
  </tbody>
</table>
"""
  `;

  let keep = "";

  if (header.value) {
    keep += ", header=0";
  }

  document.editor.textbox.value+="dfs = pd.read_html(html_string" + keep + ")[0]";
}

// Parse HTML tables from the web
let url = document.getElementById("url");

const readHtmlWeb = () => {
  if (url.value === "") {
    return alert("Please enter a url in the 'url' field, in the 'Parse HTML tables from the web' section.");
  } else {
      document.editor.textbox.value+="\nhtml_url = '" + url.value + "'\ndfs = pd.read_html(html_url)[0]";
  }
}

const requests = () => {
  if (url.value === "") {
    return alert("Please enter a url in the 'url' field, in the 'Parse HTML tables from the web' section.");
  } else {
      document.editor.textbox.value+="\nhtml_url = '" + url.value + "'\nr = requests.get(html_url)\ntables = pd.read_html(r.text, header=0)\ndfs = tables[1]";
  }
}

// Data at a glance
const data = (stat) => {
  if (stat === "shape") {
    document.editor.textbox.value+= '\ndf' + '.' + stat;
  } else {
      document.editor.textbox.value+= '\ndf' + '.' + stat + '()';
  }
}

// Data cleaning
let rowStart = document.getElementById("rowStart");

const drop = (arg) => {
  if (rowStart.value === "") {
    return alert("Please enter a row start number in the 'start' field, in the 'Data cleaning' section.");
  } else if (rowEnd.value === "") {
      return alert("Please enter a row end number in the 'end' field, in the 'Data cleaning' section.");
  } else {
      document.editor.textbox.value+="\ndfs." + arg + "([" + rowStart.value + ", " + rowEnd.value + "], inplace=True)";
  }
}
