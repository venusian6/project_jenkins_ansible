const formselect = document.querySelector("#searchform");
formselect.addEventListener("submit", async function (e) {
  e.preventDefault();
  const userinput = formselect.elements.query.value;
  const res = await axios.get(
    `https://api.tvmaze.com/search/shows?q=${userinput}`
  );
  // console.log(res);

  length_of_image(res.data);
  //   rating(res.data);
  formselect.elements.query.value = "";
});

// --------------Individuall function to delete
// const removeimage = () => {
//   let body = document.lastElementChild.lastChild;
//   image_list = body.querySelectorAll("img");
//   for (let x of image_list) {
//     x.remove();
//   }
// };

// const removeHeading = () => {
//   let heading = document.querySelectorAll("h3");
//   for (let x of heading) {
//     x.remove();
//   }
// };

// const removediv = () => {
//   let divs = document.querySelectorAll("div");
//   for (let x of divs) {
//     x.remove();
//   }
// };
// --------------------------------------

// ------------ here we used multiple parameter function-----------
// function remove(...name) {
//   x = document.querySelectorAll(name);
//   for (let y in x) {
//     return y.remove();
//   }
// }

formselect.addEventListener("change", async function remove(...name) {
  x = document.querySelectorAll("div", "img", "h3", "p");
  for (let y of x) {
    y.remove();
  }
});
// ------------------------------------------------------------

// const length_of_image = (showImage) => {
//   for (let images of showImage) {
//     if (images.show.image) {
//       const img = document.createElement("img");
//       img.src = images.show.image.medium;
//       document.body.append(img);
//     }
//   }
// };
// const length_of_image = (showImage) => {
//   for (let images of showImage) {
//     if (images.show.image && images.show.rating.average) {
//       const img = document.createElement("img");
//       const ratings = document.createElement("h3");
//       ratings.innerText = images.show.rating.average;
//       img.src = images.show.image.medium;
//       document.body.append(img);
//       document.body.append(ratings);
//     } else {
//     }
//   }
// };

// some of series dosent hav rating so we need to add not available to that
// we can use if else statement to it

const length_of_image = (showImage) => {
  for (let images of showImage) {
    if (images.show.image) {
      const div = document.createElement("div");
      const img = document.createElement("img");
      const paragraph = document.createElement("p");
      const status = document.createElement("h3");
      // console.log(div, img, paragraph);
      document.body.appendChild(div);
      // paragraph.classList.add("infoparagraph");
      div.classList.add("infocard");
      img.classList.add("infoimage");
      status.classList.add("infoh3");

      img.src = images.show.image.medium;
      paragraph.innerHTML = images.show.summary;
      status.innerText = images.show.status;
      // console.log(paragraph);
      div.appendChild(img);
      div.appendChild(paragraph);

      const ratings = document.createElement("h3");
      ratings.classList.add("infoh3");

      if (images.show.rating.average === null) {
        images.show.rating.average = "Not available";

        div.appendChild(ratings);
        // paragraph.classList.add("infoparagraph");
        // div.appendChild(paragraph);
        // console.log(images.show.rating.average);
      }
      ratings.innerText = images.show.rating.average;
      document.body.append(ratings);
      // ratings.classList.add("infoh3");
      div.appendChild(ratings);
      div.append(status);
    }
  }
};

// var div = document.createElement("div");
// div.style.width = "100px";
// div.style.height = "100px";
// div.style.background = "red";
// div.style.color = "white";
// div.innerHTML = "Hello";

// var element = document.getElementById("div1");
// element.classList.add("otherclass");

// const rating = (show_name) => {
//   for (let name of show_name) {
//     if (name.show.rating.average && name.show.image.medium) {
//       const ratings = document.createElement("h3");
//       ratings.innerText = name.show.rating.average;
//       document.body.append(ratings);
//     }
//   }
// };

// let body = document.lastElementChild.lastChild;
// image_list = body.querySelectorAll("img");
// for (let x of image_list) {
//   x.remove();
// }

// const length_of_image = (showImage) => {
//   for (let images of showImage) {
//     if (images.show.image) {
//       const img = document.createElement("img");
//       img.src = images.show.image.medium;
//       document.body.append(img);
//     }
//   }
// };

const mode_select = document.getElementById("mode");
const h1 = document.querySelector("h1");
console.log(h1);

mode_select.addEventListener("click", function () {
  if (mode_select.innerText === "Dark") {
    mode_select.innerText = "Light";
    h1.style.color = "black";
    mode_select.style.backgroundColor = "white";
    document.body.style.backgroundColor = "white";
    document.body.style.transition = "1s ease-out";
  } else {
    mode_select.innerText = "Dark";
    mode_select.style.backgroundColor = "rgb(207, 28, 28)";
    document.body.style.backgroundColor = "black";
  }
});
