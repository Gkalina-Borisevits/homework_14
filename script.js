const countryInfo = document.getElementById("countryInfo");
const countryImage = document.getElementById("countryImage");
const countryText = document.getElementById("countryText");

async function getCountry() {
    const response = await fetch("https://gkalina-borisevits.github.io/country/country.json");
    const country = await response.json();
    console.log(country);
    console.log(countryImage);
    countryImage.src = country.img;
   
    const {nameCountry, location, YearOfConstruction, rulers, residents} = country;
    countryText.textContent = `Name of County: ${nameCountry} Location: ${location}\nYear of construction: ${YearOfConstruction}\n Rulers: ${rulers}\n Residents: ${residents}`;

    countryText.style.whiteSpace = 'pre-line';
    countryText.style.fontFamily = 'Arial, sans-serif';
    countryText.style.fontStyle = 'italic';
   
}
getCountry();
