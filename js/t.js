var t_file = getCookie('t_file');
if (!t_file) t_file = 'cn';
var t = {};
function switchLanguage (file_name, f) {
  loadJS("const/" + file_name + ".js",f);
}

function makeElText () {
  select(".lang", true).map(ele => {
    console.log(ele.children.length)
    if (!ele || ele.children.length < 2) return;
    let el = ele.children[0];
    let textContent = el.textContent.trim();
    let value = t[textContent];
    let el_show = ele.children[1];
    el_show.innerHTML = value;
  })
}

switchLanguage(t_file,makeElText);

select('#switchLanguage').onclick = async () => {
  t_file = t_file == "en" ? "cn" : "en";
  setCookie("t_file", t_file);
  switchLanguage(t_file,makeElText);
};
