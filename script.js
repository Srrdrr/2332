let counter = 0;

function sendNumber() {
  const input = document.getElementById('numberInput');
  const value = parseInt(input.value);
  if (!isNaN(value)) {
    counter = value;
    document.getElementById('counterValue').textContent = counter;
    document.getElementById('counterBox').style.display = 'flex';
    document.getElementById('colorPicker').style.display = 'block';
  }
}

function increase() {
  counter++;
  document.getElementById('counterValue').textContent = counter;
}

function decrease() {
  counter--;
  document.getElementById('counterValue').textContent = counter;
}

function changeColor() {
  const color = document.getElementById('colorSelect').value;
  document.getElementById('counterValue').style.color = color;
}