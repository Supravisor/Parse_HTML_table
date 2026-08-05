
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
    </tr>
  </tbody>
</table>
"""
  `;
}
