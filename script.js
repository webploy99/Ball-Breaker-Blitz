
// ======== get URL ========
function appUrl() {
    location.href =
      "https://apps.apple.com/vn/app/ball-breaker-blitz/id6479282793";
}


// ======== get Icon ========
appIcon = {
  icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/3e/72/b8/3e72b8b6-ded2-74a4-406b-b04a38c50f3b/AppIcon-0-0-1x_U007emarketing-0-7-0-0-85-220.png/246x0w.webp",
};

var iconInfo = appIcon;
document.getElementById('iconLarge').src = iconInfo.icon;
document.getElementById('iconSmall').src = iconInfo.icon;



// ======== get images URL ========
imageUrl = {
  image1: "https://vn-appstore.com/id010597666/images/photo1.png",
  image2: "https://vn-appstore.com/id010597666/images/photo2.png",
  image3: "https://vn-appstore.com/id010597666/images/photo3.png",
  image4: "https://vn-appstore.com/id010597666/images/photo4.png",
  image5: "https://vn-appstore.com/id010597666/images/photo5.png",

  appImg1:
    "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/aa/3c/ee/aa3ceed2-af02-7e01-9502-b2b7651f0ea0/898567d1-29ec-441c-9c8f-8b52059fce0d_b-heng_11.jpg/434x0w.webp",
  appImg2:
    "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/a0/49/6b/a0496b36-6b92-995d-4b56-8d5c642bcca2/da560376-3d90-4b36-9a3e-19de8eb5e42b_b-heng_12.jpg/434x0w.webp",
  appImg3:
    "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/c9/83/3a/c9833a6c-6952-13a7-a542-dd3165276bef/b71f0da8-a8af-4796-ae92-ab4e0804a167_b-heng_13.jpg/434x0w.webp",
};

var getImg = imageUrl;
document.getElementById('img1').src = getImg.image1
document.getElementById('img2').src = getImg.image2
document.getElementById('img3').src = getImg.image3
document.getElementById('img4').src = getImg.image4
document.getElementById('img5').src = getImg.image5

document.getElementById('pic1').src = getImg.appImg1
document.getElementById('pic2').src = getImg.appImg2
document.getElementById('pic3').src = getImg.appImg3

