// console.log('Project 5');

const insert = document.querySelector('#insert');

window.addEventListener('keydown', (e) => {
  insert.innerHTML = `<div>
  <table>
    <tr>
      <th>Key</th>
      <th>KeyCode</th>
      <th>Code</th>
    </tr>
    <tr>
      <th>${e.key === ' ' ? 'Space' : e.key}</th>
      <th>${e.keyCode}</th>
      <th>${e.code}</th>
    </tr>
  </table>  
  </div>`;
});
