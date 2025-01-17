// async function getInfo() {
//   const stopIdInput = document.getElementById('stopId').value;
//   const buses = document.getElementById('buses');
//   const stopName = document.getElementById('stopName');

//   buses.innerHTML = '';
//   stopName.textContent = `Loading`;

//   try {
//     const response = await fetch(
//       `http://localhost:3030/jsonstore/bus/businfo/${stopIdInput}`,
//     );

//     const data = await response.json();
//   } catch (err) {
//     stopName.textContent = `Error`;
//   }
// }

function getInfo2() {
  const stopIdInput = document.getElementById('stopId').value;
  const buses = document.getElementById('buses');
  const stopName = document.getElementById('stopName');

  buses.innerHTML = '';
  stopName.textContent = `Loading`;

  fetch(`http://localhost:3030/jsonstore/bus/businfo/${stopIdInput}`)
    .then((res) => res.json())
    .then((data) => {
      stopName.textContent = data.name;
      

      Object.entries(data.buses).forEach(([busId, time]) => {
        const li = document.createElement('li');
        li.textContent = `Bus ${busId} arrives in ${time} minutes`;
        buses.appendChild(li);
      });
    })
    .catch((err) => {
      stopName.textContent = `Error`;
    });
}
