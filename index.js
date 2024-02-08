const timezones = [
    { cityID: "abidjan", momentID: "Africa/Abidjan" },
    { cityID: "accra", momentID: "Africa/Accra" },
    { cityID: "addis_ababa", momentID: "Africa/Addis_Ababa" },
    { cityID: "algiers", momentID: "Africa/Algiers" },
    { cityID: "asmara", momentID: "Africa/Asmara" },
    { cityID: "asmera", momentID: "Africa/Asmera" },
    { cityID: "bamako", momentID: "Africa/Bamako" },
    { cityID: "bangui", momentID: "Africa/Bangui" },
    { cityID: "banjul", momentID: "Africa/Banjul" },
    { cityID: "bissau", momentID: "Africa/Bissau" },
    { cityID: "blantyre", momentID: "Africa/Blantyre" },
    { cityID: "brazzaville", momentID: "Africa/Brazzaville" },
    { cityID: "bujumbura", momentID: "Africa/Bujumbura" },
    { cityID: "cairo", momentID: "Africa/Cairo" },
    { cityID: "casablanca", momentID: "Africa/Casablanca" },
    { cityID: "ceuta", momentID: "Africa/Ceuta" },
    { cityID: "conakry", momentID: "Africa/Conakry" },
    { cityID: "dakar", momentID: "Africa/Dakar" },
    { cityID: "dar_es_salaam", momentID: "Africa/Dar_es_Salaam" },
    { cityID: "djibouti", momentID: "Africa/Djibouti" },
    { cityID: "douala", momentID: "Africa/Douala" },
    { cityID: "el_aaiun", momentID: "Africa/El_Aaiun" },
    { cityID: "freetown", momentID: "Africa/Freetown" },
    { cityID: "gaborone", momentID: "Africa/Gaborone" },
    { cityID: "harare", momentID: "Africa/Harare" },
    { cityID: "johannesburg", momentID: "Africa/Johannesburg" },
    { cityID: "juba", momentID: "Africa/Juba" },
    { cityID: "kampala", momentID: "Africa/Kampala" },
    { cityID: "khartoum", momentID: "Africa/Khartoum" },
    { cityID: "kigali", momentID: "Africa/Kigali" },
    { cityID: "kinshasa", momentID: "Africa/Kinshasa" },
    { cityID: "lagos", momentID: "Africa/Lagos" },
    { cityID: "libreville", momentID: "Africa/Libreville" },
    { cityID: "lome", momentID: "Africa/Lome" },
    { cityID: "luanda", momentID: "Africa/Luanda" },
    { cityID: "lubumbashi", momentID: "Africa/Lubumbashi" },
    { cityID: "lusaka", momentID: "Africa/Lusaka" },
    { cityID: "malabo", momentID: "Africa/Malabo" },
    { cityID: "maputo", momentID: "Africa/Maputo" },
    { cityID: "maseru", momentID: "Africa/Maseru" },
    { cityID: "mbabane", momentID: "Africa/Mbabane" },
    { cityID: "mogadishu", momentID: "Africa/Mogadishu" },
    { cityID: "monrovia", momentID: "Africa/Monrovia" },
    { cityID: "nairobi", momentID: "Africa/Nairobi" },
    { cityID: "ndjamena", momentID: "Africa/Ndjamena" },
    { cityID: "niamey", momentID: "Africa/Niamey" },
    { cityID: "nouakchott", momentID: "Africa/Nouakchott" },
    { cityID: "ouagadougou", momentID: "Africa/Ouagadougou" },
    { cityID: "porto_novo", momentID: "Africa/Porto-Novo" },
    { cityID: "sao_tome", momentID: "Africa/Sao_Tome" },
    { cityID: "timbuktu", momentID: "Africa/Timbuktu" },
    { cityID: "tripoli", momentID: "Africa/Tripoli" },
    { cityID: "tunis", momentID: "Africa/Tunis" },
    { cityID: "windhoek", momentID: "Africa/Windhoek" },
    { cityID: "adak", momentID: "America/Adak" },
    { cityID: "anchorage", momentID: "America/Anchorage" },
    { cityID: "anguilla", momentID: "America/Anguilla" },
    { cityID: "antigua", momentID: "America/Antigua" },
    { cityID: "araguaina", momentID: "America/Araguaina" },
    { cityID: "buenos_aires", momentID: "America/Argentina/Buenos_Aires" },
    { cityID: "catamarca", momentID: "America/Argentina/Catamarca" },
    { cityID: "comodrivadavia", momentID: "America/Argentina/ComodRivadavia" },
    { cityID: "cordoba", momentID: "America/Argentina/Cordoba" },
    { cityID: "jujuy", momentID: "America/Argentina/Jujuy" },
    { cityID: "la_rioja", momentID: "America/Argentina/La_Rioja" },
    { cityID: "mendoza", momentID: "America/Argentina/Mendoza" },
    { cityID: "rio_gallegos", momentID: "America/Argentina/Rio_Gallegos" },
    { cityID: "salta", momentID: "America/Argentina/Salta" },
    { cityID: "san_juan", momentID: "America/Argentina/San_Juan" },
    { cityID: "san_luis", momentID: "America/Argentina/San_Luis" },
    { cityID: "tucuman", momentID: "America/Argentina/Tucuman" },
    { cityID: "ushuaia", momentID: "America/Argentina/Ushuaia" },
    { cityID: "aruba", momentID: "America/Aruba" },
    { cityID: "asuncion", momentID: "America/Asuncion" },
    { cityID: "atikokan", momentID: "America/Atikokan" },
    { cityID: "atka", momentID: "America/Atka" },
    { cityID: "bahia", momentID: "America/Bahia" },
    { cityID: "bahia_banderas", momentID: "America/Bahia_Banderas" },
    { cityID: "barbados", momentID: "America/Barbados" },
    { cityID: "belem", momentID: "America/Belem" },
    { cityID: "belize", momentID: "America/Belize" },
    { cityID: "blanc_sablon", momentID: "America/Blanc-Sablon" },
    { cityID: "boa_vista", momentID: "America/Boa_Vista" },
    { cityID: "bogota", momentID: "America/Bogota" },
    { cityID: "boise", momentID: "America/Boise" },
    { cityID: "buenos_aires2", momentID: "America/Buenos_Aires" },
    { cityID: "cambridge_bay", momentID: "America/Cambridge_Bay" },
    { cityID: "campo_grande", momentID: "America/Campo_Grande" },
    { cityID: "cancun", momentID: "America/Cancun" },
    { cityID: "caracas", momentID: "America/Caracas" },
    { cityID: "catamarca2", momentID: "America/Catamarca" },
    { cityID: "cayenne", momentID: "America/Cayenne" },
    { cityID: "cayman", momentID: "America/Cayman" },
    { cityID: "chicago", momentID: "America/Chicago" },
    { cityID: "chihuahua", momentID: "America/Chihuahua" },
    { cityID: "coral_harbour", momentID: "America/Coral_Harbour" },
    { cityID: "cordoba2", momentID: "America/Cordoba" },
    { cityID: "costa_rica", momentID: "America/Costa_Rica" },
    { cityID: "creston", momentID: "America/Creston" },
    { cityID: "cuiaba", momentID: "America/Cuiaba" },
    { cityID: "curacao", momentID: "America/Curacao" },
    { cityID: "danmarkshavn", momentID: "America/Danmarkshavn" },
    { cityID: "dawson", momentID: "America/Dawson" },
    { cityID: "dawson_creek", momentID: "America/Dawson_Creek" },
    { cityID: "denver", momentID: "America/Denver" },
    { cityID: "detroit", momentID: "America/Detroit" },
    { cityID: "dominica", momentID: "America/Dominica" },
    { cityID: "edmonton", momentID: "America/Edmonton" },
    { cityID: "eirunepe", momentID: "America/Eirunepe" },
    { cityID: "el_salvador", momentID: "America/El_Salvador" },
    { cityID: "ensenada", momentID: "America/Ensenada" },
    { cityID: "fort_nelson", momentID: "America/Fort_Nelson" },
    { cityID: "fort_wayne", momentID: "America/Fort_Wayne" },
    { cityID: "fortaleza", momentID: "America/Fortaleza" },
    { cityID: "glace_bay", momentID: "America/Glace_Bay" },
    { cityID: "godthab", momentID: "America/Godthab" },
    { cityID: "goose_bay", momentID: "America/Goose_Bay" },
    { cityID: "grand_turk", momentID: "America/Grand_Turk" },
    { cityID: "grenada", momentID: "America/Grenada" },
    { cityID: "guadeloupe", momentID: "America/Guadeloupe" },
    { cityID: "guatemala", momentID: "America/Guatemala" },
    { cityID: "guayaquil", momentID: "America/Guayaquil" },
    { cityID: "guyana", momentID: "America/Guyana" },
    { cityID: "halifax", momentID: "America/Halifax" },
    { cityID: "havana", momentID: "America/Havana" },
    { cityID: "hermosillo", momentID: "America/Hermosillo" },
    { cityID: "indianapolis", momentID: "America/Indiana/Indianapolis" },
    { cityID: "knox", momentID: "America/Indiana/Knox" },
    { cityID: "marengo", momentID: "America/Indiana/Marengo" },
    { cityID: "petersburg", momentID: "America/Indiana/Petersburg" },
    { cityID: "tell_city", momentID: "America/Indiana/Tell_City" },
    { cityID: "vevay", momentID: "America/Indiana/Vevay" },
    { cityID: "vincennes", momentID: "America/Indiana/Vincennes" },
    { cityID: "winamac", momentID: "America/Indiana/Winamac" },
    { cityID: "inuvik", momentID: "America/Inuvik" },
    { cityID: "iqaluit", momentID: "America/Iqaluit" },
    { cityID: "jamaica", momentID: "America/Jamaica" },
    { cityID: "jujuy", momentID: "America/Jujuy" },
    { cityID: "juneau", momentID: "America/Juneau" },
    { cityID: "kentucky/louisville", momentID: "America/Kentucky/Louisville" },
    { cityID: "kentucky/monticello", momentID: "America/Kentucky/Monticello" },
    { cityID: "knox_in", momentID: "America/Knox_IN" },
    { cityID: "kralendijk", momentID: "America/Kralendijk" },
    { cityID: "la_paz", momentID: "America/La_Paz" },
    { cityID: "lima", momentID: "America/Lima" },
    { cityID: "los_angeles", momentID: "America/Los_Angeles" },
    { cityID: "louisville", momentID: "America/Louisville" },
    { cityID: "lower_princes", momentID: "America/Lower_Princes" },
    { cityID: "maceio", momentID: "America/Maceio" },
    { cityID: "managua", momentID: "America/Managua" },
    { cityID: "manaus", momentID: "America/Manaus" },
    { cityID: "marigot", momentID: "America/Marigot" },
    { cityID: "martinique", momentID: "America/Martinique" },
    { cityID: "matamoros", momentID: "America/Matamoros" },
    { cityID: "mazatlan", momentID: "America/Mazatlan" },
    { cityID: "mendoza", momentID: "America/Mendoza" },
    { cityID: "menominee", momentID: "America/Menominee" },
    { cityID: "merida", momentID: "America/Merida" },
    { cityID: "metlakatla", momentID: "America/Metlakatla" },
    { cityID: "mexico_city", momentID: "America/Mexico_City" },
    { cityID: "miquelon", momentID: "America/Miquelon" },
    { cityID: "moncton", momentID: "America/Moncton" },
    { cityID: "monterrey", momentID: "America/Monterrey" },
    { cityID: "montevideo", momentID: "America/Montevideo" },
    { cityID: "montreal", momentID: "America/Montreal" },
    { cityID: "montserrat", momentID: "America/Montserrat" },
    { cityID: "nassau", momentID: "America/Nassau" },
    { cityID: "new_york", momentID: "America/New_York" },
    { cityID: "nipigon", momentID: "America/Nipigon" },
    { cityID: "nome", momentID: "America/Nome" },
    { cityID: "noronha", momentID: "America/Noronha" },
    { cityID: "north_dakota/beulah", momentID: "America/North_Dakota/Beulah" },
    { cityID: "north_dakota/center", momentID: "America/North_Dakota/Center" },
    { cityID: "north_dakota/new_salem", momentID: "America/North_Dakota/New_Salem" },
    { cityID: "ojinaga", momentID: "America/Ojinaga" },
    { cityID: "panama", momentID: "America/Panama" },
    { cityID: "pangnirtung", momentID: "America/Pangnirtung" },
    { cityID: "paramaribo", momentID: "America/Paramaribo" },
    { cityID: "phoenix", momentID: "America/Phoenix" },
    { cityID: "port-au-prince", momentID: "America/Port-au-Prince" },
    { cityID: "port_of_spain", momentID: "America/Port_of_Spain" },
    { cityID: "porto_acre", momentID: "America/Porto_Acre" },
    { cityID: "porto_velho", momentID: "America/Porto_Velho" },
    { cityID: "puerto_rico", momentID: "America/Puerto_Rico" },
    { cityID: "punta_arenas", momentID: "America/Punta_Arenas" },
    { cityID: "rainy_river", momentID: "America/Rainy_River" },
    { cityID: "rankin_inlet", momentID: "America/Rankin_Inlet" },
    { cityID: "recife", momentID: "America/Recife" },
    { cityID: "regina", momentID: "America/Regina" },
    { cityID: "resolute", momentID: "America/Resolute" },
    { cityID: "rio_branco", momentID: "America/Rio_Branco" },
    { cityID: "rosario", momentID: "America/Rosario" },
    { cityID: "santa_isabel", momentID: "America/Santa_Isabel" },
    { cityID: "santarem", momentID: "America/Santarem" },
    { cityID: "santiago", momentID: "America/Santiago" },
    { cityID: "santo_domingo", momentID: "America/Santo_Domingo" },
    { cityID: "sao_paulo", momentID: "America/Sao_Paulo" },
    { cityID: "scoresbysund", momentID: "America/Scoresbysund" },
    { cityID: "shiprock", momentID: "America/Shiprock" },
    { cityID: "sitka", momentID: "America/Sitka" },
    { cityID: "st_barthelemy", momentID: "America/St_Barthelemy" },
    { cityID: "st_johns", momentID: "America/St_Johns" },
    { cityID: "st_kitts", momentID: "America/St_Kitts" },
    { cityID: "st_lucia", momentID: "America/St_Lucia" },
    { cityID: "st_thomas", momentID: "America/St_Thomas" },
    { cityID: "st_vincent", momentID: "America/St_Vincent" },
    { cityID: "swift_current", momentID: "America/Swift_Current" },
    { cityID: "tegucigalpa", momentID: "America/Tegucigalpa" },
    { cityID: "thule", momentID: "America/Thule" },
    { cityID: "thunder_bay", momentID: "America/Thunder_Bay" },
    { cityID: "tijuana", momentID: "America/Tijuana" },
    { cityID: "toronto", momentID: "America/Toronto" },
    { cityID: "tortola", momentID: "America/Tortola" },
    { cityID: "vancouver", momentID: "America/Vancouver" },
    { cityID: "virgin", momentID: "America/Virgin" },
    { cityID: "whitehorse", momentID: "America/Whitehorse" },
    { cityID: "winnipeg", momentID: "America/Winnipeg" },
    { cityID: "yakutat", momentID: "America/Yakutat" },
    { cityID: "yellowknife", momentID: "America/Yellowknife" },
    { cityID: "casey", momentID: "Antarctica/Casey" },
    { cityID: "davis", momentID: "Antarctica/Davis" },
    { cityID: "dumont_d_urville", momentID: "Antarctica/DumontDUrville" },
    { cityID: "macquarie", momentID: "Antarctica/Macquarie" },
    { cityID: "mawson", momentID: "Antarctica/Mawson" },
    { cityID: "mcmurdo", momentID: "Antarctica/McMurdo" },
    { cityID: "palmer", momentID: "Antarctica/Palmer" },
    { cityID: "rothera", momentID: "Antarctica/Rothera" },
    { cityID: "south_pole", momentID: "Antarctica/South_Pole" },
    { cityID: "syowa", momentID: "Antarctica/Syowa" },
    { cityID: "troll", momentID: "Antarctica/Troll" },
    { cityID: "vostok", momentID: "Antarctica/Vostok" },
    { cityID: "longyearbyen", momentID: "Arctic/Longyearbyen" },
    { cityID: "aden", momentID: "Asia/Aden" },
    { cityID: "almaty", momentID: "Asia/Almaty" },
    { cityID: "amman", momentID: "Asia/Amman" },
    { cityID: "anadyr", momentID: "Asia/Anadyr" },
    { cityID: "aqtau", momentID: "Asia/Aqtau" },
    { cityID: "aqtobe", momentID: "Asia/Aqtobe" },
    { cityID: "ashgabat", momentID: "Asia/Ashgabat" },
    { cityID: "ashkhabad", momentID: "Asia/Ashkhabad" },
    { cityID: "atyrau", momentID: "Asia/Atyrau" },
    { cityID: "baghdad", momentID: "Asia/Baghdad" },
    { cityID: "bahrain", momentID: "Asia/Bahrain" },
    { cityID: "baku", momentID: "Asia/Baku" },
    { cityID: "bangkok", momentID: "Asia/Bangkok" },
    { cityID: "barnaul", momentID: "Asia/Barnaul" },
    { cityID: "beirut", momentID: "Asia/Beirut" },
    { cityID: "bishkek", momentID: "Asia/Bishkek" },
    { cityID: "brunei", momentID: "Asia/Brunei" },
    { cityID: "calcutta", momentID: "Asia/Calcutta" },
    { cityID: "chita", momentID: "Asia/Chita" },
    { cityID: "choibalsan", momentID: "Asia/Choibalsan" },
    { cityID: "chongqing", momentID: "Asia/Chongqing" },
    { cityID: "chungking", momentID: "Asia/Chungking" },
    { cityID: "colombo", momentID: "Asia/Colombo" },
    { cityID: "dacca", momentID: "Asia/Dacca" },
    { cityID: "damascus", momentID: "Asia/Damascus" },
    { cityID: "dhaka", momentID: "Asia/Dhaka" },
    { cityID: "dili", momentID: "Asia/Dili" },
    { cityID: "dubai", momentID: "Asia/Dubai" },
    { cityID: "dushanbe", momentID: "Asia/Dushanbe" },
    { cityID: "famagusta", momentID: "Asia/Famagusta" },
    { cityID: "gaza", momentID: "Asia/Gaza" },
    { cityID: "harbin", momentID: "Asia/Harbin" },
    { cityID: "hebron", momentID: "Asia/Hebron" },
    { cityID: "ho_chi_minh", momentID: "Asia/Ho_Chi_Minh" },
    { cityID: "hong_kong", momentID: "Asia/Hong_Kong" },
    { cityID: "hovd", momentID: "Asia/Hovd" },
    { cityID: "irkutsk", momentID: "Asia/Irkutsk" },
    { cityID: "istanbul", momentID: "Asia/Istanbul" },
    { cityID: "jakarta", momentID: "Asia/Jakarta" },
    { cityID: "jayapura", momentID: "Asia/Jayapura" },
    { cityID: "jerusalem", momentID: "Asia/Jerusalem" },
    { cityID: "kabul", momentID: "Asia/Kabul" },
    { cityID: "kamchatka", momentID: "Asia/Kamchatka" },
    { cityID: "karachi", momentID: "Asia/Karachi" },
    { cityID: "kashgar", momentID: "Asia/Kashgar" },
    { cityID: "kathmandu", momentID: "Asia/Kathmandu" },
    { cityID: "katmandu", momentID: "Asia/Katmandu" },
    { cityID: "khandyga", momentID: "Asia/Khandyga" },
    { cityID: "kolkata", momentID: "Asia/Kolkata" },
    { cityID: "krasnoyarsk", momentID: "Asia/Krasnoyarsk" },
    { cityID: "kuala_lumpur", momentID: "Asia/Kuala_Lumpur" },
    { cityID: "kuching", momentID: "Asia/Kuching" },
    { cityID: "kuwait", momentID: "Asia/Kuwait" },
    { cityID: "macao", momentID: "Asia/Macao" },
    { cityID: "macau", momentID: "Asia/Macau" },
    { cityID: "magadan", momentID: "Asia/Magadan" },
    { cityID: "makassar", momentID: "Asia/Makassar" },
    { cityID: "manila", momentID: "Asia/Manila" },
    { cityID: "muscat", momentID: "Asia/Muscat" },
    { cityID: "nicosia", momentID: "Asia/Nicosia" },
    { cityID: "novosibirsk", momentID: "Asia/Novosibirsk" },
    { cityID: "omsk", momentID: "Asia/Omsk" },
    { cityID: "oral", momentID: "Asia/Oral" },
    { cityID: "phnom_penh", momentID: "Asia/Phnom_Penh" },
    { cityID: "pontianak", momentID: "Asia/Pontianak" },
    { cityID: "pyongyang", momentID: "Asia/Pyongyang" },
    { cityID: "qatar", momentID: "Asia/Qatar" },
    { cityID: "qyzylorda", momentID: "Asia/Qyzylorda" },
    { cityID: "rangoon", momentID: "Asia/Rangoon" },
    { cityID: "riyadh", momentID: "Asia/Riyadh" },
    { cityID: "saigon", momentID: "Asia/Saigon" },
    { cityID: "sakhalin", momentID: "Asia/Sakhalin" },
    { cityID: "samarkand", momentID: "Asia/Samarkand" },
    { cityID: "seoul", momentID: "Asia/Seoul" },
    { cityID: "shanghai", momentID: "Asia/Shanghai" },
    { cityID: "singapore", momentID: "Asia/Singapore" },
    { cityID: "srednekolymsk", momentID: "Asia/Srednekolymsk" },
    { cityID: "taipei", momentID: "Asia/Taipei" },
    { cityID: "tashkent", momentID: "Asia/Tashkent" },
    { cityID: "tbilisi", momentID: "Asia/Tbilisi" },
    { cityID: "tehran", momentID: "Asia/Tehran" },
    { cityID: "tel_aviv", momentID: "Asia/Tel_Aviv" },
    { cityID: "thimbu", momentID: "Asia/Thimbu" },
    { cityID: "thimphu", momentID: "Asia/Thimphu" },
    { cityID: "tokyo", momentID: "Asia/Tokyo" },
    { cityID: "tomsk", momentID: "Asia/Tomsk" },
    { cityID: "ujung_pandang", momentID: "Asia/Ujung_Pandang" },
    { cityID: "ulaanbaatar", momentID: "Asia/Ulaanbaatar" },
    { cityID: "ulan_bator", momentID: "Asia/Ulan_Bator" },
    { cityID: "urumqi", momentID: "Asia/Urumqi" },
    { cityID: "ust_nera", momentID: "Asia/Ust-Nera" },
    { cityID: "vientiane", momentID: "Asia/Vientiane" },
    { cityID: "vladivostok", momentID: "Asia/Vladivostok" },
    { cityID: "yakutsk", momentID: "Asia/Yakutsk" },
    { cityID: "yangon", momentID: "Asia/Yangon" },
    { cityID: "yekaterinburg", momentID: "Asia/Yekaterinburg" },
    { cityID: "yerevan", momentID: "Asia/Yerevan" },
    { cityID: "azores", momentID: "Atlantic/Azores" },
    { cityID: "bermuda", momentID: "Atlantic/Bermuda" },
    { cityID: "canary", momentID: "Atlantic/Canary" },
    { cityID: "cape_verde", momentID: "Atlantic/Cape_Verde" },
    { cityID: "faeroe", momentID: "Atlantic/Faeroe" },
    { cityID: "faroe", momentID: "Atlantic/Faroe" },
    { cityID: "jan_mayen", momentID: "Atlantic/Jan_Mayen" },
    { cityID: "madeira", momentID: "Atlantic/Madeira" },
    { cityID: "reykjavik", momentID: "Atlantic/Reykjavik" },
    { cityID: "south_georgia", momentID: "Atlantic/South_Georgia" },
    { cityID: "st_helena", momentID: "Atlantic/St_Helena" },
    { cityID: "stanley", momentID: "Atlantic/Stanley" },
    { cityID: "act", momentID: "Australia/ACT" },
    { cityID: "adelaide", momentID: "Australia/Adelaide" },
    { cityID: "brisbane", momentID: "Australia/Brisbane" },
    { cityID: "broken_hill", momentID: "Australia/Broken_Hill" },
    { cityID: "canberra", momentID: "Australia/Canberra" },
    { cityID: "currie", momentID: "Australia/Currie" },
    { cityID: "darwin", momentID: "Australia/Darwin" },
    { cityID: "eucla", momentID: "Australia/Eucla" },
    { cityID: "hobart", momentID: "Australia/Hobart" },
    { cityID: "lhi", momentID: "Australia/LHI" },
    { cityID: "lindeman", momentID: "Australia/Lindeman" },
    { cityID: "lord_howe", momentID: "Australia/Lord_Howe" },
    { cityID: "melbourne", momentID: "Australia/Melbourne" },
    { cityID: "nsw", momentID: "Australia/NSW" },
    { cityID: "north", momentID: "Australia/North" },
    { cityID: "perth", momentID: "Australia/Perth" },
    { cityID: "queensland", momentID: "Australia/Queensland" },
    { cityID: "south", momentID: "Australia/South" },
    { cityID: "sydney", momentID: "Australia/Sydney" },
    { cityID: "tasmania", momentID: "Australia/Tasmania" },
    { cityID: "victoria", momentID: "Australia/Victoria" },
    { cityID: "west", momentID: "Australia/West" },
    { cityID: "yancowinna", momentID: "Australia/Yancowinna" },
    { cityID: "acre", momentID: "Brazil/Acre" },
    { cityID: "denoronha", momentID: "Brazil/DeNoronha" },
    { cityID: "east", momentID: "Brazil/East" },
    { cityID: "west", momentID: "Brazil/West" },
    { cityID: "cet", momentID: "CET" },
    { cityID: "cst6cdt", momentID: "CST6CDT" },
    { cityID: "canada_atlantic", momentID: "Canada/Atlantic" },
    { cityID: "canada_central", momentID: "Canada/Central" },
    { cityID: "canada_eastern", momentID: "Canada/Eastern" },
    { cityID: "canada_mountain", momentID: "Canada/Mountain" },
    { cityID: "canada_newfoundland", momentID: "Canada/Newfoundland" },
    { cityID: "canada_pacific", momentID: "Canada/Pacific" },
    { cityID: "canada_saskatchewan", momentID: "Canada/Saskatchewan" },
    { cityID: "canada_yukon", momentID: "Canada/Yukon" },
    { cityID: "chile_continental", momentID: "Chile/Continental" },
    { cityID: "chile_easter_island", momentID: "Chile/EasterIsland" },
    { cityID: "cuba", momentID: "Cuba" },
    { cityID: "eet", momentID: "EET" },
    { cityID: "est", momentID: "EST" },
    { cityID: "est5edt", momentID: "EST5EDT" },
    { cityID: "egypt", momentID: "Egypt" },
    { cityID: "eire", momentID: "Eire" },
    { cityID: "etc_gmt", momentID: "Etc/GMT" },
    { cityID: "etc_gmt+0", momentID: "Etc/GMT+0" },
    { cityID: "etc_gmt+1", momentID: "Etc/GMT+1" },
    { cityID: "etc_gmt+10", momentID: "Etc/GMT+10" },
    { cityID: "etc_gmt+11", momentID: "Etc/GMT+11" },
    { cityID: "etc_gmt+12", momentID: "Etc/GMT+12" },
    { cityID: "etc_gmt+2", momentID: "Etc/GMT+2" },
    { cityID: "etc_gmt+3", momentID: "Etc/GMT+3" },
    { cityID: "etc_gmt+4", momentID: "Etc/GMT+4" },
    { cityID: "etc_gmt+5", momentID: "Etc/GMT+5" },
    { cityID: "etc_gmt+6", momentID: "Etc/GMT+6" },
    { cityID: "etc_gmt+7", momentID: "Etc/GMT+7" },
    { cityID: "etc_gmt+8", momentID: "Etc/GMT+8" },
    { cityID: "etc_gmt+9", momentID: "Etc/GMT+9" },
    { cityID: "etc_gmt-0", momentID: "Etc/GMT-0" },
    { cityID: "etc_gmt-1", momentID: "Etc/GMT-1" },
    { cityID: "etc_gmt-10", momentID: "Etc/GMT-10" },
    { cityID: "etc_gmt-11", momentID: "Etc/GMT-11" },
    { cityID: "etc_gmt-12", momentID: "Etc/GMT-12" },
    { cityID: "etc_gmt-13", momentID: "Etc/GMT-13" },
    { cityID: "etc_gmt-14", momentID: "Etc/GMT-14" },
    { cityID: "etc_gmt-2", momentID: "Etc/GMT-2" },
    { cityID: "etc_gmt-3", momentID: "Etc/GMT-3" },
    { cityID: "etc_gmt-4", momentID: "Etc/GMT-4" },
    { cityID: "etc_gmt-5", momentID: "Etc/GMT-5" },
    { cityID: "etc_gmt-6", momentID: "Etc/GMT-6" },
    { cityID: "etc_gmt-7", momentID: "Etc/GMT-7" },
    { cityID: "etc_gmt-8", momentID: "Etc/GMT-8" },
    { cityID: "etc_gmt-9", momentID: "Etc/GMT-9" },
    { cityID: "etc_gmt0", momentID: "Etc/GMT0" },
    { cityID: "etc_greenwich", momentID: "Etc/Greenwich" },
    { cityID: "etc_uct", momentID: "Etc/UCT" },
    { cityID: "etc_utc", momentID: "Etc/UTC" },
    { cityID: "etc_universal", momentID: "Etc/Universal" },
    { cityID: "etc_zulu", momentID: "Etc/Zulu" },
    { cityID: "amsterdam", momentID: "Europe/Amsterdam" },
    { cityID: "andorra", momentID: "Europe/Andorra" },
    { cityID: "astrakhan", momentID: "Europe/Astrakhan" },
    { cityID: "athens", momentID: "Europe/Athens" },
    { cityID: "belfast", momentID: "Europe/Belfast" },
    { cityID: "belgrade", momentID: "Europe/Belgrade" },
    { cityID: "berlin", momentID: "Europe/Berlin" },
    { cityID: "bratislava", momentID: "Europe/Bratislava" },
    { cityID: "brussels", momentID: "Europe/Brussels" },
    { cityID: "bucharest", momentID: "Europe/Bucharest" },
    { cityID: "budapest", momentID: "Europe/Budapest" },
    { cityID: "busingen", momentID: "Europe/Busingen" },
    { cityID: "chisinau", momentID: "Europe/Chisinau" },
    { cityID: "copenhagen", momentID: "Europe/Copenhagen" },
    { cityID: "dublin", momentID: "Europe/Dublin" },
    { cityID: "gibraltar", momentID: "Europe/Gibraltar" },
    { cityID: "guernsey", momentID: "Europe/Guernsey" },
    { cityID: "helsinki", momentID: "Europe/Helsinki" },
    { cityID: "isle_of_man", momentID: "Europe/Isle_of_Man" },
    { cityID: "istanbul", momentID: "Europe/Istanbul" },
    { cityID: "jersey", momentID: "Europe/Jersey" },
    { cityID: "kaliningrad", momentID: "Europe/Kaliningrad" },
    { cityID: "kiev", momentID: "Europe/Kiev" },
    { cityID: "kirov", momentID: "Europe/Kirov" },
    { cityID: "lisbon", momentID: "Europe/Lisbon" },
    { cityID: "ljubljana", momentID: "Europe/Ljubljana" },
    { cityID: "london", momentID: "Europe/London" },
    { cityID: "luxembourg", momentID: "Europe/Luxembourg" },
    { cityID: "madrid", momentID: "Europe/Madrid" },
    { cityID: "malta", momentID: "Europe/Malta" },
    { cityID: "mariehamn", momentID: "Europe/Mariehamn" },
    { cityID: "minsk", momentID: "Europe/Minsk" },
    { cityID: "monaco", momentID: "Europe/Monaco" },
    { cityID: "moscow", momentID: "Europe/Moscow" },
    { cityID: "nicosia", momentID: "Europe/Nicosia" },
    { cityID: "oslo", momentID: "Europe/Oslo" },
    { cityID: "paris", momentID: "Europe/Paris" },
    { cityID: "podgorica", momentID: "Europe/Podgorica" },
    { cityID: "prague", momentID: "Europe/Prague" },
    { cityID: "riga", momentID: "Europe/Riga" },
    { cityID: "rome", momentID: "Europe/Rome" },
    { cityID: "samara", momentID: "Europe/Samara" },
    { cityID: "san_marino", momentID: "Europe/San_Marino" },
    { cityID: "sarajevo", momentID: "Europe/Sarajevo" },
    { cityID: "saratov", momentID: "Europe/Saratov" },
    { cityID: "simferopol", momentID: "Europe/Simferopol" },
    { cityID: "skopje", momentID: "Europe/Skopje" },
    { cityID: "sofia", momentID: "Europe/Sofia" },
    { cityID: "stockholm", momentID: "Europe/Stockholm" },
    { cityID: "tallinn", momentID: "Europe/Tallinn" },
    { cityID: "tirane", momentID: "Europe/Tirane" },
    { cityID: "tiraspol", momentID: "Europe/Tiraspol" },
    { cityID: "ulyanovsk", momentID: "Europe/Ulyanovsk" },
    { cityID: "uzhgorod", momentID: "Europe/Uzhgorod" },
    { cityID: "vaduz", momentID: "Europe/Vaduz" },
    { cityID: "vatican", momentID: "Europe/Vatican" },
    { cityID: "vienna", momentID: "Europe/Vienna" },
    { cityID: "vilnius", momentID: "Europe/Vilnius" },
    { cityID: "volgograd", momentID: "Europe/Volgograd" },
    { cityID: "warsaw", momentID: "Europe/Warsaw" },
    { cityID: "zagreb", momentID: "Europe/Zagreb" },
    { cityID: "zaporozhye", momentID: "Europe/Zaporozhye" },
    { cityID: "zurich", momentID: "Europe/Zurich" },
    { cityID: "gb", momentID: "GB" },
    { cityID: "gb_eire", momentID: "GB-Eire" },
    { cityID: "gmt", momentID: "GMT" },
    { cityID: "gmt+0", momentID: "GMT+0" },
    { cityID: "gmt-0", momentID: "GMT-0" },
    { cityID: "gmt0", momentID: "GMT0" },
    { cityID: "greenwich", momentID: "Greenwich" },
    { cityID: "hst", momentID: "HST" },
    { cityID: "hongkong", momentID: "Hongkong" },
    { cityID: "iceland", momentID: "Iceland" },
    { cityID: "indian_antananarivo", momentID: "Indian/Antananarivo" },
    { cityID: "indian_chagos", momentID: "Indian/Chagos" },
    { cityID: "indian_christmas", momentID: "Indian/Christmas" },
    { cityID: "indian_cocos", momentID: "Indian/Cocos" },
    { cityID: "indian_comoro", momentID: "Indian/Comoro" },
    { cityID: "indian_kerguelen", momentID: "Indian/Kerguelen" },
    { cityID: "indian_mahe", momentID: "Indian/Mahe" },
    { cityID: "indian_maldives", momentID: "Indian/Maldives" },
    { cityID: "indian_mauritius", momentID: "Indian/Mauritius" },
    { cityID: "indian_mayotte", momentID: "Indian/Mayotte" },
    { cityID: "indian_reunion", momentID: "Indian/Reunion" },
    { cityID: "iran", momentID: "Iran" },
    { cityID: "israel", momentID: "Israel" },
    { cityID: "jamaica", momentID: "Jamaica" },
    { cityID: "japan", momentID: "Japan" },
    { cityID: "kwajalein", momentID: "Kwajalein" },
    { cityID: "libya", momentID: "Libya" },
    { cityID: "met", momentID: "MET" },
    { cityID: "mst", momentID: "MST" },
    { cityID: "mst7mdt", momentID: "MST7MDT" },
    { cityID: "mexico_bajanorte", momentID: "Mexico/BajaNorte" },
    { cityID: "mexico_bajasur", momentID: "Mexico/BajaSur" },
    { cityID: "mexico_general", momentID: "Mexico/General" },
    { cityID: "nz", momentID: "NZ" },
    { cityID: "nz_chat", momentID: "NZ-CHAT" },
    { cityID: "navajo", momentID: "Navajo" },
    { cityID: "prc", momentID: "PRC" },
    { cityID: "pst8pdt", momentID: "PST8PDT" },
    { cityID: "apia", momentID: "Pacific/Apia" },
    { cityID: "auckland", momentID: "Pacific/Auckland" },
    { cityID: "bougainville", momentID: "Pacific/Bougainville" },
    { cityID: "chatham", momentID: "Pacific/Chatham" },
    { cityID: "chuuk", momentID: "Pacific/Chuuk" },
    { cityID: "easter", momentID: "Pacific/Easter" },
    { cityID: "efate", momentID: "Pacific/Efate" },
    { cityID: "enderbury", momentID: "Pacific/Enderbury" },
    { cityID: "fakaofo", momentID: "Pacific/Fakaofo" },
    { cityID: "fiji", momentID: "Pacific/Fiji" },
    { cityID: "funafuti", momentID: "Pacific/Funafuti" },
    { cityID: "galapagos", momentID: "Pacific/Galapagos" },
    { cityID: "gambier", momentID: "Pacific/Gambier" },
    { cityID: "guadalcanal", momentID: "Pacific/Guadalcanal" },
    { cityID: "guam", momentID: "Pacific/Guam" },
    { cityID: "honolulu", momentID: "Pacific/Honolulu" },
    { cityID: "johnston", momentID: "Pacific/Johnston" },
    { cityID: "kiritimati", momentID: "Pacific/Kiritimati" },
    { cityID: "kosrae", momentID: "Pacific/Kosrae" },
    { cityID: "kwajalein", momentID: "Pacific/Kwajalein" },
    { cityID: "majuro", momentID: "Pacific/Majuro" },
    { cityID: "marquesas", momentID: "Pacific/Marquesas" },
    { cityID: "midway", momentID: "Pacific/Midway" },
    { cityID: "nauru", momentID: "Pacific/Nauru" },
    { cityID: "niue", momentID: "Pacific/Niue" },
    { cityID: "norfolk", momentID: "Pacific/Norfolk" },
    { cityID: "noumea", momentID: "Pacific/Noumea" },
    { cityID: "pago_pago", momentID: "Pacific/Pago_Pago" },
    { cityID: "palau", momentID: "Pacific/Palau" },
    { cityID: "pitcairn", momentID: "Pacific/Pitcairn" },
    { cityID: "pohnpei", momentID: "Pacific/Pohnpei" },
    { cityID: "ponape", momentID: "Pacific/Ponape" },
    { cityID: "port_moresby", momentID: "Pacific/Port_Moresby" },
    { cityID: "rarotonga", momentID: "Pacific/Rarotonga" },
    { cityID: "saipan", momentID: "Pacific/Saipan" },
    { cityID: "samoa", momentID: "Pacific/Samoa" },
    { cityID: "tahiti", momentID: "Pacific/Tahiti" },
    { cityID: "tarawa", momentID: "Pacific/Tarawa" },
    { cityID: "tongatapu", momentID: "Pacific/Tongatapu" },
    { cityID: "truk", momentID: "Pacific/Truk" },
    { cityID: "wake", momentID: "Pacific/Wake" },
    { cityID: "wallis", momentID: "Pacific/Wallis" },
    { cityID: "yap", momentID: "Pacific/Yap" },
    { cityID: "singapore", momentID: "Asia/Singapore" },
    { cityID: "uct", momentID: "Etc/UCT" },
    { cityID: "zulu", momentID: "Etc/Zulu" }
]

