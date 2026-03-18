
const loan_amount = document.getElementById('loan_amount');
const loan_tenure = document.getElementById('tenure_months');
const yearly_interested = document.getElementById('roi_yearly');
const emi = document.getElementById('emi');
// const butten = document.getElementById('#emibtn');







// butten.addEventListener('click', () => {
    // Get the value of the input element
    // const loaninputValue = loan_amount.value;
    // const loan_tenureinputValue = loan_tenure.value;
    // const yearly_interestedinputValue = yearly_interested.value;
    // Display the value in the output paragraph
    // const totalemi = loaninputValue*loan_tenureinputValue*yearly_interestedinputValue;
    // emi.textContent = `You entered: ${totalemi} `;
    // emi.value = `hello emi`;
// });


// const inputElement = document.getElementById('nameInput');

// Select the button element
const buttonElement = document.getElementById('getValueButton');

// Select the output element
const outputElement = document.getElementById('output');

// Add a click event listener to the button
buttonElement.addEventListener('click', () => {
    // Get the value of the input element
    // const inputValue = inputElement.value;

    // Display the value in the output paragraph
    // outputElement.textContent = `You entered: ${inputValue}`;
    // Get the value of the input element
    const loaninputValue = loan_amount.value;
    const loan_tenureinputValue = loan_tenure.value;
    const yearly_interestedinputValue = yearly_interested.value;
    // Display the value in the output paragraph
    const totalemi = loaninputValue*loan_tenureinputValue*yearly_interestedinputValue;
    
    
    
    emi.value = `${totalemi}`;
});




// Loan Eligibility Calculator js
const monthly_income = document.getElementById('monthly_income');
const tenure_month_3 = document.getElementById('tenure_month-3');
const roi_yearly_3 = document.getElementById('roi_yearly-3');
const principal = document.getElementById('principal');
// const butten = document.getElementById('#emibtn');







// butten.addEventListener('click', () => {
    // Get the value of the input element
    // const loaninputValue = loan_amount.value;
    // const loan_tenureinputValue = loan_tenure.value;
    // const yearly_interestedinputValue = yearly_interested.value;
    // Display the value in the output paragraph
    // const totalemi = loaninputValue*loan_tenureinputValue*yearly_interestedinputValue;
    // emi.textContent = `You entered: ${totalemi} `;
    // emi.value = `hello emi`;
// });


// const inputElement = document.getElementById('nameInput');

// Select the button element
const buttonElement_3 = document.getElementById('getprincipledue');

// Select the output element
// const outputElement = document.getElementById('output');

// Add a click event listener to the button
buttonElement_3.addEventListener('click', () => {
    // Get the value of the input element
    // const inputValue = inputElement.value;

    // Display the value in the output paragraph
    // outputElement.textContent = `You entered: ${inputValue}`;
    // Get the value of the input element
    const monthly_incomeValue = monthly_income.value;
    const tenure_month_3Value = tenure_month_3.value;
    const roi_yearly_3Value = roi_yearly_3.value;
    // Display the value in the output paragraph
    const totalemi_3 = monthly_incomeValue*tenure_month_3Value*roi_yearly_3Value;
    
    
    
    principal.value = `${totalemi_3}`;
});





// --------------------------------------


// var formApp = angular.module("formApp", []);

// function roundOff(X) {
//     return Math.round(X * 100) / 100;
// }

// formApp.controller('emiController', ['$scope', '$http', '$filter', function($scope, $http, $filter) {
//     $scope.emi = {
//         principal: "",
//         tenure: "",
//         roi: "",
//         emi: ""
//     };
//     $scope.calculateEmi = function() {
//         var roi = parseFloat($scope.emi.roi) / 1200;
//         if (parseFloat($scope.emi.principal) > 0 && parseFloat($scope.emi.tenure) > 0 && parseFloat($scope.emi.roi) > 0) {
//             $scope.emi.emi = $filter('indianCurrenyFormat')(Math.floor(parseFloat($scope.emi.principal) * roi / (1 - (Math.pow(1 / (1 + roi), parseFloat($scope.emi.tenure))))));
//         }
//         $("#loan_amount").focus();
//     }
//     $scope.clearEmi = function() {
//         $scope.emi = {
//             principal: "",
//             tenure: "",
//             roi: "",
//             emi: ""
//         };
//         $("#loan_amount").focus();
//     }
// }]);

// formApp.controller('eligibilityController', ['$scope', '$http', '$filter', function($scope, $http, $filter) {
//     $scope.emi = {
//         principal: "",
//         tenure: "",
//         roi: "",
//         emi: "",
//         otheremis: "",
//         income: "",
//         netemi: ""
//     };

//     function payingAbility() {
//         var income = parseFloat($scope.emi.income);
//         var otheremis = parseFloat($scope.emi.otheremis);
//         var emi = 0;

//         if (income <= 25000) {
//             emi = income * 0.4;
//             $scope.emi.netemi = income * 0.4 - otheremis;
//         } else if (income > 25000 && income <= 50000) {
//             $scope.emi.emi = income * 0.45;
//             $scope.emi.netemi = income * 0.45 - otheremis;
//         } else if (income > 50000 && income <= 100000) {
//             $scope.emi.emi = income * 0.5;
//             $scope.emi.netemi = income * 0.5 - otheremis;
//         } else if (income > 100000) {
//             $scope.emi.emi = income * 0.55;
//             $scope.emi.netemi = income * 0.55 - otheremis;
//         }
//         $scope.emi.emi = Math.floor($scope.emi.emi);
//         $scope.emi.netemi = Math.floor($scope.emi.netemi);
//         //$scope.emi.netemi = $filter('indianCurrenyFormat')($scope.emi.netemi);
//     }

