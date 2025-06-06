jQuery(document).ready(function($){

	Uwa_ajax_url = WooUa.ajaxurl;
	Uwa_last_activity = WooUa.last_timestamp;

	/* Ajax query String */
	Ajax_qry_str = UWA_Ajax_Qry.ajaqry;
	running = false;

	/* Interval refresh page */	
	var refresh_time_interval = '';
	if(uwa_data.refresh_interval){
		refresh_time_interval =  setInterval(function(){
	    	getLiveStatusAuction();
    	}, uwa_data.refresh_interval*1000);
	}

	/* Time Count Down */
	$( ".uwa_auction_product_countdown" ).each(function( index ) {
		var time 	= $(this).data('time');
		var format 	= $(this).data('format');
		if(format == ''){
			format = 'yowdHMS';
		}	
		format = 'DHMS';
		if(uwa_data.hide_compact == 'yes'){
			compact	 = true;
		} else{
			compact	 = false;
		}
		
		if ($(this).hasClass('scheduled')) {			
			var etext = '<div class="auction_started">' + uwa_data.started + '</div>';
		} else {
			var etext = '<div class="auction_over">' + uwa_data.expired + '</div>';
		}
		
		
const arrtimzone={"Pacific\/Midway":"-11:00","Pacific\/Niue":"-11:00","Pacific\/Pago_Pago":"-11:00","America\/Adak":"-10:00","Pacific\/Honolulu":"-10:00","Pacific\/Johnston":"-10:00","Pacific\/Rarotonga":"-10:00","Pacific\/Tahiti":"-10:00","Pacific\/Marquesas":"-09:30","America\/Anchorage":"-09:00","Pacific\/Gambier":"-09:00","America\/Juneau":"-09:00","America\/Nome":"-09:00","America\/Sitka":"-09:00","America\/Yakutat":"-09:00","America\/Dawson":"-08:00","America\/Los_Angeles":"-08:00","America\/Metlakatla":"-08:00","Pacific\/Pitcairn":"-08:00","America\/Santa_Isabel":"-08:00","America\/Tijuana":"-08:00","America\/Vancouver":"-08:00","America\/Whitehorse":"-08:00","America\/Boise":"-07:00","America\/Cambridge_Bay":"-07:00","America\/Chihuahua":"-07:00","America\/Creston":"-07:00","America\/Dawson_Creek":"-07:00","America\/Denver":"-07:00","America\/Edmonton":"-07:00","America\/Hermosillo":"-07:00","America\/Inuvik":"-07:00","America\/Mazatlan":"-07:00","America\/Ojinaga":"-07:00","America\/Phoenix":"-07:00","America\/Shiprock":"-07:00","America\/Yellowknife":"-07:00","America\/Bahia_Banderas":"-06:00","America\/Belize":"-06:00","America\/North_Dakota\/Beulah":"-06:00","America\/Cancun":"-06:00","America\/North_Dakota\/Center":"-06:00","America\/Chicago":"-06:00","America\/Costa_Rica":"-06:00","Pacific\/Easter":"-06:00","America\/El_Salvador":"-06:00","Pacific\/Galapagos":"-06:00","America\/Guatemala":"-06:00","America\/Indiana\/Knox":"-06:00","America\/Managua":"-06:00","America\/Matamoros":"-06:00","America\/Menominee":"-06:00","America\/Merida":"-06:00","America\/Mexico_City":"-06:00","America\/Monterrey":"-06:00","America\/North_Dakota\/New_Salem":"-06:00","America\/Rainy_River":"-06:00","America\/Rankin_Inlet":"-06:00","America\/Regina":"-06:00","America\/Resolute":"-06:00","America\/Swift_Current":"-06:00","America\/Tegucigalpa":"-06:00","America\/Indiana\/Tell_City":"-06:00","America\/Winnipeg":"-06:00","America\/Atikokan":"-05:00","America\/Bogota":"-05:00","America\/Cayman":"-05:00","America\/Detroit":"-05:00","America\/Grand_Turk":"-05:00","America\/Guayaquil":"-05:00","America\/Havana":"-05:00","America\/Indiana\/Indianapolis":"-05:00","America\/Iqaluit":"-05:00","America\/Jamaica":"-05:00","America\/Lima":"-05:00","America\/Kentucky\/Louisville":"-05:00","America\/Indiana\/Marengo":"-05:00","America\/Kentucky\/Monticello":"-05:00","America\/Montreal":"-05:00","America\/Nassau":"-05:00","America\/New_York":"-05:00","America\/Nipigon":"-05:00","America\/Panama":"-05:00","America\/Pangnirtung":"-05:00","America\/Indiana\/Petersburg":"-05:00","America\/Port-au-Prince":"-05:00","America\/Thunder_Bay":"-05:00","America\/Toronto":"-05:00","America\/Indiana\/Vevay":"-05:00","America\/Indiana\/Vincennes":"-05:00","America\/Indiana\/Winamac":"-05:00","America\/Caracas":"-04:30","America\/Anguilla":"-04:00","America\/Antigua":"-04:00","America\/Aruba":"-04:00","America\/Asuncion":"-04:00","America\/Barbados":"-04:00","Atlantic\/Bermuda":"-04:00","America\/Blanc-Sablon":"-04:00","America\/Boa_Vista":"-04:00","America\/Campo_Grande":"-04:00","America\/Cuiaba":"-04:00","America\/Curacao":"-04:00","America\/Dominica":"-04:00","America\/Eirunepe":"-04:00","America\/Glace_Bay":"-04:00","America\/Goose_Bay":"-04:00","America\/Grenada":"-04:00","America\/Guadeloupe":"-04:00","America\/Guyana":"-04:00","America\/Halifax":"-04:00","America\/Kralendijk":"-04:00","America\/La_Paz":"-04:00","America\/Lower_Princes":"-04:00","America\/Manaus":"-04:00","America\/Marigot":"-04:00","America\/Martinique":"-04:00","America\/Moncton":"-04:00","America\/Montserrat":"-04:00","Antarctica\/Palmer":"-04:00","America\/Port_of_Spain":"-04:00","America\/Porto_Velho":"-04:00","America\/Puerto_Rico":"-04:00","America\/Rio_Branco":"-04:00","America\/Santiago":"-04:00","America\/Santo_Domingo":"-04:00","America\/St_Barthelemy":"-04:00","America\/St_Kitts":"-04:00","America\/St_Lucia":"-04:00","America\/St_Thomas":"-04:00","America\/St_Vincent":"-04:00","America\/Thule":"-04:00","America\/Tortola":"-04:00","America\/St_Johns":"-03:30","America\/Araguaina":"-03:00","America\/Bahia":"-03:00","America\/Belem":"-03:00","America\/Argentina\/Buenos_Aires":"-03:00","America\/Argentina\/Catamarca":"-03:00","America\/Cayenne":"-03:00","America\/Argentina\/Cordoba":"-03:00","America\/Fortaleza":"-03:00","America\/Godthab":"-03:00","America\/Argentina\/Jujuy":"-03:00","America\/Argentina\/La_Rioja":"-03:00","America\/Maceio":"-03:00","America\/Argentina\/Mendoza":"-03:00","America\/Miquelon":"-03:00","America\/Montevideo":"-03:00","America\/Paramaribo":"-03:00","America\/Recife":"-03:00","America\/Argentina\/Rio_Gallegos":"-03:00","Antarctica\/Rothera":"-03:00","America\/Argentina\/Salta":"-03:00","America\/Argentina\/San_Juan":"-03:00","America\/Argentina\/San_Luis":"-03:00","America\/Santarem":"-03:00","America\/Sao_Paulo":"-03:00","Atlantic\/Stanley":"-03:00","America\/Argentina\/Tucuman":"-03:00","America\/Argentina\/Ushuaia":"-03:00","America\/Noronha":"-02:00","Atlantic\/South_Georgia":"-02:00","Atlantic\/Azores":"-01:00","Atlantic\/Cape_Verde":"-01:00","America\/Scoresbysund":"-01:00","Africa\/Abidjan":"+00:00","Africa\/Accra":"+00:00","Africa\/Bamako":"+00:00","Africa\/Banjul":"+00:00","Africa\/Bissau":"+00:00","Atlantic\/Canary":"+00:00","Africa\/Casablanca":"+00:00","Africa\/Conakry":"+00:00","Africa\/Dakar":"+00:00","America\/Danmarkshavn":"+00:00","Europe\/Dublin":"+00:00","Africa\/El_Aaiun":"+00:00","Atlantic\/Faroe":"+00:00","Africa\/Freetown":"+00:00","Europe\/Guernsey":"+00:00","Europe\/Isle_of_Man":"+00:00","Europe\/Jersey":"+00:00","Europe\/Lisbon":"+00:00","Africa\/Lome":"+00:00","Europe\/London":"+00:00","Atlantic\/Madeira":"+00:00","Africa\/Monrovia":"+00:00","Africa\/Nouakchott":"+00:00","Africa\/Ouagadougou":"+00:00","Atlantic\/Reykjavik":"+00:00","Africa\/Sao_Tome":"+00:00","Atlantic\/St_Helena":"+00:00","UTC":"+00:00","Africa\/Algiers":"+01:00","Europe\/Amsterdam":"+01:00","Europe\/Andorra":"+01:00","Africa\/Bangui":"+01:00","Europe\/Belgrade":"+01:00","Europe\/Berlin":"+01:00","Europe\/Bratislava":"+01:00","Africa\/Brazzaville":"+01:00","Europe\/Brussels":"+01:00","Europe\/Budapest":"+01:00","Europe\/Busingen":"+01:00","Africa\/Ceuta":"+01:00","Europe\/Copenhagen":"+01:00","Africa\/Douala":"+01:00","Europe\/Gibraltar":"+01:00","Africa\/Kinshasa":"+01:00","Africa\/Lagos":"+01:00","Africa\/Libreville":"+01:00","Europe\/Ljubljana":"+01:00","Arctic\/Longyearbyen":"+01:00","Africa\/Luanda":"+01:00","Europe\/Luxembourg":"+01:00","Europe\/Madrid":"+01:00","Africa\/Malabo":"+01:00","Europe\/Malta":"+01:00","Europe\/Monaco":"+01:00","Africa\/Ndjamena":"+01:00","Africa\/Niamey":"+01:00","Europe\/Oslo":"+01:00","Europe\/Paris":"+01:00","Europe\/Podgorica":"+01:00","Africa\/Porto-Novo":"+01:00","Europe\/Prague":"+01:00","Europe\/Rome":"+01:00","Europe\/San_Marino":"+01:00","Europe\/Sarajevo":"+01:00","Europe\/Skopje":"+01:00","Europe\/Stockholm":"+01:00","Europe\/Tirane":"+01:00","Africa\/Tripoli":"+01:00","Africa\/Tunis":"+01:00","Europe\/Vaduz":"+01:00","Europe\/Vatican":"+01:00","Europe\/Vienna":"+01:00","Europe\/Warsaw":"+01:00","Africa\/Windhoek":"+01:00","Europe\/Zagreb":"+01:00","Europe\/Zurich":"+01:00","Europe\/Athens":"+02:00","Asia\/Beirut":"+02:00","Africa\/Blantyre":"+02:00","Europe\/Bucharest":"+02:00","Africa\/Bujumbura":"+02:00","Africa\/Cairo":"+02:00","Europe\/Chisinau":"+02:00","Asia\/Damascus":"+02:00","Africa\/Gaborone":"+02:00","Asia\/Gaza":"+02:00","Africa\/Harare":"+02:00","Asia\/Hebron":"+02:00","Europe\/Helsinki":"+02:00","Europe\/Istanbul":"+02:00","Asia\/Jerusalem":"+02:00","Africa\/Johannesburg":"+02:00","Europe\/Kiev":"+02:00","Africa\/Kigali":"+02:00","Africa\/Lubumbashi":"+02:00","Africa\/Lusaka":"+02:00","Africa\/Maputo":"+02:00","Europe\/Mariehamn":"+02:00","Africa\/Maseru":"+02:00","Africa\/Mbabane":"+02:00","Asia\/Nicosia":"+02:00","Europe\/Riga":"+02:00","Europe\/Simferopol":"+02:00","Europe\/Sofia":"+02:00","Europe\/Tallinn":"+02:00","Europe\/Uzhgorod":"+02:00","Europe\/Vilnius":"+02:00","Europe\/Zaporozhye":"+02:00","Africa\/Addis_Ababa":"+03:00","Asia\/Aden":"+03:00","Asia\/Amman":"+03:00","Indian\/Antananarivo":"+03:00","Africa\/Asmara":"+03:00","Asia\/Baghdad":"+03:00","Asia\/Bahrain":"+03:00","Indian\/Comoro":"+03:00","Africa\/Dar_es_Salaam":"+03:00","Africa\/Djibouti":"+03:00","Africa\/Juba":"+03:00","Europe\/Kaliningrad":"+03:00","Africa\/Kampala":"+03:00","Africa\/Khartoum":"+03:00","Asia\/Kuwait":"+03:00","Indian\/Mayotte":"+03:00","Europe\/Minsk":"+03:00","Africa\/Mogadishu":"+03:00","Africa\/Nairobi":"+03:00","Asia\/Qatar":"+03:00","Asia\/Riyadh":"+03:00","Antarctica\/Syowa":"+03:00","Asia\/Tehran":"+03:30","Asia\/Baku":"+04:00","Asia\/Dubai":"+04:00","Indian\/Mahe":"+04:00","Indian\/Mauritius":"+04:00","Europe\/Moscow":"+04:00","Asia\/Muscat":"+04:00","Indian\/Reunion":"+04:00","Europe\/Samara":"+04:00","Asia\/Tbilisi":"+04:00","Europe\/Volgograd":"+04:00","Asia\/Yerevan":"+04:00","Asia\/Kabul":"+04:30","Asia\/Aqtau":"+05:00","Asia\/Aqtobe":"+05:00","Asia\/Ashgabat":"+05:00","Asia\/Dushanbe":"+05:00","Asia\/Karachi":"+05:00","Indian\/Kerguelen":"+05:00","Indian\/Maldives":"+05:00","Antarctica\/Mawson":"+05:00","Asia\/Oral":"+05:00","Asia\/Samarkand":"+05:00","Asia\/Tashkent":"+05:00","Asia\/Colombo":"+05:30","Asia\/Kolkata":"+05:30","Asia\/Kathmandu":"+05:45","Asia\/Almaty":"+06:00","Asia\/Bishkek":"+06:00","Indian\/Chagos":"+06:00","Asia\/Dhaka":"+06:00","Asia\/Qyzylorda":"+06:00","Asia\/Thimphu":"+06:00","Antarctica\/Vostok":"+06:00","Asia\/Yekaterinburg":"+06:00","Indian\/Cocos":"+06:30","Asia\/Rangoon":"+06:30","Asia\/Bangkok":"+07:00","Indian\/Christmas":"+07:00","Antarctica\/Davis":"+07:00","Asia\/Ho_Chi_Minh":"+07:00","Asia\/Hovd":"+07:00","Asia\/Jakarta":"+07:00","Asia\/Novokuznetsk":"+07:00","Asia\/Novosibirsk":"+07:00","Asia\/Omsk":"+07:00","Asia\/Phnom_Penh":"+07:00","Asia\/Pontianak":"+07:00","Asia\/Vientiane":"+07:00","Asia\/Brunei":"+08:00","Antarctica\/Casey":"+08:00","Asia\/Choibalsan":"+08:00","Asia\/Chongqing":"+08:00","Asia\/Harbin":"+08:00","Asia\/Hong_Kong":"+08:00","Asia\/Kashgar":"+08:00","Asia\/Krasnoyarsk":"+08:00","Asia\/Kuala_Lumpur":"+08:00","Asia\/Kuching":"+08:00","Asia\/Macau":"+08:00","Asia\/Makassar":"+08:00","Asia\/Manila":"+08:00","Australia\/Perth":"+08:00","Asia\/Shanghai":"+08:00","Asia\/Singapore":"+08:00","Asia\/Taipei":"+08:00","Asia\/Ulaanbaatar":"+08:00","Asia\/Urumqi":"+08:00","Australia\/Eucla":"+08:45","Asia\/Dili":"+09:00","Asia\/Irkutsk":"+09:00","Asia\/Jayapura":"+09:00","Pacific\/Palau":"+09:00","Asia\/Pyongyang":"+09:00","Asia\/Seoul":"+09:00","Asia\/Tokyo":"+09:00","Australia\/Adelaide":"+09:30","Australia\/Broken_Hill":"+09:30","Australia\/Darwin":"+09:30","Australia\/Brisbane":"+10:00","Pacific\/Chuuk":"+10:00","Australia\/Currie":"+10:00","Antarctica\/DumontDUrville":"+10:00","Pacific\/Guam":"+10:00","Australia\/Hobart":"+10:00","Asia\/Khandyga":"+10:00","Australia\/Lindeman":"+10:00","Australia\/Melbourne":"+10:00","Pacific\/Port_Moresby":"+10:00","Pacific\/Saipan":"+10:00","Australia\/Sydney":"+10:00","Asia\/Yakutsk":"+10:00","Australia\/Lord_Howe":"+10:30","Pacific\/Efate":"+11:00","Pacific\/Guadalcanal":"+11:00","Pacific\/Kosrae":"+11:00","Antarctica\/Macquarie":"+11:00","Pacific\/Noumea":"+11:00","Pacific\/Pohnpei":"+11:00","Asia\/Sakhalin":"+11:00","Asia\/Ust-Nera":"+11:00","Asia\/Vladivostok":"+11:00","Pacific\/Norfolk":"+11:30","Asia\/Anadyr":"+12:00","Pacific\/Auckland":"+12:00","Pacific\/Fiji":"+12:00","Pacific\/Funafuti":"+12:00","Asia\/Kamchatka":"+12:00","Pacific\/Kwajalein":"+12:00","Asia\/Magadan":"+12:00","Pacific\/Majuro":"+12:00","Antarctica\/McMurdo":"+12:00","Pacific\/Nauru":"+12:00","Antarctica\/South_Pole":"+12:00","Pacific\/Tarawa":"+12:00","Pacific\/Wake":"+12:00","Pacific\/Wallis":"+12:00","Pacific\/Chatham":"+12:45","Pacific\/Apia":"+13:00","Pacific\/Enderbury":"+13:00","Pacific\/Fakaofo":"+13:00","Pacific\/Tongatapu":"+13:00","Pacific\/Kiritimati":"+14:00"}	;

const  timezonetype=$(this).data("timezonetype");
const itemtimezone=$(this).data("zone");


		time = time.replace(/-/g, "/");
	 
		 
		
		
		var there = new Date(time*1000);
		var there = new Date(time);
		
		var settz='';
		if(timezonetype==1){
			settz=getKeyByValue(arrtimzone,itemtimezone);
		}else{
			settz=$(this).data("zone");
		}
		 
	 
		var here = changeTimezone(there, settz);
 
		var austDay = new Date(time);
		var sinceday = new Date(sinceday);
	 
		$(this).WooUacountdown({
			until:   here,
			/*//until:   austDay,
			//since:   sinceday,*/
			format: format,
			//serverSync: ahead5Mins,
			compact:  compact,
			onExpiry: CheckExpired,
			expiryText: etext
		});
	});

function changeTimezone(date, ianatz) {
 
		  var invdate = new Date(date.toLocaleString('en-US', {
			timeZone: ianatz
		  }));
  
		  var diff = date.getTime() - invdate.getTime();

		
		  return new Date(date.getTime() + diff);

		}
function ahead5Mins() { 
	var server = new Date(servertime); 
    server.setMinutes(server.getMinutes()); 
    return server; 
}

function getKeyByValue(object, value) {
 
   for (var prop in object) { 
		if (object.hasOwnProperty(prop)) { 
			if (object[prop] === value) {
				 
			return prop; 
			}
		} 
	} 
}

	/* Time Count Down for timer shortcode */
	$( ".uwa_auction_product_countdown_2" ).each(function( index ) {
		var time 	= $(this).data('time');
		var format 	= $(this).data('format');
		if(format == ''){
			format = 'DHMS';
		}	
		format = 'DHMS';
		if(uwa_data.hide_compact == 'yes'){
			compact	 = true;
		} else{
			compact	 = false;
		}
		
		if ($(this).hasClass('scheduled')) {			
			var etext = '<div class="auction_started">' + uwa_data.started + '</div>';
		} else {
			var etext = '<div class="auction_over">' + uwa_data.expired + '</div>';
		}
	
				
const arrtimzone={"Pacific\/Midway":"-11:00","Pacific\/Niue":"-11:00","Pacific\/Pago_Pago":"-11:00","America\/Adak":"-10:00","Pacific\/Honolulu":"-10:00","Pacific\/Johnston":"-10:00","Pacific\/Rarotonga":"-10:00","Pacific\/Tahiti":"-10:00","Pacific\/Marquesas":"-09:30","America\/Anchorage":"-09:00","Pacific\/Gambier":"-09:00","America\/Juneau":"-09:00","America\/Nome":"-09:00","America\/Sitka":"-09:00","America\/Yakutat":"-09:00","America\/Dawson":"-08:00","America\/Los_Angeles":"-08:00","America\/Metlakatla":"-08:00","Pacific\/Pitcairn":"-08:00","America\/Santa_Isabel":"-08:00","America\/Tijuana":"-08:00","America\/Vancouver":"-08:00","America\/Whitehorse":"-08:00","America\/Boise":"-07:00","America\/Cambridge_Bay":"-07:00","America\/Chihuahua":"-07:00","America\/Creston":"-07:00","America\/Dawson_Creek":"-07:00","America\/Denver":"-07:00","America\/Edmonton":"-07:00","America\/Hermosillo":"-07:00","America\/Inuvik":"-07:00","America\/Mazatlan":"-07:00","America\/Ojinaga":"-07:00","America\/Phoenix":"-07:00","America\/Shiprock":"-07:00","America\/Yellowknife":"-07:00","America\/Bahia_Banderas":"-06:00","America\/Belize":"-06:00","America\/North_Dakota\/Beulah":"-06:00","America\/Cancun":"-06:00","America\/North_Dakota\/Center":"-06:00","America\/Chicago":"-06:00","America\/Costa_Rica":"-06:00","Pacific\/Easter":"-06:00","America\/El_Salvador":"-06:00","Pacific\/Galapagos":"-06:00","America\/Guatemala":"-06:00","America\/Indiana\/Knox":"-06:00","America\/Managua":"-06:00","America\/Matamoros":"-06:00","America\/Menominee":"-06:00","America\/Merida":"-06:00","America\/Mexico_City":"-06:00","America\/Monterrey":"-06:00","America\/North_Dakota\/New_Salem":"-06:00","America\/Rainy_River":"-06:00","America\/Rankin_Inlet":"-06:00","America\/Regina":"-06:00","America\/Resolute":"-06:00","America\/Swift_Current":"-06:00","America\/Tegucigalpa":"-06:00","America\/Indiana\/Tell_City":"-06:00","America\/Winnipeg":"-06:00","America\/Atikokan":"-05:00","America\/Bogota":"-05:00","America\/Cayman":"-05:00","America\/Detroit":"-05:00","America\/Grand_Turk":"-05:00","America\/Guayaquil":"-05:00","America\/Havana":"-05:00","America\/Indiana\/Indianapolis":"-05:00","America\/Iqaluit":"-05:00","America\/Jamaica":"-05:00","America\/Lima":"-05:00","America\/Kentucky\/Louisville":"-05:00","America\/Indiana\/Marengo":"-05:00","America\/Kentucky\/Monticello":"-05:00","America\/Montreal":"-05:00","America\/Nassau":"-05:00","America\/New_York":"-05:00","America\/Nipigon":"-05:00","America\/Panama":"-05:00","America\/Pangnirtung":"-05:00","America\/Indiana\/Petersburg":"-05:00","America\/Port-au-Prince":"-05:00","America\/Thunder_Bay":"-05:00","America\/Toronto":"-05:00","America\/Indiana\/Vevay":"-05:00","America\/Indiana\/Vincennes":"-05:00","America\/Indiana\/Winamac":"-05:00","America\/Caracas":"-04:30","America\/Anguilla":"-04:00","America\/Antigua":"-04:00","America\/Aruba":"-04:00","America\/Asuncion":"-04:00","America\/Barbados":"-04:00","Atlantic\/Bermuda":"-04:00","America\/Blanc-Sablon":"-04:00","America\/Boa_Vista":"-04:00","America\/Campo_Grande":"-04:00","America\/Cuiaba":"-04:00","America\/Curacao":"-04:00","America\/Dominica":"-04:00","America\/Eirunepe":"-04:00","America\/Glace_Bay":"-04:00","America\/Goose_Bay":"-04:00","America\/Grenada":"-04:00","America\/Guadeloupe":"-04:00","America\/Guyana":"-04:00","America\/Halifax":"-04:00","America\/Kralendijk":"-04:00","America\/La_Paz":"-04:00","America\/Lower_Princes":"-04:00","America\/Manaus":"-04:00","America\/Marigot":"-04:00","America\/Martinique":"-04:00","America\/Moncton":"-04:00","America\/Montserrat":"-04:00","Antarctica\/Palmer":"-04:00","America\/Port_of_Spain":"-04:00","America\/Porto_Velho":"-04:00","America\/Puerto_Rico":"-04:00","America\/Rio_Branco":"-04:00","America\/Santiago":"-04:00","America\/Santo_Domingo":"-04:00","America\/St_Barthelemy":"-04:00","America\/St_Kitts":"-04:00","America\/St_Lucia":"-04:00","America\/St_Thomas":"-04:00","America\/St_Vincent":"-04:00","America\/Thule":"-04:00","America\/Tortola":"-04:00","America\/St_Johns":"-03:30","America\/Araguaina":"-03:00","America\/Bahia":"-03:00","America\/Belem":"-03:00","America\/Argentina\/Buenos_Aires":"-03:00","America\/Argentina\/Catamarca":"-03:00","America\/Cayenne":"-03:00","America\/Argentina\/Cordoba":"-03:00","America\/Fortaleza":"-03:00","America\/Godthab":"-03:00","America\/Argentina\/Jujuy":"-03:00","America\/Argentina\/La_Rioja":"-03:00","America\/Maceio":"-03:00","America\/Argentina\/Mendoza":"-03:00","America\/Miquelon":"-03:00","America\/Montevideo":"-03:00","America\/Paramaribo":"-03:00","America\/Recife":"-03:00","America\/Argentina\/Rio_Gallegos":"-03:00","Antarctica\/Rothera":"-03:00","America\/Argentina\/Salta":"-03:00","America\/Argentina\/San_Juan":"-03:00","America\/Argentina\/San_Luis":"-03:00","America\/Santarem":"-03:00","America\/Sao_Paulo":"-03:00","Atlantic\/Stanley":"-03:00","America\/Argentina\/Tucuman":"-03:00","America\/Argentina\/Ushuaia":"-03:00","America\/Noronha":"-02:00","Atlantic\/South_Georgia":"-02:00","Atlantic\/Azores":"-01:00","Atlantic\/Cape_Verde":"-01:00","America\/Scoresbysund":"-01:00","Africa\/Abidjan":"+00:00","Africa\/Accra":"+00:00","Africa\/Bamako":"+00:00","Africa\/Banjul":"+00:00","Africa\/Bissau":"+00:00","Atlantic\/Canary":"+00:00","Africa\/Casablanca":"+00:00","Africa\/Conakry":"+00:00","Africa\/Dakar":"+00:00","America\/Danmarkshavn":"+00:00","Europe\/Dublin":"+00:00","Africa\/El_Aaiun":"+00:00","Atlantic\/Faroe":"+00:00","Africa\/Freetown":"+00:00","Europe\/Guernsey":"+00:00","Europe\/Isle_of_Man":"+00:00","Europe\/Jersey":"+00:00","Europe\/Lisbon":"+00:00","Africa\/Lome":"+00:00","Europe\/London":"+00:00","Atlantic\/Madeira":"+00:00","Africa\/Monrovia":"+00:00","Africa\/Nouakchott":"+00:00","Africa\/Ouagadougou":"+00:00","Atlantic\/Reykjavik":"+00:00","Africa\/Sao_Tome":"+00:00","Atlantic\/St_Helena":"+00:00","UTC":"+00:00","Africa\/Algiers":"+01:00","Europe\/Amsterdam":"+01:00","Europe\/Andorra":"+01:00","Africa\/Bangui":"+01:00","Europe\/Belgrade":"+01:00","Europe\/Berlin":"+01:00","Europe\/Bratislava":"+01:00","Africa\/Brazzaville":"+01:00","Europe\/Brussels":"+01:00","Europe\/Budapest":"+01:00","Europe\/Busingen":"+01:00","Africa\/Ceuta":"+01:00","Europe\/Copenhagen":"+01:00","Africa\/Douala":"+01:00","Europe\/Gibraltar":"+01:00","Africa\/Kinshasa":"+01:00","Africa\/Lagos":"+01:00","Africa\/Libreville":"+01:00","Europe\/Ljubljana":"+01:00","Arctic\/Longyearbyen":"+01:00","Africa\/Luanda":"+01:00","Europe\/Luxembourg":"+01:00","Europe\/Madrid":"+01:00","Africa\/Malabo":"+01:00","Europe\/Malta":"+01:00","Europe\/Monaco":"+01:00","Africa\/Ndjamena":"+01:00","Africa\/Niamey":"+01:00","Europe\/Oslo":"+01:00","Europe\/Paris":"+01:00","Europe\/Podgorica":"+01:00","Africa\/Porto-Novo":"+01:00","Europe\/Prague":"+01:00","Europe\/Rome":"+01:00","Europe\/San_Marino":"+01:00","Europe\/Sarajevo":"+01:00","Europe\/Skopje":"+01:00","Europe\/Stockholm":"+01:00","Europe\/Tirane":"+01:00","Africa\/Tripoli":"+01:00","Africa\/Tunis":"+01:00","Europe\/Vaduz":"+01:00","Europe\/Vatican":"+01:00","Europe\/Vienna":"+01:00","Europe\/Warsaw":"+01:00","Africa\/Windhoek":"+01:00","Europe\/Zagreb":"+01:00","Europe\/Zurich":"+01:00","Europe\/Athens":"+02:00","Asia\/Beirut":"+02:00","Africa\/Blantyre":"+02:00","Europe\/Bucharest":"+02:00","Africa\/Bujumbura":"+02:00","Africa\/Cairo":"+02:00","Europe\/Chisinau":"+02:00","Asia\/Damascus":"+02:00","Africa\/Gaborone":"+02:00","Asia\/Gaza":"+02:00","Africa\/Harare":"+02:00","Asia\/Hebron":"+02:00","Europe\/Helsinki":"+02:00","Europe\/Istanbul":"+02:00","Asia\/Jerusalem":"+02:00","Africa\/Johannesburg":"+02:00","Europe\/Kiev":"+02:00","Africa\/Kigali":"+02:00","Africa\/Lubumbashi":"+02:00","Africa\/Lusaka":"+02:00","Africa\/Maputo":"+02:00","Europe\/Mariehamn":"+02:00","Africa\/Maseru":"+02:00","Africa\/Mbabane":"+02:00","Asia\/Nicosia":"+02:00","Europe\/Riga":"+02:00","Europe\/Simferopol":"+02:00","Europe\/Sofia":"+02:00","Europe\/Tallinn":"+02:00","Europe\/Uzhgorod":"+02:00","Europe\/Vilnius":"+02:00","Europe\/Zaporozhye":"+02:00","Africa\/Addis_Ababa":"+03:00","Asia\/Aden":"+03:00","Asia\/Amman":"+03:00","Indian\/Antananarivo":"+03:00","Africa\/Asmara":"+03:00","Asia\/Baghdad":"+03:00","Asia\/Bahrain":"+03:00","Indian\/Comoro":"+03:00","Africa\/Dar_es_Salaam":"+03:00","Africa\/Djibouti":"+03:00","Africa\/Juba":"+03:00","Europe\/Kaliningrad":"+03:00","Africa\/Kampala":"+03:00","Africa\/Khartoum":"+03:00","Asia\/Kuwait":"+03:00","Indian\/Mayotte":"+03:00","Europe\/Minsk":"+03:00","Africa\/Mogadishu":"+03:00","Africa\/Nairobi":"+03:00","Asia\/Qatar":"+03:00","Asia\/Riyadh":"+03:00","Antarctica\/Syowa":"+03:00","Asia\/Tehran":"+03:30","Asia\/Baku":"+04:00","Asia\/Dubai":"+04:00","Indian\/Mahe":"+04:00","Indian\/Mauritius":"+04:00","Europe\/Moscow":"+04:00","Asia\/Muscat":"+04:00","Indian\/Reunion":"+04:00","Europe\/Samara":"+04:00","Asia\/Tbilisi":"+04:00","Europe\/Volgograd":"+04:00","Asia\/Yerevan":"+04:00","Asia\/Kabul":"+04:30","Asia\/Aqtau":"+05:00","Asia\/Aqtobe":"+05:00","Asia\/Ashgabat":"+05:00","Asia\/Dushanbe":"+05:00","Asia\/Karachi":"+05:00","Indian\/Kerguelen":"+05:00","Indian\/Maldives":"+05:00","Antarctica\/Mawson":"+05:00","Asia\/Oral":"+05:00","Asia\/Samarkand":"+05:00","Asia\/Tashkent":"+05:00","Asia\/Colombo":"+05:30","Asia\/Kolkata":"+05:30","Asia\/Kathmandu":"+05:45","Asia\/Almaty":"+06:00","Asia\/Bishkek":"+06:00","Indian\/Chagos":"+06:00","Asia\/Dhaka":"+06:00","Asia\/Qyzylorda":"+06:00","Asia\/Thimphu":"+06:00","Antarctica\/Vostok":"+06:00","Asia\/Yekaterinburg":"+06:00","Indian\/Cocos":"+06:30","Asia\/Rangoon":"+06:30","Asia\/Bangkok":"+07:00","Indian\/Christmas":"+07:00","Antarctica\/Davis":"+07:00","Asia\/Ho_Chi_Minh":"+07:00","Asia\/Hovd":"+07:00","Asia\/Jakarta":"+07:00","Asia\/Novokuznetsk":"+07:00","Asia\/Novosibirsk":"+07:00","Asia\/Omsk":"+07:00","Asia\/Phnom_Penh":"+07:00","Asia\/Pontianak":"+07:00","Asia\/Vientiane":"+07:00","Asia\/Brunei":"+08:00","Antarctica\/Casey":"+08:00","Asia\/Choibalsan":"+08:00","Asia\/Chongqing":"+08:00","Asia\/Harbin":"+08:00","Asia\/Hong_Kong":"+08:00","Asia\/Kashgar":"+08:00","Asia\/Krasnoyarsk":"+08:00","Asia\/Kuala_Lumpur":"+08:00","Asia\/Kuching":"+08:00","Asia\/Macau":"+08:00","Asia\/Makassar":"+08:00","Asia\/Manila":"+08:00","Australia\/Perth":"+08:00","Asia\/Shanghai":"+08:00","Asia\/Singapore":"+08:00","Asia\/Taipei":"+08:00","Asia\/Ulaanbaatar":"+08:00","Asia\/Urumqi":"+08:00","Australia\/Eucla":"+08:45","Asia\/Dili":"+09:00","Asia\/Irkutsk":"+09:00","Asia\/Jayapura":"+09:00","Pacific\/Palau":"+09:00","Asia\/Pyongyang":"+09:00","Asia\/Seoul":"+09:00","Asia\/Tokyo":"+09:00","Australia\/Adelaide":"+09:30","Australia\/Broken_Hill":"+09:30","Australia\/Darwin":"+09:30","Australia\/Brisbane":"+10:00","Pacific\/Chuuk":"+10:00","Australia\/Currie":"+10:00","Antarctica\/DumontDUrville":"+10:00","Pacific\/Guam":"+10:00","Australia\/Hobart":"+10:00","Asia\/Khandyga":"+10:00","Australia\/Lindeman":"+10:00","Australia\/Melbourne":"+10:00","Pacific\/Port_Moresby":"+10:00","Pacific\/Saipan":"+10:00","Australia\/Sydney":"+10:00","Asia\/Yakutsk":"+10:00","Australia\/Lord_Howe":"+10:30","Pacific\/Efate":"+11:00","Pacific\/Guadalcanal":"+11:00","Pacific\/Kosrae":"+11:00","Antarctica\/Macquarie":"+11:00","Pacific\/Noumea":"+11:00","Pacific\/Pohnpei":"+11:00","Asia\/Sakhalin":"+11:00","Asia\/Ust-Nera":"+11:00","Asia\/Vladivostok":"+11:00","Pacific\/Norfolk":"+11:30","Asia\/Anadyr":"+12:00","Pacific\/Auckland":"+12:00","Pacific\/Fiji":"+12:00","Pacific\/Funafuti":"+12:00","Asia\/Kamchatka":"+12:00","Pacific\/Kwajalein":"+12:00","Asia\/Magadan":"+12:00","Pacific\/Majuro":"+12:00","Antarctica\/McMurdo":"+12:00","Pacific\/Nauru":"+12:00","Antarctica\/South_Pole":"+12:00","Pacific\/Tarawa":"+12:00","Pacific\/Wake":"+12:00","Pacific\/Wallis":"+12:00","Pacific\/Chatham":"+12:45","Pacific\/Apia":"+13:00","Pacific\/Enderbury":"+13:00","Pacific\/Fakaofo":"+13:00","Pacific\/Tongatapu":"+13:00","Pacific\/Kiritimati":"+14:00"}	;

const  timezonetype=$(this).data("timezonetype");
const itemtimezone=$(this).data("zone");

	 
		
		var there = new Date(time*1000);
		var there = new Date(time);
		
		var settz='';
		if(timezonetype==1){
			settz=getKeyByValue(arrtimzone,itemtimezone);
		}else{
			settz=$(this).data("zone");
		}
		
	 
		var here = changeTimezone(there, settz);
 
		 
	 
		var austDay = new Date(time);
		var sinceday = new Date(sinceday);
	
		$(this).WooUacountdown({
			until:   here,
			format: format,
			serverSync: ahead5Mins,
			compact:  compact,
			onExpiry: CheckExpired,
			expiryText: etext
		});
	});


	$('form.cart').submit(function() {
		clearInterval(refresh_time_interval);
	});


	$( "input[name=wua_bid_value]" ).on('changein', function( event ) {
	 	$(this).addClass('changein');
	});

	$( ".uwa_more_details a" ).on('click', function(e){
		e.preventDefault();
		$('.uwa_more_details_display').slideToggle('fast');
	});

	/* --------------------------------------------------------
	 Add / Remove Watchlist
	----------------------------------------------------------- */

	$( ".uwa-watchlist-action" ).on('click', watchlist);

	function watchlist( event ) {

		var auction_id = jQuery(this).data('auction-id');
		var currentelement  =  $(this);

			jQuery.ajax({
				type : "get",
				url : Uwa_ajax_url,
				data : { post_id : auction_id, 'uwa-ajax' : "watchlist"},
				success: function(response) {
					currentelement.parent().replaceWith(response);
				    $( ".uwa-watchlist-action" ).on('click', watchlist);
				    jQuery( document.body).trigger('uwa-watchlist-action',[response,auction_id] );
				}
	      	});
	}

	/* --------------------------------------------------------
	Send Private Message
	----------------------------------------------------------- */

	$( document ).on( 'click', 'button#uwa_private_send', function() {
		var error = 0;
		var thisObj = $(this);
		var private_msg_form = $('#uwa_private_msg_form');
		
		/* collect the data */           
		var firstnameObj	= private_msg_form.find( '.uwa_pri_name' );
		var firstname 		= firstnameObj.val();
		var emailObj 		= private_msg_form.find( '.uwa_pri_email' );
		var email 			= emailObj.val();
		var messageObj 		= private_msg_form.find( '.uwa_pri_message' );
		var message 		= messageObj.val();
		var product_idObj 		= private_msg_form.find( '.uwa_pri_product_id' );
		var product_id 		= product_idObj.val();

		if( error == 0 ) {

			/* Hide / show for ajax loader */
			thisObj.hide();
			private_msg_form.find( 'img.uwa_private_msg_ajax_loader' ).show();	

			var data = {
						action: 	'send_private_message_process',
						firstname: 		firstname,
						email: 		    email,
						message: 		message,
						product_id: 	product_id,
					}

			$.post( Uwa_ajax_url, data, function(response) {

				var data = $.parseJSON( response );                       

				if( data.status == 0 ) {
					if (data.error_name) {
						private_msg_form.find( '#error_fname' ).html( data.error_name );
					}else {
						private_msg_form.find( '#error_fname' ).html( "" );
					}

					if (data.error_email) {
						private_msg_form.find( '#error_email' ).html( data.error_email );
					}else {
						private_msg_form.find( '#error_email' ).html( "" );
					}

					if (data.error_message) {
						private_msg_form.find( '#error_message' ).html( data.error_message );
					}else {
						private_msg_form.find( '#error_message' ).html( "" );
					}
				} else {
					private_msg_form.find( '#error_message' ).html( "" );
					private_msg_form.find( '#error_fname' ).html( "" );
					private_msg_form.find( '#error_email' ).html( "" );
					private_msg_form.find( '#uwa_private_msg_success' ).html( data.success_message );
				}

				/* Hide / show for ajax loader */

					thisObj.show();
					private_msg_form.find( 'img.uwa_private_msg_ajax_loader' ).hide();
			});
		}

		return false;
	});
	
	/* --------------------------------------------------------
	 Bidding on shop
	----------------------------------------------------------- */

	$( document ).on( 'click', 'button.uwa_quickbid', function() {
     	var auctionid = $(this).attr("dataauctionid");
		$(".uwa_bidding_on_shop_"+auctionid).toggle();
	});

	$( document ).on( 'click', 'button.shopbid', function() {
		var auctionid = $(this).attr("dataauctionid");
		var bid_value = $(".shopbidvalue_"+auctionid).val();
		
		var data = {
					action: 	'uwa_auction_ajax_add_bid',
					product_id: auctionid,
					bid_value: 	bid_value,				
				}

		$.post( Uwa_ajax_url, data, function(response) {	
			var data = $.parseJSON( response );
			if( data.status == 0 ) { 
				alert(data.msg_error);
			}
			else {
				alert(data.msg_success);
			}
		});	
	
    	return false;
	});
	
	// CheckExpired(); /* no need for this */

}); /* end of document ready */

