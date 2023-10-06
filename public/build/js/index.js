
(function () {
    const notifications = document.querySelectorAll(".notification");

    window.addEventListener("DOMContentLoaded" , () => {
        notificationsCount();
        notiActionsActive();
        allRead();
    });

    function notiActionsActive () {
    
        notifications.forEach(notification => {
            const point = notification.querySelector('.notification_point');
    
            const notiName = notification.querySelector(".notification_name");
            const notiAction = notification.querySelector(".notification_action");
            const notiMessage = notification.querySelector(".notification_message");
            const notiImgComment = notification.querySelector(".notification_img-comment");
    
            notiName.addEventListener("click", () => {
                removeClasses([notification, point]);
                notificationsCount();
            });
    
    
            if(notiAction) {
                notiAction.addEventListener("click", () => {
                    removeClasses([notification, point]);
                    notificationsCount();
                });
            }
    
            if(notiMessage) {
                notiMessage.addEventListener("click", () => {
                    removeClasses([notification, point]);
                    notificationsCount();
                });
            }
    
            if(notiImgComment) {
                notiImgComment.addEventListener("click", () => {
                    removeClasses([notification, point]);
                    notificationsCount();
                });
            }
        });
    }

    function allRead () {
        const allRead = document.querySelector("#all_read");
        
        allRead.addEventListener("click", () => {
            notifications.forEach(notification => {
                const point = notification.querySelector('.notification_point');

                removeClasses([notification, point]);
                notificationsCount();
            });
        });
    }

    function notificationsCount () {
        const actives = document.querySelectorAll(".activo-bg").length || 0;
        const amount = document.querySelector("#amount");

        amount.textContent = actives;
    }

    const removeClasses = (elements) => {
        elements[0].classList.remove("activo-bg");
        elements[1].classList.remove("activo-point");
    }
})()