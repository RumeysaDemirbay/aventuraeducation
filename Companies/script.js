

const companies = [
    {
      "id": 1,
      "key": 1,
      "companyName": "Barton-Collier",
      "companyPhone": "+44 (359) 748-0923",
      "companyPic": "https://robohash.org/voluptasquodautem.png?size=120x120&set=set1",
      "vatNumber": "9732384166",
      "country": "United Kingdom",
      "website": "ft.com",
      "fields": "n/a"
    },
    {
      "id": 2,
      "key": 2,
      "companyName": "Cartwright and Sons",
      "companyPhone": "+49 (341) 726-5460",
      "companyPic": "https://robohash.org/errormaioreset.png?size=120x120&set=set1",
      "vatNumber": "7917265196",
      "country": "Germany",
      "website": "trellian.com",
      "fields": "Consumer Services"
    },
    {
      "id": 3,
      "key": 3,
      "companyName": "Kunze-Weimann",
      "companyPhone": "+1 (330) 695-1704",
      "companyPic": "https://robohash.org/dolorutquisquam.png?size=120x120&set=set1",
      "vatNumber": "7988061704",
      "country": "United States",
      "website": "ed.gov",
      "fields": "Health Care"
    },
    {
      "id": 4,
      "key": 4,
      "companyName": "Greenholt-Goldner",
      "companyPhone": "+49 (364) 277-7049",
      "companyPic": "https://robohash.org/quovoluptaset.png?size=120x120&set=set1",
      "vatNumber": "9880052897",
      "country": "Germany",
      "website": "flickr.com",
      "fields": "Finance"
    },
    {
      "id": 5,
      "key": 5,
      "companyName": "Windler LLC",
      "companyPhone": "+33 (675) 710-7713",
      "companyPic": "https://robohash.org/architectopraesentiumperferendis.png?size=120x120&set=set1",
      "vatNumber": "2504937628",
      "country": "France",
      "website": "ask.com",
      "fields": "Basic Industries"
    },
    {
      "id": 6,
      "key": 6,
      "companyName": "Vandervort, Halvorson and Walsh",
      "companyPhone": "+44 (979) 483-7751",
      "companyPic": "https://robohash.org/doloremadperspiciatis.png?size=120x120&set=set1",
      "vatNumber": "4488989764",
      "country": "United Kingdom",
      "website": "canalblog.com",
      "fields": "Energy"
    },
    {
      "id": 7,
      "key": 7,
      "companyName": "Hermann-Bruen",
      "companyPhone": "+1 (312) 179-2904",
      "companyPic": "https://robohash.org/eiusdoloribusreiciendis.png?size=120x120&set=set1",
      "vatNumber": "4883630757",
      "country": "United States",
      "website": "dyndns.org",
      "fields": "n/a"
    },
    {
      "id": 8,
      "key": 8,
      "companyName": "Wyman, Jast and Lowe",
      "companyPhone": "+33 (746) 563-4334",
      "companyPic": "https://robohash.org/velitrepellendusinventore.png?size=120x120&set=set1",
      "vatNumber": "2342384890",
      "country": "France",
      "website": "printfriendly.com",
      "fields": "Finance"
    },
    {
      "id": 9,
      "key": 9,
      "companyName": "Beatty and Sons",
      "companyPhone": "+1 (704) 139-5283",
      "companyPic": "https://robohash.org/enimveniamet.png?size=120x120&set=set1",
      "vatNumber": "4345416590",
      "country": "United States",
      "website": "people.com.cn",
      "fields": "Energy"
    },
    {
      "id": 10,
      "key": 10,
      "companyName": "Beier, Zboncak and Herzog",
      "companyPhone": "+1 (937) 678-7191",
      "companyPic": "https://robohash.org/utquiautem.png?size=120x120&set=set1",
      "vatNumber": "7126039069",
      "country": "United States",
      "website": "timesonline.co.uk",
      "fields": "Consumer Non-Durables"
    },
    {
      "id": 11,
      "key": 11,
      "companyName": "Osinski-Haley",
      "companyPhone": "+33 (706) 572-5073",
      "companyPic": "https://robohash.org/facilisquivel.png?size=120x120&set=set1",
      "vatNumber": "5788024390",
      "country": "France",
      "website": "sakura.ne.jp",
      "fields": "Miscellaneous"
    },
    {
      "id": 12,
      "key": 12,
      "companyName": "Parker, Schowalter and Mueller",
      "companyPhone": "+33 (832) 233-7907",
      "companyPic": "https://robohash.org/ipsadoloremdebitis.png?size=120x120&set=set1",
      "vatNumber": "9625505733",
      "country": "France",
      "website": "deliciousdays.com",
      "fields": "n/a"
    },
    {
      "id": 13,
      "key": 13,
      "companyName": "Bartell and Sons",
      "companyPhone": "+1 (952) 103-2465",
      "companyPic": "https://robohash.org/corporisquaspraesentium.png?size=120x120&set=set1",
      "vatNumber": "9035260112",
      "country": "United States",
      "website": "naver.com",
      "fields": "Finance"
    },
    {
      "id": 14,
      "key": 14,
      "companyName": "Hickle-Kassulke",
      "companyPhone": "+33 (780) 586-9601",
      "companyPic": "https://robohash.org/nonpossimussint.png?size=120x120&set=set1",
      "vatNumber": "0837136962",
      "country": "France",
      "website": "hubpages.com",
      "fields": "Capital Goods"
    },
    {
      "id": 15,
      "key": 15,
      "companyName": "Bartoletti LLC",
      "companyPhone": "+33 (932) 648-8174",
      "companyPic": "https://robohash.org/innamexercitationem.png?size=120x120&set=set1",
      "vatNumber": "8001669459",
      "country": "France",
      "website": "boston.com",
      "fields": "n/a"
    },
    {
      "id": 16,
      "key": 16,
      "companyName": "Lynch LLC",
      "companyPhone": "+33 (575) 502-7819",
      "companyPic": "https://robohash.org/veniamvoluptasdolores.png?size=120x120&set=set1",
      "vatNumber": "1565029712",
      "country": "France",
      "website": "statcounter.com",
      "fields": "Basic Industries"
    },
    {
      "id": 17,
      "key": 17,
      "companyName": "VonRueden and Sons",
      "companyPhone": "+33 (999) 335-6389",
      "companyPic": "https://robohash.org/quivoluptasasperiores.png?size=120x120&set=set1",
      "vatNumber": "8837967799",
      "country": "France",
      "website": "github.io",
      "fields": "Health Care"
    },
    {
      "id": 18,
      "key": 18,
      "companyName": "Bergstrom and Sons",
      "companyPhone": "+34 (879) 641-5848",
      "companyPic": "https://robohash.org/commodidoloresqui.png?size=120x120&set=set1",
      "vatNumber": "2135853178",
      "country": "Spain",
      "website": "illinois.edu",
      "fields": "Basic Industries"
    },
    {
      "id": 19,
      "key": 19,
      "companyName": "Kutch, Gaylord and Nolan",
      "companyPhone": "+33 (145) 483-5175",
      "companyPic": "https://robohash.org/etminusillo.png?size=120x120&set=set1",
      "vatNumber": "4249777111",
      "country": "France",
      "website": "163.com",
      "fields": "Finance"
    },
    {
      "id": 20,
      "key": 20,
      "companyName": "Monahan, Altenwerth and Heathcote",
      "companyPhone": "+33 (417) 625-8104",
      "companyPic": "https://robohash.org/excepturialiasaut.png?size=120x120&set=set1",
      "vatNumber": "1255329599",
      "country": "France",
      "website": "state.gov",
      "fields": "Basic Industries"
    },
    {
      "id": 21,
      "key": 21,
      "companyName": "Kunze, Jacobson and Hayes",
      "companyPhone": "+33 (872) 101-6370",
      "companyPic": "https://robohash.org/doloresautvoluptas.png?size=120x120&set=set1",
      "vatNumber": "8911808547",
      "country": "France",
      "website": "angelfire.com",
      "fields": "Technology"
    },
    {
      "id": 22,
      "key": 22,
      "companyName": "Flatley Group",
      "companyPhone": "+33 (869) 883-7301",
      "companyPic": "https://robohash.org/modirationelaudantium.png?size=120x120&set=set1",
      "vatNumber": "2976409196",
      "country": "France",
      "website": "symantec.com",
      "fields": "Finance"
    },
    {
      "id": 23,
      "key": 23,
      "companyName": "Hegmann, Batz and Walter",
      "companyPhone": "+1 (512) 583-8999",
      "companyPic": "https://robohash.org/autemporrodeserunt.png?size=120x120&set=set1",
      "vatNumber": "4742166353",
      "country": "United States",
      "website": "wsj.com",
      "fields": "n/a"
    },
    {
      "id": 24,
      "key": 24,
      "companyName": "Hermiston-Pollich",
      "companyPhone": "+33 (962) 152-7754",
      "companyPic": "https://robohash.org/temporibusaet.png?size=120x120&set=set1",
      "vatNumber": "6723255453",
      "country": "France",
      "website": "sun.com",
      "fields": "Health Care"
    },
    {
      "id": 25,
      "key": 25,
      "companyName": "Breitenberg LLC",
      "companyPhone": "+1 (520) 102-5080",
      "companyPic": "https://robohash.org/magnamquisconsectetur.png?size=120x120&set=set1",
      "vatNumber": "9211138140",
      "country": "United States",
      "website": "imageshack.us",
      "fields": "Consumer Services"
    },
    {
      "id": 26,
      "key": 26,
      "companyName": "Metz, Cremin and Gleichner",
      "companyPhone": "+1 (602) 604-0725",
      "companyPic": "https://robohash.org/sedcumrerum.png?size=120x120&set=set1",
      "vatNumber": "1392723531",
      "country": "United States",
      "website": "cafepress.com",
      "fields": "Capital Goods"
    },
    {
      "id": 27,
      "key": 27,
      "companyName": "Kautzer LLC",
      "companyPhone": "+33 (108) 343-2301",
      "companyPic": "https://robohash.org/sintfacereeos.png?size=120x120&set=set1",
      "vatNumber": "0488501407",
      "country": "France",
      "website": "parallels.com",
      "fields": "Capital Goods"
    },
    {
      "id": 28,
      "key": 28,
      "companyName": "Wisoky, Lynch and Bayer",
      "companyPhone": "+33 (408) 381-6647",
      "companyPic": "https://robohash.org/aspernaturnobisomnis.png?size=120x120&set=set1",
      "vatNumber": "9507027459",
      "country": "France",
      "website": "spotify.com",
      "fields": "Consumer Services"
    },
    {
      "id": 29,
      "key": 29,
      "companyName": "Conn LLC",
      "companyPhone": "+33 (814) 136-0827",
      "companyPic": "https://robohash.org/autemdoloresipsum.png?size=120x120&set=set1",
      "vatNumber": "0527144762",
      "country": "France",
      "website": "webmd.com",
      "fields": "Consumer Non-Durables"
    },
    {
      "id": 30,
      "key": 30,
      "companyName": "Kozey, Williamson and Baumbach",
      "companyPhone": "+33 (619) 349-6911",
      "companyPic": "https://robohash.org/inventorequoslabore.png?size=120x120&set=set1",
      "vatNumber": "8053856004",
      "country": "France",
      "website": "nydailynews.com",
      "fields": "n/a"
    },
    {
      "id": 31,
      "key": 31,
      "companyName": "Schumm-Wilderman",
      "companyPhone": "+33 (811) 453-9202",
      "companyPic": "https://robohash.org/temporeabeos.png?size=120x120&set=set1",
      "vatNumber": "3217009371",
      "country": "France",
      "website": "ustream.tv",
      "fields": "Consumer Services"
    },
    {
      "id": 32,
      "key": 32,
      "companyName": "Wehner, McDermott and Greenfelder",
      "companyPhone": "+34 (120) 143-2994",
      "companyPic": "https://robohash.org/quivelitqui.png?size=120x120&set=set1",
      "vatNumber": "9486338876",
      "country": "Spain",
      "website": "ovh.net",
      "fields": "Public Utilities"
    },
    {
      "id": 33,
      "key": 33,
      "companyName": "Hagenes-VonRueden",
      "companyPhone": "+1 (305) 572-1251",
      "companyPic": "https://robohash.org/inenimconsequatur.png?size=120x120&set=set1",
      "vatNumber": "1091222487",
      "country": "United States",
      "website": "devhub.com",
      "fields": "Finance"
    },
    {
      "id": 34,
      "key": 34,
      "companyName": "Schiller, MacGyver and Abshire",
      "companyPhone": "+1 (941) 430-7022",
      "companyPic": "https://robohash.org/nostrumsedet.png?size=120x120&set=set1",
      "vatNumber": "7645323329",
      "country": "United States",
      "website": "shop-pro.jp",
      "fields": "n/a"
    },
    {
      "id": 35,
      "key": 35,
      "companyName": "Keeling-Douglas",
      "companyPhone": "+33 (336) 405-1266",
      "companyPic": "https://robohash.org/mollitiainciduntaut.png?size=120x120&set=set1",
      "vatNumber": "9428177032",
      "country": "France",
      "website": "xrea.com",
      "fields": "Finance"
    },
    {
      "id": 36,
      "key": 36,
      "companyName": "Lind-Beatty",
      "companyPhone": "+1 (402) 568-4081",
      "companyPic": "https://robohash.org/quiquamofficiis.png?size=120x120&set=set1",
      "vatNumber": "7354906220",
      "country": "United States",
      "website": "thetimes.co.uk",
      "fields": "Finance"
    },
    {
      "id": 37,
      "key": 37,
      "companyName": "Heathcote, Wunsch and DuBuque",
      "companyPhone": "+1 (607) 327-0635",
      "companyPic": "https://robohash.org/assumendalaborumquis.png?size=120x120&set=set1",
      "vatNumber": "0463365313",
      "country": "United States",
      "website": "yolasite.com",
      "fields": "Consumer Services"
    },
    {
      "id": 38,
      "key": 38,
      "companyName": "Funk-O'Hara",
      "companyPhone": "+33 (170) 643-4276",
      "companyPic": "https://robohash.org/magniomnisvoluptas.png?size=120x120&set=set1",
      "vatNumber": "0964281104",
      "country": "France",
      "website": "nytimes.com",
      "fields": "Miscellaneous"
    },
    {
      "id": 39,
      "key": 39,
      "companyName": "Hilll-Nitzsche",
      "companyPhone": "+1 (505) 952-2758",
      "companyPic": "https://robohash.org/quifugitlibero.png?size=120x120&set=set1",
      "vatNumber": "5891581647",
      "country": "United States",
      "website": "europa.eu",
      "fields": "Finance"
    },
    {
      "id": 40,
      "key": 40,
      "companyName": "Crist-Cassin",
      "companyPhone": "+1 (860) 530-9741",
      "companyPic": "https://robohash.org/eiusporronihil.png?size=120x120&set=set1",
      "vatNumber": "8706413633",
      "country": "United States",
      "website": "zdnet.com",
      "fields": "Basic Industries"
    },
    {
      "id": 41,
      "key": 41,
      "companyName": "Rau Inc",
      "companyPhone": "+1 (225) 711-7576",
      "companyPic": "https://robohash.org/doloresmodipariatur.png?size=120x120&set=set1",
      "vatNumber": "2307915729",
      "country": "United States",
      "website": "storify.com",
      "fields": "Health Care"
    },
    {
      "id": 42,
      "key": 42,
      "companyName": "Streich, Connelly and Pollich",
      "companyPhone": "+33 (743) 391-5852",
      "companyPic": "https://robohash.org/consequunturnonesse.png?size=120x120&set=set1",
      "vatNumber": "8945674896",
      "country": "France",
      "website": "1und1.de",
      "fields": "Basic Industries"
    },
    {
      "id": 43,
      "key": 43,
      "companyName": "Feest, Sipes and Klein",
      "companyPhone": "+44 (601) 529-5777",
      "companyPic": "https://robohash.org/quioccaecatirepellendus.png?size=120x120&set=set1",
      "vatNumber": "4759052402",
      "country": "United Kingdom",
      "website": "rambler.ru",
      "fields": "Technology"
    },
    {
      "id": 44,
      "key": 44,
      "companyName": "Lehner Group",
      "companyPhone": "+49 (944) 787-6929",
      "companyPic": "https://robohash.org/quaeutnatus.png?size=120x120&set=set1",
      "vatNumber": "0901751626",
      "country": "Germany",
      "website": "godaddy.com",
      "fields": "Capital Goods"
    },
    {
      "id": 45,
      "key": 45,
      "companyName": "Kuhlman-Kemmer",
      "companyPhone": "+1 (763) 138-4210",
      "companyPic": "https://robohash.org/laboriosamillumexplicabo.png?size=120x120&set=set1",
      "vatNumber": "7379384317",
      "country": "United States",
      "website": "admin.ch",
      "fields": "Consumer Services"
    },
    {
      "id": 46,
      "key": 46,
      "companyName": "Wiegand and Sons",
      "companyPhone": "+49 (137) 479-1582",
      "companyPic": "https://robohash.org/solutaquasialiquid.png?size=120x120&set=set1",
      "vatNumber": "5411854652",
      "country": "Germany",
      "website": "wikispaces.com",
      "fields": "n/a"
    },
    {
      "id": 47,
      "key": 47,
      "companyName": "Sporer, Rowe and Bashirian",
      "companyPhone": "+33 (676) 430-0240",
      "companyPic": "https://robohash.org/autillumiusto.png?size=120x120&set=set1",
      "vatNumber": "6798123910",
      "country": "France",
      "website": "printfriendly.com",
      "fields": "n/a"
    },
    {
      "id": 48,
      "key": 48,
      "companyName": "Johns, Christiansen and Romaguera",
      "companyPhone": "+34 (477) 752-4517",
      "companyPic": "https://robohash.org/consequaturvoluptasest.png?size=120x120&set=set1",
      "vatNumber": "4666788395",
      "country": "Spain",
      "website": "nydailynews.com",
      "fields": "Consumer Services"
    },
    {
      "id": 49,
      "key": 49,
      "companyName": "Aufderhar Inc",
      "companyPhone": "+34 (986) 915-7055",
      "companyPic": "https://robohash.org/etcorruptipossimus.png?size=120x120&set=set1",
      "vatNumber": "2949015565",
      "country": "Spain",
      "website": "wsj.com",
      "fields": "n/a"
    },
    {
      "id": 50,
      "key": 50,
      "companyName": "Zemlak, Smitham and Renner",
      "companyPhone": "+33 (747) 127-3850",
      "companyPic": "https://robohash.org/ateumquisquam.png?size=120x120&set=set1",
      "vatNumber": "9122013431",
      "country": "France",
      "website": "tripadvisor.com",
      "fields": "Technology"
    },
    {
      "id": 51,
      "key": 51,
      "companyName": "Frami-Roob",
      "companyPhone": "+33 (654) 884-5300",
      "companyPic": "https://robohash.org/similiquevelsuscipit.png?size=120x120&set=set1",
      "vatNumber": "4150795274",
      "country": "France",
      "website": "vkontakte.ru",
      "fields": "Health Care"
    },
    {
      "id": 52,
      "key": 52,
      "companyName": "Schmeler, Leffler and Lind",
      "companyPhone": "+33 (232) 163-8474",
      "companyPic": "https://robohash.org/harummolestiasquaerat.png?size=120x120&set=set1",
      "vatNumber": "6305361010",
      "country": "France",
      "website": "boston.com",
      "fields": "Technology"
    },
    {
      "id": 53,
      "key": 53,
      "companyName": "Bergnaum-Barton",
      "companyPhone": "+49 (809) 592-9168",
      "companyPic": "https://robohash.org/eaquequivelit.png?size=120x120&set=set1",
      "vatNumber": "0526185945",
      "country": "Germany",
      "website": "blogger.com",
      "fields": "Public Utilities"
    },
    {
      "id": 54,
      "key": 54,
      "companyName": "Doyle-Carroll",
      "companyPhone": "+33 (487) 623-6165",
      "companyPic": "https://robohash.org/voluptasculpanostrum.png?size=120x120&set=set1",
      "vatNumber": "6245140005",
      "country": "France",
      "website": "wikispaces.com",
      "fields": "n/a"
    },
    {
      "id": 55,
      "key": 55,
      "companyName": "Terry LLC",
      "companyPhone": "+33 (476) 861-8536",
      "companyPic": "https://robohash.org/idveniamatque.png?size=120x120&set=set1",
      "vatNumber": "8185440239",
      "country": "France",
      "website": "instagram.com",
      "fields": "Finance"
    },
    {
      "id": 56,
      "key": 56,
      "companyName": "Hackett, Koss and Collier",
      "companyPhone": "+1 (954) 305-5780",
      "companyPic": "https://robohash.org/quiavoluptateexplicabo.png?size=120x120&set=set1",
      "vatNumber": "2999088698",
      "country": "United States",
      "website": "about.me",
      "fields": "Finance"
    },
    {
      "id": 57,
      "key": 57,
      "companyName": "Morar, Price and Lockman",
      "companyPhone": "+33 (832) 977-4612",
      "companyPic": "https://robohash.org/autnonrerum.png?size=120x120&set=set1",
      "vatNumber": "4739511029",
      "country": "France",
      "website": "patch.com",
      "fields": "Miscellaneous"
    },
    {
      "id": 58,
      "key": 58,
      "companyName": "Davis and Sons",
      "companyPhone": "+33 (375) 885-5046",
      "companyPic": "https://robohash.org/sedfacerepraesentium.png?size=120x120&set=set1",
      "vatNumber": "6028915432",
      "country": "France",
      "website": "nbcnews.com",
      "fields": "Consumer Durables"
    },
    {
      "id": 59,
      "key": 59,
      "companyName": "Christiansen, Klocko and Effertz",
      "companyPhone": "+1 (918) 259-3243",
      "companyPic": "https://robohash.org/estaccusantiumquod.png?size=120x120&set=set1",
      "vatNumber": "4939489809",
      "country": "United States",
      "website": "ebay.co.uk",
      "fields": "Consumer Non-Durables"
    },
    {
      "id": 60,
      "key": 60,
      "companyName": "Emmerich-Rowe",
      "companyPhone": "+33 (526) 111-9868",
      "companyPic": "https://robohash.org/eosminimaveniam.png?size=120x120&set=set1",
      "vatNumber": "4756576338",
      "country": "France",
      "website": "google.nl",
      "fields": "Public Utilities"
    },
    {
      "id": 61,
      "key": 61,
      "companyName": "MacGyver, Leffler and O'Conner",
      "companyPhone": "+33 (347) 291-5260",
      "companyPic": "https://robohash.org/eosmolestiasoptio.png?size=120x120&set=set1",
      "vatNumber": "4511679592",
      "country": "France",
      "website": "hatena.ne.jp",
      "fields": "Technology"
    },
    {
      "id": 62,
      "key": 62,
      "companyName": "Becker, Lind and Jones",
      "companyPhone": "+1 (915) 565-1908",
      "companyPic": "https://robohash.org/eosrerumut.png?size=120x120&set=set1",
      "vatNumber": "4106045621",
      "country": "United States",
      "website": "latimes.com",
      "fields": "Consumer Durables"
    },
    {
      "id": 63,
      "key": 63,
      "companyName": "Okuneva, Farrell and Frami",
      "companyPhone": "+33 (602) 768-0395",
      "companyPic": "https://robohash.org/fugitvoluptatemet.png?size=120x120&set=set1",
      "vatNumber": "4427137830",
      "country": "France",
      "website": "angelfire.com",
      "fields": "Finance"
    },
    {
      "id": 64,
      "key": 64,
      "companyName": "Kris, Willms and Stracke",
      "companyPhone": "+33 (613) 521-4644",
      "companyPic": "https://robohash.org/natuseasuscipit.png?size=120x120&set=set1",
      "vatNumber": "0372503810",
      "country": "France",
      "website": "stumbleupon.com",
      "fields": "n/a"
    },
    {
      "id": 65,
      "key": 65,
      "companyName": "Franecki-Lehner",
      "companyPhone": "+49 (659) 191-8843",
      "companyPic": "https://robohash.org/utquiarerum.png?size=120x120&set=set1",
      "vatNumber": "7211423242",
      "country": "Germany",
      "website": "liveinternet.ru",
      "fields": "Basic Industries"
    },
    {
      "id": 66,
      "key": 66,
      "companyName": "Cronin-Gibson",
      "companyPhone": "+33 (986) 467-9486",
      "companyPic": "https://robohash.org/estmagnamut.png?size=120x120&set=set1",
      "vatNumber": "7428070538",
      "country": "France",
      "website": "chron.com",
      "fields": "Finance"
    },
    {
      "id": 67,
      "key": 67,
      "companyName": "Abshire, Rowe and Hyatt",
      "companyPhone": "+1 (319) 599-8460",
      "companyPic": "https://robohash.org/namnostrumaut.png?size=120x120&set=set1",
      "vatNumber": "7251179849",
      "country": "United States",
      "website": "marketwatch.com",
      "fields": "Finance"
    },
    {
      "id": 68,
      "key": 68,
      "companyName": "Yundt Inc",
      "companyPhone": "+1 (516) 131-3535",
      "companyPic": "https://robohash.org/repudiandaeplaceatdignissimos.png?size=120x120&set=set1",
      "vatNumber": "5188755866",
      "country": "United States",
      "website": "meetup.com",
      "fields": "n/a"
    },
    {
      "id": 69,
      "key": 69,
      "companyName": "McGlynn-Bernier",
      "companyPhone": "+1 (713) 870-0929",
      "companyPic": "https://robohash.org/quiseosdolorem.png?size=120x120&set=set1",
      "vatNumber": "0612800636",
      "country": "United States",
      "website": "miitbeian.gov.cn",
      "fields": "Finance"
    },
    {
      "id": 70,
      "key": 70,
      "companyName": "Romaguera-Zieme",
      "companyPhone": "+1 (602) 309-3953",
      "companyPic": "https://robohash.org/possimusquaeeum.png?size=120x120&set=set1",
      "vatNumber": "4601298148",
      "country": "United States",
      "website": "timesonline.co.uk",
      "fields": "Public Utilities"
    },
    {
      "id": 71,
      "key": 71,
      "companyName": "Kohler-Hills",
      "companyPhone": "+33 (141) 962-0571",
      "companyPic": "https://robohash.org/auteumiure.png?size=120x120&set=set1",
      "vatNumber": "4457207276",
      "country": "France",
      "website": "opera.com",
      "fields": "Technology"
    },
    {
      "id": 72,
      "key": 72,
      "companyName": "Hoppe Group",
      "companyPhone": "+33 (477) 249-9923",
      "companyPic": "https://robohash.org/modiprovidentnatus.png?size=120x120&set=set1",
      "vatNumber": "8169387639",
      "country": "France",
      "website": "java.com",
      "fields": "Energy"
    },
    {
      "id": 73,
      "key": 73,
      "companyName": "Gutkowski-White",
      "companyPhone": "+34 (743) 719-0148",
      "companyPic": "https://robohash.org/eavoluptassit.png?size=120x120&set=set1",
      "vatNumber": "0127433163",
      "country": "Spain",
      "website": "prnewswire.com",
      "fields": "Miscellaneous"
    },
    {
      "id": 74,
      "key": 74,
      "companyName": "Sauer, Jacobson and Farrell",
      "companyPhone": "+44 (372) 789-7840",
      "companyPic": "https://robohash.org/quosdolorumdelectus.png?size=120x120&set=set1",
      "vatNumber": "3345513749",
      "country": "United Kingdom",
      "website": "drupal.org",
      "fields": "Technology"
    },
    {
      "id": 75,
      "key": 75,
      "companyName": "Rippin, Ruecker and Douglas",
      "companyPhone": "+1 (805) 197-5487",
      "companyPic": "https://robohash.org/ducimusdoloresminima.png?size=120x120&set=set1",
      "vatNumber": "8021841710",
      "country": "United States",
      "website": "businesswire.com",
      "fields": "Finance"
    },
    {
      "id": 76,
      "key": 76,
      "companyName": "Terry Group",
      "companyPhone": "+1 (214) 588-6251",
      "companyPic": "https://robohash.org/exvoluptatemconsectetur.png?size=120x120&set=set1",
      "vatNumber": "4008842411",
      "country": "United States",
      "website": "bizjournals.com",
      "fields": "Health Care"
    },
    {
      "id": 77,
      "key": 77,
      "companyName": "Hagenes-Heller",
      "companyPhone": "+33 (274) 878-6562",
      "companyPic": "https://robohash.org/abconsequaturrepellat.png?size=120x120&set=set1",
      "vatNumber": "0085462187",
      "country": "France",
      "website": "reference.com",
      "fields": "Finance"
    },
    {
      "id": 78,
      "key": 78,
      "companyName": "Runte and Sons",
      "companyPhone": "+33 (244) 346-9124",
      "companyPic": "https://robohash.org/magniexcepturiest.png?size=120x120&set=set1",
      "vatNumber": "3739976047",
      "country": "France",
      "website": "cnbc.com",
      "fields": "Capital Goods"
    },
    {
      "id": 79,
      "key": 79,
      "companyName": "Effertz-Hilll",
      "companyPhone": "+1 (251) 361-2306",
      "companyPic": "https://robohash.org/nonanimiconsequatur.png?size=120x120&set=set1",
      "vatNumber": "1519480075",
      "country": "United States",
      "website": "theguardian.com",
      "fields": "Technology"
    },
    {
      "id": 80,
      "key": 80,
      "companyName": "Tremblay, Becker and Cruickshank",
      "companyPhone": "+33 (389) 452-4818",
      "companyPic": "https://robohash.org/nihilillodebitis.png?size=120x120&set=set1",
      "vatNumber": "8762409999",
      "country": "France",
      "website": "so-net.ne.jp",
      "fields": "n/a"
    },
    {
      "id": 81,
      "key": 81,
      "companyName": "Armstrong, Waelchi and Hayes",
      "companyPhone": "+33 (794) 809-0139",
      "companyPic": "https://robohash.org/estquiid.png?size=120x120&set=set1",
      "vatNumber": "5219427598",
      "country": "France",
      "website": "bbc.co.uk",
      "fields": "Health Care"
    },
    {
      "id": 82,
      "key": 82,
      "companyName": "Abbott and Sons",
      "companyPhone": "+33 (433) 492-7106",
      "companyPic": "https://robohash.org/mollitiaundeest.png?size=120x120&set=set1",
      "vatNumber": "4200822288",
      "country": "France",
      "website": "hc360.com",
      "fields": "Consumer Durables"
    },
    {
      "id": 83,
      "key": 83,
      "companyName": "Reichel and Sons",
      "companyPhone": "+49 (392) 547-9474",
      "companyPic": "https://robohash.org/laudantiumrepellatneque.png?size=120x120&set=set1",
      "vatNumber": "8299961637",
      "country": "Germany",
      "website": "google.it",
      "fields": "Finance"
    },
    {
      "id": 84,
      "key": 84,
      "companyName": "Legros LLC",
      "companyPhone": "+33 (798) 191-5516",
      "companyPic": "https://robohash.org/sedadenim.png?size=120x120&set=set1",
      "vatNumber": "9781534079",
      "country": "France",
      "website": "parallels.com",
      "fields": "Capital Goods"
    },
    {
      "id": 85,
      "key": 85,
      "companyName": "Bartell, Macejkovic and Cruickshank",
      "companyPhone": "+1 (251) 437-0547",
      "companyPic": "https://robohash.org/doloressitquaerat.png?size=120x120&set=set1",
      "vatNumber": "0742047458",
      "country": "United States",
      "website": "nifty.com",
      "fields": "Health Care"
    },
    {
      "id": 86,
      "key": 86,
      "companyName": "Lockman-Kovacek",
      "companyPhone": "+33 (287) 292-7530",
      "companyPic": "https://robohash.org/rerumdoloremquesit.png?size=120x120&set=set1",
      "vatNumber": "1184652120",
      "country": "France",
      "website": "businesswire.com",
      "fields": "Health Care"
    },
    {
      "id": 87,
      "key": 87,
      "companyName": "Shields, Howe and Bins",
      "companyPhone": "+1 (312) 969-9449",
      "companyPic": "https://robohash.org/velquiavoluptatum.png?size=120x120&set=set1",
      "vatNumber": "9228490012",
      "country": "United States",
      "website": "ted.com",
      "fields": "Transportation"
    },
    {
      "id": 88,
      "key": 88,
      "companyName": "Braun, Rolfson and Tillman",
      "companyPhone": "+34 (518) 219-8990",
      "companyPic": "https://robohash.org/nisimollitiaqui.png?size=120x120&set=set1",
      "vatNumber": "1958818437",
      "country": "Spain",
      "website": "smh.com.au",
      "fields": "n/a"
    },
    {
      "id": 89,
      "key": 89,
      "companyName": "Keeling-Boehm",
      "companyPhone": "+1 (615) 143-3632",
      "companyPic": "https://robohash.org/cupiditateautiusto.png?size=120x120&set=set1",
      "vatNumber": "0855444819",
      "country": "United States",
      "website": "illinois.edu",
      "fields": "n/a"
    },
    {
      "id": 90,
      "key": 90,
      "companyName": "Kuhic, Cormier and Rutherford",
      "companyPhone": "+1 (303) 850-8040",
      "companyPic": "https://robohash.org/nequeaperiamquasi.png?size=120x120&set=set1",
      "vatNumber": "4661790995",
      "country": "United States",
      "website": "tripod.com",
      "fields": "Consumer Services"
    },
    {
      "id": 91,
      "key": 91,
      "companyName": "Waelchi-Spencer",
      "companyPhone": "+33 (638) 163-0258",
      "companyPic": "https://robohash.org/etsedodit.png?size=120x120&set=set1",
      "vatNumber": "4151799540",
      "country": "France",
      "website": "europa.eu",
      "fields": "n/a"
    },
    {
      "id": 92,
      "key": 92,
      "companyName": "Waters, Spinka and Deckow",
      "companyPhone": "+1 (936) 615-2493",
      "companyPic": "https://robohash.org/fugaducimusfugiat.png?size=120x120&set=set1",
      "vatNumber": "0513702539",
      "country": "United States",
      "website": "ezinearticles.com",
      "fields": "Consumer Non-Durables"
    },
    {
      "id": 93,
      "key": 93,
      "companyName": "Von Inc",
      "companyPhone": "+33 (116) 757-0591",
      "companyPic": "https://robohash.org/aperiamconsequunturtemporibus.png?size=120x120&set=set1",
      "vatNumber": "4826737912",
      "country": "France",
      "website": "rakuten.co.jp",
      "fields": "Finance"
    },
    {
      "id": 94,
      "key": 94,
      "companyName": "Shanahan Inc",
      "companyPhone": "+1 (318) 103-8820",
      "companyPic": "https://robohash.org/maximedelectusdolore.png?size=120x120&set=set1",
      "vatNumber": "2482037697",
      "country": "United States",
      "website": "google.ru",
      "fields": "Health Care"
    },
    {
      "id": 95,
      "key": 95,
      "companyName": "Stokes-Lynch",
      "companyPhone": "+33 (380) 764-9396",
      "companyPic": "https://robohash.org/ipsaevenietqui.png?size=120x120&set=set1",
      "vatNumber": "5761525577",
      "country": "France",
      "website": "discuz.net",
      "fields": "Health Care"
    },
    {
      "id": 96,
      "key": 96,
      "companyName": "Hahn-Mitchell",
      "companyPhone": "+1 (954) 171-2696",
      "companyPic": "https://robohash.org/teneturporrolaudantium.png?size=120x120&set=set1",
      "vatNumber": "4802660162",
      "country": "United States",
      "website": "reverbnation.com",
      "fields": "Technology"
    },
    {
      "id": 97,
      "key": 97,
      "companyName": "Ullrich Inc",
      "companyPhone": "+1 (505) 106-9613",
      "companyPic": "https://robohash.org/velminusiure.png?size=120x120&set=set1",
      "vatNumber": "2792350857",
      "country": "United States",
      "website": "sciencedirect.com",
      "fields": "Energy"
    },
    {
      "id": 98,
      "key": 98,
      "companyName": "Mills, Cummings and Braun",
      "companyPhone": "+33 (136) 164-5474",
      "companyPic": "https://robohash.org/fugiatanimilaborum.png?size=120x120&set=set1",
      "vatNumber": "7851176824",
      "country": "France",
      "website": "free.fr",
      "fields": "n/a"
    },
    {
      "id": 99,
      "key": 99,
      "companyName": "Welch-Kunze",
      "companyPhone": "+33 (448) 933-8571",
      "companyPic": "https://robohash.org/velitexercitationemtotam.png?size=120x120&set=set1",
      "vatNumber": "1407890905",
      "country": "France",
      "website": "skyrock.com",
      "fields": "Basic Industries"
    },
    {
      "id": 100,
      "key": 100,
      "companyName": "Leannon LLC",
      "companyPhone": "+33 (573) 596-1162",
      "companyPic": "https://robohash.org/minusquiaea.png?size=120x120&set=set1",
      "vatNumber": "2843160251",
      "country": "France",
      "website": "opera.com",
      "fields": "Technology"
    }
  ] 

  const countries=[
    {
      "name": "Afghanistan",
      "flag": "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg"
    },
    {
      "name": "Åland Islands",
      "flag": "https://flagcdn.com/ax.svg"
    },
    { "name": "Albania", "flag": "https://flagcdn.com/al.svg" },
    { "name": "Algeria", "flag": "https://flagcdn.com/dz.svg" },
    {
      "name": "American Samoa",
      "flag": "https://flagcdn.com/as.svg"
    },
    { "name": "Andorra", "flag": "https://flagcdn.com/ad.svg" },
    { "name": "Angola", "flag": "https://flagcdn.com/ao.svg" },
    { "name": "Anguilla", "flag": "https://flagcdn.com/ai.svg" },
    {
      "name": "Antarctica",
      "flag": "https://flagcdn.com/aq.svg"
    },
    {
      "name": "Antigua and Barbuda",
      "flag": "https://flagcdn.com/ag.svg"
    },
    { "name": "Argentina", "flag": "https://flagcdn.com/ar.svg" },
    { "name": "Armenia", "flag": "https://flagcdn.com/am.svg" },
    { "name": "Aruba", "flag": "https://flagcdn.com/aw.svg" },
    { "name": "Australia", "flag": "https://flagcdn.com/au.svg" },
    { "name": "Austria", "flag": "https://flagcdn.com/at.svg" },
    {
      "name": "Azerbaijan",
      "flag": "https://flagcdn.com/az.svg"
    },
    { "name": "Bahamas", "flag": "https://flagcdn.com/bs.svg" },
    { "name": "Bahrain", "flag": "https://flagcdn.com/bh.svg" },
    {
      "name": "Bangladesh",
      "flag": "https://flagcdn.com/bd.svg"
    },
    { "name": "Barbados", "flag": "https://flagcdn.com/bb.svg" },
    { "name": "Belarus", "flag": "https://flagcdn.com/by.svg" },
    { "name": "Belgium", "flag": "https://flagcdn.com/be.svg" },
    { "name": "Belize", "flag": "https://flagcdn.com/bz.svg" },
    { "name": "Benin", "flag": "https://flagcdn.com/bj.svg" },
    { "name": "Bermuda", "flag": "https://flagcdn.com/bm.svg" },
    { "name": "Bhutan", "flag": "https://flagcdn.com/bt.svg" },
    {
      "name": "Bolivia (Plurinational State of)",
      "flag": "https://flagcdn.com/bo.svg"
    },
    {
      "name": "Bonaire, Sint Eustatius and Saba",
      "flag": "https://flagcdn.com/bq.svg"
    },
    {
      "name": "Bosnia and Herzegovina",
      "flag": "https://flagcdn.com/ba.svg"
    },
    { "name": "Botswana", "flag": "https://flagcdn.com/bw.svg" },
    {
      "name": "Bouvet Island",
      "flag": "https://flagcdn.com/bv.svg"
    },
    { "name": "Brazil", "flag": "https://flagcdn.com/br.svg" },
    {
      "name": "British Indian Ocean Territory",
      "flag": "https://flagcdn.com/io.svg"
    },
    {
      "name": "United States Minor Outlying Islands",
      "flag": "https://flagcdn.com/um.svg"
    },
    {
      "name": "Virgin Islands (British)",
      "flag": "https://flagcdn.com/vg.svg"
    },
    {
      "name": "Virgin Islands (U.S.)",
      "flag": "https://flagcdn.com/vi.svg"
    },
    {
      "name": "Brunei Darussalam",
      "flag": "https://flagcdn.com/bn.svg"
    },
    { "name": "Bulgaria", "flag": "https://flagcdn.com/bg.svg" },
    {
      "name": "Burkina Faso",
      "flag": "https://flagcdn.com/bf.svg"
    },
    { "name": "Burundi", "flag": "https://flagcdn.com/bi.svg" },
    { "name": "Cambodia", "flag": "https://flagcdn.com/kh.svg" },
    { "name": "Cameroon", "flag": "https://flagcdn.com/cm.svg" },
    { "name": "Canada", "flag": "https://flagcdn.com/ca.svg" },
    {
      "name": "Cabo Verde",
      "flag": "https://flagcdn.com/cv.svg"
    },
    {
      "name": "Cayman Islands",
      "flag": "https://flagcdn.com/ky.svg"
    },
    {
      "name": "Central African Republic",
      "flag": "https://flagcdn.com/cf.svg"
    },
    { "name": "Chad", "flag": "https://flagcdn.com/td.svg" },
    { "name": "Chile", "flag": "https://flagcdn.com/cl.svg" },
    { "name": "China", "flag": "https://flagcdn.com/cn.svg" },
    {
      "name": "Christmas Island",
      "flag": "https://flagcdn.com/cx.svg"
    },
    {
      "name": "Cocos (Keeling) Islands",
      "flag": "https://flagcdn.com/cc.svg"
    },
    { "name": "Colombia", "flag": "https://flagcdn.com/co.svg" },
    { "name": "Comoros", "flag": "https://flagcdn.com/km.svg" },
    { "name": "Congo", "flag": "https://flagcdn.com/cg.svg" },
    {
      "name": "Congo (Democratic Republic of the)",
      "flag": "https://flagcdn.com/cd.svg"
    },
    {
      "name": "Cook Islands",
      "flag": "https://flagcdn.com/ck.svg"
    },
    {
      "name": "Costa Rica",
      "flag": "https://flagcdn.com/cr.svg"
    },
    { "name": "Croatia", "flag": "https://flagcdn.com/hr.svg" },
    { "name": "Cuba", "flag": "https://flagcdn.com/cu.svg" },
    { "name": "Curaçao", "flag": "https://flagcdn.com/cw.svg" },
    { "name": "Cyprus", "flag": "https://flagcdn.com/cy.svg" },
    {
      "name": "Czech Republic",
      "flag": "https://flagcdn.com/cz.svg"
    },
    { "name": "Denmark", "flag": "https://flagcdn.com/dk.svg" },
    { "name": "Djibouti", "flag": "https://flagcdn.com/dj.svg" },
    { "name": "Dominica", "flag": "https://flagcdn.com/dm.svg" },
    {
      "name": "Dominican Republic",
      "flag": "https://flagcdn.com/do.svg"
    },
    { "name": "Ecuador", "flag": "https://flagcdn.com/ec.svg" },
    { "name": "Egypt", "flag": "https://flagcdn.com/eg.svg" },
    {
      "name": "El Salvador",
      "flag": "https://flagcdn.com/sv.svg"
    },
    {
      "name": "Equatorial Guinea",
      "flag": "https://flagcdn.com/gq.svg"
    },
    { "name": "Eritrea", "flag": "https://flagcdn.com/er.svg" },
    { "name": "Estonia", "flag": "https://flagcdn.com/ee.svg" },
    { "name": "Ethiopia", "flag": "https://flagcdn.com/et.svg" },
    {
      "name": "Falkland Islands (Malvinas)",
      "flag": "https://flagcdn.com/fk.svg"
    },
    {
      "name": "Faroe Islands",
      "flag": "https://flagcdn.com/fo.svg"
    },
    { "name": "Fiji", "flag": "https://flagcdn.com/fj.svg" },
    { "name": "Finland", "flag": "https://flagcdn.com/fi.svg" },
    { "name": "France", "flag": "https://flagcdn.com/fr.svg" },
    {
      "name": "French Guiana",
      "flag": "https://flagcdn.com/gf.svg"
    },
    {
      "name": "French Polynesia",
      "flag": "https://flagcdn.com/pf.svg"
    },
    {
      "name": "French Southern Territories",
      "flag": "https://flagcdn.com/tf.svg"
    },
    { "name": "Gabon", "flag": "https://flagcdn.com/ga.svg" },
    { "name": "Gambia", "flag": "https://flagcdn.com/gm.svg" },
    { "name": "Georgia", "flag": "https://flagcdn.com/ge.svg" },
    { "name": "Germany", "flag": "https://flagcdn.com/de.svg" },
    { "name": "Ghana", "flag": "https://flagcdn.com/gh.svg" },
    { "name": "Gibraltar", "flag": "https://flagcdn.com/gi.svg" },
    { "name": "Greece", "flag": "https://flagcdn.com/gr.svg" },
    { "name": "Greenland", "flag": "https://flagcdn.com/gl.svg" },
    { "name": "Grenada", "flag": "https://flagcdn.com/gd.svg" },
    {
      "name": "Guadeloupe",
      "flag": "https://flagcdn.com/gp.svg"
    },
    { "name": "Guam", "flag": "https://flagcdn.com/gu.svg" },
    { "name": "Guatemala", "flag": "https://flagcdn.com/gt.svg" },
    { "name": "Guernsey", "flag": "https://flagcdn.com/gg.svg" },
    { "name": "Guinea", "flag": "https://flagcdn.com/gn.svg" },
    {
      "name": "Guinea-Bissau",
      "flag": "https://flagcdn.com/gw.svg"
    },
    { "name": "Guyana", "flag": "https://flagcdn.com/gy.svg" },
    { "name": "Haiti", "flag": "https://flagcdn.com/ht.svg" },
    {
      "name": "Heard Island and McDonald Islands",
      "flag": "https://flagcdn.com/hm.svg"
    },
    {
      "name": "Vatican City",
      "flag": "https://flagcdn.com/va.svg"
    },
    { "name": "Honduras", "flag": "https://flagcdn.com/hn.svg" },
    { "name": "Hungary", "flag": "https://flagcdn.com/hu.svg" },
    { "name": "Hong Kong", "flag": "https://flagcdn.com/hk.svg" },
    { "name": "Iceland", "flag": "https://flagcdn.com/is.svg" },
    { "name": "India", "flag": "https://flagcdn.com/in.svg" },
    { "name": "Indonesia", "flag": "https://flagcdn.com/id.svg" },
    {
      "name": "Ivory Coast",
      "flag": "https://flagcdn.com/ci.svg"
    },
    {
      "name": "Iran (Islamic Republic of)",
      "flag": "https://flagcdn.com/ir.svg"
    },
    { "name": "Iraq", "flag": "https://flagcdn.com/iq.svg" },
    { "name": "Ireland", "flag": "https://flagcdn.com/ie.svg" },
    {
      "name": "Isle of Man",
      "flag": "https://flagcdn.com/im.svg"
    },
    { "name": "Israel", "flag": "https://flagcdn.com/il.svg" },
    { "name": "Italy", "flag": "https://flagcdn.com/it.svg" },
    { "name": "Jamaica", "flag": "https://flagcdn.com/jm.svg" },
    { "name": "Japan", "flag": "https://flagcdn.com/jp.svg" },
    { "name": "Jersey", "flag": "https://flagcdn.com/je.svg" },
    { "name": "Jordan", "flag": "https://flagcdn.com/jo.svg" },
    {
      "name": "Kazakhstan",
      "flag": "https://flagcdn.com/kz.svg"
    },
    { "name": "Kenya", "flag": "https://flagcdn.com/ke.svg" },
    { "name": "Kiribati", "flag": "https://flagcdn.com/ki.svg" },
    { "name": "Kuwait", "flag": "https://flagcdn.com/kw.svg" },
    {
      "name": "Kyrgyzstan",
      "flag": "https://flagcdn.com/kg.svg"
    },
    {
      "name": "Lao People's Democratic Republic",
      "flag": "https://flagcdn.com/la.svg"
    },
    { "name": "Latvia", "flag": "https://flagcdn.com/lv.svg" },
    { "name": "Lebanon", "flag": "https://flagcdn.com/lb.svg" },
    { "name": "Lesotho", "flag": "https://flagcdn.com/ls.svg" },
    { "name": "Liberia", "flag": "https://flagcdn.com/lr.svg" },
    { "name": "Libya", "flag": "https://flagcdn.com/ly.svg" },
    {
      "name": "Liechtenstein",
      "flag": "https://flagcdn.com/li.svg"
    },
    { "name": "Lithuania", "flag": "https://flagcdn.com/lt.svg" },
    {
      "name": "Luxembourg",
      "flag": "https://flagcdn.com/lu.svg"
    },
    { "name": "Macao", "flag": "https://flagcdn.com/mo.svg" },
    {
      "name": "North Macedonia",
      "flag": "https://flagcdn.com/mk.svg"
    },
    {
      "name": "Madagascar",
      "flag": "https://flagcdn.com/mg.svg"
    },
    { "name": "Malawi", "flag": "https://flagcdn.com/mw.svg" },
    { "name": "Malaysia", "flag": "https://flagcdn.com/my.svg" },
    { "name": "Maldives", "flag": "https://flagcdn.com/mv.svg" },
    { "name": "Mali", "flag": "https://flagcdn.com/ml.svg" },
    { "name": "Malta", "flag": "https://flagcdn.com/mt.svg" },
    {
      "name": "Marshall Islands",
      "flag": "https://flagcdn.com/mh.svg"
    },
    {
      "name": "Martinique",
      "flag": "https://flagcdn.com/mq.svg"
    },
    {
      "name": "Mauritania",
      "flag": "https://flagcdn.com/mr.svg"
    },
    { "name": "Mauritius", "flag": "https://flagcdn.com/mu.svg" },
    { "name": "Mayotte", "flag": "https://flagcdn.com/yt.svg" },
    { "name": "Mexico", "flag": "https://flagcdn.com/mx.svg" },
    {
      "name": "Micronesia (Federated States of)",
      "flag": "https://flagcdn.com/fm.svg"
    },
    {
      "name": "Moldova (Republic of)",
      "flag": "https://flagcdn.com/md.svg"
    },
    { "name": "Monaco", "flag": "https://flagcdn.com/mc.svg" },
    { "name": "Mongolia", "flag": "https://flagcdn.com/mn.svg" },
    {
      "name": "Montenegro",
      "flag": "https://flagcdn.com/me.svg"
    },
    {
      "name": "Montserrat",
      "flag": "https://flagcdn.com/ms.svg"
    },
    { "name": "Morocco", "flag": "https://flagcdn.com/ma.svg" },
    {
      "name": "Mozambique",
      "flag": "https://flagcdn.com/mz.svg"
    },
    { "name": "Myanmar", "flag": "https://flagcdn.com/mm.svg" },
    { "name": "Namibia", "flag": "https://flagcdn.com/na.svg" },
    { "name": "Nauru", "flag": "https://flagcdn.com/nr.svg" },
    { "name": "Nepal", "flag": "https://flagcdn.com/np.svg" },
    {
      "name": "Netherlands",
      "flag": "https://flagcdn.com/nl.svg"
    },
    {
      "name": "New Caledonia",
      "flag": "https://flagcdn.com/nc.svg"
    },
    {
      "name": "New Zealand",
      "flag": "https://flagcdn.com/nz.svg"
    },
    { "name": "Nicaragua", "flag": "https://flagcdn.com/ni.svg" },
    { "name": "Niger", "flag": "https://flagcdn.com/ne.svg" },
    { "name": "Nigeria", "flag": "https://flagcdn.com/ng.svg" },
    { "name": "Niue", "flag": "https://flagcdn.com/nu.svg" },
    {
      "name": "Norfolk Island",
      "flag": "https://flagcdn.com/nf.svg"
    },
    {
      "name": "Korea (Democratic People's Republic of)",
      "flag": "https://flagcdn.com/kp.svg"
    },
    {
      "name": "Northern Mariana Islands",
      "flag": "https://flagcdn.com/mp.svg"
    },
    { "name": "Norway", "flag": "https://flagcdn.com/no.svg" },
    { "name": "Oman", "flag": "https://flagcdn.com/om.svg" },
    { "name": "Pakistan", "flag": "https://flagcdn.com/pk.svg" },
    { "name": "Palau", "flag": "https://flagcdn.com/pw.svg" },
    {
      "name": "Palestine, State of",
      "flag": "https://flagcdn.com/ps.svg"
    },
    { "name": "Panama", "flag": "https://flagcdn.com/pa.svg" },
    {
      "name": "Papua New Guinea",
      "flag": "https://flagcdn.com/pg.svg"
    },
    { "name": "Paraguay", "flag": "https://flagcdn.com/py.svg" },
    { "name": "Peru", "flag": "https://flagcdn.com/pe.svg" },
    {
      "name": "Philippines",
      "flag": "https://flagcdn.com/ph.svg"
    },
    { "name": "Pitcairn", "flag": "https://flagcdn.com/pn.svg" },
    { "name": "Poland", "flag": "https://flagcdn.com/pl.svg" },
    { "name": "Portugal", "flag": "https://flagcdn.com/pt.svg" },
    {
      "name": "Puerto Rico",
      "flag": "https://flagcdn.com/pr.svg"
    },
    { "name": "Qatar", "flag": "https://flagcdn.com/qa.svg" },
    {
      "name": "Republic of Kosovo",
      "flag": "https://flagcdn.com/xk.svg"
    },
    { "name": "Réunion", "flag": "https://flagcdn.com/re.svg" },
    { "name": "Romania", "flag": "https://flagcdn.com/ro.svg" },
    {
      "name": "Russian Federation",
      "flag": "https://flagcdn.com/ru.svg"
    },
    { "name": "Rwanda", "flag": "https://flagcdn.com/rw.svg" },
    {
      "name": "Saint Barthélemy",
      "flag": "https://flagcdn.com/bl.svg"
    },
    {
      "name": "Saint Helena, Ascension and Tristan da Cunha",
      "flag": "https://flagcdn.com/sh.svg"
    },
    {
      "name": "Saint Kitts and Nevis",
      "flag": "https://flagcdn.com/kn.svg"
    },
    {
      "name": "Saint Lucia",
      "flag": "https://flagcdn.com/lc.svg"
    },
    {
      "name": "Saint Martin (French part)",
      "flag": "https://flagcdn.com/mf.svg"
    },
    {
      "name": "Saint Pierre and Miquelon",
      "flag": "https://flagcdn.com/pm.svg"
    },
    {
      "name": "Saint Vincent and the Grenadines",
      "flag": "https://flagcdn.com/vc.svg"
    },
    { "name": "Samoa", "flag": "https://flagcdn.com/ws.svg" },
    {
      "name": "San Marino",
      "flag": "https://flagcdn.com/sm.svg"
    },
    {
      "name": "Sao Tome and Principe",
      "flag": "https://flagcdn.com/st.svg"
    },
    {
      "name": "Saudi Arabia",
      "flag": "https://flagcdn.com/sa.svg"
    },
    { "name": "Senegal", "flag": "https://flagcdn.com/sn.svg" },
    { "name": "Serbia", "flag": "https://flagcdn.com/rs.svg" },
    {
      "name": "Seychelles",
      "flag": "https://flagcdn.com/sc.svg"
    },
    {
      "name": "Sierra Leone",
      "flag": "https://flagcdn.com/sl.svg"
    },
    { "name": "Singapore", "flag": "https://flagcdn.com/sg.svg" },
    {
      "name": "Sint Maarten (Dutch part)",
      "flag": "https://flagcdn.com/sx.svg"
    },
    { "name": "Slovakia", "flag": "https://flagcdn.com/sk.svg" },
    { "name": "Slovenia", "flag": "https://flagcdn.com/si.svg" },
    {
      "name": "Solomon Islands",
      "flag": "https://flagcdn.com/sb.svg"
    },
    { "name": "Somalia", "flag": "https://flagcdn.com/so.svg" },
    {
      "name": "South Africa",
      "flag": "https://flagcdn.com/za.svg"
    },
    {
      "name": "South Georgia and the South Sandwich Islands",
      "flag": "https://flagcdn.com/gs.svg"
    },
    {
      "name": "Korea (Republic of)",
      "flag": "https://flagcdn.com/kr.svg"
    },
    { "name": "Spain", "flag": "https://flagcdn.com/es.svg" },
    { "name": "Sri Lanka", "flag": "https://flagcdn.com/lk.svg" },
    { "name": "Sudan", "flag": "https://flagcdn.com/sd.svg" },
    {
      "name": "South Sudan",
      "flag": "https://flagcdn.com/ss.svg"
    },
    { "name": "Suriname", "flag": "https://flagcdn.com/sr.svg" },
    {
      "name": "Svalbard and Jan Mayen",
      "flag": "https://flagcdn.com/sj.svg"
    },
    { "name": "Swaziland", "flag": "https://flagcdn.com/sz.svg" },
    { "name": "Sweden", "flag": "https://flagcdn.com/se.svg" },
    {
      "name": "Switzerland",
      "flag": "https://flagcdn.com/ch.svg"
    },
    {
      "name": "Syrian Arab Republic",
      "flag": "https://flagcdn.com/sy.svg"
    },
    { "name": "Taiwan", "flag": "https://flagcdn.com/tw.svg" },
    {
      "name": "Tajikistan",
      "flag": "https://flagcdn.com/tj.svg"
    },
    {
      "name": "Tanzania, United Republic of",
      "flag": "https://flagcdn.com/tz.svg"
    },
    { "name": "Thailand", "flag": "https://flagcdn.com/th.svg" },
    {
      "name": "Timor-Leste",
      "flag": "https://flagcdn.com/tl.svg"
    },
    { "name": "Togo", "flag": "https://flagcdn.com/tg.svg" },
    { "name": "Tokelau", "flag": "https://flagcdn.com/tk.svg" },
    { "name": "Tonga", "flag": "https://flagcdn.com/to.svg" },
    {
      "name": "Trinidad and Tobago",
      "flag": "https://flagcdn.com/tt.svg"
    },
    { "name": "Tunisia", "flag": "https://flagcdn.com/tn.svg" },
    { "name": "Turkey", "flag": "https://flagcdn.com/tr.svg" },
    {
      "name": "Turkmenistan",
      "flag": "https://flagcdn.com/tm.svg"
    },
    {
      "name": "Turks and Caicos Islands",
      "flag": "https://flagcdn.com/tc.svg"
    },
    { "name": "Tuvalu", "flag": "https://flagcdn.com/tv.svg" },
    { "name": "Uganda", "flag": "https://flagcdn.com/ug.svg" },
    { "name": "Ukraine", "flag": "https://flagcdn.com/ua.svg" },
    {
      "name": "United Arab Emirates",
      "flag": "https://flagcdn.com/ae.svg"
    },
    {
      "name": "United Kingdom",
      "flag": "https://flagcdn.com/gb.svg"
    },
    {
      "name": "United States",
      "flag": "https://flagcdn.com/us.svg"
    },
    { "name": "Uruguay", "flag": "https://flagcdn.com/uy.svg" },
    {
      "name": "Uzbekistan",
      "flag": "https://flagcdn.com/uz.svg"
    },
    { "name": "Vanuatu", "flag": "https://flagcdn.com/vu.svg" },
    {
      "name": "Venezuela (Bolivarian Republic of)",
      "flag": "https://flagcdn.com/ve.svg"
    },
    { "name": "Vietnam", "flag": "https://flagcdn.com/vn.svg" },
    {
      "name": "Wallis and Futuna",
      "flag": "https://flagcdn.com/wf.svg"
    },
    {
      "name": "Western Sahara",
      "flag": "https://flagcdn.com/eh.svg"
    },
    { "name": "Yemen", "flag": "https://flagcdn.com/ye.svg" },
    { "name": "Zambia", "flag": "https://flagcdn.com/zm.svg" },
    { "name": "Zimbabwe", "flag": "https://flagcdn.com/zw.svg" }
  ]


  //Countries with phone numbers starting with +33
  document.getElementById("menu-item-1").addEventListener("click", function(e) {
  e.preventDefault();

  const newWindow = window.open();
  let contentHTML = "";

  for (const company of companies) {
    if (company.companyPhone.startsWith("+33")) {
      contentHTML += `
       <html>
       <head>
        <title>phoneNumber+33</title>
        </head>
        <body>
        <div>
          <li>${company.companyName}</li>
          <ul>Phone: ${company.companyPhone}</ul> <br>
        </div>
        </body>
        </html>
      `;
    }
  }
     newWindow.document.body.innerHTML = contentHTML;
});

