const tabs = document.getElementsByClassName('tab');
const tabContents = document.getElementsByClassName('tab-content');

for (let i = 0; i < tabs.length; i++) {
  tabs[i].addEventListener('click', function() {
    for (let j = 0; j < tabs.length; j++) {
      tabs[j].classList.remove('active');
      tabContents[j].classList.remove('active');
    }
    this.classList.add('active');
    tabContents[i].classList.add('active');
  });
};

const addButton = document.getElementById('add-button');

addButton.addEventListener('click', function() {
  if (tabs.length >= 5) {
    return;
  }

  const newTab = document.createElement('div');
  newTab.className = 'tab';
  newTab.innerHTML = 'Tab ' + (tabs.length + 1) + '<button class="cancel-button">x</button>';

  const contentTab = document.createElement("div");
  contentTab.className = "tab-content";
  contentTab.innerHTML = `
  <input type="text" placeholder="Name" />
  <input type="number" placeholder="Age" />
  <select id="dropdown" class="dropdown">
    <option value=""></option> 
    <option value="Male">Male</option> 
    <option value="Female">Female</option>                   
  </select>
  `;

  const mainContainer = document.querySelector(".main-container")
  mainContainer.appendChild(newTab);

  const tabContainer = document.querySelector('.tab-container');
  tabContainer.insertBefore(newTab, addButton);

  const contentContainer = document.querySelector(".content-container");
  contentContainer.appendChild(contentTab)
  
  newTab.addEventListener('click', function() {
    for (let j = 0; j < tabs.length; j++) {
      tabs[j].classList.remove('active');
      tabContents[j].classList.remove("active")
    }
    this.classList.add('active');
    contentTab.classList.add("active");
  
  });
  
  const cancelButton = newTab.querySelector('.cancel-button');
  cancelButton.addEventListener('click', function(event) {
    const tab = this.parentNode;
    tabContainer.removeChild(tab);
    contentTab.remove();
    event.stopPropagation();
  });
});

