// const autoComplete = {
//   init: () => {
//     console.log('Gokalp');
//   },
//   handlePress: () => {
//     const txtSearch = document.getElementById('txtSearch');
//     const country = txtSearch.value;
//     searchCountry(country);
//   },
//   searchCountry: data => {
//     console.log('data', data);
//   },
// };

function init() {
  document.getElementsByTagName('body')[0].onclick = function(e) {
    const divTextbox = document.getElementsByClassName('div-textbox')[0];
    if (!divTextbox.contains(e.toElement)) {
      const ddl = document.getElementById('ddlCountries');
      ddl.innerHTML = '';
      ddl.style.display = 'none';
    }
  };
}

const countryList = [
  {
    Id: 1,
    Name: 'England',
  },
  {
    Id: 2,
    Name: 'Spain',
  },
  {
    Id: 3,
    Name: 'Germany',
  },
  {
    Id: 4,
    Name: 'Portugal',
  },
  {
    Id: 5,
    Name: 'Austria',
  },
];

function handlePress() {
  const txtSearch = document.getElementById('txtSearch');
  const country = txtSearch.value;
  if (country) {
    this.searchCountry(country);
  } else {
    this.hideDropwdown();
  }
}

function handleClick() {
  const txtSearch = document.getElementById('txtSearch');
  const country = txtSearch.value;
  if (country) {
    this.searchCountry(country);
  } else {
    this.hideDropwdown();
  }
}

function searchCountry(data) {
  const upperData = data.toLowerCase();
  const list = countryList.filter(x =>
    x.Name.toLowerCase().includes(data.toLowerCase())
  );
  if (list.length > 0) {
    this.showDropdown(list);
  } else {
    this.hideDropwdown();
  }
}

function showDropdown(data) {
  const ddl = document.getElementById('ddlCountries');
  let htmlText = '';
  data.forEach(item => {
    htmlText += `<div class='div-Items'><div class='item' onclick='countryClick("${
      item.Name
    }")' value='${item.Id}'>${item.Name}</div></div>`;
  });
  ddl.innerHTML = htmlText;
  ddl.style.display = 'block';
}

function hideDropwdown() {
  const ddl = document.getElementById('ddlCountries');
  ddl.innerHTML = '';
  ddl.style.display = 'none';
}

function countryClick(countryName) {
  const txtSearch = document.getElementById('txtSearch');
  txtSearch.value = countryName;
  this.hideDropwdown();
}
