window.addEventListener("keypress", (e) => {
  document.querySelector("#main").innerHTML = `
        <table border="2px solid black">
            <tr>
                <th>Key</th>
                <th>Keycode</th>
                <th>code</th>
            </tr>
            <tr>
                <td>${e.key === " " ? "Space" : e.key}</td>
                <td>${e.keyCode}</td>
                <td>${e.code}</td>
            </tr>
        </table>
        `;
});
