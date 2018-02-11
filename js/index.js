const countryList = [
  {
    Id: 1,
    Name: 'Albania',
  },
  {
    Id: 2,
    Name: 'Andorra',
  },
  {
    Id: 3,
    Name: 'Armenia',
  },
  {
    Id: 4,
    Name: 'Austria',
  },
  {
    Id: 5,
    Name: 'Azerbaijan',
  },
  {
    Id: 6,
    Name: 'Belarus',
  },
  {
    Id: 7,
    Name: 'Belgium',
  },
  {
    Id: 8,
    Name: 'Bosnia and Herzegovina',
  },
  {
    Id: 9,
    Name: 'Bulgaria',
  },
  {
    Id: 10,
    Name: 'Croatia',
  },
  {
    Id: 11,
    Name: 'Cyprus',
  },
  {
    Id: 12,
    Name: 'Czech Republic',
  },
  {
    Id: 13,
    Name: 'Denmark',
  },
  {
    Id: 14,
    Name: 'Estonia',
  },
  {
    Id: 15,
    Name: 'Finland',
  },
  {
    Id: 16,
    Name: 'France',
  },
  {
    Id: 17,
    Name: 'Georgia',
  },
  {
    Id: 18,
    Name: 'Germany',
  },
  {
    Id: 19,
    Name: 'Greece',
  },
  {
    Id: 20,
    Name: 'Hungary',
  },
  {
    Id: 21,
    Name: 'Iceland',
  },
  {
    Id: 22,
    Name: 'Ireland',
  },
  {
    Id: 23,
    Name: 'Italy',
  },
  {
    Id: 24,
    Name: 'Kazakhstan',
  },
  {
    Id: 25,
    Name: 'Kosovo',
  },
  {
    Id: 26,
    Name: 'Latvia',
  },
  {
    Id: 27,
    Name: 'Liechtenstein',
  },
  {
    Id: 28,
    Name: 'Lithuania',
  },
  {
    Id: 29,
    Name: 'Luxembourg',
  },
  {
    Id: 30,
    Name: 'Macedonia',
  },
  {
    Id: 31,
    Name: 'Malta',
  },
  {
    Id: 32,
    Name: 'Moldova',
  },
  {
    Id: 33,
    Name: 'Monaco',
  },
  {
    Id: 34,
    Name: 'Montenegro',
  },
  {
    Id: 35,
    Name: 'Netherlands',
  },
  {
    Id: 36,
    Name: 'Norway',
  },
  {
    Id: 37,
    Name: 'Poland',
  },
  {
    Id: 38,
    Name: 'Portugal',
  },
  {
    Id: 39,
    Name: 'Romania',
  },
  {
    Id: 40,
    Name: 'Russia',
  },
  {
    Id: 41,
    Name: 'San Marino',
  },
  {
    Id: 42,

    Name: 'Serbia',
  },
  {
    Id: 43,
    Name: 'Slovakia',
  },
  {
    Id: 44,
    Name: 'Slovenia',
  },
  {
    Id: 45,
    Name: 'Spain',
  },
  {
    Id: 46,
    Name: 'Sweden',
  },
  {
    Id: 47,
    Name: 'Switzerland',
  },
  {
    Id: 48,
    Name: 'Turkey',
  },
  {
    Id: 49,
    Name: 'Ukraine',
  },
  {
    Id: 50,
    Name: 'United Kingdom (UK)',
  },
  {
    Id: 51,
    Name: 'Vatican',
  },
];

function init() {
  document.getElementsByTagName('body')[0].onclick = function(e) {
    const divTextbox = document.getElementsByClassName('div-textbox')[0];
    const divBg = document.getElementsByClassName('div-bg')[0];
    if (!divTextbox.contains(e.toElement) || e.toElement == divBg) {
      const ddl = document.getElementById('ddlCountries');
      ddl.innerHTML = '';
      ddl.style.display = 'none';
    }
  };
}

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
    // this.hideDropwdown();
    this.searchCountry('all');
  }
}

function searchCountry(data) {
  console.log('data', data);
  let list = countryList.filter(x =>
    x.Name.toLowerCase().includes(data.toLowerCase())
  );
  if (list.length > 0) {
    this.showDropdown(list);
  } else {
    if (data === 'all') {
      list = countryList;
      this.showDropdown(list);
    } else {
      this.hideDropwdown();
    }
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
