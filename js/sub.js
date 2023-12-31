window.addEventListener("DOMContentLoaded", () => {
  const API_KEY = `f40fc02dbebc40a3a6c4`;
  let recipe_name = decodeURI(location.href);
  recipe_name = recipe_name.split("?")[1];
  // 정규식 선언
  const menual_reg = /MANUAL[1-20]/; // MANUAL이 있고 그 뒤에 1~20까지 숫자가 있으면
  const menual_img_reg = /MANUAL_IMG/; // MANUAL_IMG가 있으면
  // 배열 선언 (빈 배열)
  let menual_arr = [];
  let menual_img_arr = [];

  async function getData() {
    let url = `http://openapi.foodsafetykorea.go.kr/api/${API_KEY}/COOKRCP01/json/1/1000/RCP_NM=${recipe_name}/`;
    const response = await fetch(url);
    const data = await response.json();
    let recipe_data = data.COOKRCP01.row[0];

    const menu_img = document.querySelector(".menu_img_wrap > img");
    const rcp_nm = document.querySelector(".rcp_nm");
    const rcp_pat = document.querySelector(".rcp_pat");
    const rcp_dtls = document.querySelector(".rcp_dtls");
    const menual_list = document.querySelector(".menual_list");
    const info_wgt = document.querySelector(".info_wgt");
    const info_eng = document.querySelector(".info_eng");
    const info_car = document.querySelector(".info_car");
    const info_pro = document.querySelector(".info_pro");
    const info_fat = document.querySelector(".info_fat");
    const rcp_na_tip = document.querySelector(".rcp_na_tip");
    const rcp_na_tip_wrap = document.querySelector(".rcp_na_tip_wrap");

    menu_img.src = recipe_data.ATT_FILE_NO_MK;
    menu_img.alt = recipe_data.RCP_NM;

    rcp_nm.innerText = recipe_data.RCP_NM;
    rcp_pat.innerText = recipe_data.RCP_PAT2;
    rcp_dtls.innerText = recipe_data.RCP_PARTS_DTLS;
    info_wgt.innerHTML = `<strong>중량</strong><span>${recipe_data.INFO_ENG} g</span>`;
    info_eng.innerHTML = `<strong>열량</strong><span>${recipe_data.INFO_CAR} kcal</span>`;
    info_car.innerHTML = `<strong>탄수화물</strong><span>${recipe_data.INFO_PRO} g</span>`;
    info_pro.innerHTML = `<strong>단백질</strong><span>${recipe_data.INFO_FAT} g</span>`;
    info_fat.innerHTML = `<strong>지방</strong><span>${recipe_data.INFO_NA} g</span>`;
    rcp_na_tip.innerText = recipe_data.RCP_NA_TIP;

    if (recipe_data.RCP_NA_TIP == "") {
      rcp_na_tip_wrap.remove();
    }

    for (key in recipe_data) {
      if (recipe_data[key] != "") {
        if (menual_reg.test(key)) {
          menual_arr.push(recipe_data[key]);
        }
        if (menual_img_reg.test(key)) {
          menual_img_arr.push(recipe_data[key]);
        }
      }
    }
    menual_arr = menual_arr.sort();
    menual_img_arr = menual_img_arr.sort();

    menual_arr.forEach((ele, index) => {
      const menual_li = document.createElement("li");
      const menual_li_txt = document.createElement("p");
      const menual_li_img_wrap = document.createElement("div");
      const menual_li_img = document.createElement("img");

      menual_li_img_wrap.classList.add("menual_li_img_wrap");

      menual_li_img.src = menual_img_arr[index];
      menual_li_txt.innerText = ele;

      menual_list.append(menual_li);
      menual_li.append(menual_li_img_wrap, menual_li_txt);
      menual_li_img_wrap.append(menual_li_img);
    });
  }

  getData();

  const comment_form = document.querySelector(".comment_form");
  const comment_count = document.querySelector(".comment_count");
  const emoticon = document.querySelector(".emoticon");
  const comment = document.querySelector(".comment");
  const comment_list = document.querySelector(".comment_list");

  comment_form.addEventListener("submit", (e) => {
    e.preventDefault();

    const comment_list_li_create = document.createElement("li");

    comment_list_li_create.innerText = `${emoticon.value} ${comment.value}`;

    comment_list.append(comment_list_li_create);

    comment.value = "";

    const comment_list_li = document.querySelectorAll(".comment_list li");

    comment_count.innerText = `댓글 ${comment_list_li.length}`;
  });
});
