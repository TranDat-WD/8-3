function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

document.addEventListener("DOMContentLoaded", function () {
  let audio = document.getElementById("background-audio");
  audio.muted = false;
  audio.volume = 0.05;
  const overlay = document.getElementById("overlay");

  const video = document.getElementById("video");
  video.addEventListener("ended", () => {
    overlay.style.transition = "background-color 5s linear";

    video.style.transition = "opacity 0.5s";
    video.style.opacity = 0;

    setTimeout(() => {
      video.src = "assets/videos/Videos-" + getRandomInt(1, 30) + ".mp4";
      video.load();
      video.play();
    }, 750);

    setTimeout(() => {
      video.style.opacity = 1;
    }, 750);
  });

  document.addEventListener("DOMContentLoaded", function () {
    const video = document.getElementById("video");

    if ("IntersectionObserver" in window) {
      let observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          video.load();
          observer.disconnect();
        }
      });
      observer.observe(video);
    } else {
      video.load();
    }
  });

  const lastVisit = localStorage.getItem("visitedToday");
  const today = new Date().toDateString();

  if (lastVisit === today) {
    window.location.href = "quote-expl.html";
  } else {
    localStorage.setItem("visitedToday", today);
  }
});

function showCards() {
  const cardsContainer = document.getElementById("cards-container");
  const card1 = document.getElementById("card-1");
  const card2 = document.getElementById("card-2");
  const card3 = document.getElementById("card-3");
  const cardAll = document.querySelectorAll(".cards-button");

  cardsContainer.style.opacity = 1;
  cardsContainer.style.pointerEvents = "all";
  setTimeout(() => {
    card1.style.opacity = 1;
    card1.style.transform = "translateY(0)";
  }, 1000);
  setTimeout(() => {
    card2.style.opacity = 1;
    card2.style.transform = "translateY(0)";
  }, 2000);
  setTimeout(() => {
    card3.style.opacity = 1;
    card3.style.transform = "translateY(0)";
    cardAll.forEach((card) => {
      card.style.pointerEvents = "all";
    });
  }, 3000);
}

function theOtherTwo(number) {
  switch (number) {
    case 1:
      return [2, 3];
      break;
    case 2:
      return [1, 3];
      break;
    case 3:
      return [1, 2];
      break;
  }
}

function resetCards() {
  const shaman = [
    (HoangHung = {
      name: "Hoàng Hưng",
      avatar: "assets/avatar/HH-Ava.jpg",
      quote:
        "Chúc bạn có một ngày 8/3 tràn đầy năng lượng, ý nghĩa và thật hạnh phúc. Luôn là những bông hoa tươi sáng với nụ cười luôn nở trên môi, đẹp gái nhất cái trường này.",
    }),
    (PhucTrong = {
      name: "Phúc Trọng",
      avatar: "assets/avatar/PT-Ava.jpg",
      quote: "Chúc bạn 8/3 sẽ thật ý nghĩa và trọn vẹn nhất.",
    }),
    (PhuocToa = {
      name: "Phước Tỏa",
      avatar: "assets/avatar/PToa-Ava.jpg",
      quote: "Chúc bạn 8/3 sẽ luôn toả sáng và rực rỡ.",
    }),
    (TrietDat = {
      name: "Triết Đạt",
      avatar: "assets/avatar/TD-Ava.png",
      quote:
        'Chúc "bông hoa" ngày nào cũng xinh đẹp như hôm nay, chúc cho bạn luôn tươi vui như vậy, như lúc đang cười mỉm khi đọc những dòng này vậy🥰.',
    }),
  ];
  localStorage.setItem("shamanID", getRandomInt(0, shaman.length - 1));
  window.location.href = "quote-expl.html";
}

function flipCard(id) {
  if (document.getElementById("card-" + id).classList.contains("flipped")) {
    resetCards();
    return;
  }
  const a = getRandomInt(1, 6);
  localStorage.setItem("Topic", a);
  localStorage.setItem("Quote", getRandomInt(0, 14));
  const otherTwo = theOtherTwo(id);
  switch (a) {
    case 1:
      document.getElementById("card-back-" + id).src =
        "assets/cards/Thiên nga.png";
      break;
    case 2:
      document.getElementById("card-back-" + id).src =
        "assets/cards/Thiên hậu.png";
      break;
    case 3:
      document.getElementById("card-back-" + id).src = "assets/cards/Sư tử.png";
      break;
    case 4:
      document.getElementById("card-back-" + id).src =
        "assets/cards/Đại hùng.png";
      break;
    case 5:
      document.getElementById("card-back-" + id).src =
        "assets/cards/Lạp hộ.png";
      break;
    case 6:
      document.getElementById("card-back-" + id).src =
        "assets/cards/Ma kết.png";
      break;
  }
  document.getElementById("card-" + id).classList.toggle("flipped");

  setTimeout(() => {
    document.getElementById("card-" + otherTwo[0]).style.opacity = 0;
    document.getElementById("card-" + otherTwo[0]).style.pointerEvents = "none";
    document.getElementById("card-" + otherTwo[1]).style.opacity = 0;
    document.getElementById("card-" + otherTwo[1]).style.pointerEvents = "none";
  }, 100);
}
