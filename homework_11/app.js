var rootNode = document.getElementById("root");

// Your code goes here

var base = {
  createElement(element, className, content) {
    var element = document.createElement(element);
    if (className) {
      element.setAttribute('class', className);
    }
    if (content) {
      element.textContent = content;
    }
    return element;
  },
  createIcon(iconName) {
    var i = document.createElement('i');
    if (iconName) {
      i.setAttribute('class', 'material-icons');
      i.textContent = iconName;
    }
    return i;
  }
}


var createList = data => {
  var ul = document.createElement('ul');

  for (var i = 0; i < data.length; i++) {
    if (data[i].folder) {
      var li = base.createElement('li', 'folder');
      if (data[i].title) {
        var folderIcon = base.createIcon('folder');
        var folderName = base.createElement('p', 'folder-name', data[i].title);
        folderName.appendChild(folderIcon);
        li.appendChild(folderName);
      }
    } else {
      if (data[i].title) {
        var li = base.createElement('li', 'file', data[i].title);
        var fileIcon = base.createIcon('insert_drive_file');
        li.appendChild(fileIcon);
      }
    }

    if (data[i].children) {
      var childrenUl = createList(data[i].children);
      if (childrenUl) {
        childrenUl.setAttribute('class', 'subfolder');
        li.appendChild(childrenUl);
      }
    } 

    if (data[i].children !== undefined && !data[i].children) {
      var p = document.createElement('p');
      p.textContent = 'Folder is empty';
      p.setAttribute('class', 'empty');
      li.appendChild(p);
    }

    ul.appendChild(li);
  }
  return ul;
}

rootNode.appendChild(createList(structure));

var folderName = document.querySelectorAll('.folder-name');
if (folderName) {
  folderName.forEach(e => {
    e.addEventListener('click', (e) => {
      e.target.parentNode.classList.toggle('open');
      var icon = e.target.querySelector('.material-icons');
      icon.textContent = icon.textContent === 'folder_open' ? icon.textContent = 'folder' : icon.textContent = 'folder_open';
    })
  })
}