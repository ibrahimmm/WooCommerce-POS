!function(){if(jQuery&&jQuery.fn&&jQuery.fn.select2&&jQuery.fn.select2.amd)var e=jQuery.fn.select2.amd;e.define("select2/i18n/lv",[],function(){function e(e,n,t,i){return 11===e?n:e%10==1?t:i}return{inputTooLong:function(n){var t=n.input.length-n.maximum,i="Lūdzu ievadiet par  "+t;return(i+=" simbol"+e(t,"iem","u","iem"))+" mazāk"},inputTooShort:function(n){var t=n.minimum-n.input.length,i="Lūdzu ievadiet vēl "+t;return i+=" simbol"+e(t,"us","u","us")},loadingMore:function(){return"Datu ielāde…"},maximumSelected:function(n){var t="Jūs varat izvēlēties ne vairāk kā "+n.maximum;return t+=" element"+e(n.maximum,"us","u","us")},noResults:function(){return"Sakritību nav"},searching:function(){return"Meklēšana…"}}}),e.define,e.require}(),function(e,n){"object"==typeof exports&&"undefined"!=typeof module&&"function"==typeof require?n(require("../moment")):"function"==typeof define&&define.amd?define(["../moment"],n):n(e.moment)}(this,function(e){"use strict";var n={m:"minūtes_minūtēm_minūte_minūtes".split("_"),mm:"minūtes_minūtēm_minūte_minūtes".split("_"),h:"stundas_stundām_stunda_stundas".split("_"),hh:"stundas_stundām_stunda_stundas".split("_"),d:"dienas_dienām_diena_dienas".split("_"),dd:"dienas_dienām_diena_dienas".split("_"),M:"mēneša_mēnešiem_mēnesis_mēneši".split("_"),MM:"mēneša_mēnešiem_mēnesis_mēneši".split("_"),y:"gada_gadiem_gads_gadi".split("_"),yy:"gada_gadiem_gads_gadi".split("_")};function t(e,n,t){return t?n%10==1&&n%100!=11?e[2]:e[3]:n%10==1&&n%100!=11?e[0]:e[1]}function i(e,i,s){return e+" "+t(n[s],e,i)}function s(e,i,s){return t(n[s],e,i)}return e.defineLocale("lv",{months:"janvāris_februāris_marts_aprīlis_maijs_jūnijs_jūlijs_augusts_septembris_oktobris_novembris_decembris".split("_"),monthsShort:"jan_feb_mar_apr_mai_jūn_jūl_aug_sep_okt_nov_dec".split("_"),weekdays:"svētdiena_pirmdiena_otrdiena_trešdiena_ceturtdiena_piektdiena_sestdiena".split("_"),weekdaysShort:"Sv_P_O_T_C_Pk_S".split("_"),weekdaysMin:"Sv_P_O_T_C_Pk_S".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY.",LL:"YYYY. [gada] D. MMMM",LLL:"YYYY. [gada] D. MMMM, HH:mm",LLLL:"YYYY. [gada] D. MMMM, dddd, HH:mm"},calendar:{sameDay:"[Šodien pulksten] LT",nextDay:"[Rīt pulksten] LT",nextWeek:"dddd [pulksten] LT",lastDay:"[Vakar pulksten] LT",lastWeek:"[Pagājušā] dddd [pulksten] LT",sameElse:"L"},relativeTime:{future:"pēc %s",past:"pirms %s",s:function(e,n){return n?"dažas sekundes":"dažām sekundēm"},m:s,mm:i,h:s,hh:i,d:s,dd:i,M:s,MM:i,y:s,yy:i},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})});