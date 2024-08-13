//  Unsplash Api
const count = 10;
const apiKey = "CpkSuRhQueh_60ueig_2_-DSzC0DDtwkDB6MWLsX7Ec";
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

//  get photos from unsplash api

async function getPhotos() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

// on Load

getPhotos();
