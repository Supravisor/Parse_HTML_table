
// Parse raw HTML strings
const readHtml = () => {
  document.editor.textbox.value+=`
html_string = """
<table>
  <thead>
    <tr>
      <th>Customer name</th>
    </tr>
  </thead>
</table>
"""
  `;
}
