const listItems = document.querySelectorAll('.list-item');
const lists = document.querySelectorAll('.list');


let draggedItem = null;

for (let i = 0; i < listItems.length; i++) {
    const item = listItems[i];

    item.addEventListener('dragstart', function () {
        draggedItem = item;
        setTimeout(function () {
            draggedItem.style.display = 'none';
        }, 0)
    })

    item.addEventListener('dragend', function () {
        setTimeout(function () {
            draggedItem.style.display = 'block';
            draggedItem = null;
        }, 0)

    })

    for (let j = 0; j < lists.length; j++) {
        const list = lists[j];

        list.addEventListener('dragover', function (e) {
            e.preventDefault();
        })
        list.addEventListener('dragenter', function (e) {
            e.preventDefault();
            this.style.backgroundColor = '#e6d1d1';
        })
        list.addEventListener('dragleave', function (e) {
            this.style.backgroundColor = '#f3f3f3';
        })
        list.addEventListener('drop', function (e) {
            e.preventDefault();
            this.append(draggedItem);
            this.style.backgroundColor = '#f3f3f3';
        })

    }
}

