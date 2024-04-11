import { Album } from "./albums.js";

const head = (title: string) => `
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title}</title>
  <style>
  body {
    margin: 0;
    padding: 0;
    font-family: "Helvetica Neue",Helvetica,"Nimbus Sans",Arial,sans-serif;
  }
  #album-list {
      list-style: none;
      padding: 0;
  }
  #album-list li {
      display: flex;
      align-items: center;
      padding: 10px;
      border-bottom: 1px solid #ccc;
      transition: background-color 0.3s ease;
  }
  #album-list li:hover {
      background-image: linear-gradient(to bottom, rgba(50, 50, 50, 1), rgba(154, 154, 190, 1) 50%, rgba(50, 50, 50, 1));
      color: white;
  }
  #album-list li img {
      width: 80px;
      height: 80px;
      margin-right: 20px;
      border-radius: 5px;
      object-fit: cover;
      transition: transform 0.3s ease;
  }
  #album-list li img:hover {
    transform: scale(1.2);
    cursor: pointer;
  }
  #album-list li .details {
      flex: 1;
  }
  #album-list li .details h3 {
      margin: 0;
  }
  #album-list li .details h3:hover {
    text-decoration: underline;
    cursor: pointer;
  }
  #album-list li .details p {
      margin: 5px 0;
  }
  .even {
    background-color: #e0feff;
  }
  .odd {
    background-color: #d3eeff;
  }
  </style>
  <script>
    function navigateToDifferentPage(mid) {
        window.location.href = mid + ".html";
    }
  </script>
</head>`;

const renderAlbums = (albums: Array<Album>) => {
  let html = "";
  let counter = 1;
  for (const album of albums) {
    html += `<li class="${counter%2 === 0 ? "even" : "odd"}">
        <img src="${album.cover_image}" alt="Album Cover" onclick="navigateToDifferentPage(${album.id})">
        <div class="details">
            <h3 onclick="navigateToDifferentPage(${album.id})">${album.name}</h3>
            <p>Artist: ${album.artist}</p>
            <p>Year: ${album.year}</p>
        </div>
    </li>`;
    counter++;
  }
  return html;
};

export const render = (albums: Array<Album>) => {
  return `
<html>
  ${head("Albums List")}
  <body>
    <ul id="album-list">
      ${renderAlbums(albums)}
    </ul>
  </body>
</html>`;
};

export const detailedInfo = (album: Album) => {
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Album Information</title>
    <style>
      @keyframes fadeInOut {
        0%, 100% {
          opacity: 0; /* Fully transparent */
        }
        50% {
          opacity: 0.8; /* Semi-transparent black */
        }
      }
      body {
        font-family: Arial, sans-serif;
        text-align: center;
        background-size: cover;
        background-position: center;
        color: white;
        background-color: black;
        overflow: hidden;
      }
      .main-back {
        position: absolute;
        background-color: rgba(0, 0, 0, 0.5);
        background-image: url('${album.cover_image}');
        animation: fadeInOut 5s ease-in-out infinite;
        width: 100vw;
        height: 100vh;
        z-index: 50;
      }
      .album-info {
        padding-top: 20px;
        z-index: 100;
        position: relative;
        background-color: rgba(0, 0, 0, 0.7);
        width: 100vw;
        height: 100vh;
      }
      .album-info h2 {
        padding-bottom: 10px;
      }
      .album-info img {
        width: 300px;
        height: 300px;
        border-radius: 10px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
      }
      .album-info p {
        padding-top: 10px;
      }
    </style>
  </head>
  <body>
    <div class="main-back"></div>
    <div class="album-info">
      <h2>${album.name}</h2>
      <img src="${album.cover_image}" alt="Album Cover">
      <p>Artist: ${album.artist}</p>
      <p>Release Year: ${album.year}</p>
      <p>Genre: ${album.style.join(", ")}</p>
      <p>Formats: ${album.format.join(", ")}</p>
      <p>Labels: ${album.label.join(", ")}</p>
    </div>
  </body>
  </html>`
}