//     $scope.otherEmisChanged = function() {
//         payingAbility();
//     }

//     $scope.incomeChanged = function() {
//         payingAbility();
//     }

//     $scope.calculatePrincipal = function() {
//         var roi = parseFloat($scope.emi.roi) / 1200;
//         payingAbility();
//         var income = parseFloat($scope.emi.income);
//         var tenure = parseFloat($scope.emi.tenure);
//         var netemi = parseFloat($scope.emi.netemi);
//         if (income > 0 && tenure > 0 && netemi > 0 && roi > 0) {
//             $scope.emi.principal = $filter('indianCurrenyFormat')(Math.floor((netemi) * (1 - (Math.pow(1 / (1 + roi), tenure))) / roi));
//         }
//         $("#monthly_income").focus();
//     }

//     $scope.clearEmi = function() {
//         $scope.emi = {
//             principal: "",
//             tenure: "",
//             roi: "",
//             emi: "",
//             otheremis: "",
//             income: "",
//             netemi: ""
//         };
//         $("#monthly_income").focus();
//     }
// }]);



// formApp.controller('areaController', ['$scope', '$http', function($scope, $http) {
//     $scope.area = {
//         acre: "",
//         vigha: "",
//         sqft: "",
//         sqmt: "",
//         sqyr: ""
//     };
//     $scope.factor = {
//         acre: 0.00002295,
//         vigha: 0.000039966,
//         sqft: 1,
//         sqmt: 0.093,
//         sqyr: 0.1111111112
//     };
//     $scope.ready = {
//         acre: false,
//         vigha: false,
//         sqft: false,
//         sqmt: false,
//         sqyr: false
//     };

//     $scope.calculateArea = function() {
//         var inputKey = "";
//         for (var key in $scope.area) {
//             if ($scope.area.hasOwnProperty(key)) {
//                 if ($scope.area[key].length > 0) {
//                     inputKey = key;
//                 }
//             }
//         }
//         console.log("inputKey: " + inputKey);
//         for (var key in $scope.area) {
//             if ($scope.area.hasOwnProperty(key)) {
//                 if (key != inputKey) {
//                     $scope.area[key] = new Number($scope.area[inputKey] * $scope.factor[key] / $scope.factor[inputKey]).toFixed(4);
//                     console.log("$scope.area[key]: " + $scope.area[key]);
//                 }
//             }
//         }
//     }

//     $scope.disableOthers = function() {
//         var inputKey = "";
//         for (var key in $scope.area) {
//             if ($scope.area.hasOwnProperty(key)) {
//                 if ($scope.area[key].length > 0) {
//                     inputKey = key;
//                 }
//             }
//         }
//         if (inputKey.length > 0) {
//             for (var key in $scope.area) {
//                 if ($scope.area.hasOwnProperty(key)) {
//                     if ($scope.area[key].length === 0) {
//                         $scope.ready[key] = true;
//                     }
//                 }
//             }
//         }
//     }


//     $scope.clearArea = function() {
//         $scope.area = {
//             acre: "",
//             vigha: "",
//             sqft: "",
//             sqmt: "",
//             sqyr: ""
//         };
//         for (var key in $scope.area) {
//             if ($scope.area.hasOwnProperty(key)) {
//                 $scope.ready[key] = false;
//             }
//         }
//     }

// }]);


// formApp.controller('nsFormController', ['$scope', '$http', function($scope, $http) {

//     var formType = $("#nsFormType").attr("class");
//     $scope.nsForm = {};



//     if (formType != null) {
//         $scope.getBlank = function() {
//             $http.get("/api/form/" + formType, {}).then(function(data) {
//                 $scope.nsForm = data.data;
//                 console.log("Blank form: " + angular.toJson($scope.nsForm, true));
//             }, function(error) {

//             });
//         }
//     }


//     $scope.getBlank();

//     $scope.save = function() {
//         $scope.nsForm.coreId = $("#nsCoreId").attr("class");
//         $scope.nsForm.reference = window.location.href;
//         console.log("Filled up form: " + angular.toJson($scope.nsForm, true));
//         $http.post("/api/newsletterform", $scope.nsForm, {}).then(
//             function(data) {
//                 $("#ns-message .success").show();
//                 $(".toHideOnSubmit").hide();
//             },
//             function(error) {
//                 $("#ns-message .failure").show();
//             });
//     }
// }]);


// formApp.filter('indianCurrenyFormat', function() {

//     return function(input) {
//         console.log("Input: " + input)
//         var inputString = input.toString();
//         console.log("InputString: " + inputString)
//         var inputArray = inputString.split("");
//         console.log("InputArray: " + inputArray);
//         var response;

//         if (!isNaN(input)) {
//             switch (inputArray.length) {
//                 case 4:
//                     inputArray.splice(1, 0, ",");
//                     break;
//                 case 5:
//                     inputArray.splice(2, 0, ",");
//                     break;
//                 case 6:
//                     inputArray.splice(1, 0, ",");
//                     inputArray.splice(5, 0, ",");
//                     break;
//                 case 7:
//                     inputArray.splice(2, 0, ",");
//                     inputArray.splice(5, 0, ",");
//                     break;
//                 case 8:
//                     inputArray.splice(1, 0, ",");
//                     inputArray.splice(4, 0, ",");
//                     inputArray.splice(7, 0, ",");
//                     break;
//                 case 9:
//                     inputArray.splice(2, 0, ",");
//                     inputArray.splice(5, 0, ",");
//                     inputArray.splice(8, 0, ",");
//                     break;
//             }
//             console.log(inputArray);
//             response = inputArray.join('');
//         }

//         return response;

//     };

// })