function CheckExpired(){

		var auctionid = jQuery(this).data('auction-id');
		var uwa_container = jQuery(this).parent().next('.uwa_auction_product_ajax_change'); 
		uwa_container.empty().prepend('<div class="ajax-loading"></div>');
		uwa_container.parent().children('form.buy-now').remove();
		var scheduled = jQuery(this).hasClass('scheduled') ? 'true' : 'false';
		var ajaxurl = Ajax_qry_str+'=expired_auction';

		request =  jQuery.ajax({
			type: "post",
			url: ajaxurl,
			cache: false,
			data: {
				action: "expired_auction",
				post_id: auctionid,
				ret: uwa_container.length,
				scheduled: scheduled,				
			},
			success: function(response) {
				console.log("clock js ");
     			if (response.length  != 0){ 
					console.log("clock js 1");
					uwa_container.children('.ajax-loading').remove();
     				uwa_container.prepend(response);  
					if(uwa_data.reload_page == "yes"){
						location.reload();
					}          				
     			}
	        }
	    });

} /* end of function - checkexpired */


function getLiveStatusAuction() {
	
	if(jQuery('.woo-ua-auction-price').length<1){
        return;
    }

	if (running == true){
    	return;
    }

	running = true;
	var ajaxurl = Ajax_qry_str+'=get_live_stutus_auction'; 
	jQuery.ajax({
		type : "post",
		encoding:"UTF-8",
		url : ajaxurl,
		dataType: 'json',
		data : {action: "get_live_stutus_auction", "last_timestamp" : Uwa_last_activity},
		success: function(response)	{			
			
			if(response != null ) {

					//alert(JSON.stringify(response));

				if (typeof response.last_timestamp != 'undefined') {
					Uwa_last_activity = response.last_timestamp;
				}

				jQuery.each( response, function( key, value ) {
					
					if( key  >  0 ){	/* loop is for auctions only so here key must be auctionid */
						
						
						/* ---- solution 1 ------ */
						/* e.g. format is "product-293"  */
						//var auction_div_id = jQuery("div.product-type-auction").attr("id");
						//var stringtochk = "product-"+key;
						//if(stringtochk == auction_div_id)
						
						/* ---- solution 2 ------ */						
						/* e.g. format is "293"  */
						//var get_auction_id = jQuery("div#auction-product-type").attr("data-auction-id");
						//var stringtochk = key;										
						//if(stringtochk == get_auction_id)
						
						/* ---- solution 3 ------ */  /* here using this solution  */						
						/* e.g. get class -- returns true/false  <body class='post-293'> */						
						//var testclass = jQuery("body").hasClass( "postid-"+key );
						//if(testclass == true)
							
											
						var testclass = jQuery("body").hasClass( "postid-"+key );

							/* auction price */
							var price_len = jQuery("body").find(".woo-ua-auction-price[data-auction-id='" + key + "']").length;
								
							if(price_len > 0){
								if (typeof value.wua_curent_bid != 'undefined') {
									auction = jQuery("body").find(".woo-ua-auction-price[data-auction-id='" + key + "']");
									auction.replaceWith(value.wua_curent_bid);
								}
							}

							/* wining and losing text -- all site pages */	
							/* text over image  and text above timer */

							if (typeof value.wua_uwa_imgtext != 'undefined' && typeof value.wua_uwa_detailtext != 'undefined') {
								if (value.wua_loggedin_userid > 0 ) {	

									var login_userid  = jQuery("span.uwa_imgtext").attr("data-user_id");
									if(value.wua_loggedin_userid == login_userid){
										jQuery("span.uwa_imgtext[data-auction_id='"+key+"']" ).html(value.wua_uwa_imgtext);
										jQuery("p.uwa_detailtext[data-auction_id='"+key+"']" ).html(value.wua_uwa_detailtext);
									}
								}
							}

							/* display winning information */
							
							if (typeof value.wua_winuser != 'undefined' ) {					

								jQuery("div.winner-name[data-auction_id='"+key+"']" ).html(value.wua_winuser);
							}	

							/* countdown timer */	
							
							if (typeof value.wua_timer != 'undefined') {
								var curenttimer = jQuery("div.uwa_auction_product_countdown[data-auction-id='" + key + "']");
																				
									var auction_oldtime = curenttimer.attr('data-time');
									var auction_newtime = value.wua_timer;
																							
									if(auction_oldtime != auction_newtime){
										
										//alert("old time is " + auction_oldtime +  "new time is" + auction_newtime);
										
											/* set newtime */
										curenttimer.attr('data-time', auction_newtime );																					
										
											/* change time in timer */
										var time1 = auction_newtime;
										curenttimer.WooUacountdown('destroy');
										curenttimer.WooUacountdown({
											format: 'DHMS',
											onExpiry: CheckExpired,
											/*expiryText: etext,*/
											until: jQuery.WooUacountdown.UTCDate(-(new Date().getTimezoneOffset()), new Date(time1*1000))});
									}
							}	


						if(testclass == true){
																			

									if (typeof value.wua_current_bider != 'undefined' ) {
										var currentuser = jQuery("input[name=user_id]");
										var mainauction = jQuery("input[name=uwa-place-bid]").val();
										if (currentuser.length){
											if(value.wua_current_bider != currentuser.val() && mainauction == key ) {
												if(value.wua_auctionproxy == 'yes'){
	
												 	if (jQuery('.woocommerce-error').length > 0) {
														jQuery('.woocommerce-message').hide();
														jQuery('.woocommerce-error').replaceWith(uwa_data.outbid_message );
													} else{
														jQuery('.woocommerce-message').replaceWith(uwa_data.outbid_message);
													}

												} else {
													
													jQuery('.woocommerce-message').replaceWith(uwa_data.outbid_message);
												}
											}
										}
										if(jQuery( "span.uwa_winning[data-auction_id='"+key+"']" ).attr('data-user_id') != value.wua_current_bider){
											jQuery( "span.uwa_winning[data-auction_id='"+key+"']" ).remove()
										}
									}
									
									if (typeof value.wua_bid_value != 'undefined' ) {
										if(!jQuery( "input[name=uwa_bid_value][data-auction-id='"+key+"']" ).hasClass('wuachangedin')){
											/* jQuery( "input[name=uwa_bid_value][data-auction-id='"+key+"']" ).val(value.wua_bid_value).removeClass('wuachangedin'); */
										}

										jQuery( "input[name=quick_uwa_bid_value][data-auction-id='"+key+"']" ).val(value.wua_bid_value);
										console.log(value.wua_bid_value);	
										
										/* set direct bid value in textbox */
										if(value.wua_auctiontype == 'reverse'){
											jQuery("input[id=uwa_bid_value_direct][data-auction-id='"+key+"']" ).val(value.wua_bid_value);
										}				
									}

									if (typeof value.wua_bid_value_inc != 'undefined' ) {									

										jQuery( ".uwa_inc_price_ajax_"+key ).html(value.wua_bid_value_inc + " )");			

									}			
									
									if (typeof value.wua_next_bids != 'undefined' ) {									

										/* next bids drop down */
										jQuery( "select[id=uwa_bid_value_direct][data-auction-id='"+key+"']" ).html(value.wua_next_bids);
									}
									
									if (typeof value.wua_reserve != 'undefined' ) {					

										jQuery( ".checkreserve" ).html("<p>" + value.wua_reserve + "</p>");
									}		
									

									if (typeof value.add_to_cart_text != 'undefined' ) {

										jQuery( "a.button.product_type_auction[data-product_id='"+key+"']" ).text(value.add_to_cart_text);

									}
									
									if (typeof value.wua_activity != 'undefined' ) {

										/*jQuery("#auction-history-table-" + key +" tbody > tr:first" ).before(value.wua_activity);*/
										/*jQuery("div.uwa_bids_history_data[data-auction-id='"+key+"']").html(value.wua_activity + "--by instant");*/
										jQuery("div[class=uwa_bids_history_data][data-auction-id='"+key+"']").html("");
										//jQuery("div[class=uwa_bids_history_data][data-auction-id='"+key+"']").html(value.wua_activity);
										//jQuery("div[class=uwa_bids_history_data][data-auction-id='"+key+"']").html(value.wua_activity + "--by instant");
										jQuery("div[class=uwa_bids_history_data][data-auction-id='"+key+"']").html(value.wua_activity);
										
									}
						
													
							
						} /* end of if - string to check */
						
					} /* end of if - key > 0  */
					
				});	
			}
	        running = false;
		},

		error: function() {
			running = false;
		}

	});	 



} /* end of function - getLiveStatusAuction */