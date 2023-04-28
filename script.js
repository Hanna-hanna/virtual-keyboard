
var request = new XMLHttpRequest();
request.open('GET', 'keys.json', true);

request.onload = function() {
  if (request.status >= 200 && request.status < 400) {
    var data = JSON.parse(request.responseText)[0];

    var virtualKeyboard = document.createElement('div');
    virtualKeyboard.className = 'virtual-keyboard';
    document.body.appendChild(virtualKeyboard);

    for (var key in data) {
        var rowKey = document.createElement('div');
        rowKey.className = 'key-row';
        virtualKeyboard.appendChild(rowKey);

        data[key].forEach(item => {
            rowKey.innerHTML += `<div class="keyboard--key key_${item.code} ${item.style}" style="width: ${item.width}">
                <span class="ru hidden">
                    <span class="value_ru hidden">${item.value_ru}</span>
                    <span class="value_ru_up hidden">${item.value_ru_up}</span>
                    <span class="caps_value_ru_up hidden">${item.value_ru_up}</span>
                </span>
                <span class="eng">
                    <span class="value_eng_down">${item.value_eng}</span>
                    <span class="value_eng_up hidden">${item.value_eng_up}</span>
                    <span class="caps_value_eng_up hidden">${item.value_eng_up}</span>
                </span>
            </div>`;
        });
    }
  } else {
    console.error('Failed to load JSON data');
  }
};

request.onerror = function() {
  console.error('Failed to load JSON data');
};

request.send();






