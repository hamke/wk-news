const themes_envato_free = 'https://www.wpsalenow.com/api/envato/themes/free/';
const themes_envato_sale = 'https://www.wpsalenow.com/api/envato/themes/sale/';
const plugins_envato_sale = 'https://www.wpsalenow.com/api/envato/plugins/sale/';
const hosting_api_sale = 'https://www.wpsalenow.com/api/hosting/sale/';

fetch(themes_envato_free)
.then(res => res.json())
.then(wptalk_themes_free_result => {
  // console.log(wptalk_themes_free_result);
  if ( wptalk_themes_free_result !== null && wptalk_themes_free_result !== '') {
    let output_themes_free = '';
    for (let t in wptalk_themes_free_result) {
      id = Number(t) + 1;
      if ( t < wptalk_themes_free_result ) {
        // console.log(wptalk_themes_free_result[t]);
        output_themes_free +=
        '<p><a href="' + wptalk_themes_free_result[t].url + '" target="_blank" class="item-name">' + wptalk_themes_free_result[t].name + '</a> <span class="item-price">( <s>' + wptalk_themes_free_result[t].price + '</s> -> <b>0.00 USD</b> )</span></p>';
      }
    }
    // console.log(output_themes_free);
    if ( output_themes_free !== '' ) {
      document.getElementById('wpsalenow-themes-free').innerHTML = '<h2>◼︎ 워드프레스 테마 실시간 프로모션 (무료)</h2>' + output_themes_free + '<hr>';
    }
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
        '<p><a href="' + wptalk_themes_sale_result[t].url + '" target="_blank" class="item-name">' + wptalk_themes_sale_result[t].name + '</a> <span class="item-price">( <b>' + wptalk_themes_sale_result[t].price_sale + ' USD</b> )</span></p>';
      }
    }
    // console.log(output_themes_sale);
    if ( output_themes_sale !== '' ) {
      document.getElementById('wpsalenow-themes-sale').innerHTML = '<h2>◼︎ 워드프레스 테마 실시간 프로모션 (할인)</h2>' + output_themes_sale + '<hr>';
    }
  }
})

fetch(plugins_envato_sale)
.then(res => res.json())
.then(wptalk_plugins_sale_result => {
  // console.log(wptalk_plugins_sale_result);
  if ( wptalk_plugins_sale_result !== null && wptalk_plugins_sale_result !== '') {
    let output_plugins_sale = '';
    for (let t in wptalk_plugins_sale_result) {
      id = Number(t) + 1;
      if ( t < wptalk_plugins_sale_result ) {
        // console.log(wptalk_plugins_sale_result[t]);
        output_plugins_sale +=
        '<p><a href="' + wptalk_plugins_sale_result[t].url + '" target="_blank" class="item-name">' + wptalk_plugins_sale_result[t].name + '</a> <span class="item-price">( <b>' + wptalk_plugins_sale_result[t].price_sale + ' USD</b> )</span></p>';
      }
    }
    // console.log(output_plugins_sale);
    if ( output_plugins_sale !== '' ) {
      document.getElementById('wpsalenow-plugins-sale').innerHTML = '<h2>◼︎ 워드프레스 플러그인 실시간 프로모션 (할인)</h2>' + output_plugins_sale + '<hr>';
    }
  }
})

fetch(hosting_api_sale)
.then(res => res.json())
.then(wptalk_hosting_sale_result => {
  // console.log(wptalk_hosting_sale_result);
  if ( wptalk_hosting_sale_result !== null && wptalk_hosting_sale_result !== '') {
    let output_hosting_sale = '';
    for (let t in wptalk_hosting_sale_result) {
      id = Number(t) + 1;
      if ( t < wptalk_hosting_sale_result ) {
        // console.log(wptalk_hosting_sale_result[t]);
        output_hosting_sale +=
        '<p><a href="' + wptalk_hosting_sale_result[t].url + '" target="_blank" class="item-name">' + wptalk_hosting_sale_result[t].name + ' - ' + wptalk_hosting_sale_result[t].description + '</a></p>';
      }
    }
    // console.log(output_hosting_sale);
    if ( output_hosting_sale !== '' ) {
      document.getElementById('wpsalenow-hosting-sale').innerHTML = '<h2>◼︎ 워드프레스 호스팅 실시간 프로모션 (할인)</h2>' + output_hosting_sale + '<hr>';
    }
  }
})
