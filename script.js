
// Parse raw HTML strings
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
