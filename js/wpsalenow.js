const themes_envato_free = 'https://www.wpsalenow.com/api/envato/themes/free/';
const themes_envato_sale = 'https://www.wpsalenow.com/api/envato/themes/sale/';

fetch(themes_envato_free)
.then(res => res.json())
.then(wptalk_themes_free_result => {
  if ( wptalk_themes_free_result !== null && wptalk_themes_free_result !== '') {
    let output_themes_free = '';
    for (let t in wptalk_themes_free_result) {
      id = Number(t) + 1;
      if ( t < wptalk_themes_free_result ) {
        // console.log(wptalk_themes_free_result[t]);
        output_themes_free +=
        '<ul><a href="' + wptalk_themes_free_result[t].url + '" target="_blank" class="">' + wptalk_themes_free_result[t].name + '</a></ul>';
      }
    }
    output_themes_free += '<hr>';
    document.getElementById('wpsalenow-themes-free').innerHTML = output_themes_free;
  }
})

fetch(themes_envato_sale)
.then(res => res.json())
.then(wptalk_themes_sale_result => {
  // console.log(wptalk_themes_sale_result);
  if ( wptalk_themes_sale_result !== null && wptalk_themes_sale_result !== '') {
    let output_themes_sale = '';
    for (let t in wptalk_themes_sale_result) {
      id = Number(t) + 1;
      if ( t < wptalk_themes_sale_result ) {
        // console.log(wptalk_themes_sale_result[t]);
        output_themes_sale +=
        '<ul><a href="' + wptalk_themes_sale_result[t].url + '" target="_blank" class="">' + wptalk_themes_sale_result[t].name + '</a></ul>';
      }
    }
    output_themes_sale += '<hr>';
    document.getElementById('wpsalenow-themes-sale').innerHTML = output_themes_sale;
  }
})
