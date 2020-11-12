window.addEventListener('load', () => {
    let checkbox = document.getElementsByTagName('input');
    let notif = document.getElementById('like-notif');

    const checkBoxCheck = () => {
        for(let i = 0; i < checkbox.length; i++){
            if(checkbox[i].checked){
                return true;
            }
        }
        return false;
    };

    const setNotif = () => {
        if(checkBoxCheck()){
            notif.style.visibility = 'visible';
            notif.style.opacity = '1';
        } else {
            notif.style.visibility = 'hidden';
            notif.style.opacity = '0';
        }
    };

    setNotif();
    
});