//Companies not in the UK and the USA
document.getElementById("menu-item-2").addEventListener("click", function(e) {
    e.preventDefault();
  
    const filteredCompanies = companies.filter(company => {
      return company.country !== "United Kingdom" && company.country !== "United States";
    });
  
    const companiesList = filteredCompanies
      .map(company => `<li>${company.companyName} (${company.country})</li>`)
      .join("");
      const html = `
        <html>
        <head>
          <title>NotUK&USA</title>
        </head>
        <body>
          <h1>Not in the UK and the USA</h1>
          <ul>
            ${companiesList}
          </ul>
         </body>
         </html>
       `;
  const newWindow = window.open( );
  newWindow.document.write(html);
});

  //Companies ending with.com
  document.getElementById("menu-item-3").addEventListener("click", function(e) {
    e.preventDefault();
  
    const newWindow = window.open();
    let contentHTML = "";
  
    for (const company of companies) {
      if (company.website.endsWith(".com")) {
        contentHTML += `
         <html>
         <head>
          <title>Company with .com website</title>
          </head>
          <body>
          <div>
            <li>${company.companyName}</li>
            <li>Website: ${company.website}</li>
            <br>
          </div>
          </body>
          </html>
        `;
      }
    }
       newWindow.document.body.innerHTML = contentHTML;
  });
  
//Phone number starting with +44 companies and picture and country flag
document.getElementById("menu-item-4").addEventListener("click", function(e) {
  e.preventDefault();

  const newWindow = window.open();
  let contentHTML = "";

  for (const company of companies) {
    if (company.companyPhone.startsWith("+44")) {
      const country = countries.find(country => country.name === company.country);
      contentHTML += `
        <html>
        <head>
          <title>PhoneNumber+44&Picture-flag</title>
        </head>
        <body>
          <div>
            <li>${company.companyName}</li>
            <ul>Phone: ${company.companyPhone}</ul>
            <img src="${company.companyPic}" alt="${company.companyName} logo">
            <img src="${country.flag}"  width="130" height="130" alt="Flag of ${country.name}"> <br>
          </div>
        </body>
        </html>
      `;
    }
  }
  newWindow.document.body.innerHTML = contentHTML;
});