const mainCityArr = [
    {cityID:"tokyo", momentID:"Asia/Tokyo"},
    {cityID:"paris", momentID:"Europe/Paris"},
    {cityID:"sydney", momentID:"Australia/Sydney"},
    {cityID:"amsterdam", momentID:"Europe/Amsterdam"},
    { cityID: "jakarta", momentID: "Asia/Jakarta" },
];

let displayedCity = mainCityArr;

// Updates the time of the clock
function updateSingularCity(prop) {
    let cityElement = document.querySelector(`#${prop.cityID}`);
    if(cityElement) {
        let cityDateElement = cityElement.querySelector(".date");
        let cityTimeElement = cityElement.querySelector(".time");
        let cityTime = moment().tz(prop.momentID);
        
        cityDateElement.innerHTML = cityTime.format("MMM Do YYYY");
        cityTimeElement.innerHTML = cityTime.format("h:mm:ss [<small>]A[</small>]");
    }
}

function updateTime() {
    displayedCity.map(item => updateSingularCity(item));
}

updateTime();
setInterval(updateTime,1000);

// Select option filter
function CityComponent(props) {
    let cityName = props.momentID.replace("_", " ").split("/")[1];
    let cityTime = moment().tz(props.momentID);
    return `
    <div class="city" id="${props.cityID}">
        <h2>${cityName}</h2>
        <div class="date">${cityTime.format("MMM Do YYYY")}</div>
        <div class="time">${cityTime.format("h:mm:ss [<small>]A[</small>]")}</div>
    </div>`;
}

function updateCity(event) {
    let cityTimeZone = event.target.value;
    let citiesElement = document.querySelector("#cities");
    displayedCity = [];

    if(cityTimeZone.length === 0){
        displayedCity = mainCityArr;
    }else{
        if(cityTimeZone === "current"){
            cityTimeZone = moment.tz.guess();
        }
        displayedCity.push(timezones.find(a => a.momentID == cityTimeZone));
    }
    
    let htmlContent = displayedCity.map(item => CityComponent(item)).join('');
    if(cityTimeZone.length !== 0) {
        returnLink.innerHTML = "All Cities";
    }
    citiesElement.innerHTML = htmlContent;
}

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);

// Return to all cities button
function resetCity(){
    let citiesElement = document.querySelector("#cities");
    displayedCity = mainCityArr;
    citiesElement.innerHTML = displayedCity.map(item => CityComponent(item)).join('');
    returnLink.innerHTML = "";
    citiesSelectElement.value="";
}

let returnLink = document.querySelector('#return_link');
returnLink.addEventListener("click", resetCity);