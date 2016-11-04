angular.module('starter.controllers', [])

        .controller('AppCtrl', function ($scope, $ionicModal, $timeout, $translate, $location,$ionicPopup) {

            // With the new view caching in Ionic, Controllers are only called
            // when they are recreated or on app start, instead of every page change.
            // To listen for when this page is active (for example, to refresh data),
            // listen for the $ionicView.enter event:
            //$scope.$on('$ionicView.enter', function(e) {
            //});

            // Form data for the login modal
            $scope.languages = [{"key": "en", "value": "English"}, {"key": "mal", "value": "മലയാളം"}];
            $scope.slang = "mal";
            $scope.loginData = {};

            // Create the login modal that we will use later
            $scope.changeLanguage = function (key) {
                $translate.use(key);
                $scope.slang = key;
            };
            $scope.p = {};
            $scope.selectpost = function (post) {
                $scope.p = post;
                $location.path('/app/details/' + post.id);
            }
            $scope.comments = [{"id": 27, "support": true, "w_comment": "This is very sad and it needs to be investigated ", "created": "19-10-2016 11:18:42 am", "userid": 92,
                    "support":"yes", "username": "Manojgd", "nickname": "Pillai ", "displaypic": "/img/delorean.jpg"},
                {"id": 27, "w_comment": "This is a regular issue at their.", "created": "19-10-2016 09:53:30 am", "userid": 32, "username": "faris",
                    "support": "no", "nickname": "mhmd", "displaypic": "/img/venkman.jpg"},
                {"id": 24, "w_comment": "This issue shoud be investigate.", "created": "05-10-2016 05:07:33 pm", "userid": 4, "username": "Jose paul", "support": "no", "nickname": "FBN", "displaypic": "/img/stantz.jpg"},
                {"id": 24, "w_comment": "വികാംഗരുടെ പരാതികൾ/ പോസ്റ്റുകൾക്ക് ഈ ആപ്പിൽ ഒരു മുൻഗണന കൊടുക്കണമെന്നാണ് എന്റെ അഭിപ്രായം. ഈ പരാതിയുമായി ബന്ധപ്പെട്ട് ഒരു തീരുമാനം എത്രയും പെട്ടന്ന് ഉണ്ടാകുമെന്ന് പ്രതീക്ഷിക്കുന്നു .", "created": "29-09-2016 12:03:41 am", "userid": 15, "username": "Anuroopa",
                    "support": "no", "nickname": "MYSTERY", "displaypic": "/img/tully.jpg"}];

            $scope.loadcomments = function () {

                return $scope.comments.filter(function (value) {
                    return value.id == $scope.p.id
                });

            }
            $scope.orderby='id';
            $scope.changeorder=function(o){
                 $scope.orderby=o;
            }
            $scope.showmessage=function(){
                 var confirmPopup = $ionicPopup.confirm({
    title: 'Message',
     template: 'This feature only available in mobile application.Please download the lates application.'
   });

   confirmPopup.then(function(res) {
     if(res) {
        $location.path('/app/installapp');
     } else {
       console.log('You are not sure');
     }
   });
            };
        })

        .controller('home', function ($scope) {
            
            $scope.posts = [
                {"id": 27,
                    "title": "Had to bribe to get my Marriage Registration Certificate",
                    "description": "I was at the Chalakudy Marriage Registration office and almost everyone I came across from the lady issuing forms to the lady printing in the details for the filling of the marriage certificate , everybody took a bribe . Nobody has their name badges on display so I could not get their names but I am willing to identify them if any action needs to be initiated .",
                    "latitude": 8.5241391,
                    "longitude": 76.9366376,
                    "locationname": "Chalakudy",
                    "share": "10",
                    "likes": "12",
                    "commentscount": "2",
                    "views": "12",
                    "status": "published",
                    "thumbnail": "/img/marriage.jpg",
                    "created": "07-10-2016 09:19:36 am",
                    "userid": 62,
                    "fullname": "RAJEEV",
                    "userpic": "https://tse3.mm.bing.net/th?id=OIP.M29b27c66a9789934b64ab8d13cdead9cH2&pid=15.1&P=0&w=207&h=156",
                    "districtname": "Thrissur",
                    "districtcode": "TV",
                    "department": null,
                    "departmentid": null,
                    "attachments": {"audios": [],
                        "videos": [], "images": [], "docs": []}, "likedtype": null, "attachmentscount":
                            {"images": 0, "videos": 0, "audio": 0, "docs": 0}}, 
                {"id": 24, "title": "ഇതിലും കൈ ഇട്ടു വാരി..", "description": "കൊടുങ്ങല്ലൂർ മുൻസിപാലിറ്റിയിൽ നിന്നും വികലാഗർക്ക് കൊടുത്ത മുചക്രവാഹനം 900 കിലോമീറ്റർ ഓടിയപ്പോഴേക്കും പിന്നിലെ രണ്ട് ടയറും തേഞ്ഞ് റ്റൂബ് പുറത്തേക്ക് വന്നു. ഗുണ നിലവാരം കുറഞ്ഞ ടയറുകളും,ബയറിങ്ങുകളും ഫിറ്റു ചെയ്തു അഴിമതി നടത്തിയവരെ നിയമത്തിനു മുന്നിൽ കൊണ്ടുവരാൻ ഈ #പോസ്റ്റ് ഒരോരുത്തരും പരമാവധി ഷെയർ ചെയ്യുക. വികലാഗരോട് കാണിക്കുന്ന ഈ കൊടും ക്രൂരത ലോകമറിയട്ടെ...", "latitude": 10.2244298, "longitude": 76.1977737, "locationname": "Kodungallur", "shares": "13", "likes": "1k", "commentscount": "2", "views": "1k", "status": "published", "thumbnail": "http://3.imimg.com/data3/UF/QO/MY-2/maestro-scooter-for-handicapped-500x500.jpg", "created": "24-09-2016 07:04:29 pm", "userid": 30, "fullname": "Rahul", "userpic": "https://tse3.mm.bing.net/th?id=OIP.Mdc3f20d506e831d67f522e96feef9b37o1&pid=15.1&P=0&w=300&h=300", "districtname": "Thrissur", "districtcode": "TH", "department": null, "departmentid": null, "attachments": {"audios": [], "videos": [], "images": [{"url": "http://52.10.15.74:8000/images/Qsn9GIulgE_1474724069546.jpg", "id": 56, "otherinfo": "{\"mimetype\":\"image\",\"mitmetypefulll\":\"image/jpeg\",\"filetype\":\"jpg\",\"filename\":\"Qsn9GIulgE_1474724069546.jpg\",\"path\":\"http://52.10.15.74:8000/images/Qsn9GIulgE_1474724069546.jpg\",\"filesize\":88322}", "mediatype": "image"}], "docs": []}, "likedtype": null, "attachmentscount": {"images": 1, "videos": 0, "audio": 0, "docs": 0}},
                {"id": 25, "title": "Bribe paid of 20,000 for Flat registration in Kochi", "description": "The bribe was paid at Sub registrar office in Kochi.The flat was built as per regulations but got to know without bribe they would not register the flat", "latitude": 10.2244298, "longitude": 76.1977737, "locationname": "Kochi", "share": "0", "likes": "9", "commentscount": "0", "views": "0", "status": "published", "thumbnail": "http://madhyamam.com/en/sites/default/files/imagecache/w604/govt-employee-kerala.jpg", "created": "24-09-2016 07:04:29 pm", "userid": 30, "fullname": "Akhil", "userpic": "http://data1.whicdn.com/images/11633406/large.jpg", "districtname": "Ernakulam", "districtcode": "TH", "department": null, "departmentid": null, "attachments": {"audios": [], "videos": [], "images": [{"url": "http://52.10.15.74:8000/images/Qsn9GIulgE_1474724069546.jpg", "id": 56, "otherinfo": "{\"mimetype\":\"image\",\"mitmetypefulll\":\"image/jpeg\",\"filetype\":\"jpg\",\"filename\":\"Qsn9GIulgE_1474724069546.jpg\",\"path\":\"http://52.10.15.74:8000/images/Qsn9GIulgE_1474724069546.jpg\",\"filesize\":88322}", "mediatype": "image"}], "docs": []}, "likedtype": null, "attachmentscount": {"images": 1, "videos": 0, "audio": 0, "docs": 0}}, 
                {"id": 23, "title": "Police Verification for passport.", "description": "I have applied for passport, with all necessary documents that are authentic and accepted by Regional Passport Office in Ernakulam.The police constable came for Police verification of my passort approval, and I gave him my bank passbook  and house lease agreement as proof of address. He was arguing that the passbook cannot be considered as address proof and was not ready to pass my verification. I paid Rs. 500 bribe, after which everything went on smooth and he walked out saying that the passport will be sent the next day.", "latitude": 9.9563746, "longitude": 76.3014896, "locationname": "Kadavanthra", "share": "3", "likes": "9", "commentscount": "0", "views": "10", "status": "published", "thumbnail": "http://52.10.15.74:8000/images/kKBXa5YCnu_1474615174379.jpg", "created": "23-09-2016 12:49:34 pm", "userid": 22, "fullname": "Jerry", "userpic": "https://tse3.mm.bing.net/th?id=OIP.Mdc3f20d506e831d67f522e96feef9b37o1&pid=15.1&P=0&w=300&h=300", "districtname": "Kannur", "districtcode": "KN", "department": null, "departmentid": null, "attachments": {"audios": [], "videos": [], "images": [{"url": "http://52.10.15.74:8000/images/A5UDvl3rvG_1474615174377.jpg", "id": 55, "otherinfo": "{\"mimetype\":\"image\",\"mitmetypefulll\":\"image/jpeg\",\"filetype\":\"jpg\",\"filename\":\"A5UDvl3rvG_1474615174377.jpg\",\"path\":\"http://52.10.15.74:8000/images/A5UDvl3rvG_1474615174377.jpg\",\"filesize\":112892}", "mediatype": "image"}], "docs": []}, "likedtype": "like", "attachmentscount": {"images": 1, "videos": 0, "audio": 0, "docs": 0}}];
        })


