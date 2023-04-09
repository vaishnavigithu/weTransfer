function goToPricingPage(){
    document.getElementById('pricingPage').style.display='block';
    document.getElementById('signup-form').style.display='none';
    document.getElementById('login-form').style.display='none';
    document.getElementById('company').style.display='none';
} 
function goToLoginPage(){
    document.getElementById('login-form').style.display='block';
    document.getElementById('signup-form').style.display='none';
    document.getElementById('pricingPage').style.display='none';
    document.getElementById('company').style.display='none';
} 
function goToSignUpPage(){
    document.getElementById('signup-form').style.display='block';
    document.getElementById('login-form').style.display='none';
    document.getElementById('pricingPage').style.display='none';
    document.getElementById('company').style.display='none';
}
function goToCompanyPage(){
    document.getElementById('company').style.display='block';
    document.getElementById('login-form').style.display='none';
    document.getElementById('signup-form').style.display='none';
    document.getElementById('pricingPage').style.display='none';
    document.getElementById('navBar').style.display='none';
}